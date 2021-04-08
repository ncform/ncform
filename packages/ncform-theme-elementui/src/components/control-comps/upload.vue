<template>
  <el-upload
    ref="upload"
    :class="['ncform-upload', readonly ? 'is-read-only' : '']"
    :disabled="readonly || disabled"
    :style="{display: hidden ? 'none' : ''}"
    :action="mergeConfig.uploadUrl"
    :multiple="mergeConfig.multiple"
    :data="mergeConfig.data"
    :show-file-list="showFileList"
    :drag="mergeConfig.drag"
    :accept="mergeConfig.accept"
    :list-type="mergeConfig.listType"
    :auto-upload="mergeConfig.autoUpload"
    :limit="mergeConfig.limit"
    :on-change="handleUploadChange"
    :on-success="handleUploadSucess"
    :on-error="handleUploadError"
    :on-exceed="handleUploadExceed"
    :on-remove="handleUploadRemove"
    :file-list="fileList"
    :name="mergeConfig.fileField"
    :headers="mergeConfig.headers"
  >
    <!-- 1. 可拖拽 -->
    <template v-if="!readonly && mergeConfig.drag" slot="trigger">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text" v-html="$nclang('uploadTips')"></div>
    </template>
    <div v-if="mergeConfig.drag && disabled" class="disabled-mask"></div>

    <!-- 2 可拖拽，非自动上传 -->
    <el-button
      v-if="!readonly && mergeConfig.drag && !mergeConfig.autoUpload"
      :disabled="disabled"
      class="upload-btn"
      size="small"
      type="success"
      @click="submitUpload"
    >{{$nclang('uploadServer')}}</el-button>

    <!-- 3. 不可拖拽，自动上传-->
    <el-button
      v-if="!readonly && !mergeConfig.drag && mergeConfig.autoUpload"
      :disabled="disabled"
      size="small"
      type="primary"
    >{{$nclang('upload')}}</el-button>

    <!-- 4. 不可拖拽，非自动上传 -->
    <template v-if="!readonly && !mergeConfig.drag && !mergeConfig.autoUpload">
      <el-button
        :disabled="disabled"
        slot="trigger"
        size="small"
        type="primary"
      >{{$nclang('chFile')}}</el-button>
      <el-button
        :disabled="disabled"
        class="upload-btn"
        size="small"
        type="success"
        @click="submitUpload"
      >{{$nclang('uploadServer')}}</el-button>
    </template>

  </el-upload>
</template>

