<style scoped>

</style>

<template>
<div class="article-editor">
    <el-form ref="companyInfoform" :model="article"   label-width="80px" label-position="top">
        <el-form-item label="标题" prop="title">
            <el-input v-model="article.title" placeholder="文章标题"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="article.author" placeholder="文章作者"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
            <el-input v-model="article.type" placeholder="文章类型"></el-input>
        </el-form-item>
       
        <el-form-item label="文章" prop="">
            <quill-editor 
                class="quill" 
                v-model="article.content" 
                :options="editorOption">
            </quill-editor>
        </el-form-item>

        <el-form-item class="item-submit">
            <el-button type="primary" @click="submitArticle">提交</el-button>
        </el-form-item>
    </el-form>
</div>
</template>


<script>
import { quillEditor } from 'vue-quill-editor';
import {publishArticle} from '../../api';
import moment from "moment"
export default {
    components:{
      quillEditor
    },
  data(){
      return{
        article:{
            author:'',
            title:'',
            content:'',
            type:'',
            publishTime:'',
        }
      }
  },
  methods:{
      submitArticle(){
        this.article.publishTime = moment(new Date()).format('YYYY-MM-DD');
        publishArticle(this.article).then(res=>{
            if(res.data.status){
                this.$message({
                    message: res.data.data,
                    type: 'success'
                });
            }
        });
      }
  }
}
</script>
