<template>
  <IonPage>
    <IonHeader  class="ion-no-border  ">
      <IonToolbar class=" ion-text-center text_color">
        <IonTitle class=" font-semibold font-Manrope">Dashboard</IonTitle>
        <IonButtons slot="end" >
         <IonButton  shape="round"  @Click="goto()">
          <IonIcon :Icon=" settingsOutline" slot="icon-only"  class="size-6" />
         </IonButton>
        </IonButtons >
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
       <IonLabel class="capitalize text-xl font-bold text_color">
             available Orders
       </IonLabel>
<IonList class=" ion-no-paddingion-no-margin ion-no-border">
    <div class="flex  mb-8 align-middle   bg-pink-900d items-center  justify-between ">
    <div  class=" flex-1  ">
      <p >12.00 pm</p>
      <h4 class=" !mt-0"> Pick up from The Daily Grind</h4>
      <p>123 Main St, Anytown</p>
      <IonButton  style="--background:#EDE8F2 ;  "   class="text-[#140D1C] mt-3.5 ion-shadow-none btn  font-Manrope font-semibold  "  >
       Accept
      </IonButton>
    </div>
    <div class=" w-29    max-h-32   border-1 border-gray-200  rounded-xl overflow-hidden  "  >
       <img src="../../../public/image/night_suite.png" alt="hgf"  class="w-full  h-full object-center"  >

          </img>
    </div>
         
    </div>
     <div class="flex   mb-8 align-middle  bg-pink-900d items-center justify-between ">
    <div  class=" flex-1 ">
      <p  class="capitalize">12.00 pm</p>
      <h4 class=" !mt-0"> Pick up from The Daily Grind</h4>
      <p>123 Main St, Anytown</p>
      <IonButton  style="--background:#EDE8F2 ;  "   class="text-[#140D1C] mt-3.5 ion-shadow-none btn  font-Manrope font-semibold  "  >
       Accept
      </IonButton>
    </div>
    <div class=" w-29    max-h-32  border-1 border-gray-200  rounded-xl overflow-hidden  "  >
       <img src="../../../public/image/night_suite.png" alt="hgf"  class="w-full  h-full object-center"  >

          </img>
    </div>
         
    </div>
</IonList>
<div class=" mt-2.5">

  <IonLabel class="capitalize text-xl    font-bold text_color">
       upcoming Deliverise
  </IonLabel>
</div>
<IonList class=" ion-no-paddingion-no-margin  ion-no-border">
    <div class="flex  mb-8 mt-4 align-middle   bg-pink-900d items-center  justify-between ">
    <div  class=" flex-1  ">
      <p >12.00 pm</p>
      <h4 class=" !mt-0"> Pick up from The Daily Grind</h4>
      <p>123 Main St, Anytown</p>
      <IonButton  style="--background:#EDE8F2 ;  "   class="text-[#140D1C] mt-3.5 ion-shadow-none btn  font-Manrope font-semibold  "  >
       Accept
      </IonButton>
    </div>
    <div class=" w-29    max-h-32   border-1 border-gray-200  rounded-xl overflow-hidden  "  >
       <img src="../../../public/image/night_suite.png" alt="hgf"  class="w-full  h-full object-center"  >

          </img>
    </div>
         
    </div>
     <div class="flex   mb-8 align-middle  bg-pink-900d items-center justify-between ">
    <div  class=" flex-1 ">
      <p  class="capitalize">12.00 pm</p>
      <h4 class=" !mt-0"> Pick up from The Daily Grind</h4>
      <p>123 Main St, Anytown</p>
      <IonButton  style="--background:#EDE8F2 ;  "   class="text-[#140D1C] mt-3.5 ion-shadow-none btn  font-Manrope font-semibold  "  >
       Accept
      </IonButton>
    </div>
    <div class=" w-29    max-h-32  border-1 border-gray-200  rounded-xl overflow-hidden  "  >
       <img src="../../../public/image/night_suite.png" alt="hgf"  class="w-full  h-full object-center"  >

          </img>
    </div>
         
    </div>
</IonList>
    <div class="my-6">
      <IonLabel class="capitalize text_color font-semibold  text-3xl ">
        Quick  Status
      </IonLabel>
    </div>
      <div class="flex  gap-6">
    <IonCard class="flex-1 border-2 py-5 border-gray-300 rounded-2xl  flex  pl-4  ion-align-items-center min-h-28 shadow-none">
    <IonCardHeader>
      <IonCardSubtitle class="  mb-1.5  text_color text-xl">Daily Earning</IonCardSubtitle>
      <IonCardTitle class="font-extrabold ">$55.20</IonCardTitle>
    </IonCardHeader>
  
    
  </IonCard>
          
    <IonCard class="flex-1 border-2 py-5 border-gray-300 rounded-2xl  flex  pl-4  ion-align-items-center min-h-28 shadow-none">
    <IonCardHeader>
      <IonCardSubtitle class="  mb-3.5  text_color text-xl capitalize ">completetd Deliveries</IonCardSubtitle>
      <IonCardTitle class="font-extrabold ">55</IonCardTitle>
    </IonCardHeader>
  
    
  </IonCard>
      </div>

     
      </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonCardTitle,IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonLabel, IonList, IonImg, IonCard, IonCardSubtitle, IonCardHeader } from '@ionic/vue'
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { settings, settingsOutline } from 'ionicons/icons';
    import { useRouter } from 'vue-router';

  const router=useRouter();
const goto = () => {
  router.push("/Setting");

  // Remove focus from any button to prevent aria-hidden warning
  const active = document.activeElement as HTMLElement;
  if (active) active.blur();

  console.log("Navigating to settings page...");
};
</script>
<style>
    
   p{
    color:var(--primary-color) ;
    
   }
   ion-button{
    --box-shadow:none
   }
</style>
