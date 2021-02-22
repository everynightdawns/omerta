var myImage=document.getElementById("image1");
var imageList=['File_004.jpg', 'File_005.jpg','File_000.jpg','File_001.jpg','File_002.jpg','File_003.jpg','File_006.jpg','File_007.jpg','IMG_5672.jpg','IMG_5673.jpg'];
var index = imageList.indexOf(window.currentImageName);

//Next button
function nextButton3(){
index = index + 1;
	if(index==imageList.length){
		index = 0;
	}
	else if(index==0){
		index = index + 1;
	}
	myImage.src = 'img/'+imageList[index];
	window.currentImageName=imageList[index];
}

//Previous button
function previousButton3(){
index = index - 1;
	if(index < 0){
		index = imageList.length - 1;
	}
	myImage.src ='img/'+imageList[index];
	window.currentImageName=imageList[index];
}
// JavaScript Document