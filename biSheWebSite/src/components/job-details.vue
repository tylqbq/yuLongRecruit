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
                cursor:pointer;
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
                cursor:pointer;
                &:hover{
                    color:#ff6000;
                }
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
                <p class="cn" @click="toCompany">{{company.companyName}}</p>
                <p class="ci">{{company.companyType}}   | {{company.staffNumber}}   |  {{company.companyBusiness}}</p>
            </div>
            <!--申请职位-->
            <div class="apply">
                <button class="abtn"><span class="bt-f" @click="applyRecruit">申请职位</span></button>
                <span class="collection" @click="collection">{{collectionInfo}}</span>
            </div>
        </div>
        <div class="job-content">
            <div class="job-info">
                <!--招聘要求-->
                <div class="requirement">
                    <el-tag type="info" class="re">{{recruit.workTime}}工作经验</el-tag>
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

        <el-dialog title="您尚未有简历开启快速投递，请选择" :visible.sync="resumeVisible">
            <el-table :data="resumeData"  @current-change="handleCurrentChange">
                <el-table-column property="name" label="名称" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
             <div slot="footer" class="dialog-footer">
                <el-button @click="resumeVisible = false">取 消</el-button>
                <el-button type="primary" @click="selectedResume">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</div>
  
</template>


<script>
import moment from "moment";
import{ getRecruitById,getCompanyInfoById,collectionRecruit,collectionIsExist,
        getSpecialResumeByJobSeekerId,diliveryResume } from "../api";
export default {
  data(){
      return{
        routerParams:{},
        recruit:{

        },
        company:{

        },
        collectionInfo:'收藏',
        resumeData:[],
        resumeVisible:false,
        currentSelectedResume:{},//当前选中的简历
      }
  },
  methods:{
    getRecruitById(id){
        getRecruitById(id).then(res =>{
            this.recruit = res.data.data;
        });
    },
    getCompanyInfoById(id){
        getCompanyInfoById(id).then(res => {
            this.company = res.data.data;
        });
    },
    toCompany(){
        this.$router.push({
            path: 'companyDetails', 
            name: 'companyDetails',
            params: { 
                companyId: this.routerParams.companyId, 
            }
        })
    },
    //职位申请
    applyRecruit(){
         if(this.iSLogin()){
             let params = {
                 jobSeekerId:localStorage.getItem("id")
             }
            getSpecialResumeByJobSeekerId(params).then(res=>{
                if(!res.data.status){
                    this.$message({
                        message: res.data.data,
                        type: 'info',
                        duration:500
                    });
                }else{
                    let resumeList = res.data.data;
                    if(resumeList.length == 1 && resumeList[0].dilivery == "true"){
                        //快速投递
                        let params = {
                            jobSeekerId:localStorage.getItem("id"),
                            resumeId:resumeList[0].id,
                            recruitId:this.recruit.id,
                            companyId:this.company.id,
                            deliveryTime:moment(new Date()).format("YYYY-MM-DD")
                        }
                        this.diliveryResume(params);
                    }else{
                        this.resumeVisible = true;
                        this.resumeData = resumeList;
                    }
                    
                }
            })
         }else{
            this.$message({
                message: "请先登录或以求职者身份登录",
                type: 'warning',
                duration:500
            });
        }
    },

    collection(){
        if(this.iSLogin()){
            let recruitId = this.routerParams.jobId;
            let jobSeekerId = localStorage.getItem("id");
            collectionRecruit(recruitId,jobSeekerId).then(res =>{
                this.$message({
                    message: res.data.data,
                    type: 'success',
                    duration:500
                });
                if(this.collectionInfo == "已收藏"){
                    this.collectionInfo = "收藏";
                }else{
                    this.collectionInfo = "已收藏";
                }
            });
        }else{
            this.$message({
                message: "请先登录或以求职者身份登录",
                type: 'warning',
                duration:500
            });
        }
    },
    collectionIsExist(){
        let recruitId = this.routerParams.jobId;
        let jobSeekerId = localStorage.getItem("id");
        collectionIsExist(recruitId,jobSeekerId).then(res => {
            console.log(res);
            let isCollection = res.data.data;
            if(isCollection){ //已收藏
                this.collectionInfo = "已收藏";
            }
        });
    },
    iSLogin(){//判断是否登录
        let jobSeekerId = localStorage.getItem("id");
        let type = localStorage.getItem("type");
        if(jobSeekerId != null && jobSeekerId != "" && type == "jobSeeker"){
            return true;
        }else{
            return false;
        }
    },
    handleCurrentChange(val) {
        this.currentSelectedResume = val;
    },
    selectedResume(){
        let params = {
            jobSeekerId:localStorage.getItem("id"),
            resumeId:this.currentSelectedResume.id,
            recruitId:this.recruit.id,
            deliveryTime:moment(new Date()).format("YYYY-MM-DD")
        }
        this.diliveryResume(params);
        this.resumeVisible = false;
    },
    diliveryResume(params){  //选择简历投递
        diliveryResume(params).then(res=>{
            this.$message({
                message: res.data.data,
                type: 'warning',
                duration:500
            });
        });
    }
  },
  mounted(){
    this.routerParams = this.$route.params;
    this.getRecruitById(this.routerParams.jobId);
    this.getCompanyInfoById(this.routerParams.companyId);
    this.collectionIsExist();
  }
}
</script>
