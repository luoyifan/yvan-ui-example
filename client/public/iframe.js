var rootCmp;    //D
var menuDelete; //c
var currentArea; //h
var currentId; //l
var currentDrag; //b
var lastKeepId; //M
var markerElement; //f
var markerDir; //y
var dragZoneElement; //x
var dropTarget; //m
var dragPos; //p
var dropPosition; //g
var CMP_SIMPLE = {
    dbllist: 1,
    richtext: 1,
    comments: 1,
    daterange: 1,
    excelviewer: 1,
    pdfviewer: 1,
    kanban: 1,
    pivot: 1,
    scheduler: 1,
    querybuilder: 1,
    spreadsheet: 1,
    filemanager: 1
};

// 拖动设置
//P
var dragOption = {
    // 拖入时触发
    $dragIn: function (e, i, t) {
        this.addDropMarker(webix.$$(t), webix.html.pos(t));
        return true
    },

    // 拖出时触发
    $dragOut: function (e, i, t) {
        if (!t) {
            this.addDropMarker()
        }
    },

    // 拖放
    $drop: function () {
        drop()
    },

    // 拖放标记
    addDropMarker: createMarker,

    // 拖动销毁时触发
    $dragDestroy: function () {
        this.addDropMarker();
        webix.html.remove(dragZoneElement);
        currentDrag = dragPos = dropPosition = dragZoneElement = markerElement = markerDir = null;
        return false;
    },

    // 拖动元素位置改变时触发
    $dragPos: function (e) {
        // 改变拖动影像位置
        dragZoneElement.style.left = e.x - dragPos.x + "px";
        dragZoneElement.style.top = e.y - dragPos.y + "px";
    },

    // 创建拖动对象时触发
    $dragCreate: function (e, event) {
        var t = webix.$$(event);
        if (t.config.notDesignLevel > 0) { // 元素不支持在iframe里面设计拖动
            return;
        }
        var cmp = webix.$$(currentId);
        if (!cmp || !cmp.$view.contains(t.$view)) {
            cmp = t;
        }

        if ("placeholder" === cmp.config.role) {
            // 固定元素，不允许拖动
            window.top.postMessage({
                webixtype: "show-message",
                message: "固定元素，不允许拖动"
            }, "*");

        } else if (cmp.getParentView()) {
            webix.callEvent("onDragMode", ["start"]);
            if (_.startsWith(cmp.config.id, '$')) {
                currentDrag = cmp._parent_cell.config.id;
            } else {
                currentDrag = cmp.config.id;
            }

            var offset = webix.html.offset(cmp.$view);
            var pos = webix.html.pos(event);

            dragPos = {
                x: pos.x - offset.x,
                y: pos.y - offset.y
            };

            (function (e) {
                // 创建拖动影像
                dragZoneElement = document.createElement("DIV");
                dragZoneElement.innerHTML = "<div class='" + e.$view.className + "' style='" + e.$view.style.cssText + "'>" + e.$view.innerHTML + "</div>";
                dragZoneElement.className = "webix_drag_zone";
                document.body.appendChild(dragZoneElement);
                var i = e.$view.getElementsByTagName("canvas");
                if (i.length) {
                    for (var t = i.length - 1; t >= 0; t--) {
                        dragZoneElement.getElementsByTagName("canvas")[t].getContext("2d")
                            .drawImage(i[t], 0, 0)
                    }
                }
            })(cmp);

            return document.createElement("div", {
                style: "width:0px;heiht:0px"
            })
        }
    }
};

//luoyifan _
// 创建选择框
function createArea(e) {
    if (e && e.config.id !== currentId) {
        menuDelete.hide();
        clearSelection();
        e.$view.style.position = "relative";
        currentArea = new webix.ui.area({
            container: e,
            on: {
                onDivide: function (e, i, t) {
                    var s = i ? webix.$$(currentId)["$" + i] : 0;
                    window.top.postMessage({
                        webixtype: "divide-view",
                        id: currentId,
                        mode: e,
                        name: i,
                        value: t,
                        fValue: s
                    }, "*")
                },
                onResize: function (cmp, i, name, value) {
                    var n = cmp.config.id;
                    var o = cmp.getParentView();
                    var r = o.getChildViews();
                    var a = o.index(cmp);
                    var d = r[a += "left" === i || "top" === i ? -1 : 1];
                    window.top.postMessage({
                        webixtype: "resize-view",
                        id: n,
                        source: currentId,
                        name: name,
                        value: value,
                        sibling: d.config.id,
                        fValue: cmp["$" + name],
                        fsValue: d["$" + name]
                    }, "*")
                },
                onStart: function () {
                    return webix.callEvent("onDivideMode", ["start"])
                },
                onEnd: function () {
                    return webix.callEvent("onDivideMode", ["end"])
                },
                onClear: function () {
                    webix.callEvent("onDivideMode", ["end"]);
                    clearSelection()
                }
            }
        });
    }
}

