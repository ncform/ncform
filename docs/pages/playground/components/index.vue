<template>
  <br>
  <el-row>
    <el-col :span="12">
      <el-space>
        <div>模板：</div>
        <el-select
          v-model="schemaType"
          @change="handleSchemaSelect"
        >
          <el-option
            v-for="item in schemas"
            :key="item.value"
            :label="item.label.cn"
            :value="item.value"
          />
        </el-select>
      </el-space>
      <div class="schema-editor">
        <el-input
          v-model="formSchemaStr"
          type="textarea"
          :rows="30"
        />
      </div>
    </el-col>
    <el-col :span="12">
      <el-button @click="submit">
        获取表单数据
      </el-button>
      <client-only>
        <ncform
          v-if="formSchema"
          v-model="formData"
          :form-schema="formSchema"
          form-name="ncform-playground"
          @submit="submit"
        />
      </client-only>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNcform } from '@ncform-plus/ncform'
import schemas from './schemas'

const { ncformValidate } = useNcform()

const schemaType = ref('basic')
const formSchema = ref(schemas[0].schema)
const formSchemaStr = computed({
  get: () => JSON.stringify(formSchema.value, null, 2),
  set: val => {
    try {
      formSchema.value = JSON.parse(val)
    } catch {
      // noop
    }
  }
})
const formData = ref({})

const handleSchemaSelect = (type) => {
  const { schema } = schemas.find(item => item.value === type) || {}
  formSchema.value = schema
}

const submit = () => {
  ncformValidate('ncform-playground').then((data) => {
    if (data.result) alert(JSON.stringify(formData.value, null, 2))
  })
}
</script>

<style scoped>
.schema-editor {
  padding: 8px 12px 12px 0;
}
</style>
