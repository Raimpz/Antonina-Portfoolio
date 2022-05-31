<template>
  <div class="buttons" v-if="pageType === 'sewingPage'">
    <button
      v-for="btn in computedBtns"
      :key="btn.id"
      :class="['btn', { 'btn-active': btn.isActive }]"
    >
      <a :href="'#' + btn.id" @click.prevent="onBtnClick(btn)">{{
        btn.text
      }}</a>
    </button>
  </div>

  <div class="buttons" v-if="pageType === 'finalProjectPage'">
    <button
      v-for="btn in computedBtns2"
      :key="btn.id"
      :class="['btn', { 'btn-active': btn.isActive }]"
    >
      <a :href="'#' + btn.id" @click.prevent="onBtnClick(btn)">{{
        btn.text
      }}</a>
    </button>
  </div>
</template>

<script>
const buttons = [
  {
    id: "mantel",
    text: "Mantel",
    isActive: false,
  },
  {
    id: "korsett",
    text: "Korsett",
    isActive: false,
  },
  {
    id: "lilleline-trikotaažkleit",
    text: "Lilleline trikotaažkleit",
    isActive: false,
  },
  {
    id: "türkiissinine-trikotaažkleit",
    text: "Türkiissinine trikotaažkleit",
    isActive: false,
  },
  { id: "kleit", text: "Kleit", isActive: false },
  { id: "punane-seelik", text: "Punane seelik", isActive: false },
  { id: "sinine-seelik", text: "Sinine seelik", isActive: false },
  { id: "pluus", text: "Pluus", isActive: false },
  { id: "punane-vest", text: "Punane vest", isActive: false },
  {
    id: "kunstkarusnahast-vest",
    text: "Kunstkarusnahast vest",
    isActive: false,
  },
  { id: "roheline-sall", text: "Roheline sall", isActive: false },
  { id: "roosa-sall", text: "Roosa sall", isActive: false },
  { id: "püksid", text: "Püksid", isActive: false },
  { id: "jakk", text: "Jakk", isActive: false },
  {
    id: "rahvarõiva-meestepüksid",
    text: "Rahvarõiva meestepüksid",
    isActive: false,
  },
  { id: "lilleline-kleit", text: "Lilleline kleit", isActive: false },
  {
    id: "lilleline-kleit-2",
    text: "Lilleline trikotaažkleit volangidega",
    isActive: false,
  },
  { id: "ruuduline-seelik", text: "Ruuduline seelik", isActive: false },
  { id: "lasteriie", text: "Lastekomplekt", isActive: false },
  { id: "ujumispüksid", text: "Bikiinid", isActive: false },
];

const buttons2 = [
  { id: "inspiratsioonikollaž", text: "1. Inspiratsioonikollaž" },
  { id: "moejoonis", text: "2. Moejoonis" },
  { id: "moekirjeldus", text: "3. Moekirjeldus" },
  { id: "mõõdud", text: "4. Mõõdud" },
  { id: "tehnilineJoonis", text: "5. Tehniline joonis" },
  { id: "läbilõikeskeemid", text: "6. Läbilõikeskeemid" },
  { id: "konstrueerimine", text: "7. Konstrueerimine" },
  { id: "modelleerimine", text: "8. Modelleerimine" },
  { id: "tehnoloogilineJärjestus", text: "9. Tehnoloogiline järjestus" },
  { id: "õmblusseadmeteTutvustus", text: "10. Õmblusseadmete tutvustus" },
  { id: "lõigeteSpetsifiktsioon", text: "11. Lõigetest spetsifiktsioonid" },
  { id: "paigutusKangale", text: "12. Paigutus kangale" },
  { id: "kalkulatsioon", text: "13. Kalkulatsioon" },
  { id: "eneseanalüüs", text: "14. Eneseanalüüs" },
  { id: "valmistoode", text: "15. Valmistoode" },
];

