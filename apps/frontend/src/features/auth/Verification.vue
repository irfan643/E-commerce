<template>
  <IonPage>

    <div class="flex justify-center items-center">
      <IonToolbar class="ion-text-center font_black">

        <h1>Verification</h1>

      </IonToolbar>
    </div>

    <IonContent class="ion-padding ">
      <div class="grid gap-4 ">
        <div class=" text-[1.6rem]  font-Manrope font-semibold font_black">
          Enter the code
        </div>

        <div>
          <p class="text-[16px] text-gray-600
          ">
            We sent a verification code to your email.
            Please<br> enter it below to continue.
          </p>
        </div>
        <div>
          <ion-input-otp  class="custom"  :length="7" shape="soft" size="small">
             <a href="#">Resend the code</a>
          </ion-input-otp> 
         
          
        </div>
         <div  >
            <IonButton class=".no-highlight w-full  "   color="tertiary ">
                Verify
          </IonButton>
          </div>
      </div>




    </IonContent>

  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonInputOtp,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/vue";
import { ref } from "vue";
import { useToast } from "@/composable/useToast";
const { showToast } = useToast();
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");


const goBack = () => {
  router.back(); // navigate back in history stack
};
function login() {
  console.log("Logging in with:", email.value, password.value);
  if (!email.value || !password.value) {
    showToast("Email and password are required", "error");
    return;
  }
  showToast(`Logging in as ${email.value}...`, "success", "top");
}
</script>
 <style scoped>
  .custom {
    
    --height:55px;
    --color:  #121217;
  }
</style>