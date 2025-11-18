<script>
export default {
  name: "UserTable",
  data() {
    return {
      searchQuery: "",
      users: [
        {
          firstName: "Joshua",
          lastName: "Bobby",
          email: "josh.bobby@gmail.com",
          phone: "+2348071234567b",
          role: "Admin",
          actionType: "edit",
          isActive: false,
        },
        {
          firstName: "Jane",
          lastName: "Cameron",
          email: "jane.bobby@gmail.com",
          phone: "+2348092334567b",
          role: "Staff",
          actionType: "lock",
          isActive: true,
        },
        {
          firstName: "John",
          lastName: "Johnson",
          email: "john.bobby@gmail.com",
          phone: "+2348071234567b",
          role: "Staff",
          actionType: "lock",
          isActive: false,
        },
        {
          firstName: "John",
          lastName: "Nagisa",
          email: "john.bobby@gmail.com",
          phone: "+2348071234567b",
          role: "Staff",
          actionType: "lock",
          isActive: false,
        },
        {
          firstName: "Oluchkpo",
          lastName: "Adedola",
          email: "john.bobby@gmail.com",
          phone: "+2348071234667b",
          role: "Staff",
          actionType: "lock",
          isActive: false,
        },
        {
          firstName: "Obinna",
          lastName: "Amadi",
          email: "john.bobby@gmail.com",
          phone: "+2348071234667b",
          role: "Staff",
          actionType: "lock",
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
  },
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Header -->
      <div
        class="flex items-center justify-between px-6 py-4 border-b border-gray-200"
      >
        <h2 class="text-base font-semibold text-gray-700">Manage User</h2>
        <div class="flex items-center gap-3">
          <!-- Search Input -->
          <div class="relative">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search user"
              class="pl-3 pr-9 py-1.5 border border-gray-300 rounded text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 w-56"
            />
            <button
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <!-- Add New Button -->
          <button
            class="px-4 py-1.5 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition-colors flex items-center gap-1.5"
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New
          </button>

          <!-- Pagination Info (Top Right) -->
          <div class="flex items-center gap-2 ml-4">
            <span class="text-xs text-gray-500">1 of 3</span>
            <div class="flex items-center gap-0.5">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-200">
              <th class="w-8 px-4 py-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                First Name
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                Last Name
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                Email
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                Phone
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide"
              >
                Role
              </th>
              <th class="w-16 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr
              v-for="(user, index) in filteredUsers"
              :key="index"
              :class="{ 'bg-green-50': user.isActive }"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="px-4 py-3.5">
                <input
                  type="checkbox"
                  :checked="user.isActive"
                  class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />
              </td>
              <td class="px-4 py-3.5 text-sm text-gray-700">
                {{ user.firstName }}
              </td>
              <td class="px-4 py-3.5 text-sm text-gray-700">
                {{ user.lastName }}
              </td>
              <td class="px-4 py-3.5 text-sm text-gray-600">
                {{ user.email }}
              </td>
              <td class="px-4 py-3.5 text-sm text-gray-700">
                {{ user.phone }}
              </td>
              <td class="px-4 py-3.5 text-sm text-gray-700">{{ user.role }}</td>
              <td class="px-4 py-3.5 text-center">
                <button
                  v-if="user.actionType === 'edit'"
                  class="w-7 h-7 flex items-center justify-center rounded bg-yellow-400 hover:bg-yellow-500 transition-colors"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <button
                  v-else
                  class="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  <svg
                    class="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
