/**
 * <playground></playground>
 */
import fixtures from './fixtures/index';

/**
 * Get Url Hash
 */
function getUrlHash() {
  const hash = window.location.hash.substr(1);
  return hash.split('&').reduce(function (res, item) {
    var parts = item.split('=');
    res[parts[0]] = parts[1];
    return res;
  }, {});
}

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

      // Get template from hash
      const hash = getUrlHash();
      const tpl = hash['tpl'] || this.listOptions[0].value;
      this.selectVal = this.listOptions.filter(item => item.value === tpl)[0] || this.listOptions[0];

      this.templateChange(this.selectVal);
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
      selectVal: null,
      fixtures: fixtures,
    };
  },

  computed: {
    listOptions() {
      return this.fixtures.map(item => ({
        value: item.value,
        label: item.label[this.lang],
        desc: item.desc ? item.desc[this.lang] : '',
        schema: item.schema,
      }));
    },
    i18n() {
      return this.i18nData[this.lang];
    }
  },

  /* ====================== 事件处理 ====================== */

  methods: {
    createEditor() {
      window.editor = this.$options.editor = window.ace.edit(this.$refs.editor);
      this.$options.editor.$blockScrolling = Infinity;
    },
    templateChange(v) {
      // Update url hash, so that people can copy the url and share the template to others
      window.location.hash = '#tpl=' + v.value;
      this.$options.editor.setValue(
        JSON.stringify(v.schema, null, 2),
        1
      );
      this.ncformSchema = JSON.parse(this.$options.editor.getValue());
      this.ncformValue = {};
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
