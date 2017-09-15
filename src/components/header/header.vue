<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟到达
          </div>
          <div class="support" v-if="seller.supports">
            <span class="icon " :class="classMap[seller.supports[0].type]" ></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <div class="supports_count" v-if="seller.supports" @click="showDetail(true)">
          <span class="count">{{seller.supports.length}}个</span>
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
      <div class="bulletin-wrapper" @click="showDetail(true)">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">{{seller.bulletin}}</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="background">
        <img :src="seller.avatar">
      </div>
      <transition name="fade">
        <div class="detail" v-show="detailShow">
          <div class="detail-wrapper">
            <div class="detail-main">
              <div class="name">{{seller.name}}</div>
              <div class="star-wrapper">
                <star :score="seller.score" :size="48"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul class="supports" v-if="seller.supports">
                <li class="support" v-for="(support,index) in seller.supports" :key="index">
                  <span class="icon" :class="classMap[support.type]"></span>
                  <span class="text">{{support.description}}</span>
                </li>
              </ul>
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="content">
                <p>{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="showDetail(false)">
            <span class="icon-close"></span>
          </div>
        </div>
      </transition>

    </div>
</template>

<script>
  import star from '../star/star.vue'
  export default {
    data(){
      return {
        classMap:["decrease", "discount", "guarantee", "invoice", "special"],
        detailShow:false
      }
    },
    props:{
      seller:Object
    },
    methods:{
      showDetail(isShow){
        this.detailShow=isShow
      }
    },
    components:{
      star
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
  overflow hidden
  background  rgba(7,17,27,0.5)
  color white
  position relative
  .content-wrapper
    padding 24px 12px 18px 24px
    position relative
    .avatar
      margin-right 16px
      height 64px
      width 64px
      display inline-block
      img
        width 100%
        border-radius 2px
    .content
      display inline-block
      .title
        margin 2px 0 8px 0
        .brand
          vertical-align middle
          width 30px
          height 18px
          background-size 30px 18px
          background-repeat no-repeat
          display inline-block
          bg-image(brand)
          /*background-image url("brand@2x.png")
          @media (min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3)
            background-image url("brand@3x.png")*/
        .name
          margin-left 6px
          font-size 16px
          font-weight bold
          line-height 18px
      .description
        font-size 12px
        font-weight 200
        line-height 12px
      .support
        margin 10px 0 2px 0
        .icon
          vertical-align middle
          width 12px
          height 12px
          background-size 12px 12px
          background-repeat no-repeat
          display inline-block
        .decrease
          bg-image(decrease_1)
        .discount
          bg-image(discount_1)
        .guarantee
          bg-image(guarantee_1)
        .invoice
          bg-image(invoice_1)
        .special
          bg-image(special_1)
        .text
          margin-left 4px
          font-size 10px
          font-weight 200
          line-height 12px
    .supports_count
      display flex
      padding 2px 8px
      background-color rgba(0,0,0,0.2)
      border-radius 15px
      height 24px
      position absolute
      right 12px
      bottom 18px
      box-sizing border-box
      .count
        margin-top 4px
        font-size 10px
        font-weight 200
        line-height 12px
      .icon-keyboard_arrow_right
        margin-top 2px


  .bulletin-wrapper
    position relative
    height 28px
    padding 0 12px
    background-color rgba(7,17,27,0.2)
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    .bulletin-title
      vertical-align middle
      width 22px
      height 12px
      background-size 22px 12px
      background-repeat no-repeat
      display inline-block
      bg-image(bulletin)
    .bulletin-text
      font-size 10px
      font-weight 200
      line-height 28px
      margin 0 4px
    .icon-keyboard_arrow_right
      position: absolute;
      top: 8px;
      right: 2px;
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    filter blur(10px)
    z-index -1
    img
      width 100%
      height 100%
  .detail
    z-index 100
    position fixed
    left 0
    top 0
    background  rgba(7,17,27,0.8)
    width 100%
    height 100%
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .5s
    &.fade-enter, &.fade-leave-to
      opacity: 0
    .detail-wrapper
      padding  64px 36px 0
      min-height 100%
      .detail-main
        .name
          font-size 16px
          font-weight 700
          line-height 32px
          text-align center
        .star-wrapper
          height 24px
          margin 16px 0 28px
          text-align center
        .title
          display flex
          margin 28px 0 24px
          .line
            height 2px
            width 104px
            background rgba(255,255,255,0.2)
            margin-top 15px
          .text
            margin 0 12px
            font-size 14px
            font-weight 700
            line-height 28px

        .supports
          padding 0 12px
          .support
            margin-bottom 12px
            height 16px
            margin-left 6px
            .icon
              vertical-align middle
              width 16px
              height 16px
              background-size 16px 16px
              background-repeat no-repeat
              display inline-block
            .decrease
              bg-image(decrease_2)
            .discount
              bg-image(discount_2)
            .guarantee
              bg-image(guarantee_2)
            .invoice
              bg-image(invoice_2)
            .special
              bg-image(special_2)
            .text
              font-size 12px
              font-weight 200
              line-height 12px
        .content
          padding 0 12px
          p
            font-size 12px
            font-weight 200
            line-height 24px
    .detail-close
      font-size 32px
      color rgba(255,255,255,0.5)
      margin-top -128px
      text-align center
</style>
