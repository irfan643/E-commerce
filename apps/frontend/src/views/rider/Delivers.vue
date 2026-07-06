<template>
  <IonPage>
    <IonHeader class="shadow-none ion-no-border border-b-1 border-[#634F96]">
      <IonToolbar>
        <div class="flex pt-2">
           <IonButtons slot="start">
                <IonButton>
            <ion-icon aria-hidden="true" :icon="menuOutline" slot="icon-only" class="size-6" />

                </IonButton>
            </IonButtons>
        <IonTitle
          class="ion-text-capitalize shadow-none text_color ion-text-center   font-bold"
        >
          deliveries
         
        </IonTitle>
         
          </div>
        <div class="mt-2">
          <!-- set default value to 'Active' -->
          <IonSegment v-model="selected"   class="w-50 ion-no-padding">
            <IonSegmentButton
              value="Active"
              class="mt-2 size-4"
              content-id="Active"
              style="--indicator-color:#E5E8EB; --indicator-height:4px; --color-checked:#634F96"
            >
              <IonLabel class="capitalize font-bold">Ative</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton
              value="History"
              content-id="History"
              class="mt-2 size-4"
             Style= " --indicator-color: #E5E8EB ; --indicator-height: 4px; --color-checked: #634F96 "  
            >
              <IonLabel class="capitalize font-bold">History</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-no-padding">
      
        <!-- must match the content-id -->
         <IonSegmentView>
           <IonSegmentContent id="Active">
                       
        <IonList lines="none">
          <IonItem lines="none" button @click="goto(1254)" >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>

           <IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem><IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>
            <IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem><IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>
            <!-- repeat items if needed -->
          </IonList>
        
           </IonSegmentContent>
            <IonSegmentContent id="History">
                       
        <IonList lines="none">
        
        <IonItem lines="none" button @click="goto(445466564)"  >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>   <IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>   <IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>   <IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>   <IonItem lines="none" button >
            <div class="flex gap-3">
             
              <div class="size-10 rounded-lg border-1   items-center justify-center  flex bg-gray-200  border-gray-300">
                         <IonIcon aria-hidden="true" :icon=" box"  class="size-8" />                    
              </div>
              <IonLabel class="ion-align-content-center">
                <h2 class="text_color capitalize   !text-[17px]">
                  Sara Johson
                </h2>
                <p class="p_color">123 Elm  Street Anytown </p>
              </IonLabel>
            </div>
            <div slot="end" class="p_color">
              15 min
            </div>

            </IonItem>

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
import box from "@/assets/icon/box.svg"
import { formatCurrency } from "@/utils/id";
import { useRouter,useRoute } from "vue-router";
  import { ref,watch } from "vue";
import { menuOutline, search } from "ionicons/icons";
import { Style } from "@capacitor/status-bar";
import { Icon } from "ionicons/dist/types/components/icon/icon";
   const  selected =ref("Active")
   const route = useRoute();
    watch(selected, (newValue, oldValue) => {
  console.log(`Segment changed from ${oldValue} → ${newValue}`);
});
   watch(()=>route.path,
   (newPath)=>{
    if (newPath === "/Orders")
     {
      selected.value ="Active"
     }
   }
  )   
const router =useRouter();
function goto(id: number) {
  if (selected.value === "Active") {
    // Navigate to Active detail route
    router.push(`/OrderDetails/${id}`);
  } else if (selected.value === "History") {
    // Navigate to History detail route
    router.push(`/DeliveryInfo/${id}`);
  }
}

</script>

<style scoped>
h1 {
  font-size: 24px;
  color: var(--ion-color-primary);
}
h2 {
  font-size: 24px;
  color:black;
    font-weight: bold;
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
