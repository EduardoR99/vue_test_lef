import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import QuestionView from '../views/QuestionView.vue' // Importe a nova vista de pergunta

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/question/:id', // Defina um parâmetro de rota dinâmica ":id"
      name: 'question',
      component: QuestionView
    }
  ]
})

export default router
