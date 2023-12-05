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
								<i class="el-icon-arrayow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>
									<div @click="add(data.id)">添加子部门</div>
								</el-dropdown-item>
								<el-dropdown-item>
									<div v-if="data.name !== '传智教育'" @click="bj(data.id)">编辑部门</div>
								</el-dropdown-item>
								<el-dropdown-item>
									<div v-if="data.name !== '传智教育'" @click="del(data.id)">删除部门</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>

					</el-dropdown>
				</span>
			</span>
		</el-tree>


		<!-- 模态框 -->
		<el-dialog :title="flag == true ? '编辑' : '新增'" :visible.sync="dialogVisible" width="70%">
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
import { querylist, delapi, queryzzjg, htzpi, bjapi } from '@/utils/http';
import { changeData } from "@/utils/dg";
export default {
	data() {
		return {
			dialogVisible: false,

			mylist: [],
			mylist1: [],
			flag:false,
			form: {
				code: '',
				introduce: '',
				manager: '',
				name: '',
				pid: '',
				id: ''
			},
			dataid: ''
		};
	},
	created() {
		this.getlist()
	},
	methods: {
		getlist() {
			querylist().then((res) => {
				console.log(res);
				if (res.code === 10000) {
					this.$message({
						message: '获取组织架构数据成功',
						type: 'success'
					})
					this.mylist = res.data.depts
					const array = []
					this.mylist.forEach((i) => {
						if (i.pid == "-1") {
							array.push({ ...i, manager: '负责人' })
						}
					})
					array[0].children = changeData(res.data.depts, 0)
					this.mylist = array
				}
			})
		},

		// 删除部门数据
		del(id) {
			console.log(id, 'i滴滴滴滴地ID');

			delapi({id}).then(res => {
				console.log(res, '发几份发动给对方');
			})
			this.mylist= []
			this.getlist()

		},
		// 添加模态框
		add(id) {
			this.flag = false
			this.dialogVisible = true
			this.dataid = id

		},
		// 编辑模态框
		bj(id) {
			this.flag = true

			this.dialogVisible = true
			htzpi({ id: id }).then((res) => {
				console.log(res);
				this.form = res.data
			})
			this.getlist()

		},
		// 添加
		qd() {
			if (this.flag==true) {
				console.log(this.form);
				bjapi(this.form).then(res => {
					console.log(res);
				})
				this.dialogVisible = false
				this.form ={}

				this.getlist()
				
			} else {
				this.form.pid = this.dataid
				queryzzjg(this.form).then(res => {
					console.log(res);
				})
				this.getlist()
				this.form ={}
				this.dialogVisible = false
			}



		},
		// 取消关闭模态框
		qx() {
			this.dialogVisible = false

		},
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