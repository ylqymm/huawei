<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$goodsId   = $_REQUEST['goodsId'];
	$goodsName = $_REQUEST['goodsName'];
	$goodsType = $_REQUEST['goodsType'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsCount = $_REQUEST['goodsCount'];
	$goodsDesc = $_REQUEST['goodsDesc'];
	$goodsImg  = $_REQUEST['goodsImg'];
	$beiyong1  = $_REQUEST['beiyong1'];
	$beiyong2  = $_REQUEST['beiyong2'];
	$beiyong3  = $_REQUEST['beiyong3'];
	$beiyong4  = $_REQUEST['beiyong4'];
	$beiyong5  = $_REQUEST['beiyong5'];
	$beiyong6  = $_REQUEST['beiyong6'];
	$beiyong7  = $_REQUEST['beiyong7'];
	$beiyong8  = $_REQUEST['beiyong8'];
	$beiyong9  = $_REQUEST['beiyong9'];
	$beiyong10 = $_REQUEST['beiyong10'];
	$beiyong11 = $_REQUEST['beiyong11'];
	$beiyong12 = $_REQUEST['beiyong12'];
	$beiyong13 = $_REQUEST['beiyong13'];
	$beiyong14 = $_REQUEST['beiyong14'];
	$beiyong15 = $_REQUEST['beiyong15'];
	$beiyong16 = $_REQUEST['beiyong16'];
	$beiyong17 = $_REQUEST['beiyong17'];
	$beiyong18 = $_REQUEST['beiyong18'];
	$beiyong19 = $_REQUEST['beiyong19'];
	$beiyong20 = $_REQUEST['beiyong20'];
	$beiyong21 = $_REQUEST['beiyong21'];
	$beiyong22 = $_REQUEST['beiyong22'];
	$beiyong23 = $_REQUEST['beiyong23'];
	$beiyong24 = $_REQUEST['beiyong24'];
	$beiyong25 = $_REQUEST['beiyong25'];
	$beiyong26 = $_REQUEST['beiyong26'];
	$beiyong27 = $_REQUEST['beiyong27'];
	$beiyong28 = $_REQUEST['beiyong28'];
	$beiyong29 = $_REQUEST['beiyong29'];
	$beiyong30 = $_REQUEST['beiyong30'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败：".mysql_error());
	}
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("huawei",$conn)){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	$sqlstr = "insert into goodslist values('".$goodsId."','".$goodsName."','".$goodsType."'
	,'".$goodsPrice."','".$goodsCount."','".$goodsDesc."','".$goodsImg."'
	,'".$beiyong1."','".$beiyong2."','".$beiyong3."','".$beiyong4."'
	,'".$beiyong5."','".$beiyong6."','".$beiyong7."','".$beiyong8."'
	,'".$beiyong9."','".$beiyong10."','".$beiyong11."','".$beiyong12."'
	,'".$beiyong13."','".$beiyong14."','".$beiyong15."','".$beiyong16."'
	,'".$beiyong17."','".$beiyong18."','".$beiyong19."','".$beiyong20."'
	,'".$beiyong21."','".$beiyong22."','".$beiyong23."','".$beiyong24."'
	,'".$beiyong25."','".$beiyong26."','".$beiyong27."','".$beiyong28."'
	,'".$beiyong29."','".$beiyong30."')";

	$count = mysql_query($sqlstr,$conn);
	if(!$count){
		die('插入失败！'.mysql_error());
	}
	//4）、关闭连接（拆桥）
	mysql_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	if($count>0){
	    echo "保存成功";
	}
	
?>