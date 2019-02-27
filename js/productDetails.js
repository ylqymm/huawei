$.ajax({
	type:"get",
	url:"php/getGoodsListList.php",
	async:true,
	data:null,
	success:function(data){
		var goods = getCookie("send");
    	 //console.log(goods)
		// if(goodsId!=null){
			var productlist = '';
			for(var i=0;i<data.length;i++){
				
				if(data[i].goodsId == goods){
					productlist+='<div class="acticleAll">\
						<div class="acticleAll_left">\
							<div class="bigBox">\
								<img src='+data[i].goodsImg+'>\
							</div>\
							<div class="all">\
								<ul class="uls">\
									<li><a href="#"><img src='+data[i].beiyong4+'></a></li>\
									<li><a href="#"><img src='+data[i].beiyong5+'></a></li>\
									<li><a href="#"><img src='+data[i].beiyong6+'></a></li>\
									<li><a href="#"><img src='+data[i].beiyong7+'></a></li>\
									<li><a href="#"><img src='+data[i].beiyong8+'></a></li>\
								</ul>\
								<span class="left"></span>\
								<span class="right"></span>\
							</div>\
							<div class="share">\
								<a href="javascript:;" class="shareA">\
									<img src="img/index/xh.png">\
									关注\
								</a>\
								<a href="javascript:;" class="shareA">\
									<img src="img/index/fx.png">\
									分享\
								</a>\
								<a href="javascript:;" class="shareA">\
									<img src="img/index/db.png">\
									对比\
								</a>\
							</div>\
						</div>\
						<!--放大镜结束-->\
						<div class="acticleAll_right">\
							<h2 id="acticleAll_right_title">'+data[i].goodsName+'</h2>\
							<p class="gouInfo">\
								<span id="gouInfo_title">'+data[i].beiyong9+'</span><br>\
								<a href="javascript:;">'+data[i].beiyong10+'</a>\
							</p>\
						<div class="price">\
							<div class="jdj">\
								<span>价格:</span>\
								<i id="price">￥'+data[i].goodsPrice+'</i>\
								<a href="#">￥'+data[i].beiyong11+'</a>\
								<div class="priceRight">\
									<span>累计评价</span>\
									<a href="#">'+data[i].beiyong2+'</a>\
								</div>\
							</div>\
							<div class="cuxiao">\
								<span class="cx">促　　　销:</span>\
								<div class="cuxiaoBox">\
									<p>\
										<i>加购</i>\
										<span>购买1件可优惠换购热销商品 <a href="#">立即换购 &gt;</a></span>\
									</p>\
									<p>\
										<i>限时直降</i>\
										<span>'+data[i].beiyong12+'</span>\
									</p>\
									<p>\
										<i>积分红包</i>\
										<span>现有积分下单双倍抵现*</span>\
									</p>\
									<p>\
										<i>积分翻倍</i>\
										<span>活动赠送翻倍积分，积分可抵现~</span>\
									</p>\
									<span class="zhankai">展开促销 <img src="img/index/xia.png" ></span>\
								</div>\
							</div>\
					</div>\
					<div class="zengzhi">\
						<span class="titSpan">服务说明</span>\
						<a href="#">11月11日全场包邮 | 由华为商城负责发货，并提供售后服务</a>\
					</div>\
					<div class="zengzhi">\
						<span class="titSpan">商品编码</span>\
						<a href="#">2601010014008</a>\
					</div>\
					<div class="section">\
						<p>\
							<span class="sectionTit">选择颜色</span>\
							<a href="#"><img src='+data[i].beiyong13+' />'+data[i].beiyong18+'</a>\
							<a href="#"><img src='+data[i].beiyong14+' />'+data[i].beiyong19+'</a>\
							<a href="#"><img src='+data[i].beiyong15+' />'+data[i].beiyong20+'</a>\
							<a href="#"><img src='+data[i].beiyong16+' />'+data[i].beiyong21+'</a>\
						</p>\
						<p class="list">\
							<span class="sectionTit1">选择版本</span>\
							<a href="#">公开版</a>\
							<a href="#">原厂延保版</a>\
							<a href="#">分期用</a>\
						</p>\
						<p class="list">\
							<span class="sectionTit1">内　　存</span>\
							<a href="#">'+data[i].beiyong23+'</a>\
							<a href="#">'+data[i].beiyong24+'</a>\
						</p>\
						<p class="list">\
							<span class="sectionTit1">购买方式</span>\
							<a href="#">官方标配</a>\
							<a href="#">移动优惠购</a>\
							<a href="#">联通优惠购</a>\
						</p>\
						<p class="list">\
							<span class="sectionTit1">套　　装</span>\
							<a href="#">优惠套装1</a>\
							<a href="#">优惠套装2</a>\
							<a href="#">优惠套装3</a>\
							<a href="#">优惠套装4</a>\
							<a href="#">优惠套装5</a>\
							<a href="#">优惠套装6</a>\
						</p>\
						<p class="list">\
							<span class="sectionTit1">增值保障</span>\
							<a href="#">\
								<img src="img/index/xiu.png"/>\
								换修无忧￥66/月\
								<img src="img/index/listxia.png" />\
							</a>\
							<a href="#">\
								<img src="img/index/ban.png"/>\
								碎片保1年￥399\
								<img src="img/index/listxia.png" />\
							</a>\
							<a href="#">\
								<img src="img/index/bao.png"/>\
								保值保意外￥379\
								<img src="img/index/listxia.png" />\
							</a>\
							<img src="img/index/wenhao.png"/>\
						</p>\
						<p class="list">\
							<span class="sectionTit1">白条分期</span>\
							<a href="#">不分期</a>\
							<a href="#">￥2366.34×3期</a>\
							<a href="#">￥1183.15×6期</a>\
							<a href="#">￥609.37×12期</a>\
							<a href="#">￥331.33×24期</a>\
							<img src="img/index/hui.png"/>\
							<img src="img/index/wenhao.png"/>\
						</p>\
					</div>\
					<div class="shopping">\
						<div class="num">\
							<input type="text" value="1" class="txt1"/>\
							<div class="numRight">\
								<a href="javascript:void(0);" class="adds">+</a>\
								<a href="javascript:void(0);" class="redus">-</a>\
							</div>\
						</div>\
						<div class="join">\
							<a href="shopingCart.html" id="join">加入购物车</a>\
							<a href="shopingCart.html" id="buy">立即下单</a>\
						</div>\
					</div>\
				</div>\
				</div>';
				$(".headerTopCenter").html(productlist);
					// var vipName = data[i].goodsName;
					// var goodsId = data[i].goodsId;
					// $("#join").click(function(){
					// 	var goodsCount = $(".txt1").val();
					// 	//点击加入购物车时,调用ajax,通过php添加到购物车表
					// 	$.ajax({
					// 		type:"get",
					// 		url:"php/addShoppingCart.php",
					// 		async:true,
					// 		data:"vipName="+vipName+"&goodsId="+goodsId+"&goodsCount="+goodsCount,
					// 		success:function(data){
					// 			location.href = "shopingCart.html";
					// 		},
					// 	});
					// });
				}
			}
			bigxiao();
		// };
	},
	dataType:"json",
});

