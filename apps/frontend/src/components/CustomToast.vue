<template>
  <transition name="bounce">
    <div
      v-if="visible"
      :class="[
        ' w-4/5 py-4 pl-2   rounded-lg shadow-lg fixed left-1/2 -translate-x-1/2 border-2 transform transition-all',
        toastClass,
        toastPosition
      ]"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed} from "vue";
import { useToast } from "../composable/useToast";

const { visible, message, type, position,  } = useToast();

// Toast styling based on type
const toastClass = computed(() => {
  switch (type.value) {
    case "success": return "bg-green-400 text-white border-green-600";
    case "error": return "bg-red-500 text-white border-red-700";
    case "info": return "bg-blue-400 text-white border-blue-600";
    default: return "bg-gray-800 text-white border-gray-700";
  }
});

// Toast position
const toastPosition = computed(() => {
  switch (position.value) {
    case "top": return "top-6";
    case "bottom": return "bottom-6";
    case "center": return "top-1/2 -translate-y-1/2";
    default: return "top-6";
  }
});

// Auto close behavior

</script>

<style>
.bounce-enter-active, .bounce-leave-active {
  transition: all 0.5s cubic-bezier(.68,-0.55,.27,1.55);
}
.bounce-enter-from, .bounce-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.bounce-enter-to, .bounce-leave-from {
  transform: scale(1.05);
  opacity: 1;
}
</style>
