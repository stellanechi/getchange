<script>
import UserTable from "@/components/people/UserTable.vue";

export default {
  components: {
    UserTable,
  },
  name: "AuthLayout",
};
</script>

<template>
  <div>
    <UserTable />
  </div>
</template>

<style lang="scss" scoped></style>
