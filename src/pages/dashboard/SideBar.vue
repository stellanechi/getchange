<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          name: "Dashboardlayout",
          path: "/dashboardlayout",
          icon: require("@/assets/icons/home.png"), // Change to your icon filename
        },
        {
          name: "Wallet",
          path: "/wallet",
          icon: require("@/assets/icons/wallet.png"), // Change to your icon filename
        },
        {
          name: "Explore",
          path: "/explore",
          icon: require("@/assets/icons/explore.png"), // Change to your icon filename
        },
        {
          name: "People",
          path: "/people",
          icon: require("@/assets/icons/people.png"), // Change to your icon filename
        },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<template>
  <div
    class="w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-8"
  >
    <div class="text-2xl font-bold text-green-500 mb-8">G</div>

    <router-link
      v-for="item in menuItems"
      :key="item.name"
      :to="item.path"
      class="sidebar-link"
    >
      <div
        class="sidebar-icon w-12 h-12 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        :class="{ 'bg-green-500 text-white': isActive(item.path) }"
      >
        <img
          v-if="item.icon"
          :src="item.icon"
          :alt="item.name"
          class="w-6 h-6"
          :class="{ 'filter-white': isActive(item.path) }"
        />
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar-link {
  text-decoration: none;
}

/* Filter to make icon white when active */
.filter-white {
  filter: brightness(0) invert(1);
}
</style>
