<template>
  <div>
    <div class="adver">
      <a href="https://cuxiao.suning.com/scms/917baofayemia_PC.html?safp=d488778a.homepagev8.126605238622.1&safpn=10001"
        target="_blank">
        <img src="../../assets/img/home/1.jpg" alt="">
      </a>
    </div>
    
    <div class="toolbar">
      <div class="toolleft">
        <div v-for="item in toolbarList" class="toolname">
          <!-- <a href=""> -->
          <span class="tool_name">{{item.name}}</span>
          <!-- </a> -->
          <div class="toolbar_child">
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
        </div>
      </div>
      <div class="toolright">
        <div>
          <span>请登录</span>
          <span>注册有礼</span>
        </div>
        <div>
          我的订单
        </div>
        <div>
          我的易购
        </div>
        <div>
          东为会员
        </div>
        <div>
          我的订单
        </div>
        <div>
          购物车
        </div>
        <div>
          易付宝
        </div>
        <div>
          企业采购
        </div>
        <div>手机东为</div>
      </div>
      <div class="toolmiddle"></div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        toolbarList: [{
          name: "网站导航"
        }, {
          name: '商家入驻'
        }, {
          name: '客户服务'
        }, {
          name: "北京"
        }]
      }
    }
  }
</script>
<style scoped>
  .adver {
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #7139f4;
  }

  .toolbar {
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #eee;
  }

  .toolleft {
    float: left;
    margin-left: 200px;
  }

  .toolright {
    float: right;
  }

  .toolbar_child {
    display: none;
    position:absolute;
    width:600px;
    background:lightcoral;
    padding:2px 10px;
    z-index:99;
    border-radius:5px;
  }

  .toolleft>div,
  .toolright>div {
    position: relavtive;
    float: left;
    height: 35px;
    line-height: 35px;
    margin-left: 15px;
  }

  .toolleft>div>a {
    width: 65px;
    display: block;
    position: relative;
    float: left;

  }

  .toolright {
    float: right;
    margin-right: 200px;
  }

  .tool_name:hover+div {
    display: block;
  }
  .tool_name:hover .toolname{
    background-color:pink;
  }
  .toolbar_child dl{
    float: left;
    width:130px;
    border-right:1px solid #000;
    margin:5px 12px ;
  }
  .toolbar_child dl p{
    float:left;
  }
  
</style>