<template>
   <IonPage>
    <IonHeader class="ion-no-border">
        <IonToolbar>
            <IonButtons slot="start">
                 <IonBackButton default-href="/packages"></IonBackButton>
        </IonButtons>
           
            <IonTitle class="ion-text-center font-bold  text_color capitalize"> contact information</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
             <IonList >
               <div>
                <IonLabel class="capitalize pl-2 "> phone number</IonLabel>
                <div class="custom-input !bg-transparent  mt-1">
                    <IonInput
                    type="number"
                      class="input_style" 
                      v-model="form.phone"
                    />
                </div>
               </div>
               <div>
                <IonLabel class="capitalize pl-2 "> email address</IonLabel>
                <div class="custom-input !bg-transparent  mt-1">
                    <IonInput
                    type="email"
                      class="input_style" 
                      v-model="form.email"
                    />
                </div>
               </div>
                <div>
                <IonLabel class="capitalize pl-2  "> contact person</IonLabel>
                <div  class="custom-input !bg-transparent mt-1 mb-7">
                    <IonInput
                    type="text"
                      class="input_style" 
                      v-model="form.contactPerson"
                    />
                </div>
               </div>
             </IonList>
             <IonButton  expand="block" shape="round" class="capitalize font-bold text-white  btn button_color" @click="handleSubmit">
                save cahnges
             </IonButton>
    </IonContent>
   </IonPage>

    </template>
    <script setup lang="ts">
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLabel, IonList,  IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue'; 
const form = ref({
  phone: "",
  email: "",
  contactPerson: ""
});

// handle submit
const handleSubmit = () => {
  console.log("Form Data:", form.value);
};
</script>
    <style scoped>
    ion-list {
  display: grid;
  gap: 12px;
}


    </style>