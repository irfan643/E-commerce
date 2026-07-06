<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border  shadow-none">
      <IonToolbar>
        <IonTitle class="ion-text-center  ion-no-border text_color font-semibold">Earnings</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Top Stats Section -->
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <div class="stat-box mr-3 mb-2.5">
              <h4>Total Sales</h4>
              <h2  >$1,250</h2>
            </div>
          </IonCol>
          <IonCol size="6">
            <div class="stat-box">
              <h4>Total Revenue</h4>
              <h2>$1,125</h2>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <div class="stat-box">
              <h4>Payouts</h4>
              <h2>$1,000</h2>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <!-- Earnings Over Time Section -->
      <div class="mt-6">
        <h3 class="!font-bold !text-lg  !mb-6">Earnings Over Time</h3>
        <div class="mb-4">
          <p class="text-md">Revenue</p>
          <h2 class="text-2xl font-bold">$1,125</h2>
          <p class="text-sm text-gray-500">
            Last 30 Days <span class="text-green-600">+15%</span>
          </p>
        </div>

        <!-- ApexChart -->
        <ApexChart
          type="line"
          height="350"
          :options="chartOptions"
          :series="chartSeries"
        />
      </div>

      <!-- Transaction History -->
      <div class="mt-6">
        <h3 class="font-bold text-lg mb-2">Transaction History</h3>
        <IonList>
          <div class="transaction">
            <div   @click=" goto(122)" >
              <p>Product A</p>
              <small class="text-gray-500">Order #12345</small>
            </div>
            <span class="text-green-600">+$50</span>
          </div>
          <div class="transaction">
            <div   @click=" goto(122)">
              <p>Product B</p>
              <small class="text-gray-500">Order #67890</small>
            </div>
            <span class="text-green-600">+$75</span>
          </div>
          <div class="transaction">
            <div>
              <p>Bank Transfer</p>
              <small class="text-gray-500">Payout</small>
            </div>
            <span class="text-red-600">- $100</span>
          </div>
        </IonList>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList
} from "@ionic/vue";
import { flag } from "ionicons/icons";
import { ref } from "vue";
import { useRouter } from "vue-router";
const route=useRouter();
function goto (id: number)
{
  route.push(`/Transaction/${id}`)
}
  import VueApexCharts  from "vue3-apexcharts";

const ApexChart = (VueApexCharts as unknown) as any

  
// Chart Data
const earningsData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 200) + 50);
const expensesData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 150) + 30);
const profitData = earningsData.map((val, i) => val - expensesData[i]);

// Multiple series
const chartSeries = ref([
  { name: "Earnings", data: earningsData },
  { name: "Expenses", data: expensesData },
  { name: "Profit", data: profitData }
]);

// X-axis week categories
const xCategories = Array.from({ length: 30 }, (_, i) => {
  const week = Math.floor(i / 7) + 1;
  return (i + 1 === 1 || i + 1 === 8 || i + 1 === 15 || i + 1 === 22 || i + 1 === 29)
    ? `${week}W`
    : "";
});

// Chart Options
const chartOptions = ref({
  chart: {
    type: "line",
    background: "transparent",
    toolbar: { show: false },
      zoom: {
    enabled: false // disables zoom in/out
  }

  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  grid: { show: false },
  xaxis: {
    categories: xCategories,
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#6B7280" } 
  
  },
     
  },
  legend: { show: false },

  
  yaxis: { show: false },
  tooltip: { enabled: true },
  colors: ["#10B981", "#3B82F6", "#F59E0B"] // Tailwind: emerald, blue, amber
});
</script>

<style scoped>

.stat-box {
  background: #f6f5f9;
  border-radius: 8px;
  padding: 12px;
   
  
 
}
.stat-box h4 {
  font-size: 1rem;
  font-weight: 500;
  color: #555; /* lighter subtitle */
  margin: 0 0 4px 0;
}
h3 {
  font-size: 1.5rem;
  font-weight: 600;
 /* lighter subtitle */
  margin: 0 0 6px 0;
}

.transaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
.transaction:last-child {
  border-bottom: none;
}
</style>
