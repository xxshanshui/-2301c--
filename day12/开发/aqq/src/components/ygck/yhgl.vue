<template>
  <div>
    <div style="">
      <el-form style="width: 500px" ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item >
              <el-button type="primary" @click="gx">更新</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import * as API from "../../utils/http"
export default {
  props: ["id"],
  data() {
    return {
      form: {
        username: "",
        password: "",
        id:''
      }
    }
  },
  created() {
    // this.gett()
    API.yghtapi(this.id).then((res) => {
      // console.log(res)
      this.form = res.data
    })
  },
  methods: {
    gx(){
        API.ygggapi(this.form).then(res=>{
            // console.log(res);
        })
      
        
    }
  },
  computed: {},
  components: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>