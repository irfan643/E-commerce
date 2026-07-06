<template>
  <IonPage>
    <IonHeader class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle class="ion-text-center text_color text-xl font-semibold">Earnings</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Segmented control -->
       <div class="   bg-[#EDE8F2]   rounded-lg border-1 border-gray-300 ">

         <IonSegment v-model="selectedRange">
          
           <IonSegmentButton value="daily">
             <IonLabel>Daily</IonLabel>
           </IonSegmentButton>
           <IonSegmentButton value="weekly">
             <IonLabel>Weekly</IonLabel>
           </IonSegmentButton>
           <IonSegmentButton value="monthly">
             <IonLabel>Monthly</IonLabel>
           </IonSegmentButton>
         </IonSegment>
       </div>

      <!-- Total Earnings -->
      <IonCard class="shadow-none py-2 my-4 rounded-xl bg-[#EDE8F2]">
        <IonCardContent>
          <h2>Total Earnings</h2>
          <h1 class="text_color pt-1.5">${{ totalEarnings }}</h1>
        </IonCardContent>
      </IonCard>

      <!-- Range Earnings + Chart -->
       
      <IonCard class="shadow-none  ion-no-padding ion-no-margin    ">
        <IonCardContent class=" !px-0">
          <h2>{{ selectedRangeLabel }} Earnings</h2>
          <h1>${{ rangeEarnings }}</h1>
          <p class="text-success">This {{ selectedRangeLabel }} +15%</p>

          <!-- Apex Chart -->
         <div >
           <apexchart
            type="line"
            height="200"
            width="100%"
            :options="chartOptions"
            :series="chartSeries"
          />
         </div>
         
        </IonCardContent>
      </IonCard>

      <!-- Payout History -->
      <h3>Payout History</h3>
      <IonList lines="none">
        <IonItem v-for="(payout, i) in payouts" :key="i">
          <IonLabel >
            <h2 class="!text-lg !font-bold" >${{ payout.amount }}</h2>
            <p>Delivery #{{ payout.id }}</p>
          </IonLabel>
          <IonNote slot="end" class="font-bold">{{ payout.date }}</IonNote>
        </IonItem>
      </IonList>
    </IonContent>

    <!-- Footer Tabs -->
    <IonFooter>
      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/dashboard">
          <IonIcon name="home-outline" />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="deliveries" href="/deliveries">
          <IonIcon name="car-outline" />
          <IonLabel>Deliveries</IonLabel>
        </IonTabButton>
        <IonTabButton tab="earnings" href="/earnings">
          <IonIcon name="cash-outline" />
          <IonLabel>Earnings</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon name="person-outline" />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonFooter>
  </IonPage>
</template>
<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonSegment, IonSegmentButton, IonLabel, IonCard, IonCardContent,
  IonList, IonItem, IonNote, IonFooter, IonTabBar, IonTabButton, IonIcon
} from '@ionic/vue';
import VueApexCharts from "vue3-apexcharts";
import { ref, computed, watch } from 'vue';
import { ApexOptions } from 'apexcharts';

// Register ApexChart
const apexChart = (VueApexCharts as unknown) as any;

// Segment state
const selectedRange = ref("weekly");

// Earnings data
const totalEarnings = ref(3200);

// Example datasets
const datasets = {
  daily: {
    earnings: 120,
    categories: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    series: [20, 30, 25, 40, 15, 35]
  },
  weekly: {
    earnings: 1250,
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [150, 200, 170, 220, 300, 250, 280]
  },
  monthly: {
    earnings: 3200,
    categories: ["W1", "W2", "W3", "W4"],
    series: [800, 750, 900, 750]
  }
};

// Dynamic label
const selectedRangeLabel = computed(() => {
  if (selectedRange.value === "daily") return "Daily";
  if (selectedRange.value === "monthly") return "Monthly";
  return "Weekly";
});

// Reactive chart options
const chartOptions = ref({
  chart: {
    type: "line",
    background: "transparent",
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  grid: { show: false },
  xaxis: {
    categories: datasets.weekly.categories,
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: { style: { colors: "#6B7280" } }
  },
  legend: { show: false },
  yaxis: { show: false },
  tooltip: { enabled: true },
  colors: ["#10B981", "#3B82F6", "#F59E0B"]
});

// Reactive series
const chartSeries = ref([
  { name: "Earnings", data: datasets.weekly.series }
]);

// Reactive earnings
const rangeEarnings = ref(datasets.weekly.earnings);

// Watch segment change → update chart + earnings
watch(selectedRange, (val) => {
  const data = datasets[val as keyof typeof datasets];
  chartOptions.value = {
    ...chartOptions.value,
    xaxis: {
      ...chartOptions.value.xaxis,
      categories: data.categories
    }
  };
  chartSeries.value = [{ name: "Earnings", data: data.series }];
  rangeEarnings.value = data.earnings;
});

// Payout History
const payouts = ref([
  { amount: 50, id: 12345, date: "Today" },
  { amount: 45, id: 12344, date: "Yesterday" },
  { amount: 60, id: 12343, date: "2 days ago" }
]);
</script>
<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
h2 {
  font-size: 1rem ;
  color: #666;
}
.text-success {
  color: green;
}
ion-segment-button{
   --color:#7847EB;
  --color-checked: white;
  --background-checked: pink;
  --border-radius: 100%;

  /* Disable black flash */
  --background-activated: transparent;
  --background-activated-opacity: 0;
  --color-checked: gray;
  --background-checked: white;
  --border-radius: 10px;
      --indicator-color: transparent;
  --indicator-height: 0;
  --indicator-box-shadow: none;
  --ripple-color: transparent !important;
  min-height: 40px;
text-transform: capitalize;}
p{
  color:var(--primary-color)
}
</style>
