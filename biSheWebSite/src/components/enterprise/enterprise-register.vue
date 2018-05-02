<!--企业注册-->
<style lang="less" scoped>
.enterprise-register{
    width:60%;
    margin:10px auto;
    overflow: hidden;
    border:1px solid #fff;
    border-radius:3px;
    box-shadow:0 0 30px #eee;
    border-top:#5191ce solid 3px;
    .step{
        width:600px;
        margin:20px auto;
    }
    .form{
        width: 500px;
        margin:10px auto;
        .item-inline{
            .el-form-item__content {
                width: 100%;
                .el-input {
                    width: 68%;
                    min-width: 200px;
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
    .upload{
        .up-btn{
            width: 100px;
            height: 25px;
            line-height:25px;
            cursor: pointer;
            background-color:rgba(0,0,0,0.1);
            &:hover{
                background-color:rgba(0,0,0,0.5);
            }
        }
    }

}

</style>

<template>
<div class="enterprise-register">
    <div class="container-fluid">
        <div class="step">
            <div class="s-tool">
            <el-steps :space="200" :active="stepActive" align-center>
                <el-step title="注册"></el-step>
                <el-step title="完善信息"></el-step>
                <el-step title="提交审核"></el-step>
                <el-step title="立即招聘"></el-step>
            </el-steps>
            </div>
        </div>
        <div class="register-form form" v-show="registerBlock">
            <el-form ref="companyUserform" :model="companyUser"  status-icon :rules="formRules" label-width="80px" label-position="top">
                <el-form-item label="会员名" prop="member">
                    <el-input v-model="companyUser.member" placeholder="建议使用公司简称"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="companyUser.userName" placeholder="请输入企业账户"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="companyUser.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="图形验证码" class="item-inline" prop="captcha">
                    <el-input v-model="companyUser.captcha"  placeholder="请输入验证码，点击图片可刷新"></el-input>
                    <div class="item-code" @click="verificationCode">{{randomNumber}} </div>
                </el-form-item>
                <el-form-item class="item-submit">
                    <el-button type="primary" @click="registerNextStep">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="companyInfo-form form" v-show="companyInfoBlock" :inline="true">
            <el-form ref="companyInfoform" :model="company"  status-icon :rules="companyInfoRules" label-width="80px" label-position="top">
                <el-form-item label="公司名称" prop="companyName">
                    <el-input v-model="company.companyName" placeholder="建议使用公司简称"></el-input>
                </el-form-item>
                <el-form-item label="公司类型" prop="companyType">
                    <el-input v-model="company.companyType" placeholder="请输入企业账户"></el-input>
                </el-form-item>
                <el-form-item label="公司规模" prop="staffNumber">
                    <el-input v-model="company.staffNumber" placeholder="请选择"></el-input>
                </el-form-item>
                <el-form-item label="业务范围" prop="companyBusiness">
                    <el-input v-model="company.companyBusiness" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="公司地址" prop="companyAddress">
                    <el-input v-model="company.companyAddress" placeholder="请输入公司地址"></el-input>
                </el-form-item>
                
                <el-form-item label="公司介绍" prop="">
                    <quill-editor 
                        class="quill" 
                        v-model="company.companyInfo" 
                        :options="editorOption">
                    </quill-editor>
                </el-form-item>

                <el-form-item class="item-submit">
                    <el-button type="primary" @click="companyInfoNextStep">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="upload form" v-show="uploadBLock">
            <form enctype="multipart/form-data">
                <input name="file" type="file" id="file"/>
                <!--贴图库Token-->
                <input name="Token" type="hidden" id="Token" value="ed9b7edcf2aea1f362886d222321304246430944:hGxyP-m3BT_MfdAqNvMJjfE1udA=:eyJkZWFkbGluZSI6MTUyNDgxMzYwNSwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNTkyNzA4IiwiYWlkIjoiMTMwMDQ2NCIsImZyb20iOiJmaWxlIn0=" />
                <input class="up-btn" type="button" value="上传图片" @click="uploadIcon" />
            </form> 
            <div class="register-btn">
                <el-button @click="registerCompany">注册</el-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import {registerCompany} from '../../api'
export default {
    components:{
      quillEditor
    },
  data(){
        var captchaPass = (rule, value, callback) => { //图形验证码校验
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else {
                if (this.companyUser.captcha !== '') {
                   if(Number(value) != Number(this.randomNumber)){
                       callback(new Error('请输入正确的校验码'));
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
                if (this.companyUser.password !== '') {
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
      return{
        registerBlock:false,
        companyInfoBlock:false,
        uploadBLock:true,
        stepActive:1,
        company:{
            businessLicense:'',
        },
        companyUser:{

        },
        randomNumber:'',
        formRules:{
            member: [
                { required: true, message: '请输入企业用户名', trigger: 'blur' }
            ],
            userName: [
                { required: true, message: '请输入企业账户', trigger: 'blur' }
            ],
            password:[
                 { validator: passwordPass, trigger: 'blur' }
            ],
            captcha:[
                { validator: captchaPass, trigger: 'blur' }
            ]
        },
        companyInfoRules:{
            companyName: [
                { required: true, message: '请输入公司名称', trigger: 'blur' }
            ],
            companyType: [
                { required: true, message: '请选择公司类型', trigger: 'blur' }
            ],
            staffNumber: [
                { required: true, message: '请选择公司规模', trigger: 'blur' }
            ],
            companyInfo: [
                { required: true, message: '请输入公司介绍', trigger: 'blur' }
            ],
            companyBusiness: [
                { required: true, message: '请选择公司业务', trigger: 'blur' }
            ],
            companyAddress: [
                { required: true, message: '请输入公司地址', trigger: 'blur' }
            ],
        },
        progs:'',
        editorOption:{
            modules:{
                toolbar:[
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],    
                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['clean']                                         // remove formatting button
                ]
            }
        },
        loading:{}
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
    //注册下一步
    registerNextStep(){
        this.$refs["companyUserform"].validate((valid) => {
            if (valid) {
                this.registerBlock = false;
                this.companyInfoBlock = true;
                this.uploadBLock = false;
                this.stepActive = 2;
            } else {
                return false;
            }
        });
    },
    companyInfoNextStep(){
        this.$refs["companyInfoform"].validate((valid) => {
            if (valid) {
                this.registerBlock = false;
                this.companyInfoBlock = false;
                this.uploadBLock = true;
                this.stepActive = 3;
            } else {
                return false;
            }
        });
    },
    uploadIcon(){
        var self = this;
        var formData = new FormData($('form')[2]);
        $.ajax({
            url: 'http://up.imgapi.com/',
            type: 'POST',
            beforeSend: function(){
                self.loading = self.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            },
            success: function(data){
                self.$message({
                    message: "上传成功",
                    type: 'sucess'
                });
                self.company.businessLicense = data.linkurl;
                self.loading.close();
            },
            error: function(data){
                self.loading.close();
                console.log('错误',data);
            },
            data:formData,
            cache: false,
            contentType: false,
            processData: false
        });
    },
    registerCompany(){
        if(this.company.businessLicense == null || this.company.businessLicense == ""){
            this.$message({
                message: "请上传公司营业执照",
                type: 'warning'
            });
        }else{
            alert("注册");
            let params = {
                company:this.company,
                companyUser:this.companyUser
            };
            registerCompany(params).then(res=>{

            });
        }
    }
  },
  mounted(){
    this.verificationCode();
  }
}
</script>

