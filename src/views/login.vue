<template lang="jade">
div.form-horizontal
  fieldset
    validator(name='validation')
      legend 用户登录
      div.form-group
        label.control-label.col-md-2.col-md-offset-2(for='username') 用户名
        div.col-md-3
          input.form-control#username(type='text',name='username',v-model='username',detect-change='off',detect-blur="off",v-validate:username="{required: {rule:true, message:'required your name '},userCheck:{rule:password,message:'the account or password is incorrect '}}")
      div.form-group
        label.control-label.col-md-2.col-md-offset-2(for='password') 密码
        div.col-md-3
          input.form-control.col-md-3#password(type='password',name='password',v-model='password',detect-change='off',detect-blur="off",v-validate:password="{required:{rule: true, message:'required your password '}}")
      div.errors.col-md-4.col-md-offset-4(v-if='$validation.touched')
        validator-errors(:validation="$validation")
      div.form-group
        button.btn.btn-primary.col-md-offset-5(@click="logining") 登录
</template>

<script>
    import { getUserList } from '../vuex/getters.js'
    import { setOnlineUser } from '../vuex/actions.js'

    export default {
        data () {
          return {
            username:'',
            password:''
          }
        },
        computed: {
          user: function(){
            return {
              username: this.username,
              password: this.password,
            }
          }
        },
        methods: {
          logining: function(e){
            this.$validate(true);
            if(this.$validation.valid){
              setOnlineUser(this.$store,this.user);
              this.$router.go({ name: 'userHome', params:{username: this.username}});
            }
          }
        },
        validators: {
          userCheck: function(val,target){
            return this.vm.userlist.some(function(element,index,array){
              return element.username == val && element.password == target
            });
          }
        },
        vuex: {
            getters: {
                userlist: getUserList
            },
            actions:{
                setOnlineUser
            }
        }
    }
</script>