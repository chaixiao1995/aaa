<template>
  <div class="box">
    <div class="contentItem login muPanel">
      <div class="login_div" style="margin-top:40px;">
        <div style="display:flex;justify-content:center;">
          <span class="login_span_logo" style="width:34px;height:34px;margin-right:10px;"></span>
          <span class="login_span_company" style="font-size:22px;width:auto;opacity:.75;">施工项目管理平台</span>
        </div>
        <span class="login_span_project" style="font-size:18px;">业务端v1.0.1</span>
      </div>
      <div class="user_name" style="margin-top:30px;">
        <span class="input_group_span">
          <i class="fa fa-user-o fa-fw"></i>
        </span>
        <input type="text" placeholder="请输入工号" id="username" autocomplete="off" v-model="workId">
      </div>
      <div class="user_pwd">
        <span class="input_group_span">
          <i class="fa fa-lock fa-fw"></i>
        </span>
        <input type="password" placeholder="请输入密码" id="password" v-model="pwd">
      </div>
      <div class="btn btn-primary login_button" @click="login()">登 录</div>
    </div>
    <div class="result">
        <p>{{workId}}----------{{pwd}}</p>
    </div>
  </div>
</template>
<script>
import formData from '@/js/axios'
import md5 from 'js-md5';
export default {
    name: 'Test',
    data(){
        return {
            workId: '',
            pwd: ''
        }
    },
    methods:{
        login(){
            var param={
                work_id: this.workId,
                password: md5(this.pwd),
                login_type: 1,
                is_mobile: 1,
            };
            console.log(param,this)
            this.$ajax.post('http://139.196.104.14:21060/users/v1/session',param).then(function(res){
                console.log(res,'返回数据');
                if(res.data.status == 201){
                    this.$router.push({name:'List'});
                }else{
                    console.log(res,'异常情况')
                }
            }.bind(this))
        } 
    }
};
</script>
<style>
    .login_button{
        cursor: pointer;

    }
    .result{
        border: 1px dotted;
        margin: 0 auto;
        width: 50%;
        height: 100px;
    }
</style>

