import { createRouter, createWebHashHistory } from "vue-router";
import LayOut from "@/views/layout/LayOut.vue";
const routes = [
    {
        path: "/",
        name: "lay",
        component: LayOut,
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
            },
            {
                path: "/about",
                name: "about",
                component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
            },
            {
                path: "/fen",
                name: "fen",
                component: () => import(/* webpackChunkName: "about" */ "../views/FenXiao.vue"),
            },
            {
                path: "/car",
                name: "car",
                component: () => import(/* webpackChunkName: "about" */ "../views/MyCar.vue"),
            },
            {
                path: "/mine",
                name: "mine",
                component: () => import(/* webpackChunkName: "about" */ "../views/MineView.vue"),
            },
        ]
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map