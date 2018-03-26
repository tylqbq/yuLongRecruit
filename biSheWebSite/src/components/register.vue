<!--用户注册-->
<style lang="less" scoped>
.register-page{
    .container-fluid{
        .content{
            .page-title{

            }
            .page-content{
                width:50%;
                margin:1rem auto;
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
                <h1>欢迎注册</h1>
            </div>
            <div class="page-content">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="手机号码">
                        <el-input v-model="form.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="重复密码">
                        <el-input v-model="form.repeatPassword"></el-input>
                    </el-form-item>
                    <el-form-item label="图形验证码">
                        <el-input v-model="form.captcha"></el-input>
                    </el-form-item>
                    <el-form-item label="短信验证码">
                        <el-input v-model="form.verificationCode"></el-input>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                    </el-form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          form:{
              phoneNumber:'',
              password:'',
              repeatPassword:'',
              date2:'',
              delivery:''
          }
      }
  }
}
</script>
