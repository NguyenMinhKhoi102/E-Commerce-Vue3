<template>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
            <a-button type="primary" @click="goBackHome">Về trang chủ</a-button>
        </template>
    </a-result>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goBackHome = () => {
    router.push({ name: "home" });
}
</script>

<style lang="scss" scoped></style>