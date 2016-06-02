<template lang="jade">
nav.navbar.navbar-fixed-top.navbar-inverse
  div.container-fluid
    div.navbar-header
      button.navbar-toggle.collapsed(type='button',data-toggle='collapse',data-target='.#bs-example-navbar-collapse-1',aria-expanded='false')
        span.sr-only Toggle navigation
        span.icon-bar 
        span.icon-bar 
        span.icon-bar
      a.navbar-brand(v-link="'/'") Microblog
    div.collapse.navbar-collapse#bs-example-navbar-collapse-1
      ul.nav.navbar-nav
        li.active
          a(v-link="'/'") 首页
            span.sr-only (current)
          li(v-if="onlineUser.username==''")
            a(v-link="'/login'") 登录
          li(v-if="onlineUser.username==''")
            a(v-link="'/reg'") 注册
          li(v-else)
            a(@click='logout') 退出
</template>
<script>
    import { getOnlineUser } from '../vuex/getters.js'
    import { setOnlineUser } from '../vuex/actions.js'

    export default{
        vuex:{
            getters:{
                onlineUser: getOnlineUser
            },
            actions:{
                setOnlineUser
            }
        },
        methods:{
            logout: function(){
                let user = {
                    username: '',
                    password: ''
                };
                setOnlineUser(this.$store, user);
                this.$router.go('/');
            }
        }
    }
</script>
