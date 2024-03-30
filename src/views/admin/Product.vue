<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Admin</a-breadcrumb-item>
        <a-breadcrumb-item>Product</a-breadcrumb-item>
    </a-breadcrumb>
    <ProductTable></ProductTable>
  </div>
</template>

<script setup lang="ts">
import ProductTable from "@/components/admin/product/ProductTable.vue";
</script>

<style lang="scss" scoped>

</style>