<template>
  <section>
    <div class="inner">
      <div class="overview">
        <img src="../assets/images/crime_map.webp" width="312" height="312" alt="Map of Westoros" class="overview__img">
        <div class="overview__content">
          <h1 class="overview__content-title">Crimes of West of Essos</h1>
          <p class="overview__content-text">
            This is some optional text that can be used to add extra context to a given region of Westoros. It isn't
            required for every region. Lorem ipsum, dolor statibus laboriosam nostrum. Ea consequuntur tempora
            eligendi minima porro. Quas aut repellendus facilis corrupti.
          </p>
          <PageLink text="Read more" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageLink from './PageLink.vue'
export default {
  name: 'PageOverview',
  components: { PageLink }
}
</script>

<style scoped>
section .inner {
  width: min(90%, 60rem);
  margin: 0 auto;
  padding: calc(var(--header-height) + 6vh) 0 0;
}

div.overview {
  display: flex;
  gap: clamp(1.875rem, 4.5vw, 4.375rem);
}

img.overview__img {
  width: 35%;
}

div.overview__content {
  width: 65%;
}

h1.overview__content-title {
  font-size: 2rem;
  margin: 0;
}

p.overview__content-text {
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (max-width: 789px) {

  section .inner {
    padding: calc(var(--header-height) + 3vh) 0 0;
  }

  div.overview {
    flex-direction: column;
  }

  img.overview__img {
    width: min(100%, 20rem);
    margin: auto;
  }

  div.overview__content {
    width: 100%;
  }

}
</style>
