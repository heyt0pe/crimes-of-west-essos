<template>
  <div>
    <PageHeader />
    <main>
      <PageOverview />
      <LoadingSpinner v-if="isLoading" />
      <button v-else-if='errorView' class="retry" @click="getVictims()">
        <span class="link-button__text">Retry</span>
        <i class="fas fa-rotate"></i>
      </button>
      <div v-else>
        <NavigateByProfession />
        <SpotlightOfVictims :victims="victims" />
        <AllVictims :victims="victims" />
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageOverview from './components/PageOverview.vue'
import NavigateByProfession from './components/NavigateByProfession.vue'
import SpotlightOfVictims from './components/SpotlightOfVictims.vue'
import AllVictims from './components/AllVictims.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

import API from './api'

export default {
  name: 'App',
  data() {
    return {
      isLoading: true,
      errorView: false,
      victims: [],
    }
  },
  components: {
    PageHeader,
    PageOverview,
    NavigateByProfession,
    SpotlightOfVictims,
    AllVictims,
    LoadingSpinner,
  },
  created() {
    this.getVictims()
  },
  methods: {
    async getVictims() {
      this.isLoading = true;
      try {
        const response = await API.getVictims();
        this.victims = response.data;
        this.errorView = false;
      } catch (error) {
        this.$toasted.error(error);
        this.errorView = true;
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
button.retry {
  height: 2.5rem;
  width: 9.0625rem;
  background: black;
  color: white;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  transition: .3s all;
  margin: 1.5rem auto;
}

button.retry:active {
  position: relative;
  top: 0.5px;
  left: 0.5px;
}
</style>

