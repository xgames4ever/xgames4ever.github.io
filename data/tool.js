var tool = (function(){
    var setRunObj = setRun();
    return {
        // mouseScroll:mouseScroll,/* 设定dom使用滚动检测(dom,callBak) */
        // getFileUrl:getFileUrl,/* 获取文件临时路径(file)-返回blob路径 */
        // isFloat:isFloat,/* 判断是否为浮点数(numberString)-返回布尔 */
        // domChToArr:domChToArr,/* 原生dom操作子对象(dom.children)-返回children数组 */
        // domParsClass:domParsClass,/* 父节点包含类(dom,className)-undefined或包含对应class的父节点,是否包含对应 */
        // rnd:rnd,/* 取两个数之间随机数(最小数,最大数,布尔_是否为整数) */
        // DomParentS:DomParentS,/* 获取父级指定Dom (dom,{父类key,key对应值...,include:{包含部分...}}),返回dom */
        // getPoint:getPoint,/* 获取任何元素与body的距离 */
        // getStyle:getStyle,/* 获取最终渲染样式 */
        // getStylePx:getStylePx,/* 获取最终渲染样式的px类 */
        // getDomAllHeight:getDomAllHeight,/* 获取dom最终渲染高度(dom) */
        // getDomAllWidth:getDomAllWidth,/* 获取dom最终渲染宽度(dom) */
        // // getDomFull,/* 获取dom完整数据(dom,标识符如:'style:heightAll')-返回对应值 */
        // getWinObj:setRunObj.getWinObj,/* 兼容窗口定义 */
        // getStringNumber:getStringNumber,/* 获取字符串长度(字符串)-返回长度number */
        // getChineseStringNumber:getChineseStringNumber,/* 获取中文字符串长度(字符串)-返回长度number */
        // winPageHiegt:winPageHiegt,/* 获取渲染窗口高度 */
        // winPageWidth:winPageWidth,/* 获取渲染窗口宽度 */
        // fullWin:fullWin,/* 全屏窗口最大化切换 布尔参数不填可默认判断 */
        // b64in:b64in,/* b64加密 */
        // b64out:b64out,/* b64解密 */
    urlVal:urlVal/* 获得浏览器参数(url地址_可选)-返回obj */
        // IsJsonString:IsJsonString,/* 判断是否为json */
        // isArray:isArray,/* 数组判断 */
        // isType:isType,/* 直接判断数据类型 (数据,类型_可选) */
        // isChinese:isChinese,/* 判读字符是否为中文(字符串)-布尔值 */
        // toUrl:toUrl,/* json转url */
        // zIs:zIs,/* 正则验证 */
        // ajax:ajax,/* 工具内置请求方法(请求对象) */
        // ajaxPost:ajaxPost,/* ajaxPost方法_未实现 */
        // formAjax:formAjax,/* formAjax 表单式提交 */
        // ecAjax:ecAjax,/* 自定义原生ajajx */
        // AjaxObjSet:AjaxObjSet,/* ajax方法-jquery文件及图片上传等 */
        // oneFn:oneFn,/* 只执行一次 */
        // preSet:preSet,/* 百分比外部计算 */
        // preSetNumber:preSetNumber,/* 百分比内部计算 */
        // jsonCp:jsonCp,/* json拷贝 */
        // jsonCmp:jsonCmp,/* 比较对象是否一致(objA,objB)-返回布尔值 */
        // arrCp:arrCp,/* 数组拷贝 */
        // arrCmp:arrCmp,/* 比较是否一致(arrA,arrB)-返回布尔 */
        // arrSum:arrSum,/* 数组合计 */
        // arrMax:arrMax,/* 数组取最大 */
        // arrMin:arrMin,/* 数组取最小 */
        // arrGet:arrGet,/* 数组对象键取出(数组,匹配键,匹配值_可选)) */
        // // arrJsonIFR,/* 数组多维检查是否重复(数组1,数组2,是否按顺序[可选])-返回布尔值-未完成 */
        // jsonSort:jsonSort,/* json排序 */
        // toRgb:toRgb,/* 转rbg */
        // toHex:toHex,/* 转### */
        // colorTo:colorTo,/* 颜色渐变阵列(颜色值#,颜色阵列次数,开始浓度,结束浓度)-返回数组内包含颜色字符串 */
        // toColor:toColor,/* 颜色渐变(开始颜色值#,结束颜色值#,次数)-返回数组内包含颜色字符串 */
        // ev:ev,/* 快速数据转换为js执行方法 */
        // dayTime:dayTime,/* 时间方法 */
        // dayList:dayList,/* 时间阵列 */
        // numberAnimation:numberAnimation,/* 数值动画(数值,结束值,每次计算回调,递增值或自定义配置对象) */
        // numberTail:numberTail,/* 小数四舍五入 */
        // numberDeTail:numberDeTail,/* 小数去尾法 */
        // numberAddTail:numberAddTail,/* 小数进一法 */
        // numberDotKeep:numberDotKeep,/* 小数尾部点保留_默认保留两位_设定set后为字符串(数值,保留位数[默认2],是否自动忽略0[可选]) */
        // numberFor:numberFor,/* 数值定位(定值,大值,包含0设置_布尔)-返回定值中所在位置 */
        // exportFile:exportFile,/* 文件导出方法 ({url=路径,type=POST/GET,dataToUrl=是否强行将参数放置至url_布尔,data=一维数据参数}) */
        // objComs:objComs,/* 数据深断 */
        // daCp:daCp,/* 统一拷贝 */
        // objCp:objCp,/* 统一数据深度拷贝(需要拷贝的数据,作用域标识) */
        // Sync:Sync,/* 同步方法(同步定义名,同步判断值,同步后执行)) */
        // conVi:conVi,/* 数据比较求不同_未完成 */
        // watchDomSize:watchDomSize,/* dom大小监视 */
        // watchWinPlay:watchWinPlay,/* 判断页面是否有被浏览(被浏览回调,没被浏览回调) */
        // watchObj:watchObj,/* 监视json对象变化触发(对象,回调方法) */
        // runArr:runArr,/* 数组运行 */
        // miscRun:miscRun,/* 忽略执行 */
        // checkSys:checkSys,/* 判断系统标识-直接执行返回ios/android/pc */
        // test:test,/* 测试 */
        // da:da/* 数据保存 */
    };
})();

// /* 统一初始化方法 */
function setRun(){
    /* arr-find过滤取值方法 */
    setArrPrototypFind();
//     /* 解决方案-数据计算精度修正方法-乘法:mul-加法:add-减法:sub-除法:div */
//     numberSet();
//     /* json-jsm遍历原型方法 */
//     setObjectPrototypeJsm();
//     /* arr-maps多维数组遍历方法(call(val,key string)) */
//     setArrPrototypeMaps();
//     /* NodeList原型改造方法 */
//     setNodeListPrototype();
//     /* 兼容窗口定义 */
//     var getWinObj = (function(){ var outWin = window; /* 设定 innerHeight */ if(!outWin.innerHeight){ outWin.innerHeight = (function(){ if(window.innerHeight!= undefined){ return window.innerHeight; }else{ var B= document.body, D= document.documentElement; return Math.min(D.clientHeight, B.clientHeight); }; })(); }; /* 设定 innerWidth */ if(!outWin.innerWidth){ outWin.innerWidth = (function(){ if(window.innerWidth!= undefined){ return window.innerWidth; }else{ var B= document.body, D= document.documentElement; return Math.min(D.clientWidth, B.clientWidth); }; })(); }; return outWin; })();
//     return {
//         getWinObj,
};

// };

/* 容器 */
var SynChannelObj = {};/* Sync同步容器 */
var setSave = {};

// /* NodeList原型改造方法 */
// function setNodeListPrototype(){
//     NodeList.prototype.map = function(){
//         return this;
//     }
//     NodeList.prototype.find = function(){
//         return this;
//     }
// };
/* arr-find过滤取值方法 */
function setArrPrototypFind(){
    if(!Array.prototype.find){
        Array.prototype.find = function(findCallFn){
            var ourArrVal,nowArr = this;
            ourArrVal = arrFindFn(nowArr);
            /* 建立数组过滤取值 */
            function arrFindFn(arr,aKey){
                for(var a=0;a<arr.length;a++){
                    if(findCallFn(arr[a],a)){
                        return arr[a];
                    };
                };
            };
            return ourArrVal;
        };
    };
};

// /* arr-maps多维数组遍历方法(call(val,key string)) */
// function setArrPrototypeMaps(){
//     // console.log(NodeList.prototype);
//     // console.log(Array.prototype.map.call);
//     if(!Array.prototype.maps){
//         Array.prototype.maps = function(mapsCallFn){
//             var ourArrVal,nowArr = this;
//             /* 设立数组遍历 */
//             arrMapsFn(nowArr);
//             function arrMapsFn(arr,sumKey){
//                 for(var a=0;a<arr.length;a++){
//                     var newKey = '';
//                     if(sumKey){
//                         newKey = sumKey+'.'+a;
//                     }else{
//                         newKey += a;
//                     };
//                     /* 执行回调-若已存在取值则不再获取 */
//                     if(ourArrVal){
//                         mapsCallFn(arr[a],newKey);
//                     }else{
//                         ourArrVal = mapsCallFn(arr[a],newKey);
//                     };
//                     /* 如果判断为数组时则进行递归 */
//                     if(isType(arr[a])=='array'){
//                         arrMapsFn(arr[a],newKey);
//                     }else if(isType(arr[a])=='json'){
//                         jsonMapsFn(arr[a],newKey);
//                     };
//                 };
//             };
//             /* 设立json遍历 */
//             function jsonMapsFn(json,oldKey){
//                 json.jsm((val,jk)=>{
//                     var newKey = '';
//                     if(oldKey){
//                         newKey = oldKey+'.'+jk;
//                     }else{
//                         newKey += jk;
//                     };
//                     /* 如果判断为数组时则进行递归 */
//                     if(isType(val)=='array'){
//                         arrMapsFn(val,newKey);
//                     }else if(isType(val)=='json'){
//                         jsonMapsFn(val.newKey);
//                     };
//                 });
//             };
//             return ourArrVal;
//         };
//     };
// };

// /* json-jsm遍历原型方法 */
// function setObjectPrototypeJsm(){
//     if(!Object.prototype.hasOwnProperty("jsm")){
//         Object.defineProperty(Object.prototype, "jsm", {
//             enumerable: false,
//             writable: true,
//             configurable: true,
//             value: function(forMapFn){
//                 var findOut;
//                 for(var j in this){
//                     if(forMapFn(this[j],j)){
//                         findOut = this[j];
//                     };
//                 };
//                 return findOut;
//             },
//         });
//     }
// };

