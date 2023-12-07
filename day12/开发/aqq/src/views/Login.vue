<template>
	<div class="qwe">
		<div class="qq">
			<h1>IHRM后台登录系统</h1>
			<!-- <el-img></el-img> -->
			<el-form :model="ruleForm" ref="ruleForm" class="demo-ruleForm">
				<el-form-item prop="mobile">
					<el-input v-model="ruleForm.mobile" prefix-icon="el-icon-user-solid"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" show-password></el-input>
				</el-form-item>

				<el-form-item>
					<div class="dl">
						<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
					</div>
				</el-form-item>
			</el-form>
			<div class="js">
				 仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息 (如手机号、身份证号等)!
			</div>
		</div>
	</div>
</template>

<script>
import { setToken } from "@/utils/cookejs"
import { querylogin } from "@/utils/http"
export default {
	data() {
		return {
			ruleForm: {
				mobile: "13800000002",
				password: "hm#qd@23!"
			},

		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					querylogin(this.ruleForm).then((res) => {
						console.log(res)
						if (res.code === 10000) {
							this.$message({
								message: res.message,
								type: "success"
							})
							setToken(res.data)
							this.$router.push("/")
						}
					})
				} else {
					console.log("error submit!!")
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		}
	},
	created() { }
}
</script>

<style lang="scss" scoped>
.qwe {
	width: 100vw;
	height: 100vh;
	background-color: paleturquoise;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	.qq {
		width: 30%;

		h1 {
			margin-bottom: 20px;
		}

		.el-button {
			display: block;
			width: 100%;
			background-color: rgb(230, 155, 219);
			border: 0;
		}
	}
}
.js{
	color: black;
}
</style>
