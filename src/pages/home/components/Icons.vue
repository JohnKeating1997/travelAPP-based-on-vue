<template>
  <!-- 最外层防抖 -->
  <div class="icons">
    <!-- 滑动层 -->
    <swiper :options="swiperOptions">
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
  data () {
    return {
      swiperOptions: {
        loop: true
      },
      iconList: [
        {
          id: '0001',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png',
          desc: '一日游'
        },
        {
          id: '0003',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/e261a830727b7ffde3ce391190644204.png',
          desc: '横店影视城'
        }, {
          id: '0004',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/c67cf76423123534cfade36f244d333d.png',
          desc: '杭州宋城'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '杭州野生'
        },
        {
          id: '0006',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          desc: '西溪周家村'
        },
        {
          id: '0007',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/59bc59a3c38261e9a3f2f991a9ce0d21.png',
          desc: '杭州必游'
        }, {
          id: '0008',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '漂流'
        }, {
          id: '0009',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
          desc: '西湖'
        }, {
          id: '0010',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/931f626a44f714d055f9a0f8235170fa.png',
          desc: '游山玩水'
        },
        {
          id: '00011',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/bd121884123cceb4da978047423421ce.png',
          desc: '去哪儿联盟'
        }
      ]
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
