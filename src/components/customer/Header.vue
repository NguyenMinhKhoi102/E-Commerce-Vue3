<template>
    <div>
        Đây là phần header
    </div>
    <a-button type="primary" :icon="h(LogoutOutlined)" @click="signOut">Đăng xuất</a-button>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { LogoutOutlined } from '@ant-design/icons-vue';

const emits = defineEmits<{
    "signout:customer": []
}>()

const signOut = () => {
    emits("signout:customer");
}

</script>

<style lang="scss" scoped></style>