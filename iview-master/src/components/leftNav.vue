<template>
  <div>
      <div class="left_top">
        星规
      </div>
    <div class="left_card">
      <Menu :theme="theme2">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper"/>仪表盘
          </template>
          <MenuItem name="1-1">1</MenuItem>
          <MenuItem name="1-2">2</MenuItem>
          <MenuItem name="1-3">3</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people"/>漏洞管理
          </template>
          <MenuItem name="2-1">1</MenuItem>
          <MenuItem name="2-2">2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats"/>任务管理
          </template>
          <MenuItem name="2-1">1</MenuItem>
          <MenuItem name="2-2">2</MenuItem>
        </Submenu>
         <Submenu name="4">
          <template slot="title">
            <Icon type="ios-stats"/>资产管理
          </template>
          <MenuItem name="2-1">1</MenuItem>
          <MenuItem name="2-2">2</MenuItem>
        </Submenu>
        <Submenu name="5">
          <template slot="title">
            <Icon type="ios-stats"/>引擎管理
          </template>
          <MenuItem name="2-1">1</MenuItem>
          <MenuItem name="2-2">2</MenuItem>
        </Submenu>
        <Submenu name="6">
          <template slot="title">
            <Icon type="ios-stats"/>文档管理
          </template>
          <MenuItem name="2-1">1</MenuItem>
          <MenuItem name="2-2">2</MenuItem>
        </Submenu>
        <Submenu name="7">
          <template slot="title">
            <Icon type="ios-stats"/>系统管理
          </template>
          <MenuItem name="2-1">1</MenuItem>
          <MenuItem name="2-2">2</MenuItem>
        </Submenu>
      </Menu>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme2: "dark"
    };
  }
};
</script>

<style scoped>
.left_top{
    font-size: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
}
</style>


