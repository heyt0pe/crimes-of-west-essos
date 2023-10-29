<template>
  <section>
    <div class="inner">
      <h2>Spotlight of the victims</h2>
      <div class="victims">
        <VictimProfile 
          v-for="victim in victims" 
          :key="victim.id" 
          :image-url="victim.picture"
          :full-name="`${victim.firstName} ${victim.lastName}`" 
          :title="victim.title"  
          :targeted="victim.also_targeted" 
        />
      </div>
    </div>
  </section>
</template>

<script>
import VictimProfile from './VictimProfile.vue'
export default {
  name: 'SpotlightOfVictims',
  components: { VictimProfile },
  props: {
    victims: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
section {
  background: #EEE;
}

section div.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div.victims {
  padding: 6vh 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.375rem;
  justify-content: center;
}

div.victims::after {
  content: "";
  width: max(calc(25% - 1.375rem), 16.625rem);
}

@media (max-width: 615px) {
  section div.inner {
    align-items: flex-start;
  }
}
</style>
