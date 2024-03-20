<template>
    <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed"
        :label-col="{ span: 5 }" :wrapper-col="{ span: 13 }">
        <a-form-item label="Họ và tên" name="name" :rules="rulesForm.name">
            <a-input v-model:value="formState.name" placeholder="Họ và tên" :maxlength="40" />
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
        <a-form-item label="Địa chỉ" name="address" :rules="rulesForm.address" :maxlength="100">
            <a-textarea v-model:value="formState.address" placeholder="Địa chỉ" />
        </a-form-item>
        <a-form-item label="Số điện thoại" name="phoneNumber" :rules="rulesForm.phoneNumber">
            <a-input v-model:value="formState.phoneNumber" placeholder="Số điện thoại" />
        </a-form-item>
        <a-form-item label="Email" name="email" :rules="rulesForm.email">
            <a-input v-model:value="formState.email" placeholder="Email" />
        </a-form-item>
        <a-form-item label="Mật khẩu" name="password">
            <a-input-password v-model:value="password" placeholder="Mật khẩu" />
            <div class="checkpass-container">
                <div v-if="passwordStrength == 'Weak'" class="text-checkpass text-checkpass__weak">Yếu</div>
                <div v-else-if="passwordStrength == 'Medium'" class="text-checkpass text-checkpass__medium">Vừa</div>
                <div v-else-if="passwordStrength == 'Moderate'" class="text-checkpass text-checkpass__moderate">Khá mạnh
                </div>
                <div v-else-if="passwordStrength == 'Strong'" class="text-checkpass text-checkpass__strong">Mạnh</div>
                <div class="checkpass">
                    <div class="checkpass-element" :class="{
        'checkpass-element__weak': passwordStrength === 'Weak',
        'checkpass-element__medium': passwordStrength === 'Medium',
        'checkpass-element__moderate': passwordStrength === 'Moderate',
        'checkpass-element__strong': passwordStrength === 'Strong',
        '': true
    }">
                    </div>
                </div>
            </div>
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
import { reactive, ref, watch } from "vue";

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
            validator: (rule: any, value: any) => {
                return new Promise<void>((resolve, reject) => {
                    const birthDate = new Date(value);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        age--;
                    }
                    if (age < 18) {
                        reject(new Error('Bạn phải từ 18 tuổi trở lên'));
                    } else {
                        resolve();
                    }
                });
            }, trigger: 'change'
        }
    ],
    sex: [
        { required: true, message: "Vui lòng chọn giới tính" }
    ],
    address: [
        { required: true, message: "Vui lòng nhập địa chỉ" },
        { max: 100, message: "Địa chỉ tối đa là 100 ký tự" },
    ],
    phoneNumber: [
        { required: true, message: "Vui lòng nhập số điện thoại" },
        {
            validator: (rule: any, value: any) => {
                return new Promise<void>((resolve, reject) => {
                    const phoneNumberRegex = /^0\d{9}$/;
                    if (value && !phoneNumberRegex.test(value)) { // Kiểm tra nếu có giá trị và không khớp với regex
                        reject('Số điện thoại không hợp lệ');
                    } else {
                        resolve();
                    }
                });
            },
        }
    ],
    email: [
        { required: true, message: "Vui lòng nhập email" },
        {
            validator: (rule: any, value: any) => {
                return new Promise<void>((resolve, reject) => {
                    // Biểu thức chính quy để kiểm tra định dạng email
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (value && !emailRegex.test(value)) {
                        reject('Email không hợp lệ');
                    } else {
                        resolve();
                    }
                });
            },
        }
    ],
    password: [
        { required: true, message: "Vui lòng nhập mật khẩu" }
    ],
});
const password = ref<string>("");
const passwordStrength = ref<string>("");

watch(password, () => {
    passwordStrength.value = getPasswordStrength(password.value);
    console.log(passwordStrength.value)
});
const getPasswordStrength: any = (password: any) => {
    if (password.length === 0) {
        return '';
    }
    const regex = [
        /[A-Z]/, // Uppercase Alphabet.
        /[a-z]/, // Lowercase Alphabet.
        /[0-9]/, // Digit.
        /[$@$!%*#?&]/ // Special Character.
    ];

    let passed = 0;

    for (const reg of regex) {
        if (reg.test(password)) {
            passed++;
        }
    }

    switch (passed) {
        case 0:
        case 1:
            return 'Weak';
        case 2:
            return 'Medium';
        case 3:
            return 'Moderate'
        case 4:
            return 'Strong';
    }
};

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
<style scoped lang="scss">
.checkpass {
    &-container {
        display: flex;
        justify-content: end;
        align-items: center;
        margin-top: 5px;
        gap: 0 5px;
        height: 15px;
    }

    width: 200px;
    border-radius: 200px;
    height: 10px;
    overflow: hidden;
    border: 1px solid gainsboro;

    &:hover>.checkpass-element {
        max-width: 100%;
    }

    &-element {
        max-width: 0%;
        height: 100%;
        transition: all ease-in-out 0.25s;

        &__weak {
            max-width: 25%;
            background: rgb(208, 59, 0);
        }

        &__medium {
            max-width: 50%;
            background: rgb(160, 160, 0);
        }

        &__moderate {
            max-width: 75%;
            background: rgba(125, 199, 13, 0.861);
        }

        &__strong {
            max-width: 100%;
            background: rgb(5, 160, 0)
        }
    }
}

.text-checkpass {
    font-size: 10px;

    &__weak {
        color: rgb(208, 59, 0);
    }

    &__medium {
        color: rgb(160, 160, 0);
    }

    &__moderate {
        color: rgb(145, 188, 4);
    }

    &__strong {
        color: rgb(5, 160, 0)
    }
}
</style>
