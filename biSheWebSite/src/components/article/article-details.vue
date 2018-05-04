<!--文章详情-->
<style lang="less" scoped>
.article-details{
    width:50%;
    margin:1rem auto;
    .container-fluid{
        .ar-top{
            width:100%;
            height:30px;
            line-height:30px;
            background:url(../../assets/icon/btbg.gif) no-repeat;
            background-size: 100% 100%;
            h5{
                font-size: 16px;
                font-weight: bold;
                padding-left:40px;
            }
        }
        .title{
            padding:10px 0;
            font-size: 18px;
            font-weight: 700;
            text-align: center;
            border-bottom:1px dotted rgba(0,0,0,0.3);
        }
        .content{
            padding:10px 0;
        }
    }
}
</style>

<template>
<div class="article-details">
    <div class="container-fluid">
        <div class="ar-top"><h5>文章</h5></div>
        <h1 class="title">{{article.title}}</h1>
        <dl class="content" v-html="article.content"> 
            {{article.content}} 
        </dl> 
    </div>
</div>
</template>


<script>
export default {
  data(){
      return{
        article:{}
      }
  },
  methods:{

  },
  mounted(){
    this.article = this.$route.params.article;
  }
}
</script>
