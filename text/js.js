var winW = document.documentElement.clientWidth;
var desW = 640;/*设计稿的宽度*/
//把根元素的字体大小设置成100px就是为了好算,比如量的设计稿里的宽度是188px -->1.88rem
var scale = 640/100;/*缩放的比例*/
document.documentElement.style.fontSize = winW/scale+"px";