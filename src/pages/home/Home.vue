<template>
  <div>
    <home-header>This is Header</home-header>
    <home-swiper></home-swiper>
    <div>下面的内容</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  // 注册子组件
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
