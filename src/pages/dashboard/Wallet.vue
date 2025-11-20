<script>
import Button from "@/components/Button.vue";
import WalletCard from "@/components/walletfolder/WalletCard.vue";
export default {
  components: {
    Button,
    WalletCard,
  },
  name: "AuthLayout",
};
</script>

<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="text-lg font-semibold text-gray-900">Debit Cards</h1>
      <div>
        <Button
          buttonText="Add New"
          buttonBgColor="#22c55e"
          buttonTextColor="#ffffff"
          @onAction="openModal"
        />
      </div>
    </div>
    <WalletCard
      cardNumber="**** **** **** 3745"
      cardHolder="Joshua Bakare"
      expiryDate="09/22"
      cardType="mastercard"
    />
  </div>
</template>
