<template>
  <div>
    <mheader />

    <mlist :mylist="mylist" />

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="params.page"
      :page-size.sync="params.size"
      background
      layout="prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
// import mheader from '@/components/'
import * as API from "@/utils/http"
import mheader from "../../components/ygym/mheader.vue"
import mlist from "../../components/ygym/mlist.vue"
export default {
  data() {
    return {
      params: {
        page: 1,
        size: 10
      },
      mylist: [],
      total: 0
    }
  },
  created() {
    this.getll()
  },
  methods: {
    getll() {
      API.yglbapi(this.params).then((res) => {
        console.log(this.params,'params');
        console.log(res)
        this.mylist = res.data.rows
        this.total = res.data.total
      })
    },
    handleCurrentChange(value) {
    //   console.log(value)
      this.params.page = value
      this.getll()
    },
    handleSizeChange(value) {
    //   console.log(value)

      this.params.size = value
      this.getll()
    }
  },
  computed: {},
  components: {
    mheader,
    mlist
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>