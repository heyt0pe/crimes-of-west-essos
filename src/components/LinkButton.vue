<template>
  <a :href="url" class="link-button">
    <span class="link-button__text">{{ text }}</span>
    <i class="fas fa-arrow-right-long"></i>
  </a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    url: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
a.link-button {
  height: var(--button-height);
  background: var(--primary-red);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  text-decoration: none;
  font-size: 0.875rem;
  transition: .3s background;
  position: relative;
}

a.link-button:hover {
  background: var(--dark);
}

span.link-button__text {
  margin-right: 2rem;
}

a.link-button i {
  left: calc(50% + 1.675rem);
  transition: .3s left;
  position: absolute;
  margin-top: 2px;
}

a.link-button:hover i {
  left: calc(50% + 2.225rem);
}
</style>
