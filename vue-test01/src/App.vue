<template>
  <div id="yjy-admin">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "./assets/reset.scss";

html,
body {
  width: 100%;
  height: 100%;
}

#yjy-admin {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
