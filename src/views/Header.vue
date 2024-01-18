<template>
    <div class="header-admin">
        <div
            class="logo flex-1 flex items-center cursor-pointer"
            @click="handleClick"
        >
            <img
                src="https://ik.imagekit.io/2hun4xkhf/web%20image/selection-process_4115748.png?updatedAt=1704557649114"
                alt=""
                style="width: 36px; height: 36px; border-radius: 8px"
            />
            <span class="logo-text">Công ty Quang Minh</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function handleClick() {
    router.push("/");
}
</script>
<style lang="css" scoped>
.header-admin {
    width: 100%;
    height: 64px;
    display: flex;
    background-color: #f5f7f8;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.logo {
    display: flex;
    align-items: center;
}
.logo-text {
    font-weight: bold;
    margin-left: 8px;
    font-size: 24px;
}
</style>
