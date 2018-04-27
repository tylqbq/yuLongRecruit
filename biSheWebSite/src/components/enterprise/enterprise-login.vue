<!--企业服务-->
<style lang="less" scoped>
@import "../../assets/common.less";
.enterprise-login{
    .container-fluid{
        width: 100%;
        height:100%;
        .login{
            position: relative;
            // overflow: hidden;
            width: 100%;
            height:630px;
            background:url(../../assets/icon/company_login.jpg);
            background-size: 100% 100%;
            .content-form{
                position: relative;
                top:100px;
                left:900px;
                width:500px;
                height: 400px;
                padding:30px 50px;
                background-color:#FFF;
                border:1px solid #fff;
                border-radius:3px;
                box-shadow:0 0 30px #eee;
                .item-inline{
                    .el-form-item__content {
                        width: 100%;
                        .el-input {
                            width: 68%;
                            min-width: 200px;
                        }
                    }
                }
                .item-submit{
                    width: 100%;
                    line-height:30px;
                    margin-top:1rem;
                    .el-button--primary {
                        width: 100%;
                        line-height:40px;
                        background-color: rgba(255, 140, 0, 0.9);
                        border-color: rgba(255, 140, 0, 1);
                        &:hover{
                            background-color: rgba(	255,69,0, 0.8);
                        }
                    }
                }
                .register{
                    margin-top:10px;
                    text-align: center;
                    .jump{
                        color:#ff6000;
                        padding-right:20px;
                        cursor: pointer;
                        background:url(../../assets/icon/icon_go.png) right center no-repeat;
                    }
                }
            }  
            .item-code {
                display: inline-block;
                width: 30%;
                min-width: 100px;
                font-family: Arial;
                font-style: italic;
                font-weight: bold;
                text-align:center;
                border: 0;
                letter-spacing: 2px;
                color: blue;
                border: 1px solid rgba(0, 0, 0, 0.2);
                background:url(../../assets/icon/verfitication-bg.png) no-repeat 100% 100%;
                cursor:pointer;
            } 
        }
    }
}

</style>

<template>
<div class="enterprise-login">
    <div class="container-fluid">
        <div class="login">
            <div class="content-form">
                <el-form ref="form" :model="form"  status-icon :rules="formRules" label-width="80px" label-position="top">
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="form.userName" placeholder="请输入企业账户"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="图形验证码" class="item-inline" prop="captcha">
                        <el-input v-model="form.captcha"  placeholder="请输入验证码，点击图片可刷新"></el-input>
                        <div class="item-code" @click="verificationCode">{{randomNumber}} </div>
                    </el-form-item>
                    <el-form-item class="item-submit">
                        <el-button type="primary" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
                 <div class="register">
                    <p>还没有玉龙招聘帐号，<span class="jump" @click="jumpRegister">马上注册</span></p>
                </div> 
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data(){
      var captchaPass = (rule, value, callback) => { //图形验证码校验
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else {
                if (this.form.captcha !== '') {
                   if(Number(value) != Number(this.randomNumber)){
                       callback(new Error('请输入正确的校验码'));
                   }else{
                       callback();
                   }
                }
            }
        };
      return {
          form:{},
          formRules:{
                userName: [
                    { required: true, message: '请输入企业用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                captcha:[
                    { validator: captchaPass, trigger: 'blur' }
                ]
          },
          randomNumber:''
      }
  },
  methods:{
    verificationCode() {
        var randomNumber = "";
        for (var i = 0; i < 5; i++) {
            randomNumber += Math.floor(Math.random() * 10);
        }
        this.randomNumber = randomNumber;
    },
    jumpRegister(){
        this.$router.push({
            path: 'enterpriseRegister'
        })
    },
    login(){
        this.$refs["form"].validate((valid) => {
            if (valid) {

            } else {
                return false;
            }
        });
    }
  },
  mounted(){
      this.verificationCode();
  }
}
</script>
 