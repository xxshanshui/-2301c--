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
          <a style="margin-left: 10px; color: #409eff" @click="js(scope.row.id)">角色</a>
          <a style="margin-left: 10px">删除</a>
        </template>
      </el-table-column>
    </el-table>

    <!-- 模态框 -->
    <el-dialog title="分配角色" :visible.sync="dialogVisible" width="50%">
      <div style="display: flex;">
        <div v-for="item in checkList" :key="item.id">

        <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A">{{ item.name }}</el-checkbox>
   
    <!-- <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox> -->
  </el-checkbox-group>
</div>

      <!-- <div style=" width: 100px; " v-for="item in listjs" :key="item.id">
        <div style="  display: flex;">
          <input type="checkbox" />
          <div>{{ item.name }}</div>
        </div>
      </div> -->
    </div>
    <div style="margin-top: 40px; text-align: center;">
        <el-button type="primary" @click="qd">确定</el-button>
      <el-button @click="qx">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { del } from "vue"
import * as API from "@/utils/http"
export default {
  props: ["mylist", "params"],
  data() {
    return {
      // flag: false,
      // flag1: false,
      // flag2: false,
      // flag3: false,
      // flag4: false,
      dialogVisible: false,
      listjs: [],
      checkList: [],
      qwe:{
        id:''
      }
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

    js(id) {
      this.qwe.id=id
      this.dialogVisible = true
      API.ygjsapi(this.params).then((res) => {
        console.log(res)
        this.checkList = res.data.rows
      })
    },
    qd(){
      API.ygfpjsapi(this.qwe).then(res=>{
        console.log(res);
      })
      this.dialogVisible = false

    },
    qx(){
      this.dialogVisible = false

    }


    // zt1() {
    //   this.flag1 = !this.flag1
    //   console.log(this.flag)
    // },
    // zt2() {
    //   this.flag2 = !this.flag2
    //   console.log(this.flag)
    // },
    // zt3() {
    //   this.flag3 = !this.flag3
    //   console.log(this.flag)
    // },
    // zt4() {
    //   this.flag4 = !this.flag4
    //   console.log(this.flag)
    // }
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