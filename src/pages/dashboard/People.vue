<script>
import Button from "@/components/Button.vue";
import UserCard from "@/components/people/UserCard.vue";
import UserTable from "@/components/people/UserTable.vue";
// import Modal from "@/components/explore/Modal.vue";
import AddUserModal from "@/components/people/AddUserModal.vue";

export default {
  components: {
    UserTable,
    UserCard,
    Button,
    // Modal,
    AddUserModal,
  },
  name: "user-management",

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    AddUser() {
      console.log("Opening modal");
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
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
          @onAction="AddUser"
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

    <!-- Modal with explicit prop and event binding -->
    <AddUserModal
      :value="showModal"
      @input="closeModal"
      @credit-wallet="handleCreditWallet"
    />
  </div>
</template>

<style lang="scss" scoped></style>
