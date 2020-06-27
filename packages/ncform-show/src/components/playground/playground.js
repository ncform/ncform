/**
 * <playground></playground>
 */
export default {
  /* ====================== 生命周期 ====================== */

  created() {
    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据
    if (location.search.indexOf('lang=cn') >= 0) {
      this.$data.lang = 'cn';
    }
  },

  mounted() {
    // 在这里做一些跟DOM有关的初始化
    setTimeout(() => {
      this.createEditor();
      this.templateChange("0");
    }, 0);
  },

  /* ====================== 数据绑定 ====================== */

  props: {},

  data() {
    return {
      lang: 'en',
      jsonValue: "",
      i18nData: {
        en: {
          template: 'Template',
          genForm: 'Run',
          getData: 'Get Data',
          notValidJSON: 'Not valid JSON data',
          moreComp: 'See more widgets'
        },
        cn: {
          template: '模板',
          genForm: '生成表单',
          getData: '获取表单数据',
          notValidJSON: '不是有效的JSON数据',
          moreComp: '看看更多的组件'
        }
      },
      ncformSchema: {
        type: "object",
        properties: {
          username: {
            type: "string",
            ui: {
              columns: 6,
              label: "username"
            }
          }
        }
      },
      ncformValue: {},

      selectVal: "0",
      options: [
        {
          value: "0",
          label: {
            cn: "基础使用",
            en: "Basic"
          },
        },
        {
          value: "1",
          label: {
            cn: "基础使用-丰富显示",
            en: "Basic-Rich Display"
          },
        },
        {
          value: "2",
          label: {
            cn: "基础使用-多列布局",
            en: "Basic-Multi Columns"
          },
        },
        {
          value: "22",
          label: {
            cn: "基础使用-媒体预览",
            en: "Basic-Media Preview"
          },
        },
        {
          value: "3",
          label: {
            cn: "基础使用-标签居左",
            en: "Basic-Label Left"
          },
        },
        {
          value: "4",
          label: {
            cn: "基础使用-校验规则",
            en: "Basic-Verification Rule"
          },
        },
        {
          value: "5",
          label: {
            cn: "基础使用-数组类型",
            en: "Basic-Array Type"
          },
        },
        {
          value: "6",
          label: {
            cn: "基础使用-表格数组",
            en: "Basic-Table Array"
          },
        },
        {
          value: "7",
          label: {
            cn: "基础使用-标签数组",
            en: "Basic-Tabs Array"
          },
        },
        {
          value: "77",
          label: {
            cn: "基础使用-分隔栏",
            en: "Basic-Separator"
          },
        },
        {
          value: "8",
          label: {
            cn: "高级玩法-控件交互 dx表达式",
            en: "Adv-Control Interaction [dx expression]"
          },
        },
        {
          value: "9",
          label: {
            cn: "高级玩法-数组项交互 dx表达式",
            en: "Adv-Array Item Interaction [dx expression]"
          },
        },
        {
          value: "10",
          label: {
            cn: "高级玩法-下拉框值交互 dx表达式",
            en: "Adv-Selector Interaction [dx expression]"
          },
        },
        {
          value: "101",
          label: {
            cn: "高级玩法-校验关联 dx表达式",
            en: "Adv-Check Association [dx expression]"
          },
        },
        {
          value: "11",
          label: {
            cn: "高级玩法-自定义校验规则 dx表达式",
            en: "Adv-Custom Rule [dx expression]"
          },
        },
        {
          value: "12",
          label: {
            cn: "高级玩法-全局常量 dx表达式",
            en: "Adv-Global Constant [dx expression]"
          },
        },
        {
          value: "13",
          label: {
            cn: "高级玩法-跟随 dx表达式",
            en: "Adv-Follow [dx expression]"
          },
        },
        {
          value: "14",
          label: {
            cn: "高级玩法-临时变量 dx表达式",
            en: "Adv-Temp Value [dx expression]"
          },
        }
      ],
      templates: {
        "0": {
          type: "object",
          properties: {
            name: {
              type: "string"
            },
            email: {
              type: "string"
            },
            age: {
              type: "integer"
            },
            adult: {
              type: "boolean"
            }
          }
        },
        "1": {
          type: "object",
          properties: {
            name: {
              type: "string",
              ui: {
                label: "Name",
                description: "Please fill in your name.",
                placeholder: "Name"
              }
            },
            email: {
              type: "string",
              ui: {
                label: "Email"
              }
            },
            age: {
              type: "integer",
              default: 18,
              ui: {
                label: "Age"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "Adult",
                help: {
                  show: true,
                  text: "?",
                  content: "Adults can play games."
                }
              }
            }
          }
        },
        "2": {
          type: "object",
          properties: {
            firstname: {
              type: "string",
              ui: {
                columns: 3,
                label: "Name",
                placeholder: "First name"
              }
            },
            lastname: {
              type: "string",
              ui: {
                columns: 3,
                showLabel: false,
                placeholder: "Last name"
              }
            },
            email: {
              type: "string",
              ui: {
                columns: 6,
                label: "Email"
              }
            },
            age: {
              type: "integer",
              ui: {
                columns: 6,
                label: "Age"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                columns: 6,
                label: "adult",
                help: {
                  show: true,
                  text: "?",
                  content: "Adults can play games"
                }
              }
            }
          }
        },

        "22": {
          type: "object",
          properties: {
            image: {
              type: "string",
              default:
                "https://upload-images.jianshu.io/upload_images/2195795-e3c500e4b7d17b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              ui: {
                label: "Image",
                columns: 6,
                preview: {
                  type: "image",
                  value: "dx: {{$self}}",
                  clearable: true,
                  outward: {
                    width: 150,
                    height: 150,
                    shape: "circle"
                  }
                }
              }
            },
            video: {
              type: "string",
              default: "https://www.w3schools.com/html/mov_bbb.mp4",
              ui: {
                label: "Video",
                columns: 6,
                preview: {
                  type: "video"
                }
              }
            },
            audio: {
              type: "string",
              default: "https://www.w3schools.com/html/mov_bbb.mp4",
              ui: {
                label: "Audio",
                columns: 6,
                preview: {
                  type: "audio"
                }
              }
            },
            link: {
              type: "string",
              default: "https://www.baidu.com",
              ui: {
                label: "Link",
                columns: 6,
                preview: {
                  type: "link"
                }
              }
            }
          }
        },

        "3": {
          type: "object",
          properties: {
            firstname: {
              type: "string",
              ui: {
                label: "Name",
                placeholder: "First name"
              }
            },
            lastname: {
              type: "string",
              ui: {
                showLabel: false,
                placeholder: "Last name"
              }
            },
            email: {
              type: "string",
              ui: {
                label: "Email"
              }
            },
            age: {
              type: "integer",
              ui: {
                label: "Age"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "Adult",
                help: {
                  show: true,
                  text: "?",
                  content: "Adults can play games"
                }
              }
            }
          },
          ui: {
            widgetConfig: {
              layout: "h"
            }
          }
        },
        "4": {
          type: "object",
          properties: {
            name: {
              type: "string",
              ui: {
                label: "Name",
                description: "Please fill in your name",
                placeholder: "Name"
              },
              rules: {
                required: true,
                minLength: 10
              }
            },
            email: {
              type: "string",
              ui: {
                label: "Email"
              },
              rules: {
                required: true,
                email: {
                  value: true,
                  errMsg: "Please fill in a valid email address"
                }
              }
            },
            age: {
              type: "integer",
              ui: {
                label: "Age"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "Adult",
                help: {
                  show: true,
                  text: "?",
                  content: "Adults can play games"
                }
              }
            }
          }
        },
        "5": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    ui: {
                      label: "Name",
                      description: "Please fill in your name",
                      placeholder: "Name"
                    },
                    rules: {
                      required: true
                    }
                  },
                  email: {
                    type: "string",
                    ui: {
                      label: "Email"
                    },
                    rules: {
                      required: true,
                      email: true
                    }
                  },
                  age: {
                    type: "integer",
                    ui: {
                      label: "Age"
                    }
                  },
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "Adult",
                      help: {
                        show: true,
                        text: "?",
                        content: "Adults can play games"
                      }
                    }
                  }
                },
                ui: {
                  label: "User"
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widgetConfig: {
                  showOneIfEmpty: true
                }
              }
            }
          }
        },
        "6": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    ui: {
                      label: "Name",
                      description: "Please fill in your name",
                      placeholder: "Name"
                    },
                    rules: {
                      required: true
                    }
                  },
                  email: {
                    type: "string",
                    ui: {
                      label: "Email"
                    },
                    rules: {
                      required: true,
                      email: true
                    }
                  },
                  age: {
                    type: "integer",
                    ui: {
                      label: "Age"
                    }
                  },
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "Adult",
                      help: {
                        show: true,
                        text: "?",
                        content: "Adults can play games"
                      }
                    }
                  }
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widget: "array-table",
                widgetConfig: {
                  disableCollapse: true,
                  showOneIfEmpty: true
                }
              }
            }
          }
        },
        "7": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    ui: {
                      label: "Name",
                      description: "Please fill in your name",
                      placeholder: "Name"
                    },
                    rules: {
                      required: true
                    }
                  },
                  email: {
                    type: "string",
                    ui: {
                      label: "Email"
                    },
                    rules: {
                      required: true,
                      email: true
                    }
                  },
                  age: {
                    type: "integer",
                    ui: {
                      label: "Age"
                    }
                  },
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "Adult",
                      help: {
                        show: true,
                        text: "?",
                        content: "Adults can play games"
                      }
                    }
                  }
                },
                ui: {
                  label: "User"
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widget: "array-tabs",
                widgetConfig: {
                  showOneIfEmpty: true
                }
              }
            }
          }
        },
        "77": {
          type: "object",
          properties: {
            _line1: {
              type: 'HTML',
              value: '<div style="border-left: 4px solid orange; padding-left: 6px; color: orange">  Basic Information</div>'
            },
            name: {
              type: "string",
              ui: {
                label: "Name",
                description: "Please fill in your name",
                placeholder: "Name"
              }
            },
            email: {
              type: "string",
              ui: {
                label: "Email"
              }
            },
            _line2: {
              type: 'HTML',
              value: '<div style="border-left: 4px solid orange; margin-top:10px; padding-left: 6px; color: orange">  Other Information</div>'
            },
            age: {
              type: "integer",
              default: 18,
              ui: {
                label: "Age"
              }
            },
            adult: {
              type: "boolean",
              ui: {
                label: "Adult",
                help: {
                  show: true,
                  text: "?",
                  content: "Adults can play games"
                }
              }
            }
          }
        },
        "8": {
          type: "object",
          properties: {
            age: {
              type: "integer",
              ui: {
                label: "Age",
                description: "More than 18 years old to continue filling"
              }
            },
            gameInfo: {
              type: "object",
              properties: {
                game: {
                  type: "string",
                  ui: {
                    label: "Like games",
                    description: "Fill in and unlock"
                  }
                },
                gameAge: {
                  type: "integer",
                  ui: {
                    label: "Game age",
                    disabled: "dx: !{{$root.gameInfo.game}}"
                  }
                }
              },
              ui: {
                legend: "Game info",
                hidden: "dx: !{{$root.age}} || {{$root.age}} < 18"
              }
            }
          }
        },
        "9": {
          type: "object",
          properties: {
            user: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  adult: {
                    type: "boolean",
                    ui: {
                      label: "Adult",
                      help: {
                        show: true,
                        text: "?"
                      }
                    }
                  },
                  gameName: {
                    type: "string",
                    ui: {
                      label: "Like games",
                      disabled: "dx: !{{$root.user[i].adult}}"
                    }
                  },
                  gameAge: {
                    type: "integer",
                    ui: {
                      label: "Game age",
                      disabled: "dx: !{{$root.user[i].adult}}"
                    }
                  }
                }
              },
              ui: {
                showLegend: false,
                noLabelSpace: true,
                widget: "array-table",
                widgetConfig: {
                  showOneIfEmpty: true
                }
              }
            }
          }
        },
        "10": {
          type: "object",
          properties: {
            province: {
              type: "string",
              ui: {
                label: "Province",
                widget: "select",
                widgetConfig: {
                  itemLabelField: "name", // 项数据表示label的字段
                  itemValueField: "id", // 项数据表示value的字段
                  enumSourceRemote: {
                    // 远程数据源
                    remoteUrl: "/api/test/getProvinces", // 如果是远程访问，则填写该url
                    paramName: "keyword" // 请求参数名，默认是keyword
                  }
                }
              }
            },
            city: {
              type: "string",
              ui: {
                label: "City",
                widget: "select",
                widgetConfig: {
                  itemLabelField: "name", // 项数据表示label的字段
                  itemValueField: "id", // 项数据表示value的字段
                  enumSourceRemote: {
                    // 远程数据源
                    remoteUrl: "/api/test/getCities", // 如果是远程访问，则填写该url
                    paramName: "keyword", // 请求参数名，默认是keyword
                    otherParams: {
                      provinceId: "dx: {{$root.province}}"
                    }
                  }
                }
              }
            }
          }
        },
        "101": {
          type: "object",
          properties: {
            isRequired: {
              type: "boolean",
              ui: {
                label: "Required",
                linkFields: [
                  {
                    fieldPath: "num_1",
                    rules: ["required"]
                  },
                  {
                    fieldPath: "num_2",
                    rules: ["required"]
                  }
                ]
              }
            },
            num_1: {
              type: "number",
              ui: {
                description: "num_1 >= num_2",
                columns: 6,
                linkFields: [
                  {
                    fieldPath: "num_2",
                    rules: ["maximum"]
                  }
                ]
              },
              rules: {
                required: {
                  value: "dx: {{$root.isRequired}}"
                },
                minimum: {
                  value: "dx: {{$root.num_2}} || 0",
                  errMsg: "num_1 >= num_2"
                }
              }
            },
            num_2: {
              type: "number",
              ui: {
                columns: 6,
                linkFields: [
                  {
                    fieldPath: "num_1",
                    rules: ["minimum"]
                  }
                ]
              },
              rules: {
                required: {
                  value: "dx: {{$root.isRequired}}"
                },
                maximum: {
                  value: "dx: {{$root.num_1}} || 0",
                  errMsg: "num_2 <= num_1"
                }
              }
            }
          }
        },
        "11": {
          type: "object",
          properties: {
            startTime: {
              type: "string",
              ui: {
                widget: "date-picker"
              },
              rules: {
                customRule: [
                  {
                    script:
                      "dx: !{{$root.endTime}} || {{$root.endTime}} >= {{$root.startTime}}", // 支持dx表达式
                    errMsg: "Start date must be less than or equal to the end date", // 验证错误信息
                    linkItems: [
                      // 当触发校验时，同时触发这些关联的项进行校验
                      {
                        fieldPath: "endTime", // 关联项
                        customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                      }
                    ]
                  }
                ]
              }
            },
            endTime: {
              type: "string",
              ui: {
                widget: "date-picker"
              },
              rules: {
                customRule: [
                  {
                    script:
                      "dx: !{{$root.startTime}} || {{$root.endTime}} >= {{$root.startTime}}", // 支持dx表达式
                    errMsg: "End date must be greater than or equal to the start date", // 验证错误信息
                    linkItems: [
                      // 当触发校验时，同时触发这些关联的项进行校验
                      {
                        fieldPath: "startTime", // 关联项
                        customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                      }
                    ]
                  }
                ]
              }
            },
            arrayItems: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  startTime: {
                    type: "string",
                    ui: {
                      widget: "date-picker"
                    },
                    rules: {
                      customRule: [
                        {
                          script:
                            "dx: !{{$root.arrayItems[i].endTime}} || {{$root.arrayItems[i].endTime}} >= {{$root.arrayItems[i].startTime}}", // 支持dx表达式
                          errMsg: "Start date must be less than or equal to the end date", // 验证错误信息
                          linkItems: [
                            // 当触发校验时，同时触发这些关联的项进行校验
                            {
                              fieldPath: "arrayItems[i].endTime", // 关联项
                              customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                            }
                          ]
                        }
                      ]
                    }
                  },
                  endTime: {
                    type: "string",
                    ui: {
                      widget: "date-picker"
                    },
                    rules: {
                      customRule: [
                        {
                          script:
                            "dx: !{{$root.arrayItems[i].startTime}} || {{$root.arrayItems[i].endTime}} >= {{$root.arrayItems[i].startTime}}", // 支持dx表达式
                          errMsg: "End date must be greater than or equal to the start date", // 验证错误信息
                          linkItems: [
                            // 当触发校验时，同时触发这些关联的项进行校验
                            {
                              fieldPath: "arrayItems[i].startTime", // 关联项
                              customRuleIdx: 0 // 触发该项的自定义验证规则的索引
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              },
              ui: {
                showLabel: false,
                legend: "Array item",
                widget: "array-table",
                widgetConfig: {
                  collapsed: false,
                  showOneIfEmpty: true
                }
              }
            }
          }
        },
        "12": {
          type: "object",
          properties: {
            age: {
              type: "string",
              ui: {
                placeholder: 'dx: "Age must be greater than " + {{$const.ageLimit}}'
              },
              rules: {
                customRule: [
                  {
                    script: "dx: {{$root.age}} > {{$const.ageLimit}}", // 支持dx表达式
                    errMsg: "Please fill in the correct age" // 验证错误信息
                  }
                ]
              }
            }
          },
          globalConfig: {
            constants: {
              ageLimit: 18
            }
          }
        },
        "13": {
          type: "object",
          properties: {
            firstname: {
              type: 'string',
              ui: {
                columns: 6
              }
            },
            lastname: {
              type: 'string',
              ui: {
                columns: 6
              }
            },
            fullname: {
              type: 'string',
              valueTemplate: 'dx: {{$root.firstname}} + " " +　{{$root.lastname}}',
              ui: {
                columns: 12
              }
            }
          }
        },
        "14": {
          type: "object",
          properties: {
            item: {
              type: 'string',
              ui: {
                description: 'Currently only select, radio, checkbox supports this feature.',
                widget: 'select',
                widgetConfig: {
                  itemDataKey: 'selectedItem',
                  enumSource: [
                    {
                      value: '1',
                      label: 'ncform',
                      desc: 'ncform is a very nice configuration generation way to develop forms'
                    },
                    {
                      value: '2',
                      label: 'daniel',
                      desc: "Daniel is the author of ncform"
                    }
                  ]
                }
              }
            },
            desc: {
              valueTemplate: 'dx: {{$temp.selectedItem.desc}} || ""',
            }
          }
        }
      }
    };
  },

  computed: {
    listOptions() {
      return this.$data.options.map(item => ({
        value: item.value,
        label: item.label[this.$data.lang]
      }))
    },
    i18n() {
      return this.$data.i18nData[this.$data.lang];
    }
  },

  /* ====================== 事件处理 ====================== */

  methods: {
    createEditor() {
      window.editor = this.$options.editor = window.ace.edit(this.$refs.editor);
      this.$options.editor.$blockScrolling = Infinity;
    },
    templateChange(v) {
      this.$options.editor.setValue(
        JSON.stringify(this.$data.templates[v], null, 2),
        1
      );
      this.$data.ncformSchema = JSON.parse(this.$options.editor.getValue());
      this.$data.ncformValue = {};
    },
    createForm() {
      const value = this.$options.editor.getValue();
      try {
        eval('this.$data.ncformSchema = '+value);
        this.$data.ncformValue = {};
      } catch (err) {
        alert(this.i18n.notValidJSON);
        throw new Error(`createForm Error:${err}`);
      }
    },
    getFormData() {
      this.$ncformValidate("preview-form").then(res => {
        if (res.result) {
          const data = JSON.stringify(this.$data.ncformValue, null, 2);
          alert(data);
        }
      });
    },
    langChange() {
      let url = location.pathname + '?lang=' + this.$data.lang;
      window.history.replaceState("", document.title, url);
      window.location.reload();
    }
  }
};
