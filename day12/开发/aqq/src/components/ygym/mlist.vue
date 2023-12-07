<template>
  <div>
    <el-table
      ref="singleTable"
      :data="mylist"
      highlight-current-row
      style="width: 100%; margin-top: 20px; box-shadow: 0 0 5px gray"
    >
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column property="username" label="姓名" width="120"> </el-table-column>
      <el-table-column property="staffPhoto" label="头像" width="120">
        <img style="width: 50px" src="https://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png" alt="" />
      </el-table-column>
      <el-table-column property="mobile" label="手机号"> </el-table-column>
      <el-table-column property="workNumber" label="工号"> </el-table-column>
      <el-table-column property="formOfEmployment" label="聘用形式"
        >{{ "formOfEmployment" == "1" ? "非正式" : "正式" }}
      </el-table-column>
      <el-table-column property="departmentName" label="部门"> </el-table-column>
      <el-table-column property="correctionTime" label="入职时间"> </el-table-column>
      <el-table-column property="enableState" label="账户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enableState"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" style="display: flex">
        <template slot-scope="scope">
          <a style="margin-left: 10px; color: #409eff" @click="zn(scope.row.id)">查看</a>
          <a style="margin-left: 10px; color: #409eff">转正</a>
          <a style="margin-left: 10px; color: #409eff">调岗</a>
          <a style="margin-left: 10px; color: #409eff">离职</a>
          <a style="margin-left: 10px; color: #409eff" @click="js">角色</a>
          <a style="margin-left: 10px" @click="del">删除</a>
        </template>
      </el-table-column>
    </el-table>

    <!-- 模态框 -->
    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="50%">
      <div style="display: flex">
        <div style="display: flex; margin-left: 10px; font-size: 16px">
          <input type="checkbox" @change="zt" />
          <div :class="flag == true ? 'q' : 'qq'">系统管理员</div>
        </div>
        <div style="display: flex; margin-left: 10px; font-size: 16px">
          <input type="checkbox" @change="zt1" />
          <div :class="flag1 == true ? 'q' : 'qq'">人事经理</div>
        </div>
        <div style="display: flex; margin-left: 10px; font-size: 16px">
          <input type="checkbox" @change="zt2" />
          <div :class="flag2 == true ? 'q' : 'qq'">人事专员</div>
        </div>

        <div style="display: flex; margin-left: 10px; font-size: 16px">
          <input type="checkbox" @change="zt3" />
          <div :class="flag3 == true ? 'q' : 'qq'">薪资专员</div>
        </div>
        <div style="display: flex; margin-left: 10px; font-size: 16px">
          <input type="checkbox" @change="zt4" />
          <div :class="flag4 == true ? 'q' : 'qq'">员工</div>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { del } from "vue"

export default {
  props: ["mylist"],
  data() {
    return {
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      dialogVisible: false
    }
  },
  methods: {
    // 查看
    zn(id) {
      console.log(id, "9999999999999999999")
      this.$router.push({
        path: "/ygck",
        query: { id: id }
      })
    },
    js() {
      this.dialogVisible = true
    },
    del() {},

    zt() {
      this.flag = !this.flag
      console.log(this.flag)
    },
    zt1() {
      this.flag1 = !this.flag1
      console.log(this.flag)
    },
    zt2() {
      this.flag2 = !this.flag2
      console.log(this.flag)
    },
    zt3() {
      this.flag3 = !this.flag3
      console.log(this.flag)
    },
    zt4() {
      this.flag4 = !this.flag4
      console.log(this.flag)
    }
  },
  computed: {},
  components: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.q {
  color: #66b1ff;
}

.qq {
  // color: #66B1FF;
}
</style>