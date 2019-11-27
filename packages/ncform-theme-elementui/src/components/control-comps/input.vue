<template>
  <div class="ncform-input">
    <!-- 没有自动补全 -->
    <el-input
      v-if="!mergeConfig.autocomplete"
      :size="mergeConfig.size"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      v-show="!hidden"
      :clearable="mergeConfig.clearable"
      :type="mergeConfig.type === 'file' ? 'text' : mergeConfig.type"
      :prefix-icon="mergeConfig.prefixIcon"
      :suffix-icon="mergeConfig.suffixIcon"
      @blur="onBlur"
      v-model="inputVal"
    >
      <template v-if="mergeConfig.type !== 'file' && mergeConfig.compound">
        <template
          slot="prepend"
          v-if="mergeConfig.compound.prependLabel"
        >{{mergeConfig.compound.prependLabel}}</template>
        <template
          slot="append"
          v-if="mergeConfig.compound.appendLabel"
        >{{mergeConfig.compound.appendLabel}}</template>

        <el-button
          slot="prepend"
          v-if="mergeConfig.compound.prependIcon"
          :icon="mergeConfig.compound.prependIcon"
        ></el-button>
        <el-button
          slot="append"
          v-if="mergeConfig.compound.appendIcon"
          :icon="mergeConfig.compound.appendIcon"
        ></el-button>

        <el-select
          v-if="mergeConfig.compound.prependSelect"
          v-model="prependSelectVal"
          slot="prepend"
          :placeholder="mergeConfig.compound.prependSelect.placeholder || $nclang('selectPls')"
        >
          <el-option
            v-for="item in prependSelectOptions"
            :label="item[mergeConfig.compound.prependSelect.itemLabelField]"
            :value="item[mergeConfig.compound.prependSelect.itemValueField]"
            :key="item[mergeConfig.compound.prependSelect.itemValueField]"
          ></el-option>
        </el-select>

        <el-select
          v-if="mergeConfig.compound.appendSelect"
          v-model="appendSelectVal"
          slot="append"
          :placeholder="mergeConfig.compound.appendSelect.placeholder || $nclang('selectPls')"
        >
          <el-option
            v-for="item in appendSelectOptions"
            :label="item[mergeConfig.compound.appendSelect.itemLabelField]"
            :value="item[mergeConfig.compound.appendSelect.itemValueField]"
            :key="item[mergeConfig.compound.appendSelect.itemValueField]"
          ></el-option>
        </el-select>
      </template>

      <!--上传类型-->
      <template v-else-if="mergeConfig.type === 'file' && mergeConfig.upload">
        <el-button
          slot="append"
          v-if="mergeConfig.upload.uploadUrl"
          class="ncform-input-upload"
          @click="handleClickUpload"
        >
          {{isUploading ? $nclang('uploading') : mergeConfig.upload.uploadText || $nclang('upload')}}
          <input
            type="file"
            ref="upload"
            :accept="mergeConfig.upload.accept || ''"
            @change="handleFileChange"
          >
        </el-button>
      </template>
    </el-input>

    <!-- 自动补全 -->
    <el-autocomplete
      v-else
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      v-show="!hidden"
      :clearable="mergeConfig.clearable"
      :size="mergeConfig.size"
      :type="mergeConfig.type"
      :prefix-icon="mergeConfig.prefixIcon"
      :suffix-icon="mergeConfig.suffixIcon"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="!!mergeConfig.autocomplete.immediateShow"
      :value-key="mergeConfig.autocomplete.itemValueField || 'value'"
      v-model="inputVal"
      @select="onSelectSuggectionItem"
      @blur="onBlur"
    >
      <template
        slot-scope="props"
        v-if="mergeConfig.autocomplete && mergeConfig.autocomplete.itemTemplate"
      >
        <component :is="itemTemplate" :item="props.item"></component>
      </template>

      <template v-if="mergeConfig.compound">
        <template
          slot="prepend"
          v-if="mergeConfig.compound.prependLabel"
        >{{mergeConfig.compound.prependLabel}}</template>
        <template
          slot="append"
          v-if="mergeConfig.compound.appendLabel"
        >{{mergeConfig.compound.appendLabel}}</template>

        <el-button
          slot="prepend"
          v-if="mergeConfig.compound.prependIcon"
          :icon="mergeConfig.compound.prependIcon"
        ></el-button>
        <el-button
          slot="append"
          v-if="mergeConfig.compound.appendIcon"
          :icon="mergeConfig.compound.appendIcon"
        ></el-button>

        <el-select
          v-if="mergeConfig.compound.prependSelect"
          v-model="prependSelectVal"
          slot="prepend"
          :placeholder="mergeConfig.compound.prependSelect.placeholder || $nclang('selectPls')"
        >
          <el-option
            v-for="item in prependSelectOptions"
            :label="item[mergeConfig.compound.prependSelect.itemLabelField]"
            :value="item[mergeConfig.compound.prependSelect.itemValueField]"
            :key="item[mergeConfig.compound.prependSelect.itemValueField]"
          ></el-option>
        </el-select>

        <el-select
          v-if="mergeConfig.compound.appendSelect"
          v-model="appendSelectVal"
          slot="append"
          :placeholder="mergeConfig.compound.appendSelect.placeholder || $nclang('selectPls')"
        >
          <el-option
            v-for="item in appendSelectOptions"
            :label="item[mergeConfig.compound.appendSelect.itemLabelField]"
            :value="item[mergeConfig.compound.appendSelect.itemValueField]"
            :key="item[mergeConfig.compound.appendSelectVal.itemValueField]"
          ></el-option>
        </el-select>
      </template>
    </el-autocomplete>
  </div>
