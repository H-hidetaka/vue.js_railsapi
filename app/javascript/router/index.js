// router/index.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
