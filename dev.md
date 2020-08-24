## 开发方法
* node 版本使用10.22.0
* 在根目录执行  npm install
* 开四个窗口分别运行
```
cd packages/ncform && npm install && npm run watch-build
cd packages/ncform-common && npm install && npm run watch-build
cd packages/ncform-show && npm install && npm run watch-build
cd packages/ncform-theme-elementui && npm install && npm run watch-build
```
* 在根目录执行 npm run build 完成相关项目的打包
* 单个组件开发测试

执行cd packages/ncform-theme-elementui && npm run  dev会打开测试页面, 可以在测试页面针对单个组件进行开发测试,
但是最新安装的依赖../../node_modules/@ncform/ncform/dist/vueNcform.js文件不存在只有.min.js文件,复制一份重命名为*.js即可

复制*.js
```shell script
cp ncform/packages/ncform-theme-elementui/node_modules/@ncform/ncform/dist/vueNcform.min.js ncform/packages/ncform-theme-elementui/node_modules/@ncform/ncform/dist/vueNcform.js 
cp ncform/packages/ncform-show/node_modules/@ncform/ncform-theme-elementui/dist/ncformStdComps.min.js ncform/packages/ncform-show/node_modules/@ncform/ncform-theme-elementui/dist/ncformStdComps.js
cp ncform/packages/ncform-show/node_modules/@ncform/ncform/dist/vueNcform.min.js ncform/packages/ncform-show/node_modules/@ncform/ncform/dist/vueNcform.js
```


