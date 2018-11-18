
	$(function(){
		$(".addCls").each(function(){
			$(this).click(function(){
				//1.改数量
				var count=parseFloat($(this).parents(".price2").find(".money").val());
				count++;
				$(this).parents(".price2").find(".money").val(count);
				//2.改单价
				var price=parseFloat($(this).parents(".shopRight").find(".price1 p").html());
				//console.log(price);
				var money=(price*count).toFixed(2);
				$(this).parents(".shopRight").find(".price3 .prices").html(money);
				//3.改总额
				totalMoney();
			});
		});
	
		
		$(".reduceCls").each(function(){
			$(this).click(function(){
				//1.改数量
				var count=parseFloat($(this).parents(".price2").find(".money").val());
				count--;
				if(count<0){
					return;
				}
				$(this).parents(".price2").find(".money").val(count);
				//2.改单价
				var price=parseFloat($(this).parents(".shopRight").find(".price1 p").html());
				var money=(price*count).toFixed(2);
				$(this).parents(".shopRight").find(".price3 .prices").html(money);
				//3.改总额
				totalMoney();
			});
		});
		
		//删除函数
	// $(".removeId").each(function(i){
	// 	$(this).click(function(){
	// 		let bb=$(this).parents(".shopping_cen_cen2");
	// 		$(".delete").css({"display":"block"});
	// 		$(".yes").click(function(){
	// 			bb.remove();
	// 		});
	// 		$(".no").click(function(){
	// 			$(".delete").css({"display":"none"});
	// 		});
	// 		//当点击删除时，调用合计函数，重新判断当前合计的价格
	// 		totalMoney();
	// 		countAll();
	// 		//全部删除加入的商品全都删除并显示购物车为空
	// 		let clear=$(".include").height();
	// 		console.log(clear)
	// 		if(clear==236){
	// 			$(".include").remove();
	// 			$(".empty").css({"display":"block"});
	// 		}
	// 	});
	// 	$(".delete").css({"display":"none"});
	// });
	$(".removeId").each(function(){  //循环每个删除按钮
		$(this).click(function(){    //点击当前的删除按钮时让当前对应的删除框弹出
			$(this).next().css("display","block");
			$(this).next().find(".yes").click(function(){  //点击“是”时删除整行
				$(this).parents(".shopping_cen_cen2").remove();
				//当点击删除时，调用合计函数和数量函数，重新判断当前合计的价格和数量
				totalMoney();
				countAll();
			});
			$(this).next().find(".no").click(function(){  //点击“否”时让弹框隐藏(不删除)
				$(this).parents(".delete").css({"display":"none"});
			});
			//全部删除加入的商品全都删除并显示购物车为空
			let clear=$(".include").height();
			// console.log(clear)
			if(clear==389){
				$(".include").remove();
				$(".empty").css({"display":"block"});
			}
		});
	})
	//总计
	function totalMoney(){
		var sum=0;
		$(".prices").each(function (){
			if(($(this).parents(".shopping_cen_cen2").find(".check")).prop("checked")) {
				//判断复选框有没有选中
				sum += parseFloat($(this).html());
			}
			$("#total").html(sum.toFixed(2));
		});
	}
	//选择的商品数量
	function countAll(){
		let counts=0;
		for(let i=0;i<$(".check").length;i++){
			if($(".check")[i].checked==true){
				counts +=parseInt($(".money")[i].value);
			}
		}
		$("#select1")[0].innerHTML=counts;
	}
	// 全选插件(引入插件allCheck.js)
	$(".checkOnly").bindCheck($(".shoppingAll :checkbox"),$(""));
	$(".checkOnly").click(function () {
		totalMoney();
		countAll();
	});
	let num = 0; //定义一个变量记录单选复选框
	$(".check").click(function(){
		totalMoney();
		countAll();

		//引用插件不合适时用下面的代码

		// if($(this).prop("checked")){ //若单选复选框选中时让num++，否则num--
		// 	num++;
		// }else{
		// 	num--;
		// }
		// if(num==$(".check").length){ //若num与单选复选框的长度相等时选中全选复选框
		// 	$(".checkOnly").prop("checked",true);
		// 	$(".checkOnly1").prop("checked",true);
		// }
	});
});
	