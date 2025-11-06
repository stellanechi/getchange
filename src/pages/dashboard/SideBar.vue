<script>
import wallet from "@/assets/auth-images/card-icon.png";
import explore from "@/assets/auth-images/explore-icon.png";
import people from "@/assets/auth-images/people-icon.png";

export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        {
          name: "Explore",
          path: "/dashboard/explore",
          icon: explore,
        },
        {
          name: "People",
          path: "/dashboard/people",
          icon: people,
        },
        {
          name: "Wallet",
          path: "/dashboard/wallet",
          icon: wallet,
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
    class="w-20 bg-white shadow-lg flex flex-col items-center py-6 space-y-8 mt-20"
  >
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

.filter-white {
  filter: brightness(0) invert(1);
}
</style>
