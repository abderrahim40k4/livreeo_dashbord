import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/Login.vue'
import Layout from "../layouts/layout.vue";

import Statics from "../views/Statics.vue";
import Comonds from "../views/comonds.vue"
import Prodact from "../views/prodact.vue";
import Category from "../views/catigory.vue";
import Fourniture from "../views/fournitures.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
          {
            path: '/',
            name: 'home',
            component:Login
          },
          {
            path: '/statics',
            name: 'statics',
            meta:{layout: Layout},
            component:Statics
          },
          {
            path: '/comonds',
            name: 'comonds',
            meta:{layout: Layout},
            component: Comonds
          },
          {
            path: '/prodact',
            name: 'prodact',
            meta:{layout: Layout},
            component: Prodact
          },
          {
            path: '/fourniture',
            name: 'fourniture',
            meta:{layout: Layout},
            component: Fourniture
          },
          {
            path: '/category',
            name: 'category',
            meta:{layout: Layout},
            component: Category
          },
    ]
  })
  
export default router;