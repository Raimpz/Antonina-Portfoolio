<template>
  <the-header></the-header>
  <main>
    <div class="heading">
      <h2>Kasutatud kirjandus</h2>
    </div>
    <div>
      <ul>
        <li>Raissa Orlova ja Mare Veenpere "Õpime Rätsepaks"</li>
        <li>Lea Koldmets "Rõivaste Piltsõnastik"</li>
      </ul>
    </div>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import TheFooter from "../layouts/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
li {
  list-style: none;
  margin-bottom: 5px;
}

main {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10px;
}

.heading {
  margin-bottom: 10px;
}

@media screen and (min-width: 1080px) {
  main {
    height: calc(100vh - 125px);
  }
}
</style>
