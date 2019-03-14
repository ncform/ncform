# Standard Components

[English Version](STD-COMP.md)

如果你不太喜欢冷冰冰的文字描述，可点击 [互动版本](https://ncform.github.io/ncform/ncform-theme-elementui/index.html)

## control components

- all components

```js
{
  disabled: false, // 是否禁用。支持dx表达式
  readonly: false, // 是否只读。支持dx表达式
  placeholder: '', // 占位显示。支持dx表达式
  hidden: false, // 是否隐藏。支持dx表达式
}
```

- label

```js
{
  multiLine: false, // 是否多行显示 （当为false时，内容溢出时用...显示，然后鼠标移上去可显示完整的内容）
}
```

- input

```js
{
  type: 'text', // 显示类型，可选值：[text | number | password | file]
  prefixIcon: '', // 前图标样式名
  suffixIcon: '', // 后图标样式名
  modelField: '', // 当值为对象时使用（即使用compound.prependSelect或compound.appendSelect）
  trim: true, // 是否自动将前后空格trim掉，默认为true 
  clearable: false, // 是否可清空，默认为false

  autocomplete: { // 自动补全 
    itemValueField: 'value', // 项数据表示value的字段
    itemTemplate: '<span>{{item.value}} {{item.desc}}</span>', // 显示项的模板
    immediateShow: false, // 是否立即显示，如果为false则当输入关键字才显示
    enumSource: [{value: [String | Number | Boolean], desc: ''}], // 当提示数据是本地而非远程时提供
    enumSourceRemote: {
      remoteUrl: '', // 如果是远程访问，则填写该url
      paramName: 'keyword', // 请求参数名，默认是keyword
      otherParams: {}, // 其它请求参数，值支持 dx表达式
      resField: '', // 响应结果的字段
    }
  },

  compound: { // 组合
    prependLabel: '', // 前置标签 
    appendLabel: '', // 后置标签
    prependIcon: '', // 前置图标样式
    appendIcon: '', // 后置图标样式 
    prependSelect: { // 前置下拉框，使用该种的数据必须是对象
      itemLabelField: 'label', // 项数据表示label的字段
      itemValueField: 'value', // 项数据表示value的字段
      enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
      enumSourceRemote: { // 远程数据源
        remoteUrl: '', // 如果是远程访问，则填写该url
        resField: '', // 响应结果的字段
      },
      modelField: '' // 用于绑定input value值的某个属性
    },
    appendSelect: { // 后置下拉框，使用该种的数据必须是对象
      itemLabelField: 'label', // 项数据表示label的字段
      itemValueField: 'value', // 项数据表示value的字段
      enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
      enumSourceRemote: { // 远程数据源
        remoteUrl: '', // 如果是远程访问，则填写该url
        resField: '', // 响应结果的字段
      },
      modelField: '' // 用于绑定input value值的某个属性
    }
  }，

  upload: { // 上传的参数配置（当type="file"时，只认这个参数）
    uploadUrl: '', // 上传的地址
    resField: 'data', // 数据源读取返回文件数据的字段名
    data: {}, // 上传时附带的额外参数
    fileField: 'file', // 表示文件的字段，默认是file
    accept: '', // 接受上传的文件类型
    constraint: { // 约束
      width: 0, // 图片宽度 [仅图片有效]
      height: 0, // 图片高度 [仅图片有效]
      sizeFixed: true, // 图片尺寸约束的大小是否按固定值，当为false时按比例 [仅图片有效]
      maxSize: 0, // 最大文件大小，单位KB，0代表不限
      minSize: 0 // 最小文件大小，单位KB，0代表不限
    },
    uploadText: '点击上传', //  上传按钮的名称
  }
}
```

- input-number

```js
{
  min: 0, // 最小值
  max: Infinity, // 最大值
  step: 1, // 步长
}
```

- textarea

```js
{
  rows: 2, // 行数
  autoSize: true, // 自适应内容高度，可选值：[boolean | { minRows: 2, maxRows: 6 }]
}
```

- select

```js
{
  multiple: false, // 是否多选
  clearable: true, // 是否出现清空选项
  filterable: false, // 是否可搜索，即可输入关键字
  filterLocal: true, // 搜索本地的还是远程的数据，当为true时，就算配了enumSourceRemote，也只会从远程取一次数据

  itemTemplate: '<span>{{item.label}} : {{item.value}}</span>', // 显示项的模板
  itemLabelField: 'label', // 项数据表示label的字段
  itemValueField: 'value', // 项数据表示value的字段
  enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
  enumSourceRemote: { // 远程数据源
    remoteUrl: '', // 如果是远程访问，则填写该url
    paramName: 'keyword', // 请求参数名，默认是keyword
    otherParams: {}, // 额外的请求参数。支持dx表达式
    resField: '', // 响应结果的字段
    selectFirstItem: false // 默认选中第一项
  },
}
```

- radio

```js
{
  type: 'radio', // 显示类型，可选值：[radio | button]
  arrangement: 'h', // 排列 可选值 [v | h]

  itemValueField: '', // 值字段 默认值为value
  itemLabelField: '' // 显示字段 默认值为label
  enumSource: [{value: [String | Number | Boolean], label: ''}], // 可选项，默认[{value: true, label: '是'}, {value: false, label: '否'}]
  enumSourceRemote: { // 远程数据源
    remoteUrl: '', // 如果是远程访问，则填写该url
    resField: '', // 响应结果的字段
  },
}
```

- checkbox

```js
{
  selectAll: false, // 是否显示全选
  arrangement: 'h', // 排列 可选值 [v | h]
  type: 'checkbox', // 显示类型，可选值：[checkbox | button]

  itemValueField: '', // 值字段 默认值为value
  itemLabelField: '' // 显示字段 默认值为label
  enumSource: [{value: [String | Number | Boolean], label: ''}], // 可选项，默认值[{label: '是'}]
  enumSourceRemote: { // 远程数据源
    remoteUrl: '', // 如果是远程访问，则填写该url
    resField: '', // 响应结果的字段
  },
}

```

- upload

```js
{
  uploadUrl: '', // 上传的地址
  resField: 'data', // 数据源读取返回文件数据的字段名
  fileUrlField: 'url', // 数据源读取返回带有文件数据的字段resField下的 文件地址 字段. 默认 "url"
  fileNameField: '', // 数据源读取返回带有文件数据的字段resField下的 文件名 字段. 默认 "name"
  
  multiple: false, // 是否支持多选
  data: {}, // 上传时附带的额外参数
  fileField: 'file', // 表示文件的字段，默认是file
  showFileList: false, // 是否显示已上传文件列表
  drag: false, // 是否启用拖拽上传
  accept: '', // 接受上传的文件类型
  listType: 'text', // 文件列表的类型。 可选值：text/picture/picture-card
  autoUpload: false, // 是否在选取文件后立即进行上传
  limit: -1, // 最大允许上传个数
  constraint: { // 约束
    width: 0, // 图片宽度 [仅图片有效]
    height: 0, // 图片高度 [仅图片有效]
    sizeFixed: true, // 图片尺寸约束的大小是否按固定值，当为false时按比例 [仅图片有效]
    maxSize: 0, // 最大图片大小，单位KB，0代表不限
    minSize: 0 // 最小图片大小，单位KB，0代表不限
  }
}
```

- rate

```js
{
  max: 5, // 最大分值
  allowHalf: false, // 是否允许半选
  lowThreshold: 2, // 低分和中等分数的界限值，值本身被划分在低分中
  highThreshold: 4, // 高分和中等分数的界限值，值本身被划分在高分中
  colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'], // icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色
  voidColor: '#C6D1DE', // 未选中 icon 的颜色
  disabledVoidColor: '#EFF2F7', // 只读时未选中 icon 的颜色
  iconClasses: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'], // icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名
  voidIconClass: 'el-icon-star-off', // 未选中 icon 的类名
  disabledVoidIconClass: 'el-icon-star-on', // 只读时未选中 icon 的类名
  showText: false, // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
  showScore: false, // 是否显示当前分数，showScore 和 showText 不能同时为真
  textColor: '#1F2D3D', // 辅助文字的颜色
  texts: ['极差', '失望', '一般', '满意', '惊喜'] // 辅助文字数组
}
```

- slider

```js
{
  min: 0, // 最小值
  max: 100, // 最大值
  step: 1, // 步长
}
```

- date-picker

```js
{
  clearable: false, // 是否显示清除按钮
  type: 'date', // year/month/date/week/datetime
  format: '', // 格式显示
}
```

- color-picker

```js
{
}
```

## layout component

- object

```js
{
  layout: 'v', // 布局类型，垂直即为label上control下，水平即为label左control右，可选值：[v | h]
  labelWidth: '100px', // 当布局类型为h时有效
  collapsed: false, // 是否默认折叠
  disableCollapse: false, // 是否允许折叠
}
```

- array

```js
{
  disableAdd: true, // 是否禁止添加项
  disableDel: true, // 是否禁止删除项
  disableReorder: true, // 是否禁止排序
  disableCollapse: false, // 是否允许折叠
  collapsed: false, // 是否默认折叠
  disableItemCollapse: false, // 是否允许项折叠
  itemCollapse: false, // 项是否默认折叠
  addTxt: 'Add', // 新建文字
  delAllTxt: 'Del All' // 删除全部文字
}
```

- array-table

```js
{
  disableAdd: true, // 是否禁止添加项
  disableDel: true, // 是否禁止删除项
  disableReorder: true, // 是否禁止排序
  collapsed: false, // 是否默认折叠
  disableCollapse: false, // 是否允许折叠
  addTxt: 'Add', // 新建文字
  delAllTxt: 'Del All' // 删除全部文字
}
```

- array-tabs

```js
{
  disableAdd: true, // 是否禁止添加项
  disableDel: true, // 是否禁止删除项
  tabPosition: 'top', // 可选值：left / top
  collapsed: false, // 是否默认折叠
  disableCollapse: false, // 是否允许折叠
  addTxt: 'Add', // 新建文字
  delAllTxt: 'Del All' // 删除全部文字
}
```
