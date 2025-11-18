<script>
export default {
  name: "UserCard",
  props: {
    title: {
      type: String,
      required: true,
      default: "Josh Bakery Ventures",
    },
    address: {
      type: String,
      required: true,
      default: "62, Bode Thomas, Surulere, Lagos",
    },
  },
};
</script>

<template>
  <div class="bg-white border-b border-gray-200 px-8 py-5">
    <div class="flex items-center justify-between">
      <!-- Left Side - Title -->
      <h1 class="text-xl font-semibold text-gray-900">
        {{ title }}
      </h1>

      <!-- Right Side - Address -->
      <p class="text-sm text-[#013C61]">
        {{ address }}
      </p>
    </div>
  </div>
</template>
