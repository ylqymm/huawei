// function $(str){
// 	if(str.charAt(0)=="#"){
// 		return document.getElementById(str.substring(1));
// 	}else if(str.charAt(0)=="."){
// 		return document.getElementsByClassName(str.substring(1));
// 	}else{
// 		return document.getElementsByTagName(str);
// 	}
// }
//1.运动函数
function moveObj05(domObj, attr, endValue, timeLong) {
	let currValue = parseFloat(getStyle(domObj, attr)); //parseFloat(domObj.style[attr]);
	let direction = endValue > currValue ? 1 : -1;
	let timeSpace = 16;
	let step = Math.abs(endValue - currValue) / timeLong * timeSpace; //  路程/时间表示的是一毫秒走多少像素*16；

	let myTimer = setInterval(function () {
		//1、改变数据
		currValue = currValue + direction * step;
		//2、处理边界
		if (Math.abs(currValue - endValue) <= step) {
			currValue = endValue;
			clearInterval(myTimer);
		}
		//3、改变外观
		let temp = currValue;
		if (attr != "opacity") {
			temp = temp + "px";
		}
		domObj.style[attr] = temp;
	}, timeSpace);
}
//2、针对，内部和外部的样式如何获取？
//  1)、针对IE，用currentStyle
//  2)、针对其它主流浏览器，用window.getComputedStyle(dom对象)获取到了所有的样式属性
//功能：获取某个DOM元素的样式属性
function getStyle(domObj, attr) {
	if (domObj.currentStyle) {
		//domObj.currentStyle.attr;//这是不对的，因为并没有名字为attr的属性
		return domObj.currentStyle[attr]; //如果对象的属性名是变量的方式表示，就只能用方括号。
	} else {
		return window.getComputedStyle(domObj)[attr];
	}
}

//项目中有哪些类：轮播图，

function Slider(
	boxDomObj, width, height, imgs,
	doudouSize, doudouColor, doudouHighColor,
	isCircle, direction, timeSpace) {
	this.boxDomObj = boxDomObj; //轮播图的容器
	this.imgDoms = []; //存储所有的img标签,DOM对象
	this.liDoms = []; //存储所有的li标签,DOM对象
	this.width = width;
	this.height = height;
	this.imgs = imgs; //图片数组
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor; //高亮颜色
	this.isCircle = isCircle;
	this.direction = direction; //左还是右
	this.timeSpace = timeSpace; //每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	this.createUI();
	this.addEvent();
	this.changeImg();
}

Slider.prototype.createUI = function () {
	//1、创建所有的图片
	for (let i = 0; i < this.imgs.length; i++) {
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		imgDom.style.width = "100%";
		imgDom.style.height = "100%";
		if (i == 0) {
			imgDom.style.left = "0px";
		} else {
			imgDom.style.left = this.width + "px";
		}
		this.boxDomObj.appendChild(imgDom);
		this.imgDoms.push(imgDom); //把创建的图片标签放入数组中
	}
	//2、创建所有的豆豆
	//1)、豆豆的容器
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;right:50px;bottom:10px;z-index:6;";
	this.boxDomObj.appendChild(ulDom);
	//2)、豆豆
	for (let i = 0; i < this.imgs.length; i++) {
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:20px;border:1px solid #ccc;";
		liDom.style.width = this.doudouSize + "px";
		liDom.style.height = this.doudouSize + "px";
		if (i == 0) {
			liDom.style.backgroundColor = this.doudouHighColor;
		} else {
			liDom.style.backgroundColor = this.doudouColor;
		}
		if (this.isCircle) {
			liDom.style.borderRadius = "50%";
		}
		ulDom.appendChild(liDom);
		this.liDoms.push(liDom);
	}
}

Slider.prototype.showImg = function (inOrd, outOrd) {

	if (inOrd == outOrd) {
		return;
	}

	//1)、滑入滑出前的准备工作
	this.imgDoms[inOrd].style.left = this.width + "px";

	//2）、滑入滑出效果
	moveObj05(this.imgDoms[inOrd], "left", 0, 300);
	moveObj05(this.imgDoms[outOrd], "left", -1 * this.width, 300);
}


Slider.prototype.showLi = function () {
	//    B、改豆豆		
	for (let i = 0; i < this.liDoms.length; i++) {
		this.liDoms[i].style.backgroundColor = this.doudouColor;
	}
	this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
}

//1、自动播放图片
Slider.prototype.changeImg = function () {

	this.myTimer = setInterval(() => {
		//1）、数据：改变图片的当前序号（加加），并考虑边界
		//currOrd = ++currOrd>4?0:currOrd;
		let outOrd = this.currOrd;
		this.currOrd++;
		if (this.currOrd > this.imgs.length - 1) {
			this.currOrd = 0;
		}

		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd, outOrd);
		//B、改豆豆
		this.showLi();

	}, this.timeSpace);
}

