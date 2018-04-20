<!--简历编辑-->
<style lang="less" scoped>
.recruit-editor{
    width:70%;
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
        .icon-work{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -62px;
        }
    }
    .project-experience{
        .icon-project{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -92px;
        }
    }
    .education-experience{
        .icon-education{
            left: -3px;
            top: 3px;
            background:url(../assets/icon/icon_resume.png) no-repeat;
            background-position: -30px -123px;
        }
    }
    .school-info{
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
}
</style>


<template>
<div class="recruit-editor">
    <div class="confluid-container">
        <!--个人信息-->
        <div class="personal-info block">
            <h1 class='name'>汤玉龙</h1>
            <span class="at">现居住重庆-南岸区 │ 1年工作经验 │ 男 │ 22 岁 (1995/11/15)</span>
            <span class="email in">1073204945@qq.com</span>
            <span class="phone in">18716381592</span>
        </div>

        <!--当前年收入-->
        <div class="annualIncome block">
            <strong class="hd"><span class="icon icon-in"></span>目前年收入 <span class="icon-write"></span></strong>
            <span class="salary">9万元</span>
            <span class="explain">（包含基本工资、补贴、奖金、股权收益等）</span>
        </div>

        <!--求职意向-->
        <div class="job-intention block">
            <strong class="hd"><span class="icon icon-intention"></span>求职意向<span class="icon-write"></span></strong>
            <!-- <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div> -->
            <div class="content">
                <div class="line-half"><span class="ti">期望薪资：</span><span class="de">10-15万元/年</span></div>
                <div class="line-half"><span class="ti">地点:</span><span  class="de">重庆</span></div>
                <div class="line-half"><span class="ti">职能/职位：</span><span  class="de">Web前端开发工程师</span></div>
                <div class="line-half"><span class="ti">行业:</span><span  class="de">计算机软件</span></div>
                <div class="line"><span class="ti">个人标签:</span><span  class="de">前端开发</span></div>
                <div class="line"><span class="ti">自我评价:</span><span  class="de">责任、主观能动性强</span></div>
                <div class="line"><span class="ti">工作类型:</span><span  class="de">全职</span></div>
            </div>
            
        </div>

        <!--工作经验-->
        <div class="work-experience block">
            <strong class="hd"><span class="icon icon-work"></span>工作经验<span class="icon-write"></span></strong>
            <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div>
        </div>

        <!--项目经验-->
        <div class="project-experience block">
            <strong class="hd"><span class="icon icon-project"></span>项目经验<span class="icon-write"></span></strong>
            <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div>
        </div>

        <!--教育经历-->
        <div class="education-experience block">
            <strong class="hd"><span class="icon icon-education"></span>教育经历<span class="icon-write"></span></strong>
            <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div>
        </div>

        <!--在校情况-->
        <div class="school-info block">
            <strong class="hd"><span class="icon icon-school"></span>在校情况<span class="icon-write"></span></strong>
            <div class="no">
                <p>完善工作经验，展现工作内容及能力，让HR更了解你！</p>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  methods:{

  },
  mounted(){

  }
}
</script>
