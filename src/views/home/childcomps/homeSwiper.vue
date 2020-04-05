<template>
  <swiper class="swiper" :options="swiperOption" >
    <swiper-slide v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
            <img :src="item.image" @load="swiperimgload">
        </a>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
 
  </swiper>

</template>

<script>
import { Swiper, SwiperSlide, directive }from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name: 'homeSwiper',
    components:{
        Swiper,
        SwiperSlide
        
    },
    directives: {
    swiper: directive
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          isload:false
        }
      }
    },
    props:{
        banners:{
            type: Array,
            default(){
              return []
          }
        }
    },
    methods:{
      swiperimgload(){
        if(!this.isload){
            this.$emit('swiperimgload')
            this.isload=true
        }

      }
    }
}
</script>

<style scoped>
.swiper{
    width:100%
}
.swiper img{
    width:100%
}
</style>