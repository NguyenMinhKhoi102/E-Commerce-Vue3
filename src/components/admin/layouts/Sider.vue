<template>
    <a-layout-sider :collapsed="isToggle" style="position: relative;">
        <div class="logo"></div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" style="height:80%; overflow-y: auto; ">
            <!-- 80% -->
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
            <!-- Đăng xuất 20% -->
            <a-menu-item style="position: absolute; bottom: 50px; left:0;" key="6" >
                <desktop-outlined />
                <span><a-switch v-model:checked="state.checked1" danger/></span>
            </a-menu-item>

            <a-menu-item style="position: absolute; bottom: 0; left:0;" key="7">
                <file-outlined />
                <span>Đăng xuất</span>
            </a-menu-item>

        </a-menu>

    </a-layout-sider>



</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    AppleOutlined

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