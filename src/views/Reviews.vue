<script setup>
import { ALL_REVIEWS_API_URL } from "../utils";
import { RouterLink } from "vue-router";
import { useFetch } from "@vueuse/core";
import { ref, computed } from "vue";

// Fetch data safely
const { data } = await useFetch(ALL_REVIEWS_API_URL, {
  fetchOptions: {
    mode: "no-cors",
  },
}).json();

const reviews = ref(data.value?.data || []);

// Local state for search and sort
const searchQuery = ref("");
const selectedSort = ref("title");

// Filtered and Sorted Reviews
const filteredAndSortedReviews = computed(() => {
  let filtered = [...reviews.value]; // Avoid mutation
  if (searchQuery.value.trim()) {
    filtered = filtered.filter((review) =>
      review.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return filtered.sort((a, b) =>
    a[selectedSort.value]?.localeCompare(b[selectedSort.value])
  );
});
</script>

<template>
  <div>
    <h1 class="title">Reviews</h1>
    <div class="search-sort">
      <!-- Search Bar -->
      <div class="controls">
        <label for="search">Search:</label>
        <input
          id="search"
          type="text"
          v-model="searchQuery"
          placeholder="Search reviews..."
          class="search-input"
        />
      </div>
    </div>

    <!-- Titles Container -->
    <div class="titles-container">
      <div v-if="filteredAndSortedReviews.length">
        <div
          v-for="review in filteredAndSortedReviews"
          :key="review.documentId"
          class="title-item"
        >
          <RouterLink :to="`/reviews/${review.documentId}`">
            <h2>{{ review.title }}</h2>
          </RouterLink>
        </div>
      </div>
      <p v-else class="no-results">
        No reviews found. Please adjust your search.
      </p>
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
  font-size: 1.8rem;
}
.search-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;
}

.titles-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  
}

.title-item {
  display: flex;
  justify-content: center;
  text-align: center;
}

.title-item a {
  display: flex;
  text-decoration: none;
  color: #c69379;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  border: 1px solid #c69379;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;
}

.title-item a:hover {
  color: brown;
}
.search-sort {
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  margin-bottom: 1rem;
  
}

/* General Styling */
.title {
  color: brown; 
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}
</style>
