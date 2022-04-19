import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login-page',
        meta : {guest: true},
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/LoginView.vue')
    },
    {
        path: '/register',
        name: 'register-page',
        meta : {guest: true},
        component: () => import(/* webpackChunkName: "RegisterPage" */ '../views/RegisterView.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard-layout',
        meta : {requireAuth: true},
        component: () => import(/* webpackChunkName: "dashboardLayout" */ '../layouts/DashboardLayout.vue'),
        children : [
            {
                path: 'home',
                name: 'home-view',
                component: () => import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue'),
            },
            {
                path: 'tareas',
                name: 'tareas-view',
                component: () => import(/* webpackChunkName: "TasksView" */ '../views/TasksView.vue'),
            },   
        ]
    },
    { 
        path: '/:pathMatch(.*)*',
        redirect: '/login',
        meta : {guest: true},      
    },
    
    
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Guar para redirigir a login en caso de no tener token
router.beforeEach((to, from, next) => {
    if (to.matched.some( (record) => record.meta.requireAuth)) {
        if (!!localStorage.getItem('token')) {
            next();
            return;
        }
        next("/login");
    } else {
        next();    
    }
});

//Guard para redigir al dashboard en caso 
// que acceda al login o register estando loggeado
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (!!localStorage.getItem('token')) {
            next("/dashboard");
            return;
        }
        next();
    } else {
        next();
    }
});
export default router