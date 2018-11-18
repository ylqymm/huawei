let singlton=(function(){
	class BigMirror{
		constructor(obj){
			this.mirrorDom=null;
			this.showDom=null;
			this.initDate(obj);
		}
		initDate(obj){
			let defaultObj={
				bigBoxDom:null,
				//图片的宽、高
				bigBoxWidth:0,
				bigBoxHeight:0,
				bigImg:"",
				//放大镜的宽高
				width:100,
				height:100,
				left:0,
				top:0,
				backgroundColor:"pink",
				opacity:0.5,
				multiple:4
			}
			for(let key in defaultObj){
				obj[key]&&(defaultObj[key]=obj[key]);
			}
			for(let key in defaultObj){
				this[key]=defaultObj[key];
			}
		}
		createUI(){
			this.mirrorDom=document.createElement("div");
			this.showDom=document.createElement("div");
		}
		updateUI(){
			this.bigBoxDom.style.position="relative";
			this.mirrorDom.style.cssText="position:absolute;left:0px;top:0px";
			this.mirrorDom.style.width=this.width+"px";
			this.mirrorDom.style.height=this.height+"px";
			this.mirrorDom.style.opacity=this.opacity;
			this.mirrorDom.style.cursor="move";
			this.mirrorDom.style.backgroundColor=this.backgroundColor;
			//图片放大效果
			this.showDom.style.cssText="position:absolute";
			this.showDom.style.width=this.width*this.multiple+"px";
			this.showDom.style.zIndex="10";
			this.showDom.style.height=this.height*this.multiple+"px";
			this.showDom.style.left=this.bigBoxWidth+15+"px";
			this.showDom.style.top="0px";
			this.showDom.style.backgroundPosition="0px 0px";
			this.showDom.style.backgroundImage="url("+this.bigImg+")";
			this.showDom.style.backgroundSize=this.bigBoxWidth*this.multiple+"px "+this.bigBoxHeight*this.multiple+"px";
			//"px " 注意此处px后的空格
			this.bigBoxDom.appendChild(this.mirrorDom);
			this.bigBoxDom.appendChild(this.showDom);
		}
		move(event){
			let ev=event || window.event;
			//数据
			instance.left=ev.pageX-instance.bigBoxDom.offsetLeft-instance.width/2;
			instance.top=ev.pageY-instance.bigBoxDom.offsetTop-instance.height/2;
			//边界
			if(instance.left<0){
				instance.left=0;
			}else if(instance.left>instance.bigBoxWidth-instance.width){
				instance.left=instance.bigBoxWidth-instance.width;
			}
			if(instance.top<0){
				instance.top=0;
			}else if(instance.top>instance.bigBoxHeight-instance.height){
				instance.top=instance.bigBoxHeight-instance.height;
			}
			//外观
			instance.mirrorDom.style.left=instance.left+"px";
			instance.mirrorDom.style.top=instance.top+"px";
			instance.showDom.style.backgroundPosition=(-1*instance.left*instance.multiple)+"px" +" "+(-1*instance.top*instance.multiple)+"px";
		}
		addEvent(){
			this.bigBoxDom.removeEventListener("mousemove",this.move,false);
			this.bigBoxDom.addEventListener("mousemove",this.move,false);
			this.bigBoxDom.onmouseleave=()=>{
				this.mirrorDom.style.display="none";
				this.showDom.style.display="none";
			}
		}
	}
	let instance;
	return{
		getInstance:function(obj){
			if(!instance){
				instance=new BigMirror(obj);
				instance.createUI();
				instance.updateUI();
				instance.addEvent();
			}else{
				instance.initDate(obj);
				instance.updateUI();
				instance.addEvent();
			}
			return instance;
		}
		
	}
	
})();
