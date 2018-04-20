<!--用户注册-->
<style lang="less" scoped>
.register-page {
    .container-fluid {
        .content {
            .page-title {
                width: 100%;
                border-bottom:1px solid rgba(0,0,0,0.2);
                overflow: hidden;
                .title{
                    display: block;
                    float: left;
                    width:10%;
                    min-width: 110px;
                    margin-left:25%;
                    text-align: left;
                    font-size: 24px;
                    color: #333;
                    line-height:45px;
                }
                .link{
                    display: block;
                    line-height:45px;
                    float: right;
                    margin-right:25%;
                    width:5%;
                    min-width: 30px;
                    text-decoration:none;
                }
            }
            
            .page-content {
                clear: both;
                width: 60%;
                overflow: hidden;
                margin: 1rem auto;
                padding-top:10px;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 3px;
                .content-info{
                    float: left;
                    width: 30%;
                    min-width:300px;
                    margin-right:50px;
                    border-right:2px dotted rgba(0,0,0,0.3);
                    .info-table{
                        list-style: none;
                        .option{
                            line-height:25px;
                            margin: 60px 5px;
                            overflow: hidden;
                            .lf{
                                float: left;
                                width: 32px;
                                height: 32px;
                                margin-top:10px;
                                background:url(../../assets/icon/icon_lr.png) no-repeat;
                                background-position: 0 0 ;
                            }
                            .lr{
                                float: left;
                                margin-left:30px;
                                p{
                                    text-align: left;
                                    margin: 0;
                                }
                            }
                            .lf-one{
                                background-position: 0 -35px ;
                            }
                            .lf-two{
                                background-position: 0 -70px ;
                            }
                            .lf-three{
                                background-position: 0 -105px ;
                            }
                            .lf-four{
                                background-position: 0 -140px ;
                            }
                        }
                    }
                }
                .content-form {
                    float: left;
                    width: 55%;
                    text-align: left;
                    .login{
                        text-align: center;
                        .jump{
                            color:#ff6000;
                            padding-right:20px;
                            cursor: pointer;
                            background:url(../../assets/icon/icon_go.png) right center no-repeat;
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.register-page {
    .el-form-item__label {
        padding: 0;
    }
    .el-button--primary {
        width: 100%;
    }
    .item-inline {
        .el-form-item__content {
            width: 100%;
            .el-input {
                width: 68%;
                min-width: 200px;
            }
        }
        .item-btn {
            display: inline-block;
            width: 30%;
            min-width: 100px;
            color:#ff6000;
            background-color:rgba(255,232,205,0.3);
            border-color: #ffb865;
            &:hover{
                background-color:rgba(255,232,205,0.9);
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
    .item-submit{
        margin-top:1rem;
        .el-button--primary {
            background-color: rgba(255, 140, 0, 0.9);
            border-color: rgba(255, 140, 0, 1);
            &:hover{
                background-color: rgba(	255,69,0, 0.8);
            }
        }
    }
}
</style>


<template>
    <div class="register-page">
        <div class="container-fluid">
            <div class="content">
                <div class="page-title">
                    <span class="title">欢迎登录</span>
                    <a class="link" href="index.html">首页</a>
                </div>
                <div class="page-content">
                    <div class="content-info">
                        <ul class="info-table">
                            <li class="option">
                                <label class="lf lf-one"></label>
                                <div class="lr">
                                    <p>便捷的简历填写</p>
                                    <p>一份简历开启未来</p>
                                </div>
                            </li>
                            <li class="option">
                                <label class="lf lf-two"></label>
                                <div class="lr">
                                    <p>海量的职位优选</p>
                                    <p>360行任你挑选</p>
                                </div>
                            </li>
                            <li class="option">
                                <label class="lf lf-three"></label>
                                <div class="lr">
                                    <p>快速的职位投递</p>
                                    <p>分秒必争直达HR</p>
                                </div>
                            </li>
                            <li class="option">
                                <label class="lf lf-four"></label>
                                <div class="lr">
                                    <p>高效的投递反馈</p>
                                    <p>谁看我简历早知道</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="content-form">
                        <el-form ref="form" :model="form"  status-icon :rules="formRules" label-width="80px" label-position="top">
                            <el-form-item label="帐号" prop="phoneNumber">
                                <el-input v-model="form.phoneNumber" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                            </el-form-item>
                            <el-form-item label="图形验证码" class="item-inline" prop="captcha">
                                <el-input v-model="form.captcha"  placeholder="请输入验证码，点击图片可刷新"></el-input>
                                <div class="item-code" @click="verificationCode">{{randomNumber}} </div>
                            </el-form-item>
                            <el-form-item class="item-submit">
                                <el-button type="primary" @click="login('form')">登录</el-button>
                            </el-form-item>
                        </el-form>
                        <div class="login">
                            <p>还没有玉龙招聘帐号，<span class="jump" @click="jump">马上注册</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {accountLogin} from '../../api'
export default {
    data() {
        var phoneNumberPass = (rule, value, callback) => {  //电话校验
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else {
                if (this.form.phoneNumber !== '') {
                   let reg=/^[1][3,4,5,7,8][0-9]{9}$/;  
                    if (!reg.test(value)) {  
                        callback(new Error('请输入正确的手机号'));
                    }else{
                        callback();  
                    }
                } 
            }
        };
        var passwordPass = (rule, value, callback) => {  //密码校验
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.form.password !== '') {
                    let reg = /^[A-Za-z0-9]{6,16}$/;
                    if (!reg.test(value)) {  
                        callback(new Error('请输入正确的密码，6到16位的数字字母组合,不能使用特殊符号！'));
                    } else {  
                        let regOther = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
                        if (!regOther.test(value)) {  
                            callback(new Error('请输入正确的密码，6到16位的数字字母组合，至少一个数字或者字母！'));
                        } else {  
                            callback();  
                        } 
                    } 
                }
            }
        };
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
            form: {
                phoneNumber: '',
                password: '',
                captcha: '',
            },
            formRules:{
                phoneNumber: [
                    { validator: phoneNumberPass, trigger: 'blur' }
                ],
                password: [
                    { validator: passwordPass, trigger: 'blur' }
                ],
                captcha: [
                    { validator: captchaPass, trigger: 'blur' }
                ]
            },
            randomNumber:"232434",
        }
    },
    methods: {
        //随机验证码
        verificationCode() {
            var randomNumber = "";
            for (var i = 0; i < 5; i++) {
                randomNumber += Math.floor(Math.random() * 10);
            }
           this.randomNumber = randomNumber;
        },
        //登录
        login(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let params = {
                        phoneNumber:'',
                        password:''
                    };
                    params.phoneNumber = this.form.phoneNumber;
                    params.password = this.form.password;
                    accountLogin(params).then(res=>{
                        let data = res.data.data;
                        if(res.data.status){
                            localStorage.setItem("userName", data.name);
					        localStorage.setItem("id",data.id);
                            window.location.href = 'index.html';
                        }else{
                            alert(res.data.message);
                        }
                    });
                } else {
                    return false;
                }
            });
        },
        jump(){
             this.$router.push("/");
        }
    },
    mounted(){
        this.verificationCode();
    }
}
</script>
