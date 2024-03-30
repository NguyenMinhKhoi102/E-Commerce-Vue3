<template>
    <a-breadcrumb style="margin-bottom: 16px">
        <template #separator>
            <span class="breadcrumb">></span>
        </template>
        <a-breadcrumb-item href="" class="breadcrumb">
            <home-outlined class="breadcrumb" />
        </a-breadcrumb-item>
        <a-breadcrumb-item class="breadcrumb">Setting</a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script setup lang="ts">
import { HomeOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.breadcrumb {
    color: var(--text-color) !important;
}
</style>