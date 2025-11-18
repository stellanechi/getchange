<script>
import Button from "@/components/Button.vue";
import UserCard from "@/components/people/UserCard.vue";
import UserTable from "@/components/people/UserTable.vue";

export default {
  components: {
    UserTable,
    UserCard,
    Button,
  },
  name: "AuthLayout",
};
</script>

<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="text-lg font-semibold text-gray-900">Employees</h1>
      <div>
        <Button
          buttonText="Add New"
          buttonBgColor="#22c55e"
          buttonTextColor="#ffffff"
        />
      </div>
    </div>
    <div class="mb-6">
      <UserCard
        title="Josh Bakery Ventures"
        address="62, Bode Thomas, Surulere, Lagos"
      />
    </div>
    <UserTable />
  </div>
</template>

<style lang="scss" scoped></style>
