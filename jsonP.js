function jsonP(url) {
      if (typeof url !== 'object' || url === null)  return
      var apiUrl;apiUrl = url.url;
      url = Object.assign({
          {
            success: function() { },
            error: function() { },
            data: {}
          },
          url
      })
      var _rnNum =
        +new Date() +
        Math.random()
          .toString()
          .replace("0.", "");
      var prefix = cfg.prefix || "xxxjp_";
      var jsonpCallback = url.jsonpCallback
      
      var param = cfg.param || "callback";
      var timeout = null != cfg.timeout ? cfg.timeout : 10000;
      var enc = encodeURIComponent;
      var target = document.getElementsByTagName("script")[0] || document.head;
      var script;
      var timer;
      if (timeout) {
        timer = setTimeout(function() {
          cleanup();
          cfg.error();
        }, timeout);
      }

      function cleanup() {
        if (script.parentNode) script.parentNode.removeChild(script);
        window[jsonpCallback] = null;
        if (timer) clearTimeout(timer);
      }

      function cancel() {
        if (window[jsonpCallback]) {
          cleanup();
        }
      }

      window[jsonpCallback] = function(data) {
        // debug('jsonp got', data);
        cleanup();
        // if (fn) fn(null, data);
        cfg.success(data);
      };

      // add qs component
      var otherParam = this.toQueryString(cfg.data);
      apiUrl +=
        (~apiUrl.indexOf("?") ? "&" : "?") +
        otherParam +
        "&" +
        param +
        "=" +
        enc(jsonpCallback);
      apiUrl = apiUrl.replace("?&", "?").replace("&&", "&");

      // debug('jsonp req "%s"', url);

      // create script
      script = document.createElement("script");
      script.src = apiUrl;
      target.parentNode.insertBefore(script, target);

      return cancel;
}
