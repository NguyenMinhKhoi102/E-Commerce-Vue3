<template>
    <a-layout-sider :collapsed="isToggle" style=" position: -webkit-sticky; position: sticky; top: 0; height: 100vh;">
        <div class="logo"></div>
        <div style="height: calc(100% - 86px); display: flex; flex-direction: column; justify-content: center">
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" style="flex: 1; overflow-y: auto;">
                <!-- 1. Dashboard -->
                <a-menu-item key="1">
                    <router-link :to="{ name: 'admin.dashboard' }">
                        <pie-chart-outlined />
                        <span>Dash Board</span>
                    </router-link>
                </a-menu-item>

                <!-- 1. Dashboard -->
                <a-menu-item key="2">
                    <router-link :to="{ name: 'admin.category' }">
                        <pie-chart-outlined />
                        <span>Category</span>
                    </router-link>
                </a-menu-item>

                <!-- 3. Product -->
                <a-menu-item key="3">
                    <router-link :to="{ name: 'admin.product' }">
                        <desktop-outlined />
                        <span>Product</span>
                    </router-link>
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
            </a-menu>
            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="6">
                    <desktop-outlined />
                    <span><a-switch v-model:checked="state.checked1" danger /></span>
                </a-menu-item>
                <a-menu-item key="7">
                    <file-outlined />
                    <span>Đăng xuất</span>
                </a-menu-item>
            </a-menu>
        </div>
    </a-layout-sider>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    FileOutlined,

} from '@ant-design/icons-vue';

const selectedKeys = ref<[any]>(['1']);

defineProps<{
    isToggle: boolean;
}>();


const state = reactive({
    checked1: true,
    checked2: false,
});

</script>

<style lang="scss" scoped>
.logo {
    height: 52px;
    margin: 16px;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjl0M7FPCzWBJCD4Hrr82wLs9U45i8VNBAlravjbd9OA&s');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>