<template>
  <div id="app">
    <vue-particles
      color="#ffffff"
      :particleOpacity="0.7"
      linesColor="#ffffff"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div id="card_div">
      <div class="login_box">
        <!-- <img src="./assets/logo.png"> -->
        <div>
          <p class="title_p">欢迎登陆后台管理系统</p>
        </div>
        <div>
          <Input placeholder="用户名" v-model="name" style="width: 100%">
            <Icon type="ios-contact" slot="prefix"/>
          </Input>
        </div>
        <div>
          <Input type="password" v-model="password" placeholder="密码" style="width: 100%">
            <Icon type="md-lock" slot="prefix"/>
          </Input>
        </div>
        <div class="login_btn">
          <Button @click="login_clk()" type="primary" long>登录</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      name: ""
    };
  },
  methods: {
    login_clk() {
      if (this.name != "" && this.password != "") {
        localStorage.setItem("token", this.name);
        this.$router.push({
          name: "view"
        });
      } else {
        this.$Message.warning("请输入用户名密码！");
      }
    }
  }
};
</script>

<style lang="less">
#app {
  background-image: url(../static/bc.jpg);
  width: 100vw;
  height: 100vh;
}
#card_div {
  margin: auto;
  position: fixed;
  top: 30%;
  left: calc(50% - 200px);
  width: 400px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 10px;
  border-radius: 5px;
  cursor:pointer ;
}
#card_div:hover {
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
.login_box {
  text-align: center;
  padding: 10px;
  img {
    width: 80px;
  }
  
  > div {
    margin-top: 30px;
    padding: 0 20px;
    p{
      font-size: 20px;
    }
  }
  .login_btn {
    padding: 0 40px;
    padding-bottom: 20px;
  }
}
</style>

