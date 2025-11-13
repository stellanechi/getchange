<script>
export default {
  name: "RechargeWidget",
  data() {
    return {
      amountType: "airtime",
      phoneNumber: "08012345678",
      keypadButtons: [
        "1",
        "2",
        "3",
        "*",
        "4",
        "5",
        "6",
        "#",
        "7",
        "8",
        "9",
        "0",
      ],
    };
  },
  methods: {
    handleKeypad(value) {
      if (this.phoneNumber.length < 15) {
        this.phoneNumber += value;
      }
    },
    clearOne() {
      this.phoneNumber = "";
    },
    backspace() {
      if (this.phoneNumber.length > 0) {
        this.phoneNumber = this.phoneNumber.slice(0, -1);
      }
    },
    forward() {
      // Move cursor forward functionality
      console.log("Forward");
    },
    refresh() {
      this.phoneNumber = "08012345678";
      this.amountType = "airtime";
    },
    query() {
      alert(`Querying: ${this.phoneNumber}\nType: ${this.amountType}`);
    },
    generate() {
      if (this.phoneNumber.length < 10) {
        alert("Please enter a valid phone number (minimum 10 digits)");
        return;
      }
      alert(`Generating ${this.amountType} for ${this.phoneNumber}`);
    },
  },
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-sm">
      <!-- Main Card -->
      <div class="bg-[#013C61] rounded-lg shadow-lg p-6 mb-4">
        <h2 class="text-white text-sm font-medium mb-6">RECHARGE WIDGET</h2>

        <!-- Amount Section -->
        <div class="mb-6">
          <label class="text-white text-xs mb-3 block">Amount</label>
          <div class="flex items-center gap-4 mb-4">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                v-model="amountType"
                value="airtime"
                class="custom-radio"
              />
              <span class="text-white text-sm">Airtime</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                v-model="amountType"
                value="voucher"
                class="custom-radio"
              />
              <span class="text-white text-sm">IOU Voucher</span>
            </label>
          </div>

          <!-- Phone Number Display -->
          <div class="bg-[#013C61] border border-white/20 rounded px-4 py-3">
            <input
              type="text"
              v-model="phoneNumber"
              readonly
              class="w-full bg-transparent text-white text-2xl tracking-wider outline-none"
              placeholder="08012345678"
            />
          </div>
        </div>
      </div>

      <!-- Keypad Card -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <!-- Action Buttons Row -->
        <div class="grid grid-cols-4 gap-3 mb-4">
          <button
            @click="clearOne"
            class="h-12 flex items-center justify-center text-[#013C61] font-medium text-lg hover:bg-gray-100 rounded transition"
          >
            C
          </button>
          <button
            @click="backspace"
            class="h-12 flex items-center justify-center text-[#013C61] font-medium text-lg hover:bg-gray-100 rounded transition"
          >
            &lt;
          </button>
          <button
            @click="forward"
            class="h-12 flex items-center justify-center text-[#013C61] font-medium text-lg hover:bg-gray-100 rounded transition"
          >
            &gt;
          </button>
          <button
            @click="refresh"
            class="h-12 flex items-center justify-center text-[#013C61] font-medium text-lg hover:bg-gray-100 rounded transition"
          >
            ⟲
          </button>
        </div>

        <!-- Number Keypad -->
        <div class="grid grid-cols-4 gap-3 mb-4">
          <button
            v-for="btn in keypadButtons"
            :key="btn"
            @click="handleKeypad(btn)"
            class="h-12 flex items-center justify-center text-[#013C61] font-medium text-lg hover:bg-gray-100 rounded transition"
            :class="{
              'bg-[#2BDA53]/20': btn === '*' || btn === '#' || btn === '0',
            }"
          >
            {{ btn }}
          </button>
        </div>

        <!-- Query Button -->
        <button
          @click="query"
          class="w-full h-12 border-2 border-[#013C61] text-[#013C61] font-medium rounded mb-3 hover:bg-[#013C61] hover:text-white transition"
        >
          Query
        </button>

        <!-- Generate Button -->
        <button
          @click="generate"
          class="w-full h-12 bg-[#2BDA53] text-white font-medium rounded hover:bg-[#25c248] transition shadow-md"
        >
          Generate
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-radio {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #4ade80;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
}

.custom-radio:checked {
  border-color: #2bda53;
}

.custom-radio:checked::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background: #2bda53;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
