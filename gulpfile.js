
var gulp = require("gulp");//require:相当于<script src="gulp.js"></script>
var sass=require("gulp-sass");
//var concat=require("gulp-concat");
//var connect=require("gulp-connect");
//var uglify=require("gulp-uglify");
//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei"));
});
gulp.task("copy-img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei/img"));
});

gulp.task("copy-css",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei/css"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei/js"));
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei/php"));
});

//sass的编译
gulp.task("sass",function(){
	gulp.src("sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\huawei\\css"));
});
gulp.task("css",function(){
	gulp.src("sass/**/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("F:\\huawei\\css"));
});
gulp.task("build",["copy-html","copy-img","copy-css","copy-js","sass","copy-php","css"],function(){
	console.log("ok");
});

//监听
gulp.task("watchall",function(){
	//一旦index.html的内容发生改变，那么就立即执行任务copyHtml;
	gulp.watch("**/*.html",["copy-html"]);
	gulp.watch("img/**/*.{jpg,png,gif}",["copy-img"]);  //注意：图片格式用大括号括起来，中间用逗号隔开，不能有空格
	gulp.watch("css/**/*.css",["copy-css"]);
	gulp.watch("js/**/*.js",["copy-js"]);
	gulp.watch("sass/**/*.scss",["sass"]);
	gulp.watch("php**/*.php",["copy-php"]);
	gulp.watch("sass/**/*.scss",["css"]);
});

