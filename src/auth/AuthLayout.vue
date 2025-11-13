<script>
export default {
  name: "AuthLayout",
  data() {
    return {
      stageImages: {
        1: "/signup-man.png",
        2: "/signup-woman.png",
        3: "/signup-woman.png",
      },
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        businessName: "",
        businessAddress: "",
        phoneNumber: "",
      },
    };
  },
  computed: {
    currentStage() {
      return this.$route.meta.stage || 1;
    },
    currentImage() {
      return this.stageImages[this.currentStage];
    },
  },
  provide() {
    return {
      formData: this.formData,
    };
  },
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Left Side - Image Section -->
    <div class="hidden lg:flex lg:w-1/2 relative">
      <div
        class="w-full h-full bg-contain bg-center transition-all duration-500"
        :style="{ backgroundImage: `url(${currentImage})` }"
      >
        <div
          class="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-end pb-12"
        >
          <h2 class="text-white text-2xl font-semibold mb-3">No Hazzles</h2>
          <p class="text-white text-center px-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <!-- Carousel Dots -->
          <div class="flex gap-2 mt-6">
            <span
              v-for="n in 3"
              :key="n"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="
                currentStage === n
                  ? 'bg-[#2BDA53] w-6'
                  : 'bg-white bg-opacity-50'
              "
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Form Section -->
    <div class="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
      <div class="w-full max-w-md">
        <!-- Header -->
        <div class="mb-4">
          <h1 class="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
            {{
              currentStage === 3
                ? "Great to have you onboard"
                : "Create your free account"
            }}
          </h1>
          <p v-if="currentStage !== 3" class="text-sm text-gray-600">
            Already registered?
            <router-link to="/login" class="text-blue-600 hover:underline">
              Sign In
            </router-link>
          </p>
        </div>

        <!-- Router View for Stage Components -->
        <div class="py-8 px-8 bg-white rounded-lg shadow-md mb-6">
          <router-view />
        </div>

        <!-- Footer -->
        <div class="flex mt-8">
          <p class="text-xs text-gray-400 text-center mt-4">
            By signing up, you agree to our
            <a href="#" class="text-green-500 hover:text-green-600">Terms</a>
            and
            <a href="#" class="text-green-500 hover:text-green-600"
              >Privacy Policy</a
            >
          </p>
          <p class="text-xs text-gray-400">
            © 2025 Thynkles. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #9ca3af;
}
</style>
