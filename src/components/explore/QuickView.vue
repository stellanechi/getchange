<script>
export default {
  name: "ExploreQuickView",
  props: {
    title: {
      type: String,
      default: "Wallet",
    },
    amount: {
      type: Number,
      default: 0,
    },
    buttonText: {
      type: String,
      default: "",
    },
    buttonBgColor: {
      type: String,
      default: "#22C55E",
    },
    buttonTextColor: {
      type: String,
      default: "#ffffff",
    },
    borderVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
    class="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
  >
    <div>
      <p class="text-sm text-gray-500 font-medium">{{ title }}</p>
    </div>

    <div>
      <p class="text-2xl font-semibold text-gray-800 mt-1">
        <span class="align-top text-base mr-1">₦</span
        >{{ amount.toLocaleString() }}
      </p>
    </div>

    <slot />

    <!-- <button
      v-if="buttonText"
      :style="{
        backgroundColor: buttonBgColor,
        color: buttonTextColor,
        border: borderVisible ? '1px solid #E5E7EB' : 'none',
      }"
      class="px-4 py-2 rounded-md font-medium transition-all duration-200 hover:opacity-90"
      @click="$emit('onAction')"
    >
      {{ buttonText }}
    </button> -->
  </div>
</template>
