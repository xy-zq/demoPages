export const turnPage = {
	mounted() {
		this.init()
	},
	methods: {
		getList() {
			this.init()
		},
		
		handleSizeChange(val) {
			// console.log(`每页 ${val} 条`);
			this.searchInfo.pageSize = val;
			this.getList();
		},
		
		handleCurrentChange(val) {
			// console.log(`当前页: ${val}`);
			this.searchInfo.pageNum = val;
			this.getList();
		},
	}
}
