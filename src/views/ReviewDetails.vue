<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const review = ref(null);
const isFetching = ref(true);
const error = ref(null);

const fetchReviewDetails = async () => {
  try {
    const response = await fetch(`https://mtm6407-headless-cms-6368.onrender.com/api/Posts/${route.params.id}?populate=image`);
    const data = await response.json();

    console.log('Fetched review data:', data);

    if (!data || !data.data) {
      throw new Error('Review not found');
    }

    review.value = data.data;
    
  } catch (err) {
    console.error(err);
    error.value = 'Failed to load review details.';
  } finally {
    isFetching.value = false;
  }
};

onMounted(fetchReviewDetails);
</script>

<template>
  <div>
    <div v-if="isFetching">Loading review details...</div>

    <div v-else-if="error">{{ error }}</div>

    <div v-else-if="review">
      <h2>{{ review.title }}</h2>
      <p>{{ review.description }}</p>
      <h3>Rating: {{ review.rating }}<span>/10</span><span>🌟</span></h3>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: brown;
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  color: #c69379;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

h3 {
  color: #28a745;
  font-size: 1.2rem;
}

div {
  padding: 2rem;
}

div.v-else-if {
  text-align: center;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
    display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
