<template>
  <footer>
    <div>
      <h3>
        Antonina Niinepuu <span>{{ displayDate }}</span> - kõik õigused kaitstud
      </h3>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      displayDate: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
  height: 50px;
  background: var(--color-black);
}

h3 {
  color: var(--color-white);
  font-size: 14px;
}

div {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
