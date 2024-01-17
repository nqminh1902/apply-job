import { layoutType } from '@/enums';
import type { DxRadioGroup } from 'devextreme-vue';

export const defaultBaseRadioGroupConfig: DxRadioGroup = {
    disabled: false,
    layout: layoutType.horizontal,
    elementAttr: {
        class: 'base-radio-group',
    },
};