//luoyifan o
// 获取组件
function getCmp(e) {
    if (e) {
        var i = e.queryView(function (e) {
            return CMP_SIMPLE[e.name]
        }, "parent");
        return i || e
    }
}

// luoyifan u
// 创建删除菜单
function createDeleteMenu(e) {
    if (!menuDelete) {
        menuDelete = webix.ui({
            view: "contextmenu",
            css: "webix_designer_menu",
            data: ["Delete"],
            padding: 0,
            type: {
                height: 36
            },
            on: {
                onBeforeShow: function (e) {
                    var i = webix.$$(e);
                    if (!webix.$$(currentId)
                        .$view
                        .contains(i.$view)) {
                        createArea(i);
                    }
                },
                onMenuItemClick: function (e) {
                    if (e === "Delete") {
                        window.top.postMessage({webixtype: "delete-view", target: lastKeepId}, "*")
                    }
                }
            }
        })
    }
    if (e) {
        menuDelete.attachTo(e.$view)
    }
}

//luoyifan $
function createMarker(e, i) {
    if (!e) {
        dropTarget = null;
        return
    }
    webix.html.remove(markerElement);
    var t;
    if (e.config.view === 'toolbar' && (e.config.id !== currentId)) {
        return;
    }
    if (_.startsWith(e.config.id, '$') && e._parent_cell) {
        e = e._parent_cell;
    }
    e = getChoosedDom(e.$view);
    e = getCmp(webix.$$(e));

    if (currentDrag !== e.config.id && "placeholder" !== e.config.role) {

        // var targetConfig = e.config;
        // var startConfig = currentDrag || webix.DragControl.getContext().start;
        // window.markerFlag(targetConfig, startConfig);

        t = (function (e, i) {
            if (!dropPosition || e.config.id !== dropTarget) {
                dropPosition = webix.html.offset(e.$view)
            }
            var t;
            var s = i.x - dropPosition.x - dropPosition.width / 2;
            var n = i.y - dropPosition.y - dropPosition.height / 2;
            var o = Math.abs(s) * (dropPosition.height / dropPosition.width) > Math.abs(n) ? "cols" : "rows";

            if (o === 'cols') {
                // console.log("marker at ", s >= 0 ? "right" : "left");
                return s >= 0 ? "right" : "left";
            } else if (o === 'rows') {
                // console.log("marker at ", n >= 0 ? "bottom" : "top");
                return n >= 0 ? "bottom" : "top";
            }

        })(e, i);
    }


    if (markerElement) {
        if (t !== markerDir) {
            markerElement.className = "webix_designer_drop_marker " + t
        }
    } else {
        markerElement = webix.html.create("div", {
            class: "webix_designer_drop_marker " + t
        }, "&nbsp;");
    }

    e.$view.style.position = "relative";
    e.$view.appendChild(markerElement);
    dropTarget = e.config.id;
    markerDir = t
    // }
}

//luoyifan k
function drop(e) {
    if (dropTarget) {
        var i = !e;
        var t = currentDrag || e;
        if (t !== dropTarget) {
            var s = webix.$$(dropTarget);
            var n = {
                width: s.$width,
                height: s.$height
            };
            window.top.postMessage({
                webixtype: "drop-view",
                start: t,
                target: dropTarget,
                inner: i,
                sizes: n,
                pos: markerDir
            }, "*")
        } else {
            window.top.postMessage({
                webixtype: "select-view",
                id: t
            }, "*");
        }
        createMarker();
        webix.callEvent("onDragMode", ["end"])
    }
}

//luoyifan v
function clearSelection() {
    //luoyifan clearSelection
    if (currentArea) {
        currentArea.clear();
    }
    currentId = currentArea = null;
}

