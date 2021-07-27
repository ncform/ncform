# ncform

[![CircleCI](https://img.shields.io/circleci/project/github/ncform/ncform/master.svg)](https://circleci.com/gh/ncform/ncform/tree/master)
![vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg)
![license MIT](https://img.shields.io/npm/l/vue.svg)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/enxoqt/runs)
[![Gitter](https://img.shields.io/badge/GITTER-JOIN%20CHAT%20%E2%86%92-ff69b4.svg?style=flat-square)](https://gitter.im/ncform/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

[English Version](README.md)

<img src="docs/images/ncform-banner.gif" alt="preview" style="max-width:100%;box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important">

ncform，一种令人愉悦的表单开发方式，仅需配置即可生成表单UI及其交互行为。

自带丰富的 **标准组件** 和 **校验规则**，开箱即用。

具备强大的 **控件交互** 和 **扩展能力**，做你所想。

> 如果你犹豫不决，你可以阅读这篇文章：[如何选型](https://github.com/ncform/ncform/wiki/%E8%AE%A9%E5%89%8D%E7%AB%AF%E5%B0%8F%E5%A7%90%E5%A7%90%E6%84%89%E5%BF%AB%E5%9C%B0%E5%BC%80%E5%8F%91%E8%A1%A8%E5%8D%95)

[![Playground](docs/images/playground-1.jpg)](https://ncform.github.io/ncform/ncform-show/playground/index.html)

---

- 目录
  - [Playground](#Playground)
  - [Quick Start](#Quick-Start)
    - [In node.js](#In-nodejs)
    - [In browser](#In-browser)
  - [特性](#特性)
  - [📄文档](#文档)
  - [解决痛点](#解决痛点)
  - [重复造轮子？](#重复造轮子)
  - [为什么不用标准的json-schema？](#为什么不用标准的json-schema)
  - [dx表达式](#dx表达式)
  - [设计思想](#设计思想)
  - [Schema Generator](#Schema-Generator)
  - [❤️赞助支持](#赞助支持)
  - [贡献](#贡献)

## Playground

在 [Playground](https://ncform.github.io/ncform/ncform-show/playground/index.html) 体验一下ncform的魅力，可加深你对ncform的了解

> [Playground](https://ncform.github.io/ncform/ncform-show/playground/index.html) 展示了ncform大部分的使用场景例子（I believe the example is the best document），建议先仔细浏览下，例子中的配置实际开发中一般都可以直接使用滴

## Quick Start

### In node.js

1.install
```
npm i @ncform/ncform @ncform/ncform-common --save
npm i @ncform/ncform-theme-elementui element-ui axios --save 
```

2.import
```
import Vue from 'vue';
import vueNcform from '@ncform/ncform';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ncformStdComps from '@ncform/ncform-theme-elementui';
import axios from 'axios';

Vue.use(Element);
Vue.use(vueNcform, { extComponents: ncformStdComps });
window.$http = Vue.prototype.$http = axios;
```

3.usage
```
# demo.vue

<template>
  <div>
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
    <el-button @click="submit()">Submit</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        }
      }
    }
  },
  methods: {
    submit () {
      this.$ncformValidate('your-form-name').then(data => {
        if (data.result) {
          console.log(this.$data.formSchema.value)
          // do what you like to do
        }
      })
    }
  }
}
</script>
```
可参考[ncform-demo](https://github.com/daniel-dx/ncform-demo)项目

### In browser

```
<html>

<head>
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.4.3/lib/theme-chalk/index.css">
</head>

<body>
  <div id="demo">
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
    <el-button @click="submit()">Submit</el-button>
  </div>

  <script type="text/javascript" src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <script type="text/javascript" src="https://unpkg.com/@ncform/ncform-common/dist/ncformCommon.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@ncform/ncform/dist/vueNcform.min.js"></script>

  <script type="text/javascript" src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script type="text/javascript" src="https://unpkg.com/@ncform/ncform-theme-elementui/dist/ncformStdComps.min.js"></script>

  <script type="text/javascript">
    Vue.use(vueNcform, { extComponents: ncformStdComps });

    // Bootstrap the app
    new Vue({
      el: '#demo',
      data: {
        formSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            }
          }
        }
      },
      methods: {
        submit() {
          this.$ncformValidate('your-form-name').then(data => {
            if (data.result) {
              // do what you like to do
            }
          });
        }
      }
    });
  </script>
</body>

</html>
```

## 特性

- 配置生成：一个JSON数据结构完整描述一个表单的UI及其交互行为，表单的开发工作就完成了

- 灵活互动：通过强大的`dx表达式`，表单控件可灵活与其它表单控件进行互动

- 标准组件：ncform定义了一套标准的表单组件配置规范，未经扩展即可满足你90%以上的表单开发需求

- 校验丰富：自带常用的十几种验证规则，满足你90%以上的表单验证需求

- 扩展友好：表单的组件和校验规则都可灵活扩展，并且提供了工具简化扩展工作

## 文档

- [ncform config / props / api / event](./CONFIG.md)

- [标准组件预览版本](https://ncform.github.io/ncform/ncform-theme-elementui/index.html) / [标准组件文字版](./STD-COMP_CN.md)

- [如何扩展 表单控件 / 校验规则](./EXT-DOC.md)

- [I18N](./I18N.md)

## 解决痛点

后台管理系统中绝大部分的功能不是查询列表，就是录入表单。  
表单的开发是一种无趣的，无营养的，高消耗的重复体力活，费时费力。  
表单控件间的交互功能，表单项的校验规则，都极容易产生“八哥”。  
SO，为了提高表单开发效率，减少失误，提高表单规范和健壮性，最重要，提高开发人员的开发幸福感，项目因此而生

## 重复造轮子？

圈子里比较有名的类似方案（参考项目列举的几个），存在以下一个或多个的问题：

1. 基本完全按照json-schema来设计，而仅用json-schmea来描述一个表单并不合适

2. 对于表单项之间的关联交互，复杂的验证逻辑，没有很好的解决方案

3. 无法仅提供一份配置就完成所有表单的UI及交互行为（意义在于配置可储存）

4. 默认提供的基础组件不够丰富，难以覆盖实际开发中常用的表单组件

5. 很久没维护，代码编写风格过于久远，难于扩展

6. 组件扩展问题：当前主流的组件实现方案是Vue和React，没有友好的方案，需要使用者自行扩展支持

为了解决以上问题，走上了造轮子之路。。。

## 为什么不用标准的json-schema？

因为json-schema是面向数据(data)而非表单(ui)，对于声明一个表单不太友好。  

对于一个表单，关心的是有哪些表单项，表单项长啥样，校验规则怎样，这些都跟字段相关，在一处管理最直观

来个简单的对比：

- json-schema例子：

![json-schema sample](docs/images/json-schema-sample.jpg)

- ncform例子：

![ncform schema sample](docs/images/ncform-schema-sample.jpg)

json-schema对于验证规则，声明在各个地方，不好管理。而ncform都集中在rules。这种设计也便于后面开发表单制作IDE

## dx表达式：

通过`dx`表达式，你可以通过`{{$root.xxx}}`取得指定字段的值，然后用原生的JS书写你的任意逻辑表达式

- 指定对象中的属性值，例子：
```
disabled: 'dx: {{$root.person.age}} < 18'
```

- 指定数组中的某一项的值，例子：
```
disabled: 'dx: {{$root.persons[0].age}} < 18'
```

- 指定数组中同一项的属性，例子：
```
disabled: 'dx: {{$root.persons[i].age}} < 18'
disabled: 'dx: {{$root.persons[i + 1].age}} < 18'
```

- 访问全局配置中的常量数据，例子:

```
disabled: 'dx: {{$root.person.age}} === {{$const.max}}'

// 全局配置如下：
globalConfig: {
  constants: { max: 18 }
}
```

> dx表达式也可用 `函数` 代替：

function(formData, constData, selfData, tempData, itemIdxChain) { ... }

- formData：对应于 `{{$root}}`。表单的数据
- constData: 对应于 `{{$const}}`。全局配置中的常量数据
- selfData：对应于 `{{$self}}`。只用于 `ui.preview.value`，指代本身的值
- tempData：对应于 `{{$temp}}`。临时存储的值
- itemIdxChain：仅对数组项有用，指代当前所在的数组的索引路径，如[1, 0]

一些常见的例子如下：

```
// 一般对象属性
disabled: function(formData) {
  return formData.person.age < 18;
}

// 数组项
disabled: function(formData, constData, selfData, tempData, itemIdxChain) {
  const [ i ] = itemIdxChain;
  return formData.persons[i].age < 18;
}

// 全局常量
disabled: function(formData, constData) {
  return formData.person.age < constData.max;
}
```


## 设计思想

ncform = ncform容器 + ncform主题标准组件

![design](docs/images/design.png)

一个系统项目，一般都会使用一种UI库（如vue）及其之上的UI实现方案（如elementui）
为了与之和平共处，ncform的标准组件可采用与之一致的UI实现方案

ncform Vue版默认提供了elementui主题的标准组件[【点击查看】](https://ncform.github.io/ncform/ncform-theme-elementui/index.html)

如果你是iview的粉丝，通过遵循ncform标准组件的规范开发iview主题的标准组件即可

思想：把各种主题的标准组件“丢进”ncform容器，就是一个可配的表单开发利器

## Schema Generator

通过 [Schema Generator](https://ncform.github.io/ncform/ncform-show/schema-gen/index.html)，可以加速你写form schema的速度

你也可以尝试这个第三方的 VSCode 插件: [vscode-plugin-ncform-schema](https://github.com/F-loat/vscode-plugin-ncform-schema/)

## 参考项目

- [json-schema](http://json-schema.org/)
- [jsonform](https://github.com/joshfire/jsonform)
- [json-editor](https://github.com/jdorn/json-editor)
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)
- [angular-schema-form](https://github.com/json-schema-form/angular-schema-form)

## 作者

- [Daniel.xiao](https://github.com/daniel-dx) ：ncform的设计者和主要实现者
- Kyle.lo ：ncform表单校验部分的实现者和标准组件的主力开发者

## 贡献者

<table><tr><td align="center"><a href="https://github.com/daniel-dx"><img src="https://avatars3.githubusercontent.com/u/22042268?s=460&v=4"width="100px;"alt="daniel.xiao"/><br/><sub><b>daniel.xiao</b></sub></a><br/><a href="https://github.com/daniel-dx"title="Author">☺️</a></td><td align="center"><a href="https://github.com/Kyleloh"><img src="https://avatars3.githubusercontent.com/u/5841513?s=460&v=4"width="100px;"alt="Kyleloh"/><br/><sub><b>Kyleloh</b></sub></a><br/><a href="https://github.com/Kyleloh"title="Developer">💻</a></td><td align="center"><a href="https://github.com/liuxuewei"><img src="https://avatars3.githubusercontent.com/u/1960603?s=460&v=4"width="100px;"alt="liuxuewei"/><br/><sub><b>liuxuewei</b></sub></a><br/><a href="#financial"title="Financial supporter">💵</a></td><td align="center"><a href="https://github.com/woodytechnology"><img src="https://avatars.githubusercontent.com/u/47734092?s=200&v=4"width="100px;"alt="woodytechnology"/><br/><sub><b>woodytechnology</b></sub></a><br/><a href="#financial"title="Financial supporter">💵</a></td></tr></table>

## 赞助支持

ncform 是MIT许可的开源项目，完全免费使用。 如果它对你有用，也许你可以请我一杯咖啡:)。

### 一次性支持

[![](docs/images/paypal.jpg)](https://paypal.me/danieldx666)

[![](docs/images/wechat-pay-logo.png)](docs/images/wechat-pay.jpg)

[![](docs/images/alipay-logo.png)](docs/images/alipay-pay.jpg)

### 每月支持

[通过 Patreon 成为支持者或赞助者](https://www.patreon.com/ncform)

## 贡献
请阅读 [贡献](contributing.md) 指南.
