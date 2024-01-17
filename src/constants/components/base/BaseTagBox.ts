import DxTagBox from 'devextreme-vue/tag-box';

export const defaultBaseTagBoxConfig: DxTagBox = {
    width: 220,
    height: 40,
    disabled: false,
    readOnly: false,
    searchEnabled: true,
    focusStateEnabled: true,
    hoverStateEnabled: true,
    searchMode: "contains",
    placeholder: "Chọn giá trị",
    dropDownButtonTemplate: 'iconTemplate',
    elementAttr: {
        class: 'base-tag-box',
    },
};