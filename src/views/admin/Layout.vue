<template>
    <Sider></Sider>
    <Header></Header>
    <router-view v-slot="{Component}">
        <component :is="Component" />
    </router-view>
    <Footer></Footer>
</template>
<script lang="ts" setup>
import Sider from "@/components/admin/layouts/Sider.vue";
import Header from "@/components/admin/layouts/Header.vue";
import Footer from "@/components/admin/layouts/Footer.vue";
</script>