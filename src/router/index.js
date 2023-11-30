// index.js//router
import { createRouter, createWebHistory } from 'vue-router'
import mainDiary from '../components/mainDiary.vue'


const routes = [
    {
        path: '/entries-list',
        name: 'diaryList',
        component: mainDiary
    },
]
const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router