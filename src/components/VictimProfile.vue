<template>
  <div class="card">
    <div class="card__header">
      <img :src="imageUrl" :alt="`picture of ${fullName}`" width='60' height='60' class="card__header-img">
      <div class="text-col">
        <p class="card__header-name">{{ fullName }}</p>
        <p class="card__header-title">{{ title }}</p>
      </div>
    </div>
    <p class="card__bio">{{ bio }}</p>
    <div v-if='targeted.length > 0' class="also-targeted">
      <p>Also targeted :</p>
      <ul>
        <li v-for="(target, index) in targeted" :key="index">
          <a :href="target.profileUrl">
            <i class="fas fa-arrow-right-long"></i>
            <span class="target__link">{{ target.fullName }}</span>
            <span> - {{ target.relationship }}</span>
          </a>
        </li>
      </ul>
    </div>
    <LinkButton text="Read more" />
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue'
export default {
  name: 'VictimProfile',
  components: { LinkButton },
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: 'Lorem, ipsum dolor sit amet consec tetur adipi sicing elit. Possimus hsu yegs lib.',
    },
    targeted: {
      type: Array,
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
div.card {
  width: max(calc(25% - 1.375rem), 16.625rem);
  background: white;
  padding: clamp(1.25rem, 1.56rem, 1.875rem);
  padding-bottom: calc(1.25rem + var(--button-height));
  position: relative;
}

div.card__header {
  display: flex;
  align-items: flex-end;
  gap: 5%;
}

img.card__header-img {
  width: min(3.75rem, 28%);
  border-radius: 50%;
}

div.text-col {
  min-height: 2.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p.card__header-name {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

p.card__header-title {
  margin: 0;
  font-size: 0.75rem;
  color: #9B9B9B;
}

p.card__bio {
  font-size: 0.85rem;
}

div.also-targeted p {
  font-size: 0.85rem;
  font-weight: 600;
}

ul {
  padding-left: 0;
}

ul li {
  display: flex;
  align-items: center;
}

ul li i {
  font-size: 0.5rem;
  margin-right: 0.65rem;
}

ul li a {
  font-size: 0.85rem;
  text-decoration: none;
  color: black;
}

ul li a:hover span.target__link {
  color: var(--link-blue);
  text-decoration: underline;

}

a.link-button {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media (max-width: 615px) {
  div.card {
    width: min(25rem, 100%);
  }
}
</style>
