
<template>
  <div class="layout">
    <Layout>
      <Sider
        class="left_div"
        ref="side1"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <div class="icon_top">
          <img src="../static/image/xinggui_white.png" alt>
        </div>
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
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
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Row>
            <Col span="21">
              <Icon
                @click.native="collapsedSider"
                :class="rotateIcon"
                :style="{margin: '0 20px'}"
                type="md-menu"
                size="24"
              ></Icon>
            </Col>
            <Col span="3">
              <div style="width:100%">
                <div>欢迎，超级管理员
                  <Avatar icon="ios-person" size="small"/>
                </div>
              </div>
            </Col>
          </Row>
        </Header>
        <Content :style="{margin: '20px', background: '#f5f7f9', minHeight: '260px'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
// import mypage from '@/components/mypage'
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.icon_top {
  text-align: center;
  background: #515a6e;
  padding: 20px 0px;
}
.icon_top > img {
  width: 100px;
}
.left_div {
  height: 100vh;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