//luoyifan V
function createDesigner(config, keepSelected) {
    webix.ready(function () {
        if (rootCmp) {
            rootCmp.destructor()
        }
        if (config) {
            // rootCmp = webix.ui(config);
            YvanUI.wrapperWebixConfig(undefined, config);
            rootCmp = webix.ui(config);

            if (keepSelected) {
                createArea(webix.$$(lastKeepId));
            }
            createDeleteMenu(rootCmp);
            webix.DragControl.addDrag(rootCmp.$view, dragOption);
            webix.DragControl.addDrop(rootCmp.$view, dragOption, true);
        }
    })
}


function getChoosedDomWithPostion(pos) {
    var d = document.elementFromPoint(pos.x, pos.y);
    if (d === null) {
        return null;
    }
    var b = d.parentNode;
    while (b) {

        if (_.toUpper(b.tagName) === 'BODY') {
            break;
        }
        if (b.getAttribute('view_id') == currentId) {
            return b;
        }
        b = b.parentNode
    }
    return d;
}

function getChoosedDom(d) {
    if (d === null) {
        return null;
    }
    var b = d.parentNode;
    while (b) {

        if (_.toUpper(b.tagName) === 'BODY') {
            break;
        }
        if (b.getAttribute('view_id') == currentId) {
            return b;
        }
        b = b.parentNode
    }
    return d;
}

window.addEventListener("message", function (e) {
    var i = e.data;
    if (i && i.webixtype) {
        switch (i.webixtype) {
            case "init-config":
                if (rootCmp) {
                    rootCmp.destructor();
                }
                createDesigner(i.config, true);
                break;

            case "mouse-move":
                // 接收在父级 overlay 层上的鼠标事件
                if (i.pos) {
                    var d = getChoosedDomWithPostion(i.pos);
                    var l = webix.$$(d);
                    if (l) {
                        webix.callEvent("onDragMode", ["start"]);
                        createMarker(l, i.pos);
                        break;
                    }
                }
                createMarker();
                break;

            case "select-view":
                // 选择一个组件
                lastKeepId = i.id;
                createArea(webix.$$(lastKeepId));
                currentId = i.id;
                break;

            case "select-parent":

                lastKeepId = i.id;
                createArea(webix.$$(lastKeepId));
                currentId = i.id;
                break;

            case "clear-select-view":
                lastKeepId = undefined;
                currentId = undefined;
                clearSelection();
                break;
            case "mouse-up":
                // 从 frame 外部拖入组件
                var h = document.elementFromPoint(i.pos.x, i.pos.y);
                webix.$$(h);
                drop(i.context);
                break;

            case "drop-view":
                webix.callEvent("onDragMode", ["end"])
        }
    }
});

webix.ready(() => {
    webix.html.addCss(document.body, "webix_designer");
    if (!webix.env.touch && webix.env.scrollSize) {
        webix.CustomScroll.init()
    }
    webix.event(window, "resize", function () {
        rootCmp.resize()
    });
    webix.event(document.body, "click", function (e) {
        // webix.html.remove(markerElement);

        // 移除 界面上的marker
        var arr = document.getElementsByClassName("webix_designer_drop_marker");
        for(i=0; i<arr.length; i++){
            if (arr[i] != null)
                arr[i].parentNode.removeChild(arr[i]);
        }

        var i = webix.$$(e);
        if (i && i !== menuDelete && (i.config.notDesignLevel <= 0)) {
            var t = getCmp(i);

            if (t && t.config.id !== currentId) {

                if (_.startsWith(t.config.id, '$') && t._parent_cell) {
                    createArea(t._parent_cell);
                    currentId = t._parent_cell.config.id;
                    window.top.postMessage({
                        webixtype: "select-parent",
                        id: currentId
                    }, "*");
                } else {
                    createArea(t);
                    currentId = t.config.id;
                    window.top.postMessage({
                        webixtype: "select-view",
                        id: currentId
                    }, "*");
                }
            }
            if (i.config.disableClick) {
                webix.html.stopEvent(e)
            }
            // webix.html.stopEvent(e)
        }
        // console.log('currentId', currentId);
    }, {capture: true});
    createDeleteMenu();

    window.top.postMessage({webixtype: "yv-init"}, "*");
});

