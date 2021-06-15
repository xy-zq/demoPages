<template>
    <div>
        <el-dialog
            title="上传文件"
            :visible.sync="dialogVisible"
            width="70%"
            append-to-body>
            <div>
                <div class="title">
                    <div class="block"></div>
                    已分享文件
                </div>
                <div style="display:flex">
                    <div class="right">
                        <div style="margin:10px">
                            <span style="margin:0 10px">文件名1.Excel</span>
                            <el-button type="primary" size="small" icon="el-icon-download">下载</el-button>
                        </div>
                        <div style="margin:10px">
                            <span style="margin:0 10px">文件名1.Excel</span>
                            <el-button type="primary" size="small" icon="el-icon-download">下载</el-button>
                        </div>
                        <div style="margin:100px 0 0 0;width:100%;text-align:center">
                            <el-button size="small" type="success" icon="el-icon-plus">添加文件</el-button>
                        </div>
                    </div>
                    <div class="left">
                        <span class="shadow">会场列表</span>
                         <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column prop="name" label="会场名称" width="260"></el-table-column>
                        <el-table-column prop="mark" label="会场标识"></el-table-column>
                        <el-table-column prop="unit" label="所属单位"></el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name:'uploadDia',
        data() {
            return {
                dialogVisible: false,tableData:[
                    {name:'重庆渝中菜园坝消防站通讯室',mark:'09000021',unit:'消防总队'},
                    {name:'重庆渝中菜园坝消防站通讯室',mark:'09000021',unit:'消防总队'}
                ]
            }
        },
        methods: {
            toggleVis() {
                this.dialogVisible = !this.dialogVisible
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
        margin: 0 0 10px 0;
    }
    .block{
        width: 4px;
        height: 20px;
        margin: 0 10px 0 5px;
        background: #0368FF;
    }
    .left,.right{
        width: 50%;
    }
    .shadow{
        line-height: 20px;
        box-shadow: 0 -7px 0px #B3D2FF inset;
    }
    .dialog-footer{
        width:100%;
        display: block;
        text-align: center;
    }
</style>