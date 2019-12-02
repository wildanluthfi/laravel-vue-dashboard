import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from './layout/DashboardLayout'
import AuthLayout from './layout/AuthLayout'
Vue.use(VueRouter)

const router = new VueRouter({
    linkExactActiveClass: 'active',
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     component: () => import('./views/Home.vue'),
        //     meta: {auth: undefined}
        // },
        {
            path: '/',
            redirect: 'dashboard',
            component: DashboardLayout,
            children: [
                {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue'),
                meta: {auth: true}
                },
                {
                path: '/listening',
                name: 'listening',
                component: () => import(/* webpackChunkName: "demo" */ './views/Listening.vue'),
                meta: {auth: true}
                },
                {
                path: '/structure',
                name: 'structure',
                component: () => import(/* webpackChunkName: "demo" */ './views/Structure.vue'),
                meta: {auth: true}
                },
                {
                path: '/written-expression',
                name: 'written expression',
                component: () => import(/* webpackChunkName: "demo" */ './views/WrittenExpression.vue'),
                meta: {auth: true}
                },
                {
                path: '/reading',
                name: 'reading',
                component: () => import(/* webpackChunkName: "demo" */ './views/Reading.vue'),
                meta: {auth: true}
                }
            ],
            meta: {auth: true}
        },
        {
            path: '/',
            redirect: 'login',
            component: AuthLayout,
            children: [
                {
                path: '/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue'),
                meta: {auth: false}
                },
                {
                path: '/register',
                name: 'register',
                component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue'),
                meta: {auth: false}
                }
            ]
        }
    ]
});

export default router;