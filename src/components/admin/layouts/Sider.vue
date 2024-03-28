<template>
    <a-layout-sider :collapsed="isToggle" style="height: 100vh">
        <div class="logo"></div>
        <a-flex :justify="'space-between'" vertical>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="1">
                    <pie-chart-outlined />
                    <span>Dash Board</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <desktop-outlined />
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>User</span>
                        </span>
                    </template>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>Team</span>
                        </span>
                    </template>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <file-outlined />
                    <span>File</span>
                </a-menu-item>
            </a-menu>
            <div>123</div>
        </a-flex>
    </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
} from '@ant-design/icons-vue';

const selectedKeys = ref<[any]>(['1']);
defineProps<{
    isToggle: boolean;
}>();

</script>

<style lang="scss" scoped>
.logo {
    height: 52px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
</style>