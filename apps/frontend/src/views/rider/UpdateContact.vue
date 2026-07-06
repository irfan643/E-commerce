<template>
    <IonPage>
    <IonHeader class="ion-no-border ">
        <IonToolbar>
           
        
        
        <IonTitle class="ion-text-center font-semibold  capitalize text_color ">update {{type}}</IonTitle>
            <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
<div class=" flex flex-col gap-6">
    <div class="  w-full bg-[#F2F0F5] border-2 border-gray-300 rounded-xl px-3 transition focus-within:border-[#6030ff]  focus-within:scale-105 ">
         <IonInput
       :type="type === 'email' ? 'email' : 'tel'"
  :placeholder="type === 'email' ? 'Enter your email' : '+xxxxxxxxxxxx'"
  class="input_style no-highlight"

      />
      </div>
         <IonButton expand="block"  color="tertiary"  
             class="btn font-bold  capitalize"
              
              >sendOTP</IonButton>
</div>
<div class=" mt-9 flex flex-col gap-6">

    <div class="  w-full bg-[#F2F0F5] border-2 border-gray-300 rounded-xl px-3 transition focus-within:border-[#6030ff]  focus-within:scale-105 ">
          
        <IonInput
       type="number"
       placeholder="Enter OTP Code"
       class="input_style  no-highlight "

      />
      </div>
         <IonButton expand="block"  color="tertiary"  
             class="btn font-bold  capitalize"
              
              >Verfiy OTP</IonButton>
</div>



   
    </IonContent>
      </IonPage>
    </template>

    <script setup lang="ts">
 import { ref,computed } from 'vue';
      import { useRoute } from 'vue-router';
      
      
       const routes=useRoute();
    
             const type = computed(() => routes.params.type  || "");
   


              
             
import { IonBackButton,IonButtons, IonButton,IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

</script>
<style>
</style>