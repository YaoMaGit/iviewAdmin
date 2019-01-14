<template>
  <div>
    <div class="top_header">
      <Row type="flex" justify="space-between">
        <Col span="21" style="background:;">
          <Select v-model="input_value" style="width:200px;margin-right:15px;">
            <Option value="1" label="漏洞统计报告">
              <span>漏洞统计报告</span>
            </Option>
            <Option value="2" label="漏洞统计报告">
              <span>资产统计报告</span>
            </Option>
          </Select>
          <RadioGroup v-model="disabledGroup">
            <Radio label="全部"></Radio>
            <Radio label="IP资产"></Radio>
            <Radio label="URL资产"></Radio>
            <Radio label="自定义资产"></Radio>
          </RadioGroup>
        </Col>
        <Col span="3" style="background:;padding-right:15px;">
          <DatePicker
            :value="date_input"
            format="yyyy/MM/dd"
            type="daterange"
            placement="bottom-end"
            placeholder="Select date"
            style="width:100%;"
          ></DatePicker>
        </Col>
      </Row>
    </div>
    <div>
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
      <!-- <div class="echart_div">
              <echarttemplate1></echarttemplate1>
      </div>-->
    </div>
  </div>
</template>
<script>
import echarttemplate1 from "./echart_template/echart_template1.vue";
import echarttemplate2 from "./echart_template/echart_template2.vue";
import echarttemplate3 from "./echart_template/echart_template3.vue";

export default {
  data() {
    return {
      input_value: "",
      disabledGroup: "",
      date_input: ["2018-01-01", "2019-02-15"]
    };
  },
  components: {
    echarttemplate1,
    echarttemplate2,
    echarttemplate3
  }
};
</script>


<style lang="less">
.top_header {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 0;
  padding-left: 10px;
}
.echart_div {
  height: 350px;
  width: 100%;
}
</style>
