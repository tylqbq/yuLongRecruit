<!--公司收到简历的详情-->
<style lang="less" scoped>
.resume-received{
    width:50%;
    margin: 1rem auto;
    .block{
        clear: both;
        position: relative;
        border-bottom:1px solid rgba(0,0,0,0.2);
        margin-bottom:20px;
    }
    .personal-info{
        overflow: hidden;
        .name{
            position: relative;
            height: 30px;
            line-height: 30px;
            font-size: 24px;
            margin-bottom: 18px;
        }
        .at{
            display: block;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin:10px 0;
        }
        .in{
            float: left;
            width: 180px;
            height: 20px;
            line-height: 20px;
            font-size: 16px;
            padding-left: 25px;
            margin: 10px 50px 10px 0;
        }
        .email{
            background:url(../../assets/icon/email.png) no-repeat;
        }
        .phone{
            background:url(../../assets/icon/phone.png) no-repeat;
        }
    }
    .annualIncome{
        clear: both;
        position: relative;
        .icon-in{
            left: -3px;
            top: 3px;
            background:url(../../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -273px;
        }
        .salary{
            line-height: 58px;
            font-size: 18px;
        }
        .explain{
            font-size:12px;
            color:#8a8a8a;
        }
    }
    .job-intention{
        overflow: hidden;
        .icon-intention{
            left: -3px;
            top: 3px;
            background:url(../../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -32px;
        }
       
    }
    .work-experience{
        overflow: hidden;
        .icon-work{
            left: -3px;
            top: 3px;
            background:url(../../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -62px;
        }
    }
    .project-experience{
        overflow: hidden;
        .icon-project{
            left: -3px;
            top: 3px;
            background:url(../../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -92px;
        }
    }
    .education-experience{
        overflow: hidden;
        .icon-education{
            left: -3px;
            top: 3px;
            background:url(../../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -123px;
        }
    }
    .school-info{
         overflow: hidden;
        .icon-school{
            left: -3px;
            top: 3px;
            background:url(../../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -154px;
        }
    }
    .icon-write{
        position: absolute;
        right:5px;
        top: 5px;
        width:20px;
        height:20px;
        background:url(../../assets/icon/write_nor.png) no-repeat;
        background-size: 100% 100%;
        cursor:pointer;
        &:hover{
            background:url(../../assets/icon/write.png) no-repeat;
            background-size: 100% 100%;
        }
    }
    .hd{
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        font-weight: bold;
        color: #ff6000;
        vertical-align: baseline;
        padding: 0px 25px;;
        background: none;
        display: block;
    }
    .icon{
        position: absolute;
        width:25px;
        height:25px;
    }
    .content{
        padding:20px 20px;
        .line-half{
            float: left;
            width:50%;
            height: 35px;
            line-height:35px;
        }
        .line{
            float: left;
            width:100%;
            height: 35px;
            line-height:35px;
        }
        .line-area{
            clear: both;
            .ti{
                display: block;
                float: left;
                width:90px;
            }
            .de{
                display: block;
                float: left;
                width:600px;
            } 
        }
        .ti{
            font-size:18px;
            color: #8a8a8a;
            word-break: break-all;
        }
        .de{
            padding-left:20px;
            font-size:16px;
            color: #333;
            word-break: break-all;
        } 
    }
    .st{
        clear: both;
        position: relative;
        height: 40px;
        line-height: 40px;
        font-size:18px;
        color: #666;
        background-color: #f5f5f5;
    }
    .content-editor{
        width:70%;
        margin:0 auto;
    }
}
</style>


<template>
<div class="resume-received">
    <div class="confluid-container">
        <!--个人信息-->
        <div class="personal-info block">
            <strong class="hd"><span class="icon icon-in"></span>个人信息</strong>
            <div >
                <h1 class='name'>{{resume.name}}</h1>
                <span class="at">现居住{{resume.address}} │ {{resume.sex}} │ {{resume.birthDate}}</span>
                <span class="email in">{{resume.email}}</span>
                <span class="phone in">{{resume.phoneNumber}}</span>
            </div>
        </div>

        <!--当前年收入-->
        <div class="annualIncome block">
            <strong class="hd"><span class="icon icon-in"></span>目前年收入</strong>
            <div>
                <span class="salary">{{resume.annualIncome}}</span>
                <span class="explain">（包含基本工资、补贴、奖金、股权收益等）</span>
            </div>
        </div>

        <!--求职意向-->
        <div class="job-intention block">
            <strong class="hd"><span class="icon icon-intention"></span>求职意向</strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content">
                <div class="line-half"><span class="ti">期望薪资：</span><span class="de">{{jobIntention.salary}}</span></div>
                <div class="line-half"><span class="ti">地点:</span><span  class="de">{{jobIntention.workPlace}}</span></div>
                <div class="line-half"><span class="ti">职能/职位：</span><span  class="de">{{jobIntention.function}}/{{jobIntention.position}}</span></div>
                <div class="line-half"><span class="ti">行业:</span><span  class="de">{{jobIntention.industry}}</span></div>
                <div class="line"><span class="ti">个人标签:</span><span  class="de">{{jobIntention.industryLabel}}</span></div>
                <div class="line"><span class="ti">自我评价:</span><span  class="de">{{jobIntention.introduction}}</span></div>
                <div class="line"><span class="ti">工作类型:</span><span  class="de">全职</span></div>
            </div>
        </div>

        <!--工作经验-->
        <div class="work-experience block">
            <strong class="hd"><span class="icon icon-work"></span>工作经验</strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content">
                <div class="line-half"><span class="ti">时间：</span><span class="de">{{workExperience.startDate}}至{{workExperience.endDate}}</span></div>
                <div class="line-half"><span class="ti">公司:</span><span  class="de">{{workExperience.companyName}}</span></div>
                <div class="line-half"><span class="ti">职能/职位：</span><span  class="de">{{workExperience.position}}</span></div>
                <div class="line-half"><span class="ti">信息：</span><span  class="de">{{workExperience.industry}} | {{workExperience.companyType}} | {{workExperience.function}}</span></div>
                <div class="line-area"><span class="ti">工作描述:</span><span  class="de">{{workExperience.workDetails}}</span></div>
            </div>
        </div>

        <!--项目经验-->
        <div class="project-experience block">
            <strong class="hd"><span class="icon icon-project"></span>项目经验</strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content">
                <div class="line-half"><span class="ti">时间：</span><span class="de">{{projectExperience.startDate}} 至 {{projectExperience.endDate}}</span></div>
                <div class="line-half"><span class="ti">项目名称：</span><span class="de">{{projectExperience.projectName}}</span></div>
                <div class="line-area"><span class="ti">项目描述:</span><span  class="de">{{projectExperience.projectDetails}}</span></div>
                <div class="line-area"><span class="ti">责任描述：</span><span  class="de">{{projectExperience.dutyDetails}}</span></div>
            </div>
        </div>

        <!--教育经历-->
        <div class="education-experience block">
            <strong class="hd"><span class="icon icon-education"></span>教育经历</strong>
            <div class="content">
                <div class="line-half"><span class="ti">时间：</span><span class="de">{{educationExperience.startDate}} 至 {{educationExperience.endDate}}</span></div>
                <div class="line-half"><span class="ti">学校：</span><span class="de">{{educationExperience.school}}</span></div>
                <div class="line-half"><span class="ti">专业:</span><span  class="de">{{educationExperience.profession}}</span></div>
                <div class="line-half"><span class="ti">学历：</span><span  class="de">{{educationExperience.education}}</span></div>
            </div>
        </div>

        <!--在校情况-->
        <div class="school-info block">
            <strong class="hd"><span class="icon icon-school"></span>在校情况</strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <h1 class="st">校内荣誉</h1>
            <div class="content">
                <div class="line"><span class="ti">时间：</span><span class="de">{{schoolHonor.startDate}}</span></div>
                <div class="line-half"><span class="ti">名称：</span><span class="de">{{schoolHonor.prizeName}}</span></div>
                <div class="line-half"><span class="ti">级别:</span><span  class="de">{{schoolHonor.level}}</span></div>
            </div>

            <h1 class="st">校内职务</h1>
            <div class="content">
                <div class="line-half"><span class="ti">时间：</span><span class="de">{{schoolDuties.startDate}} 至 {{schoolDuties.endDate}}</span></div>
                <div class="line-half"><span class="ti">职务：</span><span class="de">{{schoolDuties.name}}</span></div>
                <div class="line-area"><span class="ti">职务描述:</span><span  class="de">{{schoolDuties.details}}</span></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from "moment"
import {getResumeAllById} from '../../api'
export default {
  data(){
      return{
        routerParams:{},

        resume:{
            name:'',
            sex:'',
            birthDate:'',
            phoneNumber:'',
            email:'',
            address:'',
            annualIncome:'',
        },
        jobIntention:{
            salary:'',
            workPlace:'',
            function:'',
            position:'',
            industry:'',
            industryLabel:'',
            introduction:'',
            workType:'',
            resumeId:''
        },
        workExperience:{
            startDate:'',
            endDate:'',
            companyName:'',
            companyType:'',
            function:'',
            industry:'',
            position:'',
            department:'',
            workDetails:'',
            starffNumber:''
        },
        projectExperience:{
            companyName:'',
            startDate:'',
            endDate:'',
            projectName:'',
            projectDetails:'',
            dutyDetails:''
        },
        educationExperience:{
            startDate:'',
            endDate:'',
            education:'',
            education:'',
            profession:'',
            details:''
        },
        schoolHonor:{
            startDate:'',
            prizeName:'',
            level:''
        },
        schoolDuties:{
            startDate:'',
            endDate:'',
            name:'',
            details:''
        }
      }
  },
  methods:{
    getResumeAll(params){
        getResumeAllById(params).then(res=>{
            let data = res.data.data;
            this.resume = data;
            this.jobIntention =data.jobIntention;
            this.projectExperience = data.projectExperiencesList[0];
            this.workExperience = data.workExperiencesList[0];
            this.educationExperience = data.educationExperience;
            this.schoolDuties = data.schoolDutiesList[0];
            this.schoolHonor = data.schoolHonorList[0];
        })
    }
  },
  mounted(){
    this.routerParams = this.$route.params;
    //当参数不为空时，是编辑
    if(this.routerParams.resumeId != null && this.routerParams.resumeId !=''){
        let params={
            id:this.routerParams.resumeId
        };
        this.getResumeAll(params);
    }
  },
  filters:{
      dataFrm:function(el){
          return moment(el).format("YYYY-MM-DD");
      }
  }
}
</script>
