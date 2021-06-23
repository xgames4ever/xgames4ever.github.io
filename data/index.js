/*xxx 目录@@
声明 ID_181118130033
执行 ID_181118130037
    注册 ID_181118130054
    逻辑 ID_181118130057
构建 ID_181118130040
    内变量 ID_181118130101
*/

// 声明 ID_181118130033
var obj = { re:function(cafn) { if(document.readyState!="complete") { document.onreadystatechange=function() { document.readyState=="complete"?cafn():{}; }; }else{ setTimeout(cafn, 0); }; } };

// 执行 ID_181118130037
obj.re(function(){
    var thiss = new obj.fn();
    // 注册 ID_181118130054
    thiss.varGetAjaxConfig = thiss.setGetAjaxConfig;//注册 获取配置
    thiss.varFinNowConfig = thiss.setFinNowConfig;//注册 确定当前配置
    thiss.varSetPro = thiss.setSetPro;//注册 设定产品
    thiss.varSetLtd = thiss.setSetLtd;//注册 设定公司信息
    thiss.varSetEmail = thiss.setSetEmail;//注册 设定邮件信息
    thiss.varSetPageShow = thiss.setSetPageShow;//注册 让页面展示
    thiss.varSetProSet = thiss.setSetProSet;//注册 单独品时处理
    thiss.varSetNewLtdS = thiss.setSetNewLtdS;//注册 单独处理公司其他方法

    // 逻辑 ID_181118130057
    thiss.varGetAjaxConfig(function(config,configAll){
        var nowConfig = thiss.varFinNowConfig(config);
        /* 单独品时处理 */
        thiss.varSetProSet(nowConfig,configAll);
        /* 单独处理公司非公司名的其他数据 */
        thiss.varSetNewLtdS(nowConfig,configAll);
        /* 以下是处理原有公司时使用 */
        // thiss.varSetPro(nowConfig,configAll);
        // thiss.varSetLtd(nowConfig,configAll);
        // thiss.varSetEmail(nowConfig,configAll);
        thiss.varSetPageShow();
    });
});

