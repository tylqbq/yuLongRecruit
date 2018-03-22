<!--职位搜索-->
<style lang="less" scoped>
.job-search{
    .container-fluid{
        .page-part{
            width: 70%;
            margin:1rem auto;
            overflow: auto;
            .job-filter{
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
                                line-height:50px;
                                margin: 0;
                                font-size: 16px;
                                text-indent: 15px;
                                color: #636985;
                            }
                            .condition-content{
                                padding: 0 15px;
                                margin: 0;
                            }
                            .input-key{
                                height:1rem;
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
                            min-width:213px;
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
                    border:1px solid rgba(0,0,0,0.1);
                    border-radius:2px;
                    font-size:12px;
                    position: relative;
                    .condition{
                        padding-left:20px;
                        text-align: left;
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
                    .condition-hiden{
                        overflow: visible;
                        .condition-last{
                            border-bottom:none;
                        }   
                    }
                    .hiden-tip{
                        width:36%;
                        height:20px;
                        position: absolute;
                        bottom: -21px;
                        left:32%;
                        color: rgba(0,0,0,0.6);;
                        border:1px solid rgba(0,0,0,0.3);
                        border-top:1px solid #f5f5f5;
                        cursor:pointer;
                        &:hover{
                            color:rgba(255,140,0,1);
                        }
                        .arrow-up{
                            position: absolute;
                            top:6px;
                            width: 15px;
                            height: 7px;
                            background:url(../assets/icon/list_icon.png) no-repeat ;
                            background-position: -150px -80px;
                            &:hover{
                                background:url(../assets/icon/list_icon.png) no-repeat ;
                                background-position: -150px -100px;
                            }
                        }
                        .arrow-down{
                            position: absolute;
                            top:6px;
                            width: 15px;
                            height: 7px;
                            background:url(../assets/icon/list_icon.png) no-repeat ;
                            background-position: -170px -80px;
                            &:hover{
                                background:url(../assets/icon/list_icon.png) no-repeat ;
                                background-position: -170px -100px;
                            }
                        }
                    }
                }
            }
            .jr-table{  
                clear: both;
                margin-top:30px;
                .salary{
                    .cell .el-tooltip{
                        color:rgba(255,140,0,1);
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
    .el-table th>.cell{
        text-align:center;
    }
    .el-table .cell{
        a{
            text-decoration:none;
            color:rgba(0,0,0,0.7);
        }
    }
    .jr-table{
        .salary{
            .el-table .cell.el-tooltip{
                 color:rgba(255,140,0,1);
            }
            .cell .el-tooltip{
                color:rgba(255,140,0,1);
            }
        }
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
                           <button class="search-btn" @click="search">搜索</button>
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
                            <el-radio label="1-1.5万"></el-radio>
                            <el-radio label="1.5-2万"></el-radio>
                            <el-radio label="2-3万"></el-radio>
                            <el-radio label="3-4万"></el-radio>
                            <el-radio label="4-5万"></el-radio>
                        </el-radio-group>
                    </div>
                    <!--搜索条件 隐藏部分-->
                    <div class="condition-hiden" v-if="isShowConditionHiden">
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
                        <div class="condition">
                            <span class="condition-title">工作年限：</span>
                            <el-radio-group v-model="searchParams.workTime">
                                <el-radio label="所有"></el-radio>
                                <el-radio label="无经验"></el-radio>
                                <el-radio label="1-3年"></el-radio>
                                <el-radio label="3-5年"></el-radio>
                                <el-radio label="5-10年"></el-radio>
                                <el-radio label="10年以上"></el-radio>
                            </el-radio-group>
                        </div>
                        <div class="condition">
                            <span class="condition-title">学历要求：</span>
                            <el-radio-group v-model="searchParams.education">
                                <el-radio label="所有"></el-radio>
                                <el-radio label="初中及以下"></el-radio>
                                <el-radio label="高中/中技/中专"></el-radio>
                                <el-radio label="大专"></el-radio>
                                <el-radio label="本科"></el-radio>
                                <el-radio label="硕士"></el-radio>
                                <el-radio label="博士"></el-radio>
                            </el-radio-group>
                        </div>
                        <div class="condition">
                            <span class="condition-title">公司规模：</span>
                            <el-radio-group v-model="searchParams.staffNumber">
                                <el-radio label="all">所有</el-radio>
                                <el-radio label="少于50人"></el-radio>
                                <el-radio label="50-150人"></el-radio>
                                <el-radio label="150-500人"></el-radio>
                                <el-radio label="500-1000人"></el-radio>
                                <el-radio label="1000-5000人"></el-radio>
                                <el-radio label="5000-10000人"></el-radio>
                                <el-radio label="10000人以上 "></el-radio>
                            </el-radio-group>
                        </div>
                        <div class="condition condition-last">
                            <span class="condition-title">工作类型：</span>
                            <el-radio-group v-model="searchParams.workType">
                                <el-radio label="所有"></el-radio>
                                <el-radio label="全职"></el-radio>
                                <el-radio label="兼职"></el-radio>
                                <el-radio label="实习全职"></el-radio>
                                <el-radio label="实习兼职"></el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                     <div class="hiden-tip" @click="hidenMoreCondition">
                         <span >{{hidenInfo}}<em :class="isShowConditionHiden?'arrow-up':'arrow-down'"></em></span>
                    </div>
                </div>
            </div>
            <!--查询结果-->
            <div class="jr-table">
                <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="职位名"
                    width="250">
                    <template slot-scope="scope"><a href="#">{{ scope.row.pisitonName }}</a></template>  
                    </el-table-column>
                    <el-table-column
                    prop="companyName"
                    label="公司名"
                    width="250">
                    <template slot-scope="scope"><a href="#">{{ scope.row.companyName }}</a></template>  
                    </el-table-column>
                    <el-table-column
                    prop="workPlace"
                    label="工作地点"
                    width="220"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    class-name="salary"
                    prop="salary"
                    label="薪资"
                    width="121" 
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="publishDate"
                    label="发布时间"
                    width="125"
                    show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageParams.currentPage"
                    :page-size="pageParams.pageSize"
                    layout="prev, pager, next, jumper"
                    :total="pageParams.total">
                </el-pagination>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import{ getGetRecruit } from "../api";
export default {
  data(){
      return{
          searchParams:{},
          date:'',
          radio3:'',
          isShowConditionHiden:true,
          hidenInfo:"展开选项（公司性质、公司规模、工作年限等）",
          tableData3:[{
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }, {
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }, {
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }, {
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }, {
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }, {
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }, {
                pisitonName: '抗体制备技术人员',
                companyName: '重庆威力保生物技术有限公司',
                workPlace: '重庆-九龙坡区',
                salary:"5千-8千/月",
                publishDate:'03-22'
            }],
            pageParams:{
                total:1000,
                pageSize:100,
                currentPage:1,
            }
      }
  },
  methods:{
    hidenMoreCondition(){
        this.isShowConditionHiden = !this.isShowConditionHiden;
        if(this.isShowConditionHiden){
            this.hidenInfo = "收起选项";
        }else{
            this.hidenInfo = "展开选项（公司性质、公司规模、工作年限等）";
        }
    },
    handleCurrentChange(pageNumber){
        this.pageParams.currentPage = pageNumber;
    },
    handleSelectionChange(){ //表格前面的复选框

    },
    search(){
        var params = "";
        getGetRecruit(params).then(res =>{
            // console.log(res);
            console.log(this.searchParams);
        });
    }
  }
}
</script>
