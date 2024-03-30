<template>
    <a-layout-header class="header">
        <a-flex justify="space-between" id="components-dropdown-demo-placement">
            <menu-unfold-outlined v-if="isToggle" class="trigger" @click="toggleSider" />
            <menu-fold-outlined v-else class="trigger" @click="toggleSider" />
            <a-space>
                <a-dropdown placements="bottomRight">
                    <a-space>
                        <a-avatar style="background-color: #87d068"
                            src="https://plus.unsplash.com/premium_photo-1711206464731-3a632e054261?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                        </a-avatar>
                        <a-typography-text class="header-name" strong :level="4"
                            :style="{ margin: '0 10px 0 0', verticalAlign: 'middle' }">
                            Alex Richard
                        </a-typography-text>
                    </a-space>
                    <template #overlay>
                        <a-menu class="header-dropdown" style="">
                            <a-menu-item>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                                    1st menu item
                                </a>
                            </a-menu-item>
                            <a-menu-item>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                                    2nd menu item
                                </a>
                            </a-menu-item>
                            <a-menu-item>
                                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                                    3rd menu item
                                </a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-space>
        </a-flex>
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

    &:hover {
        color: #1890ff;
    }
}

.header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: var(--bg-color);
    padding: 0;
    color: var(--text-color);

    &-name {
        color: var(--text-color);
        transition: var(--trasition-2500);
    }

    /* &-dropdown {
        background: #001529;
        color: #fff;
    } */
}
</style>
