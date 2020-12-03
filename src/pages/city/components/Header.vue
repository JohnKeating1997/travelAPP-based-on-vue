<template>
    <div class="header">
      <router-link to="/">
        <span class="iconfont iconfanhui"></span>
      </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
.header{
  position:relative;
  overflow: hidden;
  height: @headerHeight;
  line-height: @headerHeight;
  text-align: center;
  color:#fff;
  background: @bgColor;
  font-size: .32rem;
  .iconfanhui{
    position: absolute;
    left: 0;
    top: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color:#fff;
  }
}
</style>
