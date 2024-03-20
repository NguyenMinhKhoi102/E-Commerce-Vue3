<template>
    <h2>Đăng nhập</h2>
    <div class="form-container">
        <SignInForm @submit:signin="submitForm"></SignInForm>
        <div class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script setup lang="ts">
import SignInForm from '@/components/customer/SignInForm.vue';
import { useAuthen } from '@/stores/authen';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const authen = useAuthen();
const errorMessage = ref<String>("");
const submitForm = (data: any) => {
    if (data.username == "123" && data.password == "123") {
        authen.changeAuthen(true);
        window.localStorage.setItem("Authen", JSON.stringify(authen.isAuthen));
        router.push({ name: "home" });
    } else {
        console.log(data);
        errorMessage.value = "Tài khoản hoặc mật khẩu không chính xác";
    }
}
</script>

<style lang="scss" scoped>
h2 {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
}

.form-container {
    width: 25%;
    margin-inline: auto;
}

.error-message {
    color: red;
}
</style>