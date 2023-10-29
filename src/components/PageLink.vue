<template>
  <a :href="url" class="page-link">
    <span class="page-link__text" :class="{ 'page-link__text--bold': boldText }">{{ text }}</span>
    <i class="page-link__icon fas fa-arrow-right-long"></i>
  </a>
</template>

<script>
export default {
  name: 'PageLink',
  props: {
    url: {
      type: String,
      default: '#'
    },
    text: {
      type: String,
      required: true,
    },
    boldText: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped>
a.page-link {
  color: var(--link-blue);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: .3s gap;
  width: fit-content;
  font-size: 0.875rem;
  text-decoration: none;
}

a.page-link:hover {
  gap: 0.8rem;
}

span.page-link__text {
  text-decoration: underline;
}

span.page-link__text--bold {
  font-weight: 600;
  font-size: 1rem;
}

i.page-link__icon {
  font-size: 0.65rem;
}
</style>
