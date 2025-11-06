<script>
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    Header,
    SideBar,
  },
};
</script>

<template>
  <div class="flex h-screen">
    <SideBar />

    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1 overflow-auto bg-gray-100">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped></style>

<!-- <template>
  <div>Dashboard layoutttttttttttttttttttttttt</div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script> -->
