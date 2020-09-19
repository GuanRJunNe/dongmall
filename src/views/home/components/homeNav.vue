<template>
  <div class="nav">
    <div class="nav_title">
      <span>三</span>
      <span>所有分类</span>
      <div>
        <div>
          <ul>
            <li></li>
          </ul>
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
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
  width: 100%;
}
.nav > div {
  display: inline-block;
}
.nav > .nav_title {
  padding-left: 24px;
  font-size: 18px;
  position: relative;
  width: 200px;
  height: 3rem;
  line-height:3rem;
  color:#fff;
  border-radius: 12px 12px 0 0;
  background-color: #ff734c;
}
.nav > .other {
  width: 60%;
  text-align: left;
  margin-left:2rem;
}
.other > ul {
  list-style: none;
}
.other > ul > li {
  display: inline-block;
  margin-right:2rem;
}
</style>