<template>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Vui lòng nhập username!' }]">
            <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]">
            <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item>
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup lang="ts">
import { reactive, defineEmits } from "vue";

type SignInState = {
    username: string;
    password: string;
    remember: boolean;
}

const formState = reactive<SignInState>({
    username: "",
    password: "",
    remember: true,
});

const emits = defineEmits<{
    "submit:signin": [data: any]
}>()

const onFinish = (values: any) => {
    emits("submit:signin", values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};
</script>
