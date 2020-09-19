<template>
  <div>
    
		<div id="right_float">
			<div class="top">
				<p class="top_top">
					<a class="geren" href="####"></a>
				</p>
				<p class="gwc">
					<a class="gouwuche" href="####"></a>
					<span class="tip" href="####">购物车</span>
					<span class="rows">0</span>
				</p>
			</div>
			<div class="center">

				<p class="yidong">
					<a class="chongzhi" href="####"></a>
					<a class="l_r1 l_rw" href="####">充值</a>
				</p>
				<p class="yidong">
					<a class="zuji yidong" href="####"></a>
					<a class="l_r2 l_rw" href="####">足迹</a>
				</p>
			</div>
			<div class="down">
				<p class="yidong">
					<a class="erwei" href="####"></a>
					<a class="l_r3 l_rw3" href="####"><img src="img/ewm.png" /></a>
				</p>
				<p class="yidong">
					<a class="jiaoliu" href="####"></a>
					<a class="l_r4 l_rw2" href="####">在线咨询</a>
				</p>
				<p class="yidong">
					<a class="liuyan" href="####"></a>
					<a class="l_r5 l_rw2" href="####">调查问卷</a>
				</p>
				<p class="yidong">
					<a class="fanhui" href="#"></a>
					<a class="l_r6 l_rw2" href="#">返回顶部</a>
				</p>
			</div>
		</div>
		<div id="left_float"></div>

		
  </div>
</template>
<script>

</script>
<style scoped>
/*右边固定区域*/
#right_float{
	height: 100%;
	width: 35px;
	position: fixed;
	/*overflow: hidden;*/
	right: 0;
	top: 0;
	background: #383838;
}
#right_float p{
	display:block;
	float: left;
	width:35px;
  
}
#right_float .top_top{
	height: 30px;
}
#right_float p:hover{
	background: #ffaa01;
}
#right_float p a{
	width: 20px;
	height: 20px;
	display: block;
	margin: 5px;
	/*padding: 3px;*/
	overflow: hidden;
	margin-left: 7px;
}
#right_float a.geren{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px 0; */
	margin-bottom: 10px;
}
#right_float p:hover a.geren{
	background-position: 0px 0px;
}
#right_float a.gouwuche{
	
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -28px; */
}
#right_float a.chongzhi{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -60px; */
}
#right_float p:hover a.chongzhi{
	background-position: 0px -60px;
}
#right_float a.zuji{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -117px; */
}
#right_float p:hover a.zuji{
	background-position: 0px -117px;
}
#right_float a.erwei{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -149px; */
}
#right_float p:hover a.erwei{
	background-position: 0px -149px;
}
#right_float a.jiaoliu{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -181px; */
}
#right_float p:hover a.jiaoliu{
	background-position: 0px -181px;
}
#right_float a.liuyan{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -210px; */
}
#right_float p:hover a.liuyan{
	background-position: 0px -210px;
}
#right_float a.fanhui{
	/* background: url('@/assets/img/bg_right.png') no-repeat -35px -240px; */
}
#right_float p:hover a.fanhui{
	background-position: 0px -240px;
}


.gwc{
	border-top: 1px #4D4D4D solid;
	border-bottom: 1px #4D4D4D solid;
	height: 120px;
}
.gwc .tip{
	display: block;
	color: #FFFFFF;
	margin: 0 auto;
	width: 20px;
	text-align: center;
	height: 54px;
	font-family: "微软雅黑";
}
#right_float .top{
    position: absolute;
    top: 125px;
}
#right_float .center{
	position: absolute;
	top: 380px;
}	
#right_float .down{
	position: absolute;
	top: 540px;
} 
#right_float .rows{
	background: #d00;
	border-radius: 5px;
	display: inline-block;
	height: 15px;
	line-height: 15px;
	padding: 0 2px;
	min-width: 17px;
	text-align: center;
	color: #fff;
	margin-left:7px;
}
/*右边固定区域结束*/

/*浮动导航*/
.ScrollNav{
	position:fixed; 
    left:0px; 
    top:0px;
    /*display: block;*/
    z-index: 9999;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}
#layout_float_nav{
	width: 100%;
	height: 52px;
	background: rgba(255,255,255,0.93);
    
	/*position: fixed;*/
	/*top: 0;*/
}
#float_nav{
	width: 1190px;
	margin: 0 auto;
	position: relative;
}
#layout_float_nav .sort_index_down{
	display: none;
	
}
#layout_float_nav .ng_search{
	margin-left: 330px;
}
#layout_float_nav #searchKeywords{
	width: 348px;
}
#layout_float_nav .login{
	/*float: left;*/
	height: 35px;
	line-height: 33px;
	overflow: hidden;
	padding: 0 10px;
	position: absolute;
	top: 7px;
	left: 995px;
}
#layout_float_nav .login:hover{
	background: #eee;
}
#layout_float_nav .che{
	display: block;
	float: left;
	line-height: 33px;
	overflow: hidden;
	padding: 0 10px;
}
#layout_float_nav .che em{
	display: inline-block;
	font-size: 18px;
	line-height: 30px;
	margin-right: 7px;
	width: 16px;
}
#layout_float_nav .che span{
	font-size: 14px;
	font-family: "微软雅黑";
	line-height: 30px;
}
#layout_float_nav a .yuan {
    background: #f7a705 none repeat scroll 0 0;
    border-radius: 8px;
    color: #ffffff;
    display: inline-block;
    height: 16px;
    left: -2px;
    padding: 0 4px;
    position: relative;
    text-align: center;
    top: 2px;
    width: 8px;
}
#layout_float_nav a .yuan .num {
    font-size: 12px;
    left: 0.5px;
    line-height: 15px;
    position: relative;
    top: -8px;
}
#layout_float_nav .sort_index{
	position: absolute;
	top: 7px;
	left: 0px;
}
#layout_float_nav .ng_search{
	margin-left: 0;
	position: absolute;
	top: 6px;
	left: 330px;
}
#layout_float_nav .che{
	position: absolute;
	padding: 0;
	top: 6px;
	left: 1095px;
}
#layout_float_nav .search-keyword-box{
	padding-left: 35px;
}
#layout_float_nav .sort_index_top:hover{
	color: #fff;
}


/*浮动导航结束*/

</style>