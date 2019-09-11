//根据Id获取元素对象
function my$(id) {
    return document.getElementById(id);
}

/*
* 该函数返回的是指定格式的字符串类型的日期
*参数：data----------通过new Date()调用方法
*返回值：字符串类型日期
*
* */
function getDateToString(data) {
    var strDate;
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    var day = data.getDate();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var second = data.getSeconds();
    hour = hour > 9 ? hour : "0" + hour;
    minute = minute > 9 ? minute : "0" + minute;
    second = second > 9 ? second : "0" + second;
    strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + ":";
    return strDate;
}

// 设置任意的一个元素，移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 20;
        step = current > target ? -step : step;
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 10);
}



