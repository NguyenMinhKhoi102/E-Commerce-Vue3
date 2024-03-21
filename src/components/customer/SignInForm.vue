<template>
    <a-form :model="formState" :labelCol="{ span: 7 }" name="custom-validation" class="login-form" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item has-feedback label="Email" name="email"
            :rules="[{ required: true, message: 'Vui lòng nhập email!' }]">
            <a-input v-model:value="formState.email">
                <template #prefix>
                    <MailOutlined class="site-form-item-icon" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item has-feedback label="Mật khẩu" name="password"
            :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]">
            <a-input-password v-model:value="formState.password">
                <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                </template>
            </a-input-password>
        </a-form-item>

        <a-form-item>
            <a-form-item name="remember" no-style>
                <a-checkbox v-model:checked="formState.remember">Nhớ mật khẩu</a-checkbox>
            </a-form-item>
            <a class="login-form-forgot" href="">Quên mật khẩu ?</a>
        </a-form-item>

        <a-form-item>
            <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                Log in
            </a-button>
            Bạn chưa có tài khoản ?
            <a href="">Đăng ký ngay!</a>
        </a-form-item>
    </a-form>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
import { MailOutlined, LockOutlined } from '@ant-design/icons-vue';

type SignInState = {
    email: string;
    password: string;
    remember: boolean;
}

const formState = reactive<SignInState>({
    email: "",
    password: "",
    remember: true,
});


const emits = defineEmits<{
    "submit:signin": [data: any]
}>()

const disabled = computed(() => {
    return !(formState.email && formState.password);
})

const onFinish = (values: any) => {
    emits("submit:signin", values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

</script>

<style scoped lang="scss">
.login-form {
    width: 100%;
}

.login-form-forgot {
    float: right;
}

.login-form-button {
    width: 100%;
}
</style>