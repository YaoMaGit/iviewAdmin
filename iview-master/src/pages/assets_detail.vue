<template>
  <div id="assets_detail">
    <div class="top_div">
      <div class="top_div_title">
        <Row>
          <Col>基础信息</Col>
          <Col></Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col class="border_top border_right border_left padd_div" span="6">
            <div>资产</div>
            <div>192.168.1.152</div>
          </Col>
          <Col class="border_top border_right padd_div" span="6">
            <div>资产名称</div>
            <div>xxxxx</div>
          </Col>
          <Col class="border_top border_right padd_div" span="6">
            <div>备注</div>
            <div>11</div>
          </Col>
          <Col class="border_top border_right padd_div" span="6">
            <div>系统</div>
            <div>xxx系统</div>
          </Col>
        </Row>
        <Row>
          <Col class="border_top border_right border_bottom border_left padd_div" span="12">
            <div>负责人</div>
            <div>朱军</div>
          </Col>
          <Col class="border_top border_right border_bottom padd_div" span="12">
            <div>部门</div>
            <div>部门222</div>
          </Col>
        </Row>
      </div>
    </div>
    <div class="bottom_div">
      <Row type="flex" >
        <Col span="8">
          <Table border :columns="columns1" :data="data1" height="180"></Table>
        </Col>
        <Col span="8">
          <Table border :columns="columns1" :data="data1" height="180"></Table>
        </Col>
        <Col span="8">
          <Table border :columns="columns1" :data="data1" height="180"></Table>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "端口",
          key: "ipname"
        },
        {
          title: "服务",
          key: "sever"
        },
        {
            title:'软件',
            key:'appname',
        }
      ],
      data1: [
        {
          ipname: "192.168.1.1",
          sever: '系统',
          appname: "大淘客",
        },
        {
          ipname: "192.168.1.1",
          sever: '系统',
          appname: "大淘客",
        },
        {
          ipname: "192.168.1.1",
          sever: '系统',
          appname: "大淘客",
        },
        {
          ipname: "192.168.1.1",
          sever: '系统',
          appname: "大淘客",
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#assets_detail {
  background: #fff;
  padding: 10px;
}
.top_div {
  width: 100%;
}
.border_top {
  border-top: 1px solid #dcdee2;
}
.border_right {
  border-right: 1px solid #dcdee2;
}
.border_bottom {
  border-bottom: 1px solid #dcdee2;
}
.border_left {
  border-left: 1px solid #dcdee2;
}
.padd_div {
  padding: 10px;
}
.top_div_title {
  border-left: 3px solid #2d8cf0;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
}
.border_top > div:nth-child(1) {
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 10px;
}
</style>

