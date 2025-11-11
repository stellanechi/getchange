<!-- <script>
import ExploreTable from "@/components/explore/ExploreTable.vue";
import QuickView from "@/components/explore/QuickView.vue";

export default {
  name: "AuthLayout",
  components: {
    QuickView,
    ExploreTable,
  },
};
</script> -->
<script>
import ExploreTable from "@/components/explore/ExploreTable.vue";
import Modal from "@/components/explore/Modal.vue";
import QuickView from "@/components/explore/QuickView.vue";

export default {
  name: "AuthLayout",
  components: {
    QuickView,
    ExploreTable,
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handleTopUp() {
      this.showModal = true;
    },
    viewHistory() {
      console.log("View history clicked");
      // Add your view history logic here
    },
    handleCreditWallet(data) {
      console.log("Credit wallet data:", data);

      // Add your API call here to process the payment
      // Example:
      // this.$api.creditWallet(data)
      //   .then(response => {
      //     this.$toast.success('Wallet credited successfully!')
      //     // Update wallet balance
      //   })
      //   .catch(error => {
      //     this.$toast.error('Failed to credit wallet')
      //   })
    },
  },
};
</script>

<template>
  <div>
    <div class="mb-6">
      <QuickView title="Store Wallet" :amount="2500" @onAction="handleTopUp">
        <button>top up view</button>
      </QuickView>
    </div>

    <!-- Total Disbursed -->
    <div class="mb-6">
      <QuickView
        title="Total Disbursed"
        :amount="12000"
        buttonText="View History"
        buttonBgColor="#ffffff"
        buttonTextColor="#0F172A"
        borderVisible
        @onAction="viewHistory"
      />
    </div>
    <div>
      <ExploreTable />
    </div>

    <Modal v-model="showModal" @credit-wallet="handleCreditWallet" />
  </div>
</template>

<style lang="scss" scoped></style>
