import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import navigator from './views/navigator'
import deployManager from './views/deployManager'
import reminder from './views/reminder'
import scriptManager from './views/scriptManager'
import automation from './views/automation'
import login from '@/components/login'
import dataManager from './views/dataManager'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/index',
            component: login
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/reminder',
            component: reminder
        },

        {
            path: '/deployManager',
            component: deployManager
        },
        {
            path: '/navigator',
            component: navigator
        },
        {
            path: '/scriptManager',
            component: scriptManager
        },
        {
            path: '/automation',
            component: automation
        },
        {
            path: '/dataManager',
            component: dataManager

        }

    ]
})

