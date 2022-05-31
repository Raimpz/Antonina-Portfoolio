<template>
  <main>
    <router-view />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200;400&display=swap");
*,
::after,
::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --color-green: #addfad;
  --color-brown: #cc9a68;
  --color-black: #000;
  --color-white: #fff;
  --color-gray: rgb(231, 231, 231);
  --color-lightGray: rgba(231, 231, 231, 0.25);
  --color-darkGray: #6d6d64;
}

body {
  font-family: Roboto;
}

a {
  text-decoration: none;
  color: var(--color-black);
}

h1 {
  font-size: 18px;
}

p {
  font-size: 14px;
}

h3 {
  font-size: 18px;
}

.section-gr {
  background: var(--color-gray);
}

.section-wh {
  background: var(--color-white);
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
}

.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.hero-btn {
  background: none;
  padding: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 0 5px 1px var(--color-darkGray);
  transition: all 500ms ease-in-out;
}

.hero-btn:hover {
  background: var(--color-darkGray);
  color: white;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  h3 {
    font-size: 24px;
  }

  .hero-btn {
    font-size: 28px;
    padding: 25px;
  }
}

@media screen and (min-width: 1080px) {
  section {
    height: 100vh;
  }
}
</style>
