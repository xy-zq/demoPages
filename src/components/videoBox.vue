<template>
    <div>
        <div class="box">
            <div class="title">
                <div>{{info.name||''}}</div>
                <div>{{info.type||''}}</div>
            </div>
            <div :class="info.size"></div>
            <div class="btns">
                <el-button icon="el-icon-microphone" type="text"></el-button>
                <el-button icon="el-icon-video-camera" type="text"></el-button>
                <el-button icon="el-icon-switch-button" type="text"></el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'videoBox',
        props: {
            info: Object,
        },
    }
</script>

<style scoped>
    .big{
        width: 35vw;
        height: 400px;
        background: grey;
    }
    .small{
        width: 300px;
        height: 300px;
        background: grey;
    }
    .title{
        width: 300px;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
</style>