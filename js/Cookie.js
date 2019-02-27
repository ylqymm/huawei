//设置Cookie
function setCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	document.cookie = key + "=" + value +";expires=" + d.toGMTString();
}

//获取Cookie
function getCookie(key){
	var str = document.cookie;
	//console.log(str)
	var arr = str.split(';');
	// console.log(arr)
	for(var i in arr){
		if(arr[i].indexOf(key) != -1){

			 var pattern=/\s+/gi;
			 let coo=arr[i].replace(pattern,'');
			 return coo.substring(key.length+1);
			//console.log(arr[i].substring((key+'=').length+1))
			//return arr[i].substring((key+'=').length);
		}
	}
	return null;
}

//删除Cookie
function delCookie(key){
	setCookie(key,'',-1);
}