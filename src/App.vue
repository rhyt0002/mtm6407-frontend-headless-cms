<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';

// Search Query State
const searchQuery = ref('');
</script>

<template>
  <div>
    <!-- Header with Navbar -->
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/reviews">Reviews</router-link></li>
        </ul>
        <!-- Search Box -->
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search reviews..." 
          @input="handleSearch" 
        />
      </nav>
    </header>

    <!-- Router View -->
    <Suspense>
      <template #default>
        <RouterView :searchQuery="searchQuery" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
header {
  background-color: #007BFF; 
  padding: 1rem;
  border-bottom: 2px solid #004085;
  animation: fadeIn 1s ease-in-out;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: white;
  font-size: 1.2rem;
}
nav ul li {
  display: inline;
}
nav ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}
nav ul li a:hover {
  color: #FFC107; 
}
input[type="text"] {
  margin-left: auto;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}
input[type="text"]:focus {
  border-color: #007BFF;
  outline: none;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
