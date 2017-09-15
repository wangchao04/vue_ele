<template>
  <div>
    <ele-header :seller="seller"></ele-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import axios from 'axios'
  export default {
    data () {
      return {
        seller: {}
      }
    },

    mounted () {
     /* // 使用vue-resource请求express提供的mock接口
      this.$http.get('/api2/seller')
        .then(response => {
          //获取返回的数据
          const result = response.body
          console.log('vue-resource result ', result)
        })*/
      // 使用axios请求mockjs提供的mock接口
      axios.get('/api/seller')
        .then(response => {
          //获取返回的数据
          const result = response.data
          // 更新状态
          if(result.code===0) {
            this.seller = result.data

          }
        })
    },
    components:{
      'ele-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    display flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      text-align center
      color rgb(77, 85, 93)
      font-size 14px
      .active
        color rgb(240,20,20)

</style>
