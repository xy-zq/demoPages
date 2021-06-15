<template>
    <div >
        <div class="btns">
            <el-button type="primary">一号屏</el-button>
            <el-button type="primary">二号屏</el-button>
            <el-button type="primary">三号屏</el-button>
            <el-button type="primary">四号屏</el-button>
        </div>
        <div class="videos">
            <video-box v-for="(video,index) in videos" :key="index" :info="video"></video-box>
        </div>
    </div>
</template>

<script>
    import videoBox from './videoBox'
    export default {
        name:'videoPannel',
        components: {
            videoBox,
        },
        data() {
            return {
                videos: [
                    {name:'重庆渝中菜园坝消防(主席位）',type:'固定会议终端',size:'big'},
                    {name:'重庆渝中菜园坝消防(主席位）',type:'固定会议终端',size:'big'},
                    {name:'重庆渝中菜园坝消防(主席位）',type:'固定会议终端',size:'small'},
                    {name:'重庆渝中菜园坝消防(主席位）',type:'固定会议终端',size:'small'},
                    {name:'重庆渝中菜园坝消防(主席位）',type:'固定会议终端',size:'small'},
                    {name:'重庆渝中菜园坝消防(主席位）',type:'固定会议终端',size:'small'},
                ]
            }
        },
    }
</script>

<style scoped>
    .videos{
        width: 80vw;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>