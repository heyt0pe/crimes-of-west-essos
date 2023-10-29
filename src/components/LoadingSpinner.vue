<template>
  <div class="loading-spinner"></div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style scoped>
div.loading-spinner {
  border: 3px solid transparent;
  border-top: 3px solid var(--primary-red);
  border-bottom: 3px solid var(--primary-red);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  animation: spin .5s linear infinite;
  margin: 1.5rem auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>
