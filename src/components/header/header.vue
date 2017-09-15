<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img src="./avatar.jpg">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">粥品香坊（回龙观）</span>
          </div>
          <div class="description">
            蜂鸟专送/38分钟到达
          </div>
          <div class="support">
            <span class="icon decrease"></span>
            <span class="text">在线支付满28减5</span>
          </div>
        </div>
        <div class="supports_count">
          <span class="count">5个</span>
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
      <div class="bulletin-wrapper">
        <span class="bulletin-title"></span>
        <span class="bulletin-text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <div class="background">
        <img src="./avatar.jpg">
      </div>
      <div class="detail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <div class="name">粥品香坊（回龙观）</div>
            <div class="star-wrapper">
              <div class="star star-48">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item on"></span>
                <span class="star-item half"></span>
                <span class="star-item off"></span>
              </div>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports">
              <li class="support">
                <span class="icon decrease"></span>
                <span class="text">在线支付满28减5</span>
              </li>
              <li class="support">
                <span class="icon discount"></span>
                <span class="text">VC无限橙果汁全场8折</span>
              </li>
              <li class="support">
                <span class="icon guarantee"></span>
                <span class="text">单人精彩套餐</span>
              </li>
              <li class="support">
                <span class="icon invoice"></span>
                <span class="text">该商家支持发票,请下单写好发票抬头</span>
              </li>
              <li class="support">
                <span class="icon special"></span>
                <span class="text">已加入“外卖保”计划,食品安全保障</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="content">
              <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
            </div>
          </div>
        </div>
        <div class="detail-close">
          <span class="icon-close"></span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {}
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
    //display none
    position fixed
    left 0
    top 0
    background  rgba(7,17,27,0.8)
    width 100%
    height 100%
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
          .star-24
            .star-item
              display inline-block
              width 10px
              height 10px
              background-repeat no-repeat
              background-size 10px 10px
            .on
              bg-image(star24_on)
            .half
              bg-image(star24_half)
            .off
              bg-image(star24_off)
          .star-36
            .star-item
              display inline-block
              width 15px
              height 15px
              background-repeat no-repeat
              background-size 15px 15px
            .on
              bg-image(star36_on)
            .half
              bg-image(star36_half)
            .off
              bg-image(star36_off)
          .star-48
            .star-item
              display inline-block
              width 20px
              height 20px
              background-repeat no-repeat
              background-size 20px 20px
            .on
              bg-image(star48_on)
            .half
              bg-image(star48_half)
            .off
              bg-image(star48_off)

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