//2、停止播放
Slider.prototype.stopChange = function () {
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider.prototype.goImg = function (transOrd) { //1
	//1）、数据：把transOrd赋给当前图片序号
	let outOrd = this.currOrd;
	this.currOrd = transOrd;

	//2）、外观：
	//A、改图片
	this.showImg(this.currOrd, outOrd);
	//B、改豆豆
	this.showLi();
}

Slider.prototype.addEvent = function () {
	let obj = this; //this是Slider的对象
	this.boxDomObj.onmouseover = function () {
		obj.stopChange();
	}
	this.boxDomObj.onmouseout = function () {
		obj.changeImg();
	}

	for (let i = 0; i < this.liDoms.length; i++) {
		this.liDoms[i].onclick = () => {
			this.goImg(i);
		}
	}
}

//菜单部分
var lis = $(".nav_left")[0].firstElementChild.children;
var hide = $(".nav_right")[0].children;
for (let i = 0; i < lis.length; i++) {
	// lis[i].index=i;
	lis[i].onmouseenter = function () {
		for (let j = 0; j < lis.length; j++) {
			hide[j].style.display = "none";
			lis[j].className = "";
			$(".nav_right")[0].style.display = "block";
		}
		this.className = "fix";
		hide[i].style.display = "block";
	}
	$(".containor")[0].onmouseleave = function () {
		for (let j = 0, len = lis.length; j < len; j++) {
			lis[j].className = "";
		}
		$(".nav_right")[0].style.display = "none";
	}
}
//文字滚动
//整体思路：先复制一份ul，设置定时器，修改ul的margin-top值
var ul = document.getElementById("box").firstElementChild;
ul.innerHTML += ul.innerHTML; //先复制一份ul
var step = 0; //定义步长
var index = 0;

function FontScroll() {
	step = 0; //每次都是从0-38
	setTimeout(function move() { //文字是从下往上的，所以margin-top是负的，每次都递减
		//每次都递减0.5
		step -= 0.5;
		//修改margin-top的值
		ul.style.marginTop = -38 * index + step + "px";
		if (step > -38) { //若步长step比-30大的话，说明在ul里面，给他加延迟动画慢慢出现
			setTimeout(move, 15);
		} else {
			index++; //第一个完成后第二个开始，依次累加
			if (index > ul.children.length - 1) { //若下标大于最后一个元素时让其下标为0
				index = 0;
			}
			FontScroll();
		}
	}, 2000);
}


//轮播图(淡入淡出)
//淡入淡出：两张图片的淡入淡出
function fadeInOut(inDomObj, outDomObj, timeLong) {
	let endValue = 1;
	let currValue = 0;
	let direction = 1;
	let timeSpace = 16;
	let step = Math.abs(endValue - currValue) / timeLong * timeSpace; //  路程/时间表示的是一毫秒走多少像素*16；

	let myTimer = setInterval(function () {
		//1、改变数据
		currValue = currValue + direction * step;
		//2、处理边界
		if (Math.abs(currValue - endValue) <= step) {
			currValue = endValue;
			clearInterval(myTimer);
		}
		//3、改变外观
		inDomObj.style.opacity = currValue;
		outDomObj.style.opacity = 1 - currValue;
	}, timeSpace);
}

let temp = null;
let currOrd = 0;

function init() {
	let imgDoms = $(".article3")[0].getElementsByTagName("img");
	$('.article3')[0].lastElementChild.style.zIndex = 2;
	for (let i = 0; i < imgDoms.length; i++) {
		imgDoms[i].style.zIndex = 0;
	}
	imgDoms[0].style.zIndex = 1;
	liDoms = $('.article3')[0].lastElementChild.children;
	liDoms[0].style.background = 'rgba(128,125,125,0.8)';
}

function showImg(inOrd, outOrd) {
	if (inOrd == outOrd) {
		return;
	}
	let imgDoms = $(".article3")[0].getElementsByTagName("img");
	//淡入淡出前的准备
	imgDoms[inOrd].opacity = 0;
	imgDoms[outOrd].opacity = 1;
	fadeInOut(imgDoms[inOrd], imgDoms[outOrd], 500);
}

function Lis() {
	let liDoms = $('.article3')[0].lastElementChild.children;
	for (let i = 0; i < liDoms.length; i++) {
		liDoms[i].style.background = '#ccc';
	}
	liDoms[currOrd].style.background = 'rgba(128,125,125,0.8)';
}

function changeImg() {
	temp = setInterval(function () {
		let outOrd = currOrd;
		currOrd++;
		if (currOrd > 5) {
			currOrd = 0;
		}
		showImg(currOrd, outOrd);
		Lis();
	}, 1500);
}

function stopImg() {
	window.clearInterval(temp);
}

function goImg(transOrd) {
	let outOrd = currOrd;
	currOrd = transOrd;
	if (currOrd > 5) {
		currOrd = 0;
	}
	showImg(currOrd, outOrd);
	Lis();
}


window.onload = function () {
	// let width1 = document.documentElement.clientWith || document.body.clientWith; 
	let s1 = new Slider($(".banner")[0], 1920, 450, ["img/index/banner1.jpg", "img/index/banner2.jpg",
			"img/index/banner3.jpg", "img/index/banner4.jpg", "img/index/banner5.png", "img/index/banner6.jpg", "img/index/banner7.jpg", "img/index/banner8.jpg"
		],
		12, "", "white", true, -1, 1500);

	//文字滚动
	FontScroll();

	//搜索框


	//轮播图(淡入淡出)
	init();
	changeImg();
	$('.article3')[0].onmouseover = stopImg;
	$('.article3')[0].onmouseout = changeImg;
	let liDoms = $('.article3')[0].lastElementChild.children;
	for (let i = 0; i < liDoms.length; i++) {
		liDoms[i].setAttribute('index', i);
		liDoms[i].onclick = function () {
			let index = liDoms[i].getAttribute('index');
			goImg(index);
		}
	}




}