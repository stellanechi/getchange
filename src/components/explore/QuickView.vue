<template>
  <div
    class="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
  >
    <!-- Wallet Info -->
    <div>
      <p class="text-sm text-gray-500 font-medium">{{ title }}</p>
      <p class="text-2xl font-bold text-gray-800 mt-1">
        ₦{{ amount.toLocaleString() }}
      </p>
    </div>

    <!-- Customizable Button -->
    <button
      :style="{
        backgroundColor: buttonBgColor,
        color: buttonTextColor,
      }"
      class="px-4 py-2 rounded-md font-medium transition-all duration-200 hover:opacity-90"
      @click="$emit('onTopUp')"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "WalletCard",
  props: {
    title: {
      type: String,
      default: "Store Wallet",
    },
    amount: {
      type: Number,
      default: 0,
    },
    buttonText: {
      type: String,
      default: "Top up wallet",
    },
    buttonBgColor: {
      type: String,
      default: "#22C55E", // Tailwind green-500
    },
    buttonTextColor: {
      type: String,
      default: "#ffffff",
    },
  },
};
</script>
