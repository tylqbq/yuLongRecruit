<!--个人中心-->
<style lang="less" scoped>
.personal-center{
    .container-fluid{
        .page-content{
            width:70%;
            margin: 1rem auto;
            .nav-bar{
                float: left;
                width: 15%;
            }
            .content{
                float: left;
                margin:0 0 0 4%;
                width: 80%;
                text-align: left;
                .personal-info{
                    position: relative;
                    padding:5px 10px;
                    border:1px  solid rgba(0,0,0,0.3);
                    background-color: #FFFFFF;
                    .name{
                        font-weight: bold;
                        font-size: 20px;
                    }
                    .info{
                        line-height: 24px;
                        font-size: 16px;
                        margin: 5px 0;
                    }
                    .change{
                        display: block;
                        position: absolute;
                        bottom:5px;
                        right:5px;
                        font-size: 14px;
                        cursor: pointer;
                        &:hover{
                            color:#ff6000;
                        }
                    }
                    p{
                        margin: 0;
                    }
                }
                .resume-each{
                    border:1px  solid rgba(0,0,0,0.3);
                    overflow: hidden;
                    margin: 20px 0;
                    background: url(../assets/icon/ex_bg2.png) top center repeat-x;
                    background-color:#FFFFFF;
                    .each-self{
                        overflow: hidden;
                        margin: 10px;
                        border-bottom:1px solid rgba(0,0,0,0.3);
                        .man{
                            float: left;
                            width: 15%;
                            min-width: 85px;
                            height: 104px;
                            background:url(../assets/icon/resume_man.png) center center no-repeat;
                        }
                        .details{
                            float: left;
                            width: 85%;
                            .resume-de{
                                float: left;
                                width: 75%;
                                color:rgba(0,0,0,0.6);
                                .title{
                                    span{
                                        color: #333;
                                        font-size: 18px;
                                        font-weight: bold;
                                    }
                                    em{
                                        height: 18px;
                                        line-height: 18px;
                                        font-size: 12px;
                                        font-style: normal;
                                        color: #fff;
                                        margin: 2px 0 0 5px;
                                        padding: 0 5px;
                                        top: 2px;
                                        background-color: #56b1e6;;
                                        border-radius: 2px;
                                    }
                                }
                                .refreshTime{
                                    margin: 10px 0;
                                }
                                .r1{
                                    padding-left:25px;
                                    background: url(../assets/icon/icon_re.png)  no-repeat;
                                    background-position:0 2px;
                                }
                                .r2{
                                    padding-left:25px;
                                    background: url(../assets/icon/icon_re.png)  no-repeat;
                                    background-position:0 -22px;
                                }
                            }
                            .resume-btn{
                                float: left;
                                width: 24%;
                                .btn{
                                    display: block;
                                    min-width: 100px;
                                    height: 33px;
                                    line-height: 33px;
                                    font-size: 14px;
                                    font-family: "Microsoft YaHei";
                                    color: #fff;
                                    text-align: center;
                                    cursor: pointer;
                                    margin: 20px 10px;
                                    background-color: #ff6000;
                                    border: 1px solid #ff6000;
                                    border-radius: 2px;
                                }
                                .refresh{
                                    &:hover{
                                        background-color: #ea5800;
                                        border-color: #ea5800;
                                    }
                                }
                                .editor{
                                    color: #ff6000;
                                    background-color: #fff2e3;
                                    border-color: #ffb865;
                                    &:hover{
                                        background-color: #ffe8cd;
                                        border-color: #ffb865;
                                    } 
                                }

                            }
                        }
                    }
                    .resume-scan{
                        clear: both;
                        .scan{
                            float: left;
                            width: 33.3%;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            text-indent: 3em;
                            padding: 18px 0;
                            cursor: pointer;
                            &:hover{
                                color: #ff6000;
                            }
                            span{
                                display: block;
                                width: 130px;
                                height: 35px;
                                line-height: 35px;
                                margin: 0 auto;
                            }
                            em{
                                font-size:18px;
                                color: #ff6000;
                                font-weight: bold;
                                margin-left:5px;
                            }
                        }
                        .kan{
                            background:url(../assets/icon/icon_rse.png) left center no-repeat;
                        }
                        .delivery{
                            background:url(../assets/icon/icon_rse.png) left center no-repeat;
                            background-position: 0 -45px ;
                        }
                        .collection{
                            background:url(../assets/icon/icon_rse.png) left center no-repeat;
                            background-position: 0 -90px ;
                        }
                    }
                }
                .with-me{
                    border:1px  solid rgba(0,0,0,0.3);
                    overflow: hidden;
                    margin: 20px 0;
                    background-color:#FFFFFF;
                    .e-title{
                        height: 50px;
                        line-height: 50px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #333;
                        padding: 0 15px;
                        background-color: #fff;
                        border-bottom: 1px solid #eee;
                        .title{

                        }
                        .tip{
                            font-size: 12px;
                            font-weight: normal;
                            color: #999;
                            em{
                                font-weight: bold;
                                color: #ff6000;
                            }
                        }
                        .more{
                            float: right;
                            font-weight: normal;
                            font-size: 12px;
                            cursor:pointer;
                            &:hover {
                                color: #ff6000;
                            }
                        }
                    }
                    .company{
                        .none{
                            line-height: 20px;
                            font-size: 14px;
                            text-align: center;
                            color: #999;
                            padding: 100px 0;
                            background-color: #fff;
                        }
                    }
                }
                
            }
        }
    }
}
</style>

