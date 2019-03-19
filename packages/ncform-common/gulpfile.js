const gulp = require("gulp");
const loadPlugins = require("gulp-load-plugins");
const del = require("del");
const path = require("path");
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

function build() {
  return gulp
    .src(path.join("src", config.entryFileName))
    .pipe(
      webpackStream({
        mode:
          process.env.NODE_ENV === "production" ? "production" : "development",
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

function test() {
  return _mocha();
}

const watchFiles = ["src/**/*", "test/**/*", "package.json", "**/.eslintrc"];

// Run the headless unit tests as you make changes.
function watch() {
  gulp.watch(watchFiles, test);
}

function watchBuild() {
  gulp.watch(watchFiles, build);
}

// Build two versions of the library
exports.build = gulp.series(cleanDist, build);

exports.watch = watch;

exports["watch-build"] = watchBuild;

exports.default = exports.build;
