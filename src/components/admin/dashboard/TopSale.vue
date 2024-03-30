<template>
    <div class="top-sale-container">
        <h2 class="title">
            Top Sold Categories
        </h2>
        <div class="category">Nón</div>
        <a-progress :percent="30" color="green" />
        <div class="category">Áo sơ mi</div>
        <a-progress :percent="50" status="active" />
        <div class="category">Áo khoác</div>
        <a-progress :percent="70" status="exception" />
        <div class="category">Quần Jean</div>
        <a-progress :percent="100" />
        <div class="category">Quần Tây</div>
        <a-progress :percent="50" :show-info="false" />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top-sale-container {
    height: 400px;
    background-color: var(--bg-color);
    color: var(--text-color);
    border-radius: 10px;
    padding: 20px;
}

.title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 25px;
}

.category {
    margin-top: 10px;
}
</style>