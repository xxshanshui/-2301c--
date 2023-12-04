<template>
  <div>
    <div class="top">
			<img src="../assets/R-C.png" alt="">
			<div class="right">
				<h3>早安，管理员，祝你开心每一天!</h3>
				<p>{{ username }} | {{ company }}</p>
			</div>
		</div>

		<div class="bottom">
			<div class="bt-left"></div>
			<div class="bt-right"></div>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			username:localStorage.getItem('username')||'',
			company:localStorage.getItem('company')||''
		}
  },
  methods: {},

}
</script>

<style lang="scss" scoped>
.top{
	width: 100%;
	box-shadow: 0 0 10px 0;
	border: 1px solid #eee;
	display: flex;
	padding: 15px;
	align-items: center;
	img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}
	p{
		margin-top: 8px;
	}
}
</style>
