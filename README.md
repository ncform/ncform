# ncform

![vue 2.5](https://img.shields.io/badge/vue-2.5-green.svg)

ncform，一种令人愉悦的表单开发方式，仅需配置即可生成表单UI及其交互行为。

![preview](http://daniel-test.image.alimmdn.com/ncform/ncform-preview?spm=a312x.7755591.0.0.502b4e08Lxgnuv)

## Playground

在 [Playground](https://vipshop.github.io/ncform/ncform-show/playground/index.html) 体验一下ncform的魅力，可加深你对ncform的了解

> [Playground](https://vipshop.github.io/ncform/ncform-show/playground/index.html) 展示了ncform大部分的使用场景例子（I believe the example is the best document），建议先仔细浏览下，例子中的配置实际开发中一般都可以直接使用滴

## Quick Start

### In node.js

1.install
```
npm i @ncform/ncform @ncform/ncform-common --save
npm i @ncform/ncform-theme-elementui element-ui --save 
```

2.import
```
import Vue from 'vue';
import vueNcform from '@ncform/ncform';

import 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ncformStdComps from '@ncform/ncform-theme-elementui';

Vue.use(vueNcform, { extComponents: ncformStdComps });
```

3.usage
```
# demo.vue

<template>
  <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
  <el-button @click="submit()">Submit</el-button>
</template>
<script>
  export default {
    data() {
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
  }
</script>
```

### In a browser

```
<html>

<head>
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.4.3/lib/theme-chalk/index.css">
</head>

<body>
  <div id="demo">
    <ncform :form-schema="formSchema" form-name="your-form-name" v-model="formSchema.value" @submit="submit()"></ncform>
    <el-button @click="submit()">Submit</button>
  </div>

  <script type="text/javascript" src="path/to/vue/dist/vue.min.js"></script>

  <script type="text/javascript" src="path/to/@ncform/ncform-common/dist/ncformCommon.min.js"></script>
  <script type="text/javascript" src="path/to/@ncform/ncform/dist/vueNcform.min.js"></script>

  <script type="text/javascript" src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script type="text/javascript" src="path/to/@ncform/ncform-theme-elementui/dist/ncformStdComps.min.js"></script>

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

- [ncform config](./CONFIG.md)

- [Standard Components](./STD-COMP.md)

- [How to extend](./EXT-DOC.md)

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

![json-schema sample](http://daniel-test.image.alimmdn.com/ncform/jsonschema-sample@400w?spm=a312x.7755591.0.0.502b4e08LPhKHt)

- ncform例子：

![ncform sample](http://daniel-test.image.alimmdn.com/ncform/ncform-sample@400w?spm=a312x.7755591.0.0.502b4e08LPhKHt)

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

## 设计思想

ncform = ncform容器 + ncform主题标准组件

![design](http://daniel-test.image.alimmdn.com/ncform/design.png)

一个系统项目，一般都会使用一种UI库（如vue）及其之上的UI实现方案（如elementui）
为了与之和平共处，ncform的标准组件可采用与之一致的UI实现方案

ncform Vue版默认提供了elementui主题的标准组件[【点击查看】](https://vipshop.github.io/ncform/ncform-theme-elementui/index.html)

如果你是iview的粉丝，通过遵循ncform标准组件的规范开发iview主题的标准组件即可

思想：把各种主题的标准组件“丢进”ncform容器，就是一个可配的表单开发利器

## Schema Generator

通过 [Schema Generator](https://vipshop.github.io/ncform/ncform-show/schema-gen/index.html)，可以加速你写form schema的速度

## 参考项目

- [json-schema](http://json-schema.org/)
- [jsonform](https://github.com/joshfire/jsonform)
- [json-editor](https://github.com/jdorn/json-editor)
- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form)
- [angular-schema-form](https://github.com/json-schema-form/angular-schema-form)

## 作者

- 肖玮（Daniel.xiao），ncform的设计者和主要实现者
- 罗振考（Kyle.lo），ncform表单校验部分的实现者和标准组件的主力开发者
