<template>
    <div>
        <div class="img">
            <img width="100px" src="https://seeklogo.com/images/1/18-logo-4F480408C7-seeklogo.com.png" alt="">
        </div>
        <SignUpForm></SignUpForm>
    </div>
</template>
<script setup lang="ts">
import SignUpForm from '@/components/customer/SignUpForm.vue';
</script>

<style lang="scss" scoped>
.img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 20px;
}
</style>