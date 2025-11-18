<script>
export default {
  name: "Button",
  props: {
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
  <div>
    <button
      v-if="buttonText"
      :style="{
        backgroundColor: buttonBgColor,
        color: buttonTextColor,
        border: borderVisible ? '1px solid #E5E7EB !important' : 'none',
      }"
      class="py-2 px-10 rounded-xs font-medium transition-all duration-200 hover:opacity-90 cursor-pointer"
      @click="$emit('onAction')"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
