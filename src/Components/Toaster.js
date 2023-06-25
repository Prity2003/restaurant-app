import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

export const toasterMsg = (message, getVariant, duration, icon) => {
  Store.addNotification({
    title: "Megma",
    message: message,
    type: getVariant,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 30000,
    },
  });
};
