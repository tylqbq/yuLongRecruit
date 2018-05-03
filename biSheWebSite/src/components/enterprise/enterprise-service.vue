<!--企业服务-->
<style lang="less" scoped>
@import "../../assets/common";
.enterprise-service{
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
                        font-size: 20px;
                        font-weight: bold;
                        color: #333;
                    }
                    .info{
                        line-height: 24px;
                        font-size: 16px;
                        margin: 5px 0;
                    }
                    p{
                        margin: 0;
                    }
                }
                .company-info{
                    position: relative;
                    .cn{
                        height: 30px;
                        line-height: 30px;
                        font-size: 20px;
                        font-weight: bold;
                        color: #333;
                        margin: 0 10px 8px 0;
                    }
                    .ci{
                        font-size: 14px;
                        color: #666;
                    }
                    .cd{
                        h5{
                            font-size: 18px;
                            font-weight: bold;
                            color: #333;
                            margin:10px 0;
                        }
                        .cdt{
                            color:#666;
                            font-size:14px;
                        } 
                    }
                    .ca{
                        margin:10px 0;
                    }
                    .cgInf{
                        position: absolute;
                        right: 0;
                        bottom:0;
                        cursor: pointer;
                        color:#666;
                        &:hover{
                            color:#ff6000;
                        }
                    }
                }
                
                .recruit-list{
                    clear: both;
                    .resume-content{
                        width:100%;
                    }
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
                                width: 160px;
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
                                width: 100px;
                                font-size: 14px;
                                color: #666;
                            }
                            .sp1{
                                width: 550px;
                                text-align:left;
                            }
                            .icon{
                                position:absolute;
                                width:32px;
                                height:32px;
                                left: 12%;
                                top: 24%;
                                background:url(../../assets/icon/sbox-s.png) no-repeat;
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
.enterprise-service{
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
    .el-form-item{
        text-align:right;
    }
}

</style>


<template>
<div class="enterprise-service">
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
                        <span slot="title">公司信息</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">发布招聘</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span slot="title">收到简历</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title">简历搜索</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <span slot="title">安全中心</span>
                    </el-menu-item>
                </el-menu> 
            </div>

            <div class="content">
                <!--公司信息-->
                <div v-show="block.block_1">
                    <div class="personal-info" >
                        <p class="name">{{user.member}}，你好！</p>
                        <p class="info">
                            <span>电话：</span> <span>{{user.phoneNumber}}</span>
                            <span>邮箱：</span><span>{{user.email}}</span>
                             <span>资质审核：</span><span>{{user.examinePass}}</span>
                        </p>
                    </div>
                    <div class="company-info">
                        <h1 class="cn">{{company.companyName}}</h1>
                        <div class="ci"><span>{{company.companyType}}|{{company.staffNumber}}|{{company.companyBusiness}}</span></div>
                        <div class="cd">
                            <h5>公司简介：</h5>
                            <dl class="cdt" v-html="company.companyInfo"> 
                                {{company.companyInfo}} 
                            </dl> 
                        </div>
                        <p class="ca"><span>地址：</span>{{company.companyAddress}}</p>
                        <span class="cgInf" @click="companyInfoDialog=true">修改信息</span>
                    </div>
                    <div>
                         <h1>已发布职位</h1>
                         <el-table
                            ref="multipleTable"
                            :data="recruitData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @cell-click="selectedDelivery">

                            <el-table-column
                            label="职位"
                            width="370">
                            <template slot-scope="scope"><a href="#">{{ scope.row.positionName}}</a></template>  
                            </el-table-column>

                            <el-table-column
                            prop="salaryRange"
                            label="薪资"
                            width="300">
                            <template slot-scope="scope"><a href="#">{{ scope.row.salaryRange }}</a></template>  
                            </el-table-column>

                            <el-table-column
                            class-name="salary"
                            prop="publishDate"
                            label="发布时间"
                            width="160" >
                            <template slot-scope="scope"><a href="#">{{ scope.row.publishDate }}</a></template> 
                            </el-table-column>
                        </el-table>
                    </div>
                    
                </div>
                <!--公司信息-->

                <!--发布招聘-->
                <div class="recruit-list" v-show="block.block_2">
                    <div class="resume-content">
                        <div class="block_title">
                            <span class="tl">发布招聘</span><span class="tr" @click="bulidRecruit">发布招聘</span>
                        </div>
                        <div class="table">
                            <el-table
                            ref="multipleTable"
                            :data="recruitData"
                            tooltip-effect="dark"
                            style="width: 100%"
                            @cell-click="selectedDelivery">

                            <el-table-column
                            label="职位"
                            width="300">
                            <template slot-scope="scope"><a href="#">{{ scope.row.positionName}}</a></template>  
                            </el-table-column>

                            <el-table-column
                            prop="salaryRange"
                            label="薪资"
                            width="260">
                            <template slot-scope="scope"><a href="#">{{ scope.row.salaryRange }}</a></template>  
                            </el-table-column>

                            <el-table-column
                            class-name="salary"
                            prop="publishDate"
                            label="发布时间"
                            width="130" >
                            <template slot-scope="scope"><a href="#">{{ scope.row.publishDate }}</a></template> 
                            </el-table-column>

                            <el-table-column
                                label="操作"
                                width="160">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="deletePublishRecruit(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        </div>
                    </div>
                    
                </div>
                <!--发布招聘-->

                <!--收到简历-->
                <div v-show="block.block_3" class="block_with_me block">
                    <div class="block_title">
                        <span class="tl">收到简历</span>
                    </div>
                    <div class="none" style="display:none">
                        <p>近期没有收到简历</p>
                    </div>
                    <div class="table">
                            <el-table
                                :data="resumeData"
                                style="width: 100%"
                                @cell-click="receivedResumeClick">
                                <el-table-column
                                prop="positionName"
                                label="职位"
                                width="320">
                                <template slot-scope="scope"><a href="#">{{ scope.row.positionName}}</a></template>  
                                </el-table-column>
                                <el-table-column
                                prop="resumeName"
                                label="简历"
                                width="260">
                                 <template slot-scope="scope"><a href="#">{{ scope.row.resumeName}}</a></template>  
                                </el-table-column>
                                <el-table-column
                                    prop="deliveryTime"
                                    label="投递时间"
                                    width="250">
                                </el-table-column>
                            </el-table>
                        </div>
                </div>
                <!--谁看过我-->

                <!--简历搜索-->
                <div v-show="block.block_4" class="block_collection block">
                    <div class="block_title">
                        <span class="tl">简历搜索</span>
                    </div>
                
                </div>
                <!--我的收藏-->

                <!--安全中心-->
                <div v-show="block.block_6" class="block_securit block">
                    <div class="block_title">
                        <span class="tl">安全中心</span>
                        <!-- <span class="tr">创建简历</span> -->
                    </div>
                    <div class="sbox">
                        <div class="s s1">
                            <h2><span class="icon icon_user"></span>会员名</h2>
                            <span class="sp1">{{user.member}}</span>
                            <span class="change" @click="userNameDialog=true">修改</span>
                        </div>
                        <div class="s s2">
                            <h2><span class="icon icon_pass"></span>登录密码</h2>
                            <span class="sp1" style="color:#ff6000">互联网帐号存在被盗风险，建议你定期更改密码以保护账户安全</span>
                            <span class="change" @click="passwordDialog=true">修改</span>
                        </div>
                        <div class="s s3">
                            <h2><span class="icon icon_phone"></span>手机</h2>
                            <span class="sp1">{{user.phoneNumber}}（已绑定）</span>
                            <span class="change" @click="phoneNumberDialog=true">修改</span>
                        </div>
                        <div class="s s4">
                            <h2><span class="icon icon_email"></span>邮箱</h2>
                            <span class="sp1">{{user.email}}</span>
                            <span class="change" @click="emailDialog=true">修改</span>
                        </div>
                    </div>
                </div>
                    <!--安全中心-->
                    <el-dialog title="修改会员名" :visible.sync="userNameDialog" width="30%">
                        <el-form :model="user">
                            <el-form-item label="会员名" label-width="100px">
                                <el-input v-model="user.member"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="userNameDialog = false">取 消</el-button>
                                <el-button type="primary" @click="updateCompanyUser">确 定</el-button>
                            </el-form-item>
                        </el-form>
                    </el-dialog>

                <el-dialog title="修改密码" :visible.sync="passwordDialog" width="30%">
                    <el-form :model="changePasswordParams">
                        <el-form-item label="旧密码" label-width="100px">
                            <el-input type="password" v-model="changePasswordParams.oldPassword"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" label-width="100px">
                            <el-input type="password" v-model="changePasswordParams.newPassword"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="passwordDialog = false">取 消</el-button>
                            <el-button type="primary" @click="updatePassword">确 定</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>

                <el-dialog title="修改手机" :visible.sync="phoneNumberDialog" width="30%">
                    <el-form :model="user">
                        <el-form-item label="手机" label-width="100px">
                            <el-input v-model="user.phoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="phoneNumberDialog = false">取 消</el-button>
                            <el-button type="primary" @click="updatePhoneNumber">确 定</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
                <el-dialog title="修改邮箱" :visible.sync="emailDialog" width="30%">
                    <el-form :model="user">
                        <el-form-item label="邮箱" label-width="100px">
                            <el-input v-model="user.email"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="emailDialog = false">取 消</el-button>
                            <el-button type="primary" @click="updateEmail">确 定</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>

                <!--公司信息修改-->
                <el-dialog title="公司信息修改"  :visible.sync="companyInfoDialog" width="70%">
                    <el-form :model="company">
                        <el-form-item label="公司名称" label-width="100px">
                            <el-input v-model="company.companyName"></el-input>
                        </el-form-item>
                        <el-form-item label="公司类型" label-width="100px">
                            <el-input v-model="company.companyType"></el-input>
                        </el-form-item>
                        <el-form-item label="公司规模" label-width="100px">
                            <el-input v-model="company.staffNumber"></el-input>
                        </el-form-item>
                        <el-form-item label="公司业务" label-width="100px">
                            <el-input v-model="company.companyBusiness"></el-input>
                        </el-form-item>
                        <el-form-item label="公司简介" label-width="100px">
                           <quill-editor 
                                class="quill" 
                                v-model="company.companyInfo" 
                                :options="editorOption">
                            </quill-editor>
                        </el-form-item>
                        <el-form-item label="公司地址" label-width="100px">
                            <el-input v-model="company.companyAddress"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button @click="companyInfoDialog = false">取 消</el-button>
                            <el-button type="primary" @click="updateCompanyInfo">确 定</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
                <!--发布招聘-->
                <el-dialog title="发布招聘" :visible.sync="buildRecruitDialog" width="70%">
                    <el-form :model="newRecruit">
                        <el-form-item label="职位名称" label-width="100px">
                            <el-input v-model="newRecruit.positionName"></el-input>
                        </el-form-item>
                        <el-form-item label="工作地点" label-width="100px">
                            <el-input v-model="newRecruit.workPlace"></el-input>
                        </el-form-item>
                        <el-form-item label="薪水范围" label-width="100px">
                            <el-input v-model="newRecruit.salaryRange"></el-input>
                        </el-form-item>
                        <el-form-item label="招聘人数" label-width="100px">
                            <el-input v-model="newRecruit.recruitsNumber"></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式" label-width="100px">
                            <el-input v-model="newRecruit.contactWay"></el-input>
                        </el-form-item>
                        <el-form-item label="工作年限" label-width="100px">
                            <el-input v-model="newRecruit.workTime"></el-input>
                        </el-form-item>
                        <el-form-item label="学历" label-width="100px">
                            <el-input v-model="newRecruit.education"></el-input>
                        </el-form-item>
                        <el-form-item label="工作类型" label-width="100px">
                            <el-input v-model="newRecruit.workType"></el-input>
                        </el-form-item>
                        <el-form-item label="职位详情" label-width="100px">
                            <quill-editor 
                                class="quill" 
                                v-model="newRecruit.positionInfo" 
                                :options="editorOption">
                            </quill-editor>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="buildRecruitDialog = false">取 消</el-button>
                            <el-button type="primary" @click="bulidNewRecruit">确 定</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import {
    updateCompanyInfo,getCompanyUserInfo,getCompanyInfoById,buildRecruit,getRecruitByCompanyId,
    deleteRecruitById,getCompanyDeliveryResume,updateMember,updateCompanyUserPassword,
    updateCompanyUserPhoneNumber,updateCompanyUserEmail} from "../../api";

import moment from "moment";
export default {
    components:{
        quillEditor
    },
  data(){
    return{
        recruitData:[],
        user:{
            member:'',
            userName:'',
            password:'',
            phoneNumber:'',
            email:''
        },
        resumeData:[],
        company:{
            id:''
        },
        editorOption:{
            modules:{
                toolbar:[
                    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                    [{ 'direction': 'rtl' }],    
                    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['clean']                                         // remove formatting button
                ]
            }
        },
        block:{
            block_1:true,
            block_2:false,
            block_3:false,
            block_4:false,
            block_6:false, 
        },
        newRecruit:{
            publishDate:'',
            companyId:'',
        },
        collectionData:[],
        deliveryData:[],
        companyInfoDialog:false,
        buildRecruitDialog:false,
        userNameDialog:false,
        passwordDialog:false,
        phoneNumberDialog:false,
        emailDialog:false,
        changePasswordParams:{
            oldPassword:'',
            newPassword:'',
            jobSeekerId:''
        },
        deliveryCount:0,
        collectionCount:0
    }
  },
  methods:{
    selectedMenu(index){
        for(let i in this.block){
            var curIndex = String(i).split("_")[1];
            if(curIndex == index){
                this.block[i] = true;
            }else{
                this.block[i] = false;
            }
            if(index == 4){
                this.$router.push({
                    path: 'resumeSearch', 
                    name: 'resumeSearch',
                })
            }
        }
    },
    bulidRecruit(){ 
        this.buildRecruitDialog = true;
    },
    bulidNewRecruit(){//新发布招聘
        this.newRecruit.publishDate = moment(new Date()).format('YYYY-MM-DD');
        this.newRecruit.companyId = localStorage.getItem("companyId");
        buildRecruit(this.newRecruit).then(res=>{
            if(res.data.status){
                this.$message({
                    message: res.data.data,
                    type: 'success',
                    duration:800
                });
            }
        });
    },
    deletePublishRecruit(recruit){
        this.$confirm('此操作将删除该招聘, 是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let params={
                id:recruit.id
            };
            deleteRecruitById(params).then(res=>{
                if(res.data.status){
                    this.$message({
                        type: 'info',
                        message: res.data.data,
                        duration:800
                    });  
                }
            });
            
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration:800
          });          
        })
    },
    getCompanyUserInfo(){
        let params ={
            id:localStorage.getItem("id")
        };
        getCompanyUserInfo(params).then(res=>{
            this.user = res.data.data;
        });
    },
    getCompanyInfo(){
        let id = localStorage.getItem("companyId");
        getCompanyInfoById(id).then(res=>{
            this.company = res.data.data;
        }); 
    },
    getRecruitByCompanyId(){
        let params = {
            companyId:localStorage.getItem("companyId"),
            total:0,
            pageSize:10,
            pageNumber:1,
        };
        getRecruitByCompanyId(params).then(res=>{
            this.recruitData = res.data.data.recruitList;
        })
    },
    //得到公司收到的招聘（还未查看的）
    getCompanyDeliveryResume(){
        let params={
            id:localStorage.getItem("companyId"),
        };
        getCompanyDeliveryResume(params).then(res=>{
            this.resumeData = res.data.data;
        });
    },
    getAge(brithDate){
        var NowDate= new Date().getTime();
        let brith = (new Date(brithDate)).getTime();
        let timeDifference = Number(NowDate)-Number(brith); 
        let age= parseInt(timeDifference/(1000*60*60*24*365));
        return age+'岁';
    },
    selectedDelivery(row, column, cell, event){
        var columnName = column.label;//列名
        if(columnName == "职位"){
            this.$router.push({
                path: 'jobDetails', 
                name: 'jobDetails',
                params: { 
                    jobId: row.id,
                    companyId: row.companyId,  
                }
            })
        }
    },
    receivedResumeClick(row, column, cell, event){
        var columnName = column.label;//列名
        if(columnName == "职位"){
            this.$router.push({
                path: 'jobDetails', 
                name: 'jobDetails',
                params: { 
                    jobId: row.recruitId,
                    companyId: row.companyId,  
                }
            })
        }else if(columnName == "简历"){
            this.$router.push({
                path: 'resumeReceivedDetails', 
                name: 'resumeReceivedDetails',
                params: { 
                    resumeId: row.resumeId,
                }
            })
        }
    },
    //修改公司信息
    updateCompanyInfo(){
        this.company.id = localStorage.getItem("companyId")
        updateCompanyInfo(this.company).then(res=>{
            this.$message({
                type: 'info',
                message: res.data.data,
                duration:800
            });  
            this.companyInfoDialog = false;   
            
        });
    },

    /*安全中心*/
    /*修改用户名*/
    updateCompanyUser(){
        updateMember(this.user).then(res=>{
             this.$message({
                type: 'info',
                message: res.data.data,
                duration:800
            });   
            this.userNameDialog = false;
        });
    },
    /*修改密码*/
    updatePassword(){
        this.changePasswordParams.companyUserId = localStorage.getItem("id");
        updateCompanyUserPassword(this.changePasswordParams).then(res=>{
            this.$message({
                type: 'info',
                message: res.data.data,
                duration:800
            }); 
            this.passwordDialog = false;
        });
    },
    /*修改电话*/
    updatePhoneNumber(){
        updateCompanyUserPhoneNumber(this.user).then(res=>{
            this.$message({
                type: 'info',
                message: res.data.data,
                duration:800
            }); 
             this.phoneNumberDialog = false;
        });
    },
    /*修改邮箱*/
    updateEmail(){
        updateCompanyUserEmail(this.user).then(res=>{
            this.$message({
                type: 'info',
                message: res.data.data,
                duration:800
            }); 
            this.emailDialog = false;
        });
    },
  },
  mounted(){
    this.getCompanyUserInfo();
    this.getCompanyInfo();
    this.getRecruitByCompanyId();
    this.getCompanyDeliveryResume();
  }
}
</script>
