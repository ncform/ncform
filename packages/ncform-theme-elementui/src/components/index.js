import input from "./control-comps/input.vue";
import radio from "./control-comps/radio.vue";
import checkbox from "./control-comps/checkbox.vue";
import upload from "./control-comps/upload.vue";
import inputNumber from "./control-comps/input-number.vue";
import textarea from "./control-comps/textarea.vue";
import select from "./control-comps/select.vue";
import colorPicker from "./control-comps/color-picker.vue";
import datePicker from "./control-comps/date-picker.vue";
import slider from "./control-comps/slider.vue";
import rate from "./control-comps/rate.vue";
import label from "./control-comps/label.vue";
import switchWidget from "./control-comps/switch.vue";
// Don't touch me - import controls

import object from "./layout-comps/object.vue";
import arrayTable from "./layout-comps/array-table.vue";
import array from "./layout-comps/array.vue";
import arrayTabs from "./layout-comps/array-tabs.vue";
// Don't touch me - import layouts

const components = {
  input,
  radio,
  checkbox,
  upload,
  inputNumber,
  textarea,
  select,
  colorPicker,
  datePicker,
  slider,
  rate,
  label,
  switch: switchWidget,
  // Don't touch me - export controls

  object,
  arrayTable,
  array,
  arrayTabs
  // Don't touch me - export layouts
};

export default components;
module.exports = components;
