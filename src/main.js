import { createApp } from 'vue'
import './style.css'
import ReusableInduk from './components/ReusableInduk.vue';
import BaseInput from './components/form/BaseInput.vue';
import BaseSelect from './components/form/BaseSelect.vue';
import BaseRadio from './components/form/BaseRadio.vue';
import BaseRadioGroup from './components/form/BaseRadioGroup.vue';
import BaseCheckbox from './components/form/BaseCheckbox.vue';
import BaseCheckboxGroup from './components/form/BaseCheckboxGroup.vue';
import crud from './components/crudview.vue' ;

//createApp(ReusableKomponen).mount('#app')
const app = createApp(ReusableInduk);
app.component("base-input", BaseInput)
.component("base-select",BaseSelect)
.component("base-radio",BaseRadio)
.component("base-radio-group", BaseRadioGroup)
.component('base-checkbox',BaseCheckbox)
.component('base-checkbox-group',BaseCheckboxGroup);
app.mount("#app");






