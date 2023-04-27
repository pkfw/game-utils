import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        asset: "/src/assets/img/icon/folder.png",
    },
    {
        path: "/about",
        name: "about",
        asset: "mdi-account-multiple",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/todoList",
        name: "todoList",
        asset: "mdi-star",
        component: () => import(/* webpackChunkName: "about" */ "../views/TodoListView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
