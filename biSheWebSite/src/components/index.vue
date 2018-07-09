<!--首页-->
<style lang="less">
@import "../assets/common.less"; 
.index{
    .container-fluid{
        .page-part{
            //搜索框
            .job-search{
                position:relative;
                width:100%;
                height:20rem;
                background: url("../assets/icon/index-banner1.png") no-repeat;
                background-size:100% 100%;
                .job-search-form{
                    position:absolute;
                    width:70%;
                    height:12rem;
                    margin: 4rem 15%;
                    .form-option{
                        float: left;
                        width: 750px;
                        height: 180px;
                        border-radius:3px;
                        background:rgba(0,0,0,0.5);
                        .form-option-detail{
                            background-color:rgb(255,255,255);
                            overflow: auto;
                            margin:4rem 1rem 1rem 1rem;
                            border-radius:3px;
                            .details-option{
                                float: left;
                            }
                            .details-select{
                                select{
                                    width: 100px;
                                    padding-left: 25px;
                                    color:rgba(0,0,0,1);
                                    font-size:16px;
                                }
                                option{
                                    height:1rem;
                                }
                            }
                            .details-input{
                                height:2rem;
                                margin:0.75rem 0;
                                input{
                                    width:424px;
                                    height:2rem;
                                    padding:0 5px;
                                    font-size:16px;
                                    border-left:1px solid rgba(0,0,0,0.3);
                                }
                            }
                            .details-button{
                                height:2rem;
                                margin:0.75rem 0;
                                button{
                                    height:2rem;
                                    width:85px;
                                    padding:0 10px;
                                    font-size:16px;
                                    color:rgba(0,0,0,0.5);
                                    border-left:1px solid rgba(0,0,0,0.3);
                                    background-color:rgba(255,255,255,1);
                                    cursor: pointer;
                                    &:hover{
                                        color:rgba(255,140,0,1);
                                    }
                                }
                                
                            }
                            .details-button-search{
                                button{
                                    height: 3.5rem;
                                    width:113px;
                                    color:rgba(255,255,255,1);
                                    font-size:18px;
                                    background-color:rgba(255,140,0,0.9);
                                    cursor: pointer;
                                    &:hover{
                                        background-color:rgba(255,140,0,1);
                                    }
                                }
                            }
                        }
                        .job-recommend{
                            color:rgba(255,255,255,0.8);
                            .job-recommend-ul{
                                margin-left:15px;   
                                .job-recommend-option{
                                    float: left;
                                }
                                .option-li{
                                    margin: 0 10px;
                                    cursor: pointer;
                                    &:hover{
                                        color:rgba(255,127,80,1);
                                    }
                                }
                            }
                        }
                    }
                    
                    .login-part{
                        float: left;
                        width: 25%;
                        height: 180px;
                        margin-left:1%;
                        border-radius:3px;
                        background:rgba(255,255,255,0.9);
                        overflow: hidden;
                        .wrap-up{
                            position:relative;
                            height: 360px;
                            text-align: center;
                            transition: all 2s;
                            -moz-transition: all 2s;	/* Firefox 4 */
                            -webkit-transition: all 2s;	/* Safari 和 Chrome */
                        }
                        .show-login-part{
                            top:-180px;
                        }
                        .login-user-icon{
                            margin: 12px auto;
                        }
                        .login-part-btn{
                            .btn{
                                width:80px;
                                height:40px;
                                font-size:16px;
                                border:1px solid rgba(255,140,0,1);
                                border-radius:3px;
                                cursor:pointer;
                            }
                            .btn-login{
                                color:rgba(255,255,255,1);
                                background-color:rgba(255,140,0,0.9);
                                &:hover{
                                    background-color:rgba(255,140,0,1);
                                }
                            }
                            .btn-register{
                                color:rgba(255,140,0,1);
                                background-color:rgba(255,255,255,1);
                                &:hover{
                                    background-color:rgba(255,255,255,0.5);
                                }
                            }
                        }
                        .login-part-input{
                            height: 180px;
                            margin-top:31px;
                            border-radius:3px;
                            background:rgba(255,255,255,1);
                            .dl-icon{
                                padding:10px 0;
                                background:url(../assets/icon/index-all.png) no-repeat;
                                background-position:157px -320px;
                                cursor:pointer;
                            }
                            .user-name{
                                width:80%;
                                height:2rem;
                                border-bottom:1px solid rgba(0,0,0,0.5);
                                &:focus{
                                     border-bottom:1px solid #ff6000;
                                }
                            }
                            .user-psd{
                                width:80%;
                                height:2rem;
                                border-bottom:1px solid rgba(0,0,0,0.5);
                                &:focus{
                                     border-bottom:1px solid #ff6000;
                                }
                            }
                            .forget-psd{
                                width: 80%;
                                margin: 5px auto;  
                                font-size:12px;
                                text-align: right;
                                cursor: pointer;
                                &:hover{
                                    color:#ff6000;
                                }
                            }
                            .btn{
                                width: 80%;
                                height: 3rem;
                                color:#FFFFFF;
                                font-size:18px;
                                border-radius:3px;
                                background-color:rgba(255,140,0,0.9);
                                cursor:pointer;
                                &:hover{
                                    background-color:rgba(255,140,0,1);
                                }
                            }
                        }
                    }  
                    .resume{
                        float: left;
                        width: 25%;
                        height: 180px;
                        margin-left:1%;
                        border-radius:3px;
                        background:rgba(255,255,255,0.9);
                        overflow: hidden;
                        .wrap-up{
                            position:relative;
                            height: 360px;
                            margin:20px 20px 0 20px;
                            .title{
                                height: 30px;
                                line-height: 30px;
                                color: #666;
                                text-align: left;
                                margin:10px 30px ;
                                padding-left:30px;
                                .man{
                                    position: absolute;
                                    width: 30px;
                                    height: 30px;
                                    top: 0;
                                    left:20px;
                                    background:url(../assets/icon/man.png) left center no-repeat;
                                    background-size:100% 100%;
                                }
                            }
                            .resume-btn{
                                button{
                                    display: inline-block;
                                    min-width: 80px;
                                    height: 28px;
                                    line-height: 28px;
                                    font-size: 14px;
                                    font-family: "Microsoft YaHei";
                                    text-align: center;
                                    cursor: pointer;
                                    margin: 0 10px;
                                    border: 1px solid #ff6000;
                                }
                                .btn-re{
                                    color: #fff;
                                    background-color: #ff6000;
                                }
                                .btn-edit{
                                    color: #ff6000;
                                    background-color: #FFFFFF;
                                }
                            }
                            .record{
                                float: left;
                                width: 50%;
                                text-align: center;
                                margin:15px 0 5px 0;
                                p{
                                    font-weight: normal;
                                    font-size: 28px;
                                    color:#ff6000;
                                }
                            }
                            .outAccount{
                                cursor:pointer;
                                &:hover{
                                    color:#ff6000;
                                }
                            }
                        }
                    }
                }
            }
            //搜索框
            //热门城市
            .hot-city{
                width:70%;
                margin:1rem auto;
                padding:15px 20px;
                overflow: hidden;
                background-color:#FFFFFF;
                border-radius:3px;
                .hot-city-ul{
                    .hot-city-option{
                        float: left;
                    }
                    .option-title{
                        margin-right:20px;
                        font-size: 20px;
                        font-weight: bold;
                        color:#ff6000;
                    }
                    .option-li{
                        font-size: 16px;
                        color:#000000;
                        padding:2px;
                        margin:0 5px;
                        cursor:pointer;
                        &:hover{
                            color:#ff6000;
                        }
                    }
                }
            }
            //热门城市
            //求职类别
            .job-search-type{
                width: 70%;
                margin:1rem auto;
                background-color:#FFFFFF;
                border-radius:3px;
                overflow: hidden;
                padding:3rem 1rem;
                .type-ul{
                    float: left;
                    width: 200px;
                    height: 130px;
                    padding:0 10px;
                    border-right:1px solid rgba(0,0,0,0.3);
                    .type-ul-option{
                        //  padding-left: 30px;
                    }
                    .option-li{
                        height: 30px;
                        line-height: 35px;
                        cursor: pointer;
                        &:hover{
                            color:#ff6000;
                        }
                    }
                    .option-title{
                        height: 40px;
                        line-height: 40px;
                        font-size: 18px;
                        padding-left: 30px;
                        cursor:pointer;
                        &:hover{
                            color:#ff6000;
                        }
                    }
                    .title-internet{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -146px -137px;
                    }
                    .title-finance{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -142px -170px;
                    }
                    .title-automobile{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -145px -207px;
                    }
                    .title-realestate{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -145px -243px;
                    }
                }
            }
            //求职类别
            .company-icon{
                width:70%;
                margin:1rem auto;
                background-color:#FFFFFF;
                border-radius:3px;
                padding:1rem ;
                overflow: auto;
                .company-ul{
                    .company-ul-option{
                        float: left;
                        margin-left:1rem;
                        cursor:pointer;
                    }
                }
            }
        }
    }
}
</style>

