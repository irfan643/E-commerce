<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/dashboard" />
        </IonButtons>
        <IonTitle>Returns & Issues</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Report a Problem -->
      <h2>Report a Problem</h2>

      <IonItem>
        <IonLabel>Select</IonLabel>
        <IonSelect placeholder="Select">
          <IonSelectOption value="damaged">Damaged Package</IonSelectOption>
          <IonSelectOption value="incorrect">Incorrect Delivery</IonSelectOption>
          <IonSelectOption value="missing">Missing Item</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Select</IonLabel>
        <IonSelect placeholder="Select">
          <IonSelectOption value="refund">Request Refund</IonSelectOption>
          <IonSelectOption value="replacement">Request Replacement</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonTextarea placeholder="Describe the issue..." autoGrow="true"></IonTextarea>
      </IonItem>

      <IonButton expand="block" color="primary">Submit</IonButton>

      <!-- Reported Issues -->
      <h2>Reported Issues</h2>
      <IonList>
        <IonItem>
          <IonLabel>
            <h3>Issue: Damaged Package</h3>
            <p>Package ID: 123456789</p>
          </IonLabel>
          <IonNote slot="end" color="medium">In Review</IonNote>
        </IonItem>

        <IonItem>
          <IonLabel>
            <h3>Issue: Incorrect Delivery</h3>
            <p>Package ID: 987654321</p>
          </IonLabel>
          <IonNote slot="end" color="success">Resolved</IonNote>
        </IonItem>
      </IonList>
    </IonContent>

    <IonFooter>
      <IonTabBar slot="bottom">
        <IonTabButton tab="dashboard" href="/dashboard">
          <IonIcon :icon="homeOutline" />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="packages" href="/packages">
          <IonIcon :icon="cubeOutline" />
          <IonLabel>Packages</IonLabel>
        </IonTabButton>
        <IonTabButton tab="returns" href="/returns">
          <IonIcon :icon="refreshOutline" />
          <IonLabel>Returns & Issues</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon :icon="personOutline" />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonFooter>
  </IonPage>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonList,
  IonNote,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonIcon
} from '@ionic/vue';

import {
  homeOutline,
  cubeOutline,
  refreshOutline,
  personOutline
} from 'ionicons/icons';
</script>

<style scoped>
h2 {
  margin-top: 20px;
  font-weight: bold;
}
</style>
