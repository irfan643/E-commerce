<template>
  <IonPage>
    <IonTabs >
      <IonRouterOutlet></IonRouterOutlet>

      <IonTabBar slot="bottom"  class=" h-16 ">
        <!-- Product Management -->
        <IonTabButton tab="PorductMangement" href="/PorductMangement"
             @click= "setactivetabe('PorductMangement')"
               class="active_color"
            
             >
               
            <img  :src= "activeTab==='PorductMangement' ? Ativeorder:InAtiveorder" 
            alt="order"
             class="size-6" ></img>
            <IonLabel> Porduc<br></br>Mangement </IonLabel>
           

        </IonTabButton>

        <!-- Orders -->
        <IonTabButton tab="orders" href="/Orders"
         class="active_color  "     
        
          
           @click= "setactivetabe('orders')"
            >
               
            <img  :src= "activeTab==='orders' ? unselectmessage:message " 
            alt="order"
             class="size-6" ></img>
            <IonLabel> order </IonLabel>
        </IonTabButton>

        <!-- Earnings -->
        <IonTabButton tab="Earnings" href="/Earings"
         class="active_color"
        @click= "setactivetabe('Earing')"
            >
               
            <img  :src= "activeTab==='Earing' ?  selectdollor : dollor "    alt="dollor" class="size-6" ></img>
         
          <IonLabel>Earning</IonLabel>
        </IonTabButton>

        <!-- Profile -->
        <IonTabButton tab="Profile" href="/Profile"
         class="active_color  "
          @click= "setactivetabe('Profile')"
        >
          <IonIcon aria-hidden="true" :icon="activeTab==='profile'?unactiveperson: person" class="active_color  size-6 "
        />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
 import Ativeorder from "@/assets/icon/order.svg"
 import InAtiveorder from "@/assets/icon/unselected_block.svg"
 import dollor from "@/assets/icon/dollor.svg"
 import message from"@/assets/icon/unselect_message.svg"
 import unselectmessage from "@/assets/icon/message1.svg"
 import selectdollor from "@/assets/icon/selectd_dollor.svg"
 import unactiveperson from "@/assets/icon/person.svg"
 import { person } from "ionicons/icons";
 
 import { ref } from "vue";
    const activeTab = ref(localStorage.getItem("activeTab"));

  function setactivetabe(tabname:string)
  {

    activeTab.value =tabname
    localStorage.setItem("activeTab",tabname)
  }
   
import { pricetag, reader, wallet, personCircle, open } from "ionicons/icons";
</script>
<style scoped>
   
.active_color{
  --color-selected:#120D1C;
  --color:#7847EB;
 
       
}
</style>