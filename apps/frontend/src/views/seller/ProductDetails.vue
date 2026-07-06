<template>
  <IonPage>
    <!-- Header -->
    <IonHeader class="ion-no-border">
      <IonToolbar>
        <!-- Back Button -->
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>

        <!-- Page Title -->
        <IonTitle class="ion-text-center">
          Handmade Soap
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <!-- Content -->
    <IonContent class="ion-padding">

      <!-- Page Heading -->
      <IonLabel class="block font-bold text-lg  my-4" style="color: #140D1C;">
        Product Details
      </IonLabel>

      <!-- Image Preview -->
      <IonImg
        src="../../../public//image/Apparel.png"
        alt="Product Image"
        class="rounded-lg mb-4"
      />

      <!-- Product Form -->
      <IonList lines="none" class="  ">
        <!-- Product Name -->
        <div class=" mx-0.5 mb-4">
  <IonLabel position="stacked" class="block pl-2.5 pb-4   font-medium text-[#140D1C]">
    Product Name
  </IonLabel>
  <div
    class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
  >
    <IonInput
      v-model="product.name"
      placeholder="Enter product name"
      class="w-full "
      type="text"
    
  
    />
  </div>
</div>


        <!-- Product Description -->
        <div class=" mx-0.5 mb-4">


            <IonLabel position="stacked" class="block pl-2.5 pb-4   font-medium text-[#140D1C]">
                      Product Description</IonLabel>
                 <div
              class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
            >
                      <IonTextarea
                      v-model="product.description"
                      placeholder="Enter product description"
                      :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
                      :rows="15" :cols="20" :auto-grow="true"></IonTextarea>
                      
                    
            </div>
        </div>   

        <!-- SKU -->
        <div class=" mx-0.5 mb-4">


            <IonLabel position="stacked" class="block pl-2.5 pb-4   font-medium text-[#140D1C]">
                      SKU</IonLabel>
                   <div
              class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
            >
                      <IonInput
                      v-model="product.sku"
                      placeholder="Enter SKU"
                      :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
                    />
                    </div>
        </div>
        

        <!-- Weight -->
        <div class=" mx-0.5 mb-4">

            <IonLabel position="stacked" class="block pl-2.5 pb-4   font-medium text-[#140D1C]">
                      Weight (lbs)</IonLabel>
                  <div
              class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
            >
                      <IonInput
                      v-model="product.weight"
                      type="number"
                      placeholder="Enter weight"
                      :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
                    />
            </div>
        </div>        

        <!-- Dimensions -->
         <div class=" mx-0.5 mb-4">

             <IonLabel position="stacked" class="block pl-2.5 pb-4   font-medium text-[#140D1C]">
                       Dimensions (in)</IonLabel>
                         <div
               class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
             >
                    
                       <IonInput
                       v-model="product.dimensions"
                       placeholder="Enter dimensions"
                       :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
                     />
                         </div>
         </div>

        <!-- Keywords -->
         <div class=" mx-0.5 mb-4">

            
             <IonLabel position="stacked" class="block pl-2.5 pb-4   font-medium text-[#140D1C]">
                       Keywords</IonLabel>
                            <div
               class="w-full rounded-[9px] bg-[#EDE8F2] px-3 transition-all focus-within:ring-2 focus-within:ring-[#8012ED]"
             >
                       <IonInput
                       v-model="product.keywords"
                       placeholder="Enter keywords"
                       :style="{ backgroundColor: '#EDE8F2', borderRadius: '8px' }"
                     />
                   </div>
         </div>
      </IonList>

      <!-- Update Button -->
      <IonButton
        expand="block"
        fill="solid"
        class="mt-6 btn"
        :style="{ '--background': '#8012ED' }"
        @click="updateProduct"
      >
        Update Product
      </IonButton>
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonLabel,
  IonList,
  IonInput,
  IonTextarea,
  IonButton,
  IonImg
} from "@ionic/vue";
import { ref } from "vue";

// Reactive Product State
const product = ref({
  name: "",
  description: "",
  sku: "",
  weight: "",
  dimensions: "",
  keywords: "",
});

// Button Click
function updateProduct() {
  console.log("Product Data:", product.value);
  // Later: Send to API
}
</script>

<style scoped>


ion-input {
  --highlight-color-focused: none;
  --highlight-color-invalid: transparent;
  --highlight-color-valid: transparent;
}

ion-textarea { 
    --highlight-color-focused: none;
      --highlight-color-invalid: none;
     --highlight-color-valid: none;
     }




</style>