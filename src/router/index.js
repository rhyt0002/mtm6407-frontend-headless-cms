import { createRouter, createWebHistory } from 'vue-router';
import Reviews from '../views/Reviews.vue';
import ReviewDetails from '../views/ReviewDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Reviews,
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews, 
  },
  {
    path: '/reviews/:id',
    name: 'review-details',
    component: ReviewDetails,
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
