<template>
    <Header></Header>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/customer/Header.vue';
import Footer from '@/components/customer/Footer.vue';
</script>

<style lang="scss" scoped></style>