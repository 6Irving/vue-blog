<template lang="jade">
div.form-horizontal
  fieldset
    validator(name='validation')
      legend 用户注册
      div.form-group
        label.control-label.col-md-2.col-md-offset-2(for='username') 用户名
        div.col-md-3
          input.form-control#username(type='text',name='username',v-model='username',detect-change='off',detect-blur="off",v-validate:username="{required: {rule:true, message:'required your name '},userCheck:{rule:true,message:'the account is exist '}}")
          p.help-block 您的账号名称，用于登录和显示
      div.form-group
        label.control-label.col-md-2.col-md-offset-2(for='password') 密码
        div.col-md-3
          input.form-control#password(type='password',name='password',v-model='password',detect-change='off',detect-blur="off",v-validate:password="{required:{rule: true, message:'required your password '},minlength:{rule:6,message:'your password is too short '}}")
      div.form-group
        label.control-label.col-md-2.col-md-offset-2(for='username-repeat') 重复密码
        div.col-md-3
          input.form-control#password-repeat(type='password',name='password-repeat',,detect-change='off',detect-blur="off",v-validate:confirm="{required:{rule:true,message:'required you confirm password '},confirm:{rule:password,message:'your confirm password incorrect '}}")
      div.errors.col-md-4.col-md-offset-4(v-if='$validation.touched')
        validator-errors(:validation="$validation")
      br
      div
        button#regBtn.btn.btn-primary.col-md-offset-5(novalidate @click="register") 注册 
</template>
<script>
    import { addUser,setOnlineUser } from '../vuex/actions.js'
    import { getUserList } from '../vuex/getters.js'

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
        vuex: {
            actions:{
                addUser, setOnlineUser
            },
            getters:{
              userlist: getUserList
            }
        },
        validators: {
          confirm: function(val,target){
            return val === target
          },
          userCheck: function(val){
            return this.vm.userlist.every(function(element,index,array){
              return element.username != val
            });
          }
        },
        methods: {
          register: function(e){
            
            this.$validate(true);
            
            if(this.$validation.valid){
              addUser(this.$store,this.user);
              setOnlineUser(this.$store,this.user);
              this.$router.go({ name: 'userHome', params:{username: this.username}});
            }
            
          }
        }
        
    }
</script>