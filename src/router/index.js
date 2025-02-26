import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobsView from '../views/JobsView.vue';
import JobsAdd from '../views/JobsAdd.vue';
import NotFoundView from '../views/NotFoundView.vue';
import JobView from '../views/JobView.vue';
import EditJob from '../views/EditJob.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/jobs', component: JobsView },
  { path: '/jobs/add', component: JobsAdd },
  { path: '/job/edit/:id', component: EditJob },
  { path: '/:catchAll(.*)', 
    component: NotFoundView, 
    name: 'not-found'
    },
  { path: '/job/:id', 
    component: JobView, 
    name: 'JobView'
    },
];

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes
});

export default router;