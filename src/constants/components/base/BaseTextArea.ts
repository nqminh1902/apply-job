import type DxTextArea from 'devextreme-vue/text-area';

export const defaultBaseTextAreaConfig: DxTextArea = {
    disabled: false,
    readOnly: false,
    width: '100%',
    maxHeight: 90,
    autoResizeEnabled: true,
    hoverStateEnabled: true,
    focusStateEnabled: true,
    elementAttr: {
        class: 'base-text-area',
    },
};
