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
                    padding:20px 0;
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
                            .condition-title{
                                height: 25px;
                                line-height: 25px;
                                font-size: 16px;
                                text-indent: 15px;
                                color: #636985;
                            }
                            .input-key{
                                border:none;
                            }
                            p{
                                margin-left:20px;
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
                        }
                    }
                }
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
                            <p><input class="input-key" v-model="searchParams.keyworld" type="text" /></p>
                        </div>
                        <div class="condition condition-area">
                            <p class="condition-title">地点</p>
                            <p>{{searchParams.area}}</p>
                        </div>
                        <div class="condition condition-industry">
                            <p class="condition-title">行业</p>
                            <p>{{searchParams.industry}}</p>
                        </div>
                        <div class="condition condition-function">
                            <p class="condition-title">职能</p>
                            <p>{{searchParams.function}}</p>
                        </div>
                        <div class="condition condition-search">
                           <button>搜索</button>
                        </div>

                    </div>
                    <!--推荐岗位-->
                    <div class="recommend">

                    </div>
                </div>
                <!--其他条件-->
                <div class="other-condition">
                    
                </div>
            </div>
            <!--查询结果-->
            <div class="job-result">
                
            </div>

        </div>
    </div>
    <h1>This is job-search page</h1>
</div>
</template>

<script>
export default {
  data(){
      return{
          searchParams:{}
      }
  },
  methods:{

  }
}
</script>
