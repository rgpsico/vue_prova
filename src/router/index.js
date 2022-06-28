import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Todos from '@/views/Todos/Todos.vue'
import addTodo from '@/views/Todos/AddTodo.vue'
import editTodo from '@/views/Todos/EditTodo.vue'
import Cadastrar from '@/views/Todos/Cadastrar'
import guard from '../services/middleware.js'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path:'/todos',
  name: 'todos.index',
  component: Todos,
  beforeEnter: guard.auth
  },
  {
    path:'/todos/cadastrar',
    name: 'todos.cadastrar',
    component: Cadastrar,
   
    }
  ,
  {
  path:'/todos/create',
  name: 'todos.create',
  component: addTodo,
  beforeEnter: guard.auth
  }
  ,
  {
  path:'/todos/:id/edit',
  name: 'todos.edit',
  component: editTodo,
  props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
