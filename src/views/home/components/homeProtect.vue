<template>
  <div class='footer'>
    <div class="protect">
      <div class="pro_img">
          <ul>
            <li>
              <div>
                <img src="@/assets/img/pro.jpg" alt="">
              </div>
              <div>
                <p>正品保障,提供发票</p>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/img/pro.jpg" alt="">
              </div>
              <div>
                <p>正品保障,提供发票</p>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/img/pro.jpg" alt="">
              </div>
              <div>
                <p>正品保障,提供发票</p>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/img/pro.jpg" alt="">
              </div>
              <div>
                <p>正品保障,提供发票</p>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/img/pro.jpg" alt="">
              </div>
              <div>
                <p>正品保障,提供发票</p>
              </div>
            </li>
          </ul>
      </div>
      <div class='pro_desc'>
        <dl>
          <dt>购物指南</dt>
          <dd>免费注册</dd>
          <dd>会员等级</dd>
          <dd>常见问题</dd>
        </dl>
        <dl>
          <dt>购物指南</dt>
          <dd>免费注册</dd>
          <dd>会员等级</dd>
          <dd>常见问题</dd>
        </dl>
        <dl>
          <dt>购物指南</dt>
          <dd>免费注册</dd>
          <dd>会员等级</dd>
          <dd>常见问题</dd>
        </dl>
        <dl>
          <dt>购物指南</dt>
          <dd>免费注册</dd>
          <dd>会员等级</dd>
          <dd>常见问题</dd>
        </dl>
        <dl>
          <dt>购物指南</dt>
          <dd>免费注册</dd>
          <dd>会员等级</dd>
          <dd>常见问题</dd>
        </dl>

       
      </div>
      
  </div>
  <div>
    <p>Copyright© 2002-2020，苏宁易购集团股份有限公司版权所有| 苏公网安备 32010202010078号| 苏ICP备10207551号-4</p>
  </div>
  </div>
 
</template>
<script>

</script>
<style scoped>
  div.protect{
    width:100%;
    padding:2rem 0;
    position: relative;
    overflow:hidden;
  }
  div.protect li{
    width:19%;
    /* float: left; */
    display: inline-block;
  }
  div.protect li div:first-child{
    width:100%;
    display: block;
  }
  div.protect li div:last-child{
    width:100%;
    display: block;
    margin-top:0.5rem;
  }
  div.protect ul{
    list-style: none;
  }
  .pro_desc{
    width:100%;
    padding: 2rem 0;
    margin:0 auto;
    
  }
  .pro_desc dl{
    width:19%;
     display: inline-block;
  }
  .pro_desc dd{
    margin-top:0.5rem;
  }
  .pro_img{
    width:100%;
    margin:0 auto;
  }
  div.protect>div>ul{
    border-bottom:1px solid #ddd;
    padding-bottom:2rem;
  }
  .footer{
    width:80%;max-width:1200px;;
    
    margin:0 auto;
    border-top:1px solid #ddd;
  }
  /* 大屏幕 ：大于等于1200px*/
  @media (min-width: 1200px) {}

  /*默认*/
  @media (min-width: 980px) {
    
  }

  /* 平板电脑和小屏电脑之间的分辨率 */
  @media (min-width: 767px) and (max-width: 979px) {
    div.protect  .pro_img ul{
     display: flex;
     flex-wrap: wrap;
   }
   div.protect  .pro_img ul li{
     justify-content: start;
     width:33%;
     margin:1rem 0;
   }
   .pro_desc {
     display: flex;
     flex-wrap: wrap;
   }
   .pro_desc  dl{
    justify-content: start;
     width:33%;
     margin:1rem 0;
   }


  }
</style>