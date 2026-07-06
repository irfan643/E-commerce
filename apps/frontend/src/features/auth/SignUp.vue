<template>
  <IonPage>

    <IonHeader class="ion-no-border">
      <IonToolbar>
        <div class="flex justify-between items-center">
          <ion-icon :icon="arrowBackOutline" class="text-2xl cursor-pointer pl-2.5" />
          <div
            class="absolute left-1/2 transform -translate-x-1/2 text-lg capitalize font-Manrope font-semibold text-black">
            Sign up
          </div>
        </div>
      </IonToolbar>
    </IonHeader>


    <IonContent fullscreen class="ion-padding">
      <div class=" flex flex-col justify-center  align-middle">
        <div class=" gap-6 grid ">
          <div
            class="  w-full  border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff]  ">

            <IonInput type="email" placeholder="Email" v-model="email" class="  no-highlight" />
          </div>
          <div
            class="  w-full  border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff]  ">


            <IonInput placeholder="Password" type="password" v-model="password" class="no-highlight">
              <IonInputPasswordToggle color="tertiary" slot="end"></IonInputPasswordToggle>
            </IonInput>

          </div>
          <div
            class="  w-full  border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff] ">


            <IonInput placeholder="Confirm Password" type="password" v-model="confirm" class="  no-highlight">
              <IonInputPasswordToggle color="tertiary" slot="end"></IonInputPasswordToggle>

            </IonInput>

          </div>
          <IonButton expand="block" @click="signup" color="tertiary" class="btn">Sign Up</IonButton>
        </div>


        <div class="ion-text-center ion-margin-top text-gray-500">
          Already have an account? <router-link to="/login"><span class="text-gray-500">Login </span></router-link>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton, IonInputPasswordToggle, IonHeader, IonToolbar, IonIcon } from '@ionic/vue'
import { ref } from 'vue'
import { useToast } from '@/composable/useToast'
const { showToast } = useToast()
import { arrowBackOutline, } from 'ionicons/icons'

import { useRouter } from 'vue-router'
const route = useRouter()
const email = ref('')
const password = ref('')
const confirm = ref('')

async function signup() {
  if (!email.value || !password.value || !confirm.value) {
    await showToast("⚠️ All fields must be completed", "error", "bottom", "short");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    await showToast("⚠️ Enter a valid email address", "error", "bottom", "short");
    return;
  }

  if (password.value !== confirm.value) {
    await showToast("⚠️ Passwords do not match", "error", "bottom", "short");
    return;
  }

  await showToast("✅ Signup successful!", "success", "bottom", "short");
  setTimeout(() => {
    route.push("/Verification")
  }, 4000);
}

</script>
