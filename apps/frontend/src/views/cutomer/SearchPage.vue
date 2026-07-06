<template>
  <IonPage>
    <IonHeader class="shadow-no ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold text-2xl capitalize">
          Search page
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <!-- Search Bar -->
      <IonGrid>
        <IonRow>
          <div
            class="border-1 h-12 flex justify-center items-center border-gray-500 w-full rounded-xl overflow-hidden bg-[#EBE8F2]"
          >
            <IonIcon :icon="search" class="size-6 mx-2" />

            <IonInput
              style="--background:#EBE8F2; --box-shadow:none;"
              class="no-highlight"
              ref="searchbarRef"
              v-model="searchQuery"
              placeholder="Type to search..."
              :clear-input="false"
              @ionInput="onSearch"
            ></IonInput>

            <IonIcon
              v-if="searchQuery"
              :icon="closeIcon"
              class="size-6 mx-2 cursor-pointer text-gray-500"
              @click="clearInput"
            />
          </div>
        </IonRow>
      </IonGrid>

      <!-- Custom Options -->
      <IonItem
        class="mt-2 shadow-none"
        lines="none"
        style="--padding-start:0; --padding-end:0; --padding-top:0; --padding-bottom:0;"
      >
        <div class="w-full flex gap-5 ">
             <div class="option capitalize" @click="openDressesPopover($event)">
  dresses
  <IonIcon :icon="isDressesOpen ? chevronUpOutline : chevronDownOutline" class="size-4" />
</div>

<div class="option capitalize" @click="openPricePopover($event)">
  price
  <IonIcon :icon="isPriceOpen ? chevronUpOutline : chevronDownOutline" class="size-4" />
</div>

<div class="option capitalize" @click="openSortPopover($event)">
  sort
  <IonIcon :icon="isSortOpen ? chevronUpOutline : chevronDownOutline" class="size-4" />
</div>

        </div>
      </IonItem>

      <!-- Dresses Popover -->
      <IonPopover :is-open="isDressesOpen" :event="dressesEvent" @didDismiss="isDressesOpen = false">
        <IonContent class="ion-padding">
          <IonItem v-for="opt in dressesOptions" :key="opt" lines="none" button>
            <IonCheckbox
              slot="end"
              :checked="selectedDresses.includes(opt)"
              @ionChange="($event) => {
                if ($event.detail.checked) selectedDresses.push(opt)
                else selectedDresses.splice(selectedDresses.indexOf(opt), 1)
              }"
            />
            <span class="capitalize">{{ opt }}</span>
          </IonItem>
        </IonContent>
      </IonPopover>

      <!-- Price Popover -->
      <IonPopover :is-open="isPriceOpen" :event="priceEvent" @didDismiss="isPriceOpen = false">
        <IonContent class="ion-padding">
          <IonItem v-for="opt in priceOptions" :key="opt" lines="none" button>
            <IonCheckbox
              slot="end"
              :checked="selectedPrice.includes(opt)"
              @ionChange="($event) => {
                if ($event.detail.checked) selectedPrice.push(opt)
                else selectedPrice.splice(selectedPrice.indexOf(opt), 1)
              }"
            />
            <span class="capitalize">{{ opt }}</span>
          </IonItem>
        </IonContent>
      </IonPopover>

      <!-- Sort Popover -->
      <IonPopover  :is-open="isSortOpen" :event="sortEvent"
        
   
     side="bottom"
        
  @didDismiss="isSortOpen = false">
        <IonContent class="ion-padding">
          <IonItem v-for="opt in sortOptions" :key="opt" lines="none" button>
            <IonCheckbox
                       slot="end"
              :checked="selectedSort.includes(opt)"
              @ionChange="($event) => {
                if ($event.detail.checked) selectedSort.push(opt)
                else selectedSort.splice(selectedSort.indexOf(opt), 1)
              }"
            />
            <span class="capitalize">{{ opt }}</span>
          </IonItem>
        </IonContent>
      </IonPopover>

      <!-- Search Results -->
      <!-- <div v-if="searchQuery" class="mt-4">
        <p class="text-sm text-gray-500">
          Results for: <strong>{{ searchQuery }}</strong>
        </p>
        <ul class="mt-2 space-y-2">
        
        </ul>
      </div> -->
      <IonGrid class="mt-3.5">
        <IonRow class="  justify-center">
          <IonCol size="6  " class=" px-2">
              <Card
               imageSrc="../../public/image/Apparel.png" 
                      title="item"  
                subTitle="$12"
                imageHeight="h-[70%]"
               /> 

          </IonCol>
           <IonCol size="6 " class=" gap-2">
              <Card
               imageSrc="../../public/image/Apparel.png" 
                      title="item"  
                subTitle="$12"
                imageHeight="h-[70%]"
               /> 

          </IonCol>
            
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonGrid,
  IonRow,
  IonInput,
  IonIcon,
  IonItem,
  IonPopover,
  IonCheckbox,
  IonCol
} from "@ionic/vue";
import { search, close as closeIcon, chevronDownOutline,chevronUpOutline } from "ionicons/icons";
import Card from "@/components/Card.vue";

// Search bar
const searchQuery = ref("");
const results = ref([]);
const searchbarRef = ref(null);

const onSearch = () => {
  results.value = searchQuery.value
    ? [`${searchQuery.value} item 1`, `${searchQuery.value} item 2`, `${searchQuery.value} item 3`]
    : [];
};

const clearInput = () => {
  searchQuery.value = "";
  results.value = [];
};

// Popover states and events
const isDressesOpen = ref(false);
const dressesEvent = ref(null);

const isPriceOpen = ref(false);
const priceEvent = ref(null);

const isSortOpen = ref(false);
const sortEvent = ref(null);

// Popover open functions
const openDressesPopover = (event) => {
  dressesEvent.value = event;
  isDressesOpen.value = true;
};

const openPricePopover = (event) => {
  priceEvent.value = event;
  isPriceOpen.value = true;
};

const openSortPopover = (event) => {
  sortEvent.value = event;
  isSortOpen.value = true;
};

// Options
const dressesOptions = ["dresses", "shoes", "bags", "accessories"];
const priceOptions = ["low to high", "high to low"];
const sortOptions = ["latest", "popular", "recommended"];

// Selected values
const selectedDresses = ref([]);
const selectedPrice = ref([]);
const selectedSort = ref([]);

// watch(
//   [selectedDresses, selectedPrice, selectedSort],
//   ([newDresses, newPrice, newSort], [oldDresses, oldPrice, oldSort]) => {
//     console.log("Dresses selected:", newDresses);
//     console.log("Price selected:", newPrice);
//     console.log("Sort selected:", newSort);

//     // Example: do something whenever any of them changes
//   },
//   { deep: true } // needed if you want to watch array contents
// );

// Autofocus searchbar


onMounted(() => {
  // Ionic input element has a setFocus() method
  const el = searchbarRef.value?.$el || searchbarRef.value;
  if (el && typeof el.setFocus === "function") {
    // Focus after a tiny timeout to ensure the page is fully rendered
    setTimeout(() => {
      el.setFocus();
    }, 100); 
  }
});

</script>

<style scoped>
.option {
  border-radius: 8px;
  background-color: rgba(173, 173, 173, 0.192);
  border: 1px solid rgb(146, 145, 145);
  padding: 10px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.search-bar {
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 12px;
  background: #ebe8f2;
  overflow: hidden;
  border: 1px solid #888;
  padding: 0 8px;
}
</style>
