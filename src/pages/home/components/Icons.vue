<template>
  <!-- 最外层防抖 -->
  <div class="icons">
    <!-- 滑动层 -->
    <swiper :options="swiperOptions" v-if="showSwiper">
      <!-- 被滑动的组件 -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: false
      }
      // iconList: [

      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.iconList.length
    }
  }
}
</script>

<style lang="less" scoped>
@import "~styles/variables.less";
@import "~styles/mixins.less";
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
  // background: green;
}
.icons{
  margin-top:.1rem;
  margin-bottom: .1rem;
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0; // 为了不让每个icon的高度被撑开，严守宽高比1:1
    padding-bottom: 25%;
    // background: red;
    .icon-img {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0.44rem; //给文字描述留出来的空间
      // background:blue;
      box-sizing: border-box;
      padding: 0.1rem;
    }
    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: @darkTextColor;
      text-align: center;
      #ellipsis();
    }
}

}
</style>
