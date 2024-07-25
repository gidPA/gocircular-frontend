import { createRouter, createWebHistory } from 'vue-router';
import LoginDisplay from '../views/LoginDisplay.vue';
import LoggedIn from '../views/LoggedIn.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LoginDisplay             
        },
        {
            path: '/dashboard',
            component: LoggedIn
        }
    ],
})

export default router;