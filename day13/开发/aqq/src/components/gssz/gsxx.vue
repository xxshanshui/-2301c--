<template>
  <div style="text-align: center;">
    <div style="background-color: #f4f4f5; padding: 10px">
      ! 对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改
    </div>
    <div>
   公司名称 <el-input placeholder="江苏传智博客教育科技有限公司" style="margin-top: 20px; width: 500px;" v-model="input" :disabled="true"  > </el-input>

    </div>
    <div>
   公司地址 <el-input placeholder="北京昌平区建材城西路金燕龙办公楼一层" style="margin-top: 20px; width: 500px;" v-model="input" :disabled="true"> </el-input>

    </div>
    <div>
   邮箱 <el-input placeholder="bd@itcastcn" style="margin-top: 20px; width: 500px;" v-model="input" :disabled="true"> </el-input>

    </div>
    <div>
        <!-- <div style="display: flex;">备注   </div> -->
  备注 <el-input style="margin-top: 20px; width: 500px;" :disabled="true" type="textarea" :rows="2" placeholder="传智博客官网-好扣碑IT培训机构，一样的教育，不一样的品质" v-model="input"> 备注</el-input>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        input:''
    }
  },
  methods: {},
  computed: {},
  components: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>