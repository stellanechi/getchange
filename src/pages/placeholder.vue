<script>
import SignUpStepOne from "@/pages/signup/SignUpStepOne.vue";

export default {
  name: "MultiStageSignup",

  components: { SignUpStepOne },
  data() {
    return {
      currentStage: 1,
      showPassword: false,
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
    currentImage() {
      return this.stageImages[this.currentStage];
    },
  },
  methods: {
    nextStage() {
      if (this.currentStage < 3) {
        this.currentStage++;
      }
    },
    prevStage() {
      if (this.currentStage > 1) {
        this.currentStage--;
      }
    },
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
                currentStage === n ? 'bg-white w-6' : 'bg-white bg-opacity-50'
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
          <!-- <p class="text-gray-400 text-sm mb-6">
            {{
              currentStage === 1
                ? "Sign Up"
                : currentStage === 2
                ? "Sign Up II"
                : "Complete"
            }}
          </p> -->
          <!-- <p class="text-gray-400 text-sm">
            {{ currentStage === 1 ? "" : currentStage === 2 ? "" : "" }}
          </p> -->
          <h1 class="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">
            {{
              currentStage === 3
                ? "Great to have you onboard"
                : "Create your free account"
            }}
          </h1>
          <p v-if="currentStage !== 3" class="text-sm text-gray-600">
            Already registered?
            <a href="#" class="text-green-500 hover:text-green-600 font-medium"
              >Sign In</a
            >
          </p>
        </div>

        <!-- Stage 1: Personal Informatio n -->
        <!-- <SignUpStepOne /> -->
        <div class="py-8 px-8 bg-white rounded-lg shadow-md mb-6">
          <form
            v-if="currentStage === 1"
            @submit.prevent="nextStage"
            class="space-y-2"
          >
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs text-gray-500 mb-2"
                  >First Name</label
                >
                <div class="relative">
                  <input
                    v-model="formData.firstName"
                    type="text"
                    placeholder="Joshua"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <label class="block text-xs text-gray-500 mb-2"
                  >Last Name</label
                >
                <div class="relative">
                  <input
                    v-model="formData.lastName"
                    type="text"
                    placeholder="Bakare"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

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

            <div class="flex justify-end">
              <button
                type="submit"
                class="w-40 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-colors mt-6"
              >
                Continue
              </button>
            </div>
          </form>

          <!-- Stage 2: Business Information -->
          <form
            v-if="currentStage === 2"
            @submit.prevent="nextStage"
            class="space-y-2"
          >
            <div>
              <label class="block text-xs text-gray-500 mb-2"
                >Business Name</label
              >
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
              <label class="block text-xs text-gray-500 mb-2"
                >Business Address</label
              >
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
              <label class="block text-xs text-gray-500 mb-2"
                >Phone Number</label
              >
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

            <button
              type="submit"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition-colors mt-6"
            >
              Finish
            </button>
          </form>

          <!-- Stage 3: Completion -->
          <div v-if="currentStage === 3" class="text-center">
            <p class="text-gray-600 mb-8 leading-relaxed">
              We just mailed you a confirmation link at<br />
              <span class="font-medium text-gray-800">{{ formData.email }}</span
              >. Complete registration<br />
              by following the link.
            </p>

            <a
              href="#"
              class="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Dashboard
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
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
