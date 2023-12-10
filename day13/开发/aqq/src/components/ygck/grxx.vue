<template>
  <div>
    <div class="box">
      <el-form ref="form" :model="form" label-width="80px">
        <div class="top">
          <div class="zuo">
            <el-form-item label="工号">
              <el-input v-model="unst.workNumber"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="unst.username"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="unst.mobile"></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="unst.staffPhoto" alt="" />
              </el-dialog>
            </el-form-item>
          </div>
          <div class="you">
            <el-form-item label="入职时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="unst.timeOfEntry"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="部门">
              <el-input v-model="unst.departmentName"></el-input>
            </el-form-item>
            <el-form-item label="聘用形式">
              <el-select v-model="unst.region" placeholder="请选择活动区域">
                <el-option label="正式" value="正式"></el-option>
                <el-option label="非正式" value="非正式"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="an">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即更新</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="bun">
      <el-form ref="unst" :model="unst" label-width="120px">
        <p>基础信息</p>
        <div class="arr">
          <el-form-item label="最高学历">
            <el-input v-model="form.theHighestDegreeOfEducation"></el-input>
          </el-form-item>
          <el-form-item label="员工图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" src="" alt="" />
            </el-dialog>
          </el-form-item>
          <el-form-item label="国家/地区">
            <el-select v-model="form.nationalArea" placeholder="请选择活动区域">
              <el-option label="正式" value="正式"></el-option>
              <el-option label="非正式" value="非正式"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="护照">
            <el-input v-model="form.passportNo"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="form.idNumber"></el-input>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="form.nativePlace"></el-input>
          </el-form-item>
          <el-form-item label="民族">
            <el-input v-model="form.nation"></el-input>
          </el-form-item>
          <el-form-item label="英文名">
            <el-input v-model="form.englishName"></el-input>
          </el-form-item>
          <el-form-item label="婚姻情况">
            <el-input v-model="form.maritalStatus"></el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-input v-model="form.birthday"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="星座">
            <el-input v-model="form.constellation"></el-input>
          </el-form-item>
          <el-form-item label="血型">
            <el-input v-model="form.bloodType"></el-input>
          </el-form-item>
          <el-form-item label="户籍所在地">
            <el-input v-model="form.placeOfResidence"></el-input>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-input v-model="form.politicalOutlook"></el-input>
          </el-form-item>
          <el-form-item label="入党时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.timeToJoinTheParty"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="存档机构">
            <el-input v-model="form.archivingOrganization"></el-input>
          </el-form-item>
          <el-form-item label="子女状态">
            <el-input v-model="form.stateOfChildren"></el-input>
          </el-form-item>
          <el-form-item label="子女有无商业险">
            <el-radio-group v-model="form.doChildrenHaveCommercialInsurance">
              <el-radio label="有"></el-radio>
              <el-radio label="无"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="有无违法违纪状态">
            <el-input v-model="form.isThereAnyViolationOfLawOrDiscipline"></el-input>
          </el-form-item>
          <el-form-item label="有无重大病史">
            <el-input v-model="form.areThereAnyMajorMedicalHistories"></el-input>
          </el-form-item>
        </div>
        <p>通讯信息</p>
        <div class="arr">
          <el-form-item label="QQ">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="form.wechat"></el-input>
          </el-form-item>
          <el-form-item label="所居地址">
            <el-input v-model="form.placeOfResidence"></el-input>
          </el-form-item>
          <el-form-item label="通讯地址">
            <el-input v-model="form.postalAddress"></el-input>
          </el-form-item>
          <el-form-item label="联系手机">
            <el-input v-model="form.contactTheMobilePhone"></el-input>
          </el-form-item>
          <el-form-item label="个人邮箱">
            <el-input v-model="form.personalMailbox"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人">
            <el-input v-model="form.emergencyContact"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系电话">
            <el-input v-model="form.emergencyContactNumber"></el-input>
          </el-form-item>
        </div>
        <p>账号信息</p>
        <div class="arr">
          <el-form-item label="社保电脑号">
            <el-input v-model="form.socialSecurityComputerNumber"></el-input>
          </el-form-item>
          <el-form-item label="公积账号">
            <el-input v-model="form.providentFundAccount"></el-input>
          </el-form-item>
          <el-form-item label="银行卡号">
            <el-input v-model="form.bankCardNumber"></el-input>
          </el-form-item>
          <el-form-item label="开户行">
            <el-input v-model="form.openingBank"></el-input>
          </el-form-item>
        </div>
        <p>教育信息</p>
        <div class="arr">
          <el-form-item label="学历类型">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="正式" value="正式"></el-option>
              <el-option label="非正式" value="非正式"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="毕业学校">
            <el-input v-model="form.graduateSchool"></el-input>
          </el-form-item>
          <el-form-item label="入学时间">
            <el-input v-model="form.enrolmentTime"></el-input>
          </el-form-item>
          <el-form-item label="毕业时间">
            <el-input v-model="form.graduationTime"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="form.major"></el-input>
          </el-form-item>
        </div>
        <p>从业信息</p>
        <div class="arr">
          <el-form-item label="上家公司">
            <el-input v-model="form.proofOfDepartureOfFormerCompany"></el-input>
          </el-form-item>
          <el-form-item label="职称">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="有无竞业限制">
            <el-input v-model="form.isThereAnyCompetitionRestriction"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remarks"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit1">保存更新</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </div>
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
      imageUrl: "",
      form: {
        id: ""
      },
      unst: {},
      dialogVisible: false
    }
  },
  created() {
    this.getlistt()
    API.yghtapi(this.id).then((res) => {
      // console.log(res)
      this.unst = res.data
    })
  },
  methods: {
    getlistt() {
      API.yggrapi(this.id).then((res) => {
        // console.log(res.data)
        this.form = res.data
      })
    },
    handlePictureCardPreview() {},
    handleRemove() {},
    onSubmit() {
      API.ygggapi(this.unst).then((res) => {
      console.log(res)
      })
    },
    onSubmit1() {
      API.ygjbapi(this.id).then((res) => {
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
.el-form{

.top{
display: flex;
justify-content: space-around;
}
.el-form-item{
  width: 400px;
}
.an{
  margin-left: 100px;
}
}
.arr{
margin-left: 60px;
}
</style>