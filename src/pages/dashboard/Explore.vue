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
      console.log("Opening modal");
      this.showModal = true;
    },
    viewHistory() {
      console.log("View history clicked");
    },
    closeModal() {
      this.showModal = false;
    },
    // handleCreditWallet(data) {
    //   console.log("Credit wallet data:", data);
    //   this.showModal = false;
    // },
  },
};
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="w-3/4">
        <div class="mb-6">
          <QuickView title="Store Wallet" :amount="2500">
            <Button
              buttonText="Top up wallet"
              buttonBgColor="#22c55e"
              buttonTextColor="#ffffff"
              @onAction="handleTopUp"
            />
          </QuickView>
        </div>

        <!-- Total Disbursed -->
        <div class="mb-6">
          <QuickView title="Total Disbursed" :amount="12000">
            <Button
              buttonText="View History"
              buttonBgColor="#ffffff"
              buttonTextColor="#0F172A"
              :borderVisible="true"
              @onAction="viewHistory"
          /></QuickView>
        </div>
        <div>
          <ExploreTable />
        </div>
      </div>
      <div>
        <Calculator />
      </div>
    </div>

    <!-- Modal with explicit prop and event binding -->
    <Modal
      :value="showModal"
      @input="closeModal"
      @credit-wallet="handleCreditWallet"
    />
  </div>
</template>
