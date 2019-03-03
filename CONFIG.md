[中文版](CONFIG_CN.md)

- Table Of Contents
  - [Schema](#ncform-schema)
  - [Props](#ncform-props)
  - [API](#ncform-API)
  - [Event](#ncform-event)

## ncform schema
```js
{
  type: 'object', // Root node: can only be object
  properties: { // Root node: form fields
    firstName: {
      
      /* Data */
      type: 'string', // Data type: string / number / integer / boolean / object / array / HTML / COMP 
      // Note: The type of uppercase is a special read-only type, and the general scenario is to display a separator bar. This data will be automatically filtered out
      // HTML: configure "value" field, the value is a piece of HTML [support dx expression];
      // COMP: configure ui.widget and ui.widgetConfig
      
      value: '', // Value of the data
      default: '', // The default value of the data. When the "value" is empty, take this one. 
      valueTemplate: '', // Value template. note: when there is a "dx expression" inside, the expression value changes, it will overwrite the value filled by the user

      /* UI */
      ui: {

        columns: 6, // The number of columns, total is 12. 6 represents half
        label: 'First Name', // Label display content
        showLabel: true, // Whether to show the label (when it is false, it still takes up space)
        noLabelSpace: false, // Whether the label does not occupy space, the priority is higher than showLabel
        legend: '', // Legend content, valid when the type is object or array
        showLegend: true, // Whether to display the legend. When the type is object or array, showLegend takes precedence over showLabel, so the label takes effect when showLegend is set to false.
        description: 'Fill in the first name', // Field description information [support dx expression]
        placeholder: 'first name', // Placeholder content [support dx expression]
        disabled: false, // Whether to disable [support dx expression]
        readonly: false, // Whether read-only [support dx expression]
        hidden: false, // Whether to hide [support dx expression]
        help: { // Help information
          show: true, // Whether to display, default is false
          content: '', // Help detail information
          iconCls: '', // Help icon class name
          text: '' // Help text
        },
        itemClass: '', // The class name added to the form item
        preview: { // Preview
          type: '', // Preview type, optional values: video / audio / image / link
          value: '', // Default: 'dx: {{$self}}' [supports dx expressions]
          clearable: false, // Whether it can be cleared
          outward: { // outward appearance
            width: 0, // Width, 0 means unlimited
            height: 0, // Height, 0 means unlimited
            shape: '', // Appearance shape, optional values: '' / rounded / circle. default is ''
          }
        },
        linkFields: [ // Associated fields, when the value changes, it will trigger some actions of the associated field, such as rules check
          {
            fieldPath: '', // The associated item field path. When it is an array item, use [i], such as a.b[i].c
            rules: [], // the rules, such as required, number
          }
        ],

        /* Rendering Widget */
        widget: 'textarea', // Widget component name
        widgetConfig: {}, // widget component config
      },

      /* Verification rules */
      rules: {
        // for Any Instance Type
        required: {
          value: true, // The value passed to the validation rule
          errMsg: 'it is required!', // Error message
          options: { // Validation rule options
            delay: 300, // Delayed verification time (ms)
            delayMsg: 'Checking...' // Prompt for delayed verification
          }
        },
        number,
        ajax, // Value: { remoteUrl: 'remote api url', method: 'get or post', paramName: 'request parameter name, the value is the control\'s value', otherParams: {} }

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

        /* Custom Validation Rules */
        customRule: [{
          script: '', // [Support dx expression]
          errMsg: '', // Error message
          linkItems: [ // When the check is triggered, these associated items are also triggered for verification (recommended to use ui.linkFields instead of this feature)
            {
              fieldPath: '', // The associated item field path. When it is an array item, use [i], such as a.b[i].c
              customRuleIdx: 0 // The index of the triggered item's custom validation rules
            }
          ]
        }]
      },
    }
  },
  globalConfig: { // Root node: global configuration
    ignoreRulesWhenHidden: true, // When the control is hidden, its validation rules are automatically ignored, Default is true
    style: { // Global style configuration
      formCls: '', // form class
      invalidFeedbackCls: '', // invalid feedback class 
    },
    constants: { // Global constant configuration, accessible via {{$const.}} in dx expressions, such as {{$const.userName}}
      userName: 'daniel'
    }
  }
}

```

## ncform props

- form-schema

Used to describe the schema configuration data of the form. For the specific data structure, please refer to[ncform config](#ncform-config)

```
// Demo code
<ncform :form-schema="formSchema"></ncform>
```

- form-name

The name of the form, which is required when using [ncform API](#ncform-api)

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

The usual usage scenario is to use this value to determine if the submit button is available.

```
// Demo code
<ncform :form-schema="formSchema" v-model="formSchema.value" :is-dirty.sync="isFormDirty"></ncform>
<button :disabled="!isFormDirty">Submit</button>
```

## ncform API

The ncform API is a Vue instance level method.

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
    // do whatever you like to do. e.g. save form
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

## ncform event

- submit

Submit a form.

```
// Demo code:
<ncform @submit="submit()"></ncform>
```
