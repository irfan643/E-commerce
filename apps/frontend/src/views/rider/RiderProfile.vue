<template>
  <IonPage>
    <IonHeader class="ion-no-border  shadow-none">
      <IonToolbar>
        
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold  text_color ">Profile</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Profile Avatar + Name -->
        <div class=" p-0  flex justify-end  " >
           <IonButtons  >
            <IonButton  >
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </div>
      
      <div class="ion-text-center ion-padding">
        
          
          <IonAvatar style="width: 100px; height: 100px; margin: auto">
          <img
            src="../../../public/image/store_avtar.png"
            alt="Profile Avatar"
          />
        </IonAvatar>
         
             
        
        <h2 class="mt-2 font-semibold">Ethan Carter</h2>
        <p class="driver-id text-gray-500">Driver ID: 123456</p>
      </div>

      <!-- Personal Information -->
      <IonLabel class="capitalize text-xl font-semibold my-2">
        Personal Information
      </IonLabel>
      <IonList>
        <!-- Email -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="MailOpenOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>Email</h2>
            <p>ethan.carter@email.com</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear" @click="goto('email')">
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>

        <!-- Phone -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="CallOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>Phone Number</h2>
            <p>+1 (555) 123-4567</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear" @click="goto('phone')" >
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonList>

      <!-- Vehicle Information -->
      <IonLabel class="capitalize text-xl font-semibold my-2">
        Vehicle Information
      </IonLabel>
      <IonList>
        <!-- Vehicle Type -->
        <IonItem lines="none" style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="CarOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4"  />
          <IonLabel>
            <h2>Vehicle Type</h2>
            <p>{{ selected }}</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear"  @click="present = true">
              <IonIcon :icon="pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>

        <!-- License Plate -->
        <IonItem lines="none" style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="IdCardOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>
            <h2>License Plate</h2>
            <p>ABC-123</p>
          </IonLabel>
          <IonButtons slot="end">
            <IonButton fill="clear" @click="goto('')">
              <IonIcon :icon=" pencil" slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonItem>
      </IonList>

      <!-- Account Settings -->
      <IonLabel class="capitalize text-xl font-semibold my-2">
        Account Settings
      </IonLabel>
      <IonList>
        <!-- Password -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="LockClosedOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>Update Password</IonLabel>
          
        </IonItem>

        <!-- Notifications -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="NotificationsOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>Notifications</IonLabel>
         
        </IonItem>

        <!-- Help -->
        <IonItem lines="none" button style="--padding-start:0px; --inner-padding-end:0px;">
          <IonIcon :icon="HelpCircleOutline" slot="start" class="bg-gray-200 rounded-lg p-2 mr-4" />
          <IonLabel>Help & Support</IonLabel>
          
        </IonItem>
  
      </IonList>
        <ion-modal
        :is-open="present"
        @did-dismiss="present = false"
        :breakpoints="[0, 0.4,,0.6, 0.8]"
        initial-breakpoint="0.6"
      >
        <ion-content class="ion-padding">
          <h2 class="!text-xl  !font-bold !mb-4">Select Vehicle Type</h2>

          <ion-list>
            <ion-radio-group v-model="selected" >
              <ion-item lines="none"  class=" formatting">
                <ion-label>Car</ion-label>
                <ion-radio slot="end" value="car"></ion-radio>
              </ion-item>

              <ion-item lines="none"  class=" formatting">
                <ion-label>Motorcycle</ion-label>
                <ion-radio slot="end" value="motorcycle"></ion-radio>
              </ion-item>

              <ion-item class=" formatting" lines="none">
                <ion-label>Van</ion-label>
                <ion-radio slot="end" value="van"></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>

          <ion-button
            expand="block"
           
            class="mt-4 btn button_color "
            @click="confirmSelection"
          >
            Change Vehicle
          </ion-button>
        </ion-content>
      </ion-modal>
    </IonContent>
  </IonPage>

</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonAvatar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
   IonActionSheet,
   IonModal,
   IonRadioGroup,
   IonRadio
  
} from "@ionic/vue";
import { ref } from "vue";
 import pencil from "@/assets/icon/pencil.svg";
// PascalCase icon imports
import {
  mailOpenOutline as MailOpenOutline,
  callOutline as CallOutline,
  carOutline as CarOutline,
  idCardOutline as IdCardOutline,
  lockClosedOutline as LockClosedOutline,
  notificationsOutline as NotificationsOutline,
  helpCircleOutline as HelpCircleOutline,
  pencilOutline as PencilOutline,
} from "ionicons/icons";
   import { useRouter } from "vue-router";
 const routes=useRouter();
   const goto = (parm:string | '')=> {
    if(parm)
    routes.push(`/update/${parm}`)
    else
     routes.push("/Vehicallicense")
   } ;
const present = ref(false)
  
// stores selected value
const selected = ref('Sadan')

const confirmSelection = () => {
  console.log('Selected vehicle:', selected.value)
  present.value = false
}
 

         
</script>
<style>
 p{
  color:#634F96 !important;
 }
.formatting{
  border:2px solid #634F96;
     margin-bottom: 12px;
     border-radius: 12px;
}


</style>
