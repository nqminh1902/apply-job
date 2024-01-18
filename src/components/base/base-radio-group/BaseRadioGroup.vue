<template>
    <dx-radio-group
        ref="dxRadioGroupRef"
        v-model="internalValue"
        v-bind="radioGroupConfig"
    />
</template>

<script setup lang="ts">
import { defaultBaseRadioGroupConfig } from "../../../constants/components/base";
import { mergeObjects } from "../../../utils/functions/object";
import DxRadioGroup from "devextreme-vue/radio-group";
import { computed, ref } from "vue";

// #region common
const props = defineProps<{
    config: DxRadioGroup;
    modelValue?: any;
}>();

const radioGroupConfig = mergeObjects(
    defaultBaseRadioGroupConfig,
    props.config
);

const emit = defineEmits<{
    (e: "update:modelValue", value: any): void;
}>();

const internalValue = computed({
    get() {
        return props.modelValue ?? "";
    },
    set(newValue) {
        emit("update:modelValue", newValue);
    },
});
// #endregion

const dxRadioGroupRef = ref();

defineExpose({
    getInstance: () => dxRadioGroupRef.value?.instance,
});
</script>

<style lang="scss"></style>
