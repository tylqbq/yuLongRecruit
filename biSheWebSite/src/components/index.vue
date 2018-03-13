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
                background: url("../assets/icon/index-banner1.jpg") no-repeat;
                background-size:100% 100%;
                .job-search-form{
                    position:absolute;
                    width:70%;
                    height:12rem;
                    margin: 4rem 15%;
                    .form-option{
                        float: left;
                        width: 776px;
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
                                    width:450px;
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
                        background-position: -135px -137px;
                    }
                    .title-finance{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -130px -170px;
                    }
                    .title-automobile{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -130px -207px;
                    }
                    .title-realestate{
                        background:url(../assets/icon/index-all.png) no-repeat;
                        background-position: -100px -243px;
                    }
                }
            }
            //求职类别
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
                                <input type="text"  />
                            </div>
                            <div class="details-button details-option">
                                <button>重庆+</button>
                            </div>
                            <div class="details-button-search details-option">
                                <button>搜索</button>
                            </div>
                        </div>
                        <div class="job-recommend">
                            <ul class="job-recommend-ul">
                                <li class="job-recommend-option ">猜你喜欢：</li>
                                <li class="job-recommend-option option-li">期货操盘手</li>
                                <li class="job-recommend-option option-li">JAVA工程师</li>
                                <li class="job-recommend-option option-li">会计</li>
                            </ul>
                        </div>
                    </div>
                    <div class="login-part">
                        <div class="wrap-up" v-bind:class="isShowLogin?'show-login-part':''">
                            <div class="login-user-icon">
                                <img src='../assets/icon/user-logo.png'/>
                                <p>Hi!您好</p>
                            </div>
                            <div class="login-part-btn">
                                <button class="btn btn-login" @click="showLogin">登录</button>
                                <button class="btn btn-register">注册</button>
                            </div>
                            <div class="login-part-input">
                                <p class="dl-icon" @click="hidenLogin">登录</p>
                                <input type="text" class="user-name"  placeholder="请输入帐号"/>
                                <input type="password" class="user-psd" placeholder="请输入密码"/>
                                <p class="forget-psd">忘记密码？</p>
                                <button class="btn">登录</button>
                            </div>
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
            <div class="job-search-type">
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
            </div>
       </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isShowLogin:false,
            searchType:'全文',
            options:[{
                label:'全文',
                value:'content'
            },{
                label:'公司',
                value:'company'
            }],
            input:''
        }
    },
    methods:{
        showLogin(){
            this.isShowLogin = true;
        },
        hidenLogin(){
            this.isShowLogin = false;
        }
    }
}
</script>
