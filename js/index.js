window.onload=function(){
	var banners=document.getElementById("banner-img").getElementsByTagName("a");
	var spans=document.getElementById("icon").getElementsByTagName("span");
	var banner_box=document.getElementById("banner");
	var button_prev=document.getElementById("button_prev");
	var button_next=document.getElementById("button_next");
	var index=0;
	function changebanner(){
		for(i=0;i<banners.length;i++){
			banners[i].style.display="none";
			banners[i].style.opacity="0";
			spans[i].style.cssText='background-color:rgb(117,117,117,.8);border-color:hsla(0,0%,100%,.3);' 
		}
		banners[index].style.display="block";
		banners[index].style.opacity="1";
		spans[index].style.cssText='background-color:hsla(0,0%,100%,.8);border-color:rgb(117,117,117,.4);' 
	}
	timer=null;
	timer=setInterval(function(){
		index++;
		if(index>5){
			index=0;
		}
		changebanner();
	},2000)
	banner_box.onmouseover=function(){
		if(timer){
			clearInterval(timer);
		}
	}
	banner_box.onmouseout=function(){
			timer=setInterval(function(){
				index++;
				if(index>5){
					index=0;
				}
				changebanner();
			},2000)	
	}
	button_prev.onclick=function(){
		index--;
		if(index<0){
			index=5;
		}
		changebanner();
	}
	button_next.onclick=function(){
		index++;
		if(index>5){
			index=0;
		}
		changebanner();
	}
	for(i=0;i<spans.length;i++){
		spans[i].id=i;
		spans[i].onclick=function(){
			index=this.id;
			changebanner();
		}
	}
}