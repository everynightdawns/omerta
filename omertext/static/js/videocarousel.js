var myVideo=document.getElementById("video1");
var videoList=['IMG_1088.mov', 'IMG_1095.mov','IMG_1091.mov','IMG_1098.mov','IMG_1092.mov','IMG_1090.mov','IMG_1087.mov','IMG_1094.mp4','IMG_1089.mov','IMG_1093.mov','IMG_1096.mov'];
var index = videoList.indexOf(window.currentVideoName);

//Next button
function nextButton(){
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
function previousButton(){
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