<style lang="scss">

  .h-layout {
    .ncform-upload {
      &.__ncform-control {
        clear: none;
      }
    }
  }

  .v-layout {
    .ncform-upload {
      &.__ncform-control {
        clear: both;
      }
    }
  }

  .ncform-upload {
    position: relative;

    .disabled-mask {
      position: absolute;
      top: 0;
      left: -10px;
      width: 370px;
      height: 180px;
      cursor: not-allowed;
    }

    .upload-btn {
      margin-left: 10px;
    }

    &.is-read-only{
      float: left;
      .el-upload {
        display: none;
      }
    }
  }
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';
  import _get from 'lodash-es/get';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    i18nData: {
      en: {
        uploadTips: 'Drag file here, or <em>click to upload</em>',
        uploadServer: 'Upload to server',
        upload: 'Upload',
        chFile: 'Select file',
        successChTips: '<%= fileCount %> files selected',
        uploadSuccess: 'Uploaded successfully!',
        uploadFail: 'Uploading files all failed!',
        uploadSomeFail: 'Some files failed to upload!',
        limitTips: 'No more than <%= limit %> files can be selected, please re-select'
      },
      zh_cn: {
        uploadTips: '将文件拖到此处，或<em>点击上传</em>',
        uploadServer: '上传到服务器',
        upload: '点击上传',
        chFile: '选取文件',
        successChTips: '共选中文件 <%= fileCount %> 个',
        uploadSuccess: '上传成功！',
        uploadFail: '上传文件全部失败！',
        uploadSomeFail: '部分文件上传失败！',
        limitTips: '选中文件不能多于<%= limit %>个，请重新选择'
      }
    },

    props: {
      value: {
        type: Array,
        default () {
          return [];
        }
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
          uploadUrl: '', // 上传的地址
          multiple: false, // 是否支持多选
          data: {}, // 上传时附带的额外参数
          showFileList: true, // 是否显示已上传文件列表
          drag: false, // 是否启用拖拽上传
          accept: '', // 接受上传的文件类型
          listType: 'text', // 文件列表的类型。 可选值：text/picture/picture-card
          autoUpload: false, // 是否在选取文件后立即进行上传
          limit: 1, // 最大允许上传个数
          constraint: { // 约束 TODO: 未实现
            width: 0, // 图片宽度
            height: 0, // 图片高度
            sizeFixed: true, // 图片尺寸约束的大小是否按固定值，当为false时按比例
            maxSize: 0, // 最大图片大小，单位KB，0代表不限
            minSize: 0 // 最小图片大小，单位KB，0代表不限
          },
          resField: '', // 获取返回结果的字段,
          fileNameField: 'name',
          fileUrlField: 'url',
          fileField: 'file',
          headers: {}
        },
        uploadInfo: {
          numUploaded: 0,
          total: 0,
          count: 0,
          num: {
            success: 0, // 成功个数
            error: 0  // 失败个数
          }
        }
        // modelVal：请使用该值来绑定实际的组件的model--> [{name: 'xx', url: ''}]
      }
    },

    computed: {
      // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为

      fileList() {
        const vm = this;
        const modelVal = vm.modelVal;
        let numUploaded = 0;
        for (let i in modelVal) {
          if (modelVal[i].status === 'success' || !(modelVal[i].status)) {
            numUploaded++;
            if (!(modelVal[i].status)) modelVal[i].status = 'success';
          }
        }
        vm.uploadInfo.numUploaded = numUploaded;
        return modelVal;
      },

      showFileList() {
        return this.readonly || this.mergeConfig.showFileList;
      }
    },

    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleUploadChange(file, fileList) {
        const vm = this;
        vm.uploadInfo.total = fileList.length - vm.uploadInfo.numUploaded;

        if (!vm.mergeConfig.autoUpload
          && !vm.mergeConfig.showFileList
          && fileList.length) {
            vm.$message({
              message: this.$nclang('successChTips', {fileCount: fileList.length}),
              type: 'success'
            });
        }
      },
      handleUploadSucess(res, file, fileList) { // 每个文件回调一次
        const vm = this;
        let i;
        for (i in fileList) {
          if (fileList[i].uid === file.uid) {
            const { resField, fileUrlField, fileNameField } = vm.mergeConfig;
            const resObj = _get(res, resField || '', {});
            fileList[i].name = resObj && resObj[fileNameField] || fileList[i].name;
            fileList[i].url = resObj && resObj[fileUrlField] || fileList[i].url;
            break;
          }
        }
        if (fileList[i].url) {
          vm.uploadCallback({ state: 'success', fileList });
        } else {
          // 去掉这个fileList
          fileList.splice(i,1);
          vm.uploadCallback({ state: 'error', fileList });
        }
      },
      handleUploadError(err, file, fileList) { // 每个文件回调一次
        this.uploadCallback({ state: 'error', fileList });
      },
      uploadCallback({state, fileList}) {
        const vm = this;
        const total = vm.uploadInfo.total;
        vm.uploadInfo.count++;
        vm.uploadInfo.num[state]++;
        if ( vm.uploadInfo.count === total) { // 完成上传
          let content;
          if (total === vm.uploadInfo.num[state]) {
            vm.$message({
              message: state === 'success' ? vm.$nclang('uploadSuccess') : vm.$nclang('uploadFail'),
              type: state
            });
          } else {
            vm.$message({
              message: vm.$nclang('uploadSomeFail'),
              type: 'error'
            });
          }

          vm.modelVal = fileList;
          vm.uploadInfo.count = 0;
          vm.uploadInfo.num.success = 0;
          vm.uploadInfo.num.error = 0;
        }
      },
      handleUploadExceed(files, fileList) {
        const vm = this;
        vm.$message({
          message: vm.$nclang('limitTips', {limit: vm.mergeConfig.limit}),
          type: 'warning'
        });
      },
      handleUploadRemove(file, fileList) {
        const vm = this;
        if (file.status === 'success') {
          vm.uploadInfo.numUploaded--;
        }
        vm.uploadInfo.total = fileList.length - vm.uploadInfo.numUploaded;
        vm.modelVal = fileList;
      },
    }
  }
</script>
