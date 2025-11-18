<script>
export default {
  name: "UserTable",
  data() {
    return {
      searchQuery: "",
      users: [
        {
          firstName: "Joshua",
          lastName: "Bakare",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Admin",
          isActive: false,
        },
        {
          firstName: "Jane",
          lastName: "Clement",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: true,
        },
        {
          firstName: "Hannah",
          lastName: "Johnson",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          firstName: "John",
          lastName: "Ngoka",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          firstName: "Omolayo",
          lastName: "Adeleke",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
          role: "Staff",
          isActive: false,
        },
        {
          firstName: "Gloria",
          lastName: "Amadi",
          email: "josh.bakery@gmail.com",
          phone: "+2348012345678",
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
              class="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded text-sm text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 cursor-pointer"
            >
              <option>Change role</option>
              <option>Admin</option>
              <option>Staff</option>
              <option>Manager</option>
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
            class="px-5 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition-colors"
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
        </div>

        <!-- Pagination Info -->
        <div class="flex items-center gap-3">
          <span class="text-sm text-gray-600">1 of 2</span>
          <div class="flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span class="w-2 h-2 rounded-full bg-gray-300"></span>
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
                  class="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer"
                />
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-blue-600 uppercase tracking-wide"
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
              v-for="(user, index) in filteredUsers"
              :key="index"
              :class="{ 'bg-green-50': user.isActive }"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="px-4 py-4">
                <input
                  type="checkbox"
                  :checked="user.isActive"
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
  </div>
</template>
