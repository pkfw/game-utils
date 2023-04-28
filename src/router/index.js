import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        icon: "mdi-home-circle",
    },
    {
        path: "/about",
        name: "about",
        icon: "mdi-account-multiple",
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/todoList",
        name: "todoList",
        icon: "mdi-star",
        component: () => import(/* webpackChunkName: "about" */ "../views/TodoListView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
