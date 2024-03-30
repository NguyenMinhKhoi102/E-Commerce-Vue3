<template>
    <div class="setting">
        <div class="setting-main">
            <Breadcrumb></Breadcrumb>
            <div class="setting-title">Workspace Setting</div>
            <a-tabs v-model:activeKey="activeKey" style="color: var(--text-color)">
                <a-tab-pane key="1" tab="General">
                    <div class="setting-title1">
                        Workspace theme
                        <a-divider class="setting-divider"
                            style="margin-top: 0; border-color: var(--sup-text-color);" />
                    </div>
                    <div class="setting-content1">
                        <div style="margin-bottom: 20px;">
                            Custimize your workspace's visual style
                        </div>
                        <Theme></Theme>
                    </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="Language">Đây là trang chuyển đổi ngôn ngữ</a-tab-pane>
            </a-tabs>
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/setting/Breadcrumb.vue';
import Theme from '../../components/setting/Theme.vue';
import { ref } from 'vue';
const activeKey = ref('1');
</script>

<style lang="scss" scoped>
.setting {
    color: var(--text-color);
    background: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
    padding: 20px 20px 30px;

    &-title {
        font-size: 25px;
        margin: 20px 0;
    }

    &-main {}

    &-title1 {
        font-size: 20px;
        margin-bottom: 20px;
    }

    &-setting-divider {
        border-color: rgb(255, 255, 255);
    }
}
</style>