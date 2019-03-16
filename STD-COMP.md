# Standard Components

[中文版](STD-COMP_CN.md)

If you don't like the cold text description, click on the [interactive version](https://ncform.github.io/ncform/ncform-theme-elementui/index.html).

## control components

- all components

```js
{
  disabled: false, // Whether to disable. Support for dx expressions
  readonly: false, // Whether it is read only. Support for dx expressions
  placeholder: '', // Placeholder display. Support for dx expressions
  hidden: false, // Whether it is hidden. Support for dx expressions
}
```

- label

```js
{
  multiLine: false, // Whether to display multiple lines (if false, display with "..." when the content overflows, user can move the mouse up to display the complete content)
}
```

- input

```js
{
  type: 'text', // Display type, optional values: [text | number | password | file]
  prefixIcon: '', // Prefix icon class name
  suffixIcon: '', // Suffix icon class name
  modelField: '', // Used when the value is an object (ie using compound.prependSelect or compound.appendSelect)
  trim: true, // Whether to automatically trim the front and rear spaces, the default is true
  clearable: false, // Whether it can be emptied, the default is false

  autocomplete: { // Automatic completion 
    itemValueField: 'value', // Item data represents the field of value
    itemTemplate: '<span>{{item.value}} {{item.desc}}</span>', // Display item template
    immediateShow: false, // Whether to display immediately, if it is false, it will be displayed when input the keyword.
    enumSource: [{value: [String | Number | Boolean], desc: ''}], // Provided when the prompt data is local rather than remote
    enumSourceRemote: {
      remoteUrl: '', // If it is remote call, fill in the url
      paramName: 'keyword', // Request parameter name, default is keyword
      otherParams: {}, // Other request parameters, values support dx expressions
      resField: '', // Response result field
    }
  },

  compound: { // Combination
    prependLabel: '', // Prepend label 
    appendLabel: '', // Append label
    prependIcon: '', // Prepend icon class name
    appendIcon: '', // Append icon class name 
    prependSelect: { // Prepend select, the data used for this kind must be an object
      itemLabelField: 'label', // Item data represents the field of the label
      itemValueField: 'value', // Item data represents the field of value
      enumSource: [{value: [String | Number | Boolean], label: ''}], // Local data source
      enumSourceRemote: { // Remote data source
        remoteUrl: '', // If it is remote call, fill in the url
        resField: '', // Response result field
      },
      modelField: '' // An attribute used to bind the value of the input value
    },
    appendSelect: { // Append select, The data used for this kind must be an object
      itemLabelField: 'label', // Item data represents the field of the label
      itemValueField: 'value', // Item data represents the field of value
      enumSource: [{value: [String | Number | Boolean], label: ''}], // Local data source
      enumSourceRemote: { // Remote data source
        remoteUrl: '', // If it is remote call, fill in the url
        resField: '', // Response result field
      },
      modelField: '' // An attribute used to bind the value of the input value
    }
  }，

  upload: { // Uploaded parameter configuration (only recognize this parameter when type="file")
    uploadUrl: '', // Uploaded address
    resField: 'data', // The data source reads the field name of the returned file data
    data: {}, // Additional parameters attached when uploading
    fileField: 'file', // The field representing the file, the default is file
    accept: '', // Accept uploaded file types
    constraint: { // constraint
      width: 0, // Image width [image only]
      height: 0, // Image height [image only]
      sizeFixed: true, // Whether the size of the image size constraint is a fixed value, and when it is false, it is proportional [image only valid]
      maxSize: 0, // Maximum file size in KB, 0 means no limit
      minSize: 0 // Minimum file size in KB, 0 means no limit
    },
    uploadText: 'Click to upload', //  Upload button name
  }
}
```

- input-number

```js
{
  min: 0, // Minimum value
  max: Infinity, // Maximum
  step: 1, // Step size
}
```

- textarea

```js
{
  rows: 2, // Rows
  autoSize: true, // Adaptive content height, optional: [boolean | { minRows: 2, maxRows: 6 }]
}
```

- select

```js
{
  multiple: false, // Whether to choose more
  clearable: true, // Whether the empty button appears
  filterable: false, // Whether searchable
  filterLocal: true, // Filter by local or remote data. if true, even with enumSourceRemote, data will only be retrieved once remotely.

  itemTemplate: '<span>{{item.label}} : {{item.value}}</span>', // Display item template
  itemLabelField: 'label', // Item data represents the field of the label
  itemValueField: 'value', // Item data represents the field of value
  enumSource: [{value: [String | Number | Boolean], label: ''}], // Local data source
  enumSourceRemote: { // Remote data source
    remoteUrl: '', // If it is remote call, fill in the url
    paramName: 'keyword', // Request parameter name, default is keyword
    otherParams: {}, // Additional request parameters. Support for dx expressions
    resField: '', // Response result field
    selectFirstItem: false // Whether the first item is selected by default
  },
}
```

- radio

