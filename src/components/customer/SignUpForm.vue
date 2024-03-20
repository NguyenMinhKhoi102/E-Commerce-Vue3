<template>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed"
        :label-col="{ span: 5 }" :wrapper-col="{ span: 13 }">
        <a-form-item label="Họ và tên" name="name" :rules="rulesForm.name">
            <a-input v-model:value="formState.name" placeholder="Họ và tên" />
        </a-form-item>
        <a-form-item label="Ngày sinh" name="birthday" :rules="rulesForm.birthday">
            <a-date-picker style="width: 100%" v-model:value="formState.birthday" placeholder="Ngày tháng năm sinh" />
        </a-form-item>
        <a-form-item label="Giới tính" name="sex" :rules="rulesForm.sex">
            <a-radio-group v-model:value="formState.sex">
                <a-radio value="1">Nam</a-radio>
                <a-radio value="0">Nữ</a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item label="Địa chỉ" name="address" :rules="rulesForm.address">
            <a-textarea v-model:value="formState.address" placeholder="Địa chỉ" />
        </a-form-item>
        <a-form-item label="Số điện thoại" name="phoneNumber" :rules="rulesForm.phoneNumber">
            <a-input v-model:value="formState.phoneNumber" placeholder="Số điện thoại" />
        </a-form-item>
        <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Vui lòng nhập email!' }]">
            <a-input v-model:value="formState.email" placeholder="Email" />
        </a-form-item>
        <a-form-item label="Mật khẩu" name="password" :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]">
            <a-input-password v-model:value="formState.password" placeholder="Mật khẩu" />
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
import { reactive } from "vue";

type SignUpState = {
    name: string;
    birthday: string;
    sex: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    remember: boolean;
}

const formState = reactive<SignUpState>({
    name: "",
    birthday: "",
    sex: "",
    address: "",
    phoneNumber: "",
    email: "",
    password: "",
    remember: false,
});


const rulesForm = reactive({
    name: [
        { required: true, message: "Vui lòng nhập họ và tên" },
        { min: 5, max: 40, message: "Tên phải có từ 5 đến 40 ký tự" }
    ],
    birthday: [
        { required: true, message: 'Vui lòng nhập ngày sinh' },
        {
            validator: (rule: any, value: any, callback: Function) => {
                const birthDate = new Date(value);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                if (age < 18) {
                    callback(new Error('Bạn phải từ 18 tuổi trở lên'));
                } else {
                    callback();
                }
            }, trigger: 'change'
        }
    ],
    sex: [
        { required: true, message: "Vui lòng chọn giới tính" }
    ],
    address: [
        { required: true, message: "Vui lòng nhập địa chỉ" }
    ],
    phoneNumber: [
        { required: true, message: "Vui lòng nhập số điện thoại" }
    ],
    email: [
        { required: true, message: "Vui lòng nhập email" }
    ],
    password: [
        { required: true, message: "Vui lòng nhập mật khẩu" }
    ],
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
