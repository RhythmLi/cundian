(function () {
    function setDPR() {
        var viewport = document.querySelector('meta[name=viewport]');
        if (window.devicePixelRatio === 1) {
            viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
        }
        if (window.devicePixelRatio === 2) {
            viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
        }
        if (window.devicePixelRatio === 3) {
            viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
        }
    }

    function remChange() {
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var widthProportion = function widthProportion() {
            var doc = document.body || document.documentElement;
            var p = doc.clientWidth;
            return p / 7.5;
        };
        var changePage = function changePage() {
            document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + widthProportion() + 'px !important');
        };
        changePage();
        window.addEventListener(resizeEvt, changePage, false);
    }

    setDPR();
    remChange();
})();


//ajax链接
var ajaxUrl = 'https://jrapi.wzcxfq.com/index.php/';
//页面链接
var webUrl = "https://jrapi.wzcxfq.com/jrHtml/";
function ajaxRequest(url, method, callBack) {
    $.ajax({
        type: method,
        url: 'http://api.cjqccar.com/car.php/Index' + url,
        dataType: 'json',
        success: function (data) {
        },
        error: function (xhr, type) {
        }
    }, function (ret, err) {
        callBack(ret, err);
    })
}

//===============获取cookie
function getcookie() {
    var cookie = {};
    var all = document.cookie;
    if (all === '')
        return cookie;
    var list = all.split(';');
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        item = item.replace(" ", "");
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}

//============保存cookie
function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
}

//===============移除cookie
function removeCookie(name) {
    console.log(1)
    setCookie(name, '1', -1);
}

//==============获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    // if (r != null) return r[2];
    if (r != null) return decodeURI(r[2]);
    return null; //返回参数值
}

//===============底部弹出
function alertBottom(str) {
    var div=document.createElement('div');
    div.className='m-botAlert';
    div.innerHTML='<span class="m-botAlert-con">' + str + ' </span> </div>';
    document.body.appendChild(div);
    setTimeout(function () {
        document.body.querySelector('.m-botAlert').className = 'm-botAlert alert-hide';
    }, 3000);
    setTimeout(function () {
        document.body.removeChild(document.body.querySelector('.m-botAlert'));
    }, 5000);
}