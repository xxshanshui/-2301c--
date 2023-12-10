<template>
  <div>
    <el-container>
      <el-aside :width="show3 == true ? '180px' : '50px'">
        <el-collapse-transition>
          <div>
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              background-color="#4c7dfb"
              text-color="#fff"
            >
              <img class="qw" :width="show3 == true ? '180px' : '50px'" src="../assets/logo.png" alt="" />
              <el-menu-item index="/shouye">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>首页</span>
                </template>
              </el-menu-item>
              <el-menu-item index="/yg">
                <i class="el-icon-menu"></i>
                <span slot="title">员工</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">公司设置</span>
              </el-menu-item>
              <el-menu-item index="/qx">
                <i class="el-icon-setting"></i>
                <span slot="title">权限管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">社保</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">审批</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">考勤</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">工资</span>
              </el-menu-item>
              <el-menu-item index="/zzjg">
                <i class="el-icon-setting"></i>
                <span slot="title">组织架构</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-collapse-transition>
      </el-aside>
      <el-container>
        <el-header>
          <div class="zuo">
            <i @click="show3 = !show3" :class="show3 == true ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
            <!-- <i class="el-icon-s-unfold" @click="show3 = true" ></i> -->

            <h4>江苏传智博客教育科技股份有限公司</h4>
            <button>体验版</button>
          </div>
          <div class="you">
            <index1></index1>
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                <img src="../assets/R-C.png" alt="" /> {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item @click="">
                  <div>项目地址</div>
                </el-dropdown-item>
                <el-dropdown-item command="b">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
import { queryhpage } from "@/utils/http"
import { removetoken } from "@/utils/cookejs"
import index1 from '../components/lang/index.vue'
export default {
  data() {
    return {
      hcontent: {},
      
      username: "",
      show3: true
    }
  },
  methods: {
    gethpage() {
      queryhpage().then((res) => {
        console.log(res.data)
        this.username = res.data.username
        localStorage.setItem("username", res.data.username)
        localStorage.setItem("company", res.data.company)
      })
    },
    handleCommand(command) {
      if (command == "b") {
        removetoken()
        this.$router.push("/login")
      }
    }
  },
  components:{index1},
  created() {
    this.gethpage()
  }
}
</script>

<style lang="scss" scoped>
.qw {
  margin-top: -50px;
}
.dh {
  width: 180px;
  transition-duration: all 0.8s;
  height: 106vh;
  background-color: #4c7dfb;
}

.dh1 {
  width: 40px;
  transition-duration: all 0.8s;
  height: 106vh;
  background-color: #4c7dfb;
}

.el-aside {
  height: 100vh;
  background-color: #4c7dfb;

  .el-menu-vertical-demo {
    margin-top: 60px;
  }

  i {
    color: #fff;
  }
}

.el-header {
  height: 60px;
  background-color: #4b7bfb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .zuo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      font-size: 26px;
    }

    h4 {
      margin: 0 10px;
    }

    button {
      border: 0;
      padding: 5px;
      border-radius: 5px;
      background-color: #84a9fe;
      color: #fff;
    }
  }

  .you {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }

    .el-dropdown-link {
      color: #fff;
    }
  }
}
</style>
