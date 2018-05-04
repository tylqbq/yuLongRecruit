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
                <li class="aol" v-for="item in todayHotList" :key="item.id" @click="articleDetail(item)">{{item.title}}</li>
            </ol>
        </div>
        <!--热门文章-->
        <div class="hot-article">
            <div class="ha-title"></div>
            <ol class="article-ol">
                <li class="aol" v-for="item in hotArticle" :key="item.id"@click="articleDetail(item)">{{item.title}}</li>
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
                    <li class="jol" v-for="item in interviewArticle" :key="item.id" @click="articleDetail(item)">{{item.title}}</li>
                </ol>
            </div>
            <div class="js-each">
                <div class="je-title">
                    <p class='jt'>跳槽</p>
                </div>
                 <ol class="js-ol">
                     <li class="jol" v-for="item in jobHoppingArticle" :key="item.id" @click="articleDetail(item)">{{item.title}}</li>
                </ol>
            </div>
            <div class="js-each" style="border-right:none">
                <div class="je-title">
                    <p class='jt'>就职</p>
                </div>
                 <ol class="js-ol" >
                   <li class="jol" v-for="item in entranceArticle" :key="item.id" @click="articleDetail(item)">{{item.title}}</li>
                </ol>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getArticleAll,getArticleById} from "../api"
export default {
    data(){
        return{
            hotArticle:[],
            entranceArticle:[],
            interviewArticle:[],
            jobHoppingArticle:[],
            todayHotList:[]
        }
    },
    methods:{
        getArticleAll(){
            getArticleAll().then(res=>{
                this.hotArticle = res.data.data.hotArticle;
                this.entranceArticle= res.data.data.entranceArticle;
                this.interviewArticle= res.data.data.interviewArticle;
                this.jobHoppingArticle= res.data.data.jobHoppingArticle;
                this.todayHotList= res.data.data.todayHotList;
            })
        },
        articleDetail(article){
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
    }
}
</script>
