<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont iconfanhui"></span>
    </div>
    <div class="header-input">
        <span class="iconfont iconsousuo"></span>
        输入城市/景点/游玩主题
    </div>
    <a href="javascript:;" class="mp-linkarea">
      {{this.city}}
      <span class="iconfont iconjiantou"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="less" scoped>
@import '~styles/variables.less';
.header {
  display: flex;
  background-color: @bgColor;
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
    .iconfanhui{
        font-size:.25rem;
        font-weight: bolder;
    }
  }
  .header-input {
    height: .64rem;
    flex: 1;
    background-color: #fff;
    border-radius: .06rem;
    box-sizing: border-box;
    color:#ccc;
    line-height: .64rem;
    padding-left:.2rem;
  }
  .mp-linkarea {
    color: #fff;
    float: right;
    line-height: 0.88rem;
    padding-left: 0.22rem;
    padding-right: 0.22rem;
    .iconjiantou{
        font-size:.2rem;
    }
  }
}
</style>
