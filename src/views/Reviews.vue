<script setup>
import { ALL_REVIEWS_API_URL } from '../utils';
import { RouterLink } from 'vue-router';
import { useFetch } from '@vueuse/core';
import { ref, computed } from 'vue';

// Fetch data safely
const { data } = await useFetch(ALL_REVIEWS_API_URL, {
  fetchOptions: {
    mode: 'no-cors',
  },
}).json();

const reviews = ref(data.value?.data || []);

// Local state for search and sort
const searchQuery = ref('');
const selectedSort = ref('title');

// Filtered and Sorted Reviews
const filteredAndSortedReviews = computed(() => {
  let filtered = [...reviews.value]; // Avoid mutation
  if (searchQuery.value) {
    filtered = filtered.filter(review =>
      review.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return filtered.sort((a, b) =>
    a[selectedSort.value] > b[selectedSort.value] ? 1 : -1
  );
});
</script>

<template>
  <div>
    <h1 class="title">Reviews</h1>

    <!-- Sort Dropdown -->
    <div class="controls">
      <label for="sort">Sort By:</label>
      <select id="sort" v-model="selectedSort">
        <option value="title">Title</option>
        <option value="rating">Rating</option>
      </select>
    </div>

    <!-- Card Container -->
    <div class="card-container">
      <div
        v-for="review in filteredAndSortedReviews"
        :key="review.documentId"
        class="card"
      >
        <RouterLink :to="`/reviews/${review.documentId}`">
          <h2>{{ review.title }}</h2>
          <p>{{ review.description }}</p>
          <h3>Rating: {{ review.rating }}</h3>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Layout Adjustments */
.controls {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #343a40;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #fff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
  flex-direction: column;
  justify-content: space-between;

}


.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.card router-link {
  text-decoration: none;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  
}
.card h2 {
  margin: 0 0 0.5rem;
  color: #007BFF;
}
.card p {
  margin: 0 0 0.5rem;
  color: #555;
}
.card h3 {
  margin: 0;
  color: #28a745;
}
.card h2,
.card p,
.card h3 {
  margin: 0;
  color: #343a40;
  animation: fadeInUp 1s ease-out;
}
.title {
  color: #007BFF; /* Title color */
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