<template>
<div class="index">
    <div class="container-fluid">
       <div class="page-part"> 
            <!-- 搜索框 -->
            <div class="job-search">
                <div class="job-search-form">
                    <div class="form-option">
                        <div class="form-option-detail">
                            <div class=" details-select details-option">
                                <select name="cars" >
                                    <option value="volvo">全文</option>
                                    <option value="saab">公司</option>
                                </select> 
                            </div>
                            <div class="details-input details-option">
                                <input type="text" v-model="keyWord" />
                            </div>
                            <div class="details-button details-option">
                                <button>重庆+</button>
                            </div>
                            <div class="details-button-search details-option">
                                <button @click="keyWordSearch">搜索</button>
                            </div>
                        </div>
                        <div class="job-recommend">
                            <ul class="job-recommend-ul" @click="industryKeyWordSearch($event)">
                                <li class="job-recommend-option ">猜你喜欢：</li>
                                <li class="job-recommend-option option-li">期货操盘手</li>
                                <li class="job-recommend-option option-li">JAVA工程师</li>
                                <li class="job-recommend-option option-li">会计</li>
                            </ul>
                        </div>
                    </div>
                    <div class="login-part" v-if="isShowLoginPart">
                        <div class="wrap-up" v-bind:class="isShowLogin?'show-login-part':''">
                            <div class="login-user-icon">
                                <img src='../assets/icon/user-logo.png'/>
                                <p>Hi!您好</p>
                            </div>
                            <div class="login-part-btn">
                                <button class="btn btn-login" @click="showLogin">登录</button>
                                <a href="register.html"><button class="btn btn-register">注册</button></a>
                            </div>
                            <div class="login-part-input">
                                <p class="dl-icon" @click="hidenLogin">登录</p>
                                <input type="text" class="user-name" v-model="params.phoneNumber"  placeholder="请输入帐号"/>
                                <input type="password" class="user-psd" v-model="params.password" placeholder="请输入密码"/>
                                <p class="forget-psd" @click="logout">忘记密码？</p>
                                <button class="btn" @click="userLogin">登录</button>
                            </div>
                        </div>
                    </div>
                    <div class="resume" v-else>
                        <div class="wrap-up">
                            <p class="title"><em class="man"></em>汤玉龙的简历</p>
                            <div class="resume-btn">
                                <button class="btn-re">刷新简历</button>
                                <button class="btn-edit">编辑简历</button>
                                </div>
                            <div class="record">
                                <p>0</p>
                                <span>谁看过我</span>
                            </div>
                            <div class="record">
                                <p>0</p>
                                <span>申请记录</span>
                            </div>
                            <!-- <span class="outAccount" @click="logout">退出帐号</span> -->
                        </div>
                    </div>
                </div>
            </div>
            <!--热门城市-->
            <div class="hot-city">
                <ul class="hot-city-ul">
                    <li class="hot-city-option option-title">热门城市</li>
                    <li class="hot-city-option option-li">北京</li>
                    <li class="hot-city-option option-li">上海</li>
                    <li class="hot-city-option option-li">深圳</li>
                    <li class="hot-city-option option-li">重庆</li>
                    <li class="hot-city-option option-li">成都</li>
                    <li class="hot-city-option option-li">南京</li>
                </ul>
            </div>
            <!--求职类别-->
            <div class="job-search-type" @click="industryKeyWordSearch($event)">
                <ul class="type-ul">
                    <li class="type-ul-option option-title title-internet">互联网/电子商务</li>
                    <li class="type-ul-option option-li">前端开发</li>
                    <li class="type-ul-option option-li">PHP</li>
                    <li class="type-ul-option option-li">数据分析</li>
                </ul>
                <ul class="type-ul">
                    <li class="type-ul-option option-title title-finance">金融/投资/证券</li>
                    <li class="type-ul-option option-li">期货操盘</li>
                    <li class="type-ul-option option-li">金融分析师</li>
                    <li class="type-ul-option option-li">融资专员</li>
                </ul>
                <ul class="type-ul">
                    <li class="type-ul-option option-title title-automobile">汽车及零配件</li>
                    <li class="type-ul-option option-li">配件/销售</li>
                    <li class="type-ul-option option-li">质量管理</li>
                    <li class="type-ul-option option-li">技术支持</li>
                </ul>
                <ul class="type-ul">
                    <li class="type-ul-option option-title title-realestate">房地产</li>
                    <li class="type-ul-option option-li">造价师</li>
                    <li class="type-ul-option option-li">规划设计</li>
                    <li class="type-ul-option option-li">房产经纪人</li>
                </ul>
                <ul class="type-ul">
                    <li class="type-ul-option option-title title-realestate">广告/媒体</li>
                    <li class="type-ul-option option-li">广告</li>
                    <li class="type-ul-option option-li">文字媒体/出版</li>
                    <li class="type-ul-option option-li">房产经纪人</li>
                </ul>
            </div>
            <div class="company-icon">
                <ul class="company-ul">
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
                </ul>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import{ accountLogin,accountLogout } from "../api";
