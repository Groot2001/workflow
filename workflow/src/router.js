import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home'
import navigator from './views/navigator'
import deployMonitor from './views/deployMonitor'
import reminder from './views/reminder'
import scriptManager from './views/scriptManager'
import automation from './views/automation'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home'
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
            path: '/deployMonitor',
            component: deployMonitor
        },
        {
            path: '/navigator',
            component: navigator
        },
        {
            path: 'scriptManager',
            component: scriptManager
        },
        {
            path: '/automation',
            component: automation
        }

    ]
})

