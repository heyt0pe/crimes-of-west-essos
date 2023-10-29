<template>
  <div class="victim-tile">
    <p class="victim-tile__name tile-title">
      {{ fullName }}
    </p>
    <div class="row">
      <div class="victim-tile__detail col">
        <p class="victim-tile__name">
          {{ fullName }}
        </p>
        <span class="victim-tile__region">{{ region }}</span>
      </div>
      <p class="victim-tile__detail">{{ title }}</p>
      <p class="victim-tile__detail">{{ profession }}</p>
    </div>
    <LinkButton text="Read more" />
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue'
export default {
  name: 'VictimTile',
  components: { LinkButton },
  props: {
    fullName: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    readMoreUrl: {
      type: String,
      default: '#'
    },

  },
}
</script>

<style scoped>
div.victim-tile {
  width: 100%;
  display: flex;
  border: 1px solid #BDBDBD;
  margin-bottom: 2.5vh;
  padding: 1.25rem 0;
  justify-content: space-between;
  align-items: center;
}

div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.victim-tile__detail {
  flex: 1;
  font-size: 0.875rem;
  height: fit-content;
  padding: 0.45rem 0;
  padding-left: 1.55vw;
  margin: 0;
}

.victim-tile__detail:nth-child(2) {
  border-left: 1px solid black;
  border-right: 1px solid black;
}

p.tile-title {
  display: none;
}

p.victim-tile__name {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

a.link-button {
  position: relative;
  width: calc(100% / 4);
  left: 1px;
}

@media (max-width: 599px) {

  div.victim-tile {
    flex-direction: column;
    padding-bottom: 0;
  }

  div.row {
    padding-block: 1.5rem;
  }

  .victim-tile__detail {
    text-align: center;
    padding: 0 0.5rem;
  }

  p.victim-tile__name {
    display: none;
  }

  p.victim-tile__name.tile-title {
    display: block;
  }

  a.link-button {
    left: 0;
    top: 1px;
    width: max(40%, 8rem);
    height: calc(var(--button-height) * 0.85);
  }

}
</style>
