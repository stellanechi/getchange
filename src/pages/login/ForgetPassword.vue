<script>
export default {
  name: "Login",
  inject: ["formData"],
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ name: "" });
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-2">
    <div>
      <label class="block text-xs text-gray-500 mb-2">Email</label>
      <div class="relative">
        <input
          v-model="formData.email"
          type="email"
          placeholder="josh.bakery@gmail.com"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
        />
        <svg
          class="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <router-link to="/login" class="text-green-500 hover:underline">
        Back to login
      </router-link>
      <button
        type="submit"
        class="w-40 bg-green-500 hover:bg-green-600 text-white font-medium cursor-pointer py-3 rounded-lg transition-colors mt-6"
      >
        Recover Password
      </button>
    </div>
  </form>
</template>
