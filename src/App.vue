<template>
  <div id="app">
    <swiper :options="swiperOptions" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    // data() {
    //   return {
    //     swiperOption: {}
    //   }
    // },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      swiperOptions() {
        return {
          slidesPerView: 3,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            768: {
              slidesPerView: 1
            }
          }
        }
      }
    },
    mounted() {
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      callback() {
        console.log('foo')
      }
    }
  }
</script>

<style>
  #app {
    max-width: 800px;
    margin: 0 auto;
  }

  .swiper-slide {
    min-height: 300px;
  }
</style>
