<template>
	<div>
		<el-container>
			<el-aside :width="!isCollapse ? '210px' : '60px'">
			<cei :isCollapse="isCollapse"></cei>
			</el-aside>
			<el-container>
				<el-header style="padding: 0">
					<div class="toubox">
						<div class="z">
							<div style="padding: 0 15px; margin-top: 5px; vertical-align: sub" @click="toggleClick">
								<svg :class="li" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
									fill="#fff">
									<path
										d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
								</svg>
							</div>
							<h3>{{ $t('test.companyName') }}</h3>
							<el-button round>{{ $t('test.Experience') }}</el-button>
						</div>
						<div class="y">
							<indexS></indexS>
							<index style="margin: 0 20px"></index>
							<el-dropdown>
								<span class="el-dropdown-link" style="color: #fff">
									<img src="../assets/common/head.jpg" alt="" />
									<p>
										{{ this.list.username
										}}<i class="el-icon-arrow-down el-icon--right"></i>
									</p>
								</span>
								<el-dropdown-menu slot="dropdown">
									<p style="text-align: center; padding: 0 20px">
										{{ $t('route.dashboard') }}
									</p>
									<p @click="outLogin" style="padding: 0 20px">退出登录</p>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
					<div class="touxia">
						<span v-for="item in nav" :key="item.id">{{ item }}</span>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import cei from './aside.vue'
import index from '../components/ScreenFull/index.vue'
import indexS from '../components/lang/index.vue'
import { removeToken, getToken } from '@/utils/cookejs'
export default {
	data() {
		return {
			isCollapse: false,
			list: [],
			nav: [],
			li: {
				hamburger: false,
				isActive: true
			}
		}
	},
	components: { index, indexS, cei },
	methods: {
		outLogin() {
			let token = getToken('token')
			removeToken(token)
			this.$router.push('/login')
		},
		toggleClick() {
			this.isCollapse = !this.isCollapse
			this.li.isActive = !this.li.isActive
		}
	},
	computed: {},
	filters: {},
	watch: {
		$route: {
			immediate: true,
			handler(v) {
				console.log(v)
				this.nav.push(v.meta.title)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import url(../assets/font_4301208_8ku3skqnllu/iconfont.css);

.el-aside {
	background: url(../assets/common/leftnavBg.png),#4777fa;
	background-repeat: no-repeat;
	background-position:bottom;
}
.hamburger {
	transform: rotateZ(0);
}

.isActive {
	transform: rotateZ(180deg);
}

.touxia {
	span {
		color: #000;
	}
}

.el-header {
	height: 80px !important;
	margin-bottom: 10px;
	color: #fff;
	background-color: #4777fa;
	box-shadow: 0px 0px 1px 0px black;
	.toubox {
		padding: 0 20px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.z {
			display: flex;
			align-items: center;

			i {
				font-size: 24px;
			}

			h3 {
				margin: 0 20px;
			}
		}

		.y {
			display: flex;
			align-items: center;

			.el-dropdown-link {
				display: flex;
				align-items: center;
			}

			img {
				width: 30px;
				height: 30px;
				border-radius: 50%;
			}
		}
	}

	.touxia {
		background-color: #fff;
		height: 30px;
	}
}

.el-main {
	height: 100vh;
	background-color: #fcfcfc;
	color: #000;
}
</style>