// /* 解决方案-数据计算精度修正方法-乘法:mul-加法:add-减法:sub-除法:div */
// function numberSet(){ /* 乘法 */ Number.prototype.mul = function(arg) { var m = 0, s1 = this.toString(), s2 = arg.toString(); try {; m += s1.split(".")[1].length; } catch(e) {}; try {; m += s2.split(".")[1].length; } catch(e) {}; return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m); }; /* 加法 */ Number.prototype.add = function(arg) { var r1, r2, m; try { r1 = this.toString().split(".")[1].length; } catch(e) { r1 = 0; }; try { r2 = arg.toString().split(".")[1].length; } catch(e) { r2 = 0; }; m = Math.pow(10, Math.max(r1, r2)); return( this.mul(m) + Number(arg).mul(m) ).div(m); }; /* 减法 */ Number.prototype.sub = function(arg) { return this.add(-arg); }; /* 除法 */ Number.prototype.div = function(arg) { var t1 = 0, t2 = 0, r1, r2; try { t1 = this.toString().split(".")[1].length; } catch(e) {}; try { t2 = arg.toString().split(".")[1].length; } catch(e) {}; r1 = Number(this.toString().replace(".", "")); r2 = Number(arg.toString().replace(".", "")); return(r1 / r2) *  Math.pow(10, t2 - t1); }; /* 四舍五入保留两位 n 数 */ Number.prototype.toFixedx = function(n){ var times = Math.pow(10, n); var des = this * times + 0.5; des = parseInt(des, 10) / times; return des + ''; }; };

// /* 设定dom使用滚动检测(dom,callBak) */
// function mouseScroll(dom,callBak){
//     /* 设定主dom属性不允许拖动等 */
//     dom.setAttribute("oncontextmenu","return false");
//     dom.setAttribute("ondragstart","return false");
//     dom.setAttribute("onselectstart","return false");
//     /* 创建父滚动框 */
//     var scrollDom = document.createElement('div');
//     scrollDom.style.cssText = `
//         position: absolute;
//         left: 0;
//         top: 0;
//         right:-30px;
//         bottom:-30px;
//         Xright:-0px;
//         Xbottom:-0px;
//         display: block;
//         overflow: scroll;
//     `;
//     var top = `${scrollDom.offsetHeight/2}`;
//     var left = `${scrollDom.offsetWidth/2}`;
//     var scrollEventStopOne = false;
//     var scrollResetFn = function(){
//         scrollEventStopOne = true;
//         top = `${scrollDom.offsetHeight/2}`;
//         left = `${scrollDom.offsetWidth/2}`;
//         scrollDom.scrollTop = top;
//         scrollDom.scrollLeft = left;
//     };
//     scrollDom.addEventListener("scroll",function(event){
//         if(scrollEventStopOne){scrollEventStopOne = false;return;};
//         var pos = '',BS = '',x = 0,y = 0;
//         y = scrollDom.scrollTop;
//         x = scrollDom.scrollLeft;
//         if(scrollDom.scrollTop!=top){
//             if(scrollDom.scrollTop > top){
//                 pos = 'bottom';
//             }else{
//                 pos = 'top';
//             };
//         }else if(scrollDom.scrollLeft!=left){
//             if(scrollDom.scrollLeft > left){
//                 pos = 'left';
//             }else{
//                 pos = 'right';
//             };
//         };
//         if(pos=='left'||pos=='bottom'){
//             BS = 'big';
//         }else{
//             BS = 'small';
//         };
//         typeof callBak=='function'&&callBak(event,{
//             pos,BS,x,y,
//         })
//         scrollResetFn();/* 确保一致复位 */
//     });
//     /* 创建子滚动框 */
//     var scrollDomIn = document.createElement('div');
//     scrollDomIn.style.cssText = `
//         position: relative;
//         width: 200%;
//         height: 200%;
//         display: block;
//     `;
//     /* 滚动元素合并 */
//     scrollDom.appendChild(scrollDomIn);
//     /* 将创建滚动放入主dom */
//     dom.appendChild(scrollDom);
//     setTimeout(scrollResetFn);
//     /* 其他情况保留 */
// };

// /* 获取文件临时路径(file)-返回blob路径 */
// function getFileUrl(file){ var url = null; if (window.createObjectURL != undefined) {/* basic */ url = window.createObjectURL(file); } else if (window.URL != undefined) {/* mozilla(firefox)兼容火狐 */ url = window.URL.createObjectURL(file); } else if (window.webkitURL != undefined) {/* webkit or chrome */ url = window.webkitURL.createObjectURL(file); } return url; };

// /* 判断是否为浮点数(numberString)-返回布尔 */
// function isFloat(numberString){return /^-?\d*\.\d+$/.test(numberString);};

// /* domChToArr */
// function domChToArr(childrenDom){ var outChArr = []; for(var c=0;c<childrenDom.length;c++){ outChArr.push(childrenDom[c]); }; return outChArr; };

// /* 父节点包含类(dom,className)-undefined或包含对应class的父节点,是否包含对应 */
// function domParsClass(dom,className){ if(!dom.parentNode.className){return undefined;}; var parDom = dom.parentNode.className.split(' ').find(function(c){return c==className;}); if(parDom){return dom.parentNode;}; return domParsClass(dom.parentNode,className); };

// /* 取两个数之间随机数(最小数,最大数,布尔_是否为整数) */
// function rnd(min, max, setVal){ var numberVal = min + Math.floor(Math.random() * (max - min + 1)); if(setVal){ numberVal = (numberVal.toFixed(0)-0); }; return numberVal; };

// /* 获取父级指定Dom (dom,{父类key,key对应值...,include:{包含部分...}}),返回dom */
// function DomParentS(domVal,parentKeyValObj){ var out=false; if(isType(domVal)=='object'&&domVal.parentNode) { var forIfArr=[],isMy; for(var at in parentKeyValObj) { if(at=='include') { var attObj=parentKeyValObj[at]; for(var it in attObj) { /* 先验证自己再验证父级 */ if(domVal[it] &&isType(domVal[it])!='array' &&isType(domVal[it])!='json' &&isType(domVal[it])!='object' &&domVal[it].indexOf(attObj[it])>-1){ isMy = domVal; }else if(domVal.parentNode[it] &&isType(domVal.parentNode[it])!='array' &&isType(domVal.parentNode[it])!='json' &&isType(domVal.parentNode[it])!='object' &&domVal.parentNode[it].indexOf(attObj[it])>-1){ forIfArr.push(true); }else { forIfArr.push(false); } ; } ; } else if(at!='include') { /* 先验证自己再验证父级 */ if(domVal[at] &&isType(parentKeyValObj[at])!='array' &&isType(parentKeyValObj[at])!='json' &&isType(parentKeyValObj[at])!='object' &&domVal[at]==parentKeyValObj[at]) { isMy = domVal; }else if(domVal.parentNode[at] &&isType(parentKeyValObj[at])!='array' &&isType(parentKeyValObj[at])!='json' &&isType(parentKeyValObj[at])!='object' &&domVal.parentNode[at]==parentKeyValObj[at]){ forIfArr.push(true); } else { forIfArr.push(false); } ; } ; } ; if(isMy){ /* 如果自己符合需求直接通过 */ out = isMy; }else if(forIfArr.indexOf(false)>-1){ /* 如果判断对象里都不符合需求则直接递归下个父级 */ out=DomParentS(domVal.parentNode, parentKeyValObj); } else { out=domVal.parentNode; } ; } ; return out; };
// // function DomParentS(domVal,parentKeyValObj){ var out = false; if(isType(domVal)=='object'&&domVal.parentNode){ var forIfArr = []; for(var at in parentKeyValObj){ if(at=='include'){ var attObj = parentKeyValObj[at]; for(var it in attObj){ if(domVal.parentNode[it] &&isType(domVal.parentNode[it])!='array' &&isType(domVal.parentNode[it])!='json' &&isType(domVal.parentNode[it])!='object' &&domVal.parentNode[it].indexOf(attObj[it])>-1 ){ forIfArr.push(true); }else{ forIfArr.push(false); }; }; }else if(at!='include'){ if(domVal.parentNode[at] &&isType(parentKeyValObj[at])!='array' &&isType(parentKeyValObj[at])!='json' &&isType(parentKeyValObj[at])!='object' &&domVal.parentNode[at]==parentKeyValObj[at] ){ forIfArr.push(true); }else{ forIfArr.push(false); }; }; }; /* 如果判断对象里都不符合需求则直接递归下个父级 */ if(forIfArr.indexOf(false)>-1){ out = DomParentS(domVal.parentNode,parentKeyValObj); }else{ out = domVal.parentNode; }; }; return out; };

// /* 判读字符是否为中文(字符串)-布尔值 */
// function isChinese(temp){ if(/[^\u4e00-\u9fa5]+/.test(temp)) { return false } else { return true; } ; };

// /* 获取任何元素与body的距离 */
// function getPoint(obj) { /* 获取某元素以浏览器左上角为原点的坐标 */ var t = obj.offsetTop; /* 获取该元素对应父容器的上边距 */ var l = obj.offsetLeft; /* 对应父容器的上边距 */ /* 判断是否有父容器，如果存在则累加其边距 */ while (obj = obj.offsetParent) {/* 等效 obj = obj.offsetParent;while (obj != undefined) */ t += obj.offsetTop; /* 叠加父容器的上边距 */ l += obj.offsetLeft; /* 叠加父容器的左边距 */ } return {top:t,left:l}; };

// /* 获取最终渲染样式 */
// function getStyle(dom,style,pseudo){ return window.getComputedStyle(dom, pseudo||null)[style]; };

// /* 获取dom最终渲染高度(dom) */
// function getDomAllHeight(domVal){
//     var out = 0;
//     out = out.add(isNaN(getStylePx(domVal,'height')-0)?0:getStylePx(domVal,'height'));
//     out = out.add(isNaN(getStylePx(domVal,'margin-bottom')-0)?0:getStylePx(domVal,'margin-bottom'));
//     out = out.add(isNaN(getStylePx(domVal,'margin-top')-0)?0:getStylePx(domVal,'margin-top'));
//     out = out.add(isNaN(getStylePx(domVal,'padding-bottom')-0)?0:getStylePx(domVal,'padding-bottom'));
//     out = out.add(isNaN(getStylePx(domVal,'padding-top')-0)?0:getStylePx(domVal,'padding-top'));
//     out = out.add(isNaN(getStylePx(domVal,'border-bottom')-0)?0:getStylePx(domVal,'border-bottom'));
//     out = out.add(isNaN(getStylePx(domVal,'border-top')-0)?0:getStylePx(domVal,'border-top'));
//     return out;
// };