webix.protoUI({
    name: "area",
    $init: function (e) {
        var i = this;
        var t = webix.toNode(e.container.$view);
        this._viewobj = webix.html.create("DIV", {
            class: "webix_designer_resize_area"
        });
        this._sizes = webix.html.offset(t);
        this._createResizers();
        this._createDividers();
        this._event(document.body, webix.env.mouse.down, function (e) {
            return i._rsDown(e)
        });
        this._event(document.body, webix.env.mouse.up, function () {
            return i._rsUp()
        });
        this._event(document.body, webix.env.mouse.move, function (e) {
            return i._onmove(e)
        });
        this._event(document.body, "mouseleave", function () {
            return i._cleanResizer()
        });
        this._event(window, "resize", function () {
            return i.adjust()
        });
        this._event(document.body, "keydown", function (e) {
            return i._changeMode(e, "down")
        });
        this._event(document.body, "keyup", function (e) {
            return i._changeMode(e, "up")
        });
        t.appendChild(this._viewobj)
    },
    clear: function () {
        if (this._dragx) {
            for (var e in this._events) {
                webix.eventRemove(e);
                delete this._events[e];
            }
            webix.html.remove(this._dragx);
            webix.html.remove(this._dragy);
            webix.html.remove(this._viewobj);
            webix.html.remove(this._right);
            webix.html.remove(this._left);
            webix.html.remove(this._top);
            webix.html.remove(this._bottom);
            this._right = this._left = this._top = this._bottom = this._viewobj = this._dragx = this._dragy = null;
            this._activeView = this._activeDrag = this._divide = this._dir = this._limits = null;
            this.callEvent("onClear", [])
        }
    },
    adjust: function (e) {
        this._viewobj && (this._sizes = webix.html.offset(this.config.container.$view),
            webix.html.remove(this._dragx),
            webix.html.remove(this._dragy),
            this._createResizers(),
        e || (webix.html.remove(this._right),
            webix.html.remove(this._left),
            webix.html.remove(this._top),
            webix.html.remove(this._bottom),
            this._createDividers()))
    },
    _createResizers: function () {
        var e = this;
        ["x", "y"].forEach(function (i) {
            var t = ("y" === i ? "width" : "height");
            var s = webix.html.create("DIV", {
                class: "webix_resize_handle_" + i,
                style: t + ":" + e._sizes[t] + "px; top:" + e._sizes.y + "px; left:" + e._sizes.x + "px;"
            });
            e["_drag" + i] = document.body.appendChild(s)
        })
    },
    _createDividers: function () {
        var e = this;
        ["top", "right", "bottom", "left"].forEach(function (i) {
            var t = e._state[i].xSize;
            var s = e._sizes.y + ("bottom" === i ? e._sizes.height - 3 : 0);
            var n = e._sizes.x + ("right" === i ? e._sizes.width - 3 : 0);
            var o = webix.html.create("DIV", {
                class: "webix_divider_" + i,
                style: t + ":" + e._sizes[t] + "px; top:" + s + "px; left:" + n + "px;"
            }, "<div class='webix_divider_icon' style='display: none'></div>");
            e._event(o.firstChild, "click", webix.bind(function () {
                this.callEvent("onDivide", [i])
            }, e));
            e["_" + i] = document.body.appendChild(o)
        })
    },
    _events: {},
    _event: function (e, i, t) {
        var s = webix.event(e, i, t);
        this._events[s] = 1
    },
    _getDirection: function (e) {
        var i = (e.target.className || "").toString();
        if (-1 !== i.indexOf("webix_divider_") && "webix_divider_icon" !== i) {
            return i.replace("webix_divider_", "")
                .replace(" webix_forbidden", "")
        }
    },
    _changeMode: function (e, i) {
        this._activeDrag || !this._dir || 17 != e.keyCode && 224 != e.keyCode || ("down" == i && 1 != this._divide ? (this._divide = !0,
            this._cleanResizer()) : "up" == i && 0 != this._divide && (this._divide = !1,
            this._beforeResizeView(this._dir)))
    },
    _markResizer: function (e, i, t) {
        var s;
        if (this._cleanResizer(),
            e) {
            var n = this._state[i]
                ,
                o = e.$view.getBoundingClientRect();
            (s = this["_drag" + n.ePos]).style[n.xPos] = o[n.xPos] + "px",
                s.style[n.xSize] = e["$" + n.xSize] + "px",
            "right" != i && "bottom" != i || (s.style[n.eProp] = o[n.eProp] + (o[n.ySize] - 3) + "px")
        } else {
            s = this["_" + i],
                webix.html.addCss(s, "webix_forbidden", !0),
            t && window.top.postMessage({
                webixtype: "show-message",
                message: {
                    text: "Resizing is impossible! <br> Try <span class='webix_strong'>Ctrl+Drag</span> or <span class='webix_strong'>Button click</span>",
                    expire: 4e3
                }
            }, "*");
        }
        this._resizeMarker = s
    },
    _cleanResizer: function () {
        if (this._moveTimeout) {
            clearTimeout(this._moveTimeout);
        }
        if (this._resizeMarker && !this._activeDrag) {
            this.adjust(!0);
            webix.html.removeCss(this._resizeMarker, "webix_forbidden");
            this._resizeMarker = null
        }
    },
    _setLimits: function () {
        var e = this._dir;
        var i = this._state[e];
        if (this._limits = {
            left: this._sizes[i.ePos],
            right: this._sizes[i.ePos] + this._sizes[i.ySize]
        },
            !this._divide) {
            var t = this._activeView.getParentView();
            if (t && t.config.cols && ("left" == e || "right" == e) || t.config.rows && ("top" == e || "bottom" == e)) {
                var s = webix.html.offset(t.$view);
                "left" == e || "top" == e ? this._limits.left = s[i.ePos] : this._limits.right = s[i.ePos] + s[i.ySize]
            }
        }
    },
    _onmove: function (e) {
        var i = this;
        if (this._moveTimeout && clearTimeout(this._moveTimeout),
        this._activeDrag && this._activeView) {
            var t = webix.html.pos(e)[this._epos];
            if (this._limits.left >= t - 10 || this._limits.right <= t + 10) {
                return;
            }
            this._pos = t,
                this["_drag" + this._epos].style[this._eprop] = this._pos + "px"
        } else {
            var s = this._getDirection(e);
            s ? this._moveTimeout = webix.delay(function () {
                i.config.container.$view && (i._dir = s,
                    i._divide = e.ctrlKey || e.metaKey,
                    i._activeView = i._divide ? i.config.container : i._beforeResizeView(s))
            }, "", "", 50) : (this._cleanResizer(),
                this._dir = null)
        }
    },
    _rsDown: function (e) {
        var i = this._getDirection(e);
        if (i) {
            this._dir = i,
                this._epos = this._state[i].ePos,
                this._eprop = this._state[i].eProp,
                this._startpos = webix.html.pos(e)[this._epos];
            var t = e.ctrlKey || e.metaKey;
            webix.isUndefined(this._divide) || this._divide === t || this._cleanResizer(),
                this._divide = t,
                this._activeView = this._divide ? this.config.container : this._beforeResizeView(i, !0),
            this._activeView && (this._setLimits(),
                this._activeDrag = !0,
                this.callEvent("onStart", []))
        }
    },
    _rsUp: function () {
        if (this._epos && this._pos && this._pos !== this._startpos) {
            var e = this._state[this._dir].ySize
                ,
                i = this._pos - this._startpos;
            "right" != this._dir && "bottom" != this._dir || (i = -i),
                this._divide ? this.callEvent("onDivide", [this._dir, e, Math.abs(i)]) : this.callEvent("onResize", [this._activeView, this._dir, e, i])
        } else {
            this._cleanResizer();
        }
        this._dir = this._epos = this._eprop = this._limits = null;
        this._activeView = this._activeDrag = null;
        this._size = this._startsize = 0;
        this.callEvent("onEnd", []);
    },
    _state: {
        left: {
            ePos: "x",
            eProp: "left",
            xSize: "height",
            xPos: "top",
            ySize: "width"
        },
        right: {
            ePos: "x",
            eProp: "left",
            xSize: "height",
            xPos: "top",
            ySize: "width"
        },
        top: {
            ePos: "y",
            eProp: "top",
            xSize: "width",
            xPos: "left",
            ySize: "height"
        },
        bottom: {
            ePos: "y",
            eProp: "top",
            xSize: "width",
            xPos: "left",
            ySize: "height"
        }
    },
    _beforeResizeView: function (e, i) {
        var t = this._getResizedView(this.config.container, e);
        this._markResizer(t, e, i);
        return t
    },
    _getResizedView: function (e, i) {
        var t = e.getParentView();
        if (!t) {
            return null;
        }
        var s = t.getChildViews();
        var n = t.index ? t.index(e) : 0;
        return ("top" === i || "left" === i) && 0 === n || ("bottom" === i || "right" === i) && n === s.length - 1 || ("top" === i || "bottom" === i) && t.config.cols || ("right" === i || "left" === i) && t.config.rows ? this._getResizedView(t, i) : e
    }
}, webix.EventSystem, webix.Settings);
