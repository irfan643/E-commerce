    <template >
 <IonPage>
    <IonHeader class="ion-no-border">
 <IonToolbar>
 <IonButtons slot="start">
          <IonBackButton default-href="/" />
        </IonButtons>
        
    <IonTitle class="ion-text-center capitalize font-bold text_color"> Vehical license</IonTitle>
 </IonToolbar>
    </IonHeader>
  <IonContent class=" ion-padding">
      <IonLabel class=" font-bold tet_color  capitalize   "> New License palate</IonLabel>
    <div class="  mt-1 mb-5 w-full bg-[#F2F0F5] border-2 border-gray-300 rounded-xl px-3 transition focus-within:border-[#6030ff]  focus-within:scale-105 ">
         <IonInput 
        type="number"

     class="input_style no-highlight"
        />
     </div> 
           <IonLabel class=" font-bold tet_color  capitalize  ">
 upload licnese image             </IonLabel>
 
     <div class=" mt-1.5 w-full min-h-30 border-2 border-dotted p-6 rounded-2xl  flex  justify-center items-center ion-text-center border-gray-400">
            <div class="h-full w-full grid ">
               
                 <h2 class="!text_color !text-xl  !font-bold capitalize"> Upload  License image</h2>
              <IonLabel class=" text-[13px]  font-stretch-semi-expanded"> Take a photo  or upload  a PDF of your license </IonLabel>

                
               <IonButton class="btn   justify-center items-center capitalize mt-4 text_color  " style="--background: #EDE8F2;"  >
                     upload
               </IonButton>

            </div>
     </div>
            
   
  </IonContent> 
</IonPage>

</template>
    <script setup lang="ts">
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

</script>
    
    <style></style>