import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            redirect: '/login',
            component: './view/login'
        },
        {
            path: '/index',
            component: './view/index',
            children: [
                {
                    path: '/index/indexhoder',
                    component: './components/indexhoder.vue',
                },
                {
                    path: '/index/HelloWorld',
                    component: './components/HelloWorld.vue',
                }
            ]
        }
        
    ]
})