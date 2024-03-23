<template>
    <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined v-if="isToggle" class="trigger" @click="toggleSider" />
        <menu-fold-outlined v-else class="trigger" @click="toggleSider" />
    </a-layout-header>
</template>

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';

const { isToggle } = defineProps<{
    isToggle: boolean
}>();

const emit = defineEmits(['update:isToggle']);
const toggleSider = () => {
    emit('update:isToggle');
};

</script>

<style lang="scss" scoped>
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
