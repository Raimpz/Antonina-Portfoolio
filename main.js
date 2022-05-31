import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// FontAwesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import TheHero from "./components/pages/TheHero.vue";
import SewingPage from "./components/pages/SewingPage.vue";
import TheFinalProject from "./components/pages/TheFinalProject.vue";
import TheLegend from "./components/pages/TheLegend.vue";
import TheMaterjal from "./components/pages/TheMaterjal.vue";
import TheTänusõnad from "./components/pages/TheTänusõnad.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHero },
    { path: "/ommeldud-roivad", component: SewingPage },
    { path: "/loputoo", component: TheFinalProject },
    { path: "/tingmargid", component: TheLegend },
    { path: "/kasutatud-materjal", component: TheMaterjal },
    { path: "/tanusonad", component: TheTänusõnad },
  ],
  linkActiveClass: "active",
});

const app = createApp(App);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
