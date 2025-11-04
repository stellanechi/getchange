<script>
export default {
  name: "SignUpStepTwo",
  inject: ["formData"],
  methods: {
    handleSubmit() {
      // Here you would typically make an API call to register the user
      this.$router.push({ name: "SignUpComplete" });
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-2">
    <div>
      <label class="block text-xs text-gray-500 mb-2">Business Name</label>
      <div class="relative">
        <input
          v-model="formData.businessName"
          type="text"
          placeholder="Josh Bakery Ventures"
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    </div>

    <div>
      <label class="block text-xs text-gray-500 mb-2">Business Address</label>
      <div class="relative">
        <input
          v-model="formData.businessAddress"
          type="text"
          placeholder="62, Bode Thomas, Surulere, Lagos"
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>

    <div>
      <label class="block text-xs text-gray-500 mb-2">Phone Number</label>
      <div class="relative">
        <input
          v-model="formData.phoneNumber"
          type="tel"
          placeholder="+2348012345678"
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="submit"
        class="w-40 bg-green-500 hover:bg-green-600 text-white font-medium py-3 cursor-pointer rounded-lg transition-colors mt-6"
      >
        Finish
      </button>
    </div>
  </form>
</template>
