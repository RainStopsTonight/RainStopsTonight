      // 所有jQuery风格的类库框架都沿袭它实现链式操作
      
      function $(a, b) { //第一个构造器
          return new $.fn.init(a, b); //第二个构造器
      }
      //将原型对象放到一个名字更短更好记的属性名中
      //这是jQuery人性化的体现，也方便扩展原型方法
      $.fn = $.prototype = {
          init: function(a, b) {
              this.a = a;
              this.b = b;
          }
      }
      //共用同一个原型
      $.fn.init.prototype = $.fn;
      var a = $(1, 2);
      console.log(a instanceof $);
      console.log(a instanceof $.fn.init);
