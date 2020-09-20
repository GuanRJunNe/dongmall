<template>
  <div>
    <div class="he_top">
      <div>
        <div>
        <ul>
          <li>
            <a href="javascript,">东为商城</a>
          </li>
          <li>
            <a href>东为云商</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>
              <a href>你好，请登录</a>
            </span>
            <span>
              <a href>注册</a>
            </span>
          </li>
          <li>
            <a href>订单查询</a>
          </li>
          <li>
            <a href>客户服务</a>
          </li>
          <li>
            <a href>购物车 (0)</a>
          </li>
        </ul>
      </div>
      </div>
      
    </div>
    <div class="he_logo">
      <div>
        <div>图片</div>
      <div>
        <div class="input_p">
          <input type="text" />
          <button>搜索</button>
        </div>
        <div class="small_title">
          <ul>
            <li>手机</li>
            <li>电脑</li>
            <li>笔记本</li>
            <li>相机</li>
          </ul>
        </div>
      </div>
      <div>
        <div>联系方式</div>
        <div>在线客服</div>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.he_top {
  width: 100%;
  height: 35px;
  min-width: 768px;
  line-height: 35px;
  overflow: hidden;
  background-color: #f3f5f7;
  border-bottom: 1px solid #eee;
}
.he_top > div {
  width:90%;
  margin:0 auto;
}
.he_top > div>div:first-child {
  width: 35%;
   display: inline-block;
}

.he_top > div>div:last-child {
  width: 65%;
   display: inline-block;
}
.he_top > div >div>ul > li {
  display: inline-block;
}
.he_top > div ul > li + li {
  margin-left: 1rem;
}
/* logo行区 */
.he_logo {
  width: 100%;
  padding: 2rem 0 1rem 0;
}

.he_logo > div {
  width:90%;
  margin:0 auto;
  position: relative;
  overflow: hidden;
}
.he_logo >div> div:first-child {
  width: 30%;
  margin-top:10px;
  float: left;
}
.he_logo > div>div:nth-child(2) {
  width: 30%;
  float: left;
}
.he_logo > div>div:last-child {
  width: 32%;
  margin-top:10px;
  float: left;
}
.he_logo > div> div:last-child > div {
  display: inline-block;
  margin-right: 2rem;
}
.input_p {
  width: 100%;
  height: 48px;
  border: 2px solid #ff734c;
  border-radius: 24px;
  position: relative;
}
.input_p > input {
  border: 0;
  margin-top: 5px;
  outline: none;
  position: absolute;
  top: 7px;
  left: 9px;
}
.input_p > button {
  position: absolute;
  top: -2px;
  right: -2px;
  /* width: 4rem/; */
  line-height: 1px;
  color: #fff;
  background-color: #ff734c;
  border: 24px solid #ff734c;
  border-radius: 24px;
  outline: none;
  padding:0 .5rem;
}
.small_title{
  margin-top:0.8rem;
}
.small_title ul{
  list-style:none; 
}
.small_title ul>li{
  display: inline-block;
  margin-right:15px;
}
</style>