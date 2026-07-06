import { Style } from "@capacitor/status-bar";

export  function   randomids(){
return Math.random().toString(36).substr(2, 9)
}


//currency 
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
export { formatCurrency };
