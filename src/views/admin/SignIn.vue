<template>
    <h2>Admin</h2>
    <div class="form-container">
        <SignInForm @submit:signin="submitForm"></SignInForm>
        <div class="error-message">{{ errorMessage }}</div>
    </div>
</template>

<script setup lang="ts">
import SignInForm from '@/components/admin/SignInForm.vue';
import { useAuthen } from '@/stores/authen';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import adminService from "@/services/admin.service";

const router = useRouter();
const authen = useAuthen();
const errorMessage = ref<String>("");

const submitForm = async (data: any) => {
    try {
        const response = await adminService.signIn(data);
        authen.changeAuthen(true);
        window.localStorage.setItem("Authen", JSON.stringify(authen.isAuthen));
        window.localStorage.setItem("token", response.token);
        router.push({ name: "home" });
    } catch (errors: any) {
        errorMessage.value = errors.response.data.message;
        console.log(errors);
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
    max-width: 300px;
    margin-inline: auto;
}

.error-message {
    color: red;
}
</style>