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
      this.$router.push({ name: "Dashboard" });
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

    <div>
      <label class="block text-xs text-gray-500 mb-2">Password</label>
      <div class="relative">
        <input
          v-model="formData.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="••••••••••••"
          required
          minlength="8"
          class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <svg
            v-if="!showPassword"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <svg
            v-else
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <p class="text-green-500">Forgot Password?</p>
      <button
        type="submit"
        class="w-40 bg-green-500 hover:bg-green-600 text-white font-medium cursor-pointer py-3 rounded-lg transition-colors mt-6"
      >
        Sign In
      </button>
    </div>
  </form>
</template>
