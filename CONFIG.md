[中文版](CONFIG_CN.md)

- Table Of Contents
  - [Schema](#ncform-schema)
  - [Props](#ncform-props)
  - [API](#ncform-API)
  - [Event](#ncform-event)

## ncform schema
```js
{
  type: 'object', // Root node. object type only
  properties: {
    <field name>: {
      
      /* Data */
      type: 'string', // Data type. options: string / number / integer / boolean / object / array / HTML / COMP 
      // Note: The type of uppercase is a special read-only type, and the common use case is to display a separator bar. The data will be auto filtered out when the form is submitted.
      // HTML: set "value", the value is a piece of HTML [support dx expression];
      // COMP: set ui.widget and ui.widgetConfig
      
      value: '', // Value of the field
      default: '', // The default value of the field. Take this one when the "value" is empty. 
      valueTemplate: '', // Value template. Dynamically calculate the "value" based on the supplied dx expression [support dx expression]

      /* UI */
      ui: {

        columns: 6, // Total are 12 columns. [support dx expression]
        label: '', // Label display [support dx expression]
        showLabel: true, // Whether to show the label (when it is false, it still takes up space)
        noLabelSpace: false, // Whether the label does not occupy space, the priority is higher than showLabel
        legend: '', // Legend content, valid when the type is object or array [support dx expression]
        showLegend: true, // Whether to display the legend.
        description: '', // Description information [support dx expression]
        placeholder: '', // Placeholder content [support dx expression]
        disabled: false, // Whether to disable [support dx expression]
        readonly: false, // Whether read-only [support dx expression]
        hidden: false, // Whether to hide [support dx expression]
        help: { // Help information
          show: true, // Whether to display, default is false
          content: '', // Help detail information [support dx expression]
          iconCls: '', // Help icon class name [support dx expression]
          text: '' // Help text
        },
        itemClass: '', // The form item class name
        preview: { // Preview
          type: '', // Preview type. Options: video / audio / image / link
          value: '', // Default: 'dx: {{$self}}' [supports dx expressions]
          clearable: false, // Whether to display the clear button
          outward: { // outward appearance. Valid only if type=image
            width: 0, // Width, 0 means unlimited
            height: 0, // Height, 0 means unlimited
            shape: '', // Appearance shape. Options: '' / rounded / circle. default is ''
          }
        },
        linkFields: [ // Associated fields. when the value changes, it will trigger some actions of the associated field, such as rules check
          {
            fieldPath: '', // The associated item field path. such as 'user.name'，'user[i].name'
            rules: [], // The rules, such as ['required']
          }
        ],

        /* Rendering Widget */
        widget: '', // Widget component name
        widgetConfig: {}, // widget component config
      },

      /* Verification rules */
      rules: {

        // All validation rules have two forms of assignment:
        // Simple version: <rule name>: <rule value>. Such as required: true, minimum: 10
        // Detailed version: <rule name>: { value: <rule value>, errMsg: '', options: { deplay: xxx, delayMsg: '' } }. Such as the following required example

        // for Any Instance Type
        required: {
          value: true, // The value passed to the validation rule
          errMsg: 'it is required!', // Error message [support dx expression]
          options: { // Rule options
            delay: 300, // Delayed verification time (ms)
            delayMsg: 'Checking...' // Prompt for delayed verification [support dx expression]
          }
        },
        number, // value:boolean
        ajax, // Value: { remoteUrl: 'remote api url', method: 'get or post', paramName: 'request parameter name, the value is the control\'s value', otherParams: {} }

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
        pattern, // value: string。 such as "\\d+"
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

        /* Custom Validation Rules */
        customRule: [{
          script: '', // [Support dx expression]
          errMsg: '', // Error message
          linkItems: [ // When the check is triggered, the customRule rule validation of these associated items is also triggered (recommended using ui.linkFields instead)
            {
              fieldPath: '', // The associated item field path. such as 'user.name'，'user[i].name'
              customRuleIdx: 0 // The index of the customRule of the link item
            }
          ]
        }]
      },
    }
  },
  globalConfig: { // Global configuration
    ignoreRulesWhenHidden: true, // When the controls are hidden, its validation rules are automatically ignored. Default is true
    style: { // Global style configuration
      formCls: '', // Form class
      invalidFeedbackCls: '', // Invalid feedback class 
    },
    constants: { // Global constant configuration, can be accessed by {{$const.userName}}
      userName: 'daniel'
    },
    scrollToFailField: { // Automatically scroll to fields that failed validation
      enabled: true, // Enable this feature or not
      container: 'body', // The container that has to be scrolled.
      duration: 500, // The duration (in milliseconds) of the scrolling animation
      offset: -80, // The offset that should be applied when scrolling. 
    }
  }
}

```

## ncform props

- form-schema

Used to describe the schema configuration of the form. For the specific data structure, please refer to [ncform schema](#ncform-schema)

```
// Demo code
<ncform :form-schema="formSchema"></ncform>
```

- form-name

The name of the form, which is required when using some [ncform API](#ncform-api)

```
// Demo code
<ncform form-name="your-form-name"></ncform>
```

- v-model

Form value

```
// Demo code
<ncform :form-schema="formSchema" v-model="formSchema.value" ></ncform>
```

- is-dirty.sync

Is used to identify whether the value of the form is dirty (ie modified)

The common use case is to determine if the submit button is available.

```
// Demo code
<ncform :form-schema="formSchema" v-model="formSchema.value" :is-dirty.sync="isFormDirty"></ncform>
<button :disabled="!isFormDirty">Submit</button>
```

## ncform API

The ncform API is a Vue instance level method.

- $ncformGetValue(formName, options)

Get the value of the form manually.

options.ignoreHiddenField: Whether to ignore hidden fields. The default is false

```
// Demo code:
this.$ncformGetValue('demoForm', {ignoreHiddenField: true});
```

- $ncformReset(formName)

Reset the form. The value after resetting is the value of the last external update `ncform v-model`

External update means that you update the v-model value of the ncform directly with the new value, instead of updating the value of the v-model that occurs when the user fill in the form controls.

Note: When you save the form and want to save the value of the last saved value, you need to externally update the v-model value of ncform.

```
// Demo code:
this.$ncformReset('demoForm');
```

- $ncformValidate(formName)

Verify all fields of the form.

```
// Demo code:
this.$ncformValidate('demoForm').then(data => {
  if (data.result) { // Verification pass
    // do whatever you like to do. e.g. save data
  }
})
```

- $ncformAddWidget({name, widget})

Add your custom form control

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

Add your custom validation rule

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

Get all registered check rules of ncform

```
// Demo code:
const allRules = this.$ncformAllRules();
```

- $ncformAllWidgets()

Get all registered widgets of ncform

```
// Demo code:
const allWidgets = this.$ncformAllWidgets();
```

## ncform event

- submit

Submit a form.

```
// Demo code:
<ncform @submit="submit()"></ncform>
```

- change

Form item value change event

```
// Demo code:
<ncform @change="onChange"></ncform>

onChange({paths, itemValue, formValue, oldItemValue}) {
  // paths: the path of the item whose value changes
  // itemValue: the latest value of the item whose value has changed
  // formValue: the latest value of the form
  // oldItemValue: ths old value of the item before value changed
}
```
