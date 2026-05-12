import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ServicesPage from '@/components/ServicesPage.vue';
import AdminLogin from '@/components/AdminLogin.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import ContactPage from '@/components/ContactPage.vue';
import ReviewsPage from '@/components/ReviewsPage.vue';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/admin/login');
      }
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
	{
		path: '/reviews',
    name: 'Reviews',
    component: ReviewsPage
	}
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  
  scrollBehavior(to, from, savedPosition) {
    
    if (savedPosition) {
      return savedPosition;
    }

    // При обычном переходе — всегда прокручиваем вверх
    return {
      top: 0,
      behavior: 'smooth'   
    };
  }
  
});

export default router;