<!--新建简历-->
<style lang="less" scoped>
.recruit-build{
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
            background:url(../assets/icon/email.png) no-repeat;
        }
        .phone{
            background:url(../assets/icon/phone.png) no-repeat;
        }
        .icon-info{

        }
    }
    .annualIncome{
        clear: both;
        position: relative;
        .icon-in{
            left: 85px;
            top: 5px;
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
            left: 83px;;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -32px;
        }
       
    }
    .work-experience{
        overflow: hidden;
        .icon-work{
            left: 83px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -62px;
        }
    }
    .project-experience{
        overflow: hidden;
        .icon-project{
            left: 83px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -92px;
        }
    }
    .education-experience{
        overflow: hidden;
        .icon-education{
            left: 83px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -123px;
        }
    }
    .school-info{
         overflow: hidden;
        .icon-school{
            left: 83px;
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
        width:70%;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
        font-weight: bold;
        color: #ff6000;
        vertical-align: baseline;
        padding: 0px 25px;
        margin:0 auto;
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
        width:70%;
        height: 40px;
        line-height: 40px;
        font-size:18px;
        color: #666;
        margin:0 auto;
        background-color: #f5f5f5;
    }
    .content-editor{
        width:70%;
        margin:0 auto;
        border:1px solid #FFFFFF;
        .prev{
            position: absolute;
            top:50%;
            left: 0;
            width:40px;
            height: 40px;
            background:url(../assets/icon/prev_light.png) no-repeat center center;
            background-size: 100% 100%;
            cursor:pointer;
            &:hover{
                background:url(../assets/icon/prev_dark.png) no-repeat center center;
                background-size: 100% 100%;
            }
        }
        .next{
            position: absolute;
            top:50%;
            right: 0;
            width:40px;
            height: 40px;
            background:url(../assets/icon/next_light.png) no-repeat center center;
            background-size: 100% 100%;
            cursor:pointer;
            &:hover{
                background:url(../assets/icon/next_dark.png) no-repeat center center;
                background-size: 100% 100%;
            }
        }
    }
}
</style>


