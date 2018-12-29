<template>
  <div id="echartContainer1"></div>
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

    this.$nextTick(function() {
      const echarts = require("echarts");

      // 基于准备好的dom，初始化echarts实例

      const myChart1 = echarts.init(
        document.getElementById("echartContainer1")
      );
      window.addEventListener("resize", () => {
        myChart1.resize();
      });

      // 绘制图表
      let option = {
        title: {
          text: "资产统计",
          textStyle: {
            color: "#515a6e",
            fontStyle: "normal",
            fontWeight: 'normal',
            fontFamily: "sans-serif",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          x: "center",
          data: ["直达", "营销广告", "搜索引擎", "邮件营销"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直达", selected: true },
              { value: 679, name: "营销广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],

            data: [
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1048, name: "百度" },
              { value: 251, name: "谷歌" },
              { value: 147, name: "必应" },
              { value: 102, name: "其他" }
            ]
          }
        ]
      };
      myChart1.setOption(option);
    });
  }
};
</script>

<style lang="less" scoped>
#echartContainer1 {
  width: 100%;
  height: 100%;
  // min-height: 250px;
  background: #fff;
  padding-top: 10px;
}
</style>