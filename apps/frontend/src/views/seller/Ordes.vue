<template>
  <IonPage>
    <IonHeader class="shadow-none ion-no-border border-b-1 border-[#634F96]">
      <IonToolbar>
        <div class="flex pt-2">
        <IonTitle
          class="ion-text-capitalize shadow-none text_color ion-text-center font-Manrope font-bold"
        >
          order
         
        </IonTitle>
          <IonButtons slot="end">
                <IonButton>
            <ion-icon aria-hidden="true" :icon="search" slot="icon-only" class="size-6" />

                </IonButton>
            </IonButtons>
          </div>
        <div class="mt-2">
          <!-- set default value to 'incoming' -->
          <IonSegment   class="w-50 ion-no-padding">
            <IonSegmentButton
              value="incoming"
              class="mt-2 size-4"
              content-id="incoming"
              style="--indicator-color:#E5E8EB; --indicator-height:4px; --color-checked:#634F96"
            >
              <IonLabel class="capitalize font-bold">Incoming</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton
              value="past"
              content-id="past"
              class="mt-2 size-4"
             Style= " --indicator-color: #E5E8EB ; --indicator-height: 4px; --color-checked: #634F96 "  
            >
              <IonLabel class="capitalize font-bold">Past</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-no-padding">
      
        <!-- must match the content-id -->
         <IonSegmentView>
           <IonSegmentContent id="incoming">
                       
        <IonList lines="none">
          <IonItem lines="none" button @click="goto(452154)">
            <div class="flex gap-3">
              <img
                src="../../../public/image/night_suite.png"
                class="size-16 rounded-lg border-1 border-gray-300"
                alt="soap"
              />
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize font-Manrope !text-[17px]">
                  handmade soap
                </h2>
                <p class="p_color">In Stock:50</p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              {{ formatCurrency(12) }}
            </div>

            </IonItem>

             <IonItem lines="none" button @click="goto(452154)">
            <div class="flex gap-3">
              <img
                src="../../../public/image/night_suite.png"
                class="size-16 rounded-lg border-1 border-gray-300"
                alt="soap"
              />
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize font-Manrope !text-[17px]">
                  handmade soap
                </h2>
                <p class="p_color">In Stock:50</p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              {{ formatCurrency(12) }}
            </div>

            </IonItem>
            <!-- repeat items if needed -->
          </IonList>
        
           </IonSegmentContent>
            <IonSegmentContent id="past">
                       
        <IonList lines="none">
          <IonItem lines="none" button @click='move("/CustomerInfo")'>
            <div class="flex gap-3">
              <img
                src="../../../public/image/night_suite.png"
                class="size-16 rounded-lg border-1 border-gray-300"
                alt="soap"
              />
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize font-Manrope !text-[17px]">
                  handmade soap
                </h2>
                <p class="p_color">In Stock:50</p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              {{ formatCurrency(12) }}
            </div>

            </IonItem>

             <IonItem lines="none" button @click='move("/CustomerInfo")'>
            <div class="flex gap-3">
              <img
                src="../../../public/image/night_suite.png"
                class="size-16 rounded-lg border-1 border-gray-300"
                alt="soap"
              />
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize font-Manrope !text-[17px]">
                  handmade soap
                </h2>
                <p class="p_color">In Stock:50</p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              {{ formatCurrency(12) }}
            </div>

            </IonItem>
            <!-- repeat items if needed -->
          </IonList>
        
           </IonSegmentContent>
         </IonSegmentView>
              

    
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
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSegmentView,
  IonSegmentContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
} from "@ionic/vue";
import { formatCurrency } from "@/utils/id";
import { useRouter,useRoute } from "vue-router";
  import { ref,watch } from "vue";
import { search } from "ionicons/icons";
import { Style } from "@capacitor/status-bar";
   const  selected =ref("incoming")
   const route = useRoute();
   watch (selected,(newvalue,oldvalue)=>{
       console.log(` ${oldvalue} and new value ${newvalue}` )
   })
   watch(()=>route.path,
   (newPath)=>{
    if (newPath === "/Orders")
     {
      selected.value ="incoming"
     }
   }
  )   
const router =useRouter();
function goto(id:number){
selected.value = "incoming";
  router.push(`/OrderInfo/+${id}`)
  
}

function  move(rute :string)
{
  router.push(rute)
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  color: var(--ion-color-primary);
}
ion-segment-button {
  --padding-start: 0px;
  --padding-end: 0px;
  --padding-top: 0px;
  --padding-bottom: 0px;
}
ion-item {
  padding-top: 12px;
  --padding-start: 10px;
}
</style>
