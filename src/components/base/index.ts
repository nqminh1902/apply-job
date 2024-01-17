import { defineAsyncComponent } from 'vue';

const BaseSelectBox = defineAsyncComponent(
    () => import('./base-select-box/BaseSelectBox.vue')
);
const BaseCheckBox = defineAsyncComponent(
    () => import('./base-check-box/BaseCheckBox.vue')
);
const BaseButton = defineAsyncComponent(
    () => import('./base-button/BaseButton.vue')
);
const BaseTextBox = defineAsyncComponent(
    () => import('./base-text-box/BaseTextBox.vue')
);
const BasePopup = defineAsyncComponent(
    () => import('./base-popup/BasePopup.vue')
);
const BaseTextArea = defineAsyncComponent(
    () => import('./base-text-area/BaseTextArea.vue')
);
const BaseDateBox = defineAsyncComponent(
    () => import('./base-date-box/BaseDateBox.vue')
);
const BaseNumberBox = defineAsyncComponent(
    () => import('./base-number-box/BaseNumberBox.vue')
);
const BaseSwitch = defineAsyncComponent(
    () => import('./base-switch/BaseSwitch.vue')
);
const BaseDropDown = defineAsyncComponent(
    () => import('./base-drop-down/BaseDropDown.vue')
);
const BaseRadioGroup = defineAsyncComponent(
    () => import('./base-radio-group/BaseRadioGroup.vue')
);
const BaseNavigation = defineAsyncComponent(
    () => import('./base-navigation/BaseNavigation.vue')
);
const BaseTable = defineAsyncComponent(
    () => import('./base-table/BaseTable.vue')
);
const BaseStatus = defineAsyncComponent(
    () => import('./base-status/BaseStatus.vue')
);

const BaseTagBox = defineAsyncComponent(
    () => import('./base-tagbox/BaseTagBox.vue')
);
const BaseLoading = defineAsyncComponent(
    () => import('./BaseLoading.vue')
);
export {
    BaseSelectBox,
    BaseCheckBox,
    BaseButton,
    BaseTextBox,
    BasePopup,
    BaseTextArea,
    BaseDateBox,
    BaseNumberBox,
    BaseSwitch,
    BaseDropDown,
    BaseRadioGroup,
    BaseNavigation,
    BaseTable,
    BaseStatus,
    BaseTagBox,
    BaseLoading
};
