<?php
	header("Content-Type:text/html;charset=utf-8");
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("huawei",$conn)){
		die("数据库选择失败".mysql_error());
	}
	//3）、传输数据（过桥）
	$sqlstr = "select * from goodslist order by goodsId";
	$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
	if(!$result){
		die("获取数据失败".mysql_error());
	}
	//查询列数
	 $query_cols = mysql_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysql_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="[";
	
	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	while($query_row){
		$str = $str.'{ "goodsId":"'.$query_row[0].'","goodsName":"'.$query_row[1].'"
		,"goodsType":"'.$query_row[2].'","goodsPrice":"'.$query_row[3].'"
		,"goodsCount":"'.$query_row[4].'","goodsDesc":"'.$query_row[5].'"
		,"goodsImg":"'.$query_row[6].'","beiyong1":"'.$query_row[7].'"
		,"beiyong2":"'.$query_row[8].'","beiyong3":"'.$query_row[9].'"
		,"beiyong4":"'.$query_row[10].'","beiyong5":"'.$query_row[11].'"
		,"beiyong6":"'.$query_row[12].'","beiyong7":"'.$query_row[13].'"
		,"beiyong8":"'.$query_row[14].'","beiyong9":"'.$query_row[15].'"
		,"beiyong10":"'.$query_row[16].'","beiyong11":"'.$query_row[17].'"
		,"beiyong12":"'.$query_row[18].'","beiyong13":"'.$query_row[19].'"
		,"beiyong14":"'.$query_row[20].'","beiyong15":"'.$query_row[21].'"
		,"beiyong16":"'.$query_row[22].'","beiyong17":"'.$query_row[23].'"
		,"beiyong18":"'.$query_row[24].'","beiyong19":"'.$query_row[25].'"
		,"beiyong20":"'.$query_row[26].'","beiyong21":"'.$query_row[27].'"
		,"beiyong22":"'.$query_row[28].'","beiyong23":"'.$query_row[29].'"
		,"beiyong24":"'.$query_row[30].'","beiyong25":"'.$query_row[31].'"
		,"beiyong26":"'.$query_row[32].'","beiyong27":"'.$query_row[33].'"
		,"beiyong28":"'.$query_row[34].'","beiyong29":"'.$query_row[35].'"
		,"beiyong30":"'.$query_row[36].'"
		}';
		
		$query_row = mysql_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>