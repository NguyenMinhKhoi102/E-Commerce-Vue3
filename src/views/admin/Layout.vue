<template>
    <a-layout style="min-height: 100vh">
        <!-- Sider -->
        <Sider :isToggle="isToggle"></Sider>
        <a-layout>
            <!-- Header -->
            <Header :isToggle="isToggle" @update:isToggle="toggleSider"></Header>
            <!-- Content -->
            <a-layout-content style="margin: 0 16px">
                <!-- BreadCrumb -->
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Admin</a-breadcrumb-item>
                    <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
                </a-breadcrumb>
                <div>
                    <router-view v-slot="{ Component }">
                        <component :is="Component" />
                    </router-view>
                </div>
            </a-layout-content>
            <!-- Footer -->
            <Footer></Footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts" setup>
import Sider from "@/components/admin/layouts/Sider.vue";
import Header from "@/components/admin/layouts/Header.vue";
import Footer from "@/components/admin/layouts/Footer.vue";

import { ref } from 'vue';
const isToggle = ref<boolean>(false);
const toggleSider = () => {
    isToggle.value = !isToggle.value;
};

</script>

<style scoped>
.logo {
    height: 52px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}
</style>
