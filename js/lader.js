var fl = document.getElementsByClassName('fl');
var lift = document.getElementsByClassName("lift");
var li = lift[0].getElementsByTagName('li');
var span = lift[0].getElementsByTagName("span");
var picture=document.getElementsByClassName("picture");
window.addEventListener("scroll", check, true);

function check() {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    var top = fl[0].offsetTop;  //获取第一个楼梯对应内容距离顶部的距离
    var pictureHeight=picture[0].offsetTop;
    if (scrollTop >= top) {  //判断滚动的距离与第一个楼梯对应内容距离顶部的距离的大小
        lift[0].parentNode.style.display = "block";
    }else{
        lift[0].parentNode.style.display = "none";
    }
    if(scrollTop>=pictureHeight){
        lift[0].parentNode.style.display = "none";
    }
    for (i in fl) {  //循环楼梯内容
        if (fl[i].offsetTop+600> scrollTop) {  //楼梯内容自身的高与滚动的高
            that = span[i];
            for (var j = 0; j < span.length; j++) {
                if (span[j] != that) {
                    span[j].style.opacity = 0;
                }
            }
            span[i].style.opacity = 1;
            span[i].style.color="red";
            return false;
        }
    }
}

for (var i = 0; i < li.length; i++) { //循环楼梯，分别添加滑过、点击、离开事件
    (function (index) {
        li[index].addEventListener("mouseover", function () {
            span[i].style.opacity = 1;
            span[i].style.color="red";
        }, false)
    })(i)
}
for (var i = 0; i < li.length; i++) {
    (function (i) {
        li[i].addEventListener("click", function () {
            var index = i;
            span[i].style.opacity = 1;
            var top = fl[0].offsetTop;
            if (fl[i].offsetTop == fl[index].offsetTop) {
                $("html,body").stop().animate({
                    "scrollTop": fl[i].offsetTop
                }, 1000, function () {
                    window.addEventListener("scroll", check, true);
                });
            }
        }, false)
    })(i)
}

for (var i = 0; i < li.length; i++) {
    (function (index) {
        li[index].addEventListener("mouseout", function () {
            span[index].style.opacity = 0;
        }, false)
    })(i)
}