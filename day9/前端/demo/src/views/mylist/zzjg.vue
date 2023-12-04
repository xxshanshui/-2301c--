<template>
	<div>
		<el-tree :data="mylist" node-key="id" default-expand-all :expand-on-click-node="false">
			<span class="custom-tree-node" slot-scope="{ node, data }">
				<span>{{ data.name }}</span>
				<span>
					<span>{{ data.manager }} </span>

					<el-dropdown trigger="click">
						<template>

							<span>
								<span>操作</span>
								<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>
									<div @click="add">添加子部门</div>
								</el-dropdown-item>
								<el-dropdown-item >
									<div @click="bj(id)">编辑部门</div>
								</el-dropdown-item>
								<el-dropdown-item>
									<div @click="del(pid)">删除部门</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>

					</el-dropdown>
				</span>
			</span>
		</el-tree>


		<!-- 模态框 -->
		<el-dialog :title="this.form.id ? '编辑' : '新增'" :visible.sync="dialogVisible" width="70%">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="部门名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="部门编码">
					<el-input v-model="form.code"></el-input>
				</el-form-item>
				<el-form-item label="部门负责人">
					<el-select v-model="form.manager" placeholder="请选择部门负责人">
						<el-option label="管理员" value="管理员"></el-option>
						<el-option label="丁赞宇" value="丁赞宇"></el-option>
						<el-option label="曹博文" value="曹博文"></el-option>
						<el-option label="刘博文" value="刘博文"></el-option>
						<el-option label="裴丽珂" value="裴丽珂"></el-option>
						<el-option label="孙建" value="孙建"></el-option>
						<el-option label="张清莲" value="张清莲"></el-option>
						<el-option label="王斌晶" value="王斌晶"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="部门介绍">
					<el-input v-model="form.introduce"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="qd">立即创建</el-button>
					<el-button @click="qx">取消</el-button>
				</el-form-item>
			</el-form>

		</el-dialog>

	</div>
</template>

<script>
import { querylist, delapi, queryzzjg ,querybj} from '@/utils/http';
export default {
	data() {


		return {
			dialogVisible: false,
			mylist: [],
			form: {
				code: '',
				introduce: '',
				manager: '',
				name: '',
				id:''
			},

		};
	},
	created() {
		this.getlist()
	},
	methods: {
		getlist() {
			querylist().then((res) => {
				console.log(res);
				this.mylist = res.data.depts
			})
		},
		handleNodeClick() {
		},

		del(pid) {
			console.log(pid);
			delapi({ id: pid }).then(res => {
				console.log(res);
			})
			this.getlist()

		},
		add() {
			this.dialogVisible = true

		},
		bj() {

			this.dialogVisible = true

		},
		qd() {
			// if(this.form==''){
				queryzzjg(this.form).then(res => {
				console.log(res);
			})
			this.getlist()
			this.dialogVisible = false
			// }else{
			// 	querybj(this.form).then(res=>{
			// 		console.log(res);
			// 	})
			// 	this.dialogVisible = false
			// this.getlist()
			// }


		},
		qx() {
			this.dialogVisible = false

		}
	},
	computed: {},
	components: {},
	filters: {},
	watch: {},
};
</script>

<style lang="scss" scoped>
.custom-tree-node {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
	padding-right: 8px;
}
</style>