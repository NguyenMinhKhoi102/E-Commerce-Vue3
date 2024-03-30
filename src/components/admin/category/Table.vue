<template>
    <a-space direction="vertical" style="width: 100%">
        <a-badge-ribbon text="Danh mục sản phẩm">
            <a-card size="small">


                <a-row :gutter="16" style="margin: 10px 0">
                    <!-- Thêm danh mục -->
                    <a-col class="gutter-row" :span="6">
                        <div class="gutter-box">

                            <!-- Popup-->
                            <a-popover v-model:open="visible" trigger="click" placement="topLeft">
                                <template #title> <a-alert message="Thêm danh mục" type="info" show-icon /></template>
                                <template #content>
                                    <a-form :model="categoryState" :labelCol="{ span: 7 }" name="custom-validation"
                                        class="login-form" autocomplete="off" @finish="onFinishAdd"
                                        @finishFailed="onFinishFailed">
                                        <a-form-item has-feedback label="Category" name="name"
                                            :rules="[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]">
                                            <a-input v-model:value="categoryState.name">
                                                <template #prefix>
                                                    <UserOutlined class="site-form-item-icon" />
                                                </template>
                                            </a-input>
                                        </a-form-item>
                                        <a-button html-type="submit" type="primary"
                                            style="margin: 10px 0 0 0">Thêm</a-button>
                                    </a-form>
                                    <!-- <a @click="hide">Đóng</a> -->
                                </template>
                                <a-button type="primary" style="margin-bottom: 8px">Thêm danh mục</a-button>
                            </a-popover>

                        </div>
                    </a-col>

                    <!-- Tìm kiếm danh mục -->
                    <a-col class="gutter-row" :span="6">
                        <div class="gutter-box"> <a-input-search v-model:value="value"
                                placeholder="Nhập tên danh mục cần tìm kiếm" enter-button @search="onSearch" /></div>
                    </a-col>

                </a-row>


                <!-- Bảng danh mục -->
                <a-table class="ant-table-striped" size="small" :row-selection="rowSelection" :columns="columns"
                    :data-source="categories"
                    :row-class-name="(_record: any, index: number) => (index % 2 === 1 ? 'table-striped' : null)"
                    @change="onChange" bordered>

                    <!-- Header -->
                    <template #headerCell="{ column }">
                        <template v-if="column.key === 'name'">
                            <a-badge dot>
                                <notification-outlined style="font-size: 16px" />
                            </a-badge>
                            Name
                        </template>
                    </template>

                    <!-- Body -->
                    <template #bodyCell="{ column, text, record }">

                        <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
                            <div>
                                <a-input v-if="editableData[record._id]"
                                    v-model:value="editableData[record._id][column.dataIndex]" 
                                    style="margin: -5px 0" />
                                <template v-else>
                                    {{ text }}
                                </template>
                            </div>
                        </template>

                        <template v-else-if="column.dataIndex === 'operation'">

                            <!-- <a-form :model="categoryState" :labelCol="{ span: 7 }" name="custom-validation"
                                class="login-form" autocomplete="off" 
                                @finish="onFinishEdit"
                                @finishFailed="onFinishFailed"> -->
                                
                                <div class="editable-row-operations">

                                    <span v-if="editableData[record._id]">
                                        <a-button type="primary" style="margin: 0 8px" html-type="submit"
                                            @click="onFinishEdit(record._id)">Lưu</a-button>
                                        <a-button type="primary" style="margin: 0 8px" @click="cancel(record._id)">Hủy
                                            bỏ</a-button>
                                    </span>

                                    <span v-else>
                                        <a-button @click="edit(record._id)" type="primary" danger>Chỉnh sửa</a-button>
                                    </span>

                                    <a-button type="primary" style="margin: 0 8px" @click="onDelete(record._id)">Xóa
                                        danh mục
                                    </a-button>

                                </div>

                            <!-- </a-form> -->

                        </template>

                    </template>

                </a-table>
            </a-card>
        </a-badge-ribbon>
    </a-space>

</template>

<script lang="ts" setup>
import { NotificationOutlined, UserOutlined } from '@ant-design/icons-vue';

import { computed, reactive, ref, unref } from 'vue';
import { Table } from 'ant-design-vue';
import type { TableProps } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es';
import type { UnwrapRef } from 'vue';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const value = ref<string>('');

const onSearch = (searchValue: string) => {
    console.log('use value', searchValue);
    console.log('or use this.value', value.value);
};

const visible = ref<boolean>(false);
const hide = () => {
    visible.value = false;
};

const props = defineProps<{
    categories: Array<any>; 
}>()
console.log(props.categories)

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Danh mục sản phẩm bán chạy nhất',
                value: 'Joe',
            },
            {
                text: 'Danh mục sản phẩm bán chạy nhất',
                value: 'Jim',
            },
        ],
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.address.indexOf(value) === 0,
        sorter: (a: any, b: any) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
        key: 'name',
        width: '40%'
    },
    {
        title: 'Created_At',
        dataIndex: 'created_at',
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.address.indexOf(value) === 0,
        sorter: (a: any, b: any) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
        key: 'created_at',
    },
    {
        title: 'Updated_At',
        dataIndex: 'updated_at',
        filterMultiple: false,
        onFilter: (value: string, record: any) => record.address.indexOf(value) === 0,
        sorter: (a: any, b: any) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
        key: 'updated_at',
    },
    {
        title: 'Action',
        key: 'operation',
        dataIndex: 'operation',
        // fixed: 'right',
        // width: 100,
    },
];

const selectedRowKeys = ref<any['_id'][]>([]);
const onSelectChange = (changableRowKeys: string[]) => {
    console.log('selectedRowKeys changed: ', changableRowKeys);
    selectedRowKeys.value = changableRowKeys;
};

const rowSelection = computed(() => {
    return {
        selectedRowKeys: unref(selectedRowKeys),
        onChange: onSelectChange,
        hideDefaultSelections: true,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
        ],
    };
});

const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter) => {
    console.log('params', pagination, filters, sorter);
};

type CategoryState = {
    name: string;
}
const categoryState = reactive<CategoryState>({
    name: "",
});
const emits = defineEmits<{
    "add:category": [data: any],
    "edit:category": [data: any, id: string],
    "delete:category": [id: string],
}>()

const onFinishFailed = (error: any) => {
    console.log("Failed:", error);
};

// Add Category
const onFinishAdd = (data: any) => {
    emits("add:category", data);
};

// Edit category
const editableData: UnwrapRef<Record<string, any>> = reactive({});
const edit = (_id: string) => {
    editableData[_id] = cloneDeep(props.categories.filter(item => _id === item._id)[0]);
};

const onFinishEdit = (_id: string) => {
    console.log("Old object:", editableData[_id].name);
    const newData = {
        name: editableData[_id].name,
    }
    emits("edit:category", newData, _id);
    delete editableData[_id];
    Object.assign(props.categories.filter(item => _id === item._id)[0], editableData[_id]);
    delete editableData[_id];
};

const cancel = async (_id: string) => {
    delete editableData[_id];
};

// Delete category
const onDelete = (id: string) => {
    emits("delete:category", id);
};

</script>

<style scoped lang="scss">
[data-doc-theme='light'] .ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
}

[data-doc-theme='dark'] .ant-table-striped :deep(.table-striped) td {
    background-color: rgb(29, 29, 29);
}

.editable-row-operations a {
    margin-right: 8px;
}
</style>