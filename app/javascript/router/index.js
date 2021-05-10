import Vue from 'vue'
import Router from 'vue-router'

import TopIndex from "../pages/top/index";
import TaskIndex from "../pages/task/index";

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: TopIndex,
            name: "TopIndex,"
        },
        {
            path: "/tasks",
            component: TaskIndex,
            name: "TopIndex",

        },
        {
            path: "/",
            component: TopIndex,
            name: "TopIndex",

        },
        {
            path: "/",
            component: TopIndex,
            name: "TaskIndex",
        },
    ],
})
// export default {
//   beforeRouteEnter(to, from, next) {
//     next(vm => {
//       vm.initialize(); // 初期化処理
//       next();
//     });
//   },
//   methods: {
//     initialize() {
//         // 初期化処理
//     },
//   },
// };

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index,
            name: 'index',
        },
        {
            path: '/tasks',
            component: Top,
            name: 'task',
        }
    ]
})

export default router
