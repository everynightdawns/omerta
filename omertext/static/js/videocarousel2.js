var myVideo=document.getElementById("video2");
var videoList=['IMG_1116.mov', 'IMG_1110.mov','IMG_1117.mov','IMG_1115.mov','IMG_1109.mov','IMG_1125.mov','IMG_1123.mov','IMG_1131.mov'];
var index = videoList.indexOf(window.currentVideoName);

//Next button
function nextButton2(){
myVideo.pause();
myVideo.currentTime=0;
index = index + 1;
	if(index==videoList.length){
		index = 0;
	}
	else if(index==0){
		index = index + 1;
	}
	myVideo.src = 'img/'+videoList[index];
	window.currentVideoName=videoList[index];
	myVideo.play();
}

//Previous button
function previousButton2(){
myVideo.pause();
myVideo.currentTime=0;
index = index - 1;
	if(index < 0){
		index = videoList.length - 1;
	}
	myVideo.src ='img/'+videoList[index];
	window.currentVideoName=videoList[index];
	myVideo.play();
}
// JavaScript Document