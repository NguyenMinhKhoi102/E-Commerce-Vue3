<template>
    <div class="container">
        <a-radio-group v-model:value="value" v-for="(e, i) in ['Default', 'Light', 'Dark']">
            <a-radio :value="i" style="font-weight: 500;">
                {{ e == 'Dark' ? 'Dark Mode' : e == "Light" ? 'Light Mode' : 'System Default' }}
            </a-radio>
            <div class="screen" :class="e == 'Light' ? 'screen__light' : e == 'Dark' ? 'screen__dark' : ''">
                <div class="screen-head"
                    :class="e == 'Light' ? 'screen-head__light' : e == 'Dark' ? 'screen-head__dark' : ''">
                    <div class="screen-circle screen-circle__red"></div>
                    <div class="screen-circle screen-circle__yellow"></div>
                    <div class="screen-circle screen-circle__green"></div>
                </div>
                <div class="screen-body">
                    <div class="screen-sider"></div>
                    <div class="screen-main">
                        <div class="screen-header"></div>
                        <div class="screen-content"></div>
                    </div>
                </div>
            </div>
        </a-radio-group>

    </div>
    <a-button type="primary" style="background: green; margin-right: 10px;" @click="changeValue">Save</a-button>
    <a-button @click="resetValue">Cancel</a-button>

</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<number>(0);
const changeValue = () => {
    console.log(value.value);
}
const resetValue = () => {
    value.value = 0;
    console.log(value.value);
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    gap: 0 50px;
    margin: 20px 0;
}

.screen {
    height: 150px;
    width: 200px;
    background: linear-gradient(to right, #ececec 50%, #252525 50%);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;

    &__light {
        background: #ececec;
    }

    &__dark {
        background: #252525;
    }

    &-head {
        background: linear-gradient(to right, rgb(184, 184, 184) 50%, rgba(22, 22, 22, 0.997) 50%);
        display: flex;
        align-items: center;
        gap: 0 5px;
        padding-left: 10px;
        padding-block: 5px;

        &__light {
            background: rgb(184, 184, 184);
        }

        &__dark {
            background: rgba(22, 22, 22, 0.997);
        }
    }

    &-circle {
        width: 10px;
        height: 10px;
        border-radius: 100rem;

        &__green {
            background-color: green;
        }

        &__red {
            background-color: red;
        }

        &__yellow {
            background-color: rgb(255, 191, 0);
        }
    }

    &-body {
        width: 100%;
        height: calc(100% - 21px);
        padding: 10px;
        display: flex;
        gap: 0 5px;
        justify-content: space-between;
    }

    &-sider {
        width: 30%;
        background-color: rgba(213, 213, 213, 0.713);
        border-radius: 5px;
    }

    &-main {
        border-radius: 5px;
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 5px 0;
        justify-content: space-between;
    }

    &-header {
        width: 100%;
        height: 15%;
        background-color: rgba(213, 213, 213, 0.713);
        border-radius: 4px;
    }

    &-content {
        height: 85%;
        width: 100%;
        background-color: rgba(213, 213, 213, 0.713);
        border-radius: 5px;
    }
}
</style>