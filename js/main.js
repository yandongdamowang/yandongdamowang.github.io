
//判断手机类型
window.onload = function () {
    //alert($(window).height());
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        //屏蔽ios下上下弹性
        $(window).on('scroll.elasticity', function (e) {
            e.preventDefault();
        }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }
    //预加载
    loading();
}
document.addEventListener('WeixinJSBridgeReady',function(){  

    $('#shakeVideo').play();  

},false);
var date_start;
var date_end;
date_start = getNowFormatDate();
//加载图片
var loading_img_url = [
    "./image/0001.gif",
    "./image/0003.jpg",
    "./image/0002.gif",
    "./image/0002-1.png",
    "./image/0002-2.png",
    "./image/0002-3.png",
    "./image/0002-4.png",
    "./image/0002-5.png",
    "./image/0002-6.png",
    "./image/0002-7.png",
    "./image/0002-8.png",
    "./image/0004.jpg",
    "./image/0004-1.png",
    "./image/0004-2.png",
    "./image/0004-3.png",
    "./image/0004-4.png",
    "./image/0004-5.png",
    "./image/0004-6.png",
    "./image/0004-7.png",
    "./image/0004-8.png",
    "./image/0004-9.png",
    "./image/0004-10.png",
    "./image/0005.jpg",
    "./image/0005-1.png",
    "./image/0005-2.png",
    "./image/0005-3.png",
    "./image/0005-4.png",
    "./image/0005-5.png",
    "./image/0005-6.png",
    "./image/0005-7.png",
    "./image/0005-8.png",
    "./image/0005-9.png",
    "./image/0005-10.png",
    "./image/0006.jpg",
    "./image/0006-1.png",
    "./image/0006-2.png",
    "./image/0006-3.png",
    "./image/0006-4.png",
    "./image/0006-5.png",
    "./image/0006-6.png",
    "./image/0006-7.png",
    "./image/0006-8.png",
    "./image/0006-9.png",
    "./image/0006-10.png",
    "./image/0007.gif"
];

