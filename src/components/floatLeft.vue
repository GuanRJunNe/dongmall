<template>
  <div>
    	<!-- 左侧固定 -->
		<div id="float_left">
			<ul class="floor-guide">
				<li>
					<a href="javascript:;" class="name">服饰百货</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">手机通讯</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">生活日用</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">食品酒水</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">母婴玩具</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">美妆个护</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">电脑数码</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">家用电器</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">家装建材</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
				<li>
					<a href="javascript:;" class="name">图书音像</a>
					<a href="javascript:;" class="icon ng-iconfont"></a>
				</li>
			</ul>
		</div>

		<!-- 左侧固定结束 -->

  </div>
</template>
<script>

</script>
<style scoped>
/*左侧导航*/

#float_left{
	position: fixed;
	top: 135px;
	left: 0px;
	z-index: 9998;
	display: none;

}
#float_left li{
	background: #f4f4f4;
	border-top: 1px solid #ddd;
	height: 40px;
	margin-top: -1px;
	overflow: hidden;
	text-align: center;
}
#float_left li .name{
	background: #fff;
	color: #222;
	display: none;
	font: 12px/13px "microsoft yahei";
	height: 33px;
	padding-top: 7px;
	width: 30px;

}
#float_left li a.icon{
	color: #b8b8b8;
	font-size: 20px;
	line-height: 40px;
	width:30px;
}

#float_left li a{
	display: block;
	text-decoration: none;
}
/*左侧导航结束*/

</style>