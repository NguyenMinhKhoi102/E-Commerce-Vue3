<template>
    <Header @signout:customer="signOut"></Header>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/customer/Header.vue';
import Footer from '@/components/customer/Footer.vue';
import customerService from "@/services/customer.service";
import { useAuthen } from '@/stores/authen';
import { useRouter } from 'vue-router';


const router = useRouter();
const authen = useAuthen();

const signOut = async () => {
    try {
        await customerService.signOut();
        authen.changeAuthen(false);
        window.localStorage.setItem("Authen", JSON.stringify(authen.isAuthen));
        window.localStorage.removeItem("token");
        router.push({ name: "signin" });
    } catch (errors: any) {
        console.log(errors);
    }
}

</script>

<style lang="scss" scoped></style>