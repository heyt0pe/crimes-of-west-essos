<template>
  <section>
    <div class="inner">
      <h2>All the victims of West in Essos</h2>
      <div class="filter">
        <div class="form-input">
          <input v-model='searchValue' @input='searchTextUpdated()' type="text" placeholder='Search'
            aria-label="Search via text">
          <i class="fas fa-magnifying-glass"></i>
        </div>
        <div class="form-input">
          <select v-model="selectedRegion" aria-label="Select region">
            <option value="" disabled selected>Région</option>
            <option v-for='region in allRegions' :key="region" :value="region">{{ region }}</option>
          </select>
          <i class="clear fas fa-xmark" @click="clearSelectedRegion()" v-show="selectedRegion !== ''"></i>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="form-input">
          <select v-model="selectedProfession" aria-label="Select profession">
            <option value="" disabled selected>Profession</option>
            <option v-for='profession in allProfessions' :key="profession" :value="profession">{{ profession }}</option>
          </select>
          <i class="clear fas fa-xmark" @click="clearSelectedProfession()" v-show="selectedProfession !== ''"></i>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <TransitionGroup name="victims" tag="div" class="victims">
        <VictimTile 
          v-for="victim in filteredVictims" 
          :key="victim.id"
          :full-name="`${victim.firstName} ${victim.lastName}`" 
          :profession="victim.profession" 
          :title="victim.title"
          :region="victim.region" 
        />
      </TransitionGroup>
      <h3 class='no-result' v-show="filteredVictims < 1">No victim matched your search</h3>
      <LoadingSpinner v-if="isLoading" />
      <button v-else-if="!endOfPage" @click='loadMore()' class="show-more">
        <span class="link-button__text">Show More</span>
        <i class="fas fa-add"></i>
      </button>
    </div>
  </section>
</template>

<script>
import VictimTile from './VictimTile.vue'
import LoadingSpinner from './LoadingSpinner.vue'

import API from '../api'

export default {
  name: 'AllVictims',
  components: { VictimTile, LoadingSpinner },
  props: {
    victims: {
      type: Array,
      required: true,
    }
  },
  computed: {
    filteredVictims() {
      return this.allVictims.filter((victim) =>
        `${victim.firstName} ${victim.lastName}`.toLowerCase().includes(this.finalSearchValue.toLowerCase()) &&
        victim.region.includes(this.selectedRegion) &&
        victim.profession.includes(this.selectedProfession))
    }
  },
  data() {
    return {
      allVictims: [],
      allRegions: [],
      allProfessions: [],
      selectedRegion: '',
      selectedProfession: '',
      searchValue: '',
      finalSearchValue: '',
      isLoading: false,
      endOfPage: false,
      currentPage: 1,
      timeout: null,
    }
  },
  created() {
    /// extracting all regions and professions
    /// To fill the select dropdowns with.

    /// Doing this here instead of the {showMore} method
    /// because the same set of regions and professions are always returned
    const { allVictims, allRegions, allProfessions } = this.victims.reduce(
      (accumulator, victim) => {
        accumulator.allVictims.push(victim);
        accumulator.allRegions.push(victim.region);
        accumulator.allProfessions.push(victim.profession);
        return accumulator;
      },
      {
        allVictims: [],
        allRegions: [],
        allProfessions: [],
      }
    );
    this.allVictims = allVictims;
    this.allRegions = new Set(allRegions);
    this.allProfessions = new Set(allProfessions);
  },
  methods: {
    clearSelectedProfession() {
      this.selectedProfession = '';
    },
    clearSelectedRegion() {
      this.selectedRegion = '';
    },
    searchTextUpdated() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      const self = this;
      const currentSearchValue = this.searchValue;
      this.timeout = setTimeout(function () {
        self.finalSearchValue = currentSearchValue;
      }, 300);
    },
    async loadMore() {
      this.isLoading = true;
      this.currentPage += 1
      try {
        const response = await API.getVictims({ page: this.currentPage });
        this.endOfPage = this.currentPage >= Math.floor(response.total / 8); //where 8 is the set limit per page
        this.allVictims = [...this.allVictims, ...response.data];
      } catch (error) {
        this.$toasted.error(error);
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
section {
  background: white;
}

section div.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(90%, 50rem);
}

div.filter {
  padding: 4vh 0;
  display: flex;
  width: 100%;
  gap: clamp(1.25rem, 1.875rem, 2.5rem);
  justify-content: space-between;
}

div.form-input {
  border-bottom: 1px solid #C4C4C4;
  width: 100%;
  position: relative;
}

div.form-input::after {
  content: '';
  display: block;
  width: 0%;
  position: relative;
  top: 1px;
  border-bottom: 1px solid var(--primary-red);
  transition: .3s width;
}

div.form-input:focus-within::after {
  width: 100%;
}

div.form-input i {
  position: absolute;
  right: 0;
}

div.form-input i.clear {
  right: 1.5rem;
  cursor: pointer;
  top: 1px;
  padding: 0 0.3rem;
}

div.form-input input,
div.form-input select {
  width: 100%;
  height: 1.51rem;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  padding-bottom: 5px;
  appearance: none;
  color: var(--dark);
}

div.form-input input::placeholder {
  color: var(--dark);
  opacity: 1;
}

div.victims {
  width: 100%;
  position: relative;
}

h3.no-result {
  text-align: center;
}

button.show-more {
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

button.show-more:active {
  position: relative;
  top: 0.5px;
  left: 0.5px;
}

.victims-move,
.victims-enter-active,
.victims-leave-active {
  transition: all .3s;
}

.victims-enter-from,
.victims-leave-to {
  opacity: 0;
  transform: translateY(1.5rem);
}

.victims-leave-active {
  position: absolute;
  opacity: 0;
}


@media (max-width: 615px) {

  section div.inner {
    align-items: flex-start;
  }

  div.filter {
    flex-direction: column;
  }
}
</style>
