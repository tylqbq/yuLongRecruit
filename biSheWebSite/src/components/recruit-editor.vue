<!--简历编辑-->
<style lang="less" scoped>
.recruit-editor{
    width:50%;
    margin: 1rem auto;
    .block{
        clear: both;
        position: relative;
        border-bottom:1px solid rgba(0,0,0,0.2);
        margin-bottom:20px;
        // &:hover{
        //     border:1px solid #ff6000;
        // }
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
            background:url(../assets/icon/email.png) no-repeat;
        }
        .phone{
            background:url(../assets/icon/phone.png) no-repeat;
        }
    }
    .annualIncome{
        clear: both;
        position: relative;
        .icon-in{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
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
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -32px;
        }
       
    }
    .work-experience{
        overflow: hidden;
        .icon-work{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -62px;
        }
    }
    .project-experience{
        overflow: hidden;
        .icon-project{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -92px;
        }
    }
    .education-experience{
        overflow: hidden;
        .icon-education{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -123px;
        }
    }
    .school-info{
         overflow: hidden;
        .icon-school{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -154px;
        }
    }
    .icon-write{
        position: absolute;
        right:5px;
        top: 5px;
        width:20px;
        height:20px;
        background:url(../assets/icon/write_nor.png) no-repeat;
        background-size: 100% 100%;
        cursor:pointer;
        &:hover{
            background:url(../assets/icon/write.png) no-repeat;
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
<div class="recruit-editor">
    <div class="confluid-container">
        <!--个人信息-->
        <div class="personal-info block">
            <strong class="hd"><span class="icon icon-in"></span>个人信息：<span class="icon-write" @click="infoEditor=true"></span></strong>
            <div v-if="!infoEditor">
                <h1 class='name'>{{resume.name}}</h1>
                <span class="at">现居住{{resume.address}} │ {{resume.sex}} │ {{resume.birthDate}}</span>
                <span class="email in">{{resume.email}}</span>
                <span class="phone in">{{resume.phoneNumber}}</span>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="resume" label-width="120px" label-position="left">
                    <el-form-item label="姓名">
                        <el-input v-model="resume.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别：">
                        <el-input v-model="resume.sex"></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期">
                         <el-date-picker type="date" placeholder="选择日期" v-model="resume.birthDate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="手机">
                        <el-input v-model="resume.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="resume.email"></el-input>
                    </el-form-item>
                    <el-form-item label="居住地">
                        <el-input v-model="resume.address"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="infoOnSubmit">保存</el-button>
                        <el-button @click="infoEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>


        </div>

        <!--当前年收入-->
        <div class="annualIncome block">
            <strong class="hd"><span class="icon icon-in"></span>目前年收入 <span class="icon-write" @click="incomeEditor=true"></span></strong>
            <div v-if="!incomeEditor">
                <span class="salary">{{resume.annualIncome}}</span>
                <span class="explain">（包含基本工资、补贴、奖金、股权收益等）</span>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="resume" label-width="120px" label-position="left">
                    <el-form-item label="当前年收入：">
                        <el-input v-model="resume.annualIncome"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="incomeOnSubmit">保存</el-button>
                        <el-button @click="incomeEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>

        <!--求职意向-->
        <div class="job-intention block">
            <strong class="hd"><span class="icon icon-intention"></span>求职意向<span class="icon-write" @click="jobIntentionEditor=true"></span></strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content" v-if="!jobIntentionEditor">
                <div class="line-half"><span class="ti">期望薪资：</span><span class="de">{{jobIntention.salary}}</span></div>
                <div class="line-half"><span class="ti">地点:</span><span  class="de">{{jobIntention.workPlace}}</span></div>
                <div class="line-half"><span class="ti">职能/职位：</span><span  class="de">{{jobIntention.function}}/{{jobIntention.position}}</span></div>
                <div class="line-half"><span class="ti">行业:</span><span  class="de">{{jobIntention.industry}}</span></div>
                <div class="line"><span class="ti">个人标签:</span><span  class="de">{{jobIntention.industryLabel}}</span></div>
                <div class="line"><span class="ti">自我评价:</span><span  class="de">{{jobIntention.introduction}}</span></div>
                <div class="line"><span class="ti">工作类型:</span><span  class="de">全职</span></div>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="jobIntention" label-width="120px" label-position="left">
                    <el-form-item label="期望薪资：">
                        <el-input v-model="jobIntention.salary"></el-input>
                    </el-form-item>
                    <el-form-item label="地点：">
                        <el-input v-model="jobIntention.workPlace">
                            <el-button slot="append" icon="el-icon-search" @click="citySelectedDialogVisible = true;">
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="职能：">
                        <el-input v-model="jobIntention.function"></el-input>
                    </el-form-item>
                    <el-form-item label="职位：">
                        <el-input v-model="jobIntention.position"></el-input>
                    </el-form-item>
                    <el-form-item label="行业：">
                        <el-input v-model="jobIntention.industry"></el-input>
                    </el-form-item>
                    <el-form-item label="个人标签">
                        <el-input v-model="jobIntention.industryLabel"></el-input>
                    </el-form-item>
                    <el-form-item label="自我评价：">
                        <el-input type="textarea"  v-model="jobIntention.introduction"  placeholder="自我评价/1000字以内"
                        :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item label="工作类型">
                        <el-input v-model="jobIntention.workType"></el-input>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="jobIntentionOnSubmit">保存</el-button>
                        <el-button @click="jobIntentionEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>

        <!--工作经验-->
        <div class="work-experience block">
            <strong class="hd"><span class="icon icon-work"></span>工作经验<span class="icon-write" @click="workExperienceEditor=true"></span></strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content" v-if="!workExperienceEditor">
                <div class="line-half"><span class="ti">时间：</span><span class="de">2017/7-至今</span></div>
                <div class="line-half"><span class="ti">公司:</span><span  class="de">重庆玖舆博泓科技有限公司    </span></div>
                <div class="line-half"><span class="ti">职能/职位：</span><span  class="de">Web前端开发工程师</span></div>
                <div class="line-half"><span class="ti">信息：</span><span  class="de">计算机软件 | 民营公司 | 应用开发</span></div>
                <div class="line-area"><span class="ti">工作描述:</span><span  class="de">负责前端页面构建、与后台交互
                    负责前端页面构建、与后台交互负责前端页面构建、与后台交互负责前端页面构建、与后台交互负责前端页面构建、与后台交互
                    负责前端页面构建、与后台交互负责前端页面构建、与后台交互负责前端页面构建、与后台交互</span></div>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="workExperience" label-width="120px" label-position="left">
                    <el-form-item label="时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="workExperience.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择结束日期" v-model="workExperience.endtDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="公司">
                        <el-input v-model="workExperience.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="职能：">
                        <el-input v-model="workExperience.function"></el-input>
                    </el-form-item>
                    <el-form-item label="行业">
                        <el-input v-model="workExperience.industry"></el-input>
                    </el-form-item>
                    <el-form-item label="职位">
                        <el-input v-model="workExperience.position"></el-input>
                    </el-form-item>
                    <el-form-item label="公司规模">
                        <el-input v-model="workExperience.starffNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="部门">
                        <el-input v-model="workExperience.department"></el-input>
                    </el-form-item>
                    <el-form-item label="公司性质">
                        <el-input v-model="workExperience.companyType"></el-input>
                    </el-form-item>
                    <el-form-item label="工作描述">
                        <el-input type="textarea"  v-model="workExperience.workDetails"  placeholder="自我评价/1000字以内"
                        :rows="5"  resize="none"></el-input>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="workExperienceOnSubmit">保存</el-button>
                        <el-button @click="workExperienceEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <!--项目经验-->
        <div class="project-experience block">
            <strong class="hd"><span class="icon icon-project"></span>项目经验<span class="icon-write" @click="projectExperienceEditor=true"></span></strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content" v-if="!projectExperienceEditor">
                <div class="line-half"><span class="ti">时间：</span><span class="de">{{projectExperience.startDate}}-{{projectExperience.endtDate}}</span></div>
                <div class="line-half"><span class="ti">项目名称：</span><span class="de">{{projectExperience.projectName}}</span></div>
                <div class="line-area"><span class="ti">项目描述:</span><span  class="de">{{projectExperience.projectDetails}}</span></div>
                <div class="line-area"><span class="ti">责任描述：</span><span  class="de">{{projectExperience.dutyDetails}}</span></div>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="projectExperience" label-width="120px" label-position="left">
                    <el-form-item label="公司">
                        <el-input v-model="projectExperience.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="projectExperience.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择结束日期" v-model="projectExperience.endtDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="项目名称">
                        <el-input v-model="projectExperience.projectName"></el-input>
                    </el-form-item>
                    <el-form-item label="项目描述">
                        <el-input type="textarea" v-model="workExperience.projectDetails" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item label="责任描述">
                        <el-input type="textarea" v-model="workExperience.dutyDetails" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="projectExperienceOnSubmit">保存</el-button>
                        <el-button @click="projectExperienceEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <!--教育经历-->
        <div class="education-experience block">
            <strong class="hd"><span class="icon icon-education"></span>教育经历<span class="icon-write" @click="educationExperienceEditor=true"></span></strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content" v-if="!educationExperienceEditor">
                <div class="line-half"><span class="ti">时间：</span><span class="de">2017/7-至今</span></div>
                <div class="line-half"><span class="ti">学校：</span><span class="de">重庆邮电大学</span></div>
                <div class="line-half"><span class="ti">专业:</span><span  class="de">计算机科学与技术</span></div>
                <div class="line-half"><span class="ti">学历：</span><span  class="de">本科</span></div>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="educationExperience" label-width="120px" label-position="left">
                    <el-form-item label="时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="educationExperience.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择结束日期" v-model="educationExperience.endtDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="学校：">
                        <el-input v-model="educationExperience.school"></el-input>
                    </el-form-item>
                    <el-form-item label="学历：">
                        <el-input  v-model="educationExperience.education"></el-input>
                    </el-form-item>
                    <el-form-item label="专业：">
                        <el-input  v-model="educationExperience.profession"></el-input>
                    </el-form-item>
                    <el-form-item label="专业描述：">
                        <el-input type="textarea" v-model="educationExperience.details" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="educationExperienceOnSubmit">保存</el-button>
                        <el-button @click="educationExperienceEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

        <!--在校情况-->
        <div class="school-info block">
            <strong class="hd"><span class="icon icon-school"></span>在校情况</strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <h1 class="st">校内荣誉<span class="icon-write" @click="schoolHonorEditor=true"></span></h1>
            <div class="content" v-if="!schoolHonorEditor">
                <div class="line"><span class="ti">时间：</span><span class="de">2017/7-至今</span></div>
                <div class="line-half"><span class="ti">名称：</span><span class="de">重庆邮电大学</span></div>
                <div class="line-half"><span class="ti">级别:</span><span  class="de">计算机科学与技术</span></div>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="schoolHonor" label-width="120px" label-position="left">
                    <el-form-item label="时间">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="schoolHonor.startDate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="奖项：">
                        <el-input v-model="schoolHonor.prizeName"></el-input>
                    </el-form-item>
                    <el-form-item label="级别">
                        <el-input  v-model="schoolHonor.level"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="schoolHonorOnSubmit">保存</el-button>
                        <el-button @click="schoolHonorEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <h1 class="st">校内职务<span class="icon-write" @click="schoolDutiesEditor=true"></span></h1>
            <div class="content" v-if="!schoolDutiesEditor">
                <div class="line-half"><span class="ti">时间：</span><span class="de">2017/7-至今</span></div>
                <div class="line-half"><span class="ti">职务：</span><span class="de">重庆邮电大学</span></div>
                <div class="line-area"><span class="ti">职务描述:</span><span  class="de">计算机科学与技术</span></div>
            </div>
            <div class="content-editor" v-else>
                <el-form ref="form" :model="schoolDuties" label-width="120px" label-position="left">
                    <el-form-item label="时间">
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="schoolDuties.startDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择结束日期" v-model="schoolDuties.endtDate" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="职务：">
                        <el-input v-model="schoolDuties.name"></el-input>
                    </el-form-item>
                    <el-form-item label="描述：">
                        <el-input type="textarea"  v-model="schoolDuties.details" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="schoolDutiesOnSubmit">保存</el-button>
                        <el-button @click="schoolDutiesEditor=false">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>

        <el-dialog
            title="城市选择"
            :visible.sync="citySelectedDialogVisible"
            width="75%">
            <city-select @citySelected="citySelected"></city-select>
        </el-dialog>

    </div>
</div>
</template>

<script>
import moment from "moment"
import CitySelect from './block/citySelect';
import {bulidResume,addAnnualIncome,addJobIntention,getResumeAllById} from '../api'
export default {
    components: {
        CitySelect
    },
  data(){
      return{
        routerParams:{},
        citySelectedDialogVisible:false,
        infoEditor:false,//个人信息
        incomeEditor:false,//年收入
        jobIntentionEditor:false,//工作意向
        workExperienceEditor:false,//工作经验
        projectExperienceEditor:false,//项目经验
        educationExperienceEditor:false,//教育经历
        schoolHonorEditor:false,//学校荣誉
        schoolDutiesEditor:false,//学校职务

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
    citySelected(city){
        this.jobIntention.workPlace = city;
        this.citySelectedDialogVisible = false;
    },
    //个人信息保存
    infoOnSubmit(){
        this.resume.birthDate = moment(this.resume.birthDate).format('YYYY-MM-DD');
        bulidResume(this.resume).then(res=>{
            this.resume = res.data.data;
            this.infoEditor = false;
        });
    },
    //当前年收入保存
    incomeOnSubmit(){
        this.resume.birthDate = moment(this.resume.birthDate).format('YYYY-MM-DD');
        addAnnualIncome(this.resume).then(res =>{
            this.resume = res.data.data;
            this.incomeEditor = false;
        })
    },
    //工作保存
    jobIntentionOnSubmit(){
        this.jobIntention.resumeId = this.resume.id;
        addJobIntention(this.jobIntention).then(res => {
            console.log(res);
            let data = res.data.data;
            this.resume = data;
            this.jobIntention = data.jobIntention;

        })
    },
    //工作经验保存
    workExperienceOnSubmit(){

    },
    //项目保存
    projectExperienceOnSubmit(){

    },
    //教育经历
    educationExperienceOnSubmit(){

    },
    //校内荣誉
    schoolHonorOnSubmit(){

    },
    //校内职务
    schoolDutiesOnSubmit(){

    },
    getResumeAll(params){
        getResumeAllById(params).then(res=>{
            console.log(res);
            let data = res.data.data;
            this.resume = data;
            this.jobIntention =data.jobIntention;
            this.projectExperience = data.projectExperiencesList[0];
            this.workExperience = data.workExperiencesList[0];
            this.schoolDuties = data.schoolDutiesList[0];
            this.schoolHonor = data.schoolHonorList[0];
        })
    }
  },
  mounted(){
    this.routerParams = this.$route.params;
    // console.log(this.routerParams);
    //当参数不为空时，是编辑
    if(this.routerParams.resumeId != null && this.routerParams.resumeId !=''){
        let params={
            id:this.routerParams.resumeId
        };
        this.getResumeAll(params);
    }else{//新建简历
        this.infoEditor = true;
    }
  },
  filters:{
      dataFrm:function(el){
          return moment(el).format("YYYY-MM-DD");
      }
  }
}
</script>