function bigxiao(){
	//放大镜
	$(".uls li").each(function(){
		$(this).hover(function(){
			$(this).css({border:'2px solid #df3033'}).siblings().css({border:'0'});
			var url = $(this).find("img").attr("src");
			$(".bigBox img").attr("src",url);
			$('.bigBox').mouseenter(function(){
				singlton.getInstance({
					bigBoxDom:this,
					bigImg:url,
					bigBoxWidth:420,
					bigBoxHeight:420,
					width:100,
					height:100
				});
			});
		});

	});
	// $('.bigBox').mouseenter(function(){
	// 	singlton.getInstance({
	// 		bigBoxDom:this,
	// 		bigBoxWidth:420,
	// 		bigBoxHeight:420,
	// 		bigImg:"img/product/m1.png",
	// 		width:100,
	// 		height:100
	// 	});
	// });
	//左右箭头
	var directionLeft=1;
	var moveLeft = 0;
	$(".left").click(function(){
		//  console.log(12)
		leftMove();
		changeDirection(-1);
	});
	$(".right").click(function(){
		leftMove();
		changeDirection(1);
	});

	function leftMove() {
		//数据
		moveLeft = moveLeft + directionLeft * 73;
		//边界
		if (directionLeft == -1) {
			if (moveLeft <= -425) {
				moveLeft = -425;
			}
		} else if (directionLeft == 1) {
			if (moveLeft >= 0) {
				moveLeft = 0;
			}
		}
		//改变外观
		$(".uls")[0].style.left = moveLeft + 'px';
		// console.log($(".uls")[0])
	}
	//点击下面的图片，替换背景图片
	// function changeBgImg() {
	// 	for (var i = 0; i < $(".uls")[0].children.length; i++) {
	// 		$('.uls')[0].children[i].onmouseenter = function () {
	// 			$('#box').style.backgroundImage = this.style.backgroundImage;
	// 			$('.showBox')[0].style.backgroundImage = this.style.backgroundImage;
	// 		}
	// 	}
	// }
	function changeDirection(direction) {
		directionLeft = direction;
	}


	//加减
	var adds=document.getElementsByClassName('adds');
	var txt1=document.getElementsByClassName("txt1");
	var redus=document.getElementsByClassName("redus");
	var count=1;
	adds[0].onclick=function(){
		count++;
		txt1[0].value=count;
	}
	redus[0].onclick=function(){
		count--;
		if(count<0){
			count=0;
		}
		txt1[0].value=count;
	}
}