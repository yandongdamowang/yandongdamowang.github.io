
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

var date_start;
var date_end;
date_start = getNowFormatDate();
//加载图片
var loading_img_url = [
    "./image/0001.gif",
    "./image/0002.jpg",
    "./image/0003.jpg"
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
                    for (var i = 1; i <= 3; i++) {
                        if (i == 1) {
                            tagHtml += ' <div id="first" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.gif) center top no-repeat;background-size:100%"></div>';
                        } else if (i == 2) {
                            tagHtml += '<div class="0002" style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"><img id="0002-1" style="width:43%;position:absolute;top:35%;left:42%;z-index:99" src="./image/0002-1.png"/><img id="0002-2" style="width:39%;position:absolute;top:29%;left:18%;z-index:98" src="./image/0002-5.png"/><img id="0002-3" style="width: 58%; position: absolute; top: 13%; left: 23%; z-index: 97; transform: scale(1);" src="./image/0002-7.png" /><img style="width:78%;position:absolute;bottom: 26%;z-index:999;left:11%" src="./image/0002-2.png"/><img style="width:97%;position:absolute;bottom: 36%;left:2%" src="./image/0002-3.png"/><img id="0002-1-1" style="width:39%;position:absolute;bottom: 46%;left:60%;display:none;" src="./image/0002-4.png"/><img id="0002-2-1" style="width:38%;position:absolute;bottom: 53%;left:2%;display:none;" src="./image/0002-6.png"/><img id="0002-3-1" style="width:38%;position:absolute;bottom: 70%;left:16%;display:none;" src="./image/0002-8.png"/></div>';
                        }else if(i === 3) {
                            tagHtml += '<div  style="background:url(image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';
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
                        $(this).css("transform","scale(1.2)")
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
                        $(this).css("transform","scale(1.2)")
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
                        $(this).css("transform","scale(1.2)")
                        e.stopPropagation()
                    }else {
                        $("#0002-1-1").fadeOut('slow')
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


