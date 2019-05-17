const cp = require("child_process");
const ghPages = require("gh-pages");
const ora = require("ora");
const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

const rootPath = process.cwd();
const docPath = path.join(rootPath, "docs");
const docTempPath = path.join(docPath, "_book");

const ncformShowRoot = path.join(rootPath, "packages", "ncform-show");
const ncformShowDocPath = path.join(ncformShowRoot, "examples", "components");
const docTempPathNcformShow = path.join(docTempPath, "ncform-show");

const ncformThemeRoot = path.join(
  rootPath,
  "packages",
  "ncform-theme-elementui"
);
const ncformThemeDocPath = path.join(ncformThemeRoot, "examples");
const docTempPathNcformTheme = path.join(docTempPath, "ncform-theme-elementui");

function replaceMinJs(jsNameParam) {
  let jsName = jsNameParam;
  ["ncformCommon.js", "vueNcform.js", "ncformStdComps.js"].forEach(item => {
    jsName = jsName.replace(item, item.replace(".js", ".min.js"));
  });
  return jsName;
}

function clean() {
  console.info("Clean doc temp dir");
  fs.emptyDirSync(docTempPath);
}

function buildAllLibs() {
  console.info("Building ncform lib...");
  cp.execSync(`cd ${rootPath}/packages/ncform && npm run release`);

  console.info("Building ncform-common lib...");
  cp.execSync(`cd ${rootPath}/packages/ncform-common && npm run build`);

  console.info("Building ncform-theme-elementui lib...");
  cp.execSync(
    `cd ${rootPath}/packages/ncform-theme-elementui && npm run release`
  );

  console.info("Building ncform-show lib...");
  cp.execSync(`cd ${rootPath}/packages/ncform-show && npm run build`);
}

function genNcformShowDoc() {
  console.info("Processing ncform-show...");

  fs.ensureDirSync(path.join(docTempPathNcformShow, "assets"));

  // 复制examples目录内容
  fs.copySync(ncformShowDocPath, docTempPathNcformShow);

  function copyAndReplace(dirName) {
    // 复制用到的静态资源
    let htmlContent = fs.readFileSync(
      path.join(docTempPathNcformShow, dirName, "index.html"),
      "utf8"
    );
    const matchResults = htmlContent.match(/(src|href)=['"](.*?)['"]/g);
    matchResults.forEach(itemUrl => {
      if (itemUrl.search(/node_modules/) >= 0) {
        let sourcePath = itemUrl.replace(/(.*node_modules|['"]+)/g, "");
        sourcePath = replaceMinJs(sourcePath);
        const fileName = path.basename(sourcePath);
        fs.copyFileSync(
          path.join(ncformShowRoot, "node_modules", sourcePath),
          path.join(docTempPathNcformShow, "assets", fileName)
        );
      } else if (itemUrl.search(/\.\.\/dist\//) >= 0) {
        const sourcePath = itemUrl.replace(/(.*dist|['"]+)/g, "");
        const fileName = path.basename(sourcePath);
        fs.copyFileSync(
          path.join(ncformShowRoot, "dist", sourcePath),
          path.join(docTempPathNcformShow, "assets", fileName)
        );
      }
    });

    // 替换静态资源路径
    htmlContent = htmlContent.replace(
      /(src|href)=['"]..\/.*?([^/]*)['"]/g,
      '$1="../assets/$2"'
    );
    htmlContent = replaceMinJs(htmlContent);
    fs.writeFileSync(
      path.join(docTempPathNcformShow, dirName, "index.html"),
      htmlContent,
      "utf8"
    );
  }

  // 一些漏掉的静态资源
  fs.copySync(
    path.join(
      ncformShowRoot,
      "node_modules",
      "element-ui",
      "lib",
      "theme-chalk",
      "fonts"
    ),
    path.join(docTempPathNcformShow, "assets", "fonts")
  );

  ["playground", "schema-gen"].forEach(dirName => copyAndReplace(dirName));

  console.info("Processing ncform-show done.");
}

function genNcformThemeElementuiDoc() {
  console.info("Processing ncform-theme-elementui...");

  // 文档需要单独的layout和control源码
  console.info("Building all layouts and controls...");
  cp.execSync(`cd ${rootPath}/packages/ncform-theme-elementui && npm run build`);

  fs.ensureDirSync(path.join(docTempPathNcformTheme, "assets"));

  // 复制examples目录内容
  fs.copySync(ncformThemeDocPath, docTempPathNcformTheme);

  // 复制静态资源
  [
    "lodash/lodash.min.js",
    "axios/dist/axios.min.js",
    "@ncform/ncform-common/dist/ncformCommon.min.js",
    "@ncform/ncform/dist/vueNcform.min.js",
    "element-ui/lib/theme-chalk/index.css"
  ].forEach(item => {
    const fileName = path.basename(item);
    fs.copySync(
      path.join(ncformThemeRoot, "node_modules", item),
      path.join(docTempPathNcformTheme, "assets", fileName)
    );
  });

  // 复制其它静态资源
  fs.copySync(
    path.join(
      ncformThemeRoot,
      "node_modules",
      "element-ui",
      "lib",
      "theme-chalk",
      "fonts"
    ),
    path.join(docTempPathNcformTheme, "assets", "fonts")
  );

  // 复制dist目录
  fs.copySync(
    path.join(ncformThemeRoot, "dist"),
    path.join(docTempPathNcformTheme, "assets", "dist")
  );

  // 替换HTML
  let htmlContent = fs.readFileSync(
    path.join(docTempPathNcformTheme, "index.html"),
    "utf8"
  );
  htmlContent = htmlContent
    .replace(/(src|href)=['"]..\/.*?([^/]*)['"]/g, '$1="assets/$2"')
    .replace(/\/examples\//g, "");
  htmlContent = replaceMinJs(htmlContent);
  fs.writeFileSync(
    path.join(docTempPathNcformTheme, "index.html"),
    htmlContent,
    "utf8"
  );

  glob(
    path.join(
      docTempPathNcformTheme,
      "@(control-comps|layout-comps)",
      "*.html"
    ),
    (err, files) => {
      files.forEach(file => {
        let fileContent = fs.readFileSync(file, "utf8");
        fileContent = fileContent
          .replace(
            /(src|href)=['"]..\/..\/node_modules.*?([^/]*)['"]/g,
            '$1="../assets/$2"'
          )
          .replace(
            /(src|href)=['"]..\/..\/dist.*?([^/]*)['"]/g,
            '$1="../assets/dist/$2"'
          );
        fileContent = replaceMinJs(fileContent);
        fs.writeFileSync(file, fileContent, "utf8");
      });
    }
  );
}

function publish() {
  // cp.exec('npm run docs', err => {
  //   if (!err) {
  //     ghPages.publish('./docs/_book', err => {
  //       if (!err) {
  //         spinner.succeed('Publish successfully.')
  //       } else {
  //         spinner.fail(err)
  //       }
  //     })
  //   } else {
  //     spinner.fail(err)
  //   }
  // })

  const spinner = ora("Publishing gitbooks...").start();
  ghPages.publish("./docs/_book", err => {
    if (!err) {
      spinner.succeed("Publish successfully.");
    } else {
      spinner.fail(err);
    }
  });
}

function main() {
  clean();

  buildAllLibs();

  genNcformShowDoc();

  genNcformThemeElementuiDoc();

  publish();
}

main();
