<template>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
        <template #extra>
            <a-button type="primary" @click="goBackHome">Về trang chủ</a-button>
        </template>
    </a-result>
</template>

<script setup lang="ts">

const emits = defineEmits<{
    goBackHome: []
}>()

const goBackHome = () => {
    console.log("123")
    emits("goBackHome");
}
</script>

<style lang="scss" scoped></style>