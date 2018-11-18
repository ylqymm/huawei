<?php
	header("Content-type:text/html;charset=utf-8");
	//1、接收数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	//2、处理（连接数据库，保存数据）
	//1)、建立连接（搭桥）
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//2）、选择数据库（目的地）
		mysql_select_db("mydb0917",$con);
		//3）、执行SQL数据（运输数据）
		$sqlstr="select * from vip where username='$username'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows>0){				
			//4）、关闭数据库（过河拆桥）
			mysql_close($con);
			echo "-1";//用户名已存在
		}else{
			$sqlstr="insert into vip (username,userpass) values('$username','$userpass')";
			$result = mysql_query($sqlstr,$con);	
			//4）、关闭数据库（过河拆桥）
			mysql_close($con);
			//3、响应
			// echo $result."<br/>";
			if($result>=1){
				echo "1";
				//echo "注册成功！";			
				// header("location:login.html");
				// echo "<script>alert('亲，恭喜您，注册成功！');location.href='login.html'</script>";
				// header("location:login.html");
			}
			else{
				echo "0";
			}			
		}
	}
?>