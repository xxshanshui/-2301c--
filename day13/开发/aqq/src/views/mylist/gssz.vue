<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="角色管理" name="first">
        <jsgl :mygs="mygs" @sc="sc" @bj="bj" @qd="qd" @qd1="qd1" @fpqx="fpqx" />
      </el-tab-pane>
      <el-tab-pane label="公司信息" name="second">
        <gsxx />
      </el-tab-pane>
    </el-tabs>
    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="datq.page"
      :page-sizes.sync="datq.size"
    >
    </el-pagination>
  </div>
</template>

<script>
import * as API from "@/utils/http"
import jsgl from "../../components/gssz/jsgl.vue"
import gsxx from "../../components/gssz/gsxx.vue"
export default {
  data() {
    return {
      datq: {
        page: 1,
        size: 5
      },

      mygs: [],
      activeName: "first"
    }
  },
  created() {
    this.jslist()
  },
  methods: {
    handleSizeChange(val) {
      this.datq.page = val

      // this.datq.size = val
      this.jslist()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.datq.page = val
      console.log(`当前页: ${val}`)
      this.jslist()
    },
    jslist() {
      API.ygjsapi(this.datq).then((res) => {
        console.log(res)
        this.mygs = res.data.rows
      })
    },
    sc() {
      this.jslist()
    },
    bj() {
      this.jslist()
    },
    qd() {
      this.jslist()
    },
    qd1() {
      this.jslist()
    },
    // fp() {
    //   this.jslist()
    // },
    // fpqd() {
    //   this.jslist()
    // },
    fpqx() {
      this.jslist()
    }
  },
  computed: {},
  components: { jsgl, gsxx },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>