<template>
    <Breadcrumb></Breadcrumb>
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
import Breadcrumb from "@/components/admin/dashboard/Breadcrumb.vue";
</script>

<style lang="scss" scoped>
.dashboard-container {
    width: 100%;
}
</style>