import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/login',
        name: 'login-page',
        meta : {guest: true},
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/LoginView.vue')
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
                component: () => import(/* webpackChunkName: "FacturasView" */ '../views/HomeView.vue'),
            },
            {
                path: 'facturas',
                name: 'facturas-view',
                component: () => import(/* webpackChunkName: "FacturasView" */ '../views/FacturasView.vue'),
            },
            {
                path: 'crear_factura',
                name: 'createfactura',
                component: () => import(/* webpackChunkName: "CreateFacturaView" */ '../views/CreateFacturaView.vue'),
                
            },
            {
                path: 'editar_factura/:id',
                name:'editfactura',
                component: () => import(/* webpackChunkName: "EditFacturaView" */ '../views/EditFacturaView.vue'),
                props: ( route ) => {
                    return {
                        id: route.params.id
                    }
                }
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