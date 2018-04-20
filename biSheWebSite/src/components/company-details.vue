<!--公司详情-->
<style lang="less" scoped>
.company-datails{
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
            .cn{
                float: left;
                height: 30px;
                line-height: 30px;
                font-size: 22px;
                font-weight: bold;
                color: #333;
                margin: 0 10px 8px 0;
            }  margin-bottom: 8px;
            .ci{
                clear: both;
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
}
</style>

<template>
<div class="company-datails">
    <div class="container-fluid">
        <!--职位名称相关-->
        <div class="title">
            <!--职位信息-->
            <div class="generalize">
                <h1 class="cn">{{company.companyName}}</h1>
                <p  class="ci">{{company.companyType}}   |  {{company.staffNumber}}   |  {{company.companyBusiness}}</p>
            </div>
        </div>
        <div class="company-content">
            <div class="company-info">
                <dl v-html="company.companyInfo"> 
                    {{company.companyInfo}} 
                </dl> 
            </div>
            <div class="address">
                <span>公司地址：</span>
                <p>{{company.companyAddress}}</p>
            </div>
        </div>
        <!--所有招聘-->
        <div class="all-recruit">
            <div class="jr-table">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @cell-click="selectedjobOrCompany">

                    <el-table-column
                    label="职位名"
                    width="250">
                    <template slot-scope="scope"><a href="#">{{ scope.row.positionName}}</a></template>  
                    </el-table-column>

                    <el-table-column
                    prop="workPlace"
                    label="工作地点"
                    width="220"
                    show-overflow-tooltip>
                    </el-table-column>

                    <el-table-column
                    class-name="salary"
                    prop="salaryRange"
                    label="薪资"
                    width="121" 
                    show-overflow-tooltip>
                    </el-table-column>

                    <el-table-column
                    prop="publishDate"
                    label="发布时间"
                    width="125"
                    show-overflow-tooltip>
                    </el-table-column>

                </el-table>
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageParams.pageNumber"
                    :page-size="pageParams.pageSize"
                    layout="prev, pager, next, jumper"
                    :total="pageParams.total">
                </el-pagination>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import{ getRecruitById,getCompanyInfoById,getRecruitByCompanyId } from "../api";
export default {
  data(){
      return{
        company:{},
        pageParams:{
            total:1,
            pageSize:25,
            pageNumber:1,
        },
        tableData:[],


      }
  },
  methods:{
    getRecruitByCompanyId(params){
        getRecruitByCompanyId(params).then(res=>{
            console.log(res);
            this.company = res.data.data;
            this.tableData = res.data.data.recruits;
        });
    },
    selectedjobOrCompany(row, column, cell, event){
        var columnName = column.label;//列名
        if(columnName == "职位名"){
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
    handleCurrentChange(pageNumber){
        let params = {
            companyId:this.routerParams.companyId,
            total:0,
            pageSize:10,
            pageNumber:pageNumber,
        }
        this.getRecruitByCompanyId(params);
    }
  },
  mounted(){
    this.routerParams = this.$route.params;
    let params = {
        companyId:this.routerParams.companyId,
        total:0,
        pageSize:10,
        pageNumber:1,
    }
    this.getRecruitByCompanyId(params);
  }
}
</script>
