<template>
  <div>
    <el-button type="primary" @click="add">新增角色</el-button>

    <el-table :data="mygs" border style="width: 100%; margin-top: 40px">
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="description" label="描述" width="180"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="fp(scope.row.id)">分配权限</el-button>
          <el-button type="primary" @click="bj(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="sc(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加编辑模态框 -->
    <el-dialog :title="flag == true ? '编辑' : '新增'" :visible.sync="dialogVisible" width="70%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="qd">确定</el-button>
          <el-button type="primary" @click="qx">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 分配权限 -->
    <el-dialog title="分配权限" :visible.sync="dialogVisible1" width="70%">
      <el-tree :data="mylist" :props="props" lazy show-checkbox @check-change="handleCheckChange"> </el-tree>
      <el-button type="primary" @click="fpqd">确定</el-button>
      <el-button type="primary" @click="fpqx">取消</el-button>
    </el-dialog>


  </div>
</template>

<script>
import * as API from "@/utils/http"
import { changeData } from "@/utils/dg";
export default {
  props: ["mygs", "datq"],
  data() {
    return {
      mylist: [],
      dialogVisible: false,
      dialogVisible1: false,
      flag: false,
      form: {
        id: "",
        permIds:""

        // code:"",
        // type:"",
        // pid:""
      },
      props: {
        label: "name",
        children: "children"
      }
    }
  },
  methods: {

    // 显示添加模态框
    add() {
      this.dialogVisible = true
    },
    // 添加角色和编辑角色
    qd() {
      if (this.flag == false) {
        API.gstjapi(this.form).then((res) => {
          console.log(res)
        })
        this.dialogVisible = false
        this.$emit("qd")
      } else {
        this.flag = true
        API.gsxgapi(this.form).then((res) => {
          console.log(res)
        })
        this.dialogVisible = false
        this.$emit("fpqd")
      }

      // this.jslist()
    },
    // 关闭模态框
    qx() {
      this.dialogVisible = false
    },
    // 删除角色
    sc(id) {
      this.$confirm("确认要删除该角色吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          })
          API.gsscapi({ id: id }).then((res) => {
            console.log(res)
          })
          this.$emit("sc")
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 显示编辑模态框
    bj(id) {
      this.flag = true
      this.dialogVisible = true
      API.gshtapi({ id: id }).then((res) => {
        console.log(res)
        this.form = res.data
      })
      this.$emit("bj")
    },
    async fp(id) {
      this.dialogVisible1=true
      if (await (await API.qxsjapi()).success) {
        let res = await (await API.qxsjapi()).data
        this.mylist = changeData(res, "0")
        console.log(this.mylist)
        // this.form= res
      }
      API.gshtapi({ id: id }).then((res) => {
        console.log(res)
        this.form = res.data
      })
      // this.$emit("fp")
    },
    // fp(){

    //   this.dialogVisible1=true
    //   API.qxsjapi().then(res=>{
    //     console.log(res);
    //     this.mylist = res.data
    //   })

    // },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    fpqd() {
      console.log(this.form,'4464564646');
      API.gsfpapi(this.form).then((res) => {
        console.log(res)
      })
      this.dialogVisible1=false

      // this.$emit("fpqd")

    },
    fpqx() {
      this.dialogVisible1=false

      this.$emit("fpqx")
    }
  },
  created() {
    // this.getfp()
  },
  computed: {},
  components: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>