<!--地区频道-->
<style lang="less" scoped>
.regional-channel{
    width:70%;
    margin:1rem auto;
    background-color:#f5f5f5;
    padding:10px;
    .container-fluid{
        .today-preferred{
            width: 59%;
            float: left;
            background-color:#ffffff;
            border-radius:3px;
            .tpol{
                height:30px;
                line-height:30px;
                .tli{
                    display: block;
                    float: left;
                    font-size:17px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .position{
                    max-width:200px;
                    cursor:pointer;
                    &:hover{
                        color: #ff6000
                    }
                }
                .company{
                    max-width:150px;
                    color: #666;
                    cursor:pointer;
                    margin:0 5px;
                    &:hover{
                        color: #ff6000
                    }
                }
                .salary{
                    color: #ff6000
                }
            }
        }
        .emergency-recruitment{
            width: 39%;
            float: right;
            background-color:#ffffff;
            border-radius:3px;
            .erl{
                height:30px;
                line-height:30px;
                .eel{
                    display: block;
                    float: left;
                    font-size:17px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .company{
                    max-width:150px;
                    color: #666;
                    cursor:pointer;
                    margin:0 5px;
                    &:hover{
                        color: #ff6000
                    }
                }
                .position{
                    max-width:70px;
                    margin-left:5px;
                    color: #ff6000;
                    cursor:pointer;
                    &:hover{
                        text-decoration:underline;
                    }
                }
            }
        }
        .workplace-information{
            overflow: hidden;
            margin-top:20px;
            background-color:#ffffff;
            border-radius:3px;
            .wib{
                width: 25%;
                min-width:300px;
                float: left;
                .wwl{
                    display: block;
                    height:25px;
                    line-height:25px;
                    max-width:250px;
                    padding-right:15px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    background:url(../assets/icon/new.png) no-repeat;
                    background-position: center right;
                    cursor:pointer;
                    &:hover{
                        color: #ff6000;
                    }
                }
            }
        }
        .name-brand-company{
            overflow: hidden;
            margin-top:20px;
            background-color:#ffffff;
            .nbct{
                width:100%;
                height:31px;
                line-height:31px;
                background:url(../assets/icon/bg_grey.gif) repeat-x;
            }
            .company-ul-option{
                float: left;
                margin-right:25px;
            }
        }
        .et{
            margin:0 35px;
            height: 45px;
            line-height: 46px;
            font-size: 18px;
            font-weight: bold;
            color: #ff6000;
            border-bottom: 1px solid #ddd;
        }
    }
}


</style>


<template>
<div class="regional-channel">
    <div class="container-fluid">
        <!--今日优选-->
        <div class="today-preferred">
            <h1 class="et">今日优选</h1>
            <ol>
                <li class="tpol" v-for="item in randomRecruit" :key="item.id">
                    <span class="position tli" @click="positionTo(item)">{{item.positionName}}</span> 
                    <span class="company tli" @click="companyTo(item)">{{item.companyName}}</span> 
                    <span class="salary tli">{{item.salaryRange}}</span> 
                </li>
            </ol>
        </div>
        <!--紧急招聘-->
        <div class="emergency-recruitment">
            <h1 class="et">紧急招聘</h1>
            <ol>
                <li class="erl" v-for="item in companyRecruitRandom" :key="item.id">
                    <span class="company eel" @click="companyGo(item)">{{item.companyName}}</span>
                    <span class="position eel" v-for="recruit in item.recruits" :key="recruit.id" @click="recruitGo(recruit)">{{recruit.positionName}}</span>
                </li>
            </ol>
        </div>
        <div style="clear:both"></div>
        <!--职场资讯-->
        <div class="workplace-information">
            <h1 class="et">职场资讯</h1>
            <ol class="wib">
                <li class="wwl" v-for="item in todayHotList" :key="item.id" @click="articleGet(item)">{{item.title}}</li>
            </ol>
            <ol class="wib">
                <li class="wwl" v-for="item in hotArticle" :key="item.id" @click="articleGet(item)">{{item.title}}</li>
               
            </ol>
            <ol class="wib">
                <li class="wwl" v-for="item in jobHoppingArticle" :key="item.id" @click="articleGet(item)">{{item.title}}</li>
                
            </ol>
        </div>
        <div style="clear:both"></div>
        <!--名企招聘-->
        <div class="name-brand-company">
            <div class="nbct"><img src="../assets/icon/nc_title.gif"/></div>
            <li class="company-ul-option"><a href='http://www.bbac.com.cn/'><img src="../assets/company-icon/benchu.gif"/></a></li>
                <li class="company-ul-option"><a href='http://www.cdii.com.cn/'><img src="../assets/company-icon/cdii.gif"/>  </a></li>
                <li class="company-ul-option"><a href='http://job.10086.cn/index.action'><img src="../assets/company-icon/dongy.gif"/> </a></li>

                <li class="company-ul-option"><a href='http://job.icbc.com.cn/ICBC/人才招聘/default.htm'><img src="../assets/company-icon/gongshang.gif"/></a></li>
                <li class="company-ul-option"><a href='http://www.cgbchina.com.cn/Channel/11581868'><img src="../assets/company-icon/guangfa.gif" /> </a></li>
                <li class="company-ul-option"><a href='http://www.jala.com.cn/choice.html'><img src="../assets/company-icon/jialan.gif" />  </a></li>

                <li class="company-ul-option"><a href='http://m.51mdd.com/'><img src="../assets/company-icon/miduoduo.gif"/></a></li>
                <li class="company-ul-option"><a href='http://job.abchina.com/rio/index.do?action=openHome'><img src="../assets/company-icon/nongye.gif" /> </a></li>
                <li class="company-ul-option"><a href='http://www.dearsamsung.com.cn/'><img src="../assets/company-icon/sanxing.gif"/> </a></li>
                
                <li class="company-ul-option"><a href='http://careers.suning.cn/'><img src="../assets/company-icon/sunin.gif"/></a></li>
                <li class="company-ul-option"><a href='http://www.thaihot.com.cn/hr_jmth.aspx'><img src="../assets/company-icon/taihe.gif"/></a></li>
                <li class="company-ul-option"><a href='http://www.ef.com.cn/ef360/'><img src="../assets/company-icon/yinfu.gif"/></a></li>
        </div>
    </div>
</div>
</template>


<script>
import {getArticleAll,getRecruitByAddressRandom,getCompanyRecruitRandom} from "../api"
export default {
    data(){
        return{
            todayHotList:[],
            hotArticle:[],
            jobHoppingArticle:[],
            randomRecruit:[],
            companyRecruitRandom:[]
        }
    },
    methods:{
       getArticleAll(){
           getArticleAll().then(res=>{
                let data = res.data.data;
                this.todayHotList = data.todayHotList;
                this.hotArticle = data.hotArticle;
                this.jobHoppingArticle = data.jobHoppingArticle;
           });
       },
       getRecruitByAddressRandom(){
            let params= {
                workPlace:"重庆"
            };
            getRecruitByAddressRandom(params).then(res=>{
                this.randomRecruit = res.data.data;
            });
       },
       getCompanyRecruitRandom(){
            let params = {
                    companyAddress:'重庆'
            };
            getCompanyRecruitRandom(params).then(res=>{
                this.companyRecruitRandom = res.data.data;
            });
       },
       positionTo(position){
            this.$router.push({
                path: 'jobDetails', 
                name: 'jobDetails',
                params: { 
                    jobId: position.id,
                    companyId: position.companyId,  
                }
            })
       },
       companyTo(position){
            this.$router.push({
                path: 'companyDetails', 
                name: 'companyDetails',
                params: { 
                    companyId: position.companyId, 
                }
            })
       },
       companyGo(company){
            this.$router.push({
                path: 'companyDetails', 
                name: 'companyDetails',
                params: { 
                    companyId: company.id, 
                }
            })
       },
       recruitGo(recruit){
            this.$router.push({
                path: 'jobDetails', 
                name: 'jobDetails',
                params: { 
                    jobId: recruit.id,
                    companyId: recruit.companyId,  
                }
            })
       },
       articleGet(article){
            this.$router.push({
                path: 'articleDetails', 
                name: 'articleDetails',
                params: { 
                    article:article,
                }
            })
       } 
    },
    mounted(){
        this.getArticleAll();
        this.getRecruitByAddressRandom();
        this.getCompanyRecruitRandom();
    }
}
</script>
