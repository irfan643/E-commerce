<template>
    <IonPage>
        <IonHeader class="ion-no-border shadow-none">
            <IonToolbar class="shadow-none">
                <IonButtons slot="start">
                    <IonBackButton default-href="/" />
                </IonButtons>
                <IonTitle class="ion-text-center text_color font-bold">Profile Details</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList >
                <!-- Name -->
                <IonItem lines="none">
                    <IonLabel position="stacked" class="pb-5 pl-2.5 text_color font-bold">Name</IonLabel>
                    <IonInput placeholder="Enter your name" class="btn" />
                </IonItem>

                <!-- Email -->
                <IonItem lines="none">
                    <IonLabel position="stacked" class="pb-5 pl-2.5 text_color font-bold">Email</IonLabel>
                    <IonInput type="email" placeholder="Enter your email" class="btn" />
                </IonItem>

                <!-- Phone Number -->
                <IonItem lines="none">
                    <IonLabel position="stacked" class="pb-5 pl-2.5 text_color font-bold">Phone Number</IonLabel>
                    <IonInput type="tel" placeholder="Enter your phone number" class="btn" />
                </IonItem>

                <!-- Address -->
                <IonItem lines="none">
                    <IonLabel position="stacked" class="pl-2.5 text_color font-bold">Address</IonLabel>
                    <IonTextarea placeholder="Enter your address"
                        class="h-30 border-0 mt-5 bg-[#f3f1f8] rounded-xl px-3 border-amber-500" />
                </IonItem>
            </IonList>

            <!-- Save Button -->
            <div class="ion-text-center py-8 ion-margin-top">
                <IonButton  color="tertiary"  class="font-Manrope font-bold capitalize">
                    Save
                </IonButton>
            </div>
        </IonContent>
    </IonPage>
</template>

<script setup>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
} from '@ionic/vue'
</script>

<style scoped>
ion-item {
    margin-bottom: 0px;
    /* space between fields */
}

ion-input {
    --background: #f3f1f8;
    --padding-start: 10px;
    --padding-end: 10px;
    --padding-top: 0px;
    --padding-bottom: 0px;
}
a{
  --padding-start: 0;
  --padding-end: 0;
}

</style>