<template>
<div class="personal-center">
    <div class="container-fluid">
        <div class="page-content">
            <div class="nav-bar">
                 <el-menu
                    default-active="2" 
                    background-color="#fafafa"
                    text-color="#000"
                    color-size="12px"
                    active-text-color="#ff6000"
                    class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <span slot="title">个人信息</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">简历中心</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <span slot="title">谁看过我</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title">我的收藏</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <span slot="title">我的申请</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <span slot="title">安全中心</span>
                    </el-menu-item>
                </el-menu> 
            </div>
            <div class="content">
                <div class="personal-info">
                    <p class="name">汤玉龙，你好！</p>
                    <p class="info">
                        <span>出生日期：</span> <span>1995-11-15</span>
                        <span>性别：</span> <span>男</span>
                        <span>邮箱：</span><span>1073204945.qq.com</span>
                    </p>
                    <span class="change">修改信息</span>
                </div>
                <div class="resume-info">
                    <div class="resume-each">
                        <div class="each-self">
                            <div class="man"></div>
                            <div class="details">
                                <div class="resume-de">
                                    <div class="title">
                                        <span>我的简历1</span><em>完全保密</em>
                                    </div>
                                    <div class="refreshTime"><span>更新：2018-03-28</span></div>
                                    <div class="r1">汤玉龙  |  男  |  22岁  |  1年工作经验  |  现居住重庆-南岸区</div>
                                    <div class="r2">软件工程师  |  重庆玖舆博泓科技有限公司</div>
                                </div>
                                <div class="resume-btn">
                                    <button class="btn refresh">刷新</button>
                                    <button class="btn editor">编辑</button>
                                </div>
                            </div>
                        </div>
                        <div class="resume-scan">
                            <div class="scan"><span class="kan">谁看过我<em>0</em></span></div>
                            <div class="scan"><span class="delivery"> 我的申请<em>0</em></span></div>
                            <div class="scan"><span class="collection">我的收藏<em>0</em></span></div>
                        </div>
                    </div>
                </div>
                <div class="with-me">
                    <div class="e-title">
                        <span class="title">谁看过我</span>
                        <span class="tip">简历被浏览
                            <em>0</em>次，浏览公司
                            <em>0</em>家
                        </span>
                        <span class="more">更多</span>
                    </div>
                    <div class="company">
                        <div class="none">
                            <p>暂无企业查看你的简历，现在就去刷新简历，让企业更快找到你。</p>
                        </div>
                        <div class="list">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>
