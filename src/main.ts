import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"; // Esto debe cargar tu configuración i18n
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChartLine,
  faCheck,
  faCheckCircle,
  faEnvelope,
  faFileAlt,
  faFileInvoiceDollar,
  faMapMarkerAlt,
  faMobileAlt,
  faPhone,
  faTasks,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Add all icons to library
library.add(
  faCheckCircle,
  faChartLine,
  faFileInvoiceDollar,
  faUsers,
  faFileAlt,
  faTasks,
  faMobileAlt,
  faCheck,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
);

const app = createApp(App);

// Register FontAwesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(i18n); // Asegúrate de que esta línea esté presente
app.mount("#app");
