<template>
  <the-header></the-header>
  <main>
    <div>
      <img :src="require('@/assets/tingmärgid/pilt.png')" alt="" />
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
/* footer height is 50px */
/* header height is 50px on phone and 75px on pc */

main {
  height: calc(100vh - 100px);
}

main div {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  object-fit: cover;
  width: 100%;
}

@media screen and (min-width: 768px) {
  img {
    width: 600px;
  }
}

@media screen and (min-width: 1080px) {
  main {
    height: calc(100vh - 125px);
  }
}
</style>
