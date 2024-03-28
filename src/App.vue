<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
#app {
  font-family: "Poppins", sans-serif;
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
