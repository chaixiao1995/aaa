<template>
    <div class="login">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import store from '@/js/store'
import api from '@/js/config'
export default {
    name: 'Login',
    data() {
        var validateAccount = (rule, value, callback) => {
            if(value === ''){
                callback(new Error('请输入工号'));
            }else{
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }else{
                callback();
            }
        };
        return {
            ruleForm: {
                account: '',
                pass: ''
            },
            rules: {
                account: [
                    { validator: validateAccount, trigger: 'blur'}
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var param={
                        work_id: this.ruleForm.account,
                        password: this.$md5(this.ruleForm.pass),
                        login_type: 2,
                        is_mobile: 1,
                    };
                    this.$ajax.post(api.doLogin, param).then((res) => {
                        console.log(res,'返回数据');
                        if(res.data.status == 201){
                            this.$message(res.data.msg);
                            sessionStorage.setItem('token',res.data.data.token);
                            store.commit('initUserInfo',res.data.data);
                            this.$router.push({name:'List'});
                        }else{
                            this.$message({
                                message: res.data.msg,
                                type: 'warning'
                            });
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style>
    .login{
        width: 400px;
        margin: 0 auto;
    }
</style>