// /* 获取dom最终渲染宽度(dom) */
// function getDomAllWidth(domVal){
//     var out = 0;
//     out = out.add(isNaN(getStylePx(domVal,'width')-0)?0:getStylePx(domVal,'width'));
//     out = out.add(isNaN(getStylePx(domVal,'margin-right')-0)?0:getStylePx(domVal,'margin-right'));
//     out = out.add(isNaN(getStylePx(domVal,'margin-left')-0)?0:getStylePx(domVal,'margin-left'));
//     out = out.add(isNaN(getStylePx(domVal,'padding-right')-0)?0:getStylePx(domVal,'padding-right'));
//     out = out.add(isNaN(getStylePx(domVal,'padding-left')-0)?0:getStylePx(domVal,'padding-left'));
//     out = out.add(isNaN(getStylePx(domVal,'border-right')-0)?0:getStylePx(domVal,'border-right'));
//     out = out.add(isNaN(getStylePx(domVal,'border-left')-0)?0:getStylePx(domVal,'border-left'));
//     return out;
// };

// /* 获取字符串长度(字符串)-返回长度number */
// function getStringNumber(str){ var strNum=0; for(var s=0; s<str.length; s++) { strNum++; } ; return strNum; };

// /* 获取中文字符串长度(字符串)-返回长度number */
// function getChineseStringNumber(str){ var strNum = 0; for(var s=0;s<str.length;s++){ if(isChinese(str[s])){ strNum+=2; }else{ strNum++; }; }; return strNum; };

// /* 获取最终渲染样式的px类 */
// function getStylePx(dom,style,pseudo){ var px = getStyle(dom,style,pseudo); px = px.replace('px',''); return (px-0); };

// /* 获取渲染窗口高度 */
// function winPageHiegt(){ if(window.innerHeight){ return window.innerHeight; }else{ var B= document.body, D = document.documentElement; return Math.min(D.clientHeight, B.clientHeight); }; };

// /* 获取渲染窗口宽度 */
// function winPageWidth(){ if(window.innerWidth){ return window.innerWidth; }else{ var B= document.body, D= document.documentElement; return Math.min(D.clientWidth, B.clientWidth); }; };

// /* 全屏窗口最大化切换 第一参数布尔参数_第二参数是执行回调true判断开关 */
// function fullWin(set,call){
//     runFullWin(set);
//     function runFullWin(set) {
//         var element=document.documentElement;
//         if (set) {
//             /* 复位 */
//             if (document.exitFullscreen) {
//                 document.exitFullscreen();
//             }
//             else if (document.webkitCancelFullScreen) {
//                 document.webkitCancelFullScreen();
//             }
//             else if (document.mozCancelFullScreen) {
//                 document.mozCancelFullScreen();
//             }
//             else if (document.msExitFullscreen) {
//                 document.msExitFullscreen();
//             }
//             call(false);
//         }
//         else {
//             /* 全屏 */
//             if (element.requestFullscreen) {
//                 element.requestFullscreen();
//             }
//             else if (element.webkitRequestFullScreen) {
//                 element.webkitRequestFullScreen();
//             }
//             else if (element.mozRequestFullScreen) {
//                 element.mozRequestFullScreen();
//             }
//             else if (element.msRequestFullscreen) {
//                 /* IE11 */
//                 element.msRequestFullscreen();
//             }
//             call(true);
//         }
//     }
//     ;
// };

// /* b64加密 */
// function b64in(val){ return new b64().encode(val); };

// /* b64解密 */
// function b64out(val){ return new b64().decode(val); };

