[English Version](CONFIG.md)

- 目录
  - [Schema](#ncform-schema)
  - [Props](#ncform-props)
  - [API](#ncform-API)
  - [Event](#ncform-event)

## ncform schema

```js
{
  type: 'object', // 根节点。只能是 object
  properties: {
    <filed name>: {
      
      /* 数据 */
      type: 'string', // 数据类型。可选：string / number / integer / boolean / object / array / HTML / COMP 
      // 注意：大写的类型为特殊只读类型，一般使用场景为显示一个分隔栏。该数据在提交表单时会自动过滤掉
      // HTML: 配置 value，值为一段HTML【支持dx表达式】; 
      // COMP: 配置 ui.widget 和 ui.widgetConfig
      
      value: '', // 字段值
      default: '', // 字段默认值。value为空时取该值 
      valueTemplate: '', // 值模板。根据提供的 dx表达式 动态计算 value 的值

      /* UI */
      ui: {

        columns: 6, // 占用列数，共12列。【支持dx表达式】
        label: '', // 标签内容【支持dx表达式】
        showLabel: true, // 是否显示标签（注意：当为 false 时，依然占着空间）
        noLabelSpace: false, // 标签是否不占空间，优先级比showLabel高
        legend: '', // 标题内容，当 widget 为 object，array 等布局时有效【支持dx表达式】
        showLegend: true, // 是否显示标题。
        description: '', // 描述信息【支持dx表达式】
        placeholder: '', // 占位内容【支持dx表达式】
        disabled: false, // 是否禁用【支持dx表达式】
        readonly: false, // 是否只读【支持dx表达式】
        hidden: false, // 是否隐藏【支持dx表达式】
        help: { // 帮助信息
          show: true, // 是否显示。默认不显示
          content: '', // 帮助具体内容【支持dx表达式】 
          iconCls: '', // 帮助图标样式名
          text: '' // 帮助文本【支持dx表达式】
        },
        itemClass: '', // 表单项样式名
        preview: { // 预览
          type: '', // 预览类型。可选值：video / audio / image / link
          value: '', // 默认值: 'dx: {{$self}}'【支持dx表达式】
          clearable: false, // 是否显示删除按钮
          outward: { // 外观，仅 type=image 时有效
            width: 0, // 宽度，0代表无限制
            height: 0, // 高度，0代表无限制
            shape: '', // 外观形状。可选值：空值 / rounded / circle / ，默认值为空
          }
        },
        linkFields: [ // 关联字段。当值发生变化时，会触发关联字段的一些动作，比如校验
          {
            fieldPath: '', // 关联项字段路径。如：'user.name'，'user[i].name'
            rules: [], // 校验规则名，如：['required']
          }
        ],

        /* 渲染组件 */
        widget: '', // 渲染组件名
        widgetConfig: {}, // 组件配置
      },

      /* 验证规则 */
      rules: {

        // 所有验证规则都有两种赋值形式：
        // 简单版：<rule name>: <rule value>。如 required: true，minimum: 10
        // 详细版：<rule name>: { value: <rule value>, errMsg: '', options: { deplay: xxx, delayMsg: '' } }。如以下 required 示例

        // for Any Instance Type
        required: {
          value: true, // 规则配置值
          errMsg: 'it is required!', // 错误提示信息【支持dx表达式】
          options: { // 可选项
            delay: 300, // 延迟验证的时间（毫秒）
            delayMsg: '异步验证中..' // 延迟验证时的提示【支持dx表达式】
          }
        },
        number, // value:boolean
        ajax, // value：{ remoteUrl: '<url>', method: '<get or post>', paramName: '<请求参数名，值为控件的值>', otherParams: {} }

        // for Numeric Instances 
        minimum, // value: number
        maximum, // value: number
        multipleOf, // value: number
        exclusiveMaximum, // value: number
        exclusiveMinimum, // value: number

        // for Strings
        url, // value: boolean
        tel, // value: boolean
        ipv4, // value: boolean
        ipv6, // value: boolean       
        email, // value: boolean
        pattern, // value: string。 如 "\\d+"
        hostname, // value: boolean
        dateTime, // value: boolean
        maxLength, // value: number
        minLength, // value: number

        // for Arrays
        contains, // value: any
        maxItems, // value: number
        minItems, // value: number
        uniqueItems, // value: boolean

        // for Objects
        maxProperties, // value: number
        minProperties, // value: number

        /* 自定义的验证规则 */
        customRule: [{
          script: '', // 【支持dx表达式】
          errMsg: '', // 验证错误信息
          linkItems: [ // 当触发校验时，同时触发这些关联项的 customRule 规则校验（ 建议使用 ui.linkFields 来替代 ）
            {
              fieldPath: '', // 关联项字段路径。如：'user.name'，'user[i].name'
              customRuleIdx: 0 // 触发该项的 customRule 的索引项规则
            }
          ]
        }]
      },
    }
  },
  globalConfig: { // 全局配置
    ignoreRulesWhenHidden: true, // 当控件隐藏时自动忽略掉其验证规则，即隐藏的控件验证规则不生效。默认为true
    style: { // 全局样式配置
      formCls: '', // 添加到 form 的样式
      invalidFeedbackCls: '', // 错误提示消息的样式 
    },
    constants: { // 全局常量配置，可在dx表达中通过{{$const.}}来访问，如{{$const.userName}}
      userName: 'daniel'
    },
    scrollToFailField: { // 自动滚动到校验失败的字段
      enabled: true, // 是否开启
      container: 'body', // 滚动的容器。
      duration: 500, // 滚动动画的持续时间(以毫秒为单位)
      offset: -80, // 滚动时的偏移量
    }
  }
}

```

## ncform props

- form-schema

用于描述表单的schema配置数据，具体数据结构请参考[ncform schema](#ncform-schema)

```
// Demo code
<ncform :form-schema="formSchema"></ncform>
```

- form-name

表单名称，当使用部分 [ncform API](#ncform-api) 时需要提供该值

```
// Demo code
<ncform form-name="your-form-name"></ncform>
```

- v-model

表单的值

```
// Demo code
<ncform :form-schema="formSchema" v-model="formSchema.value" ></ncform>
```

- is-dirty.sync

用于标识表单的值是否dirty（即修改）

通常的使用场景是通过该值，来判断提交按钮是否可用

```
// Demo code
<ncform :form-schema="formSchema" v-model="formSchema.value" :is-dirty.sync="isFormDirty"></ncform>
<button :disabled="!isFormDirty">提交</button>
```

## ncform API

ncform API 都是Vue实例级别的方法。

- $ncformGetValue(formName, options)

手动获取表单的值。

options.ignoreHiddenField: 是否忽略掉隐藏字段。默认为false

```
// Demo code:
this.$ncformGetValue('demoForm', {ignoreHiddenField: true});
```

- $ncformReset(formName)

重置表单。重置的值为最后一次外部更新 `ncform v-model` 的值

外部更新是指你直接用新value更新ncform的v-model值，而非操作表单控件发生的v-model的值的更新

注意：当你保存完表单，想以最后一次保存的值为reset的值，需要外部更新下ncform的v-model值

```
// Demo code:
this.$ncformReset('demoForm');
```

- $ncformValidate(formName)

校验表单的所有字段的规则。

```
// Demo code:
this.$ncformValidate('demoForm').then(data => {
  if (data.result) { // 校验通过
    // do whatever you like to do. e.g. save form
  }
})
```

- $ncformAddWidget({name, widget})

增加自定义表单控件

```
// Demo code:
this.$ncformAddWidget({name: 'sayHi', widget: {
  mixins: [ncformCommon.mixins.vue.controlMixin],
  template: '<div>hi {{modelVal}}</div>',
  props: {
    value: {
      type: [String]
    },
  },
}});
```

- $ncformAddRule({name, rule})

增加自定义验证规则

```
// Demo code:
class MyCustomRule extends ncformCommon.ValidationRule {

  constructor(props) {
    super(props);
    this.name = 'myCustom';
    this.defaultErrMsg = 'yeah, show my custom rule message';
  }

  validateLogic(val, ruleVal) {
    this.errMsg = "must fill in 'daniel'"
    return val === 'daniel';
  }
}

this.$ncformAddRule({name: 'myCustom', rule: MyCustomRule});
```

- $ncformAllRules()

取得ncform所有注册的校验规则

```
// Demo code:
const allRules = this.$ncformAllRules();
```

- $ncformAllWidgets()

取得ncform所有注册的表单组件

```
// Demo code:
const allWidgets = this.$ncformAllWidgets();
```

## ncform event

- submit

提交表单事件。

```
// Demo code:
<ncform @submit="submit()"></ncform>
```

- change

表单项值更改事件

```
// Demo code:
<ncform @change="onChange"></ncform>

onChange({paths, itemValue, formValue}) {
  // paths: 发生值变化的项的路径
  // itemValue：发生值变化的项的最新值
  // formVallue: 表单的最新值
}
```
