<template>
  <IonPage>
    <IonContent class="ion-padding  ">

      <div class=" flex justify-center text-black  ">
              <h2 >Reset Password</h2>

      </div>

      <div class="grid gap-4 my-6">
        <div
          class="w-full border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff]"
        >
          <IonInput
            placeholder="New Password"
            type="password"
            class="no-highlight"
            v-model="password"
          />
        </div>
        <div
          class="w-full border-2 border-gray-300 bg-[#F2F0F5] rounded-xl px-3 transition focus-within:border-[#6030ff]"
        >
          <IonInput
            placeholder="Confirm Password"
            type="password"
            class="no-highlight "
            v-model="confirm"
          />
        </div>
      </div>

      <IonButton expand="block" class="btn" color="tertiary" @click="reset">Reset Password</IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton } from "@ionic/vue";
import { ref } from "vue";
import { useToast } from '@/composable/useToast'
import { useRouter } from 'vue-router'
const password = ref("");
const confirm = ref("");
const router = useRouter()
const {showToast}=useToast()
 function reset() {
  console.log("Password reset to:", password.value)

  // Empty check
  if (!password.value || !confirm.value) {
    showToast("❌ Both fields are required", "error", "bottom", "short")
    return
  }

  // Length check
  if (password.value.length < 6) {
    showToast("⚠️ Password must be at least 6 characters", "info", "bottom", "short")
    return
  }

  // Match check
  if (password.value !== confirm.value) {
    showToast("❌ Passwords do not match", "error", "bottom", "short")
    return
  }

  // Success
  showToast("✅ Password reset successful!", "success", "bottom", "short")

  // Move to login after short delay
  setTimeout(() => {
    router.push('/login')
  }, 1200)
}
</script>
