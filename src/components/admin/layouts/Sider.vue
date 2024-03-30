<template>
    <a-layout-sider :collapsed="isToggle" class="sider">
        <div class="logo">
            <img src="/logo.png" alt="">
        </div>
        <div style="height: calc(100% - 86px); display: flex; flex-direction: column; justify-content: center">
            <a-menu v-model:selectedKeys="selectedKeys" :theme="themeState.theme" mode="inline"
                style="flex: 1; overflow-y: auto;">
                <a-menu-item key="1">
                    <AppstoreOutlined />
                    <span>Dashboard</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <DatabaseOutlined />
                    <span>Categories</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <ShopOutlined />
                            <span>Products</span>
                        </span>
                    </template>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="6">
                    <UserOutlined />
                    <span>Customers</span>
                </a-menu-item>
            </a-menu>
            <a-menu v-model:selectedKeys="selectedKeys" :theme="themeState.theme" mode="inline">
                <a-menu-item key="7">
                    <SettingOutlined />
                    <span>Settings</span>
                </a-menu-item>
                <a-menu-item key="8">
                    <LogoutOutlined />
                    <span>Đăng xuất</span>
                </a-menu-item>
            </a-menu>
        </div>


    </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useTheme } from "@/stores/theme";
import {
    ShopOutlined,
    SettingOutlined,
    UserOutlined,
    AppstoreOutlined,
    DatabaseOutlined,
    LogoutOutlined

} from '@ant-design/icons-vue';

const selectedKeys = ref<[any]>(['1']);

defineProps<{
    isToggle: boolean;
}>();


const state = reactive({
    checked1: true,
    checked2: false,
});

const themeState = useTheme().$state;

</script>

<style lang="scss" scoped>
.logo {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;

    img {
        height: 100%;
        border-radius: 10px;
        background: rgb(255, 255, 255);
    }
}

.sider {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: var(--bg-color);
}

::-webkit-scrollbar-track {
    background-color: #001529;
}

::-webkit-scrollbar-thumb {
    background-color: #a0a0a065;
    border-radius: 0;
}
</style>