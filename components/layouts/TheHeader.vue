<template>
  <nav>
    <!-- phone view -->
    <div class="nav-sm">
      <div class="btn-container">
        <button @click="toggleMobileNav">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
      </div>
      <div class="nav-links" :class="navBarOpened ? showNav : hideNav">
        <router-link to="/">Avaleht</router-link>
        <router-link to="/ommeldud-roivad">Tehtud tööd</router-link>
        <router-link to="/loputoo">Lõputöö</router-link>
        <router-link to="/tingmargid">Tingmärgid</router-link>
        <router-link to="/kasutatud-materjal">Kasutatud kirjandus</router-link>
        <router-link to="/tanusonad">Tänusõnad</router-link>
      </div>
    </div>
    <!-- tablet and pc view -->
    <div class="nav-md">
      <router-link to="/">Avaleht</router-link>
      <router-link to="/ommeldud-roivad">Tehtud tööd</router-link>
      <router-link to="/loputoo">Lõputöö</router-link>
      <router-link to="/tingmargid">Tingmärgid</router-link>
      <router-link to="/kasutatud-materjal">Kasutatud kirjandus</router-link>
      <router-link to="/tanusonad">Tänusõnad</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: "showNav",
      hideNav: "hideNav",
      navBarOpened: false,
    };
  },
  methods: {
    toggleMobileNav() {
      this.navBarOpened = !this.navBarOpened;
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  position: relative;
}

.nav-sm {
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 99999;
}

.nav-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--color-darkGray);
}

.nav-links > * {
  padding: 20px 15px;
}

.hideNav {
  transform: translateY(-100%);
  transition: 200ms all linear;
}

.showNav {
  transform: translateY(100%);
  transition: 200ms all linear;
}

.btn-container {
  height: 100%;
  z-index: 99999;
  background: var(--color-darkGray);
  display: flex;
  justify-content: end;
}

button {
  background: none;
  border: none;
  font-size: 26px;
  padding-right: 20px;
}

.nav-md {
  display: none;
}

.active {
  color: var(--color-white);
  background: #333333;
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  nav {
    background: var(--color-darkGray);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
  }

  .nav-md {
    display: flex;
    gap: 25px;
  }

  .nav-sm {
    display: none;
  }

  .active {
    background: none;
  }
}

@media screen and (min-width: 1080px) {
  nav {
    position: none;
    height: 75px;
    max-width: 90%;
    border-radius: 6px;
    margin: auto;
  }
}
</style>
