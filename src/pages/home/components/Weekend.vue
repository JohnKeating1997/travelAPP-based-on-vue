<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
        title: '美丽的普陀山',
        desc: '人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg',
        title: '泡汤好去处',
        desc: '泡在氤氲的温泉中，聆听冬天脚步的声音'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg',
        title: '精致暖汤',
        desc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
      }]
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
    .item-img-wrapper{
      height: 0;
      padding-bottom: 36.6%;
      .item-img{
        width: 100%;
      }
    }
      .item-info{
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
      }
</style>
