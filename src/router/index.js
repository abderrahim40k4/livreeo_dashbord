import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/Login.vue'
import Layout from "../layouts/layout.vue";

import Statics from "../views/Statics.vue";
import Comonds from "../views/comonds.vue"
import Prodact from "../views/prodact.vue";
import Category from "../views/catigory.vue";
import Fourniture from "../views/fournitures.vue";
import AddFourniture from "../views/addFourniture.vue";
import BookList from "../views/bookList.vue"
import AddPack from "../views/addPack.vue"
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
            path: '/add-fornitur',
            name: 'add-fourniture',
            meta:{layout: Layout},
            component: AddFourniture
          },
          {
            path: '/category',
            name: 'category',
            meta:{layout: Layout},
            component: Category
          },
          {
            path: '/list-book',
            name: 'list-book',
            meta:{layout: Layout},
            component:BookList
          },
          {
            path: '/add-pack',
            name: 'add-pack',
            meta:{layout: Layout},
            component:AddPack
          },
          {
            path: '/add-pack',
            name: 'add-pack',
            meta:{layout: Layout},
            component:AddPack
          },
    ]
  })
  
export default router;