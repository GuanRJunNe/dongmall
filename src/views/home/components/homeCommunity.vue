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
  <div class="mall_foot">
    
  </div>
  </div>
</template>
<script>

</script>
<style scoped>
.mall_desc{
  width:100%;
  position: relative;
  overflow:hidden;
}
.mall_desc>div{
  width:80%;
  margin:0 auto;
}
.mall_desc>div>img{
  width:inherit;
}
.mall_hot{
  width:inherit;
  height:12rem;
  padding:1rem 0;
  background-color:#A8232B;
}
.mall_hot ul{
  width:80%;
  height:inherit;
  margin:0 auto;
  list-style: none;
}
.mall_hot  li{
  width:22%;
  background-color:#fff;
  border-radius:12px;
  margin-right:2rem;
  float:left;
}
.small_hot>a>div{
  width:100%;
  height:10rem;
  padding:1.5rem 1rem;
}
.hot_left{
  width:30%;
  float: left;
}
.hot_left>div:first-child{
  font-size:1.1rem;
  margin-top:0.5rem;
}
.hot_left>p{
  margin-top:0.5rem;
}
.hot_left>div:last-child{
  margin-top:1.5rem;
}
.hot_right{
  width:70%;
  height:100%;
  float: left;
}
.hot_right>img{
  width:100%;
  height:100%;
}
div.mall_pic{
  width:80%;
  position:relative;
  overflow: hidden;
  text-align: center;
  margin-top:2rem;
}
.mall_pic>div{
  width:24%;
  float: left;
}

</style>
