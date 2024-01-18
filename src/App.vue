<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./views/Header.vue";
</script>

<template>
    <div class="container">
        <header-vue></header-vue>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
}
</style>
