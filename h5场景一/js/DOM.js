DOM = {};
DOM.getElesByClass = function (str, content) {
    content = content || document;
    str = str.replace(/^ +| +$/g, "");
    var aClassName = str.split(/ +/);
    var ele = content.getElementsByTagName("*");
    var a = [];
    for (var i = 0; i < aClassName.length; i++) {
        var reg = new RegExp("(^| )" + aClassName[i] + "( |$)");

        for (var j = 0; j < ele.length; j++) {
            if (reg.test(ele[j].className)) {
                a.push(ele[j]);
            }

        }
        ele = a;
    }
    return ele;
}
DOM.getIndex = function (ele) {
    var p = ele.previousSibling;
    var n = 0;
    while (p) {
        if (p.nodeType === 1) {
            n++;
        }
        p = p.previousSibling;
    }
    return n;
}
DOM.addClass = function (parent, str) {
    var reg = new RegExp("(^| )" + str + "( |$)");
    if (!reg.test(parent.className)) {
        parent.className += " " + str;
    }

}
DOM.siblings = function (ele) {
    var pre = ele.previousSibling;
    var a = [];
    while (pre) {
        if (pre.nodeType === 1) {
            a.push(pre);
        }
        pre = pre.previousSibling;
    }
    a.reverse();



var next = ele.nextSibling;
while (next) {
    if (next.nodeType === 1) {
        a.push(next);
    }
    next = next.nextSibling;
}

return a;

}
DOM.removeClass = function (ele, strClass) {
    var reg = new RegExp("(^| )" + strClass + "( |$)", "g");
    var temp = ele.className.replace("/ /g", "    ");
    ele.className = temp.replace(reg, " ");
}
DOM.addClass = function (ele, strClass) {
    var reg = new RegExp("(^| )" + strClass + "( |$)");
    if (!reg.test(ele.className)) {
        ele.className += " " + strClass;
    }
}
DOM.next = function (ele) {
    var next = ele.nextsiblings;
    while(next)
    {
        if (next.nodeType === 1) {
            return next;
        }
        next = next.nextsiblings;
    }


}
DOM.children = function (parent, str) {
    var a = [];
    var childrenNodes = parent.childNodes;

    for (var i = 0; i < childrenNodes.length; i++) {
        child = childrenNodes[i];
        if (child.nodeType === 1) {
            a.push(child);
        }
    }
    return a;

}
