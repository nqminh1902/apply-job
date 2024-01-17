import type DxDateBox from 'devextreme-vue/date-box';

export const defaultBaseDateBoxConfig: DxDateBox = {
    readOnly: false,
    disabled: false,
    type: 'date',
    pickerType: 'calendar',
    showAnalogClock: true,
    showClearButton: false,
    adaptivityEnabled: true,
    applyButtonText: "Chọn",
    cancelButtonText: "Hủy",
    focusStateEnabled: true,
    displayFormat: "dd/MM/yyyy",
    useMaskBehavior: true,
    hoverStateEnabled: true,
    height: 32,
};
