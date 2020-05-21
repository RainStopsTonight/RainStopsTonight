
/**
 *  @module os - 输出设备信息
 *  @description 输出设备信息
 *  @returns {object}  包含设备信息的对象
 *  @property version，浏览器版本
 *  @property android，是否为安卓
 *  @property ios，是否为ios
 *  @property ipad，是否为ipad
 *  @property kindle，是否为kindle
 *  @property tablet，是否运行在平板上
 *  @property chrome，是否为chrome浏览器
 *  @property firefox，是否为firefox浏览器
 *  @property safari，是否为safari浏览器
 *  @property opera，是否为opera浏览器
 */

'use strict';

const _os = require('os');

exports.platForm = () => process.platform

const userAgent = window.navigator && navigator.userAgent || ""

testWebBrower = pattern => (pattern).test(userAgent);

const UA = {
    Chrome: testWebBrower(/webkit\W.*(chrome|chromium)\W/i),
    Firefox: testWebBrower(/mozilla.*\Wfirefox\W/i),
    /**
     * Gecko engine 更好辨认Firefox和其他浏览器 
     * use XulRunner.
     */
    // Gecko: testWebBrower(/mozilla(?!.*webkit).*\Wgecko\W/i),
    IE: () => {
        if (navigator.appName === "Microsoft Internet Explorer") {
            return true;
        } else if (testWebBrower(/\bTrident\b/)) {
            return true;
        } else {
            return false;
        }
    },
    Kindle: testWebBrower(/\W(kindle|silk)\W/i),
    Mobile: testWebBrower(/(iphone|ipod|((?:android)?.*?mobile)|blackberry|nokia)/i),
    Opera: testWebBrower(/opera.*\Wpresto\W|OPR/i),
    Safari: testWebBrower(/webkit\W(?!.*chrome).*safari\W/i),
    /**
     * 是否运行在平板上
     */
    Tablet: testWebBrower(/(ipad|android(?!.*mobile)|tablet)/i),
    TV: testWebBrower(/googletv|sonydtv/i),
    WebKit: testWebBrower(/webkit\W/i),
    Android: testWebBrower(/android/i),
    IOS: testWebBrower(/(ipad|iphone|ipod)/i),
    IPad: testWebBrower(/ipad/i),
    IPhone: testWebBrower(/iphone/i),
    IPod: testWebBrower(/ipod/i),
    /**
     * Return the complete UserAgent string verbatim.
     * @method userAgent
     * @ignore 
     */
    userAgent: () => {
        return userAgent;
    }
}

function getBrowserInfo() {
    let Sys = {};
    let ua = navigator.userAgent.toLowerCase();
    let s; (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

    if (Sys.ie) {
        return 'IE: ' + Sys.ie;
    }
    if (Sys.firefox) {
        return 'Firefox: ' + Sys.firefox;
    }
    if (Sys.chrome) {
        return 'Chrome: ' + Sys.chrome;
    }
    if (Sys.opera) {
        return 'Opera: ' + Sys.opera;
    }
    if (Sys.safari) {
        return 'Safari: ' + Sys.safari;
    }
}

const verinfo = (getBrowserInfo() + "").replace(/[^0-9.]/ig, "");   // 版本号

exports.device = {
    version: verinfo,
    android: UA.android,
    ios: UA.IOS,
    ipad: UA.IPad,
    kindle: UA.Kindle,
    tablet: UA.Tablet,
    chrome: UA.Chrome,
    firefox: UA.Firefox,
    safari: UA.Safari,
    opera: UA.Opera,
}









