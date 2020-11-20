<template>
  <div class="header">
    <div class="header-left">返</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <a href="javascript:;" class="mp-linkarea">
      <span>城市</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  background-color: #00bcd4;
  height:.88rem;
  line-height: 0.88rem;
  color: #fff;
//   text-align: center;
  align-items: center;
  .header-left {
    float: left;
    width: 0.4rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
  .header-input {
    height: .64rem;
    flex: 1;
    background-color: #fff;
    border-radius: .06rem;
    box-sizing: border-box;
    color:#ccc;
    line-height: .64rem;
  }
  .mp-linkarea {
    color: #fff;
    float: right;
    span {
      line-height: 0.88rem;
      padding-left: 0.22rem;
      padding-right: 0.22rem;
    }
  }
}
</style>
