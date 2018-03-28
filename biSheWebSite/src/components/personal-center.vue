<!--个人中心-->
<style lang="less" scoped>
.personal-center{
    .container-fluid{
        .page-content{
            width:70%;
            margin: 1rem auto;
            .nav-bar{
                float: left;
                width: 15%;
            }
        }
    }
}
</style>

<template>
<div class="personal-center">
    <div class="container-fluid">
        <div class="page-content">
            <div class="nav-bar">
                <el-menu
                    default-active="2" 
                    background-color="rgba(0,0,0,0.1)"
                    text-color="#000"
                    color-size="12px"
                    active-text-color="#ff6000"
                    class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <span slot="title">个人信息</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">简历中心</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <span slot="title">谁看过我</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title">我的收藏</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <span slot="title">我的申请</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <span slot="title">安全中心</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="content">

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>
