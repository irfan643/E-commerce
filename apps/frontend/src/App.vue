<template>

  <ion-app>
      
    <ion-router-outlet />
     <CustomToast />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import CustomToast from "./components/CustomToast.vue";
</script>
