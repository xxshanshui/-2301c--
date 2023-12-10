<template>
  <div>
    <div class="top">
      <img src="../../assets/R-C.png" alt="" />
      <div class="right">
        <h3>早安，管理员，祝你开心每一天!</h3>
        <div class="zt" style="margin-top: 8px; color: gray">{{ username }} | {{ company }}-总裁办</div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between">
      <div class="bo">
        <div style="margin: 0 20px 0 0; box-shadow: 0 0 5px gray">
          <p style="border-bottom: 1px solid #c1c0c055; font-size: 25px; padding: 20px">工作日历</p>
					<workCalendar></workCalendar>
        </div>
      </div>

      <div>
        <div style="padding: 20px; margin-top: 20px; box-shadow: 0 0 5px gray">
          <p style="width: 25%; border-bottom: 2px solid #8a97f8; font-size: 25px">流程申请</p>
          <div style="display: flex; margin-top: 10px">
            <el-button>加班离职</el-button>
            <el-button>请假调休</el-button>
            <el-button>审批列表</el-button>
            <el-button>我的信息</el-button>
          </div>
        </div>
        <div style="margin-top: 20px; padding: 20px; box-shadow: 0 0 5px gray">
          <p style="font-size: 25px">绩效指数</p>
          <div style="margin-top: 10px; border-bottom: 1px solid #c1c0c055"></div>

          <p style="font-weight: 700; margin-top: 20px">人力词源基础绩效表</p>
          <div id="main" style="width: 500px; height: 500px"></div>
        </div>

        <div style="padding: 20px; margin-top: 20px; box-shadow: 0 0 5px gray">
          <p style="width: 21%; border-bottom: 2px solid #8a97f8; font-size: 25px">帮助链接</p>
          <div style="margin-top: 10px">
            <img style="margin-left: 10px; width: 400px" src="../../assets/icon.png" alt="" />
            <!-- <div> -->
            <div style="display: flex; justify-content: space-around">
              <div>入门指南</div>

              <!-- </div> -->
              <!-- <div> -->
              <div style="padding: 0 80px">在线帮助手册</div>

              <!-- </div> -->
              <!-- <div> -->
              <div>联系技术支持</div>

              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div style="margin-top: -190px; box-shadow: 0 0 5px gray; padding: 20px">
        <p style="font-weight: 700">公告</p>
        <div style="margin-top: 10px; border-bottom: 1px solid #c1c0c055"></div>
        <div>
          <div style="display: flex">
            <img style="width: 80px" src="../../assets/img.png" alt="" />
            <div style="height: 80px; line-height: 80px; display: flex">
              <div style="color: aqua; margin-right: 10px">朱继柳</div>
              <div>发布了第1期"传智大讲堂"互动讨论获奖名单公布</div>
            </div>
          </div>
          <div style="margin-left: 80px">2018-07-21 15:21:38</div>
        </div>
        <div style="margin-top: 10px; border-bottom: 1px solid #c1c0c055"></div>
        <div>
          <div style="display: flex">
            <img style="width: 80px" src="../../assets/img.png" alt="" />
            <div style="height: 80px; line-height: 80px; display: flex">
              <div style="color: aqua; margin-right: 10px">朱继柳</div>
              <div>发布了第1期"传智大讲堂"互动讨论获奖名单公布</div>
            </div>
          </div>
          <div style="margin-left: 80px">2018-07-21 15:21:38</div>
        </div>
        <div style="margin-top: 10px; border-bottom: 1px solid #c1c0c055"></div>
        <div>
          <div style="display: flex">
            <img style="width: 80px" src="../../assets/img.png" alt="" />
            <div style="height: 80px; line-height: 80px; display: flex">
              <div style="color: aqua; margin-right: 10px">朱继柳</div>
              <div>发布了第1期"传智大讲堂"互动讨论获奖名单公布</div>
            </div>
          </div>
          <div style="margin-left: 80px">2018-07-21 15:21:38</div>
        </div>
        <div style="margin-top: 10px; border-bottom: 1px solid #c1c0c055"></div>
      </div>
    </div>
  </div>
</template>

<script>
import workCalendar from '@/components/work-calendar.vue'
import * as echarts from "echarts"
export default {
  data() {
    return {
      username: localStorage.getItem("username") || "",
      company: localStorage.getItem("company") || "",
      calendart: new Date()
    }
  },
	components:{workCalendar},
  methods: {
    ehcart() {
      var chartDom = document.getElementById("main")
      // var chartDom = document.querySelector('.q');
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          // text: 'Basic Radar Chart'
        },
        legend: {
          data: ["Allocated Budget", "Actual Spending"]
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 }
          ]
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget"
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending"
              }
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  },
  mounted() {
    this.ehcart()
  }
}
</script>

<style lang="scss" scoped>
.bo {
  margin-top: 20px;
}
.top {
  width: 100%;
  box-shadow: 0 0 5px gray;
  border: 1px solid #eee;
  display: flex;
  padding: 15px;
  align-items: center;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
