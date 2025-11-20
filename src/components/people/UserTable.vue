<script>
import UserDeleteConfirmation from "./UserDeleteConfirmation.vue";
export default {
  name: "UserTable",
  components: {
    UserDeleteConfirmation,
  },
  data() {
    return {
      //   searchQuery: "",
      //   selectedRole: "",
      //   currentPage: 1,
      //   itemsPerPage: 6,
      searchQuery: "",
      selectedRole: "",
      currentPage: 1,
      itemsPerPage: 6,
      showDeleteModal: false,
      userToDelete: null,
      users: [
        {
          id: 1,
          firstName: "Joshua",
          lastName: "Bakare",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
          isActive: false,
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Clement",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: true,
        },
        {
          id: 3,
          firstName: "Hannah",
          lastName: "Johnson",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          id: 4,
          firstName: "John",
          lastName: "Ngoka",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          id: 5,
          firstName: "Omolayo",
          lastName: "Adeleke",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          id: 6,
          firstName: "Gloria",
          lastName: "Amadi",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          id: 7,
          firstName: "Emmanuel",
          lastName: "Okafor",
          email: "emma.okafor@gmail.com",
          phone: "+2348012345679",
          role: "Staff",
          isActive: false,
        },
        {
          id: 8,
          firstName: "Blessing",
          lastName: "Nwosu",
          email: "blessing.n@gmail.com",
          phone: "+2348012345680",
          role: "Manager",
          isActive: false,
        },
        {
          id: 9,
          firstName: "Michael",
          lastName: "Eze",
          email: "michael.eze@gmail.com",
          phone: "+2348012345681",
          role: "Staff",
          isActive: false,
        },
        {
          id: 10,
          firstName: "Grace",
          lastName: "Ibrahim",
          email: "grace.ibrahim@gmail.com",
          phone: "+2348012345682",
          role: "Staff",
          isActive: false,
        },
      ],
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users;
      }
      const query = this.searchQuery.toLowerCase();
      return this.users.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(query) ||
          user.lastName.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.phone.includes(query) ||
          user.role.toLowerCase().includes(query)
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredUsers.slice(start, end);
    },
    selectedUsers() {
      return this.users.filter((user) => user.isActive);
    },
    isAllSelected() {
      return (
        this.paginatedUsers.length > 0 &&
        this.paginatedUsers.every((user) => user.isActive)
      );
    },
  },
  methods: {
    toggleSelectAll() {
      const shouldSelect = !this.isAllSelected;
      this.paginatedUsers.forEach((user) => {
        user.isActive = shouldSelect;
      });
    },
    updateSelectedUsers() {
      // This method is called when individual checkboxes are toggled
      // The v-model already handles the state update
    },
    changeRoleForSelected() {
      if (!this.selectedRole || this.selectedUsers.length === 0) return;

      this.selectedUsers.forEach((user) => {
        user.role = this.selectedRole;
        user.isActive = false; // Deselect after changing role
      });

      this.selectedRole = ""; // Reset dropdown
      alert(
        `Role changed successfully for ${this.selectedUsers.length} user(s)`
      );
    },
    // deleteUser(userId) {
    //   if (confirm("Are you sure you want to delete this user?")) {
    //     const index = this.users.findIndex((user) => user.id === userId);
    //     if (index !== -1) {
    //       this.users.splice(index, 1);

    //       if (this.paginatedUsers.length === 0 && this.currentPage > 1) {
    //         this.currentPage--;
    //       }
    //     }
    //   }
    // },
    deleteUser(userId) {
      // Find the user to delete
      const user = this.users.find((u) => u.id === userId);
      if (user) {
        this.userToDelete = user;
        this.showDeleteModal = true;
      }
    },

    confirmDelete() {
      if (this.userToDelete) {
        const index = this.users.findIndex(
          (user) => user.id === this.userToDelete.id
        );
        if (index !== -1) {
          this.users.splice(index, 1);

          // Adjust page if current page is now empty
          if (this.paginatedUsers.length === 0 && this.currentPage > 1) {
            this.currentPage--;
          }
        }
      }
      this.userToDelete = null;
    },

    cancelDelete() {
      this.userToDelete = null;
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  watch: {
    searchQuery() {
      // Reset to first page when searching
      this.currentPage = 1;
    },
  },
};
</script>

<template>
  <div class="min-h-screen bg-white p-6">
    <div class="bg-white">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <!-- Change Role Dropdown -->
          <div class="relative">
            <select
              v-model="selectedRole"
              class="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded text-sm text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 cursor-pointer"
            >
              <option value="">Change role</option>
              <option value="Admin">Admin</option>
              <option value="Staff">Staff</option>
              <option value="Manager">Manager</option>
            </select>
            <svg
              class="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <!-- Change Button -->
          <button
            @click="changeRoleForSelected"
            :disabled="selectedUsers.length === 0 || !selectedRole"
            :class="[
              'px-5 py-2 text-white text-sm font-medium rounded transition-colors',
              selectedUsers.length === 0 || !selectedRole
                ? 'bg-green-500 hover:bg-green-600 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600',
            ]"
          >
            Change
          </button>

          <!-- Search Input -->
          <div class="relative ml-2">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Enter staff name here..."
              class="pl-3 pr-9 py-2 border border-gray-300 rounded text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-64"
            />
            <button
              @click="searchQuery = ''"
              v-if="searchQuery"
              class="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              v-else
              class="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Pagination Info -->
        <div class="flex items-center gap-3">
          <button
            @click="previousPage"
            :disabled="currentPage === 1"
            class="text-gray-600 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span class="text-sm text-gray-600"
            >{{ currentPage }} of {{ totalPages }}</span
          >
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="text-gray-600 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              class="w-5 h-5"
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
          </button>
          <div class="flex items-center gap-1 ml-2">
            <span
              v-for="page in totalPages"
              :key="page"
              :class="[
                'w-2 h-2 rounded-full',
                page === currentPage ? 'bg-green-500' : 'bg-gray-300',
              ]"
            ></span>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto border border-gray-200 rounded-lg">
        <table class="w-full">
          <thead>
            <tr class="bg-white border-b border-gray-200">
              <th class="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  :checked="isAllSelected"
                  @change="toggleSelectAll"
                  class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
                />
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-green-500 uppercase tracking-wide"
              >
                First Name
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide"
              >
                Last Name
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide"
              >
                Email
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide"
              >
                Phone
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide"
              >
                Role
              </th>
              <th class="w-16 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="(user, index) in paginatedUsers"
              :key="user.id"
              :class="{ 'bg-green-50': user.isActive }"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="px-4 py-4">
                <input
                  type="checkbox"
                  v-model="user.isActive"
                  @change="updateSelectedUsers"
                  class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
                />
              </td>
              <td class="px-4 py-4 text-sm text-gray-700">
                {{ user.firstName }}
              </td>
              <td class="px-4 py-4 text-sm text-gray-700">
                {{ user.lastName }}
              </td>
              <td class="px-4 py-4 text-sm text-gray-600">{{ user.email }}</td>
              <td class="px-4 py-4 text-sm text-gray-700">{{ user.phone }}</td>
              <td class="px-4 py-4 text-sm text-gray-700">{{ user.role }}</td>
              <td class="px-4 py-4 text-center">
                <button
                  @click="deleteUser(user.id)"
                  class="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Add the Delete Confirmation Modal at the end -->
    <!-- <DeleteConfirmationModal
      v-model="showDeleteModal"
      :userName="
        userToDelete ? `${userToDelete.firstName} ${userToDelete.lastName}` : ''
      "
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    /> -->
    <UserDeleteConfirmation
      v-model="showDeleteModal"
      :userName="
        userToDelete ? `${userToDelete.firstName} ${userToDelete.lastName}` : ''
      "
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />
  </div>
</template>
