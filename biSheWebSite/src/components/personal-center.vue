<!--个人中心-->
<style lang="less" scoped>
@import "../assets/common";
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
                            height: 70px;
                            line-height: 70px;
                            text-align: center;
                            text-indent: 3em;
                            cursor: pointer;
                            &:hover{
                                color: #ff6000;
                            }
                            span{
                                display: block;
                                width: 130px;
                                height: 35px;
                                line-height: 35px;
                                margin: 18px auto;
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
                .resume-list{
                    clear: both;
                    .resume-content{
                        width:100%;
                    }
                    .introduce{
                        clear: both;
                        .public{
                            font-size: 12px;
                            font-weight: bold;
                            color: #999;
                            margin-top:20px;
                        }
                        .ct{
                            font-size: 12px;
                            color: #999;
                            line-height: 20px;
                        }
                    }
                }
                .block_with_me{
                  
                }
                .block_collection{

                }
                .block_apply{

                }
                .block_securit{
                    .sbox{
                        .s{
                            height: 60px;
                            line-height: 60px;
                            text-align: center;
                            background-color: #fff;
                            border-bottom: 1px solid #eee;
                            h2{
                                float: left;
                                position: relative;
                                width: 217px;
                                line-height: 60px;
                                font-size: 16px;
                                font-weight: normal;
                                text-align:left;
                                color: #333;
                                text-indent: 66px;
                                margin-right: 20px;
                            }
                            span{
                                float: left;
                                width: 400px;
                                font-size: 14px;
                                color: #666;
                            }
                            .sp1{
                                text-align:left;
                            }
                            .icon{
                                position:absolute;
                                width:32px;
                                height:32px;
                                left: 12%;
                                top: 24%;
                                background:url(../assets/icon/sbox-s.png) no-repeat;
                            }
                            .icon_pass{
                                background-position:0px -32px;
                            }
                            .icon_phone{
                                background-position:0px -64px;
                            }
                            .icon_email{
                                background-position:0px -96px;
                            }
                        }
                        .change{
                            cursor:pointer;
                            &:hover{
                                color:#ff6600;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.personal-center{
    .el-table th{
        text-align:center;
        background-color: rgba(0,0,0,0.1);
    }
    .el-table__row{
        text-align:center;
    }
    .el-input--suffix .el-input__inner{
        border:none;
        width:115px;
    }
    .block_title{
        height: 44px;
        line-height: 44px;
        color: rgba(0,0,0,0.6);
        margin-bottom: 15px;
        border-bottom: 2px solid rgba(0,0,0,0.3);
        .tl{
            font-size: 22px;
            font-weight: bold;
        }
        .tr{
            float: right;
            color:#999;
            cursor: pointer;
            &:hover{
                color: #ff6000;   
            }
        }
    }
    .block{
        clear: both;
        width:100%;
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

</style>


<template>
<div class="personal-center">
    <div class="container-fluid">
        <div class="page-content">
            <div class="nav-bar">
                 <el-menu
                    default-active="1" 
                    background-color="#fafafa"
                    text-color="#000"
                    color-size="12px"
                    active-text-color="#ff6000"
                    @select="selectedMenu"
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
                <!--个人信息-->
                <div v-show="block.block_1">
                    <div class="personal-info" >
                        <p class="name">汤玉龙，你好！</p>
                        <p class="info">
                            <span>出生日期：</span> <span>1995-11-15</span>
                            <span>性别：</span> <span>男</span>
                            <span>邮箱：</span><span>1073204945.qq.com</span>
                        </p>
                        <span class="change">修改信息</span>
                    </div>
                    <div class="resume-info" >
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
                        </div>
                    </div>
                </div>
                <!--个人信息-->

                <!--简历中心-->
                <div class="resume-list" v-show="block.block_2">
                    <div class="resume-content">
                        <div class="block_title">
                            <span class="tl">简历中心</span><span class="tr">创建简历</span>
                        </div>
                        <div class="table">
                            <el-table
                                :data="resumeData"
                                style="width: 100%">
                                <el-table-column
                                prop="name"
                                label="简历名称"
                                width="250">
                                </el-table-column>
                                <el-table-column
                                prop="condition"
                                label="公开程度"
                                width="220">
                                <template slot-scope="scope">
                                    <el-select v-model="scope.row.condition" placeholder="请选择">
                                        <el-option
                                        v-for="item in resumeCondition"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
                                </template>
                                </el-table-column>
                                <el-table-column
                                    prop="dilivery"
                                    label="快速投递"
                                    width="210">
                                    <template slot-scope="scope">
                                        <el-switch
                                            v-model="scope.row.dilivery"
                                            active-text="开">
                                        </el-switch>
                                     </template>
                                </el-table-column>

                                <el-table-column
                                label="操作"
                                width="150">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                                    <el-button type="text" size="small">删除</el-button>
                                </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>
                    <div class="introduce">
                        <h5 class="public">公开程度说明：</h5>
                        <p class="ct">对所有公开：允许51job的招聘人员及所有通过51job审核的公司查看你的简历（注意：只允许有1份简历可以选择对所有公开）。</p>
                        <p class="ct">对无忧公开：只允许51job的招聘人员及认证猎头人士查看你的简历。</p>
                        <p class="ct">完全保密：不允许任何人员或公司查看您的简历，个人信息完全保密，除非你主动投递职位。</p>

                        <h5 class="public">快速投递说明：</h5>
                        <p class="ct">将简历设置为快速投递，申请职位时，直接发送设置快速投递的简历，不再提示选择简历。如需修改，请至简历中心更改设置。</p>
                    </div>
                </div>
                <!--简历中心-->

                <!--谁看过我-->
                <div v-show="block.block_3" class="block_with_me block">
                    <div class="block_title">
                        <span class="tl">谁看过我</span>
                        <!-- <span class="tr">创建简历</span> -->
                    </div>
                    <div class="none">
                        <p>近期没有HR关注你的简历，刷新简历可以引起更多HR的注意
                        未开通谁看过我的简历，如有需要请至增值服务去购买</p>
                    </div>
                </div>
                <!--谁看过我-->

                <!--我的收藏-->
                <div v-show="block.block_4" class="block_collection block">
                    <div class="block_title">
                        <span class="tl">我的收藏</span>
                        <!-- <span class="tr">创建简历</span> -->
                    </div>
                    <div class="none">
                        <p>未收藏任何职位</p>
                    </div>
                </div>
                <!--我的收藏-->

                <!--我的申请-->
                <div v-show="block.block_5" class="block_apply block">、
                    <div class="block_title">
                        <span class="tl">我的申请</span>
                        <!-- <span class="tr">创建简历</span> -->
                    </div>
                    <div class="none">
                        <p>暂无申请记录</p>
                    </div>
                </div>
                <!--我的申请-->

                <!--安全中心-->
                <div v-show="block.block_6" class="block_securit block">
                    <div class="block_title">
                        <span class="tl">安全中心</span>
                        <!-- <span class="tr">创建简历</span> -->
                    </div>
                    <div class="sbox">
                        <div class="s s1">
                            <h2><span class="icon icon_user"></span>用户名</h2>
                            <span class="sp1">phone_18716381592</span>
                            <span class="change">修改</span>
                        </div>
                        <div class="s s2">
                            <h2><span class="icon icon_pass"></span>登录密码</h2>
                            <span class="sp1" style="color:#ff6000">互联网帐号存在被盗风险，建议你定期更改密码以保护账户安全</span>
                            <span class="change">修改</span>
                        </div>
                        <div class="s s3">
                            <h2><span class="icon icon_phone"></span>手机</h2>
                            <span class="sp1">187****1592（已绑定）</span>
                            <span class="change">修改</span>
                        </div>
                        <div class="s s4">
                            <h2><span class="icon icon_email"></span>邮箱</h2>
                            <span class="sp1">phone_18716381592</span>
                            <span class="change">修改</span>
                        </div>
                    </div>
                </div>
                <!--安全中心-->

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
        resumeData:[
            {
            name:'我的简历',
            condition:'完全保密',
            dilivery:true
            }
        ],
        resumeCondition:[{
            value: '对所有公开',
            label: '对所有公开',
        },{
            value: '对玉龙公开',
            label: '对玉龙公开',
        },{
            value: '完全保密',
            label: '完全保密',
        }],
        block:{
            block_1:true,
            block_2:false,
            block_3:false,
            block_4:false,
            block_5:false,
            block_6:false, 
        } 
    }
  },
  methods:{
    resumeConditionChange(command){
        console.log(command);
        // console.log(row);
        this.resumeData.condition = command;
    },
    selectedMenu(index){
        for(let i in this.block){
            var curIndex = String(i).split("_")[1];
            if(curIndex == index){
                this.block[i] = true;
            }else{
                this.block[i] = false;
            }
        }
    }
  }
}
</script>
