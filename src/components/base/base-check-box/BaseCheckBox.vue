<template>
    <dx-check-box v-model="internalValue" v-bind="baseCheckBoxConfig" />
</template>

<script setup lang="ts">
import { defaultBaseCheckBoxConfig } from "../../../constants/components/base";
import { mergeObjects } from "../../../utils/functions/object";
import { DxCheckBox } from "devextreme-vue/check-box";
import { computed } from "vue";

// #region common
const props = defineProps<{
    config: DxCheckBox;
    modelValue?: boolean | undefined;
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
}>();

const internalValue = computed({
    get() {
        return props.modelValue ?? false;
    },
    set(newValue) {
        emit("update:modelValue", newValue);
    },
});

const baseCheckBoxConfig: DxCheckBox = mergeObjects(
    defaultBaseCheckBoxConfig || {},
    props.config
);
// #endregion
</script>

<style lang="css">
.base-check-box {
}
.base-check-box.dx-checkbox.dx-state-hover .dx-checkbox-icon,
.base-check-box.dx-checkbox.dx-state-focused .dx-checkbox-icon {
    border: 1px solid #2563eb;
}
.base-check-box.dx-checkbox-checked .dx-checkbox-icon {
    color: #2563eb;
}
.dx-checkbox-indeterminate .dx-checkbox-icon::before {
    background-color: #2563eb;
}
</style>
