<style lang="less" scoped>
.city-selecte{
    overflow: hidden;
    border-top:1px solid  rgba(0,0,0,0.3);
    .name-list{
        width:200px;
        float: left;
        .nl{
            position: relative;
            left: -40px;
            top: -14px;
            list-style: none;
            .nl-li{
                height: 25px;
                line-height: 25px;
                word-wrap: break-word;
                word-break: normal;
                padding: 8px 0 8px 14px;
                background-color:#E5E5E5;
                cursor: pointer;
                &:hover{
                     background-color:#d9d9d9;
                }
            }
        }
    }
    .city-content{
        width:80%;
        float: left;
        margin:0 0 0 0;
        .cl-ta{
            overflow: hidden;
            width:100%;
            list-style: none;
            font-size: 12px;
            font-style: normal;
            color: #333;
            padding-left:0px;
            cursor: pointer;
            .each{
                float: left;
                display: block;
                padding:2px 5px;
                height:32px;
                line-height:32px;
                width:32px;
                margin-right:70px;
                &:hover{
                    background-color:#E5E5E5;
                }
            }
        }
    }
}
</style>

<style lang="less">
.el-dialog__body{
    padding: 0;
}
</style>

<template>
  <div class="city-selecte">
    <div class="city">
        <div class="name-list">
            <ul class="nl" @click="cityChange($event)" id="nl">
                <li class="nl-li">热门城市</li>
                <li class="nl-li">A B C</li>
                <li class="nl-li">D E F G</li>
                <li class="nl-li">H I</li>
                <li class="nl-li">J K</li>
                <li class="nl-li">L M N</li>
                <li class="nl-li">O P Q R</li>
                <li class="nl-li">S T U</li>
            </ul>
        </div>
        <div class="city-content">
            <!-- <h5>热门城市</h5> -->
            <div class="city-list">
                <ul class="cl-ta">
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                    <li><span class="each">北京</span></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import{ getCityList } from "../../api";
export default {
  data(){
      return{

      }
  },
  methods:{
      cityChange(event){
        var parent= document.getElementById("nl");
        var children = parent.children;
        for(let i in children){
            if(children[i] == event.target){
                children[i].style.backgroundColor = "#FFFFFF";
                children[i].style.borderLeft = "5px solid #ff6000";
                children[i].style.color = "#ff6000";
            }else{
                children[i].style.backgroundColor = "#E5E5E5";
                children[i].style.borderLeft = "none";
                children[i].style.color = "#606266";
            }
        }
      },
      getCityList(pyCode){
        getCityList(pyCode).then(res => {
            console.log(res);
        });
      }
  },
  mounted(){
    var  pyCode = '热门城市';
    this.getCityList(pyCode);
  }
}
</script>
