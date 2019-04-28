/**
 * <create-form-by-form></create-form-by-form>
 */
import { setTimeout, clearTimeout } from 'timers';
let buildJsonSchemaValueTimer = null;
const deepCopy = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};
const defauleSchemaFormConfig = {
    "type": "object",
    "ui": {
        "showLegend": false,
        "widgetConfig": {
            "layout": "h" 
        }
    }
};
export default {
    components: {},
    data() {
        return {
            componentCount: 0,
            componentKeyIndex: 0,//与count的区别是，index只会增加，不会减少
            addComponentPopoverShow: false,
            removeComponentPopoverShow: false,
            previewJsonSchemaForm: {
                type: 'object',
                ui: {
                    widgetConfig: {
                        layout: "h"
                    }
                },
                properties: {}
            },
            buildJsonSchemaForm: {...defauleSchemaFormConfig}
        };
    },
    watch: {
        'buildJsonSchemaForm.value'(newValue, oldValue) {
            // console.log('buildJsonSchemaForm.value changed new',JSON.stringify(newValue));
            // console.log('buildJsonSchemaForm.value changed old',JSON.stringify(oldValue));

            if(buildJsonSchemaValueTimer){
                clearTimeout(buildJsonSchemaValueTimer);
                buildJsonSchemaValueTimer = null;
            }
            buildJsonSchemaValueTimer = setTimeout(()=>{
                console.log('buildJsonSchemaForm.value change');
                this.initJsonSchemaComponents(newValue);
            },1500)

        }
    },
    created(){
        this.init();
    },
    methods: {
        // 初始化
        init() {

            const businessJsonSchema = require('./schema/build-json-schema.json');
            this.initBuildJsonSchemaComponents(businessJsonSchema);
            this.initJsonSchemaComponents(businessJsonSchema.value);
            
        },
        //构建表单
        initBuildJsonSchemaComponents(buildJsonSchema){

            console.log('buildJsonSchemaComponents',buildJsonSchema);
            const configProperties = deepCopy(buildJsonSchema.properties);
            console.log('configProperties',configProperties);
            const configValues = deepCopy(buildJsonSchema.value);
            const propertiesKeyList = Object.keys(configProperties);
            this.componentCount = propertiesKeyList.length || 0;
            this.componentKeyIndex = propertiesKeyList.length || 0;
            //添加默认值
            for(const key in configProperties){
                // console.log(key,'configProperties',configProperties[key]);
                // console.log(key,'fieldProperties',configProperties[key].properties);
                // console.log(key,'configValues',configValues[key]);
                const fieldProperties = configProperties[key].properties || {};
                for(const field in fieldProperties){
                    // console.log(field, 'properties field',configProperties[key].properties[field]);
                    // console.log('value', configValues[key][field]);

                    // 塞入后端返回的初始化value，value只用作初始化，不存放在schema中，
                    // 在提交format config data时请删除value字段！另外field=type的value请勿删除！
                    configProperties[key].properties[field].value = deepCopy(configValues[key][field]);
                }
            }
            const initBuildJsonSchema = {
                ...defauleSchemaFormConfig,
                "properties": configProperties,
                "value": configValues
            };
            console.log('initBuildJsonSchema',JSON.stringify(initBuildJsonSchema));
            this.buildJsonSchemaForm = initBuildJsonSchema;
        },
        //构建运营表单
        initJsonSchemaComponents(jsonSchema){
            const currentProperties = {};
            jsonSchema = deepCopy(jsonSchema);
            for(const key in jsonSchema){
                const componentItem = jsonSchema[key];
                if(componentItem.type && componentItem.label && componentItem.name){
                    const componentItemKey = `json-form-item-${key}`;
                    const componentItemProperties = deepCopy(require(`./components-schema/${componentItem.type}`));
                    
                    componentItemProperties.key = componentItemKey;
                    componentItemProperties.ui.itemClass = componentItemKey;
                    componentItemProperties.ui.label = componentItem.label;
                    
                    // console.log('componentItem',JSON.stringify(componentItem));
                    if(componentItem.type==='Select' || componentItem.type==='MultiSelect'){
                        componentItemProperties.ui.widgetConfig.enumSource = componentItem.itemList || [];
                    }
                    if(componentItem.type==='Object' || componentItem.type==='Repeator'){
                        const itemList = componentItem.itemList || [];
                        const itemsProperties = {};
                        // console.log('itemList',JSON.stringify(itemList));
                        for(let i=0;i<itemList.length;i++){
                            const item = itemList[i];
                            if(item.type && item.label && item.name){
                                const itemProperties = deepCopy(require(`./components-schema/${item.type}`));
                                itemProperties.ui.label = item.label;
                                // 追加到组件中
                                itemsProperties[item.name] = itemProperties;
                                // console.log('item properties',JSON.stringify(itemProperties));
                            }
                        }
                        // console.log('【items】properties',JSON.stringify(itemsProperties));
                        if(componentItem.type==='Repeator'){
                            componentItemProperties.items.properties = itemsProperties;
                        }
                        if(componentItem.type==='Object'){
                            componentItemProperties.properties =  itemsProperties;
                        }
                        
                    }
                    //追加到预览表单
                    currentProperties[componentItem.name] = componentItemProperties;
                }
                
            }
            const previewValue = this.previewJsonSchemaForm.value;
            const initJsonSchema = {
                ...defauleSchemaFormConfig,
                "properties": {
                    ...currentProperties
                },
                "value": previewValue
            };
            console.log('initJsonSchema',JSON.stringify(initJsonSchema));
            this.$data.previewJsonSchemaForm = initJsonSchema;
        },
        async addComponent(type){
            //这种方式不生效，需要找作者定位下
            // this.$data.buildJsonSchemaForm.properties[`build-form-item-${this.componentKeyIndex}`] = require(`./build-components-schema/${type}`);
            const currentProperties = {...this.buildJsonSchemaForm.properties};
            const currentValue = {...this.buildJsonSchemaForm.value};

            const addComponentKey = `build-form-item-${this.componentKeyIndex}`;
            const addComponentConfig = deepCopy(require(`./build-components-schema/${type}`));
            addComponentConfig.key = addComponentKey;
            addComponentConfig.ui.label += this.componentKeyIndex;
            addComponentConfig.ui.itemClass = addComponentKey;

            this.$data.buildJsonSchemaForm = {
                ...defauleSchemaFormConfig,
                "properties": {
                    ...currentProperties,
                    [addComponentKey]: addComponentConfig
                },
                "value": currentValue
            };
            this.componentCount++;
            this.componentKeyIndex++;
        },
        removeComponent(itemKey){
            if(this.componentCount===1){
                this.$message({type: 'error', message: '请至少保留一个配置项'});
                return;
            }
            const currentProperties = {...this.buildJsonSchemaForm.properties};
            const currentValue = {...this.buildJsonSchemaForm.value};
            
            delete currentProperties[itemKey];
            delete currentValue[itemKey];

            this.$data.buildJsonSchemaForm = {
                ...defauleSchemaFormConfig,
                "properties": currentProperties,
                "value": currentValue
            }
            this.componentCount--;
            console.log('remove itemKey',itemKey)
        },
        formatBuildJsonSchema(buildJsonSchema){
            const copyBuildJsonSchema = deepCopy(buildJsonSchema);
            const JsonSchemaProperties = {...copyBuildJsonSchema.properties};
            //添加默认值
            for(const key in JsonSchemaProperties){
                // console.log('key',key,JsonSchemaProperties[key]);
                const fieldProperties = JsonSchemaProperties[key].properties || {};
                for(const field in fieldProperties){
                    // console.log('field',field,JsonSchemaProperties[key].properties[field]);
                    if(field!=='type'){ //type的value不能删除
                        //删除掉由后端返回的初始化value，value只用作初始化，不存放在schema中
                        delete JsonSchemaProperties[key].properties[field].value;
                    }
                }
            }
            copyBuildJsonSchema.properties = JsonSchemaProperties;
            return copyBuildJsonSchema;
        },
        submit() {
            this.$ncformValidate('build-business-form').then(data => {
                if (!data.result) {
                    return;
                }
                console.log('校验通过');
                const buildJsonSchemaForm = this.$data.buildJsonSchemaForm || {};
                const submitBuildJsonSchema = this.formatBuildJsonSchema(buildJsonSchemaForm);
                // console.log('buildJsonSchemaForm properties', JSON.stringify(submitBuildJsonSchemaProperties));
                // console.log('buildJsonSchemaForm value', JSON.stringify(buildJsonSchemaForm.value));
                console.log('submitBuildJsonSchema', JSON.stringify(submitBuildJsonSchema));
                
            });
        },
        submitJsonData(){
            this.$ncformValidate('json-data-form').then(data => {
                if (!data.result) {
                    return;
                }
                console.log('校验通过');
                const previewJsonSchemaForm = this.$data.previewJsonSchemaForm || {};
                // console.log('previewJsonSchemaForm properties', JSON.stringify(buildJsonSchemaForm.properties));
                console.log('previewJsonSchemaForm value', JSON.stringify(previewJsonSchemaForm.value));
            });
        }
    }
}