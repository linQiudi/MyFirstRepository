
var main=document.getElementById("main");
var oLis=document.querySelectorAll("#main>ul>li");



var desW=640;
var desH=960;
var winW=document.documentElement.clientWidth;
var winH=document.documentElement.clientHeight;
if(winW/winH<desW/desH){
    main.style.webkitTransform="scale("+(winH/desH)+")";///iphone4以上的设备都是按照高来缩放的。
}else{
    main.style.webkitTransform="scale("+(winW/desW)+")";
}

[].forEach.call(oLis,function () {
    var oLi=arguments[0];
    oLi.index=arguments[1];
    oLi.addEventListener("touchstart",start,false);
    oLi.addEventListener("touchmove",move,false);
    oLi.addEventListener("touchend",end,false);
});
setTimeout(function () {
    oLis[0].firstElementChild.id="a0"
},1000);

function start(e) {
    //获取初始触摸点坐标
    this.startY=e.touches[0].pageY;
    this.startX=e.touches[0].pageX;
}
function move(e) {
    this.flag=true;/*标示滑动而不是点击*/
    //记录下移动的时候的触摸点的坐标
    var moveY=e.touches[0].pageY;
    var moveX = e.touches[0].pageX;
    //记录移动的距离，可以知道活动的方向
    var movePos=moveY-this.startY;
    if(Math.abs(moveX-this.startX)>Math.abs(movePos)){
        this.flag = false;
        return;
    }

    var index=this.index;
    var lastItem=oLis.length-1;
    this.prevsIndex=index==0?lastItem:index-1;
    [].forEach.call(oLis,function () {
        if(index!=arguments[1]){
            arguments[0].style.display="none";
        }
        arguments[0].className="";
        arguments[0].firstElementChild.id = "";
    });

    if(movePos>0){//下滑动，获得上一张图片
      //通过当前这张的索引获取上一张的索引
        //往下滑动处理的逻辑
        //1.当往下滑的时候，上一张在最上面（增加类名zIndex），并且只有当前这张和上一张显示，其他的都隐藏
        //2.一开始滑之前，上一张首先到元素高度的一半的区域(往上移动了一半)，然后跟随着鼠标往下滑动北京图页往下滑动
        //除了自己其他所有的都隐藏（通过索引来判断当前这张是不是自己）
        //处理当前这张的效果
        //1.缩放值=移动的距离/设备的高度 2.移动的距离=滑动的距离
        this.prevsIndex = index == 0 ? lastItem : index - 1;
        var duration=-480+movePos;

    }else if(movePos<0){//上滑动，获得下一张图片
        this.prevsIndex = index == lastItem?0:index+1;
      var duration = 480+movePos;

    }
    oLis[this.prevsIndex].style.webkitTransform="translate(0,"+duration+"px)";
    oLis[this.prevsIndex].style.display="block";
    oLis[this.prevsIndex].className ="zIndex";
    this.style.webkitTransform="scale("+(1-((Math.abs(movePos/winH))*1/2))+") translate(0,"+movePos+"px)";

}
function end(e) {
if(this.flag){
    oLis[this.prevsIndex].style.webkitTransform="translate(0,0)";
    oLis[this.prevsIndex].style.webkitTransition="0.5s";
    oLis[this.prevsIndex].addEventListener("webkitTransitionEnd",function () {
        this.style.webkitTransition="";
        this.firstElementChild.id="a"+this.index;
    },false);
    this.flag=false;


}


}

document.addEventListener("touchmove",function(e){

})

