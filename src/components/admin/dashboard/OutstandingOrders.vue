<template>
    <div class="outstanding-orders-container">
        <h2 class="title">
            Outstanding Orders
            <div class="title-icon">
                <StarFilled class="site-form-item-icon" />
            </div>
        </h2>
        <table class="orders">
            <tr class="orders-header">
                <td>Product</td>
                <td>Order ID</td>
                <td>Customer Name</td>
                <td>Date</td>
                <td>Price</td>
                <td>Status</td>
            </tr>
            <tr class="orders-list" v-for="a in [1, 2, 3, 4, 5, 6]">
                <td>
                    <img src="https://images.unsplash.com/photo-1711039610568-80b888ae319c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
                        alt="">
                </td>
                <td>#123123</td>
                <td>Nguyễn Minh Khôi</td>
                <td>
                    <CalendarOutlined class="site-form-item-icon" />
                    1-1-2024
                </td>
                <td>1.000.000 vnd</td>
                <td>
                    <a-tag v-if="a == 1" color="green">Thành công</a-tag>
                    <a-tag v-else-if="a == 2" color="red">Thất bại</a-tag>
                    <a-tag v-else color="cyan">Chờ giao</a-tag>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { CalendarOutlined, StarFilled } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.outstanding-orders-container {
    height: 400px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
}

.title {
    font-size: 20px;
    font-weight: 600;

    &-icon {
        display: inline-block;
        color: orange;
        animation: rotate 1s linear infinite;
        transform-origin: center center;
    }
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}

.orders {
    width: 100%;

    &-header {
        font-size: 15px;
        font-weight: 400;

        td {
            padding-block: 15px;
        }
    }

    &-list {
        td {
            height: 50px;
            font-size: 13px;
        }

        img {
            width: 40px;
            height: 30px;
            object-fit: cover;
            border-radius: 5px;
        }
    }
}
</style>