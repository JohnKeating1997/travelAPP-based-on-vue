<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: [{
      //   id: '0001',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/9f/9f6d370f12ab9bc7a3.water.jpg_200x200_510fa41f.jpg',
      //   title: '杭州长乔极地海洋公园',
      //   desc: '杭州长乔极地海洋公园由功夫巨星马保国斥资23亿建成，是一个集极地动物、海洋生物展示、表演，以及景观体验于一体的大型海洋主题公园'
      // }, {
      //   id: '0002',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
      //   title: '千岛湖天迹热气球',
      //   desc: '与音乐家，舞蹈艺术家，篮球运动员蔡徐坤小姐一起共享浪漫之旅'
      // }, {
      //   id: '0003',
      //   imgUrl: 'https://imgs.qunarzz.com/sight/p0/2006/79/795f80bd0c876ba1a3.img.jpg_200x200_fa6a32f1.jpg',
      //   title: '杭州乐园',
      //   desc: '老戏骨肖战与您相约杭州公园'
      // }]
    }
  }
}
</script>>

<style lang="less" scoped>
@import "~styles/mixins.less";
  .recommend-title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item{
    width:100%;
    overflow: hidden;
    display:flex;
    height: 1.9rem;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      flex: 1;
      padding: .1rem;
      overflow: hidden;
      .item-title{
        width:100%;
        line-height: .54rem;
        font-size: .32rem;
      }
      .item-desc{
        width:100%;
        height: .44rem;
        line-height: .44rem;
        color:#ccc;
        #ellipsis();
      }
      .item-button{
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 .1rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
</style>
