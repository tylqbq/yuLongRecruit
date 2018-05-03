<!--职场咨询-->
<style lang="less" scpoed>
.workplace-counseling{
    width: 70%;
    margin:1rem auto;
    .container-fliud{
        overflow: hidden;
        .today-hot{
            width:59%;
            float: left;
            border:1px solid #fe8929;  
            border-top-left-radius:3px;
            border-top-right-radius:3px;
            .th-title{
                width: 100%;
                height:25px;
                border-bottom:1px solid #fe8929; 
                background:url(../assets/icon/redbtbg.gif) repeat-x;
                .icon{
                    width:300px;
                    height:24px;
                    background:url(../assets/icon/c_hot.gif) no-repeat;
                }
            }
        }
        .hot-article{
            position: relative;
            width:39%;
            float: right;
            margin-top:26px;
            border:1px solid #fe8929; 
            .ha-title{
                position: absolute;
                top:-26px;
                height:25px;
                width:200px;
                background:url(../assets/icon/rmwz.gif) no-repeat;
            }
        }
        .redbttop{
            margin-top:20px;
            width:100%;
            height:20px;
            border-left:1px solid #fe8929; 
            border-right:1px solid #fe8929; 
            background:url(../assets/icon/ycbg.gif) repeat-x;
            border-top-left-radius:3px;
            border-top-right-radius:3px;
            p{
                color:#ffffff;
                font-weight:bold;
            }
        }
        .jobhunt-strategy{
            overflow: hidden;
            padding:20px 0;
            border:1px solid #fe8929; 
            border-bottom-left-radius:3px;
            border-bottom-right-radius:3px;
            .js-each{
                width:33%;
                float: left;
                padding: 0 30px;
                border-right:1px dotted rgba(0,0,0,0.3);
                .je-title{
                    width:100%;
                    height: 25px;
                    border-bottom:1px solid #fe8929; 
                    .jt{
                        height:25px;
                        line-height:25px;
                        width:80px;
                        font-weight: bold;
                        font-size: 12px;
                        color: rgb(240, 84, 0);
                        font-family: 宋体;
                        margin:0 auto;
                        text-align:center;
                        border:1px solid #fe8929; 
                        border-top-left-radius:3px;
                        border-top-right-radius:3px;
                        border-bottom:1px solid #ffffff; 
                    }
                }
                .js-ol{
                    .jol{
                        height: 30px;
                        line-height:30px;
                        font-size: 12px;
                        color: rgb(51, 51, 51);
                        font-family: 宋体;
                        cursor:pointer;
                        &:hover{
                            color: rgb(240, 84, 0);
                        }
                    }
                }
            }
        }
    }
    .article-ol{
        padding-right:30px;
        .aol{
            height: 30px;
            line-height:30px;
            font-size: 12px;
            color: rgb(126, 129, 126);
            font-family: 宋体;
            border-bottom:1px dotted rgba(0,0,0,0.3);
            cursor:pointer;
            &:hover{
                color:rgb(240, 84, 0);
            }
        }
    }
}
</style>

<template>
<div class="workplace-counseling">
    <div class="container-fliud">
        <!--今日热点-->
        <div class="today-hot">
            <div class="th-title"><div class="icon"></div></div>
            <ol class="article-ol">
                <li class="aol">实锤：投简历一定要懂的5个“潜规则</li>
                <li class="aol">经历了八个月空白期，还要不要裸辞？</li>
                <li class="aol">跳得好不如嫁得好，同意吗？</li>
                <li class="aol">这样写简历，面试机会更多！</li>
                <li class="aol">达不到招聘要求，我的问题还是公司的问题？</li>
            </ol>
        </div>
        <!--热门文章-->
        <div class="hot-article">
            <div class="ha-title"></div>
            <ol class="article-ol">
                <li class="aol">1分钟，教你最有效的投简历规律！</li>
                <li class="aol">解答面试经典51问，帮你搞定面试官</li>
                <li class="aol">资深猎头开讲：你离高薪只差这步！</li>
                <li class="aol">好工作、好职位、好薪水为何与你无关</li>
                <li class="aol">管住嘴，面试有些话别乱说！</li>
            </ol>
        </div>
        <div style="clear: both"></div>
        <!--求职攻略-->
        <div class="redbttop"><p>求职攻略</p></div>
        <div class="jobhunt-strategy">
            <div class="js-each">
                <div class="je-title">
                    <p class='jt'>面试</p>
                </div>
                 <ol class="js-ol">
                    <li class="jol">HR，你到底要什么样的求职者？！</li>
                    <li class="jol">这样写简历，面试机会更多！</li>
                    <li class="jol">不是公司不招人，是你不达标</li>
                    <li class="jol">面试前武装到心脏！</li>
                    <li class="jol">为何我的面试无一失手</li>
                </ol>
            </div>
            <div class="js-each">
                <div class="je-title">
                    <p class='jt'>跳槽</p>
                </div>
                 <ol class="js-ol">
                    <li class="jol">HR，你到底要什么样的求职者？！</li>
                    <li class="jol">这样写简历，面试机会更多！</li>
                    <li class="jol">不是公司不招人，是你不达标</li>
                    <li class="jol">面试前武装到心脏！</li>
                    <li class="jol">为何我的面试无一失手</li>
                </ol>
            </div>
            <div class="js-each" style="border-right:none">
                <div class="je-title">
                    <p class='jt'>就职</p>
                </div>
                 <ol class="js-ol" >
                    <li class="jol">HR，你到底要什么样的求职者？！</li>
                    <li class="jol">这样写简历，面试机会更多！</li>
                    <li class="jol">不是公司不招人，是你不达标</li>
                    <li class="jol">面试前武装到心脏！</li>
                    <li class="jol">为何我的面试无一失手</li>
                </ol>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>