<template>
<div class="recruit-build">
    <div class="confluid-container">
        <!--个人信息-->
        <div class="personal-info block" v-show="infoBlock">
            <strong class="hd"><span class="icon icon-info"></span>个人信息</strong>
            <div class="content-editor">
                <el-form ref="resume" :model="resume" :rules="resumeRules"   label-width="120px" label-position="left">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="resume.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-input v-model="resume.sex" ></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="birthDate">
                         <el-date-picker type="date" placeholder="选择日期" v-model="resume.birthDate"
                          style="width: 100%;" ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="手机" prop="phoneNumber">
                        <el-input v-model="resume.phoneNumber" ></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="resume.email" ></el-input>
                    </el-form-item>
                    <el-form-item label="居住地" prop="address">
                        <el-input v-model="resume.address" ></el-input>
                    </el-form-item>
                </el-form>
                <div class="next" @click="showBlock('annualIncomeBlock')"></div>
            </div>
        </div>

        <!--当前年收入-->
        <div class="annualIncome block" v-show="annualIncomeBlock">
            <strong class="hd"><span class="icon icon-in"></span>目前年收入</strong>
            <div class="content-editor">
                <el-form ref="annualIncome" :model="resume" :rules="resume2Rules" label-width="120px" label-position="left">
                    <el-form-item label="当前年收入" prop="annualIncome">
                        <el-input v-model="resume.annualIncome"></el-input>
                    </el-form-item>
                </el-form>
                <div class="prev" @click="showBlock('infoBlock')"></div>
                <div class="next" @click="showBlock('jobIntentionBlock')"></div>
            </div>

        </div>

        <!--求职意向-->
        <div class="job-intention block" v-show="jobIntentionBlock">
            <strong class="hd"><span class="icon icon-intention"></span>求职意向</strong>
            <div class="content-editor">
                <el-form ref="jobIntention" :model="jobIntention" :rules="jobIntentionRules" label-width="120px" label-position="left">
                    <el-form-item label="期望薪资" prop="salary">
                        <el-input v-model="jobIntention.salary"></el-input>
                    </el-form-item>
                    <el-form-item label="地点" prop="workPlace">
                        <el-input v-model="jobIntention.workPlace" >
                            <el-button slot="append" icon="el-icon-search" @click="citySelectedDialogVisible = true;">
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="职能" prop="function">
                        <el-input v-model="jobIntention.function"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="position"> 
                        <el-input v-model="jobIntention.position"></el-input>
                    </el-form-item>
                    <el-form-item label="行业" prop="industry">
                        <el-input v-model="jobIntention.industry"></el-input>
                    </el-form-item>
                    <el-form-item label="个人标签" prop="industryLabel">
                        <el-input v-model="jobIntention.industryLabel"></el-input>
                    </el-form-item>
                    <el-form-item label="自我评价" prop="introduction">
                        <el-input type="textarea"  v-model="jobIntention.introduction"  placeholder="自我评价/1000字以内"
                        :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item label="工作类型" prop="workType">
                        <el-input v-model="jobIntention.workType"></el-input>
                    </el-form-item>
                </el-form>
                <div class="prev" @click="showBlock('annualIncomeBlock')"></div>
                <div class="next" @click="showBlock('workExperienceBlock')"></div>
            </div>
            
        </div>

        <!--工作经验-->
        <div class="work-experience block" v-show="workExperienceBlock">
            <strong class="hd"><span class="icon icon-work"></span>工作经验</strong>
            <div class="content-editor">
                <el-form ref="workExperience" :model="workExperience" :rules="workExperienceRules" label-width="120px" label-position="left">
                     <el-form-item label="时间" required>
                        <el-col :span="11">
                             <el-form-item prop="startDate">
                                <el-date-picker type="date" placeholder="选择开始日期" v-model="workExperience.startDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="endDate">
                                <el-date-picker type="date" placeholder="选择结束日期" v-model="workExperience.endDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item> 
                    <el-form-item label="公司" prop="companyName">
                        <el-input v-model="workExperience.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="职能" prop="function">
                        <el-input v-model="workExperience.function"></el-input>
                    </el-form-item>
                    <el-form-item label="行业" prop="industry">
                        <el-input v-model="workExperience.industry"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="position">
                        <el-input v-model="workExperience.position"></el-input>
                    </el-form-item>
                    <el-form-item label="公司规模" prop="starffNumber">
                        <el-input v-model="workExperience.starffNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" prop="department">
                        <el-input v-model="workExperience.department"></el-input>
                    </el-form-item>
                    <el-form-item label="公司性质" prop="companyType">
                        <el-input v-model="workExperience.companyType"></el-input>
                    </el-form-item>
                    <el-form-item label="工作描述" prop="workDetails">
                        <el-input type="textarea"  v-model="workExperience.workDetails"  placeholder="自我评价/1000字以内"
                        :rows="5"  resize="none"></el-input>
                    </el-form-item>
                </el-form>
                <div class="prev" @click="showBlock('jobIntentionBlock')"></div>
                <div class="next" @click="showBlock('projectExperienceBlock')"></div>
            </div>
        </div>

        <!--项目经验-->
        <div class="project-experience block" v-show="projectExperienceBlock">
            <strong class="hd"><span class="icon icon-project"></span>项目经验</strong>
            <div class="content-editor">
                <el-form ref="projectExperience" :model="projectExperience" :rules="projectExperienceRules" label-width="120px" label-position="left">
                    <el-form-item label="公司" prop="companyName">
                        <el-input v-model="projectExperience.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="时间">
                        <el-col :span="11">
                            <el-form-item prop="startDate">
                                <el-date-picker type="date" placeholder="选择开始日期" v-model="projectExperience.startDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="endDate">
                                <el-date-picker type="date" placeholder="选择结束日期" v-model="projectExperience.endDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="项目名称" prop="projectName">
                        <el-input v-model="projectExperience.projectName"></el-input>
                    </el-form-item>
                    <el-form-item label="项目描述" prop="projectDetails">
                        <el-input type="textarea" v-model="projectExperience.projectDetails" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item label="责任描述" prop="dutyDetails">
                        <el-input type="textarea" v-model="projectExperience.dutyDetails" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                </el-form>
                <div class="prev" @click="showBlock('workExperienceBlock')"></div>
                <div class="next" @click="showBlock('educationExperienceBlock')"></div>
            </div>
        </div>

        <!--教育经历-->
        <div class="education-experience block" v-show="educationExperienceBlock">
            <strong class="hd"><span class="icon icon-education"></span>教育经历</strong>
            <div class="content-editor">
                <el-form ref="educationExperience" :model="educationExperience" :rules="educationExperienceRules" label-width="120px" label-position="left">
                    <el-form-item label="时间">
                         <el-col :span="11">
                            <el-form-item prop="startDate">
                                <el-date-picker type="date" placeholder="选择开始日期" v-model="educationExperience.startDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="endDate">
                                <el-date-picker type="date" placeholder="选择结束日期" v-model="educationExperience.endDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="学校" prop="school">
                        <el-input v-model="educationExperience.school"></el-input>
                    </el-form-item>
                    <el-form-item label="学历" prop="education">
                        <el-input  v-model="educationExperience.education"></el-input>
                    </el-form-item>
                    <el-form-item label="专业" prop="profession">
                        <el-input  v-model="educationExperience.profession"></el-input>
                    </el-form-item>
                    <el-form-item label="专业描述" prop="details">
                        <el-input type="textarea" v-model="educationExperience.details" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                </el-form>
                <div class="prev" @click="showBlock('projectExperienceBlock')"></div>
                <div class="next" @click="showBlock('schoolInfoBlock')"></div>
            </div>
        </div>

        <!--在校情况-->
        <div class="school-info block" v-show="schoolInfoBlock">
            <strong class="hd"><span class="icon icon-school"></span>在校情况</strong>
            <h1 class="st">校内荣誉</h1>
            <div class="content-editor">
                <el-form ref="schoolHonor" :model="schoolHonor" :rules="schoolHonorRules" label-width="120px" label-position="left">
                    <el-form-item label="时间" prop="startDate">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="schoolHonor.startDate" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="奖项" prop="prizeName">
                        <el-input v-model="schoolHonor.prizeName"></el-input>
                    </el-form-item>
                    <el-form-item label="级别" prop="level">
                        <el-input  v-model="schoolHonor.level"></el-input>
                    </el-form-item>
                </el-form>
            </div>

            <h1 class="st">校内职务</h1>
            <div class="content-editor">
                <el-form ref="schoolDuties" :model="schoolDuties" :rules="schoolDutiesRules" label-width="120px" label-position="left">
                    <el-form-item label="时间" >
                        <el-col :span="11">
                            <el-form-item prop="startDate">
                                <el-date-picker type="date" placeholder="选择开始日期" v-model="schoolDuties.startDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col style="text-align: center;" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="endDate">
                                <el-date-picker type="date" placeholder="选择结束日期" v-model="schoolDuties.endDate" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="职务" prop="name">
                        <el-input v-model="schoolDuties.name"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="details">
                        <el-input type="textarea"  v-model="schoolDuties.details" :rows="5"  resize="none"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="checkSchool">保存</el-button>
                    </el-form-item>
                </el-form>
                <div class="prev" @click="showBlock('educationExperienceBlock')"></div>
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
    var phoneNumberPass = (rule, value, callback) => {  //电话校验
        if (value === '') {
            callback(new Error('请输入手机号码'));
        } else {
            if (this.resume.phoneNumber !== '') {
                let reg=/^[1][3,4,5,7,8][0-9]{9}$/;  
                if (!reg.test(value)) {  
                    callback(new Error('请输入正确的手机号'));
                }else{
                    callback();  
                }
            } 
        }
    };
    var emailPass = (rule, value, callback) => {  //电话校验
        if (value === '') {
            callback(new Error('请输入邮箱'));
        } else {
            if (this.resume.emailPass !== '') {
                let reg= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;  
                if (!reg.test(value)) {  
                    callback(new Error('请输入正确邮箱'));
                }else{
                    callback();  
                }
            } 
        }
    };
      return{
        routerParams:{},

        infoBlock:true,
        annualIncomeBlock:false,
        jobIntentionBlock:false,
        workExperienceBlock:false,
        projectExperienceBlock:false,
        educationExperienceBlock:false,
        schoolInfoBlock:false,

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
            school:'',
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
        },
        resumeRules:{
            name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
            ],
            sex: [
                { required: true, message: '请选择性别', trigger: 'blur' }
            ],
            birthDate:  [
                { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
            ],
            phoneNumber:[
                 { validator: phoneNumberPass, trigger: 'blur' }
            ],
            email:[
                 { validator: emailPass, trigger: 'blur' }
            ],
            address:[
                { required: true, message: '请输入地址', trigger: 'blur' }
            ],
            annualIncome:[
                { required: true, message: '请输入年收入', trigger: 'blur' }
            ],
        },
        resume2Rules:{
            annualIncome:[
                { required: true, message: '请输入年收入', trigger: 'blur' }
            ]
        },
        jobIntentionRules:{
            salary:[
                { required: true, message: '请输入薪资', trigger: 'blur' }
            ],
            workPlace:[
                { required: true, message: '请输入工作地点', trigger: 'blur' }
            ],
            function:[
                { required: true, message: '请输入职能', trigger: 'blur' }
            ],
            position:[
                { required: true, message: '请输入职位', trigger: 'blur' }
            ],
            industry:[
                { required: true, message: '请输入行业', trigger: 'blur' }
            ],
            industryLabel:[
                { required: true, message: '请输入行业标签', trigger: 'blur' }
            ],
            introduction:[
                { required: true, message: '请输入自我介绍', trigger: 'blur' }
            ],
            workType:[
                { required: true, message: '请选择工作类型', trigger: 'blur' }
            ],
        },
        workExperienceRules:{
            startDate:[
                 { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            endDate:[
                 { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
            ],
            companyName:[
                { required: true, message: '请输入公司名称', trigger: 'blur' }
            ],
            companyType:[
                { required: true, message: '请输入公司类型', trigger: 'blur' }
            ],
            function:[
                { required: true, message: '请输入职能', trigger: 'blur' }
            ],
            industry:[
                { required: true, message: '请输入行业', trigger: 'blur' }
            ],
            position:[
                { required: true, message: '请输入职位', trigger: 'blur' }
            ],
            department:[
                { required: true, message: '请输入部门', trigger: 'blur' }
            ],
            workDetails:[
                { required: true, message: '请输入工作详情', trigger: 'blur' }
            ],
            starffNumber:[
                { required: true, message: '请输入公司规模', trigger: 'blur' }
            ],
        },
        projectExperienceRules:{
            companyName:[
                  { required: true, message: '请输入公司名称', trigger: 'blur' }
            ],
            startDate:[
                 { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            endDate:[
                 { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
            ],
            projectName:[
                { required: true, message: '请输入项目名称', trigger: 'blur' }
            ],
            projectDetails:[
                { required: true, message: '请输入项目详情', trigger: 'blur' }
            ],
            dutyDetails:[
                { required: true, message: '请输入责任详情', trigger: 'blur' }
            ],
        },
        educationExperienceRules:{
            startDate:[
                 { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            endDate:[
                 { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            school:[
                { required: true, message: '请输入学校', trigger: 'blur' }
            ],
            education:[
                { required: true, message: '请选择学历', trigger: 'blur' }
            ],
            profession:[
                { required: true, message: '请输入专业', trigger: 'blur' }
            ],
            details:[
                { required: true, message: '请输入专业详情', trigger: 'blur' }
            ],
        },
        schoolHonorRules:{
            startDate:[
                 { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            prizeName:[
                { required: true, message: '请输入获奖名称', trigger: 'blur' }
            ],
            level:[
                { required: true, message: '请输入获奖级别', trigger: 'blur' }
            ],
        },
        schoolDutiesRules:{
            startDate:[
                 { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
            ],
            endDate:[
                 { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
            ],
            name:[
                { required: true, message: '请输入职务名称', trigger: 'blur' }
            ],
            details:[
                { required: true, message: '请输入责任详情', trigger: 'blur' }
            ],
        }
      }
  },
  methods:{
    citySelected(city){
        this.jobIntention.workPlace = city;
        this.citySelectedDialogVisible = false;
    },
    //个人信息下一步
    infoOnSubmit(){
        this.infoBlock = false;
        this.annualIncomeBlock = true;
        this.jobIntentionBlock = false;
        this.workExperienceBlock = false;
        this.projectExperienceBlock = false;
        this.educationExperienceBlock = false;
        this.schoolInfoBlock = false;
    },
    showBlock(block){
        //表单验证
        if(block == 'infoBlock'){//验证基本信息
            this.closeAllBlock();
            this[block] = true;
        }else if(block == 'annualIncomeBlock'){//验证基本信息
            this.$refs["resume"].validate((valid) => {
                if (valid) {
                    this.closeAllBlock();
                    this[block] = true;
                } else {
                    return false;
                }
            });
        }else if(block == 'jobIntentionBlock'){
            this.$refs["annualIncome"].validate((valid) => {
                if (valid) {
                    this.closeAllBlock();
                    this[block] = true;
                } else {
                    return false;
                }
            });
        }else if(block == 'workExperienceBlock'){
            this.$refs["jobIntention"].validate((valid) => {
                if (valid) {
                    this.closeAllBlock();
                    this[block] = true;
                } else {
                    return false;
                }
            });
        }else if(block == 'projectExperienceBlock'){
            this.$refs["workExperience"].validate((valid) => {
                if (valid) {
                    this.closeAllBlock();
                    this[block] = true;
                } else {
                    return false;
                }
            });
        }else if(block == 'educationExperienceBlock'){
            this.$refs["projectExperience"].validate((valid) => {
                if (valid) {
                    this.closeAllBlock();
                    this[block] = true;
                } else {
                    return false;
                }
            });
        }else if(block == 'schoolInfoBlock'){
            this.$refs["educationExperience"].validate((valid) => {
                if (valid) {
                    this.closeAllBlock();
                    this[block] = true;
                } else {
                    return false;
                }
            });
        } 
    },
    checkSchoolHonor(){
        this.$refs["schoolHonor"].validate((valid) => {
            if (valid) {
                return true;
            } else {
                return false;
            }
        });
    },
    checkSchoolDuties(){
        this.$refs["schoolDuties"].validate((valid) => {
            if (valid) {
                return true;
            } else {
                return false;
            }
        });
    },
    closeAllBlock(){
        this.infoBlock = false;
        this.annualIncomeBlock = false;
        this.jobIntentionBlock = false;
        this.workExperienceBlock = false;
        this.projectExperienceBlock = false;
        this.educationExperienceBlock = false;
        this.schoolInfoBlock = false;
    },
    checkSchool(){
       this.$refs["schoolHonor"].validate((valid) => {
            if (valid) {
                this.$refs["schoolDuties"].validate((valid) => {
                    if (valid) {
                       this.bulidResume();
                    } else {
                        return false;
                    }
                });
            } else {
                return false;
            }
        });
    },
    bulidResume(){
        this.resume.birthDate = moment(this.resume.birthDate).format('YYYY-MM-DD');

        this.workExperience.startDate =  moment(this.workExperience.startDate).format('YYYY-MM-DD');
        this.workExperience.endDate = moment(this.workExperience.endDate).format('YYYY-MM-DD');

        this.projectExperience.startDate = moment(this.projectExperience.startDate).format('YYYY-MM-DD');
        this.projectExperience.endDate = moment(this.projectExperience.endDate).format('YYYY-MM-DD');

        this.educationExperience.startDate = moment(this.educationExperience.startDate).format('YYYY-MM-DD');
        this.educationExperience.endDate = moment(this.educationExperience.endDate).format('YYYY-MM-DD');

        this.schoolHonor.startDate = moment(this.schoolHonor.startDate).format('YYYY-MM-DD');

        this.schoolDuties.startDate = moment(this.schoolDuties.startDate).format('YYYY-MM-DD'); 
        this.schoolDuties.endDate = moment(this.schoolDuties.endDate).format('YYYY-MM-DD'); 

        let params = {
            name:this.resume.name,
            sex:this.resume.sex,
            birthDate:this.resume.birthDate,
            phoneNumber:this.resume.phoneNumber,
            email:this.resume.email,
            address:this.resume.address,
            annualIncome:this.resume.annualIncome,
            jobIntention:this.jobIntention,
            workExperiencesList:[this.workExperience],
            projectExperiencesList:[this.projectExperience],
            educationExperience:this.educationExperience,
            schoolHonorList:[this.schoolHonor],
            schoolDutiesList:[this.schoolDuties],
            jobSeekerId:localStorage.getItem("id")
        }
        bulidResume(params).then(res=>{
            this.$message({
                message: res.data.data,
                type: 'success'
            });
             this.$router.push({
                path: 'personalCenter', 
                name: 'personalCenter',
            })
        });
    }
  },
  mounted(){

  },
  filters:{
      dataFrm:function(el){
          return moment(el).format("YYYY-MM-DD");
      }
  }
}
</script>
