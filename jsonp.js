
        function jsonp(obj) {
            //写入url地址中的函数名称，动态创建
            var callbackName = 'jsonp_callback_' + Date.now() + Math.random().toString().substr(2, 5);
            
            //创建一个script标签
            var scriptObj = document.createElement("script");
            
            obj.parames = obj.parames || '';
            if (typeof obj.parames == 'object') {
                var arr = new Array();
                for (var key in obj.parames) {
                    arr.push(key + '=' + obj.parames[key])
                }
                obj.parames = arr.join('&');
            }
            //设置标签的请求路径
            //像这样：http://localhost:3000/api?callback=jsonp_callback_153498520409635392&id=1
            scriptObj.src = obj.url + '?' + 'callback=' + callbackName + '&' + obj.parames;
 
            //将创建好的带请求的script标签添加到html的body中
            document.body.appendChild(scriptObj);
 
            //这里必须这样写window[callbackName];
            //如果写window.callbackName会报错没有定义
            window[callbackName] = function (res) {
                obj.success(res);
                //删除的时候可以这样写
                //由于请求一次会创建一个script标签和一个函数，所以每次获取到结果后就删除
                delete window.callbackName;
                document.body.removeChild(scriptObj);
            }
            
           
        jsonp({
            //请求地址
            url:'http://localhost:3000/api',
            //请求参数，对象
            parames:{
                id: 1
            },
            //成功回调
            success:function (res) {
                console.log(res)
            }
         })
