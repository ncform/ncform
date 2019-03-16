const gulp = require("gulp");
const loadPlugins = require("gulp-load-plugins");
const del = require("del");
const glob = require("glob");
const path = require("path");
const { Instrumenter } = require("isparta");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

const mochaGlobals = require("./test/setup/.globals");
const manifest = require("./package.json");

// Load all of our Gulp plugins
const $ = loadPlugins();

// Gather the library data from `package.json`
const config = manifest.babelBoilerplateOptions;
const mainFile = manifest.main;
const destinationFolder = path.dirname(mainFile);
const exportFileName = config.mainVarName;

function cleanDist(done) {
  del([destinationFolder]).then(() => done());
}

function cleanTmp(done) {
  del(["tmp"]).then(() => done());
}

function build() {
  return gulp
    .src(path.join("src", config.entryFileName))
    .pipe(
      webpackStream({
        mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
        output: {
          filename: `${exportFileName}.js`,
          libraryTarget: "umd",
          library: config.mainVarName
        },
        module: {
          rules: [
            // {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
            { test: /\.js$/, loader: "babel-loader" }
          ]
        },
        devtool: "source-map"
      })
    )
    .pipe(gulp.dest(destinationFolder))
    .pipe($.filter(["**", "!**/*.js.map"]))
    .pipe($.rename(`${exportFileName}.min.js`))
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.uglify())
    .pipe($.sourcemaps.write("./"))
    .pipe(gulp.dest(destinationFolder));
}

function _mocha() {
  return gulp
    .src(["test/setup/node.js", "test/unit/**/*.js"], { read: false })
    .pipe(
      $.mocha({
        reporter: "dot",
        globals: Object.keys(mochaGlobals.globals),
        ignoreLeaks: false
      })
    );
}

function _registerBabel() {
  require("babel-register");
}

function test() {
  _registerBabel();
  return _mocha();
}

function coverage(done) {
  _registerBabel();
  gulp
    .src(["src/**/*.js"])
    .pipe(
      $.istanbul({
        instrumenter: Instrumenter,
        includeUntested: true
      })
    )
    .pipe($.istanbul.hookRequire())
    .on("finish", () =>
      test()
        .pipe($.istanbul.writeReports())
        .on("end", done)
    );
}

const watchFiles = ["src/**/*", "test/**/*", "package.json", "**/.eslintrc"];

// Run the headless unit tests as you make changes.
function watch() {
  gulp.watch(watchFiles, ["test"]);
}

function watchBuild() {
  gulp.watch(watchFiles, ["build"]);
}

function testBrowser() {
  // Our testing bundle is made up of our unit tests, which
  // should individually load up pieces of our application.
  // We also include the browser setup file.
  const testFiles = glob.sync("./test/unit/**/*.js");
  const allFiles = ["./test/setup/browser.js"].concat(testFiles);

  // Lets us differentiate between the first build and subsequent builds
  let firstBuild = true;

  // This empty stream might seem like a hack, but we need to specify all of our files through
  // the `entry` option of webpack. Otherwise, it ignores whatever file(s) are placed in here.
  return gulp
    .src("")
    .pipe($.plumber())
    .pipe(
      webpackStream(
        {
          watch: true,
          entry: allFiles,
          output: {
            filename: "__spec-build.js"
          },
          externals: {
            axios: {
              root: "axios",
              commonjs2: "axios",
              commonjs: "axios",
              amd: "axios"
            }
          },
          // Externals isn't necessary here since these are for tests.
          module: {
            rules: [
              // This is what allows us to author in future JavaScript
              // {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
              { test: /\.js$/, loader: "babel-loader" },
              // This allows the test setup scripts to load `package.json`
              {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json-loader"
              }
            ]
          },
          plugins: [
            // By default, webpack does `n=>n` compilation with entry files. This concatenates
            // them into a single chunk.
            new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
          ],
          devtool: "inline-source-map"
        },
        null,
        () => {
          if (firstBuild) {
            $.livereload.listen({
              port: 35729,
              host: "localhost",
              basePath: ".",
              start: true
            });
            gulp.watch(watchFiles, ["lint"]);
          } else {
            $.livereload.reload("./tmp/__spec-build.js");
          }
          firstBuild = false;
        }
      )
    )
    .pipe(gulp.dest("./tmp"));
}

// Remove the built files
gulp.task("clean", cleanDist);

// Remove our temporary files
gulp.task("clean-tmp", cleanTmp);

// Build two versions of the library
// gulp.task('build', ['clean'], build);
gulp.task("build", ["clean"], build);

// Set up coverage and run tests
gulp.task("coverage", coverage);

// Set up a livereload environment for our spec runner `test/runner.html`
gulp.task("test-browser", ["clean-tmp"], testBrowser);

// Run the headless unit tests as you make changes.
gulp.task("watch", watch);

gulp.task("watch-build", watchBuild);

// An alias of test
gulp.task("default", ["test"]);
