<!--职位详情-->
<style lang="less" scoped>
.job-datails{
    width: 70%;
    color:#333;
    margin:1rem auto;
    overflow: auto;
    background-color:#FFF;
    .title{
        overflow: hidden;
        padding:20px 15px;
        border:1px solid rgba(0,0,0,0.3);
        border-radius:3px;
        box-shadow: 0px 5px 5px #888888;
        .generalize{
            float: left;
            width:70%;
            .jn{
                float: left;
                height: 30px;
                line-height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #333;
                margin: 0 10px 8px 0;
            }
            .ad{
                float: left;
                font-size: 14px;
                color: #666;
                max-width: 110px;
                height: 30px;
                line-height: 34px;
                margin-bottom: 8px;
            }
            .sa{
                float: right;
                width: 190px;
                height: 30px;
                line-height: 33px;
                font-weight: normal;
                font-size: 18px;
                color: #ff6000;
                text-align: right;
                margin-bottom: 8px;
            }
            .cn{
                clear: both;
                color: #333;
                font-size: 14px;
                cursor:pointer;
                &:hover{
                    color: #ff6000;
                    text-decoration: underline;
                }
            }
            .ci{
                margin-top:10px;
                font-size: 14px;
                color: #666;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;   
            }
        }
        .apply{
            float: right;
            width:25%;
            margin-left:20px;
            vertical-align:middle;
            .abtn{
                width: 240px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                font-size:18px;
                margin-top:10px;
                color: #fff;
                border:none;
                border-radius: 2px;
                background-color: #ff6000;
                &:hover{
                    background-color:#ea5800;
                }
                .bt-f{
                    padding-left:25px;
                    background: url(../assets/icon/but_img_sq.png) no-repeat;
                }
                
            }
            .collection{
                display: block;
                margin-top:10px;
                padding-left:20px;
                background: url(../assets/icon/icon_blue.png) no-repeat;
                background-position:0 -40px;
                
            }
        }
    }
    .job-content{
        clear: both;
        .job-info{
            width: 80%;
            float: left;
            .requirement{
                margin:20px 0;
                .re{
                    margin:0 30px 0 0;
                }
            }
        }
        .recommend{
            width: 20%;
            float: right;
        }
    }


.block-title{
    font-size: 20px;
    font-weight: bold;
    color:#333;
    text-indent: 0;
    margin-top: 15px;
    padding:2px 15px;
    border-left: 4px solid #ff6000;
}
}

</style>

<template>
<div class="job-datails">
    <div class="container-fluid">
        <!--职位名称相关-->
        <div class="title">
            <!--职位信息-->
            <div class="generalize">
                <h1 class="jn">{{recruit.positionName}}</h1>
                <span class="ad">{{recruit.workPlace}}</span>
                <strong class="sa">{{recruit.salaryRange}}</strong>
                <p class="cn">{{company.companyName}}</p>
                <p class="ci">{{company.companyType}}   | {{company.staffNumber}}   |  {{company.companyBusiness}}</p>
            </div>
            <!--申请职位-->
            <div class="apply">
                <button class="abtn"><span class="bt-f">申请职位</span></button>
                <span class="collection">收藏</span>
            </div>
        </div>
        <div class="job-content">
            <div class="job-info">
                <!--招聘要求-->
                <div class="requirement">
                    <el-tag type="info" class="re">{{recruit.workTime}}</el-tag>
                    <el-tag type="info" class="re">{{recruit.education}}</el-tag>
                    <el-tag type="info" class="re">{{recruit.recruitsNumber}}</el-tag>
                    <el-tag type="info" class="re">{{recruit.publishDate}}发布</el-tag>
                    <el-tag type="info" class="re">普通话一般</el-tag>
                </div>
                <!--职位信息-->
                 
                <div class="job-describe">
                    <h1 class="block-title">职位信息</h1>
                    <dl v-html="recruit.positionInfo"> 
                        {{recruit.positionInfo}} 
                    </dl> 
                </div>
                <!--联系方式-->
                <div class="contactway">
                    <h1 class="block-title">联系方式</h1>
                    <span>上班地址:</span>
                    <p>{{recruit.contactWay}}</p>

                </div>
                <!--公司信息-->
                <div class="company-info">
                    <h1 class="block-title">公司信息</h1>
                    <dl v-html="company.companyInfo"> 
                        {{company.companyInfo}} 
                    </dl> 
                </div>
            </div>

            <div class="recommend">
                
            </div>

        </div>
    </div>
</div>
  
</template>


<script>
import{ getRecruitById,getCompanyInfoById } from "../api";
export default {
  data(){
      return{
        routerParams:{},
        recruit:{

        },
        company:{

        }
      }
  },
  methods:{
    getRecruitById(id){
        getRecruitById(id).then(res =>{
            console.log(res);
            this.recruit = res.data.data;
        });
    },
    getCompanyInfoById(id){
        getCompanyInfoById(id).then(res => {
            console.log("公司",res);
            this.company = res.data.data;
        });
    }
  },
  mounted(){
    this.routerParams = this.$route.params;
    this.getRecruitById(this.routerParams.jobId);
    this.getCompanyInfoById(this.routerParams.companyId)
  }
}
</script>