```js
{
  type: 'radio', // Display type. optional values: [radio | button]
  arrangement: 'h', // Arrange. optional values: [v | h]

  itemValueField: '', // Value field. default value is "value"
  itemLabelField: '', // Display field. default value is "label"
  enumSource: [{value: [String | Number | Boolean], label: ''}], // Local data source. default: [{value: true, label: '是'}, {value: false, label: '否'}]
  enumSourceRemote: { // Remote data source
    remoteUrl: '', // If it is remote call, fill in the url
    resField: '', // Response result field
  },
}
```

- checkbox

```js
{
  selectAll: false, // Whether to display all selections
  arrangement: 'h', // Arrange. optional values: [v | h]
  type: 'checkbox', // Display type, optional values: [checkbox | button]

  itemValueField: '', // Value field. default value is "value"
  itemLabelField: '', // Display field. default value is "label"
  enumSource: [{value: [String | Number | Boolean], label: ''}], //  Local data source. default: [{label: '是'}]
  enumSourceRemote: { // Remote data source
    remoteUrl: '', // If it is remote call, fill in the url
    resField: '', // Response result field
  },
}

```

- upload

```js
{
  uploadUrl: '', // Uploaded address
  resField: 'data', // The data source reads the field name of the returned file data
  fileUrlField: 'url', // The data source reads the file address field under the field resField with the file data. Default "url"
  fileNameField: '', // The data source reads the file name field under the field resField with the file data. Default "name"
  
  multiple: false, // Whether to support multiple selection
  data: {}, // Additional parameters attached when uploading
  fileField: 'file', // The field representing the file, the default is file
  showFileList: false, // Whether to display the list of uploaded files
  drag: false, // Whether to enable drag and drop upload
  accept: '', // Accept uploaded file types
  listType: 'text', // The type of file list. Optional value: [ text | picture | picture-card ]
  autoUpload: false, // Whether to upload immediately after selecting a file
  limit: -1, // Maximum number of uploads allowed
}
```

- rate

```js
{
  max: 5, // Maximum score
  allowHalf: false, // Whether semi-selection is allowed
  lowThreshold: 2, // The threshold of low and medium scores, the value itself is divided into low scores
  highThreshold: 4, // The limit value of the high score and the medium score, the value itself is divided into high scores
  colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'], // The color array of icon, with 3 elements, the color corresponding to 3 segments
  voidColor: '#C6D1DE', // Unchecked icon color
  disabledVoidColor: '#EFF2F7', // The color of the icon is not selected when read-only
  iconClasses: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'], // Icon's class name array, with 3 elements, the class name corresponding to 3 segments
  voidIconClass: 'el-icon-star-off', // Class name of icon not selected
  disabledVoidIconClass: 'el-icon-star-on', // Class name of icon is not selected when read-only
  showText: false, // Whether to display auxiliary text, if true, the text content corresponding to the current score will be selected from the texts array
  showScore: false, // Whether to display the current score, showScore and showText cannot be true at the same time
  textColor: '#1F2D3D', // Auxiliary text color
  texts: ['极差', '失望', '一般', '满意', '惊喜'] // Auxiliary text array
}
```

- slider

```js
{
  min: 0, // Minimum value
  max: 100, // Maximum
  step: 1, // Step size
}
```

- date-picker

```js
{
  clearable: false, // Whether to display the clear button
  type: 'date', // year/month/date/week/datetime
  format: '', // Format display
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
  layout: 'v', // Layout type, vertical is the control under label, horizontal is label left control right, optional values: [v | h]
  labelWidth: '100px', // Valid when the layout type is h
  collapsed: false, // Whether to fold by default
  disableCollapse: false, // Whether to allow folding
}
```

- array

```js
{
  disableAdd: true, // Whether to prohibit the addition of items
  disableDel: true, // whether to disable item deletion
  disableReorder: true, // Whether to prohibit sorting
  disableCollapse: false, // Whether to allow folding
  collapsed: false, // Whether to fold by default
  disableItemCollapse: false, // Whether to allow items to be folded
  itemCollapse: false, // Whether the item is folded by default
  addTxt: 'Add', // New display text
  delAllTxt: 'Del All' // Delete all display text
}
```

- array-table

```js
{
  disableAdd: true, // Whether to prohibit the addition of items
  disableDel: true, // whether to disable item deletion
  disableReorder: true, // Whether to prohibit sorting
  collapsed: false, // Whether to fold by default
  disableCollapse: false, // Whether to allow folding
  addTxt: 'Add', // New display text
  delAllTxt: 'Del All' // Delete all display text
}
```

- array-tabs

```js
{
  disableAdd: true, // Whether to prohibit the addition of items
  disableDel: true, // whether to disable item deletion
  tabPosition: 'top', // Optional value：[left | top]
  collapsed: false, // Whether to fold by default
  disableCollapse: false, // Whether to allow folding
  addTxt: 'Add', // New display text
  delAllTxt: 'Del All' // Delete all display text
}
```
