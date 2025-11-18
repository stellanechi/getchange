<script>
export default {
  name: "UserButton",
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

  methods: {
    handleClick() {
      this.$emit("onAction");
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
        border: borderVisible ? '1px solid #E5E7EB ' : 'none',
      }"
      class="py-2 px-10 rounded-xs font-medium transition-all duration-200 hover:opacity-90 cursor-pointer"
      @click="handleClick"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
