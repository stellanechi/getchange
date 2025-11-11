<script>
export default {
  name: "RecentActivitiesTable",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      activities: [
        {
          id: 1,
          description: "Wallet top up",
          date: "06 Aug, 2019",
          time: "12:24PM",
          staff: "Admin",
          amount: "NGN2000.00",
        },
        {
          id: 2,
          description: "Top for 08135949***",
          date: "06 Aug, 2019",
          time: "10:46AM",
          staff: "Jane",
          amount: "NGN65.00",
        },
        {
          id: 3,
          description: "Top for 08023467***",
          date: "06 Aug, 2019",
          time: "09:16AM",
          staff: "Hannah",
          amount: "NGN400.00",
        },
        {
          id: 4,
          description: "IOU for 08347849***",
          date: "05 Aug, 2019",
          time: "01:30PM",
          staff: "John",
          amount: "88N***K",
        },
        {
          id: 5,
          description: "IOU for 08135988***",
          date: "05 Aug, 2019",
          time: "11:24AM",
          staff: "Admin",
          amount: "SAA***O",
        },
        {
          id: 6,
          description: "Top for 08135948***",
          date: "04 Aug, 2019",
          time: "12:45PM",
          staff: "Jane",
          amount: "NGN105.00",
        },
        {
          id: 7,
          description: "Wallet top up",
          date: "03 Aug, 2019",
          time: "03:15PM",
          staff: "Admin",
          amount: "NGN1500.00",
        },
        {
          id: 8,
          description: "Top for 08145678***",
          date: "03 Aug, 2019",
          time: "11:30AM",
          staff: "Hannah",
          amount: "NGN200.00",
        },
        {
          id: 9,
          description: "IOU for 08167890***",
          date: "02 Aug, 2019",
          time: "02:45PM",
          staff: "John",
          amount: "77M***L",
        },
        {
          id: 10,
          description: "Top for 08123456***",
          date: "02 Aug, 2019",
          time: "10:20AM",
          staff: "Jane",
          amount: "NGN350.00",
        },
        {
          id: 11,
          description: "Wallet top up",
          date: "01 Aug, 2019",
          time: "04:30PM",
          staff: "Admin",
          amount: "NGN3000.00",
        },
        {
          id: 12,
          description: "IOU for 08134567***",
          date: "01 Aug, 2019",
          time: "09:15AM",
          staff: "Hannah",
          amount: "AAB***P",
        },
        {
          id: 13,
          description: "Top for 08198765***",
          date: "31 Jul, 2019",
          time: "01:50PM",
          staff: "Jane",
          amount: "NGN125.00",
        },
        {
          id: 14,
          description: "Wallet top up",
          date: "31 Jul, 2019",
          time: "11:00AM",
          staff: "Admin",
          amount: "NGN2500.00",
        },
        {
          id: 15,
          description: "Top for 08176543***",
          date: "30 Jul, 2019",
          time: "03:25PM",
          staff: "John",
          amount: "NGN180.00",
        },
        {
          id: 16,
          description: "IOU for 08165432***",
          date: "30 Jul, 2019",
          time: "10:40AM",
          staff: "Hannah",
          amount: "CCX***Z",
        },
        {
          id: 17,
          description: "Top for 08154321***",
          date: "29 Jul, 2019",
          time: "02:10PM",
          staff: "Jane",
          amount: "NGN95.00",
        },
        {
          id: 18,
          description: "Wallet top up",
          date: "29 Jul, 2019",
          time: "09:30AM",
          staff: "Admin",
          amount: "NGN1800.00",
        },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.activities.length / this.itemsPerPage);
    },
    paginatedActivities() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.activities.slice(start, end);
    },
  },
  methods: {
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
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm p-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-gray-700 font-medium text-base">Recent Activities</h2>
      <div class="flex items-center gap-2">
        <span class="text-gray-500 text-sm"
          >{{ currentPage }} of {{ totalPages }}</span
        >
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          :class="[
            'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
            currentPage === 1
              ? 'bg-gray-100 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300',
          ]"
        >
          <svg
            class="w-3 h-3 text-gray-600"
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
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          :class="[
            'w-6 h-6 rounded-full flex items-center justify-center transition-colors',
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600',
          ]"
        >
          <svg
            class="w-3 h-3 text-white"
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
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-gray-200">
            <th
              class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              #
            </th>
            <th
              class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Time
            </th>
            <th
              class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Staff
            </th>
            <th
              class="text-left py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="activity in paginatedActivities"
            :key="activity.id"
            class="border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <td class="py-4 px-4 text-sm text-gray-600">{{ activity.id }}</td>
            <td class="py-4 px-4 text-sm text-gray-700">
              {{ activity.description }}
            </td>
            <td class="py-4 px-4 text-sm text-gray-600">{{ activity.date }}</td>
            <td class="py-4 px-4 text-sm text-gray-600">{{ activity.time }}</td>
            <td class="py-4 px-4 text-sm text-gray-600">
              {{ activity.staff }}
            </td>
            <td class="py-4 px-4 text-sm text-gray-700 font-medium">
              {{ activity.amount }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
