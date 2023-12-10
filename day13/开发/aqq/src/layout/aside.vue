<template>
	<div>

			<!-- <div class="daz"> -->
			<img class="img"   src="../assets/common/logo.png" alt="" />
			<el-menu default-active="1-4-1" class="el-menu-vertical-demo" text-color="#fff" background-color="transparent"
				router :collapse="isCollapse" >
				<el-menu-item index="/index">
					<i class="iconfont icon-yibiaopan"></i>
					<span slot="title">{{ $t('route.dashboard') }}</span>
				</el-menu-item>
				<el-menu-item index="/employees">
					<i class="iconfont icon-xiaoren"></i>
					<span slot="title">{{ $t('route.employees') }}</span>
				</el-menu-item>
				<el-menu-item index="/setting">
					<i class="el-icon-setting"></i>
					<span slot="title">公司设置</span>
				</el-menu-item>
				<el-menu-item index="/permission">
					<i class="iconfont icon-24gf-lock"></i>
					<span slot="title">权限管理</span>
				</el-menu-item>
				<el-menu-item index="4">
					<i class="iconfont icon-biaodanzujian-biaoge"></i>
					<span slot="title">社保</span>
				</el-menu-item>
				<el-menu-item index="4">
					<i class="iconfont icon-fenlei"></i>
					<span slot="title">审批</span>
				</el-menu-item>
				<el-menu-item index="4">
					<i class="iconfont icon-Group1580"></i>
					<span slot="title">考勤</span>
				</el-menu-item>
				<el-menu-item index="4">
					<i class="iconfont icon-qianqian-"></i>
					<span slot="title">工资</span>
				</el-menu-item>
				<el-menu-item index="/jiagou">
					<i class="iconfont icon-shuzhuangtu"></i>
					<span slot="title">组织架构</span>
				</el-menu-item>
			</el-menu>
			<!-- </div> -->

	</div>
</template>

<script>
export default {
	props:['isCollapse'],
	data() {
		return {};
	},
	methods: {},
	computed: {},
	filters: {},
	watch: {}
};
</script>

<style lang="scss" scoped>
.el-menu {
	color: #fff;
  i {
    color: #fff;
    font-size: 25px;
    margin-right: 10px;
  }
}

.img {
		margin: 10px 20%;
		width: 50%;
		height: 32px;
	}
.el-menu-item:hover {
  color: #4777fa !important;
  i {
    color: #4777fa !important;
  }
}

</style>