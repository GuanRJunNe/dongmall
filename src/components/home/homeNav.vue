<template>
  <div class='nav'>
    <div class="nav-bg"></div>
    <div class='nav-container'>
      <div class="nav-img">
        <a href="">
          <img src="../../assets/img/home/3.png" alt="">
        </a>
        <a href="">
          <img src="../../assets/img/home/3.gif" alt="">
        </a>
      </div>
      <div class="nav_search">
        <input type="text"></input>
        <button> 搜索</button>
        <div>
          <span <a href="">手机</a>
          </span>
          <span>
            <a href="">手机</a>
          </span>
          <span>
            <a href="">手机</a>
          </span>

        </div>
      </div>
    </div>
    <div class="nav_lei">
      <div class='lei_left'>
        <span>分类</span>
        <div>
          <div>
            <div class="cover"></div>
            <ul class='lei_ul'>
              <li class="lei_li" @mouseover="mouseOver" @mouseleave="mouseLeave">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li class="lei_li">
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li>
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li>
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
              <li>
                <span>1</span>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
                <a href="">手机</a>
                <em>/</em>
              </li>
            </ul>
            <div class="lei_show" :style="active">
              <div class='lei_tab'>
                <button>东为</button>
                <button>东为</button>
                <button>东为</button>
                <button>东为</button>
                <button>东为</button>
              </div>
              <div>
                <dl>
                  <dt>特色购物</dt>
                  <dd>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                  </dd>
                </dl>
                <dl>
                  <dt>特色购物</dt>
                  <dd>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                  </dd>
                </dl>
                <dl>
                  <dt>特色购物</dt>
                  <dd>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                    <p>东为购物</p>
                  </dd>
                </dl>
              </div>
              <div class=lei_img>
                <div class="img_top">图片</div>
                <div class="img_bottom">图片</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>
        <ul>
          <li>
            <a href="">
              东为商城
            </a>
          </li>
          <li>
            <a href="">
              东为商城
            </a>
          </li>
          <li>
            <a href="">
              东为商城
            </a>
          </li>
          <li>
            <a href="">
              东为商城
            </a>
          </li>
          <li>
            <a href="">
              东为商城
            </a>
          </li>
        </ul>
      </div>
      <div class='lei_right'>
        <span>公示：协议|规则|证照</span>
      </div>
    </div>
    <div class="banner_center" style="width:50%;background-color:green;background-color: green;
    position: absolute;
    left: 26%;
    width: 1000px;
    height: 200px;">
      <ul>
        <li>
          <a href="">
            <img src="" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="me_card" style="height:200px;width: 200px;
    background-color: lightcoral;
    height: 200px;
    position: absolute;
    right: 16%;">

    </div>

     
   
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: ''
      }
    },
    methods: {
      mouseOver() {
        this.active = 'display:block;'
      },
      mouseLeave() {
        this.active = ''
      }
    }
  }
</script>
<style scoped>
  .nav {
    width: 100%;
    position: relative;
  }

  .nav-bg {
    position: absolute;
    top: 0px;
    height: 80px;
  }

  .nav-container {
    width: 1080px;
    position: relative;
    height: 100px;
    margin: 0 auto;
  }

  .nav-container>div {
    display: block;
    float: left;
  }

  .nav-container>div img {
    height: 90px;
  }

  /* .nav-container .nav-img{
  margin-left:50px;
} */
  div.nav-container div.nav_search {
    position: absolute;
    top: 50%;
    left: 600px;
  }

  .nav_lei {
    width: 100%;
    height: 38px;
    background-color: #fff;
    position: relative;
    margin: 0 auto;
  }

  .nav_lei>.lei_left,
  .nav_lei>.lei_right {
    width: 10%;
    height: 30px;
    position: absolute;
  }

  .nav_lei>.lei_left {
    margin-left: 300px;
    background-color: pink;
  }

  .nav_lei ul.lei_ul {
    list-style: none;
    position: absolute;
    background-color: lemonchiffon;
  }

  .nav_lei ul>li {
    display: inline-block;
    padding: 2px;
  }

  .nav_lei>.lei_right {
    right: 0;
    top: -10px;
    margin-right: 300px;
    background-color: khaki;
  }

  .lei_li {
    width: 100%;
    color: red;
  }

  .lei_show {
    display: none;
    width: 500px;
    background-color: pink;
    position: absolute;
    left: 190px;
  }

  .lei_img {
    position: absolute;
    right: 0px;
  }

  .lei_show>div:nth-child(2) {
    width: 200px;
    float: left;
  }

  .lei_show dl {
    float: left;
    width: 950px;
    overflow: hidden;
    height: auto;
  }

  .lei_show dt {
    float: left;
    width: 80px;
    height: 25px;
    line-height: 25px;

  }

  .lei_show dd {
    float: left;
    width: 100px;
  }

  .img_top,
  .img_bottom {
    background-color: yellow;
    width: 200px;
    height: 150px;
    margin: 5px;
  }
</style>