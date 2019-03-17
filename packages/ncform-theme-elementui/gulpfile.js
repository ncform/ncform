const gulp = require("gulp");
const path = require("path");
const rm = require("rimraf");
const webpack = require("webpack");
const url = require("url");
const querystring = require("querystring");
const browserSync = require("browser-sync").create();

const config = require("./conf/config");
const webpackConfig = require("./conf/webpack.config");

const { reload } = browserSync;

/* ====================== functions ====================== */

function handleErrors(err, stats) {
  if (err) {
    console.error(err.details);
  }

  if (stats) {
    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      })
    );
  }
}

function webpackBuild(done) {
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      handleErrors(err, stats);
    } else {
      console.log(
        stats.toString({
          chunks: false, // Makes the build much quieter
          colors: true // Shows colors in the console
        })
      );
      done();
    }
  });
}

function watchBuild() {
  gulp.watch(["src/**/*"], webpackBuild);
}

function clean(cb) {
  rm(config.dist, () => cb());
}

function watch() {
  gulp.watch(["src/**/*"], cb => {
    webpackBuild(reload);
    cb();
  });
}

function serve() {
  function startServer() {
    delete require.cache[require.resolve("./mock/data")];
    const mockConfig = require("./mock/data");
    browserSync.init({
      server: ".",
      index: "examples/index.html",
      port: 3002,
      logLevel: "debug",
      logPrefix: "VC",
      ghostMode: false, // 禁止同步机制
      open: true,
      middleware: Object.keys(mockConfig).map(route => ({
        route,
        handle: (req, res) => {
          let body = [];
          req
            .on("data", chunk => {
              body.push(chunk);
            })
            .on("end", () => {
              body = JSON.parse(Buffer.concat(body).toString() || "{}");
              const query = querystring.parse(url.parse(req.url).query);
              const params = Object.assign(body, query);
              const resData =
                typeof mockConfig[route] === "function"
                  ? mockConfig[route](params)
                  : mockConfig[route];
              res.write(
                typeof resData === "string" ? resData : JSON.stringify(resData)
              );
              res.end();
            });
        }
      }))
    });
  }

  startServer();

  gulp.watch(path.join(config.root, "mock/data.js")).on("change", () => {
    browserSync.exit();
    startServer();
  });
}

/* ====================== gulp tasks ====================== */

exports.build = gulp.series(clean, webpackBuild);

exports["watch-build"] = watchBuild;

exports.dev = gulp.series(webpackBuild, gulp.parallel(serve, watch));

exports.default = exports.build;