const smoothScrollTo = (y, { duration = 400, offset = 0 } = {}) => {
  const easeOutCubic = (t) => --t * t * t + 1;
  const startY = window.scrollY;
  const difference = y - startY;
  const startTime = performance.now();
  const root = document.documentElement;

  if (y === startY + offset) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    root.style.scrollBehavior = "auto";

    const step = () => {
      const progress = (performance.now() - startTime) / duration;
      const amount = easeOutCubic(progress);

      window.scrollTo({ top: startY + amount * difference - offset });

      if (progress < 0.99) {
        window.requestAnimationFrame(step);
      } else {
        root.style.scrollBehavior = "";

        resolve();
      }
    };

    step();
  });
};

import { computed, ref, onMounted } from "vue";

export default {
  props: {
    pageType: {
      type: String,
      required: true,
    },
  },
  setup() {
    const activeBtnId = ref(undefined);
    const computedBtns = computed(() => {
      return buttons.map((btn) => {
        return {
          ...btn,
          isActive: btn.id === activeBtnId.value,
        };
      });
    });
    /* finalProjectPage */
    const computedBtns2 = computed(() => {
      return buttons2.map((btn) => {
        return {
          ...btn,
          isActive: btn.id === activeBtnId.value,
        };
      });
    });

    let isAutoScrolling = false;

    function onBtnClick(btn) {
      if (isAutoScrolling) {
        return;
      }

      const panelSelector = `#${btn.id}`;
      const panel = document.querySelector(panelSelector);
      const panelTop = panel.getBoundingClientRect().top;
      const intersectionOffset = panelTop > 0 ? 1 : 2;
      const scrollTo = window.pageYOffset + panelTop + intersectionOffset;

      activeBtnId.value = btn.id;

      isAutoScrolling = true;
      smoothScrollTo(scrollTo).then(() => {
        isAutoScrolling = false;
        history.pushState({}, "", panelSelector);
      });
    }
    onMounted(() => {
      const ids = buttons.map((btn) => `#${btn.id}`);
      const panels = [...document.querySelectorAll(ids.join(", "))];
      const ids2 = buttons2.map((btn) => `#${btn.id}`);
      const panels2 = [...document.querySelectorAll(ids2.join(", "))];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!activeBtnId.value && entry.isIntersecting) {
              activeBtnId.value = entry.target.id;
              return;
            }

            if (isAutoScrolling) {
              return;
            }

            const panelTops = panels
              .map((el) => ({
                id: el.id,
                top: Math.floor(el.getBoundingClientRect().top),
              }))
              .sort((a, b) => b.top - a.top);

            const closestPanelToTop =
              panelTops.find((el) => el.top < 0) ||
              panelTops[panelTops.length - 1];

            activeBtnId.value = closestPanelToTop.id;
          });
        },
        { threshold: [0, 1] }
      );

      panels.forEach((panel) => {
        observer.observe(panel);
      });

      /* finalProjectPage   */
      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!activeBtnId.value && entry.isIntersecting) {
              activeBtnId.value = entry.target.id;
              return;
            }

            if (isAutoScrolling) {
              return;
            }

            const panelTops2 = panels2
              .map((el) => ({
                id: el.id,
                top: Math.floor(el.getBoundingClientRect().top),
              }))
              .sort((a, b) => b.top - a.top);

            const closestPanelToTop2 =
              panelTops2.find((el) => el.top < 0) ||
              panelTops2[panelTops2.length - 1];

            activeBtnId.value = closestPanelToTop2.id;
          });
        },
        { threshold: [0, 1] }
      );

      panels2.forEach((panel) => {
        observer2.observe(panel);
      });
    });

    return { computedBtns, computedBtns2, onBtnClick };
  },
};
</script>

<style scoped>
a {
  font-size: 13px;
  font-weight: bold;
}

button {
  background: none;
  border: none;
  padding: 5px 15px;
  margin: 0 3px 2px 3px;
}

.btn {
  border-bottom: 2px solid transparent;
}

.btn-active,
.btn:hover {
  color: var(--color-darkGray);
  border-bottom: 2px solid var(--color-darkGray);
}

@media screen and (min-width: 1200px) {
  a {
    font-size: 14px;
  }

  button {
    margin: 0 5px 2px 5px;
  }
}
</style>
