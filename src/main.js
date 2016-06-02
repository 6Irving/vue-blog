'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import App from './components/app.vue'
import routerMap from './router.js'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueValidator);

// 实例化VueRouter
var router = new VueRouter({
	hashbang: true,
	history: true,
	saveScrollPosition: true,
	transitionOnLoad: true
});

// router.beforeEach(transition => {

// });

routerMap(router);

router.start(App, '#app');