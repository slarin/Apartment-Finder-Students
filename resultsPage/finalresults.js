// JavaScript Document
var slideIndex= 0;
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
}	