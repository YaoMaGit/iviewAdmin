<template>
  <div ref="echarts2" id="echartContainer2"></div>
</template>

<script>
export default {
  data() {
    return {
      input_value: "",
      disabledGroup: "",
      date_input: ["2018-01-01", "2019-02-15"]
    };
  },
  mounted() {
    let _this = this;

    this.$nextTick(() => {
      const echarts = require("echarts");

      // 基于准备好的dom，初始化echarts实例
      const myChart2 = echarts.init(
        document.getElementById("echartContainer2")
      );
      window.addEventListener("resize", () => {
        myChart2.resize();
      });
      let option = {
        title: {
          text: "风险资产排名",
          textStyle: {
            color: "#515a6e",
            fontStyle: "normal",
            fontWeight: "normal",
            fontFamily: "sans-serif",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["百度", "必应", "其他"]
        },
        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "百度",
            type: "bar",
            barWidth: 20,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090]
          },
          {
            name: "必应",
            type: "bar",
            barWidth: 20,
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190]
          },
          {
            name: "其他",
            type: "bar",
            barWidth: 20,
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109]
          }
        ]
      };

      myChart2.setOption(option);
    });
  }
};
</script>

<style lang="less" scoped>
#echartContainer2 {
  width: 100%;
  height: 100%;
  // min-height: 250px;

  background: #fff;
}
</style>