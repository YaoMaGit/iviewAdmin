<template>
  <div id="box">
    <div class="templ_top_div">
      <Row :gutter="16">
        <Col span="14">
          <div>资产修复漏洞排名</div>
        </Col>
        <Col span="10">
          <div>
            <RadioGroup v-model="buttonSize" type="button" size="small">
              <Radio label="large">Large</Radio>
              <Radio label="default">Default</Radio>
              <Radio label="small">small</Radio>
            </RadioGroup>
          </div>
        </Col>
      </Row>
    </div>
    <div class="table_div">
      <Table border :columns="columns1" :data="data1" height="285"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonSize:'',
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  mounted() {
    let _this = this;
  }
};
</script>

<style lang="less" scoped>
.templ_top_div {
  padding: 10px;
}
.table_div {
  width: 100%;
  height: 100%;
  min-height: 250px;
  padding: 10px;
}
#box {
  background: #fff;
}
</style>