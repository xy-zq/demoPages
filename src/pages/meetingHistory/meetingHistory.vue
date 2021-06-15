<template>
    <div class="main">
        <el-dialog
        width="20%"
        title="加入会议"
        :visible.sync="diaVis"
        append-to-body>
            <div class="center">
                你正在加入
                <h2>{{curName}}</h2>
                <el-input type="password" v-model="password"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="diaVis = false">确 定</el-button>
                <el-button type="primary" @click="diaVis = false">取消</el-button>
            </span>
        </el-dialog>
        <div class="title">
            <div class="block"></div>
            历史会议
        </div>
        <el-form inline :model="form" style="margin:0 0 0 20px">
            <el-form-item label="会议时间">
                <el-date-picker
                clearable
                v-model="form.time"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="会议主题">
                <el-input v-model="form.theme"></el-input>
            </el-form-item>
            <el-button type="primary">确定</el-button>
            <el-button type="primary" class="exBtn">导出会议记录</el-button>
        </el-form>
        <el-table
        :data="tableData"
        height="500px"
        style="width: 100%">
        <el-table-column type="index" label="序号" width="auto"></el-table-column>
            <el-table-column prop="name" label="会议名称" width="auto"></el-table-column>
            <el-table-column prop="type" label="会议类型" width="auto"></el-table-column>
            <el-table-column prop="meetingType" label="音像会议" width="auto"></el-table-column>
            <el-table-column prop="startTime" label="启动时间" width="auto"></el-table-column>
            <el-table-column prop="endTime" label="结束时间" width="auto"></el-table-column>
            <el-table-column prop="video" label="录像回放" width="auto"></el-table-column>
            <el-table-column prop="videoDownload" label="录像下载" width="auto"></el-table-column>
            <el-table-column prop="audioDownload" label="录音下载" width="auto"></el-table-column>
            <el-table-column prop="status" label="会议状态" width="auto" :formatter="statusFormat"></el-table-column>
            <el-table-column label="操作" width="auto">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="primary"
                    @click="btnClick(scope.row)">{{scope.row.status==3?'查看详情':'加入会议'}}</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name:'meetingHistory',
        methods: {
            btnClick(s){
                if(s.status!==3){
                    this.diaVis=true
                    this.curName = s.name
                }else{
                    this.$router.push({path:'/detail'})
                }
            },
            statusFormat(row){
                switch(row.status){
                    case 1:
                        return '预约中';break;
                    case 2:
                        return '进行中';break;
                    case 3:
                        return '已结束';break;
                }
            }
        },
        data() {
            return {
                diaVis:false,curName:'',password:'',
                form:{time:'',theme:''},
                tableData:[
                    {name:'测试会议',type:'临时会议',meetingType:'视频会议',startTime:'2021/3/4  16:25:06',endTime:'2021/3/4  16:25:06',status:1},
                    {name:'测试会议',type:'临时会议',meetingType:'视频会议',startTime:'2021/3/4  16:25:06',endTime:'2021/3/4  16:25:06',status:3}
                ]
            }
        },
    }
</script>

<style  scoped>
    .main{
        width: 100%;
        position: relative;
    }
    .exBtn{
        position: absolute;
        right: 0;
    }
    .title{
        display: flex;
        font-weight: 550;
        font-size: 20px;
        line-height: 20px;
        margin: 0 0 10px 0;
    }
    .block{
        width: 4px;
        height: 20px;
        margin: 0 10px 0 5px;
        background: #000;
    }
    .center{
        width:100%;
        text-align: center;
    }
</style>