<script>
export default {
  name: "AddUserModal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        email: "",
        phoneNumber: "",
        role: "",
      },
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    isFormValid() {
      return (
        this.formData.email &&
        this.formData.phoneNumber &&
        this.formData.role &&
        this.isValidEmail(this.formData.email)
      );
    },
  },
  watch: {
    isOpen(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    closeModal() {
      this.isOpen = false;
      this.resetForm();
    },
    formatPhoneNumber(e) {
      // Remove all non-numeric characters
      let value = e.target.value.replace(/\D/g, "");

      // Limit to 13 digits (for +234 format)
      if (value.length > 13) {
        value = value.substring(0, 13);
      }

      this.formData.phoneNumber = value;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    sendInvite() {
      if (!this.isFormValid) return;

      // Emit the user data to parent component
      this.$emit("add-user", {
        email: this.formData.email,
        phoneNumber: this.formData.phoneNumber,
        role: this.formData.role,
      });

      // Show success message (you can replace with toast notification)
      alert(`Invite sent successfully to ${this.formData.email}!`);

      this.closeModal();
    },
    resetForm() {
      this.formData = {
        email: "",
        phoneNumber: "",
        role: "",
      };
    },
  },
  beforeDestroy() {
    document.body.style.overflow = "";
  },
};
</script>

<template>
  <div>
    <!-- Modal Overlay -->
    <transition name="modal">
      <div
        v-if="isOpen"
        class="modal-overlay fixed inset-0 flex items-center justify-center z-50"
        @click.self="closeModal"
      >
        <!-- Modal Content -->
        <div
          class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative"
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <svg
              class="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Modal Header -->
          <div class="text-center pt-8 pb-6 px-8">
            <h2 class="text-xl font-semibold text-gray-800">
              Add a new member of your team
            </h2>
          </div>

          <!-- Modal Body -->
          <div class="px-8 pb-8 space-y-5">
            <!-- Email -->
            <div>
              <label class="block text-sm text-gray-600 mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                placeholder=""
                class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <!-- Phone Number -->
            <div>
              <label class="block text-sm text-gray-600 mb-2"
                >Phone Number</label
              >
              <input
                v-model="formData.phoneNumber"
                type="tel"
                placeholder=""
                @input="formatPhoneNumber"
                class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <!-- Assign Role -->
            <div>
              <label class="block text-sm text-gray-600 mb-2"
                >Assign Role</label
              >
              <div class="relative">
                <select
                  v-model="formData.role"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-700 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer"
                >
                  <option value="" disabled selected></option>
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                  <option value="Manager">Manager</option>
                  <option value="Supervisor">Supervisor</option>
                </select>
                <svg
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
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
            </div>

            <!-- Send Invite Button -->
            <button
              @click="sendInvite"
              :disabled="!isFormValid"
              :class="[
                'w-full py-3 text-white font-medium rounded-md transition-colors mt-2',
                isFormValid
                  ? 'bg-green-500 hover:bg-green-600 cursor-pointer'
                  : 'bg-gray-300 cursor-not-allowed',
              ]"
            >
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Modal transition animations */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}

/* Custom select arrow positioning */
select {
  padding-right: 2.5rem;
}
</style>
