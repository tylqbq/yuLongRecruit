<!--首页-->
<style lang="less" scoped>
.home-page{
  background-color:#f5f5f5;
  .page-part{
    position: relative;
    .navbar{
      width:70%;
      margin:0 auto;
      .logo{
        float: left;
        width: 57px;
      }
    }
    .goBackTop{
      position: fixed;
      width:50px;
      height:50px;
      background:url(../assets/icon/goTop.png) center center #C1C1C1 no-repeat;
      border-radius:1px;
      bottom:10px;
      right:150px;
      cursor:pointer;
    }
  }
  .page-content{
    clear: both;
    position: relative;
  }
  .website-information{
    width:70%;
    margin:1rem auto;
    background-color:#FFFFFF;
    overflow: hidden;
    .information-ul{
      float: left;
      margin: 20px 50px;
      .information-ul-option{
        height: 40px;
        line-height:40px;
        font-size:12px;
      }
      .option-title{
        font-weight: bold;
      }
      .option-li{
        color:rgba(0,0,0,0.5);
        cursor:pointer;
        &:hover{
          color:rgba(255,140,0,1);
        }
      }
    }
  }
}
</style>
<style lang="less">
.home-page{
  .el-menu-demo{
    float: right;
  }
 .el-menu-item{
    font-size:18px;
 }
}
</style>

<template>
  <div class="home-page">
    <div claas="container-fluid">
      <div class="page-part">
          <div class="page-title">
              <div class="navbar"> <!--导航-->
              <img class="logo" src="../assets/logo.png" v-show="false" />
                  <el-menu
                    :default-active="1"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#f5f5f5"
                    text-color="#000000"
                    active-text-color="#ff6000"
                    :router="true">
                    <el-menu-item index="index">首页</el-menu-item>
                    <el-menu-item index="jobSearch">职位搜索</el-menu-item>
                    <el-menu-item index="regionalChannel">地区频道</el-menu-item>
                    <el-menu-item index="workplaceCounseling">职场咨询</el-menu-item>
                    <el-menu-item index="personalCenter">个人中心</el-menu-item> 
                    <el-menu-item index="enterpriseService">企业服务</el-menu-item>
                  </el-menu>
              </div>
          </div>
          <div class="page-content">
              <router-view></router-view>
          </div>
          <div class="website-information">
              <ul class="information-ul">
                  <li class="information-ul-option option-title">简介</li>
                  <li class="information-ul-option option-li">关于我们</li>
                  <li class="information-ul-option option-li">服务声明</li>
                  <li class="information-ul-option option-li">媒体报道</li>
              </ul>
              <ul class="information-ul">
                  <li class="information-ul-option option-title">合作</li>
                  <li class="information-ul-option option-li">加入我们</li>
                  <li class="information-ul-option option-li">联系我们</li>
                  <li class="information-ul-option option-li">友情链接</li>
              </ul>
              <ul class="information-ul">
                  <li class="information-ul-option option-title">帮助</li>
                  <li class="information-ul-option option-li">帮助中心</li>
                  <li class="information-ul-option option-li">常见问题</li>
                  <li class="information-ul-option option-li">新手引导</li>
              </ul>
              <ul class="information-ul">
                  <li class="information-ul-option option-title">导航</li>
                  <li class="information-ul-option option-li">网站地图</li>
                  <li class="information-ul-option option-li">职位搜索</li>
                  <li class="information-ul-option option-li">简历中心</li>
              </ul>
          </div>
          <div v-show="isShowBackTop" class="goBackTop" @click="goBackTop">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accountLogin } from "../api/";
export default {
  data() {
    return {
        isShowBackTop:false,
    }
  },
  methods: {
    handleSelect(){

    },
    getScrollTop(){    
      var scrollTop=0;    
      if(document.documentElement&&document.documentElement.scrollTop){    
          scrollTop=document.documentElement.scrollTop;    
      }else if(document.body){    
          scrollTop=document.body.scrollTop;    
      }    
      return scrollTop;    
    },
    scrollFunc(){
        var scrollTop = this.getScrollTop();
        if(scrollTop > 400){
            this.isShowBackTop = true;
        }else{
           this.isShowBackTop = false;
        }
    },
    goBackTop(){
       this.pageScroll();
    },
    pageScroll() { 
      window.scrollBy(0,-100); 
      var scrollTop = this.getScrollTop();
      var self = this;
      if(scrollTop != 0){
        setTimeout(function(){
          self.pageScroll();
        },100);
      }
    } 
  },
  mounted() {
    document.addEventListener('scroll', this.scrollFunc, false);   
  }
}
</script>
