<template>
  <div>
    <div class="assers_items_top">
      <Row>
        <Col span="2">资产列表</Col>
        <Col span="4" offset="18">
          <div style="float:right;">
            <span class="cursor_span" @click="back_clk()">返回统计</span>
            <span class="cursor_span">|</span>
            <span class="cursor_span">新建资产</span>
            <span class="cursor_span">导出</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class="assers_items_bottom">
      <div>
        <Row>
          <Col>资产搜索：
            <Select v-model="model7" clearable style="width:200px">
              <Option
                v-for="item in cityList"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
            <Input v-model="input_value" placeholder="请输入" style="width: 200px"/>
            <Icon size="18" type="md-help-circle"/>
            <Button type="primary" icon="ios-search">搜索</Button>
          </Col>
        </Row>
      </div>
      <div>
        <Table ref="selection" :columns="columns4" :data="data6" class="margin_top_div">
          <template slot-scope="{ row, index }" slot="action">
            <span class="cursor_span" @click="show(index)">查看</span>
            <span class="cursor_span">编辑</span>
            <span class="cursor_span" @click="remove(index)">删除</span>
          </template>
        </Table>
        <Row class="margin_top_div padding_bottom_div">
          <Col span="10">
            <Button>下发扫描任务</Button>
            <Button @click="handleSelectAll(true)">批量删除</Button>
            <Button @click="handleSelectAll(false)">批量编辑</Button>
          </Col>
          <Col span="14">
            <Page style="float:right;" :total="100" show-sizer/>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_value: "",
      cityList: [
        {
          value: "192.168.1.188",
          label: "192.168.1.188"
        },
        {
          value: "192.168.1.1881",
          label: "192.168.1.1881"
        },
        {
          value: "192.168.1.1882",
          label: "192.168.1.1882"
        },
        {
          value: "192.168.1.1883",
          label: "192.168.1.1883"
        }
      ],
      model7: "",
      columns4: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "IP",
          key: "ip"
        },
        {
          title: "部门",
          key: "department"
        },
        {
          title: "系统",
          key: "sys"
        },
        {
          title: "负责人",
          key: "man"
        },
        {
          title: "资产名称",
          key: "assetsname"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          ip: "192.168.1.202",
          department: "部门4",
          sys: "系统1",
          man: "朱军",
          assetsname: "样例IP资产12",
          operation: "11"
        },
        {
          ip: "172.168.1.101",
          department: "部门9",
          sys: "系统3",
          man: "撒贝宁",
          assetsname: "样例IP资产12",
          operation: "11"
        },
        {
          ip: "172.168.1.101",
          department: "部门9",
          sys: "系统3",
          man: "撒贝宁",
          assetsname: "样例IP资产12",
          operation: "11"
        },
        {
          ip: "172.168.1.101",
          department: "部门9",
          sys: "系统3",
          man: "撒贝宁",
          assetsname: "样例IP资产12",
          operation: "11"
        },
        {
          ip: "172.168.1.101",
          department: "部门9",
          sys: "系统3",
          man: "撒贝宁",
          assetsname: "样例IP资产12",
          operation: "11"
        }
      ]
    };
  },
  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    },
    show(index) {
      this.$Modal.info({
        title: "查看信息",
        content: `IP:${this.data6[index].ip}<br>部门：${
          this.data6[index].department
        }<br>系统:${this.data6[index].sys}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    back_clk() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.margin_top_div {
  margin-top: 15px;
}
.padding_bottom_div {
  padding-bottom: 15px;
}
.assers_items_top {
  padding: 10px 10px 10px 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.assers_items_bottom {
  padding: 15px 10px 0px 15px;
  margin-top: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.cursor_span {
  cursor: pointer;
  color: #2d8cf0;
  padding: 0 3px;
}
</style>

