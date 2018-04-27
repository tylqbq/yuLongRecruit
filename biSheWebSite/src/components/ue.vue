<!---->
<style scoped>
.editor{
    width:100px;
    height:100px;
}
</style>

<template>
    <div class="editor" id="editor" type="text/plain"></div>
</template>


<script>
export default {
   name: 'quillEditor',
    data () {
        return {
            editor: null
        }
    },
    props: {
        defaultMsg: {
            type: String
        },
        config: {
            type: Object
        }
    },
    mounted() {
        const _this = this;
        this.editor = UE.getEditor('editor', this.config); // 初始化UE
        this.editor.addListener("ready", function () {
            _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
        });
    },
    methods: {
        getUEContent() { // 获取内容方法
            return this.editor.getContent()
        }
    },
    destroyed() {
    this.editor.destroy();
    }
}
</script>
