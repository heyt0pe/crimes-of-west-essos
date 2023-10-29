<template>
  <section>
    <div class="inner">
      <h2>Navigate by the Profession</h2>
      <div class="professions">
        <PageLink 
          v-for='profession in professions' 
          :key="profession" 
          :text="profession"
          :url="`#${profession.toLowerCase()}`" 
          :bold-text="true"
        />
      </div>
    </div>
  </section>
</template>

<script>
import PageLink from './PageLink.vue'
export default {
  name: 'NavigateByProfession',
  components: { PageLink },
  data() {
    return {
      professions: ['Son', "Mercenary", 'Daughter', 'Murdered', 'Princess', 'Killer', 'King', 'Destroyer']
    }
  }
}
</script>

<style scoped>
section {
  display: none;
  background: #EEE;
}

section div.inner {
  padding: 0;
  padding-top: 4vh;
}

section div.inner h2 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

div.professions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem
}

div.professions a.page-link {
  width: 40%;
}

@media (max-width: 615px) {

  section {
    display: block;
  }
}
</style>
