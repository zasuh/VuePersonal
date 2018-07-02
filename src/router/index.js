import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import Technologies from '@/components/Technologies'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/Technologies',
      name: 'Technologies',
      component: Technologies
    }
  ],
  mode: 'history'
})
