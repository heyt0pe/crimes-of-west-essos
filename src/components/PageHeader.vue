<template>
  <header>
    <a href="/" class="header__link">
      <i class="fas fa-arrow-left-long"></i>
      <span class="header__link-text">Crimes of Westeros</span>
    </a>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
}
</script>

<style scoped>
header {
  background-color: white;
  width: 100%;
  padding: 0 1rem;
  height: var(--header-height);
  position: fixed;
  display: flex;
  align-items: center;
  z-index: +1;
}

a.header__link {
  display: flex;
  gap: 0.6rem;
  width: fit-content;
  text-decoration: none;
  color: var(--link-blue);
  font-size: 1rem;
  line-height: 1rem;
}
</style>
