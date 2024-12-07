import { createWebHistory, createRouter } from "vue-router";
import Reviews from "../views/Reviews.vue";

const routes = [
    {
        path: "/",
        name: "reviews",
        component: Reviews,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;