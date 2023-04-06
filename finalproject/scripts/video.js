var videoSource = new Array();
videoSource[0] = 'video/smoothie1.mp4';
videoSource[1] = 'video/smoothie2.mp4';
videoSource[2] = 'video/smoothie3.mp4';
videoSource[3] = 'video/smoothie4.mp4';
var videoCount = videoSource.length;
var i = 0;
document.getElementById("myVideo").setAttribute("src", videoSource[0]);

function videoPlay(videoNum) {
    document.getElementById("myVideo").setAttribute("src", videoSource[videoNum]);
    document.getElementById("myVideo").load();
    document.getElementById("myVideo").play();
}
document.getElementById('myVideo').addEventListener('ended', myHandler, false);

function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}
