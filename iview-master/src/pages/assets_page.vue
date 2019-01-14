<template>
  <div>
    <Row>
      <Col span="3" class="tree_left">
        <div>
          <template>
            <Tree ref="tree" :data="data1" @on-select-change="select_clk()"></Tree>
          </template>
        </div>
      </Col>
      <Col span="20" class="tree_right">
        <router-view/>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: [
        {
          title: "一级部门",
          expand: true,
          routerbath:'',
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
  methods:{
    select_clk(){
        console.log(this.$refs.tree.getSelectedNodes());
        // router.push('home')
    }
  }
};
</script>

<style lang="less" scoped>
.tree_left {
  background: #fff;
  margin-right: 15px;
    padding: 15px 10px 0px 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.tree_right {
  // background: #fff;
}
.name_num{
    text-align: center;
    padding: 20px 0;
}
</style>

