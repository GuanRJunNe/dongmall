<template>
  <div class="mall_desc">
    <div>
      <img src="@/assets/img/pc.jpg" alt="">
    </div>
    <div class="mall_hot">
      <ul>
        <li class="small_hot">
          <a href="">
            <div>
              <div class="hot_left">
                <div>热销花篮</div>
                <p>+月饼组合</p>
                <div>￥299</div>
              </div>
              <div class="hot_right">
                <img src="@/assets/img/rn.jpg" alt="">
              </div>
            </div>
          </a>
        </li>
        <li class="small_hot">
          <a href="">
            <div>
              <div class="hot_left">
                <div>热销花篮</div>
                <p>+月饼组合</p>
                <div>￥299</div>
              </div>
              <div class="hot_right">
                <img src="@/assets/img/rn.jpg" alt="">
              </div>
            </div>
          </a>
        </li>
        <li class="small_hot">
          <a href="">
            <div>
              <div class="hot_left">
                <div>热销花篮</div>
                <p>+月饼组合</p>
                <div>￥299</div>
              </div>
              <div class="hot_right">
                <img src="@/assets/img/rn.jpg" alt="">
              </div>
            </div>
          </a>
        </li>
        <li class="small_hot">
          <a href="">
            <div>
              <div class="hot_left">
                <div>热销花篮</div>
                <p>+月饼组合</p>
                <div>￥299</div>
              </div>
              <div class="hot_right">
                <img src="@/assets/img/rn.jpg" alt="">
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="mall_pic">
      <div>
         <img src="@/assets/img/lover.jpg" alt="">
      </div>
      <div>
        <div>
          <img src="@/assets/img/love1.jpg" alt="">
        </div>
        <div>
          <img src="@/assets/img/love2.jpg" alt="">
        </div>
      </div>
      <div>
        <img src="@/assets/img/lover.jpg" alt="">
     </div>
     <div>
       <div>
         <img src="@/assets/img/love1.jpg" alt="">
       </div>
       <div>
         <img src="@/assets/img/love2.jpg" alt="">
       </div>
     </div>
    </div>
    <div class="mall_pic">
      <div>
         <img src="@/assets/img/pic1.png" alt="">
      </div>
      <div>
        <img src="@/assets/img/pic1.png" alt="">
      </div>
      <div>
        <img src="@/assets/img/pic1.png" alt="">
     </div>
     <div>
      <img src="@/assets/img/pic1.png" alt="">
     </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang='scss'  scoped>
.mall_desc{
  width:80%;max-width:1200px;;
  margin:0 auto;
  position: relative;
  overflow:hidden;
}
.mall_desc>div{
  width:100%;
  margin:0 auto;
}
.mall_desc>div>img{
  width:100%;
}
.mall_hot{
  padding:2rem ;
  background-color:#A8232B;
}
.mall_hot ul{
  width:100%;
  list-style: none;
}
.mall_hot  li{
  width:24%;
  display: inline-block;
  background-color:#fff;
  border-radius:12px;
  margin-right:0.32rem;
}
.small_hot>a>div{
  width:100%;
  position: relative;
  overflow: hidden;
  padding: 0.5rem;
}
.hot_left{
  width:40%;
  float: left;
  margin-top:2rem;
}
.hot_left>div:first-child{
  font-size:1.1rem;
  color:#000;
}
.hot_left>p{
  font-size:0.9rem;
  margin-top:0.5rem;
}
.hot_left>div:last-child{
  margin-top:1.5rem;
  color: #C26137;
  font-size:1.2rem;
  font-weight: bold;
}
.hot_right{
  width:50%;
  padding:0.2rem;
  float: left;
}
.hot_right>img{
  width:100%;
}
div.mall_pic{
  width:100%;
  position:relative;
  overflow: hidden;
}
.mall_pic>div{
  width:24%;
  margin:0 0.1rem;
  /* display: inline-block; */
  float: left;
}
.mall_pic>div img{
  width:100%;
  height:100%;
}
 /* 大屏幕 ：大于等于1200px*/
 @media (min-width: 1200px) {
  
}
 
 /*默认*/
 @media (min-width: 980px){
  .mall_hot{
    padding:1rem;
  }
  .floor_title>p{
    font-size:1.2rem;
  }
 
}
 
 /* 平板电脑和小屏电脑之间的分辨率 */
 @media (min-width: 767px) and (max-width: 979px) { 
  .mall_hot{
    padding:1rem;
  }
  .hot_right{
    width:60%;
  }
  .hot_left{
    width:40%;
  }
   /*
  div.hot_left>div:first-child{
    font-size:1rem;
  }
  div.hot_left>div:last-child{
    font-size:0.9rem;
  }
  div.hot_left>div:nth-child(2){
    font-size:0.6rem;
  } */
  .mall_hot  li{
  width:32%;
  display: inline-block;
  background-color:#fff;
  border-radius:12px;
  margin-right:0.32rem;
}
.mall_hot  li:last-child{
  display: none;
}

  }
</style>
