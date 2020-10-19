import Vue from 'vue'
import VueRouter from 'vue-router'
import Service from './axios'
import Store from './store'
Vue.use(VueRouter);

const routes = [
    { path: '/login', name: 'Login', component: () => import('../views/Login')},
    { path: '/', component: () => import('../views/Dashboard'), meta: {requiresAuth: true},
        children: [
            { path: 'usuarios', name: 'Dashboard.User', component: () => import('../views/Dashboard/User'), meta: {requiresAuth: true} },
            { path: 'carros', name: 'Dashboard.Car', component: () => import('../views/Dashboard/Car'), meta: {requiresAuth: true} },
            { path: '*',  name: 'Dashboard.Erro', component: () => import('../views/Dashboard/404'), meta: {requiresAuth: true} }
        ]
    },
];

// base: "/systemusercar/",
// mode: 'history',
const Router = new VueRouter({
    routes
});

Router.beforeEach((to, from, next) => {
    if(['/'].includes(to.path)){
        next({ name: 'Dashboard.User' })
    }
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if(requiresAuth) {
        if (Store.state.token) {
            if (to.path == "/carros"){
                Service.defaults.headers.Authorization = `${Store.state.token}`
            }
            next()
        } else {
            // Service.defaults.headers.Authorization = null
            next({ name: 'Login' })
        }
    } else {
        if (Store.state.token) {
            next({ name: 'Dashboard.User' })
        } else {
            next()
        }
    }
});

export default Router