 <template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>  
      <ion-tab-bar slot="bottom">
         <ion-tab-button tab="dashborad" href="/RiderDashborad">
  <ion-icon aria-hidden="true" :icon="home" />
  <ion-label>dashborad</ion-label>
</ion-tab-button>

<ion-tab-button tab="deliverd" href="/Deliver">
  <ion-icon aria-hidden="true" :icon="car" />
  <ion-label>deliverd</ion-label>
</ion-tab-button>

<ion-tab-button tab="earing" href="/RiderEaring">
  <ion-icon aria-hidden="true" :icon="pricetag" />
  <ion-label>Earing</ion-label>
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
import { person, cart, home,reader, car, pricetag } from 'ionicons/icons';

</script> 
