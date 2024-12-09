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
          <li><router-link to="/Reviews">Home</router-link></li>
                 
        </ul>

      </nav>
    </header>

    <Suspense>
      <template #default>
        <RouterView :searchQuery="searchQuery" />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <!-- Footer -->
    <footer class="footer">
      &copy; 2024
    </footer>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
header {
  background-color: #406799; 
  padding: 1rem;
  border-bottom: 2px solid #004085;
}
nav ul {
  list-style: none;
  display: flex;
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
  font-size: 2.2rem;
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
  width: 50%;
  height: 30px;
}
input[type="text"]:focus {
  border-color: #007BFF;
  outline: none;
}
/* Footer Styles */
.footer {
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  background-color: #406799;
  color: white;
  font-size: 2rem;
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
