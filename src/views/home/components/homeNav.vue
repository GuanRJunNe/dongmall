<template>
  <div class="nav">
    <div class='cate'>
      <div class="nav_title">
      <span style="float:left;margin-left:1rem;">三</span>
      <span>所有分类</span>
      <div class="nav_cate">
        <div>
          <ul>
            <li @mouseover="mouseEnter" @mouseleave="mouseLeave">
              <a href="">手机</a>
              <span>/</span>
              <a href="">电脑</a>
              <span>/</span>
              <a href="">笔记本</a>
            </li>
            <li>
              <a href="">手机</a>
              <span>/</span>
              <a href="">电脑</a>
              <span>/</span>
              <a href="">笔记本</a>
            </li>
            <li>
              <a href="">手机</a>
              <span>/</span>
              <a href="">电脑</a>
              <span>/</span>
              <a href="">笔记本</a>
            </li>
            <li>
              <a href="">手机</a>
              <span>/</span>
              <a href="">电脑</a>
              <span>/</span>
              <a href="">笔记本</a>
            </li>
            <li>
              <a href="">手机</a>
              <span>/</span>
              <a href="">电脑</a>
              <span>/</span>
              <a href="">笔记本</a>
            </li>
          </ul>
        </div>
        <div class="nav_show" :class="actives?'active':''">
          <dl style="float: left;">
            <dt>3c类</dt>
            <dd>手机</dd>
            <dd>电脑</dd>
            <dd>电脑</dd>
            <dd>电脑</dd>
            <dd>电脑</dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="other">
      <ul>
        <li>手机</li>
        <li>电脑</li>
        <li>笔记本</li>
        <li>相机</li>
        <li>冰箱</li>
        <li>洗衣机</li>
      </ul>
    </div>
    </div>
    
    <div class="nav_swiper">
      <swiper :options="swiperOption">
        　　<swiper-slide>
            <img src="@/assets/img/adv_article1.jpg" alt="">
        </swiper-slide>
        　　<swiper-slide>slide2</swiper-slide>
        　　<div class="swiper-pagination" slot="pagination"></div>
        　　<div class="swiper-button-prev" slot="button-prev"></div>
        　　<div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="main-server">
      <ul>
        <li>
          <a href="">
            <p>龙头企页</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>龙头企页</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>龙头企页</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>龙头企页</p>
          </a>
        </li>
        <li>
          <a href="">
            <p>龙头企页</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper';
  import '@/assets/css/swiper.min.css';
  export default {
    data() {
      return {
        actives: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击小圆点跳转
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false // 手动切换之后继续自动轮播
          },
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    methods: {
      mouseLeave() {
        console.log('11111111')
        this.actives = false
      },
      mouseEnter() {
        console.log('000')
        this.actives = true
      }
    }
  };
</script>
<style scoped>
  .nav {
    width: 80%;
    margin:0 auto;
    position: relative;
  }

  /* .nav>div {
    display: inline-block;
  } */
  .cate{
    width:100%;
  }
  .nav>div>.nav_title {
    /* padding-left: 24px; */
    font-size: 18px;
    position: relative;
    float: left;
    /* display: inline-block; */
    width: 12rem;
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    border-radius: 12px 12px 0 0;
    background-color: #ff734c;
  }
  .nav_cate{
    float: left;
  }
  .nav>div>.other {
    width: 60%;
    float: left;
    text-align: left;
    margin-left: 2rem;
    margin-top:1rem;
    font-weight:bold;
    font-size:1.2rem;
  }

  .other>ul {
    list-style: none;
  }

  .other>ul>li {
    display: inline-block;
    margin-right: 2rem;
  }

  .nav_cate {
    position: absolute;
    height: 22rem;
    width: 100%;
    z-index:999;
    background-color: pink;
  }

  .nav_show {
    width: 52rem;
    background-color: yellow;
    position: absolute;
    left: 190px;
    top: 0px;
    height: 22rem;
    color: pink;
    display: none;
  }

  .nav_cate ul>li {
    height: 2rem;
    line-height: 2rem;
  }

  .nav_show dl {
    float: left;
  }

  .nav_show dl>dd {
    float: left;
    width: 3rem;
  }

  .nav_show dl>dt {
    float: left;
    width: 4rem;
  }

  .active {
    display: block;
  }
  .nav_swiper{
    width:100%;
  }
  .swiper-container {
    width:inherit;
    height:22rem;
  }
  .swiper-button-prev,.swiper-button-prev{
    position:absolute;
  }
  .swiper-button-prev{
    left:35rem;
    background-color:pink;
  }
  .swiper-button-next{
    right:31rem;
    background-color:pink;
  }
  .main-server{
    width:100%;
    height:2rem;
    text-align:center;
  }
  .main-server ul  li{
    display: inline-block;
    margin-right:2rem;
    height:2rem;
    line-height: 2rem;
  }
  
</style>