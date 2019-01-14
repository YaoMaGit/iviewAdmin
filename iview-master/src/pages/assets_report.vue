<template>
  <div>
    <div class="assets_report_top">
      <Row>
        <Col span="6">9700一级部门</Col>
        <Col span="4" offset="14">
          <div class="assets_report_top_right">
            <span class="cursor_span" @click="items_clk()">查看资产列表</span>
            <span class="cursor_span">导出</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col class="name_num" span="6">770资产</Col>
        <Col class="name_num" span="6">007端口</Col>
        <Col class="name_num" span="6">707服务</Col>
        <Col class="name_num" span="6">070软件</Col>
      </Row>
    </div>
    <div class="assets_report_bottom">
      <Row :gutter="16">
        <Col span="8">
          <div class="echart_div">
            <echarttemplate1></echarttemplate1>
          </div>
        </Col>
        <Col span="8">
          <div class="echart_div">
            <echarttemplate2></echarttemplate2>
          </div>
        </Col>
        <Col span="8">
          <div class="echart_div">
            <echarttemplate3></echarttemplate3>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import echarttemplate1 from "../components/echart_template/echart_template1.vue";
import echarttemplate2 from "../components/echart_template/echart_template2.vue";
import echarttemplate3 from "../components/echart_template/echart_template3.vue";

export default {
  components: {
    echarttemplate1,
    echarttemplate2,
    echarttemplate3
  },
  data() {
    return {
      data1: [
        {
          title: "一级部门",
          expand: true,
          children: [
            {
              title: "二级部门",
              expand: false,
              children: [
                {
                  title: "三级部门"
                },
                {
                  title: "三级部门"
                }
              ]
            },
            {
              title: "二级部门",
              expand: false,
              children: [
                {
                  title: "三级部门"
                },
                {
                  title: "三级部门"
                }
              ]
            }
          ]
        },
        {
          title: "一级部门",
          expand: false,
          children: [
            {
              title: "二级部门",
              expand: false,
              children: [
                {
                  title: "三级部门"
                },
                {
                  title: "三级部门"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    items_clk() {
      this.$router.push({
        path: 'assets_items'
      });
    }
  }
};
</script>

<style lang="less" scoped>
.name_num {
  text-align: center;
  padding: 20px 0;
}
.assets_report_top {
  padding: 15px 10px 0px 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.assets_report_bottom {
  margin-top: 15px;
  // padding: 15px 10px 0px 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.echart_div {
  height: 250px;
  width: 100%;
}
.assets_report_top_right {
  float: right;
}
.cursor_span {
  cursor: pointer;
  color: #2d8cf0;
  padding: 0 3px;
}
</style>

