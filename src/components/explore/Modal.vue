<script>
export default {
  name: "Modal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      amount: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      useSavedCard: false,
    };
  },
  computed: {
    isOpen: {
      get() {
        console.log("Modal isOpen getter called:", this.value);
        return this.value;
      },
      set(val) {
        console.log("Modal isOpen setter called:", val);
        this.$emit("input", val);
      },
    },
  },
  watch: {
    value(newVal) {
      console.log("Modal value prop changed:", newVal);
    },
    isOpen(val) {
      console.log("Modal isOpen watcher triggered:", val);
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    closeModal() {
      console.log("closeModal called");
      this.isOpen = false;
      this.resetForm();
    },
    formatCardNumber(e) {
      let value = e.target.value.replace(/\s/g, "");
      value = value.replace(/\D/g, "");
      const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
      this.cardNumber = formattedValue;
    },
    formatExpiryDate(e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length >= 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
      this.expiryDate = value;
    },
    formatCVV(e) {
      this.cvv = e.target.value.replace(/\D/g, "");
    },
    creditWallet() {
      this.$emit("credit-wallet", {
        amount: this.amount,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
        useSavedCard: this.useSavedCard,
      });

      this.closeModal();
    },
    resetForm() {
      this.amount = "";
      this.cardNumber = "";
      this.expiryDate = "";
      this.cvv = "";
      this.useSavedCard = false;
    },
  },
  mounted() {
    console.log("Modal mounted - value prop:", this.value);
  },
  beforeDestroy() {
    document.body.style.overflow = "";
  },
};
</script>

<template>
  <div>
    <!-- <div
      v-if="true"
      style="
        position: fixed;
        top: 50px;
        right: 10px;
        background: red;
        color: white;
        padding: 10px;
        z-index: 9999;
      "
    >
      Modal value: {{ value }}<br />
      Modal isOpen: {{ isOpen }}
    </div> -->

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
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              class="w-5 h-5 text-gray-600"
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
            <h2 class="text-2xl font-semibold text-gray-800">
              Top up your store wallet
            </h2>
          </div>

          <!-- Modal Body -->
          <div class="px-8 pb-8 space-y-4">
            <!-- Enter Amount -->
            <div>
              <label class="block text-sm text-gray-600 mb-2"
                >Enter Amount</label
              >
              <input
                v-model="amount"
                type="text"
                placeholder="Enter amount"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <!-- Card Number -->
            <div>
              <label class="block text-sm text-gray-600 mb-2"
                >Card Number</label
              >
              <input
                v-model="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                maxlength="19"
                @input="formatCardNumber"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <!-- Expiry Date and CVV -->
            <div class="flex gap-4">
              <div class="flex-1">
                <label class="block text-sm text-gray-600 mb-2"
                  >Expiry Date (MM/YY)</label
                >
                <input
                  v-model="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  maxlength="5"
                  @input="formatExpiryDate"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div class="flex-1">
                <label class="block text-sm text-gray-600 mb-2">CVV</label>
                <input
                  v-model="cvv"
                  type="text"
                  placeholder="123"
                  maxlength="3"
                  @input="formatCVV"
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <!-- Use Saved Debit Card Checkbox -->
            <div class="flex items-center">
              <input
                v-model="useSavedCard"
                type="checkbox"
                id="savedCard"
                class="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
              />
              <label for="savedCard" class="ml-2 text-sm text-gray-700"
                >Use saved debit card</label
              >
            </div>

            <!-- Credit Wallet Button -->
            <button
              @click="creditWallet"
              class="w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors mt-2"
            >
              Credit Wallet
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
</style>
