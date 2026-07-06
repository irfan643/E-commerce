import { ref } from "vue";

const visible = ref(false);
const message = ref("");
const type = ref<"success" | "error" | "info">("info");
const position = ref<"top" | "center" | "bottom">("top"); // default top
const duration = ref<"short" | "long">("short");

export function useToast() {
  async function showToast(
    msg: string,
    toastType: "success" | "error" | "info" = "info",
    toastPosition: "top" | "center" | "bottom" = position.value, // default top
    toastDuration: "short" | "long" = duration.value // default long
  ) {
    message.value = msg;
    type.value = toastType;
    position.value = toastPosition;
    duration.value = toastDuration;
    visible.value = true;

    try {
      // Optional: Capacitor native toast
      // await Toast.show({ text: msg, position: toastPosition, duration: toastDuration });
    } catch (e) {
      console.error("Native toast failed:", e);
    } 
    finally {
      setTimeout(() => (visible.value = false), duration.value === "short" ? 2000 : 3500);
    }
  }

  return { visible, message, type, position, duration, showToast };
}
