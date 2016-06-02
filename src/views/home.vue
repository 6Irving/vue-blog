<template lang="jade">
div(v-if="onlineUser.username==''")
  div.jumbotron
    h1 欢迎来到 Microblog
    p Microblog 是一个基于 vuejs/webpack 的微博系统.
    p
      a.btn.btn-primary.btn-lg.space(v-link="'/login'") 登录
      a.btn.btn-default.btn-lg(v-link="'/reg'") 立即注册
  div#content
    div.row
      div.col-sm-6.col-md-4
        div.thumbnail
          div.caption
            h3.bold James 说
          p Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            p
              a.btn.btn-primary.space(href='#',role='button') 转发
              a.btn.btn-default(href='#',role='button') 评论
      div.col-sm-6.col-md-4
        div.thumbnail
          div.caption
            h3.bold Kobe 说
            p Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            p
              a.btn.btn-primary.space(href='#',role='button') 转发
              a.btn.btn-default(href='#',role='button') 评论
      div.col-sm-6.col-md-4
        div.thumbnail
          div.caption
            h3.bold Wade 说
            p Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            p
              a.btn.btn-primary(href='#',role='button') 转发
              a.btn.btn-default(href='#',role='button') 评论
div(v-else)
  div.well.form-inline.col-md-10.col-md-offset-1
    input#inputStyle.form-control.col-md-3(type='text',v-model='text')
    button.btn.btn-success(@click='posting')
      span.icon-comment.icon-white 发表微博
  div.container-fluid
    div.col-sm-6.col-md-4(v-for="item in postsList" track-by='$index')
          div.thumbnail
            div.caption
              h3.bold {{item.username}} 说
              p {{item.text}}
              p
                a.btn.btn-primary.space(href='#',role='button') 转发
                a.btn.btn-default(href='#',role='button') 评论 
</template>

<script>

    import { getOnlineUser, getPostList } from '../vuex/getters.js'
    import { addPost } from '../vuex/actions.js'

    export default{
        data(){
            return{
                text:'',
                username: ''
            }
        },
        vuex:{
            getters:{
                onlineUser: getOnlineUser,
                postsList: getPostList
            },
            actions:{
                addPost
            }
        },
        computed: {
            post: function(){
                return {
                    username : this.onlineUser.username,
                    text : this.text
                }
            }
        },
        methods:{
            posting: function(){
                if(this.post.text==''){
                    alert('微博内容不能为空！');
                }else{
                    addPost(this.$store,this.post);
                }
            }
        }
    }
</script>