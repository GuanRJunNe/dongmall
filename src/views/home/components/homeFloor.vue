<template>
  <div class="floor">
    <div class="floor_one">
      <div class="floor_title">
        <p>东为电器 <span> | 送 · 让你怦然心动的人</span></p>
        <span>更多电器 ></span>
      </div>
      <div class='floor_desc'>
        <div class='floor_img'>
          <a href="">
            <img src="@/assets/img/big.png" alt="">
          </a>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li>
          
          </ul>
          <ul>
            <li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li><li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li><li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li><li>
              <div>
                <a href="">
                  <div class="small_img">
                    <img src="@/assets/img/rose.jpg" alt="">
                  </div>
                  <div class='small_desc'>
                    <div class="f_title">爱情 ·一往情深</div>
                    <div class="price">￥239</div>
                    <div class="sale">已售12.8万件</div>
                  </div>
                </a>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>

</template>
<script>

</script>
<style scoped>
  .floor {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .floor_one {
    width: 100%;
    overflow: hidden;
  }

  .floor_one .floor_title {
    width: 100%;
    padding: 0.5rem 3rem;
    position: relative;
    overflow: hidden;

  }

  .floor_title>p {
    float: left;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .floor_title>p>span {
    font-size: 1.5rem;
    font-weight: normal;
    ;
  }

  .floor_title>span {
    float: right;
  }

  .floor_title>span:hover {
    color: #FF734C;
  }

  .floor_desc {
    margin-top: 1rem;
  }

  .floor_img {
    width: 19%;
    float: left;
  }

  .floor_img img {
    width: 100%;
    height: 100%;
  }

  .floor_desc>div:last-child {
    width: 80%;
    display: inline-block;
  }

  ul {
    list-style: none;
  }

  .floor_desc>div:last-child li {
    width: 24%;
    display: inline-block;
    padding: 1rem;
  }

  .f_title {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1rem;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  .sale {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }


  .price {
    font-weight: blod;
  }

  .sale {
    font-size: 1rem;
    color: #ccc;
  }

  .small_img {
    width: 100%;
    height: 70%;
  }

  .small_img img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-transition: all .4s;
    -o-transition: all .8s;
    transition: all .8s;
    cursor: pointer;
  }

  .small_img :hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
  }

  .small_desc {
    width: 100%;
    height: 25%;
  }

  .small_img:hover+div.small_desc {
    color: #FF734C;
  }

  /* 大屏幕 ：大于等于1200px*/
  @media (min-width: 1200px) {}

  /*默认*/
  @media (min-width: 980px) {
    .floor_title>p {
      font-size: 1.3rem;
    }

    .floor_title>p>span {
      font-size: 1.3rem;
    }

    .floor_one .floor_title {
      padding: 0.5rem 1rem;


    }
  }

  /* 平板电脑和小屏电脑之间的分辨率 */
  @media (min-width: 767px) and (max-width: 979px) {
    .floor_title>p {
      font-size: 1rem;
    }

    .floor_title>p>span {
      font-size: 1rem;
    }

    .floor_one .floor_title {
      padding: 0.5rem 1rem;


    }
    .floor_desc>div:last-child li {
    width: 33%;
    display: inline-block;
    padding: 1rem;
  }
  .floor_desc>div:last-child li:last-child {
    display: none;
  }
  }
</style>