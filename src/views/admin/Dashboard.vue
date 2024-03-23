<template>
    <div class="dashboard-container">
        <Total></Total>
        <a-row>
            <a-col :span="15">
                <OutstandingOrders></OutstandingOrders>
            </a-col>
            <a-col :span="1"></a-col>
            <a-col :span="8">
                <TopSale></TopSale>
            </a-col>
        </a-row>
    </div>

</template>

<script setup lang="ts">
import Total from "@/components/admin/dashboard/Total.vue";
import OutstandingOrders from "@/components/admin/dashboard/OutstandingOrders.vue";
import TopSale from "@/components/admin/dashboard/TopSale.vue";
</script>

<style lang="scss" scoped>
.dashboard-container {
    width: 100%;
    height: 100vh;
    background: #faf0ff;
    padding-top: 30px;
    padding-left: 320px;
    padding-right: 40px;
}
</style>