//加载页面
function loading() {
    var numbers = 0;
    var length = loading_img_url.length;

    for (var i = 0; i < length; i++) {
        var img = new Image();
        img.src = loading_img_url[i];
        img.onerror = function () {
            numbers += (1 / length) * 100;
        }
        img.onload = function () {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            console.log(numbers);
            if (Math.round(numbers) == 100) {
                //$('.number').hide();
                date_end = getNowFormatDate();
                var loading_time = date_end - date_start;
                //预加载图片
                $(function progressbar() {
                    //拼接图片
                    $('.shade').hide();
                    var tagHtml = "";
                    for (var i = 1; i <= 7; i++) {
                        if (i == 1) {
                            tagHtml += ' <div id="first" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.gif) center top no-repeat;background-size:100%"></div>';
                        } else if (i == 2) {
                            tagHtml += '<div  style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.gif) center top no-repeat;background-size:100%"></div>';
                        }else if(i === 3) {
                            tagHtml += '<div class="0002" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"><img id="0002-1" class="dad" style="width:43%;position:absolute;top:35%;left:42%;z-index:99;display:none;" src="./image/0002-1.png"/><img id="0002-2" class="dad" style="width:39%;position:absolute;top:29%;left:18%;z-index:98;display:none" src="./image/0002-5.png"/><img id="0002-3" class="dad" style="width: 58%; position: absolute; top: 13%; left: 23%; z-index: 97; transform: scale(1);display:none" src="./image/0002-7.png" /><img style="width:78%;position:absolute;bottom: 26%;z-index:999;left:11%" src="./image/0002-2.png"/><img style="width:97%;position:absolute;bottom: 36%;left:2%" src="./image/0002-3.png"/><img id="0002-1-1" style="width:39%;position:absolute;bottom: 46%;left:60%;display:none;" src="./image/0002-4.png"/><img id="0002-2-1" style="width:38%;position:absolute;bottom: 53%;left:2%;display:none;" src="./image/0002-6.png"/><img id="0002-3-1" style="width:38%;position:absolute;bottom: 70%;left:16%;display:none;" src="./image/0002-8.png"/><div id="0002-1-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:50%;left:73%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none"><div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div><div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div></div><div id="0002-2-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:30%;left:58%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">    <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>    <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div></div><div id="0002-3-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:44%;left:26%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none"> <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div><div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div></div></div>';
                        }else if(i === 4) {
                            tagHtml += '<div class="0004" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%">       <img id="0004-1" class="dad" style="width:40%;position:absolute;top:36%;left:43%;z-index:999;display:none;" src="./image/0004-1.png"/>       <img id="0004-2" class="dad" style="width:51%;position:absolute;top:36%;left:14%;z-index:100;display:none" src="./image/0004-5.png"/>       <img id="0004-3" class="dad" style="width: 49%; position: absolute; top: 14%; left: 42%; z-index: 97; transform: scale(1);display:none" src="./image/0004-7.png" />       <img id="0004-4" class="dad" style="width: 49%; position: absolute; top: 15%; left: 12%; z-index: 97; transform: scale(1);display:none" src="./image/0004-9.png" />       <img style="width:78%;position:absolute;bottom: 26%;z-index:999;left:11%" src="./image/0004-2.png"/>       <img style="width:97%;position:absolute;bottom: 36%;left:2%" src="./image/0004-3.png"/>       <img id="0004-1-1" style="width:39%;position:absolute;bottom: 46%;left:60%;display:none;z-index:100" src="./image/0004-4.png"/>       <img id="0004-2-1" style="width:38%;position:absolute;bottom: 42%;left:2%;display:none;z-index:98" src="./image/0004-6.png"/>       <img id="0004-3-1" style="width:38%;position:absolute;bottom: 68%;left:58%;display:none;" src="./image/0004-8.png"/>       <img id="0004-4-1" style="width:38%;position:absolute;bottom: 64%;left:2%;display:none;" src="./image/0004-10.png"/>   <div id="0004-1-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:50%;left:73%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">       <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>       <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>   </div>   <div id="0004-2-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:31%;left:72%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">           <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>           <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>       </div>       <div id="0004-3-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:56%;left:26%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">               <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>               <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>           </div>           <div id="0004-4-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:36%;left:26%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">                <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>                <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>      </div>      </div>';
                        }else if(i === 5) {
                            tagHtml += ' <div class="0005" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%">    <img id="0005-1" class="dad" style="width:40%;position:absolute;top:34%;left:46%;z-index:999;display:none;" src="./image/0005-1.png"/>    <img id="0005-2" class="dad" style="width:40%;position:absolute;top:34%;left:17%;z-index:100;display:none" src="./image/0005-5.png"/>    <img id="0005-3" class="dad" style="width: 46%; position: absolute; top: 16%; left: 39%; z-index: 98; transform: scale(1);display:none" src="./image/0005-7.png" />    <img id="0005-4" class="dad" style="width: 49%; position: absolute; top: 16%; left: 12%; z-index: 97; transform: scale(1);display:none" src="./image/0005-9.png" />    <img style="width:78%;position:absolute;bottom: 26%;z-index:999;left:11%" src="./image/0005-2.png"/>    <img style="width:97%;position:absolute;bottom: 36%;left:2%" src="./image/0005-3.png"/>    <img id="0005-1-1" style="width:39%;position:absolute;bottom: 46%;left:60%;display:none;z-index:100" src="./image/0005-4.png"/>    <img id="0005-2-1" style="width:38%;position:absolute;bottom: 42%;left:2%;display:none;z-index:98" src="./image/0005-6.png"/>    <img id="0005-3-1" style="width:38%;position:absolute;bottom: 68%;left:58%;display:none;" src="./image/0005-8.png"/>    <img id="0005-4-1" style="width:38%;position:absolute;bottom: 64%;left:2%;display:none;" src="./image/0005-10.png"/><div id="0005-1-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:50%;left:73%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">    <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>    <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div></div><div id="0005-2-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:34%;left:70%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">        <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>        <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>    </div>    <div id="0005-3-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:53%;left:31%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">            <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>            <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>        </div>        <div id="0005-4-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:32%;left:26%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">             <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>             <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>         </div>         </div>';
                        }else if(i===6) {
                            tagHtml += '<div class="0006" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%">    <img id="0006-1" class="dad" style="width:43%;position:absolute;top:36%;left:43%;z-index:999;display:none;" src="./image/0006-1.png"/>    <img id="0006-2" class="dad" style="width:45%;position:absolute;top:35%;left:13%;z-index:100;display:none" src="./image/0006-5.png"/>    <img id="0006-3" class="dad" style="width: 48%; position: absolute; top: 16%; left: 39%; z-index: 97; transform: scale(1);display:none" src="./image/0006-7.png" />    <img id="0006-4" class="dad" style="width: 43%; position: absolute; top: 15%; left: 13%; z-index: 97; transform: scale(1);display:none" src="./image/0006-9.png" />    <img style="width:78%;position:absolute;bottom: 26%;z-index:999;left:11%" src="./image/0006-2.png"/>    <img style="width:97%;position:absolute;bottom: 36%;left:2%" src="./image/0006-3.png"/>    <img id="0006-1-1" style="width:39%;position:absolute;bottom: 46%;left:60%;display:none;z-index:100" src="./image/0006-4.png"/>    <img id="0006-2-1" style="width:38%;position:absolute;bottom: 42%;left:2%;display:none;z-index:98" src="./image/0006-6.png"/>    <img id="0006-3-1" style="width:38%;position:absolute;bottom: 68%;left:58%;display:none;" src="./image/0006-8.png"/>    <img id="0006-4-1" style="width:38%;position:absolute;bottom: 64%;left:2%;display:none;" src="./image/0006-10.png"/><div id="0006-1-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:50%;left:73%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">    <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>    <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div></div><div id="0006-2-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:20%;left:59%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">        <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>        <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>    </div>    <div id="0006-3-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:53%;left:31%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">            <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>            <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>        </div>        <div id="0006-4-2" style="width:8px;height:8px;border-radius:50%;position:absolute;top:32%;left:26%;background-color:#fff;z-index:999;animation: warn 1s linear infinite;display:none">             <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear .5s infinite;"></div>             <div style="position: absolute;top:0;left:0;width: 8px;height: 8px; border-radius:50%;box-shadow: 0 0 8px #fff;animation: warn 1s linear 1s infinite;"></div>         </div>         </div>'
                        }else if(i === 7) {
                            tagHtml += '<div style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.gif) center top no-repeat;background-size:100%"></div>'
                        }
                       
                    }
                    $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                $('.0002').on('touchstart','#0002-3',function(e){
                    e.stopPropagation()
                });
                $('.0002').on('touchend','#0002-3',function(e){
                    if($("#0002-3-1").css("display")=="none") {
                        $("#0002-3-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0002-3-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0002').on('touchstart','#0002-2',function(e){
                    e.stopPropagation()
                });
                $('.0002').on('touchend','#0002-2',function(e){
                    if($("#0002-2-1").css("display")=="none") {
                        $("#0002-2-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0002-2-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0002').on('touchstart','#0002-1',function(e){
                    e.stopPropagation()
                });
                $('.0002').on('touchend','#0002-1',function(e){
                    if($("#0002-1-1").css("display")=="none") {
                        $("#0002-1-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0002-1-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0004').on('touchstart','#0004-3',function(e){
                    e.stopPropagation()
                });
                $('.0004').on('touchend','#0004-3',function(e){
                    if($("#0004-3-1").css("display")=="none") {
                        $("#0004-3-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0004-3-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0004').on('touchstart','#0004-2',function(e){
                    e.stopPropagation()
                });
                $('.0004').on('touchend','#0004-2',function(e){
                    if($("#0004-2-1").css("display")=="none") {
                        $("#0004-2-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0004-2-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0004').on('touchstart','#0004-1',function(e){
                    e.stopPropagation()
                });
                $('.0004').on('touchend','#0004-1',function(e){
                    if($("#0004-1-1").css("display")=="none") {
                        $("#0004-1-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0004-1-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0004').on('touchstart','#0004-4',function(e){
                    e.stopPropagation()
                });
                $('.0004').on('touchend','#0004-4',function(e){
                    if($("#0004-4-1").css("display")=="none") {
                        $("#0004-4-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0004-4-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0005').on('touchstart','#0005-3',function(e){
                    e.stopPropagation()
                });
                $('.0005').on('touchend','#0005-3',function(e){
                    if($("#0005-3-1").css("display")=="none") {
                        $("#0005-3-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0005-3-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0005').on('touchstart','#0005-2',function(e){
                    e.stopPropagation()
                });
                $('.0005').on('touchend','#0005-2',function(e){
                    if($("#0005-2-1").css("display")=="none") {
                        $("#0005-2-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0005-2-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0005').on('touchstart','#0005-1',function(e){
                    e.stopPropagation()
                });
                $('.0005').on('touchend','#0005-1',function(e){
                    if($("#0005-1-1").css("display")=="none") {
                        $("#0005-1-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0005-1-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });
                $('.0005').on('touchstart','#0005-4',function(e){
                    e.stopPropagation()
                });
                $('.0005').on('touchend','#0005-4',function(e){
                    if($("#0005-4-1").css("display")=="none") {
                        $("#0005-4-1").fadeIn('slow')
                        $(this).css("transform","scale(1.08)")
                        e.stopPropagation()
                    }else {
                        $("#0005-4-1").fadeOut('slow')
                        $(this).css("transform","scale(1.0)")
                        e.stopPropagation()
                    }
                   
                });




              
                //配置turn.js
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function () {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });
                    $('.flipbook').turn({
                        // Width
                        width: w,
                        // Height
                        height: h,
                        // Elevation
                        elevation: 50,
                        display: 'single',
                        // Enable gradients
                        gradients: true,
                        // Auto center this flipbook
                        autoCenter: true,
                        when: {
                            turning: function (e, page, view) {
                                if (page == 1) {
                                    $(".btnImg").css("display", "none");
                                    $(".mark").css("display", "block");
                                } else {
                                    $(".btnImg").css("display", "block");
                                    $(".mark").css("display", "none");
                                }
                                if (page == 2) {
                                    $(".nextPage").css("display", "none");
                                } else {
                                    $(".nextPage").css("display", "block");
                                }
                                if(page == 3)  {
                                    $('#0002-1').stop().fadeIn(2000).siblings('#0002-1-2').css('display','block')
                                    $('#0002-2').stop().fadeIn(2000).siblings('#0002-2-2').css('display','block')
                                    $('#0002-3').stop().fadeIn(2000).siblings('#0002-3-2').css('display','block')
                                
                                }else {
                                    $('#0002-1').css('display','none').siblings('[id]').css('display','none')
                                }
                                if(page == 4)  {
                                    $('#0004-1').stop().fadeIn(2000).siblings('#0004-1-2').css('display','block')
                                    $('#0004-2').stop().fadeIn(2000).siblings('#0004-2-2').css('display','block')
                                    $('#0004-3').stop().fadeIn(2000).siblings('#0004-3-2').css('display','block')
                                    $('#0004-4').stop().fadeIn(2000).siblings('#0004-4-2').css('display','block')
                                
                                }else {
                                    $('#0004-1').css('display','none').siblings('[id]').css('display','none')
                                }
                                if(page == 5)  {
                                    $('#0005-1').stop().fadeIn(2000).siblings('#0005-1-2').css('display','block')
                                    $('#0005-2').stop().fadeIn(2000).siblings('#0005-2-2').css('display','block')
                                    $('#0005-3').stop().fadeIn(2000).siblings('#0005-3-2').css('display','block')
                                    $('#0005-4').stop().fadeIn(2000).siblings('#0005-4-2').css('display','block')
                                
                                }else {
                                    $('#0005-1').css('display','none').siblings('[id]').css('display','none')
                                }
                                if(page == 6)  {
                                    $('#0006-1').stop().fadeIn(2000).siblings('#0006-1-2').css('display','block')
                                    $('#0006-2').stop().fadeIn(2000).siblings('#0006-2-2').css('display','block')
                                    $('#0006-3').stop().fadeIn(2000).siblings('#0006-3-2').css('display','block')
                                    $('#0006-4').stop().fadeIn(2000).siblings('#0006-4-2').css('display','block')
                                
                                }else {
                                    $('#0006-1').css('display','none').siblings('[id]').css('display','none')
                                }
                            },
                            turned: function (e, page, view) {
                                console.log(page);
                                var total = $(".flipbook").turn("pages");//总页数
                                if (page == 1) {
                                    $(".return").css("display", "none");
                                    $(".btnImg").css("display", "none");
                                } else {
                                    $(".return").css("display", "block");
                                    $(".btnImg").css("display", "block");
                                }
                                if (page == 2) {
                                    $(".catalog").css("display", "block");
                                } else {
                                    $(".catalog").css("display", "none");
                                }
                            }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['js/turn.js'],
                    complete: loadApp
                });
            }
            ;
        }
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + "" + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}


