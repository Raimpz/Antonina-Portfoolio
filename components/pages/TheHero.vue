<template>
  <section>
    <div class="img-container">
      <img :src="require('@/assets/tonka.png')" alt="Pilt autorist" />
    </div>
    <article>
      <div class="content-container">
        <div class="content">
          <div class="name">
            <div class="first-name">
              <h1>ANTONINA</h1>
            </div>
            <div class="last-name">
              <h1>NIINEPUU</h1>
            </div>
          </div>
          <p>
            Olen loov ja rõõmus tüdruk. Minu hobideks on sport, maalimine,
            joonistamine, muusika loomine ja floristika. Samuti paelub mind väga
            nikerdamine ja õmblemine. Terve elu olen ka tegelenud käsitööga ning
            see tõi mind selle erialani. Õppisin nullist tegema endale ja
            teistele ainulaadseid riideid, mis on minu jaoks siiani uskumatu.
            Tulevikus tahan valmistada unikaalseid ning mugavaid rõivaid. Minu
            eesmärgiks on vastavalt figuurile õmmelda mugavaid ja ilusaid
            tooteid.
          </p>
        </div>
      </div>
      <div class="btn-container">
        <router-link to="/ommeldud-roivad">
          <button class="hero-btn">
            <h3 class="word--port">PORT</h3>
            <h3>FOOL</h3>
            <h3 class="word--io">IO</h3>
          </button>
        </router-link>
      </div>
    </article>
  </section>

  <main>
    <div class="container">
      <div class="cv-heading">
        <h2>CV</h2>
        <div class="underline"></div>
      </div>
      <div class="cv-image-container">
        <img :src="require('@/assets/cv.jpg')" alt="cv" class="cv-img" />
      </div>
    </div>
  </main>

  <the-footer></the-footer>
</template>

<script>
import TheFooter from "../layouts/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
};
</script>

<style scoped>
section {
  padding: 30px 25px;
}

.word--port {
  padding-left: 18px;
}

.word--io {
  padding-left: 26.5px;
}

.name {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-bottom: 5px;
}

.img-container {
  margin-bottom: 10px;
  height: 350px;
}

img {
  height: 100%;
  width: 100%;
  border: 1px solid black;
}

article {
  text-align: center;
  width: 100%;
}

.content {
  background: var(--color-gray);
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  max-width: 400px;
}

/* CV */

.cv-heading {
  text-align: center;
  width: 75px;
}

.underline {
  width: 100%;
  border: 1px solid var(--color-black);
}

.cv-image-container {
  width: 350px;
}

.cv-img {
  object-fit: cover;
}

main {
  margin-bottom: 25px;
}

@media screen and (min-width: 768px) {
  .img-container {
    height: 400px;
  }

  .content {
    min-width: 550px;
  }

  .cv-image-container {
    width: 450px;
  }
}

@media screen and (min-width: 1080px) {
  section {
    flex-direction: row;
    gap: 31.73px;
  }

  /* CONTENT */
  article {
    position: relative;
    max-width: 450px;
  }

  h1 {
    font-weight: 100;
  }

  .first-name h1 {
    font-size: 30px;
    letter-spacing: 40px;
  }

  .last-name h1 {
    font-size: 35px;
    letter-spacing: 40px;
  }

  .first-name {
    position: absolute;
    top: -30%;
    left: 5%;
  }

  .last-name {
    position: absolute;
    right: -22%;
    top: -75%;
    writing-mode: vertical-lr;
    text-orientation: upright;
  }

  .content {
    position: relative;
    height: 250px;
    min-width: 100%;
    display: flex;
    align-items: center;
  }

  .content-container::before {
    content: "";
    left: 0%;
    top: -10%;
    position: absolute;
    width: 110%;
    height: 115%;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    background: white;
  }

  /* IMAGE */
  .img-container {
    height: 450px;
    min-width: 350px;
    position: relative;
  }

  .img-container::after {
    position: absolute;
    content: "";
    border: 3px solid black;
    top: -5%;
    left: -10%;
    width: 120%;
    height: 110%;
  }

  /* BUTTON */
  .btn-container {
    position: absolute;
    bottom: -175px;
    width: 100%;
  }

  /* CV */
  .cv-image-container {
    width: 500px;
  }
}

@media screen and (min-width: 1715px) {
  section {
    flex-wrap: wrap;
    gap: 51.5px;
  }

  /* CONTENT */
  article {
    max-width: 800px;
  }

  .first-name h1 {
    font-size: 40px;
    letter-spacing: 70px;
  }

  .last-name h1 {
    font-size: 50px;
    letter-spacing: 40px;
  }

  .first-name {
    top: -25%;
    left: 5%;
  }

  .last-name {
    right: -20%;
    top: -57%;
  }

  .content {
    height: 350px;
  }

  .content-container::before {
    height: 120%;
    border-top: 3px solid black;
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }

  /* IMAGE */
  .img-container {
    height: 700px;
  }

  /* BUTTON */
  .btn-container {
    bottom: -200px;
  }

  /* CV */
  .cv-image-container {
    width: 600px;
  }
}
</style>
