## ncform config

```js
{
  type: 'object', // 根节点：只能是object
  properties: { // 根节点：表单字段
    firstName: {
      
      /* 数据 */
      type: 'string', // 数据类型 string / number / integer / boolean / object / array / HTML / COMP 
      // 注意：大写的类型为特殊只读类型，一般应用场景为显示一个分隔栏。该数据会自动过滤掉
      // HTML: 配置value，值为一段HTML【支持dx表达式】; 
      // COMP: 配置ui.widget和ui.widgetConfig
      
      value: '', // 数据的值
      default: '', // 数据的默认值，value为空的时候取该值 
      valueTemplate: '', // 值模板，当里面有dx表达式时，表达式值发生改变，会优化取该值作为value（即会覆盖用户所填的值）

      /* UI */
      ui: {

        columns: 6, // 占用列数，一共12列。6代表占一半
        label: 'First Name', // 标签内容
        showLabel: true, // 是否显示标签（当为false不显示时，依然占着空间）
        noLabelSpace: false, // 标签是否不占空间，优先级比showLabel高
        legend: '', // 标题内容，当对象，数组布局数据类型时有效
        showLegend: true, // 是否显示标题。当为object类型时，showLegend优先于showLabel，所以需要设置showLegend为false时label才生效
        description: 'Fill in the first name', // 字段描述信息【支持dx表达式】
        placeholder: 'first name', // 占位内容【支持dx表达式】
        disabled: false, // 是否禁用【支持dx表达式】
        readonly: false, // 是否只读【支持dx表达式】
        hidden: false, // 是否隐藏【支持dx表达式】
        help: { // 帮助信息
          show: true, // 是否显示，默认不显示
          content: '', // 帮助信息
          iconCls: '', // 帮助图标样式名
          text: '' // 帮助文字
        },
        itemClass: '', // 给表单项添加的样式名
        preview: { // 预览
          type: '', // 预览类型，可选值：video / audio / image / link
          value: '', // 默认值: 'dx: {{$self}}'【支持dx表达式】
          clearable: false, // 是否可删除
          outward: { // 外观
            width: 0, // 宽度，0代表无限制
            height: 0, // 高度，0代表无限制
            shape: '', // 外观形状，可选值：空值 / rounded / circle / ，默认值为空
          }
        },
        linkFields: [ // 关联字段，当值发生变化时，会触发关联字段的一些动作，比如校验
          {
            fieldPath: '', // 关联项字段路径。当为数组项时，则用[i]，如a.b[i].c
            rules: [], // 校验规则名，如required, number
          }
        ],

        /* 渲染组件 */
        widget: 'textarea', // 渲染的组件名
        widgetConfig: {}, // 组件配置
      },

      /* 验证规则 */
      rules: {
        // for Any Instance Type
        required: {
          value: true, // 传给验证规则的配置值
          errMsg: 'it is required!', // 错误信息
          options: { // 验证规则选项
            delay: 300, // 延迟验证的时间（毫秒）
            delayMsg: '异步验证中..' // 延迟验证时的提示
          }
        },
        number,
        ajax, // value值：{ remoteUrl: '远程接口Url', method: 'get or post', paramName: '请求参数名，值为控件的值', otherParams: {} }

        // for Numeric Instances 
        minimum,
        maximum,
        multipleOf,
        exclusiveMaximum,
        exclusiveMinimum,

        // for Strings
        url,
        tel,
        ipv4,
        ipv6,        
        email,
        pattern,
        hostname,
        dateTime,
        maxLength,
        minLength,

        // for Arrays
        contains,
        maxItems,
        minItems,
        uniqueItems,

        // for Objects
        maxProperties,
        minProperties,

        /* 自定义的验证规则 */
        customRule: [{
          script: '', // 【支持dx表达式】
          errMsg: '', // 验证错误信息
          linkItems: [ // 当触发校验时，同时触发这些关联的项进行校验（ 建议使用ui.linkFields来替代这里的功能 ）
            {
              fieldPath: '', // 关联项字段路径。当为数组项时，则用[i]，如a.b[i].c
              customRuleIdx: 0 // 触发该项的自定义验证规则的索引
            }
          ]
        }]
      },
    }
  },
  globalConfig: { // 根节点：全局配置
    ignoreRulesWhenHidden: true, // 当控件隐藏时自动忽略掉其验证规则，即隐藏的控件验证规则不生效。默认为true
    style: { // 全局样式配置
      formCls: '', // form class
      invalidFeedbackCls: '', // invalid feedback class 
    },
    constants: { // 全局常量配置，可在dx表达中通过{{$const.}}来访问，如{{$const.userName}}
      userName: 'daniel'
    }
  }
}

```

## ncform props

- form-schema

用于描述表单的schema配置数据，具体数据结构请参考[ncform config](#ncform-config)

```
// Demo code
<ncform :form-schema="formSchema"></ncform>
```

- form-name

表单名称，当使用[ncform API](#ncform-api)时需要提供该值

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

## ncform event

- submit

提交表单事件。

```
// Demo code:
<ncform @submit="submit()"></ncform>
```