</template>

<style lang="scss">
.ncform-input {
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .ncform-input-upload {
    [type="file"] {
      display: none;
    }
  }
  .el-autocomplete {
    width: 100%;
  }
}
</style>

<script>
import ncformCommon from "@ncform/ncform-common";
import _get from "lodash-es/get";
import _cloneDeep from "lodash-es/cloneDeep";

const controlMixin = ncformCommon.mixins.vue.controlMixin;

export default {
  mixins: [controlMixin],

  i18nData: {
    en: {
      selectPls: "Select Please",
      uploading: "Uploading...",
      upload: "Upload",
      uploadFail: "Upload failed, please try again later!",
      resolutionTip1:
        "Please upload an image of <%= right %>, your image is <%= wrong %>",
      resolutionTip2:
        "Please upload an image with an aspect ratio of <%= right %>. Your image aspect ratio is <%= wrong %>",
      sizeTips1:
        "Please upload a file smaller than <%= right %>KB, your file is <%= wrong %>KB",
      sizeTips2:
        "Please upload a file larger than <%= right %>KB, your file is <%= wrong %>KB"
    },
    zh_cn: {
      selectPls: "请选择",
      uploading: "上传中...",
      upload: "点击上传",
      uploadFail: "上传失败，请稍后再试！",
      resolutionTip1: "请上传<%= right %>的图片，你的图片为<%= wrong %>",
      resolutionTip2:
        "请上传宽高比为<%= right %>的图片，你的图片宽高比为<%= wrong %>",
      sizeTips1: "请上传小于<%= right %>KB的文件，您的文件为<%= wrong %>KB",
      sizeTips2: "请上传大于<%= right %>KB的文件，您的文件为<%= wrong %>KB"
    }
  },

  props: {
    value: {
      type: [String, Number, Object]
    }
  },

  created() {
    this.$watch("inputVal", (newVal, oldVal) => {
      if ((!newVal && !oldVal) || this.mergeConfig.updateOn === 'blur') return;
      let val = this._processModelVal();
      this.$emit("input", val);
    });

    if (this.$data.modelVal !== undefined) {
      this.$data.inputVal =
        ["string", "number"].indexOf(typeof this.$data.modelVal) >= 0
          ? this.$data.modelVal
          : this.$data.modelVal[this.mergeConfig.modelField];
    }

    if (_get(this.mergeConfig, "autocomplete.itemTemplate")) {
      this.$data.itemTemplate.template = _get(
        this.mergeConfig,
        "autocomplete.itemTemplate"
      );
    }

    if (_get(this.mergeConfig, "compound.prependSelect")) {
      if (_get(this.mergeConfig, "compound.prependSelect.enumSource")) {
        this.$data.prependSelectOptions = _get(
          this.mergeConfig,
          "compound.prependSelect.enumSource"
        );
      } else {
        this.$http({
          url: _get(
            this.mergeConfig,
            "compound.prependSelect.enumSourceRemote.remoteUrl"
          )
        }).then(res => {
          this.$data.prependSelectOptions = this.mergeConfig.compound
            .prependSelect.enumSourceRemote.resField
            ? _get(
                res.data,
                this.mergeConfig.compound.prependSelect.enumSourceRemote
                  .resField
              )
            : res.data;
        });
      }
      this.$data.prependSelectVal = _get(
        this.value,
        _get(this.mergeConfig, "compound.prependSelect.modelField")
      );
      this.$watch("prependSelectVal", function() {
        let val = this._processModelVal();
        this.$emit("input", val);
      });
    }

    if (_get(this.mergeConfig, "compound.appendSelect")) {
      if (_get(this.mergeConfig, "compound.appendSelect.enumSource")) {
        this.$data.appendSelectOptions = _get(
          this.mergeConfig,
          "compound.appendSelect.enumSource"
        );
      } else {
        this.$http({
          url: _get(
            this.mergeConfig,
            "compound.appendSelect.enumSourceRemote.remoteUrl"
          )
        }).then(res => {
          this.$data.appendSelectOptions = this.mergeConfig.compound
            .appendSelect.enumSourceRemote.resField
            ? _get(
                res.data,
                this.mergeConfig.compound.appendSelect.enumSourceRemote
                  .resField
              )
            : res.data;
        });
      }
      this.$data.appendSelectVal = _get(
        this.value,
        _get(this.mergeConfig, "compound.appendSelect.modelField")
      );

      this.$watch("appendSelectVal", function() {
        let val = this._processModelVal();
        this.$emit("input", val);
      });
    }
  },

  data() {
    return {
      prependSelectOptions: [],
      prependSelectVal: "",
      appendSelectOptions: [],
      appendSelectVal: "",

      itemTemplate: {
        props: ["item"],
        template: ""
      },

      isUploading: false,

      inputVal: "",

      defaultConfig: {
        type: "text",
        trim: false,
        clearable: false,
        prefixIcon: "",
        suffixIcon: "",
        modelField: "",
        updateOn: 'change', // change or blur
        size: '',

        // autocomplete: { // 自动补全
        //   itemLabelField: 'label', // 项数据表示label的字段
        //   itemValueField: 'value', // 项数据表示value的字段
        //   itemTemplate: '<span>{{item.label}} : {{item.value}}</span>', // 显示项的模板
        //   immediateShow: false, // 是否立即显示，如果为false则当输入关键字才显示
        //   enumSource: [{value: [String | Number | Boolean], label: ''}], // 当提示数据是本地而非远程时提供
        //   enumSourceRemote: {
        //     remoteUrl: '', // 如果是远程访问，则填写该url
        //     paramName: 'keyword', // 请求参数名，默认是keyword
        //     otherParams: {}, // 其它请求参数，值支持 dx表达式
        //     resField: '', // 响应结果的字段
        //   }
        // },

        // compound: { // 组合
        //   prependLabel: '', // 前置标签
        //   appendLabel: '', // 后置标签
        //   prependIcon: '', // 后置图标样式
        //   appendIcon: '', // 前置图标样式
        //   prependSelect: { // 前置下拉框，使用该种的数据必须是对象
        //     itemLabelField: 'label', // 项数据表示label的字段
        //     itemValueField: 'value', // 项数据表示value的字段
        //     enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
        //     enumSourceRemote: { // 远程数据源
        //       remoteUrl: '', // 如果是远程访问，则填写该url
        //       resField: '', // 响应结果的字段
        //     },
        //     modelField: '' // 用于绑定input value值的某个属性
        //   },
        //   appendSelect: { // 后置下拉框，使用该种的数据必须是对象
        //     itemLabelField: 'label', // 项数据表示label的字段
        //     itemValueField: 'value', // 项数据表示value的字段
        //     enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
        //     enumSourceRemote: { // 远程数据源
        //       remoteUrl: '', // 如果是远程访问，则填写该url
        //       resField: '', // 响应结果的字段
        //     },
        //     modelField: '' // 用于绑定input value值的某个属性
        //   }
        // }

        upload: {
          // 上传的参数配置（当type="file"时，只认这个参数）
          uploadUrl: "", // 上传的地址
          data: {}, // 上传时附带的额外参数
          fileField: "file", // 表示文件的字段，默认是file
          accept: "", // 接受上传的文件类型
          constraint: {
            // 约束
            width: 0, // 图片宽度
            height: 0, // 图片高度
            sizeFixed: true, // 图片尺寸约束的大小是否按固定值，当为false时按比例
            maxSize: 0, // 最大图片大小，单位KB，0代表不限
            minSize: 0 // 最小图片大小，单位KB，0代表不限
          },
          resField: "", // 获取返回结果的字段,
          uploadText: "", //  上传按钮的名称
          headers: {}
        }
      }
    };
  },

  methods: {
    querySearch(queryString, cb) {
      const autoCpl = this.mergeConfig.autocomplete;

      // 本地数据源的处理
      if (autoCpl.enumSource) {
        cb(
          autoCpl.enumSource.filter(item => {
            let itemVal = item[autoCpl.itemValueField || "value"]
              .toString()
              .toLowerCase();
            return itemVal.indexOf(queryString.toLowerCase()) !== -1;
          })
        );
        return;
      }

      // 下面是远程数据源的处理
      const options = {
        url: autoCpl.enumSourceRemote.remoteUrl,
        params: _cloneDeep(_get(this.mergeConfig, "autocomplete.enumSourceRemote.otherParams", {}))
      };
      if (autoCpl.enumSourceRemote.paramName)
        options.params[autoCpl.enumSourceRemote.paramName] = queryString;

      this.$http(options).then(res => {
        cb(
          autoCpl.enumSourceRemote.resField
            ? _get(res.data, autoCpl.enumSourceRemote.resField)
            : res.data
        );
      });
    },

    handleClickUpload() {
      // 处理选中的input[type="file"]
      const vm = this;
      if (!vm.disabled) {
        vm.$refs.upload.value = null;
        vm.$refs.upload.click();
      }
    },

    handleFileChange() {
      const vm = this;
      const fd = new FormData();
      const { uploadUrl, data, resField, fileField, headers = {} } = vm.mergeConfig.upload;
      const sendObj = Object.assign({}, data);
      sendObj[fileField] = this.$refs.upload.files[0];

      // 判断是否符合大小约束
      let fileSize = sendObj[fileField].size / 1024;
      if (
        vm.mergeConfig.upload.constraint.maxSize &&
        fileSize > vm.mergeConfig.upload.constraint.maxSize
      ) {
        vm.$message({
          message: vm.$nclang("sizeTips1", {
            right: vm.mergeConfig.upload.constraint.maxSize,
            wrong: fileSize.toFixed(0)
          }),
          type: "error"
        });
        return;
      }
      if (
        vm.mergeConfig.upload.constraint.minSize &&
        fileSize < vm.mergeConfig.upload.constraint.minSize
      ) {
        vm.$message({
          message: vm.$nclang("sizeTips2", {
            right: vm.mergeConfig.upload.constraint.minSize,
            wrong: fileSize.toFixed(0)
          }),
          type: "error"
        });
        return;
      }

      // 图片类型判断是否符合宽高要求
      let jurgeImgPromise = new Promise(resolve => {
        if (
          sendObj[fileField].type.indexOf("image") >= 0 &&
          vm.mergeConfig.upload.constraint.width &&
          vm.mergeConfig.upload.constraint.height
        ) {
          let reader = new FileReader();
          reader.onload = function(theFile) {
            var image = new Image();
            image.onload = function() {
              let pass = false;
              if (vm.mergeConfig.upload.constraint.sizeFixed) {
                pass =
                  this.width === vm.mergeConfig.upload.constraint.width &&
                  this.height === vm.mergeConfig.upload.constraint.height;
              } else {
                pass =
                  (this.width / this.height).toFixed(1) ===
                  (
                    vm.mergeConfig.upload.constraint.width /
                    vm.mergeConfig.upload.constraint.height
                  ).toFixed(1);
              }
              if (!pass) {
                if (vm.mergeConfig.upload.constraint.sizeFixed) {
                  vm.$message({
                    message: vm.$nclang("resolutionTip1", {
                      right: `${vm.mergeConfig.upload.constraint.width}x${
                        vm.mergeConfig.upload.constraint.height
                      }`,
                      wrong: `${this.width}x${this.height}`
                    }),
                    type: "error"
                  });
                } else {
                  vm.$message({
                    message: vm.$nclang("resolutionTip2", {
                      right: vm._getFractionalExpression(
                        vm.mergeConfig.upload.constraint.width /
                          vm.mergeConfig.upload.constraint.height,
                        0.01
                      ),
                      wrong: vm._getFractionalExpression(
                        this.width / this.height,
                        0.01
                      )
                    }),
                    type: "error"
                  });
                }
              } else {
                resolve();
              }
            };
            image.src = theFile.target.result;
          };
          reader.readAsDataURL(sendObj[fileField]);
        } else {
          resolve();
        }
      });

      jurgeImgPromise.then(() => {
        for (const [key, value] of Object.entries(sendObj)) {
          fd.append(key, value);
        }
        this.$data.isUploading = true;
        this.$http({
          method: "POST",
          url: uploadUrl,
          data: fd,
          headers: headers
        })
          .then(res => {
            this.$data.inputVal = _get(res, resField || "");
            this.$data.isUploading = false;
          })
          .catch(() => {
            vm.$message.error(this.$nclang("uploadFail"));
            this.$data.isUploading = false;
          });
      });
    },

    onBlur() {
      if (this.mergeConfig.updateOn === 'blur') {
        let val = this._processModelVal();
        this.$emit("input", val);
      }
    },

    onSelectSuggectionItem() {
      if (this.mergeConfig.updateOn === 'blur') {
        let val = this._processModelVal();
        this.$emit("input", val);
      }
    },

    _getFractionalExpression(value, threshold) {
      let i = 1,
        j = 1;
      while (Math.abs(i / j - value) > threshold) {
        if (i / j > value) {
          j++;
        } else if (i / j < value) {
          i++;
        }
      }
      return i + ":" + j;
    },

    // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
    _processModelVal(newVal) {
      let val;
      if (newVal !== undefined) {
        // mixin调用的
        if (typeof this.value === "object") {
          val = newVal[this.mergeConfig.modelField];
        } else {
          val = newVal;
        }
      } else {
        val = this.$data.inputVal;
      }

      if (this.mergeConfig.trim) {
        val = val ? val.toString().trim() : val;
      }

      switch (this.mergeConfig.type) {
        case "number":
          val = parseFloat(val);
          val = isNaN(val) ? "" : val;
          break;
        case "integer":
          val = parseInt(val);
          val = isNaN(val) ? "" : val;
          break;
        default:
          break;
      }

      if (typeof this.value === "object") {
        const obj = {};
        obj[this.mergeConfig.modelField] = val;
        if (_get(this.mergeConfig, "compound.prependSelect")) {
          obj[
            this.mergeConfig.compound.prependSelect.modelField
          ] = this.$data.prependSelectVal;
        }
        if (_get(this.mergeConfig, "compound.appendSelect")) {
          obj[
            this.mergeConfig.compound.appendSelect.modelField
          ] = this.$data.appendSelectVal;
        }
        return obj;
      } else {
        this.$data.inputVal = val;
        return val;
      }
    }
  }
};
</script>
