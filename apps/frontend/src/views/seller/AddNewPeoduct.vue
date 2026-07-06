<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border shadow-none">
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        <IonTitle class="ion-text-center font-semibold text_color">
          New Product
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">
      <IonList lines="none">
        <!-- Product Name -->
        <div class="mx-0.5 gap-4 grid">
          <div
            class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
          >
            <IonInput
              placeholder="Enter product name"
              class="w-full font-semibold h-12 input_style"
              type="text"
            />
          </div>

          <!-- Description -->

          <div
            class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
          >
            <IonTextarea
              placeholder="Enter product  description"
              :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
              :rows="15"
              :cols="20"
              :auto-grow="true"
              class="input_style"
            ></IonTextarea>
          </div>
          <!-- Price -->
          <div
            class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
          >
            <IonInput
              type="number"
              placeholder="Price"
              :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
              class="input_style"
            />
          </div>

          <!-- Category with Popover -->
          <div
            @click="showPopover = true"
            class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all"
            :class="
              showPopover
                ? 'border-2 border-[#8012ED]'
                : 'border border-transparent'
            "
          >
            <IonInput
              placeholder="Category"
              readonly
              :value="category"
              class="input_style cursor-pointer"
            />
          </div>

          <IonPopover 
          :is-open="showPopover"
           @didDismiss="showPopover = false"
           trigger="bottom-start" 
           side="bottom" 
           alignment="start"
           >
            <IonContent class="ion-padding  max-h-60 overflow-y-auto">
              <div
                v-for="cat in categories"
                :key="cat"
                class="mb-4 cursor-pointer"
                @click="selectCategory(cat)"
                 
                >
                {{ cat }}
              </div>
            </IonContent>
          </IonPopover>

          <IonPopover :is-open="showPopover" @didDismiss="showPopover = false">
            <IonContent class="ion-padding max-h-60 overflow-y-auto">
              <div
                v-for="cat in categories"
                :key="cat"
                class="mb-4"
                style="cursor: pointer"
                @click="selectCategory(cat)"
              >
                <div>{{ cat }}</div>
              </div>
            </IonContent>
          </IonPopover>

         <div
            class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
          >
            <IonInput
              type="text"
              placeholder="Option"
              :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
              class="input_style"
            />

          </div>
        </div>
      </IonList>

      <!-- Image Upload -->
       <IonLabel>
         <div class="capitalize font-bold my-2 ">Product images</div>
       </IonLabel>
      <div
        class="my-4 p-6 ion-text-center"
        style="
          border: 2px dashed #d1c4e9;
          border-radius: 12px;
          background: #fff;
        "
      >
        <h3>Add Images</h3>
        <p>Upload up to 5 images to showcase your product.</p>
        <IonButton
          fill="solid"
            class="btn shadow-md  capitalize mt-2.5 font-semibold text_color"
             style="--background:#EDE8F2"
            >
          Upload
        </IonButton>
      </div>

      <!-- Submit -->
      <IonButton expand="block" class="btn button_color ">
        Create Product
      </IonButton>
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
  IonList,
  IonInput,
  IonTextarea,
  IonPopover,
  IonButton,
  IonLabel,
} from "@ionic/vue";
import { ref } from "vue";
const triggerEvent = ref<Event | undefined>(undefined);
const showPopover = ref(false);
const category = ref("");
const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home",
  "Other",
  "Electronics",
  "Clothing",
  "Books",
  "Home",
  "Other",
  "Electronics",
  "Clothing",
  "Books",
  "Home",
  "Other",
];

const selectCategory = (cat: string) => {
  category.value = cat;
  showPopover.value = false;
};
</script>
<style scoped>
  ion-input{
--placeholder-color: #734D99;
  }
  ion-textarea{
    --placeholder-color: #734D99;

  }
</style>