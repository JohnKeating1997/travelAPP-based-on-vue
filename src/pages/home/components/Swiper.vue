<template>
<div class="wrapper">
  <swiper :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2500
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="less" scoped>
  .wrapper /deep/ .swiper-pagination-bullet-active{
    background-color: white;
  }
  .wrapper {
    //防抖
    overflow: hidden; //好像这里没啥用
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background-color: #ccc;
    .swiper-img{
    width: 100%;
    height:2.34rem;
    object-fit:cover //图片保持宽高比，填充
    }
  }
</style>
