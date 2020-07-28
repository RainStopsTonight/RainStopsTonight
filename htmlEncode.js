// 对html进行转义

function htmlEncode(str) {
    var temp = "";
    if (str.length == 0) return "";
    temp = str.replace(/&/g, "&amp;");
    temp = temp.replace(/</g, "&lt;");
    temp = temp.replace(/>/g, "&gt;");
    temp = temp.replace(/\s/g, "&nbsp;");
    temp = temp.replace(/\'/g, "&#39;");
    temp = temp.replace(/\"/g, "&quot;");
    return temp;
}
