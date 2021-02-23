var myVideo=document.getElementById("video2");
var videoList=['IMG_1116.mov', 'IMG_1110.mov','IMG_1117.mov','IMG_1115.mov','IMG_1109.mov','IMG_1125.mov','IMG_1123.mov','IMG_1131.mov'];
var index2 = videoList.indexOf(window.currentVideoName);

//Next button
function nextButton2(){
myVideo.pause();
myVideo.currentTime=0;
index2 = index2 + 1;
	if(index2==videoList.length){
		index2 = 0;
	}
	else if(index2==0){
		index2 = index2 + 1;
	}
	myVideo.src = 'img/'+videoList[index2];
	window.currentVideoName=videoList[index2];
	myVideo.play();
}

//Previous button
function previousButton2(){
myVideo.pause();
myVideo.currentTime=0;
index2 = index2 - 1;
	if(index2 < 0){
		index2 = videoList.length - 1;
	}
	myVideo.src ='img/'+videoList[index2];
	window.currentVideoName=videoList[index2];
	myVideo.play();
}
// JavaScript Document