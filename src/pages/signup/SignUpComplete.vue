<script>
export default {
  name: "SignUpComplete",
  inject: ["formData"],
};
</script>

<template>
  <div class="text-center">
    <p class="text-gray-600 mb-8 leading-relaxed">
      We just mailed you a confirmation link at<br />
      <span class="font-medium text-gray-800">{{ formData.email }}</span
      >. Complete registration<br />
      by following the link.
    </p>

    <router-link
      to="/dashboard"
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
    </router-link>
  </div>
</template>