// 构建 ID_181118130040
obj.fn = function(){
    // 内变量 ID_181118130101
    var thiss = this,
        da = {
            url:{
                appname:tool.urlVal().appname&&decodeURIComponent(tool.urlVal().appname),//pro产品游戏名
                n:tool.urlVal().n&&decodeURIComponent(tool.urlVal().n),//pro产品游戏名
                t:tool.urlVal().t&&decodeURIComponent(tool.urlVal().t)//确定公司配置源
            },
            dom:{
                txtAllDom:document.getElementById('txtAll'),//邮件Dom
                /* 保留DOM */
                emailDom:document.getElementById('email'),//邮件Dom
                emailBDom:document.getElementById('emailB'),//邮件BDom
                bodyInDom:document.getElementById('bodyIn')//bodyInBDom
                /* 旧方法 */
                // notAllDom:document.getElementById('notAll'),//无公司无产品Dom
                // notProDom:document.getElementById('notPro'),//无产品Dom
                // proDom:document.getElementById('pro'),//产品Dom
                // nameDom:document.getElementById('name'),//公司名Dom
            }
        };//公共数据对象
        // SynChannelObj = {},
        // Sync = function(json,valIfs,callFns){json = json&&{name:false,valIfs:false,IfVcallFn:function(){},channel:2,}; if(!json.name&&typeof json!='string'){console.log('同步昵称错误');return;}; var nowName = false,nowCallFn = false,nowChannel = 0,valIf; if(typeof json!='string'){ nowName = json.name; valIf = json.valIfs; nowCallFn = json.callFn; }else{ nowName = json; valIf = valIfs; nowCallFn = callFns; }; if(!SynChannelObj[nowName]){ SynChannelObj[nowName] = {callFnList:[],ruanFnok:[]}; }; SynChannelObj[nowName].callFnList.push(nowCallFn); SynChannelObj[nowName].nowChannel = SynChannelObj[nowName].callFnList.length; if(valIf){ var lengthNumber = 0; (function runSync(){ if(lengthNumber<SynChannelObj[nowName].nowChannel){ SynChannelObj[nowName].callFnList[lengthNumber](); SynChannelObj[nowName].ruanFnok.push(SynChannelObj[nowName].callFnList[lengthNumber]); lengthNumber++; runSync(); }else{ SynChannelObj[nowName].callFnList.splice(0,SynChannelObj[nowName].callFnList.length); }; })(); }; };

    thiss.setGetAjaxConfig = function(call){
        /* 原生ajax请求 */
        var ajax = new XMLHttpRequest();//创建ajax对象
        ajax.open('GET','./data/config.json',true);//设定发送数据方式
        ajax.onreadystatechange = function(){//获取响应信息
            if(ajax.status=='200'&&ajax.readyState==4){
                da.configJson = eval("("+ajax.responseText+")");
                da.configJsonAll = da.configJson[0];
                da.configJson = da.configJsonAll&&da.configJsonAll.set&&da.configJsonAll.set;
                // da.configJson = configFile[0]&&configFile[0].set&&configFile[0].set;
                call(da.configJson,da.configJsonAll);
            };
        };
        ajax.send();//发送ajax数据
    };

    thiss.setFinNowConfig = function(configVal){
        var nowConfig =false;
        for(var c=0;c<configVal.length;c++){
            if(configVal[c].key == da.url.t){
                nowConfig = configVal[c];
            };
        };
        return nowConfig;
    };

    thiss.setSetPro = function(configObj,configAll){
        if(da.url.n){
            da.dom.proDom.innerHTML = da.url.n;
        }else if(da.url.appname){
            da.dom.proDom.innerHTML = da.url.appname;
        }else if(configObj){//有公司无产品
            da.dom.notProDom.innerHTML = '';
        }else{//无公司//无产品
            da.dom.notAllDom.innerHTML = '欢迎您使用本产品！';
            // da.dom.nameDom.innerHTML = '';
            da.dom.emailDom.innerHTML = configAll.set.find(function(s){return s.key==configAll.notSet;}).email;
            da.dom.emailBDom.innerHTML = configAll.set.find(function(s){return s.key==configAll.notSet;}).email;
        };
    };
    
    thiss.setSetLtd = function(configObj,configAll){
        if(configObj){//有公司
            da.dom.nameDom.innerHTML = configObj.name;
        }else if(da.url.n||da.url.appname){//无公司有产品
            da.dom.nameDom.innerHTML = configAll.set.find(function(s){return s.key==configAll.notSet;}).name;
        };
    };
    
    thiss.setSetEmail = function(configObj,configAll){
        if(configObj){//有公司
            da.dom.emailDom.innerHTML = configObj.email;
            da.dom.emailBDom.innerHTML = configObj.email;
        }else if(da.url.n||da.url.appname){//无公司有产品
            da.dom.emailDom.innerHTML = configAll.set.find(function(s){return s.key==configAll.notSet;}).email;
        };
    };

    thiss.setSetPageShow = function(){
        da.dom.bodyInDom.style.display = 'block';
    };

    thiss.setSetProSet = function(configObj,configAll){
        /* 处理产品 */
        if(da.url.n){
            da.dom.txtAllDom.innerHTML = "欢迎您使用"+da.url.n+",";
        }else if(da.url.appname){
            da.dom.txtAllDom.innerHTML = "欢迎您使用"+da.url.appname+",";
        }else{
            da.dom.txtAllDom.innerHTML = "欢迎您使用本产品！";
        };
    };

    thiss.setSetNewLtdS = function(configObj,configAll){
        /* 处理公司 */
        if(configObj){//有公司
            da.dom.emailDom.innerHTML = configObj.email;
            da.dom.emailBDom.innerHTML = configObj.email;
        }else{
            da.dom.emailDom.innerHTML = configAll.set.find(function(s){return s.key==configAll.notSet;}).email;
            da.dom.emailBDom.innerHTML = configAll.set.find(function(s){return s.key==configAll.notSet;}).email;
        };
    };

};