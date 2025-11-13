<script>
import ExploreTable from "@/components/explore/ExploreTable.vue";
import Modal from "@/components/explore/Modal.vue";
import QuickView from "@/components/explore/QuickView.vue";
import Button from "@/components/Button.vue";
import Calculator from "@/components/Calculator.vue";

export default {
  name: "AuthLayout",
  components: {
    QuickView,
    ExploreTable,
    Modal,
    Button,
    Calculator,
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
  <div class="flex justify-between align-center">
    <div>
      <div class="mb-6 max-width-2xl">
        <QuickView title="Store Wallet" :amount="2500" @onAction="handleTopUp">
          <Button
            buttonText="Top up wallet"
            buttonBgColor="#22c55e"
            buttonTextColor="#ffffff"
            @onAction="handleClick"
          />
        </QuickView>
      </div>

      <!-- Total Disbursed -->
      <div class="mb-6">
        <QuickView
          title="Total Disbursed"
          :amount="12000"
          @onAction="viewHistory"
        >
          <Button
            buttonText="View History"
            buttonBgColor="#ffffff"
            buttonTextColor="#0F172A"
            :borderVisible="true"
            @onAction="handleClick"
        /></QuickView>
      </div>
      <div>
        <ExploreTable />
      </div>

      <Modal v-model="showModal" @credit-wallet="handleCreditWallet" />
    </div>
    <div>
      <Calculator />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
