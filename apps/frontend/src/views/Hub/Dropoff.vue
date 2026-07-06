<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle class="!text-center font-bold text_color">Drop-off Metrics</IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">
      <!-- Overall Drop-off Performance -->
      <IonLabel class="!font-bold !text-lg !mb-2 block">
        Overall Drop-off Performance
      </IonLabel>
      <IonGrid>
        <IonRow class="pb-4 my-4 ">
          <IonCol size=" 6  " class="pr-1">
            <div class="bg-gray-100 h-40 rounded-lg p-4">
              <p class="text-lg ">Total Packages Dropped</p>
              <p class="text-2xl pt-3.5 !font-bold">1,250</p>
            </div>
          </IonCol>
          <IonCol size="6" class="pl-1">
            <div class="bg-gray-100 h-40 rounded-xl p-4">
              <p class="!text-lg">Average Drop-off Time</p>
              <p class="!text-2xl !font-bold pt-4">3 min 15 sec</p>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <div class="bg-gray-100 rounded-lg p-4">
              <p class="text-lg mb-3 font-md">Peak Drop-off Hours</p>
              <p class="!text-xl !font-bold">2 PM – 4 PM</p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <!-- Drop-offs by Driver -->
      <IonLabel class="!font-bold !text-2xl my-5 block">
        Drop-offs by Driver
      </IonLabel>
      <div class="bg-white rounded-xl border-[1px] flex flex-col gap-3.5  border-gray-300 p-4 shadow-sm">
        <p class="!text-xl font-medium text_color">Packages Dropped</p>
        <p class="!text-3xl !font-bold">1250</p>
        <p class="!text-lg text-purple-600">Last 7 Days</p>
        <ApexChart
          type="bar"
          height="250"
          :options="driverChartOptions"
          :series="driverChartSeries"
        />
      </div>

      <!-- Drop-offs by Package Type -->
      <IonLabel class="!font-bold !text-xl my-5 block">
        Drop-offs by Package Type
      </IonLabel>
      <div class="bg-white flex flex-col gap-2  rounded-xl pl-2 pt-2  shadow-lg border-2 border-gray-300">
        <p class="!text-xl font-semibold !text_color">Packages Dropped</p>
        <p class="!text-2xl !font-bold">1250</p>
        <p class="!text-sm text-purple-600">Last 7 Days</p>
        <ApexChart
          type="bar"
          height="250"
          :options="packageChartOptions"
          :series="packageChartSeries"
        />
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { grid } from "ionicons/icons";

import VueApexCharts from "vue3-apexcharts";
import type { ApexOptions } from "apexcharts";

const ApexChart = (VueApexCharts as unknown) as any

const driverChartSeries = [
  {
    name: "Packages Dropped",
    data: [90, 30, 40, 80,90],
  },
];

const driverChartOptions:ApexOptions = {
  chart: { type: "bar", toolbar: { show: false } },
  plotOptions: {
    bar: { 
      horizontal: true,  
      barHeight: "60%",   // 🔥 increases bar thickness
    },
  },
  xaxis: {
    categories: ["Ethan", "Liam", "Noah", "Oliver", "Elijah"],
    labels: { show: false },
    axisBorder: { show: false },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#7847EB",
        fontSize: "16px",  // 🔥 increase label size
        fontWeight: 600,   // bold
      },
    },
  },
  dataLabels: {
    enabled: false, // removes numbers inside the bar
  },
  grid: {
    show: false, // removes all grid lines
  },
  colors: ["#EDE8F2"],
};

// Package type vertical bar chart
const packageChartSeries = [
  {
    name: "Packages Dropped",
    data: [40, 35, 50, 45],
  },
];

const packageChartOptions:ApexOptions = {
  chart: { type: "bar", toolbar: { show: false } },
  plotOptions: {
    bar: { borderRadius: 0, columnWidth: "90%" },
  },
  dataLabels: {
    enabled: false, // 🚀 removes the label inside the bar
  },
   
  xaxis: {
    categories: ["Small", "Medium", "Large", "Extra Large"],
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: {
           // 🔥 increase category text size
            colors: "#7847EB",
            fontSize: "12px",  // 🔥 increase label size
        fontWeight: 600,    // optional: make it bold
      },}
},
     yaxis: {
    labels: { show: false },   // ❌ hides right-side numbers
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid:{
    show:false,
  },
   colors: ["#EDE8F2"],
};
</script>