export default {
    data(){
        return{
            isShowLoginPart:true,
            isShowLogin:false,
            searchType:'全文',
            keyWord:'',
            options:[{
                label:'全文',
                value:'content'
            },{
                label:'公司',
                value:'company'
            }],
            input:'',
            params:{
                phoneNumber:'',
                password:''
            }
        }
    },
    methods:{
        showLogin(){
            this.isShowLogin = true;
        },
        hidenLogin(){
            this.isShowLogin = false;
        },
        userLogin(){
            accountLogin(this.params).then(res => {
                let data = res.data.data;
                if(res.data.status){
                    localStorage.setItem("userName", data.name);
                    localStorage.setItem("id",data.id);
                    localStorage.setItem("type","jobSeeker");
                    window.location.reload();
                }else{
                    alert(data.message);
                }
            });
        },
        logout(){
            accountLogout().then(res =>{
                localStorage.removeItem("userName");
                localStorage.removeItem("id");
                localStorage.removeItem("type");
                window.location.reload();
            });
        },
        keyWordSearch(){
            if(this.keyWord == ""){
                this.$message({
                    message: "请输入关键字",
                    type: 'warning',
                    duration:500
                });
            }else{
                this.$router.push({
                    path: 'jobSearch', 
                    name: 'jobSearch',
                    params: { 
                        keyWord: this.keyWord,
                    }
                })
            }
        },
        industryKeyWordSearch(e){
            // console.log(e.target.classList);
            let classList = e.target.classList;
            for(let i=0;i<classList.length;i++){
                if(classList[i] == "option-li"){
                    let keyWord = e.target.innerHTML;
                    this.$router.push({
                        path: 'jobSearch', 
                        name: 'jobSearch',
                        params: { 
                            keyWord: keyWord,
                        }
                    })
                }
            }
            
        }
    },
    mounted(){
        let status = localStorage.getItem("userName");
        let type = localStorage.getItem("type");
        if(status != null && type=="jobSeeker"){ //已登录
            this.isShowLoginPart = false;
        }
    }
}
</script>
