import { createRouter, createWebHistory } from "vue-router";

import loginPage from '../components/login/login.vue'
import signupPage from '../components/signup/signup.vue'



const routes = [
    {
      path: '/',
      name: 'login',
      component: loginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: signupPage
    },
    
      
  
    
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router