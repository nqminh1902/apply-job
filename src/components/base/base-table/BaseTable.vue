<template>
    <div class="base-table">
        <dx-data-grid ref="dataGridRef" v-bind="dataGridConfig">
            <template #status-template="{ data }">
                <slot name="status" :data="data"></slot>
            </template>
            <template #image-template="{ data }">
                <slot name="image" :data="data"></slot>
            </template>
            <template #gender-template="{ data }">
                <slot name="gender" :data="data"></slot>
            </template>
            <template #date-template="{ data }">
                <slot name="date" :data="data"></slot>
            </template>
            <template #name-template="{ data }">
                <slot name="name" :data="data"></slot>
            </template>
            <template #birthday-template="{ data }">
                <slot name="birthday" :data="data"></slot>
            </template>
            <template #cell-template="{ data }">
                <div class="h-[30px] flex items-center" v-if="!data.value">
                    --
                </div>
                <div class="h-[30px] flex items-center" v-else>
                    {{ data.value }}
                </div>
            </template>
            <template #feature-cell="{ data }">
                <div class="feature-wrap" v-if="isShowCustomButton">
                    <div class="cursor-pointer p-[4px] rounded-full bg-white">
                        <Icon
                            :icon="'material-symbols:edit-outline'"
                            :color="'#2563eb'"
                            width="20"
                            height="20"
                            @click="onEdit(data.data)"
                        />
                    </div>
                    <div
                        class="ml-1.5 cursor-pointer p-[4px] rounded-full bg-white"
                    >
                        <Icon
                            :icon="'material-symbols:delete-outline'"
                            :color="'red'"
                            width="20"
                            height="20"
                            @click="onDelete(data.data)"
                        />
                    </div>
                </div>
            </template>
        </dx-data-grid>
    </div>
</template>
<script lang="ts" setup>
import { DxDataGrid } from "devextreme-vue/data-grid";
import { computed, ref, watch } from "vue";
import { mergeObjects } from "../../../utils/functions/object";
import { Icon } from "@iconify/vue";

// #region common
const props = withDefaults(
    defineProps<{
        config: DxDataGrid;
        isShowCustomButton?: boolean;
        subsystemcode?: string;
    }>(),
    {
        isShowCustomButton: true,
        subsystemcode: "",
    }
);

const emit = defineEmits(["onEdit", "onDelete"]);

const defaultConfig: DxDataGrid = {
    allowColumnReordering: false,
    allowColumnResizing: false,
    columnAutoWidth: false,
    dataSource: [],
    columns: [],
    noDataText: "Không có dữ liệu",
    showBorders: true,
    showColumnHeaders: true,
    showColumnLines: false,
    showRowLines: true,
    width: "100%",
    height: "100%",
    hoverStateEnabled: true,
    paging: {
        enabled: false,
    },
    selection: {
        mode: "multiple",
        allowSelectAll: true,
        showCheckBoxesMode: "always",
        selectAllMode: "allPages",
    },
};

const dataGridConfig = computed<DxDataGrid>(() =>
    mergeObjects(defaultConfig, props.config)
);

dataGridConfig.value.columns?.forEach((column: any) => {
    if (!column.cellTemplate) {
        column.cellTemplate = "cell-template";
    }
});

dataGridConfig.value.columns?.push({
    fixed: true,
    fixedPosition: "right",
    caption: "",
    width: 0,
    cellTemplate: "feature-cell",
});

const dataGridRef = ref<InstanceType<typeof DxDataGrid>>();
/**
 * Thực hiện mở popup
 **  Author: Nguyễn Quang Minh(26/12/2022)
 */
function onDelete(data: any) {
    emit("onDelete", data);
}

function onEdit(data: any) {
    emit("onEdit", data);
}

defineExpose({
    getInstance: () => dataGridRef.value?.instance,
});
</script>
<style lang="scss">
.base-table {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .dx-row.dx-header-row {
        background-color: #f5f5f5;
        font-size: 14px;
        font-weight: 500;
        color: black;
    }
    .feature-wrap {
        display: none;
        align-items: center;
        position: absolute;
        right: 4px;
        min-width: 30px;
    }
    .dx-row.dx-row-lines.dx-state-hover {
        .feature-wrap {
            display: flex;
        }
    }
    .dx-datagrid .dx-datagrid-headers .dx-row td.dx-pointer-events-none,
    .dx-datagrid .dx-datagrid-rowsview .dx-data-row td.dx-pointer-events-none,
    .dx-datagrid
        .dx-datagrid-rowsview
        .dx-freespace-row
        td.dx-pointer-events-none,
    .dx-datagrid .dx-datagrid-rowsview .dx-header-row td.dx-pointer-events-none,
    .dx-datagrid
        .dx-datagrid-rowsview
        .dx-virtual-row
        td.dx-pointer-events-none {
        border-left: none;
        border-right: none;
    }
    .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
        border-bottom: none;
    }
    .dx-datagrid-borders .dx-datagrid-rowsview,
    .dx-datagrid-headers + .dx-datagrid-rowsview,
    .dx-datagrid-rowsview.dx-datagrid-after-headers {
        border-top: none;
    }
    .dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused) > td,
    .dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused) > tr > td,
    .dx-datagrid-rowsview .dx-selection.dx-row:not(.dx-row-focused):hover > td,
    .dx-datagrid-rowsview
        .dx-selection.dx-row:not(.dx-row-focused):hover
        > tr
        > td {
        background-color: var(--color-admin-hover);
    }
}
</style>
