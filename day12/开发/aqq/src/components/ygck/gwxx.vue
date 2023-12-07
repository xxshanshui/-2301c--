<template>
  <div>
    <el-form ref="form" :model="form" label-width="140px">
      <p>基础信息</p>
      <div class="arr">
        <el-form-item label="岗位">
          <el-input v-model="form.post"></el-input>
        </el-form-item>
        <el-form-item label="转正状态">
          <el-select v-model="form.stateOfCorrection" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职级">
          <el-input v-model="form.rank"></el-input>
        </el-form-item>
        <el-form-item label="转正评价">
          <el-input type="textarea" v-model="form.correctionEvaluation"></el-input>
        </el-form-item>
        <el-form-item label="汇报对象">
          <el-select v-model="form.reportId" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="HRBP">
          <el-select v-model="form.hrbp" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="调整司龄(天)">
          <el-input v-model="form.adjustmentAgedays"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="调整工龄">
          <el-input v-model="form.adjustmentOfLengthOfService"></el-input>
        </el-form-item>
      </div>
      <p>合同信息</p>
      <div class="arr">
        <el-form-item label="首次合同开始时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.initialContractStartTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="首次合同结束时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.firstContractTerminationTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="现合同开始时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.currentContractStartTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="现合同结束时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.closingTimeOfCurrentContract"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="合同期限">
          <el-select v-model="form.contractPeriod" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="续签次数">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </div>
      <p>招聘信息</p>
      <div class="arr">
        <el-form-item label="其他招聘渠道">
          <el-select v-model="form.otherRecruitmentChannels" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="招聘渠道">
          <el-select v-model="form.recruitmentChannels" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="社招/校招">
          <el-select v-model="form.socialRecruitment" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="推荐企业/人">
          <el-input v-model="form.recommenderBusinessPeople"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存更新</el-button>
          <el-button>返回</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import * as API from "../../utils/http"
export default {
  props: ["id"],
  data() {
    return {
      form: {}
    }
  },
  created() {
    API.yggwapi(this.id).then((res) => {
      console.log(res)
      this.form = res.data
    })
  },
  methods: {
    onSubmit() {
      API.yggwgxapi(this.id).then((res) => {
        console.log(res)
      })
    }
  },
  computed: {},
  components: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-form {
  width: 450px;
}
.arr {
  margin-left: 50px;
}
</style>