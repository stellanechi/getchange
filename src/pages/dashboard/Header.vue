<script>
export default {
  name: "Header",
  data() {
    return {
      userName: "Joshua",
      showDropdown: false,
    };
  },
  computed: {
    userInitial() {
      return this.userName.charAt(0).toUpperCase();
    },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      this.showDropdown = false;
      this.$router.push("/login");
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".cursor-pointer")) {
        this.showDropdown = false;
      }
    });
  },
};
</script>

<template>
  <header
    class="bg-white shadow-sm px-8 py-4 flex items-center justify-between"
  >
    <div class="flex items-center space-x-2">
      <img
        src="../../assets/auth-images/getchange-logo.png"
        alt="GetChange Logo"
        class="w-32 h-auto"
      />
    </div>

    <div class="flex items-center space-x-3">
      <div
        class="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center"
      >
        <span class="text-white text-sm font-medium">{{ userInitial }}</span>
      </div>
      <div
        class="flex items-center space-x-1 cursor-pointer"
        @click="toggleDropdown"
      >
        <span class="text-gray-700 text-sm">Hi, {{ userName }}</span>
        <svg
          class="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <!-- Dropdown Menu -->
      <div
        v-if="showDropdown"
        class="absolute right-8 top-16 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
      >
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Profile</a
        >
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >Settings</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          @click.prevent="logout"
          >Logout</a
        >
      </div>
    </div>
  </header>
</template>
