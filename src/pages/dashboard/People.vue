<script>
import Button from "@/components/Button.vue";
import UserCard from "@/components/people/UserCard.vue";
import UserTable from "@/components/people/UserTable.vue";
import AddUserModal from "@/components/people/AddUserModal.vue";

export default {
  components: {
    UserTable,
    UserCard,
    Button,
    AddUserModal,
  },
  name: "user-management",

  data() {
    return {
      showModal: false,
      users: [],
    };
  },

  methods: {
    openModal() {
      console.log("Opening modal");
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleAddUser(userData) {
      console.log("New user data:", userData);

      const newUser = {
        id: Date.now(),
        firstName: userData.email.split("@")[0],
        lastName: "",
        email: userData.email,
        phone: userData.phoneNumber,
        role: userData.role,
        isActive: false,
      };

      this.users.push(newUser);

      // Optional: Show success notification
      this.$toast.success("User invited successfully!");

      // Or make API call to your backend
      // this.$axios.post('/api/users/invite', userData)
      //   .then(response => {
      //     this.users.push(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error inviting user:', error);
      //   });
    },
    handleModalInput(value) {
      if (this.showModal !== value) {
        this.showModal = value;
      }
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
          @onAction="openModal"
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
      @input="handleModalInput"
      @add-user="handleAddUser"
    />
  </div>
</template>
