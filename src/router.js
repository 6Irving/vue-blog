"use strict"

export default function(router){
	router.map({
 
    // 代码分割，打包多个build文件，按需加载
    // 首页
		'/': {
			component: function(resolve){
				require(['./views/home.vue'], resolve);
			}
		},
		// 登录
		'/login': {
			component: function(resolve){
				require(['./views/login.vue'], resolve);
			}
		},
    	// 注册
	    '/reg': {
	      	component: function(resolve){
	       		require(['./views/reg.vue'], resolve);
	      	}
	    },
	    // 用户主页
	    '/user/:username': {
	    	name: 'userHome',
	    	component: function(resolve){
	       		require(['./views/home.vue'], resolve);
	      	}
	    },
	    // 404
	    '*': {
	    	component: function(resolve){
	       		require(['./views/home.vue'], resolve);
	      	}
	    }
	});
}