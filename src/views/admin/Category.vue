<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <Carousel></Carousel>
    <Table :categories="categories" @add:category="addCategory" @edit:category="editCategory"
      @delete:category="deleteCategory"></Table>
  </div>
</template>

<script setup lang="ts">
import Table from "@/components/admin/category/Table.vue";
import Breadcrumb from "@/components/admin/category/Breadcrumb.vue";
import Carousel from "@/components/admin/category/Carousel.vue";

import categoryService from "@/services/category.service";
import { onMounted, ref } from "vue";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

type CategoryState = {
  _id: string;
  name: string;
  created_at: string;
  updated_at: string;
}
const categories = ref<CategoryState[]>([]);

const categoryList = async () => {
  try {
    categories.value = await categoryService.findAll();
    console.log(categories.value);
  } catch (errors: any) {
    console.log(errors.response.data.message);
  }
}

const addCategory = async (data: any) => {
  try {
    const response = await categoryService.create(data);
    categoryList();
    toast.success('Thêm danh mục thành công thành công ', {
      autoClose: 1000
    });
    console.log(response);
  } catch (errors: any) {
    console.log(errors.response.data.message);
    toast.error("Thêm danh mục thất bại", {
      autoClose: 1000
    });
  }
}

const editCategory = async (data: any, id: string) => {
  try {
    console.log(data);
    const response = await categoryService.update(data, id);
    categoryList();
    toast.success('Chỉnh sửa danh mục thành công', {
      autoClose: 1000
    });
    console.log(response);
  } catch (errors: any) {
    toast.error(errors.response.data.message, {
      autoClose: 1000
    });
  }
}

const deleteCategory = async (id: string) => {
  const result = await Swal.fire({
    title: 'Bạn muốn xóa danh mục này?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Xóa',
    cancelButtonText: 'Hủy',
  });
  if (result.isConfirmed) {
    try {
      console.log("Id", id);
      const response = await categoryService.delete(id);
      categoryList();
      console.log(response);
      Swal.fire({
        title: 'Xóa danh mục thành công!',
        icon: 'success',
        timer: 1000,
        showConfirmButton: false,
      });
    } catch (errors: any) {

      Swal.fire({
        title: errors.response.data.message,
        icon: 'error',
        timer: 1000,
        showConfirmButton: false,
      });
    }
  }

}

onMounted(() => {
  categoryList();
});

</script>

<style lang="scss" scoped></style>