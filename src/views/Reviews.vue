<script setup>
import { ALL_REVIEWS_API_URL } from '../utils';
import { RouterLink } from 'vue-router';
import { useFetch } from '@vueuse/core';

const { isFetching, data } = await useFetch(ALL_REVIEWS_API_URL, {
fetchOptions: {
    mode: 'no-cors',
},
}).json();

const review = data.value;


</script>

<template>
    <h1>Reviews</h1>
    <ul>
       <li v-for="review in review.data"> 
       <RouterLink :to="`/reviews/${review.documentId}`">
        <h2>{{ review.title }}</h2>
        <p>{{ review.description }}</p>
        <h3>{{ review.rating }}</h3>
        </RouterLink>
        </li>
    </ul>
</template>