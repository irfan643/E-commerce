<template>
  <IonPage>
    <!-- Header -->
   
    
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <IonTitle class="text-xl ion-text-center font-bold text_color capitalize">packages</IonTitle>
      </IonToolbar>
    </IonHeader>
 
    <!-- Content -->
   <IonContent class="ion-padding ">
  <!-- Search -->
      
  <div
    class="group border border-transparent h-12 flex w-full rounded-xl overflow-hidden bg-[#EBE8F2] focus-within:border-gray-500 transition-colors duration-300"
  >
    <ion-searchbar
      placeholder="Search package"
      style="
        --background: #ebe8f2;
        --box-shadow: none;
        --placeholder-color: #634f96;
        --icon-color: #634f96;
      "
      class="p-0"
    ></ion-searchbar>
  </div>

  <!-- Section: Pending -->
  <div class="mt-4">
    <h2 class="text-lg font-bold text-[#140D1C] capitalize">
      pending drop-off
    </h2>
  </div>

  <IonList lines="none">
    <IonItem button class="m-0" @click="goto('1235')">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >Recipient: Alex Johnson</h3>
            <p >package ID: 123546789</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Pending</IonLabel>
        </div>
      </div>
    </IonItem>

    <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >Recipient: Sarah Williams</h3>
            <p  >package ID: 123456796765</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Pending</IonLabel>
        </div>
      </div>
    </IonItem>
  </IonList>

  <!-- Section: Dropped Off -->
  <div class="mt-4">
    <h2 class="text-lg font-bold text-[#140D1C] capitalize">dropped off</h2>
  </div>

  <IonList lines="none" class="ion-no-padding ion-no-margin">
    <IonItem button class="m-0">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3 >Recipient: Alex Johnson</h3>
            <p  >package ID: 123546789</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold text-green-600">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>

   
     <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >
              Recipient: John Smith
            </h3>
            <p  >package ID: 987654321</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>
     <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >
              Recipient: John Smith
            </h3>
            <p  >package ID: 987654321</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>
     <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >
              Recipient: John Smith
            </h3>
            <p  >package ID: 987654321</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>
     <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >
              Recipient: John Smith
            </h3>
            <p  >package ID: 987654321</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>
     <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >
              Recipient: John Smith
            </h3>
            <p  >package ID: 987654321</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>
     <IonItem button class="m-0 bg-[#FAF7FC]">
      <IonIcon :icon="cubeOutline" slot="start" class="text-[#140D1C]" />
      <div class="flex justify-center items-center w-full">
        <div class="flex-1">
          <IonLabel>
            <h3  >
              Recipient: John Smith
            </h3>
            <p  >package ID: 987654321</p>
          </IonLabel>
        </div>
        <div>
          <IonLabel class="pt-2 font-bold ">Dropped Off</IonLabel>
        </div>
      </div>
    </IonItem>

  </IonList>
      
     
<IonFab slot="fixed"    vertical="bottom" horizontal="end" >
          <IonFabButton  class="mb-2 mr-2" color="tertiary " style="--border-radius:10px ; --box-shadow:none "@click="goto()" >
                  <ion-icon :icon="barcodeOutline" class="text-white  !bg-transparent  " button ></ion-icon>

          </IonFabButton>
    </IonFab>
     
</IonContent>

    
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
 
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonRouterOutlet,
 
} from "@ionic/vue";
import {
 
  barcodeOutline,
  cubeOutline,
 
} from "ionicons/icons";
import { useRouter } from "vue-router";
const Router = useRouter()

const goto = (id?:string) => {
   if(id)
         Router.push({ name: 'dropoff-package-details',params: { id } })
else
  Router.push({ name: 'package-details' })

}

</script>
<style scoped>
ion-item {
  --padding-start: 0px;
  --padding-bottom: 15px;
  --padding-end: 0px;
  --inner-padding-end: 0px;
  --inner-padding-start: 0px;
}

ion-label {
  padding-left: 5px;
}

ion-icon {
  height: 32px;
  width: 32px;
  background-color: #ede8f2;
  padding: 10px;
  border-radius: 10px;
}
p{
  color: #734F96;
}

h2 {
  font-weight:600;
  color:#120D1C;
}

h3 {
  font-weight: 600;
  color: #120D1C;
}
</style>
