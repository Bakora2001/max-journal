// index.js//router
import { createRouter, createWebHistory } from 'vue-router'
import mainDiary from '../components/mainDiary.vue'
import listEntry from '../components/listEntry.vue'

const routes = [
    {
        path: '/entries-list',
        name: 'diaryList',
        component: mainDiary
    },

    {
        path: '/diary-list',
        name: 'listentry',
        component: listEntry
    },
]
const router = createRouter ({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router