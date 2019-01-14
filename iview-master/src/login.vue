<template>
  <div id="app">
      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="10"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>
<script>
export default {
    
}
</script>

<style>
#app{
    background-image:url(../static/bc.jpg);
    width: 100vw;
    height: 100vh;
}
</style>