/* 获得浏览器参数(url地址_可选)-返回obj */
function urlVal(url){ if(setSave.urlVal&&setSave.urlVal[window.location.href]) { return setSave.urlVal[window.location.href]; }else { if(!setSave.urlVal){ setSave.urlVal = {}; }; var urlVal = {}, urlArr=(url||window.location.href).split("?"), forUrl=[]; if(urlArr.length>1) { for(var d=0;d<urlArr.length;d++) { if(d) { /* 去除不必要的字符 */ forUrl.push(urlArr[d].replace(/#.*/, '')); }; }; urlVal=urlStringToObj(forUrl); }; setSave.urlVal[window.location.href]=urlVal; return urlVal; /* 将参赛字符串转对象方法 */ function urlStringToObj(urlStrinArrVal) { var outVal= {}; for(var r=0;r<urlStrinArrVal.length;r++) { var urlValArr=urlStrinArrVal[r].split('&'); for(var n=0;n<urlValArr.length;n++) { var valuKeyAr=urlValArr[n].split("="); outVal[valuKeyAr[0]]=valuKeyAr[1]; }; }; return outVal; }; }; };

// /* 判断是否为json */
// function  IsJsonString(obj) { var out = false; if(typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length){ out = true; } return out; };

// /* 数组判断 */
// function isArray(object){ return  object && typeof object==='object' && typeof object.length==='number' && typeof object.splice==='function' && /* 判断length属性是否是可枚举的 对于数组 将得到false   */ !(object.propertyIsEnumerable('length')); };

// /* 直接判断数据类型 (数据,类型_可选),不写类型时返回-string-function-null-undefined-number-boolean-array-json,写类型返回布尔值 */
// function isType(val,type){ var out=typeof val; if(typeof val=='string') { out='string'; } else if(typeof val=='function') { out='function'; } else if(typeof val=='null') { out='null'; } else if(typeof val=='undefined') { out='undefined'; } else if(typeof val=='number') { out='number'; } else if(typeof val=='boolean') { out='boolean'; } else if(val instanceof Array) { out='array'; } else if(IsJsonString(val)) { out='json'; } ; if(type) { if(out==type) { out=true; } else { out=false; } ; } ; return out; };

// /* json转url */
// function toUrl(json){ var outUrl='', outArr=[], jsonArr=[], l=0; for(var j in json) {l++; outArr.push(j+'='+json[j]); } ; outUrl=outArr.join('&'); return ((function(){return(l!=0?'?':'');})()+outUrl); };

// /* 正则验证 */
// function zIs(stringVal,regularVal){ if(stringVal.search(regularVal)>-1){ return true; }else{ return false; }; };

// /* 工具内置请求方法(请求对象) */
// function ajax(obj){ var type=obj.type||'GET'; var url=obj.url||''; var val=obj.data|| {} ; var postVal; if(type=='GET'||type=='Get'||type=='get') { url.indexOf('?')>-1?'': url+='?'; for(var v in val) { url+=('&'+v+'='+val[v]); } ; url = url.replace(/\?&/,'?'); } else if(type=='POST'||type=='Post'||type=='post') { var newVal=''; for(var v in val) { newVal+=(v+'='+val[v]+'&'); } ; postVal=[]; newVal = newVal.replace(/&$/,''); postVal.push(newVal); } ; if(obj.jsonp) { url+='&'+obj.jsonp; var nowJsonpVal=obj.jsonp.split('=')[1]; var newScrip=document.createElement('script'); newScrip.setAttribute("id", (nowJsonpVal)); newScrip.setAttribute("src", url); document.getElementsByTagName('Head')[0].appendChild(newScrip); window[nowJsonpVal]=function (data) { obj.success?obj.success(data): ''; } ; var newScripDom=document.getElementById(nowJsonpVal); document.getElementsByTagName('Head')[0].removeChild(newScripDom)/* 删除子元素 */ } else { /* 原生ajax请求 */ var ajax=new XMLHttpRequest(); /* 创建ajax对象 */ ajax.open(type, url, true); /* 设定发送数据方式 */ ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); /* 设置响应格式 */ ajax.onreadystatechange=function() { /* 获取响应信息 */ if(ajax.status=='200'&&ajax.readyState==4) { obj.success?obj.success(ajax.responseText): ''; } ; } ; ajax.send(postVal); /* 发送ajax数据 */ } ; };

// /* ajaxPost 方法_未实现 */
// function ajaxPost(url,dataJson){
//     var potText = '<form id="iePost" name="iePost" target="ruleFrame" method="POST" action="{{地址}}" style="display:none;">{{增加的内容}}</form><iframe id="ruleFrame" name="ruleFrame" src="" style="display:none;"></iframe> ',
//         potInput = '<input type="text" name="{{键}}" value="{{值}}"><br>',
//         newPostInput = '',okPotInput = '';
//     for(var d in dataJson){
//         newPostInput = potInput;
//         newPostInput = newPostInput.replace('{{键}}',d);
//         newPostInput = newPostInput.replace('{{值}}',dataJson[d]);
//         okPotInput += newPostInput;
//     };
//     potText = potText.replace('{{地址}}',url);
//     console.log('okPotInput',okPotInput);
//     potText = potText.replace('{{增加的内容}}',okPotInput);
//     document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd',potText);
//     var formDom = document.getElementById('iePost'),
//         iframeDom = document.getElementById('ruleFrame');
//     // formDom.onsubmit = 'return false';
//     // formDom.onsubmit(function(a,b,c){return false;}),
//     // console.log([formDom]);
//     console.log('iframeDom',[iframeDom]);
//     formDom.submit();
// };

// function formAjax(url,dataJson){
//     // var potText = `
//     // <form id="iePost" name="iePost" target="ruleFrame" method="POST" action="{{地址}}" style="display:none;">
//     // {{增加的内容}}
//     // </form>
//     // <iframe id="ruleFrame" name="ruleFrame" src="" style="display:none;">
//     // </iframe>`,
//     //     potInput = '<input type="text" name="{{键}}" value="{{值}}"><br>',
//     //     newPostInput = '',okPotInput = '';
//     // for(var d in dataJson){
//     //     newPostInput = potInput;
//     //     newPostInput = newPostInput.replace('{{键}}',d);
//     //     newPostInput = newPostInput.replace('{{值}}',dataJson[d]);
//     //     okPotInput += newPostInput;
//     // };
//     // potText = potText.replace('{{地址}}',url);
//     // // console.log('okPotInput',okPotInput);
//     // potText = potText.replace('{{增加的内容}}',okPotInput);
//     // var bodyDom = document.getElementsByTagName('body')[0];
//     // bodyDom.insertAdjacentHTML('beforeEnd',potText);
//     // var formDom = document.getElementById('iePost'),
//     //     iframeDom = document.getElementById('ruleFrame');
//     // // formDom.onsubmit = 'return false';
//     // // formDom.onsubmit(function(a,b,c){return false;}),
//     // // console.log([formDom]);
//     // console.log('iframeDom',[iframeDom]);
//     // formDom.submit();
//     // var formDom = document.createElement('form');

//     // document.createElement('iframe');
// };

// /* 自定义原生ajajx({url:"url",type:"POST",data,success,complete,contentType,cache}) */
// function ecAjax(objUrl){
//     /* 判断主要字段是否存在 */
//     if(!objUrl.url){console.error('ajax请求url必须存在');return;};
//     /* 判断数据存在形式 */
//     var ajaxVal = ''; 
//     if(!objUrl.file){
//         for(var v in objUrl.data){
//             // ajaxVal+= `${v}=${objUrl.data[v]}&`
//             ajaxVal+= v+'='+objUrl.data[v]+'&'
//         };
//         ajaxVal = ajaxVal.slice(0,-1);/* 去除多余参数 */
//     }else{
//         // ajaxVal = new FormData();
//         // for(var v in objUrl.data){
//         //     // ajaxVal+= `${v}=${objUrl.data[v]}&`
//         //     ajaxVal+= v+'='+objUrl.data[v]+'&'
//         //     ajaxVal.append(v,objUrl.data[v]);
//         // };
//     };
//     /* 设定GET参数返回方法 */
//     function GetAjaxVal(){
//         if((objUrl.type!='POST'||!objUrl.type)&&!objUrl.file){
//             return '?'+ajaxVal;
//         }else{
//             return '';
//         };
//     };
//     /* 原生ajax请求 */
//     var ajax = new XMLHttpRequest();//创建ajax对象
//     ajax.open(objUrl.file?'POST':objUrl.type||'GET',objUrl.url+GetAjaxVal(),objUrl.cache||true);//设定发送数据方式
//     if(!objUrl.file){
//         ajax.setRequestHeader("Content-Type",objUrl.contentType||"application/x-www-form-urlencoded")//设置响应格式
//     };
//     ajax.onreadystatechange = function(ajval){//获取响应信息
//         if(ajax.status=='200'&&ajax.readyState==4){
//             // var ajaxData = eval("("+ajax.responseText+")");
//             objUrl.success&&objUrl.success(ajax.responseText,ajax,ajval);
//             objUrl.complete&&objUrl.complete(ajax,ajval);
//         }else if(ajax.readyState==4){
//             objUrl.error&&objUrl.error(ajax,ajval);
//             objUrl.complete&&objUrl.complete(ajax,ajval);
//         };
//     };
//     /* 采用不同方式发送数据 */
//     if(objUrl.file){
//         ajax.send(objUrl.data);//发送ajax数 
//     }else if(objUrl.type=='POST'){
//         ajax.send(ajaxVal);//发送ajax数 
//     }else{
//         ajax.send();//发送ajax数 
//     };
// };

// /* ajax方法 */
// function AjaxObjSet(setjson) {
//     var json= {},formDataDom = document.createElement('form'),newData = undefined;
//     /* 传输方式 */
//     json.type=setjson.type||'POST';
//     /* 是否异步 */
//     json.success=setjson.success||function() {};
//     /* 参数 */
//     json.data=setjson.data||{};
//     // if(zIs(json.type,/[gG][eE][tT]/g)){/* GET发送 */
//         // json.url=(setjson.url||"")+toUrl(json.data);
//     // }else{/* POST发送 */
//     //     json.url = setjson.url;
//     //     formDataDom.method = 'POST';
//     //     formDataDom.action = json.url;
//     //     newData = new FormData(formDataDom),jasonData = {};
//     //     for(var d in json.data){
//     //         newData.append(d,json.data[d]);
//     //     };
//     //     ajaxPost(json.url,json.data);
//     //     return;
//     // };
//     /* 是否异步 */
//     json.cache=(function() {
//         if(setjson.cache!=undefined) {
//             return setjson.cache;
//         } else {
//             return true;
//         };
//     }
//     )();
//     if(setjson.ajaxType=='img'){
//         delete setjson.ajaxType;
//         // setjson.url = (setjson.url+toUrl(setjson.urlData));
//         $.ajax(setjson);
//     }else if(setjson.ajaxType=='file'){
//         delete setjson.ajaxType;
//         setjson.url = (setjson.url+toUrl(setjson.data));
//         // for(var d in setjson.data){
//         //     if(setjson.file.append){
//         //         setjson.file.append(d,setjson.data[d]);
//         //     };
//         // };
//         // if(setjson.file.append){
//         //     setjson.data = setjson.file;
//         // };
//         // console.log('setjson.url',setjson.url);
//         // $.ajax(setjson);
//         // /* 原生ajax请求 */
//         var ajax = new XMLHttpRequest();//创建ajax对象
//         ajax.open('POST',setjson.url,true);//设定发送数据方式
//         // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded")//设置响应格式
//         ajax.onreadystatechange = function(){//获取响应信息
//             if(ajax.status=='200'&&ajax.readyState==4){
//                 // console.log('ajax.responseText',ajax.responseText);
//                 // var ajaxData = eval("("+ajax.responseText+")");
//                 json.success(ajax.responseText,ajax);
//             };
//         };
//         ajax.send(setjson.file);//发送ajax数据
//         // $.ajax(setjson);
//     }else if(setjson.ajaxType=='blob'||setjson.responseType=='blob'){
//         var POSTVal;
//         var GETVal = '';
//         /* 确定是get参数还是POST参数 */
//         if(!setjson.type){
//             setjson.type = 'POST';
//             POSTVal = JSON.stringify(setjson.data);
//         }else if(/[pP][oO][sS][tT]/.test(setjson.type)){
//             POSTVal = JSON.stringify(setjson.data);
//         }else{
//             GETVal = []
//             for(var d in setjson.data){
//                 GETVal.push((d+'='+setjson.data[d]));
//             };
//             if(GETVal.length){
//                 GETVal = GETVal.join('&');
//                 GETVal = ('?'+GETValv);
//             }else{
//                 GETVal = '';
//             };
//         };
//         /* 确定token */
//         var token = false;
//         if(setjson.data.token){
//             token = setjson.data.token;
//             delete setjson.data.token;
//         };
//         var req = new XMLHttpRequest();
//         req.open(setjson.type,setjson.url+GETVal, true);
//         req.responseType = setjson.responseType;
//         req.setRequestHeader('Content-Type', 'application/json');
//         if(isType(setjson.headers)=='json'){
//             for(var h in setjson.headers){
//                 req.setRequestHeader(h,setjson.headers[h]);
//             };
//         }else if(token){
//             req.setRequestHeader('token', token);
//         };
//         req.onload = function() {
//             var data = req.response;
//             var blob = new Blob([data]);
//             var blobUrl = window.URL.createObjectURL(blob);
//             setjson.success(blobUrl);
//         };
//         req.send(POSTVal);
//     }else{
//         $.ajax({
//             ...setjson,
//             url:setjson.url,//地址
//             type:json.type,//默认是POST请求
//             // cache:false,    //默认值: true，dataType 为 script 和 jsonp 时默认为 false。设置为 false 将不缓存此页面。
//             contentType:setjson.contentType||'application/x-www-form-urlencoded',
//             data:json.data,//发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。
//             cache:false,//true为异步_false为同步
//             success:function(data){
//                 json.success(data, ajax);
//             },//返回时的数据
//             complete(a,b,c){
//                 if(a.readyState!=4||a.status!=200){
//                     setjson.error?setjson.error(a,b,c):'';
//                 };
//                 setjson.complete?setjson.complete(a,b,c):'';
//             },
//             error:json.error,
//         });
//     };
//     return;
//     var ajax=new XMLHttpRequest();
//     /* 创建ajax对象 */
//     ajax.open(json.type, json.url, json.cache);
//     /* 设定发送数据方式 */
//     ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     /* 设置响应格式 */
//     ajax.onreadystatechange=function() {
//         /* 获取响应信息 */
//         if(ajax.status=='200'&&ajax.readyState==4) {
//             json.success(ajax.responseText, ajax);
//         };
//     }
//     ;
//     ajax.send(newData);
//     /* 发送ajax数据 */

// };

// /* 只执行一次 */
// function oneFn(cf,val){ if(!setSave.oneFnSave){ setSave.oneFnSave = {}; }; if(!setSave.oneFnSave[val]){ setSave.oneFnSave[val] = cf; setSave.oneFnSave[val](); }; };

// /* 百分比外部计算 */
// function preSet(val){ if((val+'').indexOf('NaN')>-1||(val+'').indexOf('Infinity')>-1){return '0%';} var out = (val-0)*100; out = (Math.floor(out*100)/100);/* 取两位小数 */ return out+'%'; };

// /* 百分比内部计算 */
// function preSetNumber(val,val2){ if(typeof val2=='undefined'){ var out=val; if((out+'')=='NaN'||(out+'')=='Infinity') { console.error(out+' 数值转preSetNumber失败'); return 0; }; out+=0.000001; out=(((out).toFixed(3)+'').replace(/[0-9]$/, '')-0); return out; }else{ var out2 = ((val-0)/(val2-0)); var fnNumber = 50; calculation(out2); function calculation(out2V){ fnNumber--; if((out2V+'')=='NaN'||(out2V+'')=='Infinity') { var val1 = ((val-0)+((val-0)+0.5)),newOut2 = (val1/val2); if(fnNumber>0){ calculation(newOut2); }else{ console.error(' 数值转preSetNumber失败2:'+val); }; }else{ out2+=0.000001; out2 = (((out2).toFixed(3)+'').replace(/[0-9]$/, '')-0); }; }; return out2; }; };

// /* json拷贝 */
// function jsonCp(a){ return JSON.parse(JSON.stringify(a)); };/* 公共json拷贝 */

// /* 数组拷贝 */
// function arrCp(objv){ var out=[]; (function deepcopy(obj) { var len=obj.length; for (var i=0; i < len; i++) { if (isArray(obj[i])) { out[i]=arrCp(obj[i]); } else if(IsJsonString(obj[i])) { out[i]=jsonCp(obj[i]); } else { out[i]=obj[i] } ; } ; } )(objv); return out; };

// /* 比较数组是否一致(arrA,arrB)-返回布尔 */
// function arrCmp(arrA,arrB){ var outIf = true,arrRunIf = true; /* 比较数据长度是否一致 */ if(arrA.length!=arrB.length){outIf = false;arrRunIf = false;console.log(112233);}; for(var a=0;a<arrA.length;a++){ if(arrRunIf){ if(isType(arrA[a])!=isType(arrB[a])){ outIf = false; arrRunIf = false; }else if(isType(arrA[a])=='array'){ outIf = arrCmp(arrA[a],arrB[a]); arrRunIf = false; }else if(isType(arrA[a])=='json'){ outIf = jsonCmp(arrA[a],arrB[a]); arrRunIf = false; }else if(arrA[a]!=arrB[a]){ outIf = false; arrRunIf = false; }; }; }; return outIf; };

// /* 比较对象是否一致(objA,objB)-返回布尔值 */
// function jsonCmp(jsonA,jsonB){
//     var jsALeng=0,
//     jbALeng=0,
//     outIf=true,
//     jsonRunIf=true;
//     /* 初始排查数据格式类型 */
//     if(
//         isType(jsonA)!=isType(jsonB)
//         ||isType(jsonA)!='json'
//     ){
//         outIf=false;
//         jsonRunIf=false;
//     };
//     for(var s in jsonA) {
//         if(jsonRunIf) {
//             if(isType(jsonA[s])!=isType(jsonB[s])) {
//                 outIf=false;
//                 jsonRunIf=false;
//             }
//             else if(isType(jsonA[s])=='array') {
//                 outIf=arrCmp(jsonA[s], jsonB[s]);
//                 jsonRunIf=false;
//             }
//             else if(isType(jsonA[s])=='json') {
//                 outIf=jsonCmp(jsonA[s], jsonB[s]);
//                 jsonRunIf=false;
//             }
//             else if(jsonA[s]!=jsonB[s]) {
//                 outIf=false;
//                 jsonRunIf=false;
//             }
//             ;
//         }
//         ;
//         jsALeng++;
//     }
//     ;
//     for(var s in jsonB) {
//         if(jsonRunIf) {
//             if(isType(jsonA[s])!=isType(jsonB[s])) {
//                 outIf=false;
//                 jsonRunIf=false;
//             }
//             else if(isType(jsonA[s])=='array') {
//                 outIf=arrCmp(jsonA[s], jsonB[s]);
//                 jsonRunIf=false;
//             }
//             else if(isType(jsonA[s])=='json') {
//                 outIf=jsonCmp(jsonA[s], jsonB[s]);
//                 jsonRunIf=false;
//             }
//             else if(jsonA[s]!=jsonB[s]) {
//                 outIf=false;
//                 jsonRunIf=false;
//             }
//             ;
//         }
//         ;
//         jbALeng++;
//     }
//     ;
//     if(jsALeng!=jbALeng) {
//         outIf=false;
//     }
//     ;
//     return outIf;
// };

// /* 数组合计 */
// function arrSum(arr){ var arrs = arr,sum = 0; for(var s=0;s<arrs.length;s++){ if(((arrs[s]-0)+'')!='NaN'){ sum += (arrs[s]-0); }; }; return sum; };

// /* 数组取最大 */
// function arrMax(arr){ var max = 0; for(var m=0;m<arr.length;m++){ if(arr[m]>max){ max = arr[m]; }; }; return max; };

// /* 数组取最小 */
// function arrMin(arr){ var min = arrMax(arr); for(var m=0;m<arr.length;m++){ if(arr[m]<min){ min = arr[m] }; }; return min; };

// /* 数组对象键取出(数组,匹配键,匹配值_可选)),返回数组 */
// function arrGet(arr, key, val) { if(!arr,!key,isType(arr)!='array',isType(key)!='string'&&isType(key)!='number') { console.error('工具类arrGet,参数未设立正确'); return false; } ; var outArr=[]; for(var p=0; p<arr.length; p++) { if((isType(arr[p])=='string'||isType(arr[p])=='number')&&(arr[p]==key||arr[p]==val)) { /* 判断值类型,字符串和数值的直接用key匹配返回 */ outArr.push(arr[p]); } else if(isType(arr[p])=='json') { /* 判断值类型,json的用key匹配返回,如果有val则还需匹配值 */ for(var g in arr[p]) { if(key&&!val&&g==key) { outArr.push(arr[p]); } else if(key&&val&&g==key&&arr[p][g]==val) { outArr.push(arr[p]); } ; } } else if(isType(arr[p])=='array') { /* 判断值类型,为数组时调用自身做多维 */ outArr.push(arrGet(arr[p], key, val)); } ; /* 判断值类型,func,unde,null等的忽略 */ } ; return outArr; };

// /* 数组多维检查是否重复(数组1,数组2,是否按顺序[可选])-返回布尔值-未完成 */
// function arrJsonIFR(arrA,arrB,set){
//     if(!arrA||!arrB||isType(arrA)!=isType(arrB)||isType(arrA)!='array'){
//         return false;
//     };
//     var ifOut = false;
//     arrA.map(function(a){
//         var ifVar = true;
//         arrB.map(function(b){
//             if(ifVar){
//                 if((isType(a)!='function'&&isType(a)==isType(b))
//                 ||(isType(a)!='array'&&isType(a)==isType(b))
//                 ||(isType(a)!='json')&&isType(a)==isType(b)){
//                     if(a==b){
//                         ifVar = false;
//                         ifOut = true;
//                     };
//                 }else if(isType(a)=='function'&&isType(b)=='function'){
//                     ifVar = false;
//                     ifOut = true;
//                 }else if(isType(a)=='json'&&isType(b)=='json'){
//                     ifVar = false;
//                     var jsonRun = true;
//                     for(var ain in a ){
//                         if(jsonRun){
//                             var aKeyRun = true;
//                             for(var bin in b ){
//                                 /* 定位比较数据 */
//                                 if(aKeyRun&&ain==bin){
//                                     aKeyRun = false;
//                                     ifOut = arrJsonIFR([a[ain]],b[bin]);
//                                     if(!ifOut){jsonRun = false;};
//                                 };
//                             };
//                             /* 如果全部键匹配下来都没有,直接返回false */
//                             if(aKeyRun){ifOut = false;jsonRun = false;};
//                         };
//                     };
//                 }else if(isType(a)=='array'&&isType(b)=='array'){
//                     ifVar = false;
//                     ifOut = arrJsonIFR(a,b);
//                 };
//             };
//         });

//     });

//     // if(set){
//         /* 按顺序处理 */
//         // arrA.map(function(a,ak){
//         //     var b = arrB[ak];
//         //     if(!set){
//         //         b = arrB.find(function(bb){
//         //             if(arrJsonIFR([a],[bb],true)){
//         //                 b = bb;
//         //             };
//         //         });
//         //     };
//         //     if(isType(a)=='string'){
//         //         ifOut = (b==a);
//         //         console.log(1,ifOut);
//         //     }else if(isType(a)=='number'){
//         //         ifOut = (b==a);
//         //         console.log(2,ifOut,b,a,ak);
//         //     }else if(isType(a)=='json'){
//         //         for(var c in a){
//         //             var keyRunIf = true;
//         //             for(var e in b){
//         //                 if(e==c){
//         //                     keyRunIf = false;
//         //                     if(a&&b&&a[c]&&b[e]){
//         //                         console.log('json',a[c],b[e]);
//         //                         ifOut = arrJsonIFR([a[c]],[b[e]]);
//         //                     }else{
//         //                         ifOut = false;
//         //                     };
//         //                 };
//         //             };
//         //             /* 如果json跑完了key无匹配值直接就是false */
//         //             if(keyRunIf){ifOut = false;console.warn(c);};
//         //         };
//         //         console.log(3,ifOut);
//         //     }else if(isType(a)=='array'){
//         //         ifOut = arrJsonIFR(a,b);
//         //         console.log(4,ifOut);
//         //     }else if(isType(a)=='function'&&isType(b)=='function'){
//         //         ifOut = true;
//         //         console.log(5,ifOut);
//         //     };
//         //     console.log(0,ifOut);
//         // });
//     // }else{
//     //     // /* 不按顺序处理 */
//     //     arrA.map(function(a){
//     //         var aRun = true;
//     //         arrB.map(function(b){
//     //             if(aRun){
//     //                 if(isType(a)=='string'){
//     //                     ifOut = (b==a);aRun = false;
//     //                 }else if(isType(a)=='number'){
//     //                     ifOut = (b==a);aRun = false;
//     //                 }else if(isType(a)=='json'){
//     //                     for(var c in a){
//     //                         ifOut = arrJsonIFR([a[c]],b[c]);
//     //                     };
//     //                     aRun = false;
//     //                 }else if(isType(a)=='array'){
//     //                     ifOut = arrJsonIFR(a,b);aRun = false;
//     //                 }else if(isType(a)=='function'&&isType(b)=='function'){
//     //                     ifOut = (b==a);aRun = false;
//     //                 };
//     //             };
//     //         });
//     //     });
//     // };
//     return ifOut;
// };

// /* json排序 */
// function jsonSort(jsonObj,sortFn){ var arr=[],newJson = {}; for(var key in jsonObj){ arr.push(key); } if(sortFn){ arr.sort(sortFn); }else{ arr.sort(); }; var str=''; for(var s=0;s<arr.length;s++){ var sumKey = (arr.length-1),newKey = (sumKey-s); newJson[arr[s]] = jsonObj[arr[s]]; }; return newJson; };

// /* 转rbg */
// function toRgb(hex,aVal,sumVal){ var rgb = [];/*  */ if (/^\#[0-9A-F]{3}$/i.test(hex)) {/* 判断传入是否为#三位十六进制数 */ var sixHex = '#'; hex.replace(/[0-9A-F]/ig, function(kw) { sixHex += kw + kw;/* 把三位16进制数转化为六位 */ }); hex = sixHex; /* 保存回hex */ }; if (/^#[0-9A-F]{6}$/i.test(hex)) {/* 判断传入是否为#六位十六进制数 */ var sumNumber = 1; hex.replace(/[0-9A-F]{2}/ig, function(kw) { if(sumVal){ if(sumNumber==1){ var number1 = Math.round(eval('0x' + kw)-(sumVal*35)); number1>255?number1=255:''; rgb.push((number1+'').replace('-',''));/* 十六进制转化为十进制并存如数组 */ }else if(sumNumber==2){ var number2 = Math.round(eval('0x' + kw)+((sumVal*35)*(sumNumber))); number2>255?number2=255:''; rgb.push((number2+'').replace('-',''));/* 十六进制转化为十进制并存如数组 */ }else{ var number3= Math.round(eval('0x' + kw)+((sumVal*35)*(sumNumber))); number3>255?number3=255:''; rgb.push((number3+'').replace('-',''));/* 十六进制转化为十进制并存如数组 */ sumNumber = 1; }; sumNumber++; }else{ rgb.push(eval('0x' + kw));/* 十六进制转化为十进制并存如数组 */ }; }); if(aVal){ rgb.push(aVal); }else{ rgb.push(1); }; return 'rgba('+rgb.join(',')+')';/* 输出RGB格式颜色 */ } else { console.error(`颜色 ${hex} 转换出错!`); return 'rgba(0,0,0,1)'; }; };

// /* 转### */
// function toHex(rgb){ if (/^rgb\((\d{1,3}\,){2}\d{1,3}\)$/i.test(rgb)) {/* test RGB */ var hex = '#'; /* 定义十六进制颜色变量 */ rgb.replace(/\d{1,3}/g, function(kw) {/* 提取rgb数字 */ kw = parseInt(kw).toString(16); /* 转为十六进制 */ kw = kw.length < 2 ? 0 + kw : kw; /* 判断位数，保证两位 */ hex += kw; /* 拼接 */ }); return hex; /* 返回十六进制 */ } else { console.error(`颜色 ${rgb} 不对`); return '#000'; /* 输入格式错误,返回#000 */ }; };

// /* 颜色渐变阵列(颜色值#,颜色阵列次数,开始浓度,结束浓度)-返回数组内包含颜色字符串 */
// function colorTo(colorVal,sumV,starV,endV){ var fNumber=((starV-endV)/sumV), fNumbers=fNumber, okApArr=[], okApArrs=[]; if((fNumber+'')=='NaN'||!fNumber) { console.error('颜色渐变出错'); return; } for(var c=0;c<sumV; c++) { okApArr.unshift((fNumbers+endV)); fNumbers+=fNumber; } ; for(var l=0; l<okApArr.length; l++) { okApArrs.push(toRgb(colorVal, 1, okApArr[l])); } ; return okApArrs; };
// // colorTo = function(colorVal,sumV,starV,endV){ var fNumber=((starV-endV)/sumV), fNumbers=fNumber, okApArr=[], okApArrs=[]; if((fNumber+'')=='NaN'||!fNumber) { console.error('颜色渐变出错'); return; } for(var c=0;c<sumV; c++) { okApArr.unshift((fNumbers+endV)); fNumbers+=fNumber; } ; for(var l=0; l<okApArr.length; l++) { okApArrs.push(toRgb(colorVal, 1, okApArr[l])); } ; return okApArrs; },

// /* 颜色渐变(开始颜色值#,结束颜色值#,次数)-返回数组内包含颜色字符串 */
// function toColor(starColor, endColor, stepV) { /* rgb to hex */ function rgbToHex(r, g, b) { var hex = ((r << 16) | (g << 8) | b).toString(16); return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex; }; /* hex to rgb */ function hexToRgb(hex) { var rgb = []; for (var i = 1; i < 7; i += 2) { rgb.push(parseInt("0x" + hex.slice(i, i + 2))); }; return rgb; }; /* 计算渐变过渡色 */ function gradient(startColor, endColor, stepVal) { var step = (stepVal - 1); /* 将 hex 转换为rgb */ var sColor = hexToRgb(startColor), eColor = hexToRgb(endColor); /* 计算R\G\B每一步的差值 */ var rStep = (eColor[0] - sColor[0]) / step, gStep = (eColor[1] - sColor[1]) / step, bStep = (eColor[2] - sColor[2]) / step; var gradientColorArr = []; for (var i = 0; i <= step; i++) { /* 计算每一步的hex值 */ gradientColorArr.push(rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2]))); }; return gradientColorArr; }; return gradient(starColor, endColor, stepV); };

// /* 快速数据转换为js执行方法 */
// function ev(data){ if(typeof data=="string"){ return (eval('('+data+')')); }else{ return data; }; };

// /* 时间方法 */
// function dayTime(setVal,daySet,timeSetVal){ var setTimeC=(function() { var daySetVal=[]; /* var out=(new Date().getTime()+daySetVal); */ if(typeof daySet=='string') { daySetVal=daySet.split(','); } ; var out=new Date(); if(setVal) { if(daySetVal.length>0) { /* 处理年份计算 */ if(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[n]$/, '')=='')) { var setNanFen=daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[n]$/, '')=='').replace('n', ''); var setNanFenIf=setNanFen.indexOf('s')>-1; if(setNanFenIf) { setNanFen=setNanFen.replace('s', ''); setNanFen=(eval('('+setNanFen+')')); out=new Date(out.setFullYear(setNanFen)); } else { setNanFen=isNaN(setNanFen-0)?0: (setNanFen-0); out=new Date(out.setFullYear((out.getFullYear()+(eval('('+setNanFen+')'))))); } ; } ; /* 处理月份计算 */ if(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[y]$/, '')=='')) { var setYueFen=daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[y]$/, '')=='').replace('y', ''); var setYueFenIf=setYueFen.indexOf('s')>-1; console.log(setYueFenIf,setYueFen); if(setYueFenIf) { setYueFen=setYueFen.replace('s', ''); setYueFen=(eval('('+setYueFen+')')-1)+''; out=new Date(out.setMonth(setYueFen+'')); } else { setYueFen=isNaN(setYueFen-0)?0: (setYueFen-0); out=new Date(out.setMonth((out.getMonth()+(eval('('+setYueFen+')')-0)))); } ; } ; /* 处理日期计算 */ if(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[r]?$/, '')=='')) { var setRiQi=(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[r]?$/, '')=='')).replace('r', ''); var setRiQiIf=setRiQi.indexOf('s')>-1; if(setRiQiIf) { setRiQi=setRiQi.replace('s', ''); setRiQi=(eval('('+setRiQi+')')-0)+''; out=new Date(out.setDate(setRiQi)); } else { setRiQi=isNaN(setRiQi-0)?0: (setRiQi-0); out=new Date(out.setDate((out.getDate()+(eval('('+setRiQi+')')-0)))); } ; } ; /* 处理小时 */ if(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[s]$/, '')=='')) { var setXiaoSi=(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[s]$/, '')=='')); setXiaoSi=setXiaoSi.slice(0, setXiaoSi.length-1); var setXiaoSiIf=setXiaoSi[0]=='s'; if(setXiaoSiIf) { setXiaoSi=setXiaoSi.replace('s', ''); setXiaoSi=setXiaoSi.replace('s', ''); setXiaoSi=(eval('('+setXiaoSi+')')-0); out=new Date(out.setHours(setXiaoSi)); } else { setXiaoSi=setXiaoSi.replace('s', ''); setXiaoSi=isNaN(setXiaoSi-0)?0: (setXiaoSi-0); out=new Date(out.setHours((out.getHours()+(eval('('+setXiaoSi+')')-0)))); } ; } ; /* 处理分钟 */ if(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[f]$/, '')=='')) { var setFebZhong=daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[f]$/, '')=='').replace('f', ''); var setFebZhongIf=setFebZhong.indexOf('s')>-1; if(setFebZhongIf) { setFebZhong=setFebZhong.replace('s', ''); setFebZhong=(eval('('+setFebZhong+')')-0)+''; out=new Date(out.setMinutes(setFebZhong)); } else { setFebZhong=isNaN(setFebZhong-0)?0: (setFebZhong-0); out=new Date(out.setMinutes((out.getMinutes()+(eval('('+setFebZhong+')')-0)))); } ; } ; /* 处理秒 */ if(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[m]$/, '')=='')) { var setMiao=(daySetVal.find(set=>(set+'').replace(/^[s]?[0-9\(\)\+\-\*\/%]+[m]$/, '')=='')).replace('m', ''); var setMiaoIf=setMiao.indexOf('s')>-1; if(setMiaoIf) { setMiao=setMiao.replace('s', ''); setMiao=(eval('('+setMiao+')')-0)+''; out=new Date(out.setSeconds(setMiao)); } else { setMiao=isNaN(setMiao-0)?0: (setMiao-0); out=new Date(out.setSeconds((out.getSeconds()+(eval('('+setMiao+')')-0)))); } ; } ; } else if(!isNaN(daySet)) { out=new Date(out.setDate((out.getDate()+daySet))); } ; out=out.getTime(); } ; if(setVal=='TD'||setVal=='TC'||setVal=='TO'||setVal=='TDT'||setVal=='TT') { var dayTimeTimeSet=timeSetVal; if(typeof dayTimeTimeSet=='string') { if(dayTimeTimeSet.indexOf('dd')>-1) { dayTimeTimeSet=dayTimeTimeSet.replace('dd', ''); dayTimeTimeSet=dayTimeTimeSet.replace('+', ''); dayTimeTimeSet=(dayTimeTimeSet-0)*86400000; } else if(dayTimeTimeSet.indexOf('mm')>-1) { dayTimeTimeSet=dayTimeTimeSet.replace('mm', ''); dayTimeTimeSet=dayTimeTimeSet.replace('+', ''); dayTimeTimeSet=new Date(daySet).setMonth((new Date(daySet).getMonth()-0)+(dayTimeTimeSet-0)); dayTimeTimeSet=new Date(dayTimeTimeSet).getTime(); if(new Date(daySet).getTime()>dayTimeTimeSet) { dayTimeTimeSet=dayTimeTimeSet-new Date(daySet).getTime(); } else { dayTimeTimeSet=new Date(daySet).getTime()-dayTimeTimeSet; } ; } else if(dayTimeTimeSet.indexOf('yy')>-1) { dayTimeTimeSet=dayTimeTimeSet.replace('yy', ''); dayTimeTimeSet=dayTimeTimeSet.replace('+', ''); dayTimeTimeSet=new Date(daySet).setFullYear((new Date(daySet).getFullYear()-0)+(dayTimeTimeSet-0)); dayTimeTimeSet=new Date(dayTimeTimeSet).getTime(); if(new Date(daySet).getTime()>dayTimeTimeSet) { dayTimeTimeSet=dayTimeTimeSet-new Date(daySet).getTime(); } else { dayTimeTimeSet=new Date(daySet).getTime()-dayTimeTimeSet; } ; } ; } ; out=(new Date(daySet).getTime()+(dayTimeTimeSet?dayTimeTimeSet:0)); } ; return out; } )(), TimeObj=new Date(setTimeC), nowTime=TimeObj.getTime(), Y=TimeObj.getFullYear(), /* 年 */ M=numberTo(((TimeObj.getMonth()-0)+1)), /* 月 */ D=numberTo((TimeObj.getDate())), /* 日 */ H=numberTo(TimeObj.getHours()), /* 时 */ Mi=numberTo(TimeObj.getMinutes()), /* 分 */ S=numberTo(TimeObj.getSeconds()); /* 秒 */ /* 设定添加0方法 */ function numberTo(TimeVal) { var out=TimeVal; if((TimeVal+'').length==1) { return ('0'+TimeVal); } else { return (''+TimeVal); } ; } ; if(setVal==undefined||setVal=='c'||setVal=='C') { /* 需要现在时间戳 */ return nowTime; } else if(setVal=='o'||setVal=='O') { /* 需要现在的时间对象 */ return TimeObj; } else if(setVal=='d'||setVal=='D') { /* 需要现在日期 */ return (Y+'-'+M+'-'+D); } else if(setVal=='dd'||setVal=='DD'||setVal=='dt'||setVal=='DT'||setVal=='Dt'||setVal=='dT') { /* 需要现在日期2 */ return (Y+'-'+M+'-'+D+' '+H+':'+Mi+':'+S); } else if(setVal=='dn'||setVal=='DN'||setVal=='Dn'||setVal=='dN') { /* 需要年份 */ return (Y+''); } else if(setVal=='dy'||setVal=='DY'||setVal=='Dy'||setVal=='dY') { /* 需要月份 */ return ((M++)+''); } else if(setVal=='dr'||setVal=='DR'||setVal=='Dr'||setVal=='dR') { /* 需要当天日号 */ return ((D++)+''); } else if(setVal=='ds'||setVal=='DS'||setVal=='Ds'||setVal=='dS') { /* 需要时 */ return ((H)+''); } else if(setVal=='df'||setVal=='DF'||setVal=='Df'||setVal=='dF') { /* 需要分 */ return ((Mi)+''); } else if(setVal=='dm'||setVal=='DM'||setVal=='Dm'||setVal=='dM') { /* 需要秒 */ return ((S)+''); } else if(setVal=='TD') { /* 转日期 */ return (Y+'-'+M+'-'+D); } else if(setVal=='TT') { /* 转时间 */ return (H+':'+Mi+':'+S); } else if(setVal=='TDT') { /* 转日期和时间 */ return (Y+'-'+M+'-'+D+' '+H+':'+Mi+':'+S); } else if(setVal=='TC') { /* 转时间戳 */ return setTimeC; } else if(setVal=='TO') { /* 换时间对象 */ return TimeObj; } else if(setVal.type!=undefined) { console.log('无法判断对应的时间所需格式'); return false; if(setVal.type=='d'||setVal.type=='D') { /* 要日期 */ if(setVal.type=='dd'||setVal.type=='DD') { /* 要日期2带时间 */ } else if(setVal.type=='c'||setVal.type=='C') { /* 要时间戳形式 */ } else { console.log('无法判断对应的时间所需格式'); return false; } ; } ; } ; };

// /* 时间阵列 */
// function dayList(starV,endV){ var out=[],style = 'TC'; if(((starV-0)+'')!='NaN'){ style = false; }; if(starV&&endV) { var starDay=(function(){if(style){return dayTime(style, starV);}else{return starV;};})(), endDay=(function(){if(style){return dayTime(style, endV);}else{return endV;};})(), arrCon=[starDay, endDay], biDay=dayTime('TC',dayTime('TD', arrMax(arrCon))), miDay=dayTime('TC',dayTime('TD', arrMin(arrCon))), dayCon=((biDay-miDay)/86400000); for(var d=0; d<=dayCon; d++) { out.push(dayTime('TD', ((miDay+((d)*86400000))+0))); } ; } ; return out; };

// /* 数值动画(数值,结束值,每次计算回调,递增值或自定义配置对象) */
// function numberAnimation(anumNumber,toNumber,call,addIfAndSetObj,){ /* 可扩展配置对象,将复杂的参数配置,或加入:配置速度,及弹性抖动等 */ var addVal = (typeof addIfAndSetObj=='number'?addIfAndSetObj:10); if(anumNumber>toNumber){ addVal = -addVal; }else{ addVal = addVal; }; var count = anumNumber; run(); function run(){ typeof call=='function'?call(count):''; if(count!=toNumber){ var saveCount = count; count+=addVal; /* 判断最终修正 */ if(count>saveCount&&count>toNumber){ count=toNumber; }else if(count<saveCount&&count<toNumber){ count=toNumber; }; setTimeout(function(){ run(); }, 10); }else{ /* 最终修正 */ typeof call=='function'?call(count):''; }; }; };

// /* 小数四舍五入 */
// function  numberTail(num) { return (Math.round(this * Math.pow(10, num)) / Math.pow(10, num)); };

// /* 小数去尾法 */
// function  numberDeTail(num) {return ((num+'').split('.')[0]-0); };

// /* 小数进一法 */
// function  numberAddTail(num) {return (((num+'').split('.')[0]-0)+1);};

// /* 小数尾部点保留_默认保留两位_设定set后为字符串(数值,保留位数[默认2],是否自动忽略0[可选]) */
// function numberDotKeep(numVal,set,autoIf){ if(((numVal-0)+'').indexOf('NaN')>-1){console.warn('小数尾部点保留提示:传入的值非可用数值');return;}; var num = (numVal-0); if(set!=undefined) { if((num+'').indexOf('.')<0) { num=num+(1/Math.pow(10, set+1)); } ; if(autoIf){ return ((num.toFixed(set+1).replace(/[0-9]{0,1}$/, ''))-0); }else{ return (num.toFixed(set+1).replace(/[0-9]{0,1}$/,'')).replace(/[.]$/,''); }; } else { return (num.toFixed(3).replace(/[0-9]{0,1}$/, '')-0); } ; };

// /* 数值定位(定值,大值,包含0设置_布尔)-返回定值中所在位置 */
// function numberFor(set,sum,setZon){ if(sum>set) { if(setZon){ set++; return sum%set; }else{ return (sum-(set*parseInt(sum/set))); }; } else { return sum; } ; };

// /* 文件导出方法 ({url=路径,type=POST/GET,dataToUrl=是否强行将参数放置至url_布尔,data=一维数据参数}) */
// function exportFile(setJson){ if(!setJson.url) { console.error('文件导出Url不可为空'); return; } ; setJson.type.replace(/[pP][oO][sS][tT]/, function() { setJson.type='POST'; } ); setJson.type.replace(/[gG][Ee][Tt]/, function() { setJson.type='GET'; } ); /* 处理参数 */ var urlVal='?'; for(var k in setJson.data) { urlVal+=k+'='+encodeURIComponent(setJson.data[k])+'&'; } ; urlVal=urlVal.substring(0, urlVal.length-1); if(setJson.type=='POST'||setJson.type=='GET') { var formDom=document.createElement('form'), iframeDom=document.createElement('iframeDom'); iframeDom.id='fileDownIframe'; iframeDom.style.display='none'; formDom.id='fileDownFor'; formDom.style.display='none'; formDom.target='fileDownIframe'; formDom.method=setJson.type; formDom.action=setJson.dataToUrl?setJson.url+urlVal:setJson.url; if(setJson.data) { for(var d in setJson.data) { formDom.innerHTML+='<input type="text" name="'+d+'" value="'+setJson.data[d]+'" />'; } ; } ; var bodyDom=document.getElementsByTagName('body')[0]; /* bodyDom.appendChild(iframeDom); */ bodyDom.appendChild(formDom); formDom.submit(); bodyDom.removeChild(formDom); /* 删除子元素 */ } else { /* 页面切换跳转 */ window.open(setJson.url+toUrl(setJson.data)); } ; };

// /* 数据深断 */
// function objComs(objA,objB){ var out=true, ifArr=[]; if(isType(objA)!=isType(objB)) { return false; }else if(isType(objA)=='number'||isType(objA)=='string'){ if(objA==objB){return true;}; } ; if(isType(objA)=='array') { /* 判断数组长度 */ if(objA.length!=objB.length) { return false; } ; } ; if(isType(objA)=='json') { /* 判断json长度 */ var jsonSum=1; for(var s in objA[r]) { jsonSum++; } for(var n in objB[r]) { jsonSum--; } if(jsonSum!=1) { return false; } ; } ; for(var r in objA) { if((isType(objA[r])=='number'||isType(objA[r])=='string')&&objB[r]) { if(objA[r]==objB[r]) { ifArr.push(true); } else { ifArr.push(false); } ; } else if((isType(objA[r])=='array'||isType(objA[r])=='json')&&objB[r]) { ifArr.push(objCom(objA[r], objB[r])); } else { ifArr.push(false); } ; } ; for(var f=0; f<ifArr.length; f++) { if(!ifArr[f]) { out=false; } ; } ; return out; };

// /* 数据浅判断 */
// function objCom(objA,objB){ var out=true, ifArr=[]; if(isType(objA)!=isType(objB)) { return false; }else if(isType(objA)=='number'||isType(objA)=='string'){ if(objA==objB){return true;}; } ; if(isType(objA)=='array') { /* 判断数组长度 */ if(objA.length!=objB.length) { return false; } ; } ; if(isType(objA)=='json') { /* 判断json长度 */ var jsonSum=1; for(var s in objA[r]) { jsonSum++; } for(var n in objB[r]) { jsonSum--; } if(jsonSum!=1) { return false; } ; } ; for(var r in objA) { if((isType(objA[r])=='number'||isType(objA[r])=='string')&&objB[r]) { if(objA[r]==objB[r]) { ifArr.push(true); } else { ifArr.push(false); } ; } else if((isType(objA[r])=='array'||isType(objA[r])=='json')&&objB[r]) { if(isType(objA[r])==isType(objB[r])) { ifArr.push(true); } else { ifArr.push(false); } ; /* 深度判断采用 */ /* ifArr.push(objComs(objA[r],objB[r])); */ } else { ifArr.push(false); } ; } ; for(var f=0; f<ifArr.length; f++) { if(!ifArr[f]) { out=false; } ; } ; return out; };

// /* 统一拷贝 */
// function daCp(data){ if(isType(data)=='array'){ return arrCp(data); }else if(isType(data)=='json'){ return jsonCp(data); }else{ return data; }; };

// /* 统一数据深度拷贝(需要拷贝的数据,作用域标识) */
// function objCp(obj,set){ /* 对每个数据进行分类处理 */ if(isType(obj)=='array') { /* 解析数组传给自己分类反回 */ var newArr=[]; for(var rr=0; rr<obj.length; rr++) { /* 必须变量声明一次标明深度拷贝 */ var copyVal=objCp(obj[rr], set); newArr.push(copyVal); } ; return newArr; } else if(isType(obj)=="json") { /* 解析JSON传给自己分类反回 */ var json= {} ; JSON.stringify(obj, function(key, data) { if(key!=""&&obj[key]) { json[key]=objCp(obj[key], set); } ; return data; } ); return json; } else if(set) { /* 解析数据判断,直接返回原始作用域方法及切割后拷贝的数据 */ return obj; } else if(isType(obj)=='function') { /* 返回非原始作用域方法 */ return ev(obj.toString()); } else { /* 返回切割后拷贝的数据 */ return obj; } ; };

// /* 同步方法(同步定义名,同步判断值,同步后执行)) */
// function Sync(json,valIfs,callFns){ if(!json.name&&typeof json!='string'){console.log('同步昵称错误');return;}; var nowName = false,nowCallFn = false,nowChannel = 0,valIf; if(typeof json!='string'){ nowName = json.name; valIf = json.valIfs; nowCallFn = json.callFn; }else{ nowName = json; valIf = valIfs; nowCallFn = callFns; }; if(!SynChannelObj[nowName]){ SynChannelObj[nowName] = {callFnList:[],ruanFnok:[]}; }; SynChannelObj[nowName].callFnList.push(nowCallFn); SynChannelObj[nowName].nowChannel = SynChannelObj[nowName].callFnList.length; if(valIf){ var lengthNumber = 0; (function runSync(){if(lengthNumber<SynChannelObj[nowName].nowChannel){ SynChannelObj[nowName].callFnList[lengthNumber](); SynChannelObj[nowName].ruanFnok.push(SynChannelObj[nowName].callFnList[lengthNumber]); lengthNumber++; runSync(); }else{ SynChannelObj[nowName].callFnList.splice(0,SynChannelObj[nowName].callFnList.length); }; })(); }; };

// /* 数据比较求不同_未完成 */
// function conVi(json){
//     var A,B,out = false;
//     if(!json.dataA||json.dataA===''){console.error('比较数据值dataA不存在');return;};
//     if(!json.dataB||json.dataB===''){console.error('比较数据值dataB不存在');return;};
//     if(isType(json.dataA)!=isType(json.dataA)){ console.error('比较数据类型不一致');return; };
//     A = json.dataA;B = json.dataB;
//     out = (function dataPiack(Av,Bv){
//         var dataOut;
//         if(isType(Av)=='number'||isType(Bv)=='string'){
//             Av=Av+'';Bv=Bv+'';
//             /* 字符串匹配 */
//             if(Av.length>Bv.length){
//                 dataOut = Av.replace(Bv,function(a){
//                     console.log('www',a);
//                     return 'asd';
//                 });
//                 console.log('准备抛出',Av,Bv,dataOut);
//             }else{
//                 dataOut = Bv.replace(Av,'');
//             };
//         }else if(isType(Av)=='array'||isType(Av)=='json'){
//             var AA = daCp(Av),BB = daCp(Bv),daIf = 0;
//             isType(Av)=='array'?daIf=1:daIf=2;
//             dataOut = daIf==1?[]:{};
//             /* 对第一组数据进行去重 */
//             for(var aa in AA){
//                 var bvIf = true;
//                 for(var bv in Bv){
//                     // if(bvIf&&(isType(AA[aa])=='array'||isType(AA[aa])=='json')&&isType(AA[aa])==isType(Bv[bv])){
//                     //     console.log('比较1',objComs(AA[aa],Bv[bv]),AA[aa],Bv[bv]);
//                     //     if(objComs(AA[aa],Bv[bv])){
//                     //         AA[aa] = undefined;
//                     //         bvIf = false;
//                     //     };
//                     // };
//                     if(bvIf&&objComs(AA[aa],Bv[bv])){
//                         AA[aa] = undefined;
//                         bvIf = false;
//                     };
//                     // if(bvIf&&(isType(AA[aa])=='array'||isType(AA[aa])=='json')&&isType(AA[aa])==isType(Bv[bv])){
//                     //     console.log('内部执行',AA[aa],Bv[bv]);
//                     //     AA[aa] = dataPiack(AA[aa],Bv[bv]);
//                     // };
//                 };
//             };
//             for(var aad in AA){
//                 if(AA[aad]){
//                     if(daIf==1){
//                         dataOut.push(AA[aad]);
//                     }else{
//                         dataOut[aad] = AA[aad];
//                     };
//                 };
//             };
//             /* 对第二组数据进行去重 */
//             for(var bb in BB){
//                 var avIf = true;
//                 for(var av in Av){
//                     // if(avIf&&(isType(BB[bb])=='array'||isType(BB[bb])=='json')&&isType(BB[bb])==isType(Av[av])){
//                     //     if(objComs(BB[bb],Av[av])){
//                     //         BB[bb] = undefined;
//                     //         bvIf = false;
//                     //     };
//                     // };
//                     if(avIf&&objComs(BB[bb],Av[av])){
//                         BB[bb] = undefined;
//                         avIf = false;
//                     };
//                     // console.log('参数回调2',avIf,BB[bb],Av[av],objComs(BB[bb],Av[av]));
//                     // if(avIf&&(isType(BB[bb])=='array'||isType(BB[bb])=='json')&&isType(BB[bb])==isType(Av[av])){
//                     //     console.log('参数回调in2',dataPiack(BB[bb],Av[av]));
//                     //     BB[bb] = dataPiack(BB[bb],Av[av]);
//                     // };
//                 };
//             };
//             for(var bbd in BB){
//                 if(BB[bbd]){
//                     if(daIf==1){
//                         dataOut.push(BB[bbd]);
//                     }else{
//                         dataOut[bbd] = BB[bbd];
//                     };
//                 }
//             };
//         };
//         return dataOut;
//     })(A,B);
//     return out;
// };

// /* 数组运行 */
// function runArr(runArrV,ArrValV){ arrRunFn(runArrV, ArrValV); function arrRunFn(runArr, ArrVal, runNumberVal) { var runnumber=runNumberVal||0; if(isType(runArr[runnumber])=='function') { runArr[runnumber](ArrVal); } ; runnumber++; if(runArr[runnumber]) { arrRunFn(runArr, ArrValV, runnumber); } ; } ; };

// /* 忽略执行 */
// var miscRunSave = {};
// function miscRun(name,miscNumber,callFn){
//     if(!miscNumber||!callFn){
//         miscRunSave[name] ? miscRunSave[name] = false : '' ;
//         console.log('清空',miscRunSave[name]);
//     };
//     miscRunSave[name]&&miscRunSave[name].runNumber ? miscRunSave[name].runNumber-- : miscRunSave[name] = {runNumber:miscNumber} ;
//     if(miscRunSave[name]&&miscRunSave[name].runNumber<=0){
//         callFn();
//     };
// };

// /* 判断系统标识-直接执行返回ios/android/pc */
// function checkSys(){ if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { return 'ios'; } else if (/(Android)/i.test(navigator.userAgent)) { return 'android'; } else { return 'pc'; }; };

// /* 测试 */
// function test(){
//     // SynChannelObj
//     // setSave
//     console.log('tool测试1',SynChannelObj);
//     console.log('tool测试2',setSave);
// };

// /* dom大小监视 */
// function watchDomSize(Fdom,cf){ if(!Fdom) { console.warn('"watchDomSize" 未设立检查对象'); return; } ; var F1=document.createElement('div'), F2=document.createElement('div'), A1=document.createElement('div'), A2=document.createElement('div'); /* 清除避免重复建立监视 */ F1.classList.add('watchDomSize_F1'); F2.classList.add('watchDomSize_F2'); for(var f=0; f<Fdom.children.length; f++) { if(Fdom.children[f].className=='watchDomSize_F1') { Fdom.children[f].removeEventListener("scroll", scrollFn); Fdom.removeChild(Fdom.children[f]) } else if(Fdom.children[f].className=='watchDomSize_F2') { Fdom.children[f].removeEventListener("scroll", scrollFn); Fdom.removeChild(Fdom.children[f]) } ; } ; /* 写入监视 */ Fdom.append(F1); Fdom.append(F2); F1.append(A1); F2.append(A2); /* 设立父标签样式 */ Fdom.style.cssText+='display: block;'; Fdom.style.cssText+='position: relative;'; /* 设立控制子集样式1 */ F1.style.cssText+='width: 1%;'; F1.style.cssText+='height: 1%;'; F1.style.cssText+='position: absolute;'; F1.style.cssText+='bottom: 100%;'; F1.style.cssText+='left: 0%;'; F1.style.cssText+='overflow: hidden;'; /* F1.style.cssText += 'z-index: 1000;'; */ /* F1.style.cssText+='background:#f0f;'; */ /* 设立控制子集样式2 */ F2.style.cssText+='width: 1%;'; F2.style.cssText+='height: 1%;'; F2.style.cssText+='position: absolute;'; F2.style.cssText+='bottom: 100%;'; F2.style.cssText+='right: 0%;'; F2.style.cssText+='overflow: hidden;'; /* F2.style.cssText += 'z-index: 1000;'; */ /* F2.style.cssText+='background:#f0f;'; */ /* 设置控制子集内样式1 */ A1.style.cssText+='position: absolute;'; A1.style.cssText+='display: block;'; A1.style.cssText+='top: 0;'; A1.style.cssText+='left: 0;'; A1.style.cssText+='width:100%;'; A1.style.cssText+='height: 100%;'; /* 设置控制子集内样式2 */ A2.style.cssText+='position: absolute;'; A2.style.cssText+='display: block;'; A2.style.cssText+='top: 0;'; A2.style.cssText+='left: 0;'; A2.style.cssText+='width:250%;'; A2.style.cssText+='height:250%;'; function upDataFn() { /* 设立放大调整方法 */ A1.style.width=((F1.offsetWidth-0)+1)+'px'; A1.style.height=((F1.offsetHeight-0)+1)+'px'; F1.scrollLeft=F1.scrollWidth; F1.scrollTop=F1.scrollHeight; /* 设立缩小调整方法 */ F2.scrollLeft=F2.scrollWidth; F2.scrollTop=F2.scrollHeight; /* 调用回调方法 */ typeof cf=='function'?cf(): ''; } ; upDataFn(); function scrollFn(v) { upDataFn(); } ; window.addEventListener("resize", scrollFn); F1.addEventListener("scroll", scrollFn); F2.addEventListener("scroll", scrollFn); return { upFunction: upDataFn } ; };

// /* 判断页面是否有被浏览(被浏览回调,没被浏览回调) */
// function watchWinPlay(watch,notWatch){ var hiddenProperty='hidden' in document ? 'hidden': 'webkitHidden' in document ? 'webkitHidden': 'mozHidden' in document ? 'mozHidden': null; var visibilityChangeEvent=hiddenProperty.replace(/hidden/i, 'visibilitychange'); var onVisibilityChange=function() { if (!document[hiddenProperty]) { watch(); /* document.title='被发现啦(*´∇｀*)' */ } else { notWatch(); /* document.title='藏好啦(つд⊂)  ' */ } } ; document.addEventListener(visibilityChangeEvent, onVisibilityChange); };

// /* 监视json对象变化触发(对象,回调方法) */
// function watchObj(objJson,objName,callFn){
//     Object.defineProperty(objJson, objName, {
//         configurable:true,//是否可编辑
//         enumerable:true,//是否可枚举
//         set(val){//设定写入
//             callFn(val);
//         },
//     });
//     // Object.defineProperties(objJson,{
//     //     [objName]:{
//     //         configurable:true,//是否可编辑
//     //         enumerable:true,//是否可枚举
//     //     	/* value: true,//静态值-与set及get冲突 */
//     //     	/* writable: true,//是否为与本属性自身关联-与set及get冲突 */
//     //         set(val){//设定写入
//     //             console.log('s被写入,调用Vue生命周期/刷新dom/计算函数/监视函数',typeof val);
//     //             callFn(val);
//     //         },
//     //     },
//     // });
// };

// /* 数据保存 */
// function da(key,val){ if(val){ setSave.key = val; }else if(key){ return setSave.key; }; };