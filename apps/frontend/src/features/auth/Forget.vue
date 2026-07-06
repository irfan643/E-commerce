<template>
  <IonPage>
     
        <IonHeader class="  ion-no-border">
      <IonToolbar>
         <div class=" flex justify-between items-center ">
<IonIcon 
            :icon=" arrowBackOutline" 
            class="text-2xl cursor-pointer pl-2.5 " 
            @click=" goBack" 
            
          />
 <div class="absolute left-1/2 transform -translate-x-1/2 text-lg capitalize font-Manrope font-semibold front-black">
             Forget password
          </div>           
         </div>
       


      </IonToolbar>

    </IonHeader>
    
    <IonContent class="ion-padding">
       <div class="flex flex-col gap-6 justify-center  ">
        <div  >
            <div class="font-semibold my-6 text-2xl">Reset your password</div>  
              <p class=" text-gray-500 ">Enter the email associated with your account and we'll send  an email with instructions to reset your password.</p>
       </div>
        <div
          class="  w-full  border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff]  focus-within:scale-105">

          <IonInput type="email" placeholder="Email" v-model="email"  class="  no-highlight"/>
        </div>
      <IonButton expand="block" @click="sendReset" color="tertiary"   class="btn font-bold  capitalize">Send Reset Instructions</IonButton>
       </div>
        
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton, IonHeader, IonTabBar, IonTitle, IonToolbar, IonIcon } from '@ionic/vue'
import { ref } from 'vue'
import { useToast } from '@/composable/useToast'
 import { useRouter } from 'vue-router'
 import {arrowBackOutline} from 'ionicons/icons'
 const router =useRouter ();
const {showToast} =useToast()
const email = ref('')

function sendReset() {
  if (!email.value ) {
     showToast("⚠️ please enter email", "error", "bottom", "short");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
     showToast("⚠️ Enter a valid email address", "error", "bottom", "short");
    return;
  }

   

  showToast("✅  successful!", "success", "bottom", "short");
  setTimeout (()=>{
    router.push('/SetPassword')
   }, 1200)
}
 
  const goBack = () => {
  router.back();
  }


</script>
