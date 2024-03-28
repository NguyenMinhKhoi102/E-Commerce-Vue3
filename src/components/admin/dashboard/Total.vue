<template>
    <div class="total">
        <div class="total-element">
            <div class="total-container">
                <div class="total-icon total-icon__purple">
                    <TeamOutlined class="site-form-item-icon" />
                </div>
                <div class="total-content">
                    <div class="total-amount">
                        2000+
                    </div>
                    <div class="total-title">
                        Total Customers
                    </div>
                </div>
            </div>
        </div>
        <div class="total-element">
            <div class="total-container">
                <div class="total-icon total-icon__orange">
                    <InboxOutlined class="site-form-item-icon" />
                </div>
                <div class="total-content">
                    <div class="total-amount">
                        2000+
                    </div>
                    <div class="total-title">
                        Total Products
                    </div>
                </div>
            </div>
        </div>
        <div class="total-element">
            <div class="total-container">
                <div class="total-icon  total-icon__red">
                    <ProfileOutlined class="site-form-item-icon" />
                </div>
                <div class="total-content">
                    <div class="total-amount">
                        2000+
                    </div>
                    <div class="total-title">
                        Total Orders
                    </div>
                </div>
            </div>
        </div>
        <div class="total-element">
            <div class="total-container">
                <div class="total-icon  total-icon__green">
                    <BarChartOutlined class="site-form-item-icon" />
                </div>
                <div class="total-content">
                    <div class="total-amount">
                        2000+
                    </div>
                    <div class="total-title">
                        Total Sales
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TeamOutlined, InboxOutlined, ProfileOutlined, BarChartOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.total {
    $column: 4;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    gap: 0 32px;
    &-element {
        background: #fff;
        height: 100%;
        width: calc(100% / $column);
        border-radius: 5px;
        display: flex;
        align-items: center;
    }

    &-container {
        height: 45px;
        width: 100%;
        padding-inline: 20px;
        display: flex;
        align-items: center;
        gap: 0 20px;
    }

    &-icon {
        height: 100%;
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 900;

        &__purple {
            background: #6600ff2d;
            color: #6600ff;
        }

        &__orange {
            background: #ff8c002d;
            color: #ff8c00;
        }

        &__red {
            background: #ff000029;
            color: #ff0000;
        }

        &__green {
            background: #26ff002d;
            color: #109d00;
        }
    }

    &-content {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    &-amount {
        color: black;
        font-size: 20px;
        font-weight: 550;
        letter-spacing: 1px;
    }

    &-title {
        color: rgb(52, 52, 52);
        font-size: 14px;
        font-weight: 400;
    }
}
</style>