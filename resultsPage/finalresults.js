// JavaScript Document

/*var slideIndex= 0;
var slideIndex2= 0;
carousel();
carousel2();

function carousel(){
	var i;
	var x= document.getElementsByClassName("slider");
	
	for (i = 0; i< x.length; i++){
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length){
		slideIndex= 1;
	}
	x[slideIndex- 1].style.display= "block";
	setTimeout(carousel, 3000);
}

function carousel2(){
	var i;
	var x= document.getElementsByClassName("slider2");
	
	for (i = 0; i< x.length; i++){
		x[i].style.display = "none";
	}
	slideIndex2++;
	if (slideIndex2 > x.length){
		slideIndex= 1;
	}
	x[slideIndex- 1].style.display= "block";
	setTimeout(carousel2, 3400);
}*/	

function pop(e){
	'use strict';
	//e.style.border = 1px solid green;
	var x = e.getAttribute("src");
	var s = e.getAttribute("id");
	//var y = e.getAttribute("id");
	//y.style.border = green;
	if(s==="img1"||s==="img2"||s==="img3"){
	document.getElementById("banner1").src=x;}
	
	else if(s==="img4"||s==="img5"||s==="img6"){
	document.getElementById("banner2").src=x;}
}

function jazz_hands0(){
	'use strict';
	var x=document.getElementById("btn-1");

	var b=document.getElementById("ddmenu1");
	
		if(b.style.display==="none"){
			b.style.display="block";
			x.innerHTML="Close";
		}else{
			b.style.display="none";
			x.innerHTML="More Details";
		}
}
		
function jazz_hands1(){
	'use strict';
	var c=document.getElementById("btn-2");
	
/*jamie*/ var d=document.getElementById("ddmenu2");
		if(d.style.display==="none"){
			d.style.display="block";
			c.innerHTML="Close";
		}else{
			d.style.display="none";
			c.innerHTML="More Details";
		}
}

