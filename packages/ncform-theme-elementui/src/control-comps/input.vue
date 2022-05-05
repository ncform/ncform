<template>
  <div class="ncform-input">
    <el-input
      v-model="modelVal"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import ncformCommon from '@ncform-plus/ncform-common'

export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],

  data () {
    return {
      defaultConfig: {}
    }
  }
}
</script>
