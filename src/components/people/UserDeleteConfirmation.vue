<script>
export default {
  name: "DeleteConfirmationModal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      default: "",
    },
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
    handleOverlayClick(event) {
      if (
        this.$refs.modalContent &&
        !this.$refs.modalContent.contains(event.target)
      ) {
        this.handleCancel();
      }
    },
    handleCancel() {
      this.isOpen = false;
      this.$emit("cancel");
    },
    handleConfirm() {
      this.isOpen = false;
      this.$emit("confirm");
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
        v-show="isOpen"
        class="modal-overlay fixed inset-0 flex items-center justify-center z-50"
        @click="handleOverlayClick"
      >
        <!-- Modal Content -->
        <div
          ref="modalContent"
          class="bg-white rounded-lg shadow-xl w-full max-w-sm mx-4 relative"
        >
          <!-- Modal Header -->
          <div class="text-center pt-6 pb-4 px-6">
            <h2 class="text-lg font-semibold text-gray-800">Delete Employee</h2>
          </div>

          <!-- Modal Body -->
          <div class="px-6 pb-6">
            <p class="text-sm text-gray-600 text-center mb-6">
              Are you sure you want to delete<br />{{ userName }}?
            </p>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              <!-- Cancel Button -->
              <button
                @click="handleCancel"
                type="button"
                class="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                No, Cancel
              </button>

              <!-- Delete Button -->
              <button
                @click="handleConfirm"
                type="button"
                class="flex-1 px-4 py-2.5 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition-colors"
              >
                Yes, Delete
              </button>
            </div>
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
  transform: scale(0.95);
}
</style>
