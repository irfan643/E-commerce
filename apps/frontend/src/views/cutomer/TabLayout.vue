<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>  
      <ion-tab-bar slot="bottom">
         <ion-tab-button tab="home" href="/home">
  <ion-icon aria-hidden="true" :icon="home" />
  <ion-label>Home</ion-label>
</ion-tab-button>

<ion-tab-button tab="order" href="/order">
  <ion-icon aria-hidden="true" :icon="reader" />
  <ion-label>Order</ion-label>
</ion-tab-button>

<ion-tab-button tab="cart" href="/cart">
  <ion-icon aria-hidden="true" :icon="cart" />
  <ion-label>Cart</ion-label>
</ion-tab-button>

<ion-tab-button tab="profile" href="/profile">
  <ion-icon aria-hidden="true" :icon="person" />
  <ion-label>Profile</ion-label>
</ion-tab-button>


        
      </ion-tab-bar>  
    
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { person, cart, home,reader } from 'ionicons/icons';

</script>
