<template>
	<div>
		<div class="flex">
			<el-dialog title="会议画面模板" :visible.sync="dialogVisible" width="60%" append-to-body>
				<div class="moduleBox">
					<div class="left">
						<el-checkbox-group v-model="checkList">
							<el-checkbox label="一号屏"></el-checkbox>
							<el-checkbox label="二号屏"></el-checkbox>
							<el-checkbox label="三号屏"></el-checkbox>
							<el-checkbox label="四号屏"></el-checkbox>
						</el-checkbox-group>
					</div>
					<div class="right">
						常规模板
						<div class="col">
							<div class="module" v-for="i in 5" :key="i"></div>
						</div>
						宽屏模板
						<div class="col">
							<div class="module" v-for="i in 5" :key="i"></div>
						</div>
						会商模板
						<div class="col">
							<div class="module" v-for="i in 5" :key="i"></div>
						</div>
					</div>
				</div>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</span>
			</el-dialog>
			<upload-dia ref="upload"></upload-dia>
			<div class="btnBlock">
				<el-button type="text" @click="dialogVisible=true">画面模板</el-button>
				<el-button type="text" @click="$refs.upload.toggleVis()">上传文件</el-button>
			</div>
			<div class="btnBlock">
				<div>
					<el-dropdown placement="bottom-start">
						<span class="el-dropdown-link">
							<i class="el-icon-user"></i>
							<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>添加参与者</el-dropdown-item>
							<el-dropdown-item>创建参与者</el-dropdown-item>
							<el-dropdown-item>添加级联参与者</el-dropdown-item>
							<el-dropdown-item>移除参与者</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<div>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								<i class="el-icon-phone"></i>
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>呼叫参与者</el-dropdown-item>
								<el-dropdown-item>呼叫所有</el-dropdown-item>
								<el-dropdown-item>断开参与者</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
			</div>
			<div class="btnBlock">
				<div>
					<el-dropdown placement="bottom-start">
						<span class="el-dropdown-link">
							<i class="el-icon-headset"></i>
							<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>非静音议长</el-dropdown-item>
							<el-dropdown-item>静音扬声器</el-dropdown-item>
							<el-dropdown-item>解除所有发言者的声音</el-dropdown-item>
							<el-dropdown-item>静音所有发言者</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<div>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								<i class="el-icon-microphone"></i>
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>非静音麦克风</el-dropdown-item>
								<el-dropdown-item>静音麦克风</el-dropdown-item>
								<el-dropdown-item>打开所有麦克风</el-dropdown-item>
								<el-dropdown-item>静音所有麦克风</el-dropdown-item>
								<el-dropdown-item>调整单片机音频混合音量</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
			</div>
			<div class="btnBlock">
				<div>
					<el-dropdown placement="bottom-start">
						<span class="el-dropdown-link">
							<i class="el-icon-video-camera"></i>
							<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>显示本地视频</el-dropdown-item>
							<el-dropdown-item>隐藏本地视频</el-dropdown-item>
							<el-dropdown-item>调整摄像机</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<div>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								<i class="el-icon-picture-outline"></i>
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
			</div>
			<div class="btnBlock">
				<div>
					<el-dropdown placement="bottom-start">
						<span class="el-dropdown-link">
							讨论
							<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">

						</el-dropdown-menu>
					</el-dropdown>
					<div>
						<el-dropdown placement="bottom-start">
							<span class="el-dropdown-link">
								视点
								<i class="el-icon-caret-bottom el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>视图参与者</el-dropdown-item>
								<el-dropdown-item>开始连续观看</el-dropdown-item>
								<el-dropdown-item>设置每个端口的连续存在</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import uploadDia from './uploadDia'
	import UploadDia from './uploadDia.vue'
	export default {
		name: 'toolBox',
		data() {
			return {
				dialogVisible: false,
				checkList: []
			}
		},
		components: {
			uploadDia,
		},
	}
</script>

<style scoped>
	.flex {
		display: flex;
	}

	.el-checkbox {
		display: block;
		margin: 0px 0 20px 0;
	}

	.left {
		width: 10%;
	}

	.moduleBox {
		display: flex;
	}

	.module {
		width: 100px;
		height: 100px;
		background: #02A7F0;
		margin: 10px 20px;
		display: inline-block;
	}

	.btnBlock {
		display: flex;
		align-items: center;
		padding: 0 20px;
		margin: 10px 0;
		height: 80px;
		border: #E8E8E8 1px solid;
	}
</style>
