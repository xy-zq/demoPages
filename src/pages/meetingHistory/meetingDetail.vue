<template>
    <div>
        <div class="title">
            <div class="block"></div>
            会议详情
            <el-button class="btn" type="primary" @click="$router.push('/')" size="small">返回</el-button>
        </div>
        <div class="info">
            <el-form inline>
                <el-form-item label="会议编号">{{form.number}}</el-form-item>
                <el-form-item label="会议时间">{{form.time}}</el-form-item>
                <el-form-item label="会议名称">{{form.name}}</el-form-item>
                <el-form-item label="创建人">{{form.creator}}</el-form-item>
                <el-form-item label="会议类型">{{form.type}}</el-form-item>
            </el-form>
        </div>
        <div class="title">
            <div class="block"></div>
            会议文件
        </div>
        <div class="item">
            <div><i class="el-icon-folder" style="margin:0 10px"/>文件名1 </div>
            <el-button size="small" type="primary">下载</el-button>
        </div>
        <br>
        <div class="title">
            <div class="block"></div>
            参会人员
        </div>
        <el-table
        :data="listData"
        style="width: 100%">
            <el-table-column align="center" type="index" label="序号" ></el-table-column>
            <el-table-column align="center" prop="name" label="参与者名称" ></el-table-column>
            <el-table-column align="center" prop="deviceType" label="设备类型" ></el-table-column>
            <el-table-column align="center" prop="peopleType" label="参与者类型" ></el-table-column>
            <el-table-column align="center" prop="spot" label="端点细节" ></el-table-column>
            <el-table-column align="center" prop="MCU" label="主机MCU/SMC" ></el-table-column>
        </el-table>
            <el-pagination
            class="page"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name:'meetingDetail',
        data() {
            return {
                form:{
                    name:'测试会议',time:'2021年1月27日18:06:28',number:'LK-20536-125',creator:'小明',type:'小型会议'
                },
                listData:[],currentPage:1,
            }
        },
        
    }
</script>

<style scoped>
    .title{
        display: flex;
        font-weight: 550;
        font-size: 20px;
        line-height: 20px;
        margin: 0 0 20px 0;
    }
    .block{
        width: 4px;
        height: 20px;
        margin: 0 10px 0 5px;
        background: #000;
    }
    .btn{
        position: absolute;
        right: 10px;
    }
    .item{
        width:20%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .page{
        position: absolute;
        bottom: 20px;
        right: 20px;
    }
    .info{
        margin: 0 0 0 50px;
    }
</style>