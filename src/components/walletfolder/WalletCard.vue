<script>
export default {
  name: "CreditCard",
  props: {
    cardNumber: {
      type: String,
      required: true,
      default: "**** **** **** 0000",
    },
    cardHolder: {
      type: String,
      required: true,
      default: "CARD HOLDER",
    },
    expiryDate: {
      type: String,
      required: true,
      default: "00/00",
    },
    cardType: {
      type: String,
      default: "mastercard",
      validator: (value) => ["mastercard", "visa"].includes(value),
    },
  },
  computed: {
    getLastFourDigits() {
      return this.cardNumber.slice(-4);
    },
  },
};
</script>

<template>
  <div class="w-full max-w-md">
    <div
      class="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg px-10 py-8"
      style="height: 260px"
    >
      <!-- Card Number with Lock/Delete Icon -->
      <div class="flex items-start justify-between mb-24">
        <div class="flex items-center gap-5">
          <span class="text-blue-900 text-xl font-bold tracking-wide"
            >****</span
          >
          <span class="text-blue-900 text-xl font-bold tracking-wide"
            >****</span
          >
          <span class="text-blue-900 text-xl font-bold tracking-wide"
            >****</span
          >
          <span class="text-blue-900 text-xl font-bold tracking-wide">{{
            getLastFourDigits
          }}</span>
        </div>
        <button class="text-gray-400 hover:text-gray-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      <!-- Bottom Section: Card Holder, Expiry and Mastercard Logo -->
      <div class="flex items-end justify-between">
        <div class="flex items-end gap-20">
          <!-- Card Holder -->
          <div>
            <p class="text-gray-400 text-xs font-normal mb-1">Card Holder</p>
            <p class="text-blue-900 text-base font-bold">{{ cardHolder }}</p>
          </div>
          <!-- Expiry Date -->
          <div>
            <p class="text-gray-400 text-xs font-normal mb-1">Exp. Date</p>
            <p class="text-blue-900 text-base font-bold">{{ expiryDate }}</p>
          </div>
        </div>

        <!-- Mastercard Logo -->
        <div class="flex flex-col items-center">
          <div class="flex items-center relative mb-0.5">
            <div class="w-9 h-9 rounded-full bg-red-500"></div>
            <div class="w-9 h-9 rounded-full bg-orange-400 -ml-4"></div>
          </div>
          <p class="text-gray-700 text-xs font-semibold tracking-tight">
            mastercard
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
