<template>
    <div class="page-404">
        <img
            src="https://ik.imagekit.io/2hun4xkhf/web%20image/404-page-not-found.png?updatedAt=1692437829887"
            alt=""
        />
        <h2>Trang bạn đang tìm kiếm không tồn tại.</h2>
        <p>Bạn có lẽ đã nhập nhầm hoặc địa chỉ trang web đã được thay đổi.</p>
    </div>
</template>

<script setup lang="ts">
import { handleAppMounted, handleAppUnmounted } from "../utils";
import { onBeforeUnmount, onMounted } from "vue";

// #region common
onMounted(() => {
    handleAppMounted();
});

onBeforeUnmount(() => handleAppUnmounted());
// #endregion
</script>

<style lang="scss" scoped>
.page-404 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 140;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--app-color-white);
    img {
        width: 330px;
    }
    h2 {
        margin-top: 16px;
    }
    p {
        margin-top: 8px;
    }
}
</style>
