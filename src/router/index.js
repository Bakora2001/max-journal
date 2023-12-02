// index.js//router
import { createRouter, createWebHistory } from 'vue-router'
import mainDiary from '../components/mainDiary.vue'
import ListEntries from '../components/ListEntries.vue';

const routes = [
    {
        path: '/entries-list',
        name: 'diaryList',
        component: mainDiary
    },
    {
        path: '/view-entries',
        name: 'viewEntries',
        component: ListEntries
    },
]

const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router