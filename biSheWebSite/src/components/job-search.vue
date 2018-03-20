<!--职位搜索-->
<style lang="less" scoped>
.job-search{
    .container-fluid{
        .page-part{
            width: 70%;
            margin:1rem auto;
            overflow: auto;
            .job-filter{
                overflow: hidden;
                .important-condition{
                    width: 100%;
                    padding:20px 0 0 0;
                    border-radius:1px;
                    background: url(../assets/icon/search_bg.png) no-repeat ;
                    background-size:100% 100%;
                    .search-condition{
                        background-color: #FFFFFF;
                        width:96%;
                        min-width: 600px;
                        margin:0 auto;
                        border-radius:2px;
                        overflow: hidden;
                        .condition{
                            float: left;
                            height:86px;  
                            text-align:left; 
                            border-right:1px solid rgba(0,0,0,0.1); 
                            cursor:pointer;
                            .condition-title{
                                font-size: 16px;
                                text-indent: 15px;
                                color: #636985;
                            }
                            .condition-content{
                                padding: 0 15px;
                            }
                            .input-key{
                                border:none;
                            }
                        }
                        .condition-key{
                            width:22%;
                            min-width:240px;
                        }
                        .condition-area{
                            width:10%;
                            min-width:160px;
                        }
                        .condition-industry{
                            width:15%;
                            min-width:226px;
                        }
                        .condition-function{
                            width:15%;
                            min-width:226px;
                        }
                        .condition-search{  
                            width:15%;
                            min-width:152px;
                            .search-btn{
                                width: 90px;
                                height: 44px;
                                margin:20px 31px;
                                color:#FFFFFF;
                                font-size: 18px;
                                border:none;
                                border-radius:2px;
                                background-color:rgba(255,140,0,0.9);;
                                cursor:pointer;
                                &:hover{
                                     background-color:rgba(255,140,0,1);
                                }
                            }
                        }
                    }
                    .recommend{
                        width:96%;
                        overflow: hidden;
                        margin:5px auto;
                        .recommend-ul{
                            padding-left:0;
                            list-style: none;
                            overflow: hidden;
                            .option{
                                float: left;
                                font-size:12px;
                                color:#FFFFFF;
                            }
                            .option-li{
                                margin-left:2rem;
                                cursor:pointer;
                                &:hover{
                                   color:rgba(255,140,0,1);
                                }
                            }
                        }
                    }
                }
                .other-condition{
                    overflow: hidden;
                    border:1px solid rgba(0,0,0,0.1);
                    border-radius:2px;
                    font-size:12px;
                    .condition{
                        padding-left:20px;
                        text-align: left;
                        overflow: hidden;
                        border-bottom:1px dashed rgba(0,0,0,0.1);
                        .condition-ul{
                            list-style:none;
                            float: left;
                            height: 34px;
                            line-height: 34px;
                            margin: 0;
                            padding-left:0;
                            .option{
                                float: left;
                                margin-right:1.5rem;
                                cursor:pointer;
                            }
                        }
                        .condition-title{
                            width: 85px;
                            height: 34px;
                            line-height: 34px;
                            float: left;
                        }
                        
                    }
                }
            }
        }
    }
}
</style>

<style lang="less">
.job-search{
    .el-radio-button:first-child{
        .el-radio-button__inner{
            border:none;
        }
    } 
    .el-radio-button__inner{
        border:none;
    }
    .el-radio__input{
        display: none;
    }
    .el-radio{
        line-height:34px;
    }
    .el-radio__label{
        font-size:12px;
    }
    .el-radio__input.is-checked+.el-radio__label{
         color:rgba(255,140,0,1);
    }
}
    
</style>

<template>
<div class="job-search">
    <div class="container-fluid">
        <div class="page-part">
            <!--筛选条件-->
            <div class="job-filter">
                <!--重要条件 关键字、地点、行业、职能-->
                <div class="important-condition">
                    <!--搜索-->
                    <div class="search-condition">
                        <div class="condition condition-key">
                            <p class="condition-title">关键字</p>
                            <p class="condition-content"><input class="input-key" v-model="searchParams.keyworld" type="text" /></p>
                        </div>
                        <div class="condition condition-area">
                            <p class="condition-title">地点</p>
                            <!-- <p>{{searchParams.area}}</p> -->
                            <p class="condition-content">重庆</p>
                        </div>
                        <div class="condition condition-industry">
                            <p class="condition-title">行业</p>
                            <!-- <p>{{searchParams.industry}}</p> -->
                            <p class="condition-content">计算机软件</p>
                        </div>
                        <div class="condition condition-function">
                            <p class="condition-title">职能</p>
                            <!-- <p>{{searchParams.function}}</p> -->
                            <p class="condition-content">计算机软件</p>
                        </div>
                        <div class="condition condition-search">
                           <button class="search-btn">搜索</button>
                        </div>

                    </div>
                    <!--推荐岗位-->
                    <div class="recommend">
                        <ul class="recommend-ul">
                            <li class="option option-title">猜你喜欢:</li>
                            <li class="option option-li">开发工程师</li>
                            <li class="option option-li">Java</li>
                            <li class="option option-li">Android</li>
                            <li class="option option-li">iOS</li>
                        </ul>
                    </div>
                </div>
                <!--其他条件-->
                <div class="other-condition">
                    <div class="condition">
                        <span class="condition-title">发布日期：</span>
                        <el-radio-group v-model="searchParams.publishDate">
                            <el-radio label="所有"></el-radio>
                            <el-radio label="24小时内"></el-radio>
                            <el-radio label="近三天"></el-radio>
                            <el-radio label="近一周"></el-radio>
                        </el-radio-group>
                    </div>
                    <div class="condition">
                        <span class="condition-title">月薪范围：</span>
                        <el-radio-group v-model="searchParams.salary">
                            <el-radio label="所有"></el-radio>
                            <el-radio label="2千以下"></el-radio>
                            <el-radio label="2-3千"></el-radio>
                            <el-radio label="3-4.5千"></el-radio>
                            <el-radio label="6-8千"></el-radio>
                            <el-radio label="0.8-1万"></el-radio>
                        </el-radio-group>
                    </div>
                    <div class="condition">
                        <span class="condition-title">公司性质：</span>
                        <el-radio-group v-model="searchParams.companyType">
                            <el-radio label="所有"></el-radio>
                            <el-radio label="外资（欧美）"></el-radio>
                            <el-radio label="外资（非欧美）"></el-radio>
                            <el-radio label="合资"></el-radio>
                            <el-radio label="国企"></el-radio>
                            <el-radio label="民营公司"></el-radio>
                            <el-radio label="外企代表处"></el-radio>
                            <el-radio label="政府机关"></el-radio>
                            <el-radio label="事业单位"></el-radio>
                        </el-radio-group>
                    </div>
                </div>
            </div>
            <!--查询结果-->
            <div class="job-result">
                
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
  data(){
      return{
          searchParams:{},
          date:'',
          radio3:''
      }
  },
  methods:{

  }
}
</script>
