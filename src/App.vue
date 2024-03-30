<template>
  <div id="app" :class="themeState.theme">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { useTheme } from "@/stores/theme";
const themeState = useTheme().$state;
</script>
<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
}

:root {
  --bg-color: #ffffff;
  --bg-color-light: #ffffff50;
  --sup-text-color: rgb(52, 52, 52);
  --text-color: rgba(0, 0, 0, 0.88);
  --trasition-2500: all 0.25s ease-in-out;
}

.dark {
  --bg-color: #001529;
  --bg-color-light: #001529b5;
  --sup-text-color: rgb(202, 202, 202);
  --text-color: rgb(255, 255, 255);
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
