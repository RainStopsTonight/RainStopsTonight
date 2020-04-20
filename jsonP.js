function jsonP(url, cfg) {
      var apiUrl;
      if (typeof url === "object") {
        cfg = url;
        apiUrl = url.url;
      } else {
        apiUrl = url;
      }
      if (typeof cfg === "function") {
        cfg = {
          success: cfg,
          error: function() { },
          data: {}
        };
      } else {
        cfg = this.extend(
          {
            success: function() { },
            error: function() { },
            data: {}
          },
          cfg
        );
      }
      var _rnNum =
        +new Date() +
        Math.random()
          .toString()
          .replace("0.", "");
      var prefix = cfg.prefix || "sinajp_";
      var id = cfg.jsonpCallback || cfg.jsonpCallBack || prefix + _rnNum;

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
        window[id] = null;
        if (timer) clearTimeout(timer);
      }

      function cancel() {
        if (window[id]) {
          cleanup();
        }
      }

      window[id] = function(data) {
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
        enc(id);
      apiUrl = apiUrl.replace("?&", "?").replace("&&", "&");

      // debug('jsonp req "%s"', url);

      // create script
      script = document.createElement("script");
      script.src = apiUrl;
      target.parentNode.insertBefore(script, target);

      return cancel;
}
