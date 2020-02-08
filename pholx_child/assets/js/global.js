function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }

    function F(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }

    function M() {
        this.expando = n.expando + M.uid++
    }

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", o = 0; f = m[o++];)
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c)
            for (k = 0; f = g[k++];) Z.test(f.type || "") && c.push(f);
        return l
    }

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Ma(a) {
        if (a in La) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = Ka.length; c--;)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        var e = {},
            f = a === tb;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function zb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.2",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a))
                for (c = a.length; c > d && b.call(a[d], d, a[d]) !== !1; d++);
            else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function(a) {
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    } if (!(!c.qsa || A[a + " "] || q && q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; h--;) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            var a = [];
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function pa() {}

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d)
                    for (j = ua(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e && !d.relative[a[e].type]; e++);
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                } return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++];)
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                } k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        for (o = 0; q = b[o++];) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                for (; s--;) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                for (c = a; c = c.parentNode;) g.unshift(c);
                for (c = b; c = c.parentNode;) h.unshift(c);
                for (; g[d] === h[d];) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), !(!c.matchesSelector || !p || A[b + " "] || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                for (; b = a[d++];) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);
        return pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }, h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                for (i = W.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);)
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1)
                    for (c = g.shift(); ++h < f.length;) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        for (var c;
                            (c = n.inArray(b, f, c)) > -1;) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var i, j, k, b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                };
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    }), n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    for (; c--;) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
    var ba = /<|&#?\w+;/;
    ! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                        return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(G) || [""], j = b.length; j--;) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(G) || [""], j = b.length; j--;)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0;
                    (f = h[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, c = 0;
                        (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            for (h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; b--;) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
            HTML: "block",
            BODY: "block"
        },
        Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        function i() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
            var d = a.getComputedStyle(h);
            b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
        }
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), n.extend(l, {
            pixelPosition: function() {
                return i(), b
            },
            boxSizingReliable: function() {
                return null == c && i(), c
            },
            pixelMarginRight: function() {
                return null == c && i(), e
            },
            reliableMarginLeft: function() {
                return null == c && i(), f
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild(d.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
            }
        }))
    }();
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) : void 0
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? (1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(G) || []; c = this[i++];)
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(G) || []; c = this[i++];)
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            } : function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = n(this), f = a.match(G) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)) : void 0
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = p[g++]) && !b.isPropagationStopped();) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href, n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h)
                                for (h = {}; b = ob.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }, n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === n.css(a, "position");) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
}),
function($) {
    function appeared(selector) {
        return $(selector).filter(function() {
            return $(this).is(":appeared")
        })
    }

    function process() {
        check_lock = !1;
        for (var index = 0, selectorsLength = selectors.length; selectorsLength > index; index++) {
            var $appeared = appeared(selectors[index]);
            if ($appeared.trigger("appear", [$appeared]), $prior_appeared[index]) {
                var $disappeared = $prior_appeared[index].not($appeared);
                $disappeared.trigger("disappear", [$disappeared])
            }
            $prior_appeared[index] = $appeared
        }
    }

    function add_selector(selector) {
        selectors.push(selector), $prior_appeared.push()
    }
    var selectors = [],
        check_binded = !1,
        check_lock = !1,
        defaults = {
            interval: 250,
            force_process: !1
        },
        $window = $(window),
        $prior_appeared = [];
    $.expr[":"].appeared = function(element) {
        var $element = $(element);
        if (!$element.is(":visible")) return !1;
        var window_left = $window.scrollLeft(),
            window_top = $window.scrollTop(),
            offset = $element.offset(),
            left = offset.left,
            top = offset.top;
        return top + $element.height() >= window_top && top - ($element.data("appear-top-offset") || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data("appear-left-offset") || 0) <= window_left + $window.width() ? !0 : !1
    }, $.fn.extend({
        appear: function(options) {
            var opts = $.extend({}, defaults, options || {}),
                selector = this.selector || this;
            if (!check_binded) {
                var on_check = function() {
                    check_lock || (check_lock = !0, setTimeout(process, opts.interval))
                };
                $(window).scroll(on_check).resize(on_check), check_binded = !0
            }
            return opts.force_process && setTimeout(process, opts.interval), add_selector(selector), $(selector)
        }
    }), $.extend({
        force_appear: function() {
            return check_binded ? (process(), !0) : !1
        }
    })
}(function() {
    return "undefined" != typeof module ? require("jquery") : jQuery
}()), ! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.SignaturePad = e()
}(this, function() {
    "use strict";

    function t(t, e, i) {
        this.x = t, this.y = e, this.time = i || (new Date).getTime()
    }

    function e(t, e, i, o) {
        this.startPoint = t, this.control1 = e, this.control2 = i, this.endPoint = o
    }

    function i(t, e, i) {
        var o, n, s, r = null,
            h = 0;
        i || (i = {});
        var a = function() {
            h = !1 === i.leading ? 0 : Date.now(), r = null, s = t.apply(o, n), r || (o = n = null)
        };
        return function() {
            var c = Date.now();
            h || !1 !== i.leading || (h = c);
            var u = e - (c - h);
            return o = this, n = arguments, 0 >= u || u > e ? (r && (clearTimeout(r), r = null), h = c, s = t.apply(o, n), r || (o = n = null)) : r || !1 === i.trailing || (r = setTimeout(a, u)), s
        }
    }

    function o(t, e) {
        var n = this,
            s = e || {};
        this.velocityFilterWeight = s.velocityFilterWeight || .7, this.minWidth = s.minWidth || .5, this.maxWidth = s.maxWidth || 2.5, this.throttle = "throttle" in s ? s.throttle : 16, this._strokeMoveUpdate = this.throttle ? i(o.prototype._strokeUpdate, this.throttle) : o.prototype._strokeUpdate, this.dotSize = s.dotSize || function() {
            return (this.minWidth + this.maxWidth) / 2
        }, this.penColor = s.penColor || "black", this.backgroundColor = s.backgroundColor || "rgba(0,0,0,0)", this.onBegin = s.onBegin, this.onEnd = s.onEnd, this._canvas = t, this._ctx = t.getContext("2d"), this.clear(), this._handleMouseDown = function(t) {
            1 === t.which && (n._mouseButtonDown = !0, n._strokeBegin(t))
        }, this._handleMouseMove = function(t) {
            n._mouseButtonDown && n._strokeMoveUpdate(t)
        }, this._handleMouseUp = function(t) {
            1 === t.which && n._mouseButtonDown && (n._mouseButtonDown = !1, n._strokeEnd(t))
        }, this._handleTouchStart = function(t) {
            if (1 === t.targetTouches.length) {
                var e = t.changedTouches[0];
                n._strokeBegin(e)
            }
        }, this._handleTouchMove = function(t) {
            t.preventDefault();
            var e = t.targetTouches[0];
            n._strokeMoveUpdate(e)
        }, this._handleTouchEnd = function(t) {
            t.target === n._canvas && (t.preventDefault(), n._strokeEnd(t))
        }, this.on()
    }
    return t.prototype.velocityFrom = function(t) {
        return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 1
    }, t.prototype.distanceTo = function(t) {
        return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
    }, t.prototype.equals = function(t) {
        return this.x === t.x && this.y === t.y && this.time === t.time
    }, e.prototype.length = function() {
        for (var t = 0, e = void 0, i = void 0, o = 0; 10 >= o; o += 1) {
            var n = o / 10,
                s = this._point(n, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x),
                r = this._point(n, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
            if (o > 0) {
                var h = s - e,
                    a = r - i;
                t += Math.sqrt(h * h + a * a)
            }
            e = s, i = r
        }
        return t
    }, e.prototype._point = function(t, e, i, o, n) {
        return e * (1 - t) * (1 - t) * (1 - t) + 3 * i * (1 - t) * (1 - t) * t + 3 * o * (1 - t) * t * t + n * t * t * t
    }, o.prototype.clear = function() {
        var t = this._ctx,
            e = this._canvas;
        t.fillStyle = this.backgroundColor, t.clearRect(0, 0, e.width, e.height), t.fillRect(0, 0, e.width, e.height), this._data = [], this._reset(), this._isEmpty = !0
    }, o.prototype.fromDataURL = function(t) {
        var e = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = new Image,
            n = i.ratio || window.devicePixelRatio || 1,
            s = i.width || this._canvas.width / n,
            r = i.height || this._canvas.height / n;
        this._reset(), o.src = t, o.onload = function() {
            e._ctx.drawImage(o, 0, 0, s, r)
        }, this._isEmpty = !1
    }, o.prototype.toDataURL = function(t) {
        var e;
        switch (t) {
            case "image/svg+xml":
                return this._toSVG();
            default:
                for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), n = 1; i > n; n++) o[n - 1] = arguments[n];
                return (e = this._canvas).toDataURL.apply(e, [t].concat(o))
        }
    }, o.prototype.on = function() {
        this._handleMouseEvents(), this._handleTouchEvents()
    }, o.prototype.off = function() {
        this._canvas.removeEventListener("mousedown", this._handleMouseDown), this._canvas.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), this._canvas.removeEventListener("touchstart", this._handleTouchStart), this._canvas.removeEventListener("touchmove", this._handleTouchMove), this._canvas.removeEventListener("touchend", this._handleTouchEnd)
    }, o.prototype.isEmpty = function() {
        return this._isEmpty
    }, o.prototype._strokeBegin = function(t) {
        this._data.push([]), this._reset(), this._strokeUpdate(t), "function" == typeof this.onBegin && this.onBegin(t)
    }, o.prototype._strokeUpdate = function(t) {
        var e = t.clientX,
            i = t.clientY,
            o = this._createPoint(e, i),
            n = this._addPoint(o),
            s = n.curve,
            r = n.widths;
        s && r && this._drawCurve(s, r.start, r.end), this._data[this._data.length - 1].push({
            x: o.x,
            y: o.y,
            time: o.time,
            color: this.penColor
        })
    }, o.prototype._strokeEnd = function(t) {
        var e = this.points.length > 2,
            i = this.points[0];
        if (!e && i && this._drawDot(i), i) {
            var o = this._data[this._data.length - 1],
                n = o[o.length - 1];
            i.equals(n) || o.push({
                x: i.x,
                y: i.y,
                time: i.time,
                color: this.penColor
            })
        }
        "function" == typeof this.onEnd && this.onEnd(t)
    }, o.prototype._handleMouseEvents = function() {
        this._mouseButtonDown = !1, this._canvas.addEventListener("mousedown", this._handleMouseDown), this._canvas.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp)
    }, o.prototype._handleTouchEvents = function() {
        this._canvas.style.msTouchAction = "none", this._canvas.style.touchAction = "none", this._canvas.addEventListener("touchstart", this._handleTouchStart), this._canvas.addEventListener("touchmove", this._handleTouchMove), this._canvas.addEventListener("touchend", this._handleTouchEnd)
    }, o.prototype._reset = function() {
        this.points = [], this._lastVelocity = 0, this._lastWidth = (this.minWidth + this.maxWidth) / 2, this._ctx.fillStyle = this.penColor
    }, o.prototype._createPoint = function(e, i, o) {
        var n = this._canvas.getBoundingClientRect();
        return new t(e - n.left, i - n.top, o || (new Date).getTime())
    }, o.prototype._addPoint = function(t) {
        var i = this.points,
            o = void 0;
        if (i.push(t), i.length > 2) {
            3 === i.length && i.unshift(i[0]), o = this._calculateCurveControlPoints(i[0], i[1], i[2]);
            var n = o.c2;
            o = this._calculateCurveControlPoints(i[1], i[2], i[3]);
            var s = o.c1,
                r = new e(i[1], n, s, i[2]),
                h = this._calculateCurveWidths(r);
            return i.shift(), {
                curve: r,
                widths: h
            }
        }
        return {}
    }, o.prototype._calculateCurveControlPoints = function(e, i, o) {
        var n = e.x - i.x,
            s = e.y - i.y,
            r = i.x - o.x,
            h = i.y - o.y,
            a = {
                x: (e.x + i.x) / 2,
                y: (e.y + i.y) / 2
            },
            c = {
                x: (i.x + o.x) / 2,
                y: (i.y + o.y) / 2
            },
            u = Math.sqrt(n * n + s * s),
            d = Math.sqrt(r * r + h * h),
            l = a.x - c.x,
            v = a.y - c.y,
            p = d / (u + d),
            _ = {
                x: c.x + l * p,
                y: c.y + v * p
            },
            y = i.x - _.x,
            f = i.y - _.y;
        return {
            c1: new t(a.x + y, a.y + f),
            c2: new t(c.x + y, c.y + f)
        }
    }, o.prototype._calculateCurveWidths = function(t) {
        var e = t.startPoint,
            i = t.endPoint,
            o = {
                start: null,
                end: null
            },
            n = this.velocityFilterWeight * i.velocityFrom(e) + (1 - this.velocityFilterWeight) * this._lastVelocity,
            s = this._strokeWidth(n);
        return o.start = this._lastWidth, o.end = s, this._lastVelocity = n, this._lastWidth = s, o
    }, o.prototype._strokeWidth = function(t) {
        return Math.max(this.maxWidth / (t + 1), this.minWidth)
    }, o.prototype._drawPoint = function(t, e, i) {
        var o = this._ctx;
        o.moveTo(t, e), o.arc(t, e, i, 0, 2 * Math.PI, !1), this._isEmpty = !1
    }, o.prototype._drawCurve = function(t, e, i) {
        var o = this._ctx,
            n = i - e,
            s = Math.floor(t.length());
        o.beginPath();
        for (var r = 0; s > r; r += 1) {
            var h = r / s,
                a = h * h,
                c = a * h,
                u = 1 - h,
                d = u * u,
                l = d * u,
                v = l * t.startPoint.x;
            v += 3 * d * h * t.control1.x, v += 3 * u * a * t.control2.x, v += c * t.endPoint.x;
            var p = l * t.startPoint.y;
            p += 3 * d * h * t.control1.y, p += 3 * u * a * t.control2.y, p += c * t.endPoint.y;
            var _ = e + c * n;
            this._drawPoint(v, p, _)
        }
        o.closePath(), o.fill()
    }, o.prototype._drawDot = function(t) {
        var e = this._ctx,
            i = "function" == typeof this.dotSize ? this.dotSize() : this.dotSize;
        e.beginPath(), this._drawPoint(t.x, t.y, i), e.closePath(), e.fill()
    }, o.prototype._fromData = function(e, i, o) {
        for (var n = 0; n < e.length; n += 1) {
            var s = e[n];
            if (s.length > 1)
                for (var r = 0; r < s.length; r += 1) {
                    var h = s[r],
                        a = new t(h.x, h.y, h.time),
                        c = h.color;
                    if (0 === r) this._reset(), this._addPoint(a);
                    else if (r !== s.length - 1) {
                        var u = this._addPoint(a),
                            d = u.curve,
                            l = u.widths;
                        d && l && i(d, l, c)
                    }
                } else this._reset(), o(s[0])
        }
    }, o.prototype._toSVG = function() {
        var t = this,
            e = this._data,
            i = this._canvas,
            o = Math.max(window.devicePixelRatio || 1, 1),
            n = i.width / o,
            s = i.height / o,
            r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        r.setAttributeNS(null, "width", i.width), r.setAttributeNS(null, "height", i.height), this._fromData(e, function(t, e, i) {
            var o = document.createElement("path");
            if (!(isNaN(t.control1.x) || isNaN(t.control1.y) || isNaN(t.control2.x) || isNaN(t.control2.y))) {
                var n = "M " + t.startPoint.x.toFixed(3) + "," + t.startPoint.y.toFixed(3) + " C " + t.control1.x.toFixed(3) + "," + t.control1.y.toFixed(3) + " " + t.control2.x.toFixed(3) + "," + t.control2.y.toFixed(3) + " " + t.endPoint.x.toFixed(3) + "," + t.endPoint.y.toFixed(3);
                o.setAttribute("d", n), o.setAttribute("stroke-width", (2.25 * e.end).toFixed(3)), o.setAttribute("stroke", i), o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "round"), r.appendChild(o)
            }
        }, function(e) {
            var i = document.createElement("circle"),
                o = "function" == typeof t.dotSize ? t.dotSize() : t.dotSize;
            i.setAttribute("r", o), i.setAttribute("cx", e.x), i.setAttribute("cy", e.y), i.setAttribute("fill", e.color), r.appendChild(i)
        });
        var h = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ' + n + " " + s + '" width="' + n + '" height="' + s + '">',
            a = r.innerHTML;
        if (void 0 === a) {
            var c = document.createElement("dummy"),
                u = r.childNodes;
            c.innerHTML = "";
            for (var d = 0; d < u.length; d += 1) c.appendChild(u[d].cloneNode(!0));
            a = c.innerHTML
        }
        var l = h + a + "</svg>";
        return "data:image/svg+xml;base64," + btoa(l)
    }, o.prototype.fromData = function(t) {
        var e = this;
        this.clear(), this._fromData(t, function(t, i) {
            return e._drawCurve(t, i.start, i.end)
        }, function(t) {
            return e._drawDot(t)
        }), this._data = t
    }, o.prototype.toData = function() {
        return this._data
    }, o
}), ! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], function(b) {
        a(b, window, document)
    }) : "object" == typeof module && module.exports ? module.exports = a(require("jquery"), window, document) : a(jQuery, window, document)
}(function(a, b, c, d) {
    "use strict";

    function e(b, c) {
        this.a = a(b), this.b = a.extend({}, h, c), this.ns = "." + f + g++, this.d = Boolean(b.setSelectionRange), this.e = Boolean(a(b).attr("placeholder"))
    }
    var f = "intlTelInput",
        g = 1,
        h = {
            allowDropdown: !0,
            autoHideDialCode: !0,
            autoPlaceholder: "polite",
            customPlaceholder: null,
            dropdownContainer: "",
            excludeCountries: [],
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: "",
            initialCountry: "",
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            preferredCountries: ["us", "gb"],
            separateDialCode: !1,
            utilsScript: ""
        },
        i = {
            b: 38,
            c: 40,
            d: 13,
            e: 27,
            f: 43,
            A: 65,
            Z: 90,
            j: 32,
            k: 9
        },
        j = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
    a(b).on("load", function() {
        a.fn[f].windowLoaded = !0
    }), e.prototype = {
        _a: function() {
            return this.b.nationalMode && (this.b.autoHideDialCode = !1), this.b.separateDialCode && (this.b.autoHideDialCode = this.b.nationalMode = !1), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (a("body").addClass("iti-mobile"), this.b.dropdownContainer || (this.b.dropdownContainer = "body")), this.h = new a.Deferred, this.i = new a.Deferred, this.s = {}, this._b(), this._f(), this._h(), this._i(), this._i2(), [this.h, this.i]
        },
        _b: function() {
            this._d(), this._d2(), this._e()
        },
        _c: function(a, b, c) {
            b in this.q || (this.q[b] = []);
            var d = c || 0;
            this.q[b][d] = a
        },
        _d: function() {
            if (this.b.onlyCountries.length) {
                var a = this.b.onlyCountries.map(function(a) {
                    return a.toLowerCase()
                });
                this.p = k.filter(function(b) {
                    return a.indexOf(b.iso2) > -1
                })
            } else if (this.b.excludeCountries.length) {
                var b = this.b.excludeCountries.map(function(a) {
                    return a.toLowerCase()
                });
                this.p = k.filter(function(a) {
                    return -1 === b.indexOf(a.iso2)
                })
            } else this.p = k
        },
        _d2: function() {
            this.q = {};
            for (var a = 0; a < this.p.length; a++) {
                var b = this.p[a];
                if (this._c(b.iso2, b.dialCode, b.priority), b.areaCodes)
                    for (var c = 0; c < b.areaCodes.length; c++) this._c(b.iso2, b.dialCode + b.areaCodes[c])
            }
        },
        _e: function() {
            this.preferredCountries = [];
            for (var a = 0; a < this.b.preferredCountries.length; a++) {
                var b = this.b.preferredCountries[a].toLowerCase(),
                    c = this._y(b, !1, !0);
                c && this.preferredCountries.push(c)
            }
        },
        _f: function() {
            this.a.attr("autocomplete", "off");
            var b = "intl-tel-input";
            this.b.allowDropdown && (b += " allow-dropdown"), this.b.separateDialCode && (b += " separate-dial-code"), this.a.wrap(a("<div>", {
                "class": b
            })), this.k = a("<div>", {
                "class": "flag-container"
            }).insertBefore(this.a);
            var c = a("<div>", {
                "class": "selected-flag"
            });
            c.appendTo(this.k), this.l = a("<div>", {
                "class": "iti-flag"
            }).appendTo(c), this.b.separateDialCode && (this.t = a("<div>", {
                "class": "selected-dial-code"
            }).appendTo(c)), this.b.allowDropdown ? (c.attr("tabindex", "0"), a("<div>", {
                "class": "iti-arrow"
            }).appendTo(c), this.m = a("<ul>", {
                "class": "country-list hide"
            }), this.preferredCountries.length && (this._g(this.preferredCountries, "preferred"), a("<li>", {
                "class": "divider"
            }).appendTo(this.m)), this._g(this.p, ""), this.o = this.m.children(".country"), this.b.dropdownContainer ? this.dropdown = a("<div>", {
                "class": "intl-tel-input iti-container"
            }).append(this.m) : this.m.appendTo(this.k)) : this.o = a(), this.b.hiddenInput && (this.hiddenInput = a("<input>", {
                type: "hidden",
                name: this.b.hiddenInput
            }).insertBefore(this.a))
        },
        _g: function(a, b) {
            for (var c = "", d = 0; d < a.length; d++) {
                var e = a[d];
                c += "<li class='country " + b + "' data-dial-code='" + e.dialCode + "' data-country-code='" + e.iso2 + "'>", c += "<div class='flag-box'><div class='iti-flag " + e.iso2 + "'></div></div>", c += "<span class='country-name'>" + e.name + "</span>", c += "<span class='dial-code'>+" + e.dialCode + "</span>", c += "</li>"
            }
            this.m.append(c)
        },
        _h: function() {
            var a = this.a.val();
            this._af(a) && (!this._isRegionlessNanp(a) || this.b.nationalMode && !this.b.initialCountry) ? this._v(a) : "auto" !== this.b.initialCountry && (this.b.initialCountry ? this._z(this.b.initialCountry.toLowerCase()) : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, a || this._z(this.j)), a || this.b.nationalMode || this.b.autoHideDialCode || this.b.separateDialCode || this.a.val("+" + this.s.dialCode)), a && this._u(a)
        },
        _i: function() {
            this._j(), this.b.autoHideDialCode && this._l(), this.b.allowDropdown && this._i1(), this.hiddenInput && this._initHiddenInputListener()
        },
        _initHiddenInputListener: function() {
            var a = this,
                b = this.a.closest("form");
            b.length && b.submit(function() {
                a.hiddenInput.val(a.getNumber())
            })
        },
        _i1: function() {
            var a = this,
                b = this.a.closest("label");
            b.length && b.on("click" + this.ns, function(b) {
                a.m.hasClass("hide") ? a.a.focus() : b.preventDefault()
            }), this.l.parent().on("click" + this.ns, function() {
                !a.m.hasClass("hide") || a.a.prop("disabled") || a.a.prop("readonly") || a._n()
            }), this.k.on("keydown" + a.ns, function(b) {
                !a.m.hasClass("hide") || b.which != i.b && b.which != i.c && b.which != i.j && b.which != i.d || (b.preventDefault(), b.stopPropagation(), a._n()), b.which == i.k && a._ac()
            })
        },
        _i2: function() {
            var c = this;
            this.b.utilsScript ? a.fn[f].windowLoaded ? a.fn[f].loadUtils(this.b.utilsScript, this.i) : a(b).on("load", function() {
                a.fn[f].loadUtils(c.b.utilsScript, c.i)
            }) : this.i.resolve(), "auto" === this.b.initialCountry ? this._i3() : this.h.resolve()
        },
        _i3: function() {
            a.fn[f].autoCountry ? this.handleAutoCountry() : a.fn[f].startedLoadingAutoCountry || (a.fn[f].startedLoadingAutoCountry = !0, "function" == typeof this.b.geoIpLookup && this.b.geoIpLookup(function(b) {
                a.fn[f].autoCountry = b.toLowerCase(), setTimeout(function() {
                    a(".intl-tel-input input").intlTelInput("handleAutoCountry")
                })
            }))
        },
        _j: function() {
            var a = this;
            this.a.on("keyup" + this.ns, function() {
                a._v(a.a.val()) && a._triggerCountryChange()
            }), this.a.on("cut" + this.ns + " paste" + this.ns, function() {
                setTimeout(function() {
                    a._v(a.a.val()) && a._triggerCountryChange()
                })
            })
        },
        _j2: function(a) {
            var b = this.a.attr("maxlength");
            return b && a.length > b ? a.substr(0, b) : a
        },
        _l: function() {
            var b = this;
            this.a.on("mousedown" + this.ns, function(a) {
                b.a.is(":focus") || b.a.val() || (a.preventDefault(), b.a.focus())
            }), this.a.on("focus" + this.ns, function() {
                b.a.val() || b.a.prop("readonly") || !b.s.dialCode || (b.a.val("+" + b.s.dialCode), b.a.one("keypress.plus" + b.ns, function(a) {
                    a.which == i.f && b.a.val("")
                }), setTimeout(function() {
                    var a = b.a[0];
                    if (b.d) {
                        var c = b.a.val().length;
                        a.setSelectionRange(c, c)
                    }
                }))
            });
            var c = this.a.prop("form");
            c && a(c).on("submit" + this.ns, function() {
                b._removeEmptyDialCode()
            }), this.a.on("blur" + this.ns, function() {
                b._removeEmptyDialCode()
            })
        },
        _removeEmptyDialCode: function() {
            var a = this.a.val();
            if ("+" == a.charAt(0)) {
                var b = this._m(a);
                b && this.s.dialCode != b || this.a.val("")
            }
            this.a.off("keypress.plus" + this.ns)
        },
        _m: function(a) {
            return a.replace(/\D/g, "")
        },
        _n: function() {
            this._o();
            var a = this.m.children(".active");
            a.length && (this._x(a), this._ad(a)), this._p(), this.l.children(".iti-arrow").addClass("up"), this.a.trigger("open:countrydropdown")
        },
        _o: function() {
            var c = this;
            if (this.b.dropdownContainer && this.dropdown.appendTo(this.b.dropdownContainer), this.n = this.m.removeClass("hide").outerHeight(), !this.g) {
                var d = this.a.offset(),
                    e = d.top,
                    f = a(b).scrollTop(),
                    g = e + this.a.outerHeight() + this.n < f + a(b).height(),
                    h = e - this.n > f;
                if (this.m.toggleClass("dropup", !g && h), this.b.dropdownContainer) {
                    var i = !g && h ? 0 : this.a.innerHeight();
                    this.dropdown.css({
                        top: e + i,
                        left: d.left
                    }), a(b).on("scroll" + this.ns, function() {
                        c._ac()
                    })
                }
            }
        },
        _p: function() {
            var b = this;
            this.m.on("mouseover" + this.ns, ".country", function() {
                b._x(a(this))
            }), this.m.on("click" + this.ns, ".country", function() {
                b._ab(a(this))
            });
            var d = !0;
            a("html").on("click" + this.ns, function() {
                d || b._ac(), d = !1
            });
            var e = "",
                f = null;
            a(c).on("keydown" + this.ns, function(a) {
                a.preventDefault(), a.which == i.b || a.which == i.c ? b._q(a.which) : a.which == i.d ? b._r() : a.which == i.e ? b._ac() : (a.which >= i.A && a.which <= i.Z || a.which == i.j) && (f && clearTimeout(f), e += String.fromCharCode(a.which), b._s(e), f = setTimeout(function() {
                    e = ""
                }, 1e3))
            })
        },
        _q: function(a) {
            var b = this.m.children(".highlight").first(),
                c = a == i.b ? b.prev() : b.next();
            c.length && (c.hasClass("divider") && (c = a == i.b ? c.prev() : c.next()), this._x(c), this._ad(c))
        },
        _r: function() {
            var a = this.m.children(".highlight").first();
            a.length && this._ab(a)
        },
        _s: function(a) {
            for (var b = 0; b < this.p.length; b++)
                if (this._t(this.p[b].name, a)) {
                    var c = this.m.children("[data-country-code=" + this.p[b].iso2 + "]").not(".preferred");
                    this._x(c), this._ad(c, !0);
                    break
                }
        },
        _t: function(a, b) {
            return a.substr(0, b.length).toUpperCase() == b
        },
        _u: function(a) {
            if (this.b.formatOnDisplay && b.intlTelInputUtils && this.s) {
                var c = this.b.separateDialCode || !this.b.nationalMode && "+" == a.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL;
                a = intlTelInputUtils.formatNumber(a, this.s.iso2, c)
            }
            a = this._ah(a), this.a.val(a)
        },
        _v: function(b) {
            b && this.b.nationalMode && "1" == this.s.dialCode && "+" != b.charAt(0) && ("1" != b.charAt(0) && (b = "1" + b), b = "+" + b);
            var c = this._af(b),
                d = null,
                e = this._m(b);
            if (c) {
                var f = this.q[this._m(c)],
                    g = a.inArray(this.s.iso2, f) > -1,
                    h = "+1" == c && e.length >= 4;
                if (!("1" == this.s.dialCode && this._isRegionlessNanp(e) || g && !h))
                    for (var i = 0; i < f.length; i++)
                        if (f[i]) {
                            d = f[i];
                            break
                        }
            } else "+" == b.charAt(0) && e.length ? d = "" : b && "+" != b || (d = this.j);
            return null !== d && this._z(d)
        },
        _isRegionlessNanp: function(b) {
            var c = this._m(b);
            if ("1" == c.charAt(0)) {
                var d = c.substr(1, 3);
                return a.inArray(d, j) > -1
            }
            return !1
        },
        _x: function(a) {
            this.o.removeClass("highlight"), a.addClass("highlight")
        },
        _y: function(a, b, c) {
            for (var d = b ? k : this.p, e = 0; e < d.length; e++)
                if (d[e].iso2 == a) return d[e];
            if (c) return null;
            throw new Error("No country data for '" + a + "'")
        },
        _z: function(a) {
            var b = this.s.iso2 ? this.s : {};
            this.s = a ? this._y(a, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.attr("class", "iti-flag " + a);
            var c = a ? this.s.name + ": +" + this.s.dialCode : "Unknown";
            if (this.l.parent().attr("title", c), this.b.separateDialCode) {
                var d = this.s.dialCode ? "+" + this.s.dialCode : "",
                    e = this.a.parent();
                b.dialCode && e.removeClass("iti-sdc-" + (b.dialCode.length + 1)), d && e.addClass("iti-sdc-" + d.length), this.t.text(d)
            }
            return this._aa(), this.o.removeClass("active"), a && this.o.find(".iti-flag." + a).first().closest(".country").addClass("active"), b.iso2 !== a
        },
        _aa: function() {
            var a = "aggressive" === this.b.autoPlaceholder || !this.e && (!0 === this.b.autoPlaceholder || "polite" === this.b.autoPlaceholder);
            if (b.intlTelInputUtils && a) {
                var c = intlTelInputUtils.numberType[this.b.placeholderNumberType],
                    d = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.b.nationalMode, c) : "";
                d = this._ah(d), "function" == typeof this.b.customPlaceholder && (d = this.b.customPlaceholder(d, this.s)), this.a.attr("placeholder", d)
            }
        },
        _ab: function(a) {
            var b = this._z(a.attr("data-country-code"));
            if (this._ac(), this._ae(a.attr("data-dial-code"), !0), this.a.focus(), this.d) {
                var c = this.a.val().length;
                this.a[0].setSelectionRange(c, c)
            }
            b && this._triggerCountryChange()
        },
        _ac: function() {
            this.m.addClass("hide"), this.l.children(".iti-arrow").removeClass("up"), a(c).off(this.ns), a("html").off(this.ns), this.m.off(this.ns), this.b.dropdownContainer && (this.g || a(b).off("scroll" + this.ns), this.dropdown.detach()), this.a.trigger("close:countrydropdown")
        },
        _ad: function(a, b) {
            var c = this.m,
                d = c.height(),
                e = c.offset().top,
                f = e + d,
                g = a.outerHeight(),
                h = a.offset().top,
                i = h + g,
                j = h - e + c.scrollTop(),
                k = d / 2 - g / 2;
            if (e > h) b && (j -= k), c.scrollTop(j);
            else if (i > f) {
                b && (j += k);
                var l = d - g;
                c.scrollTop(j - l)
            }
        },
        _ae: function(a, b) {
            var c, d = this.a.val();
            if (a = "+" + a, "+" == d.charAt(0)) {
                var e = this._af(d);
                c = e ? d.replace(e, a) : a
            } else {
                if (this.b.nationalMode || this.b.separateDialCode) return;
                if (d) c = a + d;
                else {
                    if (!b && this.b.autoHideDialCode) return;
                    c = a
                }
            }
            this.a.val(c)
        },
        _af: function(b) {
            var c = "";
            if ("+" == b.charAt(0))
                for (var d = "", e = 0; e < b.length; e++) {
                    var f = b.charAt(e);
                    if (a.isNumeric(f) && (d += f, this.q[d] && (c = b.substr(0, e + 1)), 4 == d.length)) break
                }
            return c
        },
        _ag: function() {
            var b = a.trim(this.a.val()),
                c = this.s.dialCode,
                d = this._m(b),
                e = "1" == d.charAt(0) ? d : "1" + d;
            return (this.b.separateDialCode ? "+" + c : "+" != b.charAt(0) && "1" != b.charAt(0) && c && "1" == c.charAt(0) && 4 == c.length && c != e.substr(0, 4) ? c.substr(1) : "") + b
        },
        _ah: function(a) {
            if (this.b.separateDialCode) {
                var b = this._af(a);
                if (b) {
                    null !== this.s.areaCodes && (b = "+" + this.s.dialCode);
                    var c = " " === a[b.length] || "-" === a[b.length] ? b.length + 1 : b.length;
                    a = a.substr(c)
                }
            }
            return this._j2(a)
        },
        _triggerCountryChange: function() {
            this.a.trigger("countrychange", this.s)
        },
        handleAutoCountry: function() {
            "auto" === this.b.initialCountry && (this.j = a.fn[f].autoCountry, this.a.val() || this.setCountry(this.j), this.h.resolve())
        },
        handleUtils: function() {
            b.intlTelInputUtils && (this.a.val() && this._u(this.a.val()), this._aa()), this.i.resolve()
        },
        destroy: function() {
            if (this.allowDropdown && (this._ac(), this.l.parent().off(this.ns), this.a.closest("label").off(this.ns)), this.b.autoHideDialCode) {
                var b = this.a.prop("form");
                b && a(b).off(this.ns)
            }
            this.a.off(this.ns), this.a.parent().before(this.a).remove()
        },
        getExtension: function() {
            return b.intlTelInputUtils ? intlTelInputUtils.getExtension(this._ag(), this.s.iso2) : ""
        },
        getNumber: function(a) {
            return b.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._ag(), this.s.iso2, a) : ""
        },
        getNumberType: function() {
            return b.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._ag(), this.s.iso2) : -99
        },
        getSelectedCountryData: function() {
            return this.s
        },
        getValidationError: function() {
            return b.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._ag(), this.s.iso2) : -99
        },
        isValidNumber: function() {
            var c = a.trim(this._ag()),
                d = this.b.nationalMode ? this.s.iso2 : "";
            return b.intlTelInputUtils ? intlTelInputUtils.isValidNumber(c, d) : null
        },
        setCountry: function(a) {
            a = a.toLowerCase(), this.l.hasClass(a) || (this._z(a), this._ae(this.s.dialCode, !1), this._triggerCountryChange())
        },
        setNumber: function(a) {
            var b = this._v(a);
            this._u(a), b && this._triggerCountryChange()
        },
        setPlaceholderNumberType: function(a) {
            this.b.placeholderNumberType = a, this._aa()
        }
    }, a.fn[f] = function(b) {
        var c = arguments;
        if (b === d || "object" == typeof b) {
            var g = [];
            return this.each(function() {
                if (!a.data(this, "plugin_" + f)) {
                    var c = new e(this, b),
                        d = c._a();
                    g.push(d[0]), g.push(d[1]), a.data(this, "plugin_" + f, c)
                }
            }), a.when.apply(null, g)
        }
        if ("string" == typeof b && "_" !== b[0]) {
            var h;
            return this.each(function() {
                var d = a.data(this, "plugin_" + f);
                d instanceof e && "function" == typeof d[b] && (h = d[b].apply(d, Array.prototype.slice.call(c, 1))), "destroy" === b && a.data(this, "plugin_" + f, null)
            }), h !== d ? h : this
        }
    }, a.fn[f].getCountryData = function() {
        return k
    }, a.fn[f].loadUtils = function(b, c) {
        a.fn[f].loadedUtilsScript ? c && c.resolve() : (a.fn[f].loadedUtilsScript = !0, a.ajax({
            type: "GET",
            url: b,
            complete: function() {
                a(".intl-tel-input input").intlTelInput("handleUtils")
            },
            dataType: "script",
            cache: !0
        }))
    }, a.fn[f].defaults = h, a.fn[f].version = "12.1.10";
    for (var k = [
            ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
            ["Albania (Shqipëri)", "al", "355"],
            ["Algeria (‫الجزائر‬‎)", "dz", "213"],
            ["American Samoa", "as", "1684"],
            ["Andorra", "ad", "376"],
            ["Angola", "ao", "244"],
            ["Anguilla", "ai", "1264"],
            ["Antigua and Barbuda", "ag", "1268"],
            ["Argentina", "ar", "54"],
            ["Armenia (Հայաստան)", "am", "374"],
            ["Aruba", "aw", "297"],
            ["Australia", "au", "61", 0],
            ["Austria (Österreich)", "at", "43"],
            ["Azerbaijan (Azərbaycan)", "az", "994"],
            ["Bahamas", "bs", "1242"],
            ["Bahrain (‫البحرين‬‎)", "bh", "973"],
            ["Bangladesh (বাংলাদেশ)", "bd", "880"],
            ["Barbados", "bb", "1246"],
            ["Belarus (Беларусь)", "by", "375"],
            ["Belgium (België)", "be", "32"],
            ["Belize", "bz", "501"],
            ["Benin (Bénin)", "bj", "229"],
            ["Bermuda", "bm", "1441"],
            ["Bhutan (འབྲུག)", "bt", "975"],
            ["Bolivia", "bo", "591"],
            ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
            ["Botswana", "bw", "267"],
            ["Brazil (Brasil)", "br", "55"],
            ["British Indian Ocean Territory", "io", "246"],
            ["British Virgin Islands", "vg", "1284"],
            ["Brunei", "bn", "673"],
            ["Bulgaria (България)", "bg", "359"],
            ["Burkina Faso", "bf", "226"],
            ["Burundi (Uburundi)", "bi", "257"],
            ["Cambodia (កម្ពុជា)", "kh", "855"],
            ["Cameroon (Cameroun)", "cm", "237"],
            ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
            ["Cape Verde (Kabu Verdi)", "cv", "238"],
            ["Caribbean Netherlands", "bq", "599", 1],
            ["Cayman Islands", "ky", "1345"],
            ["Central African Republic (République centrafricaine)", "cf", "236"],
            ["Chad (Tchad)", "td", "235"],
            ["Chile", "cl", "56"],
            ["China (中国)", "cn", "86"],
            ["Christmas Island", "cx", "61", 2],
            ["Cocos (Keeling) Islands", "cc", "61", 1],
            ["Colombia", "co", "57"],
            ["Comoros (‫جزر القمر‬‎)", "km", "269"],
            ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
            ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
            ["Cook Islands", "ck", "682"],
            ["Costa Rica", "cr", "506"],
            ["Côte d’Ivoire", "ci", "225"],
            ["Croatia (Hrvatska)", "hr", "385"],
            ["Cuba", "cu", "53"],
            ["Curaçao", "cw", "599", 0],
            ["Cyprus (Κύπρος)", "cy", "357"],
            ["Czech Republic (Česká republika)", "cz", "420"],
            ["Denmark (Danmark)", "dk", "45"],
            ["Djibouti", "dj", "253"],
            ["Dominica", "dm", "1767"],
            ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
            ["Ecuador", "ec", "593"],
            ["Egypt (‫مصر‬‎)", "eg", "20"],
            ["El Salvador", "sv", "503"],
            ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
            ["Eritrea", "er", "291"],
            ["Estonia (Eesti)", "ee", "372"],
            ["Ethiopia", "et", "251"],
            ["Falkland Islands (Islas Malvinas)", "fk", "500"],
            ["Faroe Islands (Føroyar)", "fo", "298"],
            ["Fiji", "fj", "679"],
            ["Finland (Suomi)", "fi", "358", 0],
            ["France", "fr", "33"],
            ["French Guiana (Guyane française)", "gf", "594"],
            ["French Polynesia (Polynésie française)", "pf", "689"],
            ["Gabon", "ga", "241"],
            ["Gambia", "gm", "220"],
            ["Georgia (საქართველო)", "ge", "995"],
            ["Germany (Deutschland)", "de", "49"],
            ["Ghana (Gaana)", "gh", "233"],
            ["Gibraltar", "gi", "350"],
            ["Greece (Ελλάδα)", "gr", "30"],
            ["Greenland (Kalaallit Nunaat)", "gl", "299"],
            ["Grenada", "gd", "1473"],
            ["Guadeloupe", "gp", "590", 0],
            ["Guam", "gu", "1671"],
            ["Guatemala", "gt", "502"],
            ["Guernsey", "gg", "44", 1],
            ["Guinea (Guinée)", "gn", "224"],
            ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
            ["Guyana", "gy", "592"],
            ["Haiti", "ht", "509"],
            ["Honduras", "hn", "504"],
            ["Hong Kong (香港)", "hk", "852"],
            ["Hungary (Magyarország)", "hu", "36"],
            ["Iceland (Ísland)", "is", "354"],
            ["India (भारत)", "in", "91"],
            ["Indonesia", "id", "62"],
            ["Iran (‫ایران‬‎)", "ir", "98"],
            ["Iraq (‫العراق‬‎)", "iq", "964"],
            ["Ireland", "ie", "353"],
            ["Isle of Man", "im", "44", 2],
            ["Israel (‫ישראל‬‎)", "il", "972"],
            ["Italy (Italia)", "it", "39", 0],
            ["Jamaica", "jm", "1876"],
            ["Japan (日本)", "jp", "81"],
            ["Jersey", "je", "44", 3],
            ["Jordan (‫الأردن‬‎)", "jo", "962"],
            ["Kazakhstan (Казахстан)", "kz", "7", 1],
            ["Kenya", "ke", "254"],
            ["Kiribati", "ki", "686"],
            ["Kosovo", "xk", "383"],
            ["Kuwait (‫الكويت‬‎)", "kw", "965"],
            ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
            ["Laos (ລາວ)", "la", "856"],
            ["Latvia (Latvija)", "lv", "371"],
            ["Lebanon (‫لبنان‬‎)", "lb", "961"],
            ["Lesotho", "ls", "266"],
            ["Liberia", "lr", "231"],
            ["Libya (‫ليبيا‬‎)", "ly", "218"],
            ["Liechtenstein", "li", "423"],
            ["Lithuania (Lietuva)", "lt", "370"],
            ["Luxembourg", "lu", "352"],
            ["Macau (澳門)", "mo", "853"],
            ["Macedonia (FYROM) (Македонија)", "mk", "389"],
            ["Madagascar (Madagasikara)", "mg", "261"],
            ["Malawi", "mw", "265"],
            ["Malaysia", "my", "60"],
            ["Maldives", "mv", "960"],
            ["Mali", "ml", "223"],
            ["Malta", "mt", "356"],
            ["Marshall Islands", "mh", "692"],
            ["Martinique", "mq", "596"],
            ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
            ["Mauritius (Moris)", "mu", "230"],
            ["Mayotte", "yt", "262", 1],
            ["Mexico (México)", "mx", "52"],
            ["Micronesia", "fm", "691"],
            ["Moldova (Republica Moldova)", "md", "373"],
            ["Monaco", "mc", "377"],
            ["Mongolia (Монгол)", "mn", "976"],
            ["Montenegro (Crna Gora)", "me", "382"],
            ["Montserrat", "ms", "1664"],
            ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
            ["Mozambique (Moçambique)", "mz", "258"],
            ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
            ["Namibia (Namibië)", "na", "264"],
            ["Nauru", "nr", "674"],
            ["Nepal (नेपाल)", "np", "977"],
            ["Netherlands (Nederland)", "nl", "31"],
            ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
            ["New Zealand", "nz", "64"],
            ["Nicaragua", "ni", "505"],
            ["Niger (Nijar)", "ne", "227"],
            ["Nigeria", "ng", "234"],
            ["Niue", "nu", "683"],
            ["Norfolk Island", "nf", "672"],
            ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
            ["Northern Mariana Islands", "mp", "1670"],
            ["Norway (Norge)", "no", "47", 0],
            ["Oman (‫عُمان‬‎)", "om", "968"],
            ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
            ["Palau", "pw", "680"],
            ["Palestine (‫فلسطين‬‎)", "ps", "970"],
            ["Panama (Panamá)", "pa", "507"],
            ["Papua New Guinea", "pg", "675"],
            ["Paraguay", "py", "595"],
            ["Peru (Perú)", "pe", "51"],
            ["Philippines", "ph", "63"],
            ["Poland (Polska)", "pl", "48"],
            ["Portugal", "pt", "351"],
            ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
            ["Qatar (‫قطر‬‎)", "qa", "974"],
            ["Réunion (La Réunion)", "re", "262", 0],
            ["Romania (România)", "ro", "40"],
            ["Russia (Россия)", "ru", "7", 0],
            ["Rwanda", "rw", "250"],
            ["Saint Barthélemy", "bl", "590", 1],
            ["Saint Helena", "sh", "290"],
            ["Saint Kitts and Nevis", "kn", "1869"],
            ["Saint Lucia", "lc", "1758"],
            ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
            ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
            ["Saint Vincent and the Grenadines", "vc", "1784"],
            ["Samoa", "ws", "685"],
            ["San Marino", "sm", "378"],
            ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
            ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
            ["Senegal (Sénégal)", "sn", "221"],
            ["Serbia (Србија)", "rs", "381"],
            ["Seychelles", "sc", "248"],
            ["Sierra Leone", "sl", "232"],
            ["Singapore", "sg", "65"],
            ["Sint Maarten", "sx", "1721"],
            ["Slovakia (Slovensko)", "sk", "421"],
            ["Slovenia (Slovenija)", "si", "386"],
            ["Solomon Islands", "sb", "677"],
            ["Somalia (Soomaaliya)", "so", "252"],
            ["South Africa", "za", "27"],
            ["South Korea (대한민국)", "kr", "82"],
            ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
            ["Spain (España)", "es", "34"],
            ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
            ["Sudan (‫السودان‬‎)", "sd", "249"],
            ["Suriname", "sr", "597"],
            ["Svalbard and Jan Mayen", "sj", "47", 1],
            ["Swaziland", "sz", "268"],
            ["Sweden (Sverige)", "se", "46"],
            ["Switzerland (Schweiz)", "ch", "41"],
            ["Syria (‫سوريا‬‎)", "sy", "963"],
            ["Taiwan (台灣)", "tw", "886"],
            ["Tajikistan", "tj", "992"],
            ["Tanzania", "tz", "255"],
            ["Thailand (ไทย)", "th", "66"],
            ["Timor-Leste", "tl", "670"],
            ["Togo", "tg", "228"],
            ["Tokelau", "tk", "690"],
            ["Tonga", "to", "676"],
            ["Trinidad and Tobago", "tt", "1868"],
            ["Tunisia (‫تونس‬‎)", "tn", "216"],
            ["Turkey (Türkiye)", "tr", "90"],
            ["Turkmenistan", "tm", "993"],
            ["Turks and Caicos Islands", "tc", "1649"],
            ["Tuvalu", "tv", "688"],
            ["U.S. Virgin Islands", "vi", "1340"],
            ["Uganda", "ug", "256"],
            ["Ukraine (Україна)", "ua", "380"],
            ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
            ["United Kingdom", "gb", "44", 0],
            ["United States", "us", "1", 0],
            ["Uruguay", "uy", "598"],
            ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
            ["Vanuatu", "vu", "678"],
            ["Vatican City (Città del Vaticano)", "va", "39", 1],
            ["Venezuela", "ve", "58"],
            ["Vietnam (Việt Nam)", "vn", "84"],
            ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
            ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
            ["Yemen (‫اليمن‬‎)", "ye", "967"],
            ["Zambia", "zm", "260"],
            ["Zimbabwe", "zw", "263"],
            ["Åland Islands", "ax", "358", 1]
        ], l = 0; l < k.length; l++) {
        var m = k[l];
        k[l] = {
            name: m[0],
            iso2: m[1],
            dialCode: m[2],
            priority: m[3] || 0,
            areaCodes: m[4] || null
        }
    }
}),
function() {
    function u(a) {
        return "string" == typeof a
    }

    function v(a, b) {
        var c = a.split("."),
            d = ca;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
    }

    function w(a, b) {
        function c() {}
        c.prototype = b.prototype, a.aa = b.prototype, a.prototype = new c, a.prototype.constructor = a, a.$ = function(a, c) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    }

    function y(a, b) {
        a.sort(b || da)
    }

    function da(a, b) {
        return a > b ? 1 : b > a ? -1 : 0
    }

    function ea(a) {
        var d, b = [],
            c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function fa(a, b) {
        switch (this.a = a, this.h = !!b.i, this.c = b.b, this.m = b.type, this.l = !1, this.c) {
            case ga:
            case ha:
            case ia:
            case ja:
            case ka:
            case la:
            case ma:
                this.l = !0
        }
        this.g = b.defaultValue
    }

    function na(a, b) {
        this.c = a, this.a = {};
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            this.a[d.a] = d
        }
    }

    function oa(a) {
        return a = ea(a.a), y(a, function(a, c) {
            return a.a - c.a
        }), a
    }

    function A() {
        this.a = {}, this.g = this.f().a, this.c = this.h = null
    }

    function pa(a, b) {
        for (var c = oa(a.f()), d = 0; d < c.length; d++) {
            var e = c[d],
                f = e.a;
            if (null != b.a[f]) {
                a.c && delete a.c[e.a];
                var g = 11 == e.c || 10 == e.c;
                if (e.h)
                    for (var e = D(b, f), h = 0; h < e.length; h++) {
                        var k = a,
                            q = f,
                            z = g ? e[h].clone() : e[h];
                        k.a[q] || (k.a[q] = []), k.a[q].push(z), k.c && delete k.c[q]
                    } else e = E(b, f), g ? (g = E(a, f)) ? pa(g, e) : C(a, f, e.clone()) : C(a, f, e)
            }
        }
    }

    function E(a, b) {
        var c = a.a[b];
        if (null == c) return null;
        if (a.h) {
            if (!(b in a.c)) {
                var d = a.h,
                    e = a.g[b];
                if (null != c)
                    if (e.h) {
                        for (var f = [], g = 0; g < c.length; g++) f[g] = d.a(e, c[g]);
                        c = f
                    } else c = d.a(e, c);
                return a.c[b] = c
            }
            return a.c[b]
        }
        return c
    }

    function B(a, b, c) {
        var d = E(a, b);
        return a.g[b].h ? d[c || 0] : d
    }

    function F(a, b) {
        var c;
        if (null != a.a[b]) c = B(a, b, void 0);
        else a: {
            if (c = a.g[b], void 0 === c.g) {
                var d = c.m;
                if (d === Boolean) c.g = !1;
                else if (d === Number) c.g = 0;
                else {
                    if (d !== String) {
                        c = new d;
                        break a
                    }
                    c.g = c.l ? "0" : ""
                }
            }
            c = c.g
        }
        return c
    }

    function D(a, b) {
        return E(a, b) || []
    }

    function G(a, b) {
        return a.g[b].h ? null != a.a[b] ? a.a[b].length : 0 : null != a.a[b] ? 1 : 0
    }

    function C(a, b, c) {
        a.a[b] = c, a.c && (a.c[b] = c)
    }

    function H(a, b) {
        var d, c = [];
        for (d in b) 0 != d && c.push(new fa(d, b[d]));
        return new na(a, c)
    }

    function I() {}

    function J() {}

    function ra() {}

    function K(a) {
        null != a && this.a.apply(this, arguments)
    }

    function L() {
        A.call(this)
    }

    function M() {
        A.call(this)
    }

    function N() {
        A.call(this)
    }

    function O() {
        A.call(this)
    }

    function Q() {
        this.a = {}
    }

    function Ja(a) {
        var b = a.search(Ca);
        return b >= 0 ? (a = a.substring(b), a = a.replace(Ea, ""), b = a.search(Da), b >= 0 && (a = a.substring(0, b))) : a = "", a
    }

    function Ka(a) {
        return 2 > a.length ? !1 : S(Ha, a)
    }

    function La(a) {
        return S(Fa, a) ? Ma(a, Aa) : Ma(a, ya)
    }

    function Na(a) {
        var b = La(a.toString());
        a.c = "", a.a(b)
    }

    function Oa(a) {
        return !!a && (1 != G(a, 9) || -1 != D(a, 9)[0])
    }

    function Ma(a, b) {
        for (var d, c = new K, e = a.length, f = 0; e > f; ++f) d = a.charAt(f), d = b[d.toUpperCase()], null != d && c.a(d);
        return c.toString()
    }

    function Pa(a) {
        return null != a && isNaN(a) && a.toUpperCase() in xa
    }

    function Qa(a, b, c) {
        if (0 == B(b, 2) && null != b.a[5]) {
            var d = F(b, 5);
            if (0 < d.length) return d
        }
        var d = F(b, 1),
            e = T(b);
        if (0 == c) return Ra(d, 0, e, "");
        if (!(d in P)) return e;
        a = U(a, d, Sa(d)), b = null != b.a[3] && B(b, 3).length ? 3 == c ? ";ext=" + B(b, 3) : null != a.a[13] ? B(a, 13) + F(b, 3) : " ext. " + F(b, 3) : "";
        a: {
            a = D(a, 20).length && 2 != c ? D(a, 20) : D(a, 19);
            for (var f, g = a.length, h = 0; g > h; ++h) {
                f = a[h];
                var k = G(f, 3);
                if ((!k || !e.search(B(f, 3, k - 1))) && (k = new RegExp(B(f, 1)), S(k, e))) {
                    a = f;
                    break a
                }
            }
            a = null
        }
        return a && (g = a, a = F(g, 2), f = new RegExp(B(g, 1)), F(g, 5), g = F(g, 4), e = 2 == c && null != g && 0 < g.length ? e.replace(f, a.replace(Ia, g)) : e.replace(f, a), 3 == c && (e = e.replace(RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]+"), ""), e = e.replace(RegExp("[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]+", "g"), "-"))), Ra(d, c, e, b)
    }

    function U(a, b, c) {
        return "001" == c ? V(a, "" + b) : V(a, c)
    }

    function T(a) {
        if (null == a.a[2]) return "";
        var b = "" + B(a, 2);
        return null != a.a[4] && B(a, 4) && 0 < F(a, 8) ? Array(F(a, 8) + 1).join("0") + b : b
    }

    function Ra(a, b, c, d) {
        switch (b) {
            case 0:
                return "+" + a + c + d;
            case 1:
                return "+" + a + " " + c + d;
            case 3:
                return "tel:+" + a + "-" + c + d;
            default:
                return c + d
        }
    }

    function W(a, b) {
        switch (b) {
            case 4:
                return B(a, 5);
            case 3:
                return B(a, 4);
            case 1:
                return B(a, 3);
            case 0:
            case 2:
                return B(a, 2);
            case 5:
                return B(a, 6);
            case 6:
                return B(a, 8);
            case 7:
                return B(a, 7);
            case 8:
                return B(a, 21);
            case 9:
                return B(a, 25);
            case 10:
                return B(a, 28);
            default:
                return B(a, 1)
        }
    }

    function Ta(a, b) {
        return X(a, B(b, 1)) ? X(a, B(b, 5)) ? 4 : X(a, B(b, 4)) ? 3 : X(a, B(b, 6)) ? 5 : X(a, B(b, 8)) ? 6 : X(a, B(b, 7)) ? 7 : X(a, B(b, 21)) ? 8 : X(a, B(b, 25)) ? 9 : X(a, B(b, 28)) ? 10 : X(a, B(b, 2)) ? B(b, 18) || X(a, B(b, 3)) ? 2 : 0 : !B(b, 18) && X(a, B(b, 3)) ? 1 : -1 : -1
    }

    function V(a, b) {
        if (null == b) return null;
        b = b.toUpperCase();
        var c = a.a[b];
        if (!c) {
            if (c = xa[b], !c) return null;
            c = (new ra).c(N.f(), c), a.a[b] = c
        }
        return c
    }

    function X(a, b) {
        var c = a.length;
        return 0 < G(b, 9) && -1 == x(D(b, 9), c) ? !1 : S(F(b, 2), a)
    }

    function Ua(a, b) {
        if (!b) return null;
        var c = F(b, 1);
        if (c = P[c])
            if (1 == c.length) c = c[0];
            else a: {
                for (var e, d = T(b), f = c.length, g = 0; f > g; g++) {
                    e = c[g];
                    var h = V(a, e);
                    if (null != h.a[23]) {
                        if (!d.search(B(h, 23))) {
                            c = e;
                            break a
                        }
                    } else if (-1 != Ta(d, h)) {
                        c = e;
                        break a
                    }
                }
                c = null
            }
        else c = null;
        return c
    }

    function Sa(a) {
        return (a = P[a]) ? a[0] : "ZZ"
    }

    function Y(a, b, c, d) {
        var e = W(c, d),
            f = G(e, 9) ? D(e, 9) : D(B(c, 1), 9),
            e = D(e, 10);
        if (2 == d) {
            if (!Oa(W(c, 0))) return Y(a, b, c, 1);
            a = W(c, 1), Oa(a) && (f = f.concat(G(a, 9) ? D(a, 9) : D(B(c, 1), 9)), y(f), e.length ? (e = e.concat(D(a, 10)), y(e)) : e = D(a, 10))
        }
        return -1 == f[0] ? 5 : (b = b.length, -1 < x(e, b) ? 4 : (c = f[0], c == b ? 0 : c > b ? 2 : f[f.length - 1] < b ? 3 : -1 < x(f, b, 1) ? 0 : 5))
    }

    function Va(a, b, c, d, e, f) {
        if (!b.length) return 0;
        b = new K(b);
        var g;
        c && (g = B(c, 11)), null == g && (g = "NonMatch");
        var h = b.toString();
        if (h.length)
            if (R.test(h)) h = h.replace(R, ""), b.c = "", b.a(La(h)), g = 1;
            else {
                if (h = new RegExp(g), Na(b), g = b.toString(), g.search(h)) g = !1;
                else {
                    var h = g.match(h)[0].length,
                        k = g.substring(h).match(Ba);
                    k && null != k[1] && 0 < k[1].length && "0" == Ma(k[1], ya) ? g = !1 : (b.c = "", b.a(g.substring(h)), g = !0)
                }
                g = g ? 5 : 20
            }
        else g = 20;
        if (e && C(f, 6, g), 20 != g) {
            if (2 >= b.c.length) throw Error("Phone number too short after IDD");
            a: {
                if (a = b.toString(), a.length && "0" != a.charAt(0))
                    for (e = a.length, b = 1; 3 >= b && e >= b; ++b)
                        if (c = parseInt(a.substring(0, b), 10), c in P) {
                            d.a(a.substring(b)), d = c;
                            break a
                        } d = 0
            }
            if (d) return C(f, 1, d), d;
            throw Error("Invalid country calling code")
        }
        return c && (g = F(c, 10), h = "" + g, k = b.toString(), !k.lastIndexOf(h, 0) && (h = new K(k.substring(h.length)), k = B(c, 1), k = new RegExp(F(k, 2)), Wa(h, c, null), h = h.toString(), !S(k, b.toString()) && S(k, h) || 3 == Y(a, b.toString(), c, -1))) ? (d.a(h), e && C(f, 6, 10), C(f, 1, g), g) : (C(f, 1, 0), 0)
    }

    function Wa(a, b, c) {
        var d = a.toString(),
            e = d.length,
            f = B(b, 15);
        if (e && null != f && f.length) {
            var g = new RegExp("^(?:" + f + ")");
            if (e = g.exec(d)) {
                var f = new RegExp(F(B(b, 1), 2)),
                    h = S(f, d),
                    k = e.length - 1;
                b = B(b, 16), null != b && b.length && null != e[k] && e[k].length ? (d = d.replace(g, b), (!h || S(f, d)) && (c && k > 0 && c.a(e[1]), a.set(d))) : (!h || S(f, d.substring(e[0].length))) && (c && k > 0 && null != e[k] && c.a(e[1]), a.set(d.substring(e[0].length)))
            }
        }
    }

    function Z(a, b, c) {
        if (!Pa(c) && 0 < b.length && "+" != b.charAt(0)) throw Error("Invalid country calling code");
        return Xa(a, b, c, !0)
    }

    function Xa(a, b, c, d) {
        if (null == b) throw Error("The string supplied did not seem to be a phone number");
        if (250 < b.length) throw Error("The string supplied is too long to be a phone number");
        var e = new K,
            f = b.indexOf(";phone-context=");
        if (f >= 0) {
            var g = f + 15;
            if ("+" == b.charAt(g)) {
                var h = b.indexOf(";", g);
                e.a(h > 0 ? b.substring(g, h) : b.substring(g))
            }
            g = b.indexOf("tel:"), e.a(b.substring(g >= 0 ? g + 4 : 0, f))
        } else e.a(Ja(b));
        if (f = e.toString(), g = f.indexOf(";isub="), g > 0 && (e.c = "", e.a(f.substring(0, g))), !Ka(e.toString())) throw Error("The string supplied did not seem to be a phone number");
        if (f = e.toString(), !(Pa(c) || null != f && 0 < f.length && R.test(f))) throw Error("Invalid country calling code");
        f = new O, d && C(f, 5, b);
        a: {
            if (b = e.toString(), g = b.search(Ga), g >= 0 && Ka(b.substring(0, g)))
                for (var h = b.match(Ga), k = h.length, q = 1; k > q; ++q)
                    if (null != h[q] && 0 < h[q].length) {
                        e.c = "", e.a(b.substring(0, g)), b = h[q];
                        break a
                    } b = ""
        }
        0 < b.length && C(f, 3, b), g = V(a, c), b = new K, h = 0, k = e.toString();
        try {
            h = Va(a, k, g, b, d, f)
        } catch (z) {
            if ("Invalid country calling code" != z.message || !R.test(k)) throw z;
            if (k = k.replace(R, ""), h = Va(a, k, g, b, d, f), !h) throw z
        }
        if (h ? (e = Sa(h), e != c && (g = U(a, h, e))) : (Na(e), b.a(e.toString()), null != c ? (h = F(g, 10), C(f, 1, h)) : d && (delete f.a[6], f.c && delete f.c[6])), 2 > b.c.length) throw Error("The string supplied is too short to be a phone number");
        if (g && (c = new K, e = new K(b.toString()), Wa(e, g, c), a = Y(a, e.toString(), g, -1), 2 != a && 4 != a && 5 != a && (b = e, d && 0 < c.toString().length && C(f, 7, c.toString()))), d = b.toString(), a = d.length, 2 > a) throw Error("The string supplied is too short to be a phone number");
        if (a > 17) throw Error("The string supplied is too long to be a phone number");
        if (1 < d.length && "0" == d.charAt(0)) {
            for (C(f, 4, !0), a = 1; a < d.length - 1 && "0" == d.charAt(a);) a++;
            1 != a && C(f, 8, a)
        }
        return C(f, 2, parseInt(d, 10)), f
    }

    function S(a, b) {
        var c = b.match("string" == typeof a ? "^(?:" + a + ")$" : a);
        return c && c[0].length == b.length ? !0 : !1
    }
    for (var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        }, l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, m = ["String", "prototype", "repeat"], n = 0; n < m.length - 1; n++) {
        var p = m[n];
        p in l || (l[p] = {}), l = l[p]
    }
    var ba = m[m.length - 1],
        r = l[ba],
        t = r ? r : function(a) {
            var b;
            if (null == this) throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");
            if (b = this + "", 0 > a || a > 1342177279) throw new RangeError("Invalid count value");
            a |= 0;
            for (var c = ""; a;) 1 & a && (c += b), (a >>>= 1) && (b += b);
            return c
        };
    t != r && null != t && aa(l, ba, {
        configurable: !0,
        writable: !0,
        value: t
    });
    var ca = this,
        x = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            if (c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c, u(a)) return u(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ma = 1,
        la = 2,
        ga = 3,
        ha = 4,
        ia = 6,
        ja = 16,
        ka = 18;
    A.prototype.has = function(a) {
        return null != this.a[a.a]
    }, A.prototype.get = function(a, b) {
        return B(this, a.a, b)
    }, A.prototype.set = function(a, b) {
        C(this, a.a, b)
    }, A.prototype.clone = function() {
        var a = new this.constructor;
        return a != this && (a.a = {}, a.c && (a.c = {}), pa(a, this)), a
    }, I.prototype.c = function(a) {
        throw new a.c, Error("Unimplemented")
    }, I.prototype.a = function(a, b) {
        if (11 == a.c || 10 == a.c) return b instanceof A ? b : this.c(a.m.prototype.f(), b);
        if (14 == a.c) {
            if (u(b) && qa.test(b)) {
                var c = Number(b);
                if (c > 0) return c
            }
            return b
        }
        if (!a.l) return b;
        if (c = a.m, c === String) {
            if ("number" == typeof b) return String(b)
        } else if (c === Number && u(b) && ("Infinity" === b || "-Infinity" === b || "NaN" === b || qa.test(b))) return Number(b);
        return b
    };
    var qa = /^-?[0-9]+$/;
    w(J, I), J.prototype.c = function(a, b) {
        var c = new a.c;
        return c.h = this, c.a = b, c.c = {}, c
    }, w(ra, J), ra.prototype.a = function(a, b) {
        return 8 == a.c ? !!b : I.prototype.a.apply(this, arguments)
    }, K.prototype.c = "", K.prototype.set = function(a) {
        this.c = "" + a
    }, K.prototype.a = function(a, b) {
        if (this.c += String(a), null != b)
            for (var d = 1; d < arguments.length; d++) this.c += arguments[d];
        return this
    }, K.prototype.toString = function() {
        return this.c
    }, w(L, A);
    var sa = null;
    w(M, A);
    var ta = null;
    w(N, A);
    var ua = null;
    L.prototype.f = function() {
        var a = sa;
        return a || (sa = a = H(L, {
            0: {
                name: "NumberFormat",
                j: "i18n.phonenumbers.NumberFormat"
            },
            1: {
                name: "pattern",
                required: !0,
                b: 9,
                type: String
            },
            2: {
                name: "format",
                required: !0,
                b: 9,
                type: String
            },
            3: {
                name: "leading_digits_pattern",
                i: !0,
                b: 9,
                type: String
            },
            4: {
                name: "national_prefix_formatting_rule",
                b: 9,
                type: String
            },
            6: {
                name: "national_prefix_optional_when_formatting",
                b: 8,
                defaultValue: !1,
                type: Boolean
            },
            5: {
                name: "domestic_carrier_code_formatting_rule",
                b: 9,
                type: String
            }
        })), a
    }, L.f = L.prototype.f, M.prototype.f = function() {
        var a = ta;
        return a || (ta = a = H(M, {
            0: {
                name: "PhoneNumberDesc",
                j: "i18n.phonenumbers.PhoneNumberDesc"
            },
            2: {
                name: "national_number_pattern",
                b: 9,
                type: String
            },
            9: {
                name: "possible_length",
                i: !0,
                b: 5,
                type: Number
            },
            10: {
                name: "possible_length_local_only",
                i: !0,
                b: 5,
                type: Number
            },
            6: {
                name: "example_number",
                b: 9,
                type: String
            }
        })), a
    }, M.f = M.prototype.f, N.prototype.f = function() {
        var a = ua;
        return a || (ua = a = H(N, {
            0: {
                name: "PhoneMetadata",
                j: "i18n.phonenumbers.PhoneMetadata"
            },
            1: {
                name: "general_desc",
                b: 11,
                type: M
            },
            2: {
                name: "fixed_line",
                b: 11,
                type: M
            },
            3: {
                name: "mobile",
                b: 11,
                type: M
            },
            4: {
                name: "toll_free",
                b: 11,
                type: M
            },
            5: {
                name: "premium_rate",
                b: 11,
                type: M
            },
            6: {
                name: "shared_cost",
                b: 11,
                type: M
            },
            7: {
                name: "personal_number",
                b: 11,
                type: M
            },
            8: {
                name: "voip",
                b: 11,
                type: M
            },
            21: {
                name: "pager",
                b: 11,
                type: M
            },
            25: {
                name: "uan",
                b: 11,
                type: M
            },
            27: {
                name: "emergency",
                b: 11,
                type: M
            },
            28: {
                name: "voicemail",
                b: 11,
                type: M
            },
            29: {
                name: "short_code",
                b: 11,
                type: M
            },
            30: {
                name: "standard_rate",
                b: 11,
                type: M
            },
            31: {
                name: "carrier_specific",
                b: 11,
                type: M
            },
            33: {
                name: "sms_services",
                b: 11,
                type: M
            },
            24: {
                name: "no_international_dialling",
                b: 11,
                type: M
            },
            9: {
                name: "id",
                required: !0,
                b: 9,
                type: String
            },
            10: {
                name: "country_code",
                b: 5,
                type: Number
            },
            11: {
                name: "international_prefix",
                b: 9,
                type: String
            },
            17: {
                name: "preferred_international_prefix",
                b: 9,
                type: String
            },
            12: {
                name: "national_prefix",
                b: 9,
                type: String
            },
            13: {
                name: "preferred_extn_prefix",
                b: 9,
                type: String
            },
            15: {
                name: "national_prefix_for_parsing",
                b: 9,
                type: String
            },
            16: {
                name: "national_prefix_transform_rule",
                b: 9,
                type: String
            },
            18: {
                name: "same_mobile_and_fixed_line_pattern",
                b: 8,
                defaultValue: !1,
                type: Boolean
            },
            19: {
                name: "number_format",
                i: !0,
                b: 11,
                type: L
            },
            20: {
                name: "intl_number_format",
                i: !0,
                b: 11,
                type: L
            },
            22: {
                name: "main_country_for_code",
                b: 8,
                defaultValue: !1,
                type: Boolean
            },
            23: {
                name: "leading_digits",
                b: 9,
                type: String
            },
            26: {
                name: "leading_zero_possible",
                b: 8,
                defaultValue: !1,
                type: Boolean
            }
        })), a
    }, N.f = N.prototype.f, w(O, A);
    var va = null,
        wa = {
            w: 0,
            v: 1,
            u: 5,
            s: 10,
            o: 20
        };
    O.prototype.f = function() {
        var a = va;
        return a || (va = a = H(O, {
            0: {
                name: "PhoneNumber",
                j: "i18n.phonenumbers.PhoneNumber"
            },
            1: {
                name: "country_code",
                required: !0,
                b: 5,
                type: Number
            },
            2: {
                name: "national_number",
                required: !0,
                b: 4,
                type: Number
            },
            3: {
                name: "extension",
                b: 9,
                type: String
            },
            4: {
                name: "italian_leading_zero",
                b: 8,
                type: Boolean
            },
            8: {
                name: "number_of_leading_zeros",
                b: 5,
                defaultValue: 1,
                type: Number
            },
            5: {
                name: "raw_input",
                b: 9,
                type: String
            },
            6: {
                name: "country_code_source",
                b: 14,
                defaultValue: 0,
                type: wa
            },
            7: {
                name: "preferred_domestic_carrier_code",
                b: 9,
                type: String
            }
        })), a
    }, O.ctor = O, O.ctor.f = O.prototype.f;
    var P = {
            1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
            7: ["RU", "KZ"],
            20: ["EG"],
            27: ["ZA"],
            30: ["GR"],
            31: ["NL"],
            32: ["BE"],
            33: ["FR"],
            34: ["ES"],
            36: ["HU"],
            39: ["IT", "VA"],
            40: ["RO"],
            41: ["CH"],
            43: ["AT"],
            44: ["GB", "GG", "IM", "JE"],
            45: ["DK"],
            46: ["SE"],
            47: ["NO", "SJ"],
            48: ["PL"],
            49: ["DE"],
            51: ["PE"],
            52: ["MX"],
            53: ["CU"],
            54: ["AR"],
            55: ["BR"],
            56: ["CL"],
            57: ["CO"],
            58: ["VE"],
            60: ["MY"],
            61: ["AU", "CC", "CX"],
            62: ["ID"],
            63: ["PH"],
            64: ["NZ"],
            65: ["SG"],
            66: ["TH"],
            81: ["JP"],
            82: ["KR"],
            84: ["VN"],
            86: ["CN"],
            90: ["TR"],
            91: ["IN"],
            92: ["PK"],
            93: ["AF"],
            94: ["LK"],
            95: ["MM"],
            98: ["IR"],
            211: ["SS"],
            212: ["MA", "EH"],
            213: ["DZ"],
            216: ["TN"],
            218: ["LY"],
            220: ["GM"],
            221: ["SN"],
            222: ["MR"],
            223: ["ML"],
            224: ["GN"],
            225: ["CI"],
            226: ["BF"],
            227: ["NE"],
            228: ["TG"],
            229: ["BJ"],
            230: ["MU"],
            231: ["LR"],
            232: ["SL"],
            233: ["GH"],
            234: ["NG"],
            235: ["TD"],
            236: ["CF"],
            237: ["CM"],
            238: ["CV"],
            239: ["ST"],
            240: ["GQ"],
            241: ["GA"],
            242: ["CG"],
            243: ["CD"],
            244: ["AO"],
            245: ["GW"],
            246: ["IO"],
            247: ["AC"],
            248: ["SC"],
            249: ["SD"],
            250: ["RW"],
            251: ["ET"],
            252: ["SO"],
            253: ["DJ"],
            254: ["KE"],
            255: ["TZ"],
            256: ["UG"],
            257: ["BI"],
            258: ["MZ"],
            260: ["ZM"],
            261: ["MG"],
            262: ["RE", "YT"],
            263: ["ZW"],
            264: ["NA"],
            265: ["MW"],
            266: ["LS"],
            267: ["BW"],
            268: ["SZ"],
            269: ["KM"],
            290: ["SH", "TA"],
            291: ["ER"],
            297: ["AW"],
            298: ["FO"],
            299: ["GL"],
            350: ["GI"],
            351: ["PT"],
            352: ["LU"],
            353: ["IE"],
            354: ["IS"],
            355: ["AL"],
            356: ["MT"],
            357: ["CY"],
            358: ["FI", "AX"],
            359: ["BG"],
            370: ["LT"],
            371: ["LV"],
            372: ["EE"],
            373: ["MD"],
            374: ["AM"],
            375: ["BY"],
            376: ["AD"],
            377: ["MC"],
            378: ["SM"],
            380: ["UA"],
            381: ["RS"],
            382: ["ME"],
            383: ["XK"],
            385: ["HR"],
            386: ["SI"],
            387: ["BA"],
            389: ["MK"],
            420: ["CZ"],
            421: ["SK"],
            423: ["LI"],
            500: ["FK"],
            501: ["BZ"],
            502: ["GT"],
            503: ["SV"],
            504: ["HN"],
            505: ["NI"],
            506: ["CR"],
            507: ["PA"],
            508: ["PM"],
            509: ["HT"],
            590: ["GP", "BL", "MF"],
            591: ["BO"],
            592: ["GY"],
            593: ["EC"],
            594: ["GF"],
            595: ["PY"],
            596: ["MQ"],
            597: ["SR"],
            598: ["UY"],
            599: ["CW", "BQ"],
            670: ["TL"],
            672: ["NF"],
            673: ["BN"],
            674: ["NR"],
            675: ["PG"],
            676: ["TO"],
            677: ["SB"],
            678: ["VU"],
            679: ["FJ"],
            680: ["PW"],
            681: ["WF"],
            682: ["CK"],
            683: ["NU"],
            685: ["WS"],
            686: ["KI"],
            687: ["NC"],
            688: ["TV"],
            689: ["PF"],
            690: ["TK"],
            691: ["FM"],
            692: ["MH"],
            800: ["001"],
            808: ["001"],
            850: ["KP"],
            852: ["HK"],
            853: ["MO"],
            855: ["KH"],
            856: ["LA"],
            870: ["001"],
            878: ["001"],
            880: ["BD"],
            881: ["001"],
            882: ["001"],
            883: ["001"],
            886: ["TW"],
            888: ["001"],
            960: ["MV"],
            961: ["LB"],
            962: ["JO"],
            963: ["SY"],
            964: ["IQ"],
            965: ["KW"],
            966: ["SA"],
            967: ["YE"],
            968: ["OM"],
            970: ["PS"],
            971: ["AE"],
            972: ["IL"],
            973: ["BH"],
            974: ["QA"],
            975: ["BT"],
            976: ["MN"],
            977: ["NP"],
            979: ["001"],
            992: ["TJ"],
            993: ["TM"],
            994: ["AZ"],
            995: ["GE"],
            996: ["KG"],
            998: ["UZ"]
        },
        xa = {
            AC: [, [, , "[46]\\d{4}|[01589]\\d{5}", , , , , , , [5, 6]],
                [, , "6[2-467]\\d{3}", , , , "62889", , , [5]],
                [, , "4\\d{4}", , , , "40123", , , [5]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "[01589]\\d{5}", , , , "542011", , , [6]], , , [, , , , , , , , , [-1]]
            ],
            AD: [, [, , "[16]\\d{5,8}|[37-9]\\d{5}", , , , , , , [6, 8, 9]],
                [, , "[78]\\d{5}", , , , "712345", , , [6]],
                [, , "(?:3\\d|6(?:[0-8]|90\\d{2}))\\d{4}", , , , "312345", , , [6, 9]],
                [, , "180[02]\\d{4}", , , , "18001234", , , [8]],
                [, , "[19]\\d{5}", , , , "912345", , , [6]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AD", 376, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{3})", "$1 $2", ["[137-9]|6[0-8]"]],
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["180", "180[02]"]],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["690"]]
                ], , [, , , , , , , , , [-1]], , , [, , "1800\\d{4}", , , , "18000000", , , [8]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AE: [, [, , "[2-79]\\d{7,8}|800\\d{2,9}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                [, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8],
                    [7]
                ],
                [, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
                [, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
                [, , "900[02]\\d{5}", , , , "900234567", , , [9]],
                [, , "700[05]\\d{5}", , , , "700012345", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AE", 971, "00", "0", , , "0", , , , [
                    [, "([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"], "0$1"],
                    [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                    [, "([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]00"], "$1"],
                    [, "([68]00)(\\d{2,9})", "$1 $2", ["[68]00"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "600[25]\\d{5}", , , , "600212345", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            AF: [, [, , "[2-7]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", , , , "234567890", , , , [7]],
                [, , "7(?:[014-9]\\d|2[89]|30)\\d{6}", , , , "701234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [
                    [, "([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AG: [, [, , "[2589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", , , , "2684601234", , , , [7]],
                [, , "268(?:464|7(?:1[3-9]|2\\d|3[246]|64|7[0-689]|8[02-68]))\\d{4}", , , , "2684641234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , "26848[01]\\d{4}", , , , "2684801234", , , , [7]], "AG", 1, "011", "1", , , "1", , , , , , [, , "26840[69]\\d{4}", , , , "2684061234", , , , [7]], , "268", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AI: [, [, , "[2589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "2644(?:6[12]|9[78])\\d{4}", , , , "2644612345", , , , [7]],
                [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "AI", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "264", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AL: [, [, , "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", , , , , , , [6, 7, 8, 9],
                    [5]
                ],
                [, , "(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]\\d|6\\d{2}))\\d{4}", , , , "22345678", , , [8],
                    [5, 6, 7]
                ],
                [, , "6(?:[689][2-9]|7[2-6])\\d{6}", , , , "662123456", , , [9]],
                [, , "800\\d{4}", , , , "8001234", , , [7]],
                [, , "900[1-9]\\d{2}", , , , "900123", , , [6]],
                [, , "808[1-9]\\d{2}", , , , "808123", , , [6]],
                [, , "700[2-9]\\d{4}", , , , "70021234", , , [8]],
                [, , , , , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [
                    [, "(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"], "0$1"],
                    [, "(6\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"], "0$1"],
                    [, "(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|[79]|8[016-9]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AM: [, [, , "[1-9]\\d{7}", , , , , , , [8],
                    [5, 6]
                ],
                [, , "(?:1[0-2]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}", , , , "10123456", , , , [5, 6]],
                [, , "(?:4[1349]|55|77|88|9[1-9])\\d{6}", , , , "77123456"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "90[016]\\d{5}", , , , "90012345"],
                [, , "80[1-4]\\d{5}", , , , "80112345"],
                [, , , , , , , , , [-1]],
                [, , "60(?:2[078]|[3-7]\\d|8[0-5])\\d{4}", , , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                    [, "(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|88|9[1-9]"], "0$1"],
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"],
                    [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AO: [, [, , "[29]\\d{8}", , , , , , , [9]],
                [, , "2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}", , , , "222123456"],
                [, , "9[1-49]\\d{7}", , , , "923123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AO", 244, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AR: [, [, , "11\\d{8}|[2368]\\d{9}|9\\d{10}", , , , , , , [10, 11],
                    [6, 7, 8]
                ],
                [, , "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}", , , , "1123456789", , , [10],
                    [6, 7, 8]
                ],
                [, , "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})", , , , "91123456789", , , , [6, 7, 8]],
                [, , "800\\d{7}", , , , "8001234567", , , [10]],
                [, , "60[04579]\\d{7}", , , , "6001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1", , , [
                    [, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                    [, "(\\d{2})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                    [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                    [, "(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], "0$1"],
                    [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], "0$1"],
                    [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], "0$1"],
                    [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], "0$1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", , 1],
                    [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                    [, "(\\d{3})", "$1", ["1[0-2]|911"], "$1"]
                ],
                [
                    [, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                    [, "(9)(11)(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["911"]],
                    [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]],
                    [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9[23]"]],
                    [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], "0$1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", , 1],
                    [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1]
                ],
                [, , , , , , , , , [-1]], , , [, , "810\\d{7}", , , , "8101234567", , , [10]],
                [, , "810\\d{7}", , , , "8101234567", , , [10]], , , [, , , , , , , , , [-1]]
            ],
            AS: [, [, , "[5689]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [7]],
                [, , "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", , , , "6847331234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "AS", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "684", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AT: [, [, , "[1-9]\\d{3,12}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    [3]
                ],
                [, , "1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}", , , , "1234567890", , , , [3]],
                [, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", , , , "664123456", , , [7, 8, 9, 10, 11, 12, 13]],
                [, , "800\\d{6,10}", , , , "800123456", , , [9, 10, 11, 12, 13]],
                [, , "9(?:0[01]|3[019])\\d{6,10}", , , , "900123456", , , [9, 10, 11, 12, 13]],
                [, , "8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}", , , , "810123456", , , [8, 9, 10, 11, 12, 13]],
                [, , , , , , , , , [-1]],
                [, , "780\\d{6,10}", , , , "780123456", , , [9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [
                    [, "(116\\d{3})", "$1", ["116"], "$1"],
                    [, "(1)(\\d{3,12})", "$1 $2", ["1"], "0$1"],
                    [, "(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                    [, "(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"], "0$1"],
                    [, "(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"], "0$1"],
                    [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"], "0$1"],
                    [, "(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}", , , , "50123", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], , , [, , , , , , , , , [-1]]
            ],
            AU: [, [, , "1\\d{4,9}|[2-578]\\d{8}", , , , , , , [5, 6, 7, 8, 9, 10]],
                [, , "[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}", , , , "212345678", , , [9],
                    [8]
                ],
                [, , "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                [, , "19(?:0[0126]\\d|[679])\\d{5}", , , , "1900123456", , , [8, 10]],
                [, , "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}", , , , "1300123456", , , [6, 8, 10]],
                [, , "500\\d{6}", , , , "500123456", , , [9]],
                [, , "550\\d{6}", , , , "550123456", , , [9]], "AU", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011)|001[14-689]", "0", , , "0", , "0011", , [
                    [, "([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                    [, "(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                    [, "(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                    [, "(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]],
                    [, "(180)(2\\d{3})", "$1 $2", ["180", "1802"]],
                    [, "(19\\d)(\\d{3})", "$1 $2", ["19[13]"]],
                    [, "(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]],
                    [, "(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]
                ], , [, , "16\\d{3,7}", , , , "1612345", , , [5, 6, 7, 8, 9]], 1, , [, , "1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))", , , , "1300123456", , , [6, 7, 8, 10]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AW: [, [, , "[25-9]\\d{6}", , , , , , , [7]],
                [, , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345"],
                [, , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234"],
                [, , "800\\d{4}", , , , "8001234"],
                [, , "900\\d{4}", , , , "9001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "28\\d{5}|501\\d{4}", , , , "5011234"], "AW", 297, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            AX: [, [, , "1\\d{5,11}|[35]\\d{5,9}|2\\d{4,9}|4\\d{5,10}|6\\d{7,9}|7\\d{4,9}|8\\d{6,9}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                [, , "18[1-8]\\d{3,9}", , , , "181234567", , , [6, 7, 8, 9, 10, 11, 12]],
                [, , "4\\d{5,10}|50\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10, 11]],
                [, , "800\\d{4,7}", , , , "8001234567", , , [7, 8, 9, 10]],
                [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AX", 358, "00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))", "0", , , "0", , "00", , , , [, , , , , , , , , [-1]], , , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})", , , , "1001234", , , [5, 6, 7, 8, 9, 10]],
                [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", , , , "10112345", , , [5, 6, 7, 8, 9, 10]], , , [, , , , , , , , , [-1]]
            ],
            AZ: [, [, , "[1-9]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}", , , , "123123456", , , , [7]],
                [, , "(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}", , , , "401234567"],
                [, , "88\\d{7}", , , , "881234567"],
                [, , "900200\\d{3}", , , , "900200123"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2(?:[0-36]|[45]2)|365"], "(0$1)"],
                    [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BA: [, [, , "[3-9]\\d{7,8}", , , , , , , [8, 9],
                    [6]
                ],
                [, , "(?:3(?:[05679][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [8],
                    [6]
                ],
                [, , "6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}", , , , "61123456"],
                [, , "8[08]\\d{6}", , , , "80123456", , , [8]],
                [, , "9[0246]\\d{6}", , , , "90123456", , , [8]],
                [, , "8[12]\\d{6}", , , , "82123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BA", 387, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "70(?:3[0146]|[56]0)\\d{4}", , , , "70341234", , , [8]], , , [, , , , , , , , , [-1]]
            ],
            BB: [, [, , "[2589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [7]],
                [, , "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}", , , , "2462501234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900\\d{7}|246976\\d{4}", , , , "9002123456", , , , [7]],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , "24631\\d{5}", , , , "2463101234", , , , [7]], "BB", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "246", [, , , , , , , , , [-1]],
                [, , "246(?:292|367|4(?:1[7-9]|3[01]|44|67)|736)\\d{4}", , , , "2464301234", , , , [7]], , , [, , , , , , , , , [-1]]
            ],
            BD: [, [, , "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", , , , , , , [6, 7, 8, 9, 10]],
                [, , "2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-9]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}", , , , "27111234", , , [6, 7, 8, 9]],
                [, , "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", , , , "1812345678", , , [10]],
                [, , "80[03]\\d{7}", , , , "8001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "96(?:0[469]|1[0-4]|3[389]|6[69]|7[78])\\d{6}", , , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [
                    [, "(2)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
                    [, "(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"], "0$1"],
                    [, "(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[01367])"], "0$1"],
                    [, "(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BE: [, [, , "[1-9]\\d{7,8}", , , , , , , [8, 9]],
                [, , "(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}", , , , "12345678", , , [8]],
                [, , "4(?:56|6[0135-8]|[79]\\d|8[3-9])\\d{6}", , , , "470123456", , , [9]],
                [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , "(?:70[2-467]|90[0-79])\\d{5}", , , , "90123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[5-9]"], "0$1"],
                    [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"], "0$1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "78\\d{6}", , , , "78123456", , , [8]], , , [, , , , , , , , , [-1]]
            ],
            BF: [, [, , "[25-7]\\d{7}", , , , , , , [8]],
                [, , "2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234"],
                [, , "(?:5[15-8]|[67]\\d)\\d{6}", , , , "70123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BF", 226, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BG: [, [, , "[23567]\\d{5,7}|[489]\\d{6,8}", , , , , , , [6, 7, 8, 9],
                    [4, 5]
                ],
                [, , "2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}", , , , "2123456", , , [6, 7, 8],
                    [4, 5]
                ],
                [, , "(?:8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}|4(?:3[0789]|8\\d)\\d{5}", , , , "48123456", , , [8, 9]],
                [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , "90\\d{6}", , , , "90123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , "700\\d{5}", , , , "70012345", , , [8]],
                [, , , , , , , , , [-1]], "BG", 359, "00", "0", , , "0", , , , [
                    [, "(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                    [, "(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["99[69]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BH: [, [, , "[136-9]\\d{7}", , , , , , , [8]],
                [, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}", , , , "17001234"],
                [, , "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}", , , , "36001234"],
                [, , "80\\d{6}", , , , "80123456"],
                [, , "(?:87|9[014578])\\d{6}", , , , "90123456"],
                [, , "84\\d{6}", , , , "84123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BH", 973, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BI: [, [, , "[267]\\d{7}", , , , , , , [8]],
                [, , "22\\d{6}", , , , "22201234"],
                [, , "(?:29|6[189]|7[124-9])\\d{6}", , , , "79561234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BI", 257, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BJ: [, [, , "[2689]\\d{7}", , , , , , , [8]],
                [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", , , , "20211234"],
                [, , "(?:6\\d|9[03-9])\\d{6}", , , , "90011234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "857[58]\\d{4}", , , , "85751234"], "BJ", 229, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "81\\d{6}", , , , "81123456"], , , [, , , , , , , , , [-1]]
            ],
            BL: [, [, , "[56]\\d{8}", , , , , , , [9]],
                [, , "590(?:2[7-9]|5[12]|87)\\d{4}", , , , "590271234"],
                [, , "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BL", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BM: [, [, , "[4589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}", , , , "4412345678", , , , [7]],
                [, , "441(?:[37]\\d|5[0-39])\\d{5}", , , , "4413701234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "BM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "441", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BN: [, [, , "[2-578]\\d{6}", , , , , , , [7]],
                [, , "2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}", , , , "2345678"],
                [, , "22[89]\\d{4}|[78]\\d{6}", , , , "7123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BN", 673, "00", , , , , , , , [
                    [, "([2-578]\\d{2})(\\d{4})", "$1 $2", ["[2-578]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BO: [, [, , "[23467]\\d{7}|8\\d{8}", , , , , , , [8, 9],
                    [7]
                ],
                [, , "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [8],
                    [7]
                ],
                [, , "[67]\\d{7}", , , , "71234567", , , [8]],
                [, , "80017\\d{4}", , , , "800171234", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BO", 591, "00(1\\d)?", "0", , , "0(1\\d)?", , , , [
                    [, "([234])(\\d{7})", "$1 $2", ["[2-4]"], , "0$CC $1"],
                    [, "([67]\\d{7})", "$1", ["[67]"], , "0$CC $1"],
                    [, "(800)(\\d{2})(\\d{4})", "$1 $2 $3", ["800"], , "0$CC $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BQ: [, [, , "[347]\\d{6}", , , , , , , [7]],
                [, , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", , , , "7151234"],
                [, , "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BQ", 599, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BR: [, [, , "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))", , , , , , , [8, 9, 10, 11]],
                [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [10],
                    [8]
                ],
                [, , "(?:[189][1-9]|2[12478])(?:7|9\\d)\\d{7}|(?:3[1-578]|[46][1-9]|5[13-5]|7[13-579])(?:[6-8]|9\\d?)\\d{7}", , , , "11961234567", , , [10, 11],
                    [8]
                ],
                [, , "800\\d{6,7}", , , , "800123456", , , [9, 10]],
                [, , "(?:300|[59]00\\d?)\\d{6}", , , , "300123456", , , [9, 10]],
                [, , "(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}", , , , "40041234", , , [8, 10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["300|40[02]", "300|40(?:0|20)"]],
                    [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
                    [, "(\\d{3,5})", "$1", ["1[125689]"]],
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:0[1-9]|[1-9])"]],
                    [, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:0[1-9]|[1-9])"]],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"],
                    [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)", "0 $CC ($1)"]
                ],
                [
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["300|40[02]", "300|40(?:0|20)"]],
                    [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"],
                    [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)", "0 $CC ($1)"]
                ],
                [, , , , , , , , , [-1]], , , [, , "(?:300\\d|40(?:0\\d|20))\\d{4}", , , , "40041234", , , [8]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BS: [, [, , "[2589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", , , , "2423456789", , , , [7]],
                [, , "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", , , , "2423591234", , , , [7]],
                [, , "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , , [7]],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "BS", 1, "011?", "1", , , "1", , "011", , , , [, , , , , , , , , [-1]], , "242", [, , , , , , , , , [-1]],
                [, , "242225[0-46-9]\\d{3}", , , , "2422250123"], , , [, , , , , , , , , [-1]]
            ],
            BT: [, [, , "[1-8]\\d{6,7}", , , , , , , [7, 8],
                    [6]
                ],
                [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [7],
                    [6]
                ],
                [, , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BT", 975, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]],
                    [, "([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BW: [, [, , "[2-79]\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", , , , "2401234", , , [7]],
                [, , "7(?:[1-6]\\d|7[014-8])\\d{5}", , , , "71123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , "90\\d{5}", , , , "9012345", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "79[12][01]\\d{4}", , , , "79101234", , , [8]], "BW", 267, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                    [, "(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                    [, "(90)(\\d{5})", "$1 $2", ["90"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BY: [, [, , "[1-4]\\d{8}|8(?:0(?:0\\d{3,7}|[13]\\d{7})|(?:10|20\\d)\\d{7})|9\\d{9,10}", , , , , , , [6, 7, 8, 9, 10, 11],
                    [5]
                ],
                [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [9],
                    [5, 6, 7]
                ],
                [, , "(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}", , , , "294911911", , , [9]],
                [, , "8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}", , , , "8011234567"],
                [, , "(?:810|902)\\d{7}", , , , "9021234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "249\\d{6}", , , , "249123456", , , [9]], "BY", 375, "810", "8", , , "8?0?", , "8~10", , [
                    [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"],
                    [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                    [, "([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"],
                    [, "(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"],
                    [, "(800)(\\d{3})", "$1 $2", ["800"], "8 $1"],
                    [, "(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]
                ], , [, , , , , , , , , [-1]], , , [, , "8(?:0[13]|10|20\\d)\\d{7}|800\\d{3,7}|902\\d{7}", , , , "82012345678"],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            BZ: [, [, , "[2-8]\\d{6}|0\\d{10}", , , , , , , [7, 11]],
                [, , "(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}", , , , "2221234", , , [7]],
                [, , "6[0-35-7]\\d{5}", , , , "6221234", , , [7]],
                [, , "0800\\d{7}", , , , "08001234123", , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "BZ", 501, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                    [, "(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["080", "0800"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CA: [, [, , "[2-9]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "2042345678", , , , [7]],
                [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "2042345678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "CA", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CC: [, [, , "[1458]\\d{5,9}", , , , , , , [6, 7, 8, 9, 10]],
                [, , "8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [9],
                    [8]
                ],
                [, , "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                [, , "19(?:0[0126]\\d|[679])\\d{5}", , , , "1900123456", , , [8, 10]],
                [, , "13(?:00\\d{2})?\\d{4}", , , , "1300123456", , , [6, 10]],
                [, , "500\\d{6}", , , , "500123456", , , [9]],
                [, , "550\\d{6}", , , , "550123456", , , [9]], "CC", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CD: [, [, , "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", , , , , , , [7, 9]],
                [, , "1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}", , , , "1234567"],
                [, , "8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}", , , , "991234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"], "0$1"],
                    [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"], "0$1"],
                    [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CF: [, [, , "[278]\\d{7}", , , , , , , [8]],
                [, , "2[12]\\d{6}", , , , "21612345"],
                [, , "7[0257]\\d{6}", , , , "70012345"],
                [, , , , , , , , , [-1]],
                [, , "8776\\d{4}", , , , "87761234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CF", 236, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CG: [, [, , "[028]\\d{8}", , , , , , , [9]],
                [, , "222[1-589]\\d{5}", , , , "222123456"],
                [, , "0[14-6]\\d{7}", , , , "061234567"],
                [, , , , , , , , , [-1]],
                [, , "80(?:0\\d{2}|11[01])\\d{4}", , , , "800123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CG", 242, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
                    [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["800"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CH: [, [, , "[2-9]\\d{8}|860\\d{9}", , , , , , , [9, 12]],
                [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [9]],
                [, , "7[5-9]\\d{7}", , , , "781234567", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "90[016]\\d{6}", , , , "900123456", , , [9]],
                [, , "84[0248]\\d{6}", , , , "840123456", , , [9]],
                [, , "878\\d{6}", , , , "878123456", , , [9]],
                [, , , , , , , , , [-1]], "CH", 41, "00", "0", , , "0", , , , [
                    [, "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1"],
                    [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"], "0$1"]
                ], , [, , "74[0248]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
                [, , "5[18]\\d{7}", , , , "581234567", , , [9]], , , [, , "860\\d{9}", , , , "860123456789", , , [12]]
            ],
            CI: [, [, , "[02-8]\\d{7}", , , , , , , [8]],
                [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", , , , "21234567"],
                [, , "(?:0[1-9]|[45]\\d|6[014-9]|7[124-9]|8[4-9])\\d{6}", , , , "01234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CI", 225, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CK: [, [, , "[2-8]\\d{4}", , , , , , , [5]],
                [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234"],
                [, , "[5-8]\\d{4}", , , , "71234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CK", 682, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{3})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CL: [, [, , "1230\\d{7}|[2-46-9]\\d{8,10}|5[1-3578]\\d{7}", , , , , , , [9, 10, 11],
                    [7, 8]
                ],
                [, , "2(?:1962\\d{4}|2\\d{7}|32[0-467]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[3-9])\\d{7}", , , , "221234567", , , [9],
                    [7, 8]
                ],
                [, , "2(?:1962\\d{4}|2\\d{7}|32[0-467]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[3-9])\\d{7}", , , , "961234567", , , [9],
                    [8]
                ],
                [, , "800\\d{6}|1230\\d{7}", , , , "800123456", , , [9, 11]],
                [, , , , , , , , , [-1]],
                [, , "600\\d{7,8}", , , , "6001234567", , , [10, 11]],
                [, , , , , , , , , [-1]],
                [, , "44\\d{7}", , , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "0", , , "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))", , , 1, [
                    [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)", "$CC ($1)"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)"],
                    [, "(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1"],
                    [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"], "$1"],
                    [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"], "$1"],
                    [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"], "$1"],
                    [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)"],
                    [, "(\\d{4,5})", "$1", ["[1-9]"], "$1"]
                ],
                [
                    [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)", "$CC ($1)"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)"],
                    [, "(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1"],
                    [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"], "$1"],
                    [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"], "$1"],
                    [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"], "$1"],
                    [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)"]
                ],
                [, , , , , , , , , [-1]], , , [, , "600\\d{7,8}", , , , "6001234567", , , [10, 11]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CM: [, [, , "[2368]\\d{7,8}", , , , , , , [8, 9]],
                [, , "2(?:22|33|4[23])\\d{6}", , , , "222123456", , , [9]],
                [, , "6[5-9]\\d{7}", , , , "671234567", , , [9]],
                [, , "88\\d{6}", , , , "88012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CM", 237, "00", , , , , , , , [
                    [, "([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CN: [, [, , "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", , , , , , , [7, 8, 9, 10, 11, 12],
                    [5, 6]
                ],
                [, , "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})", , , , "1012345678", , , , [5, 6]],
                [, , "1(?:[38]\\d{3}|4[57]\\d{2}|5[0-35-9]\\d{2}|66\\d{2}|7(?:[0-35-8]\\d{2}|40[0-5])|9[89]\\d{2})\\d{6}", , , , "13123456789", , , [11]],
                [, , "(?:10)?800\\d{7}", , , , "8001234567", , , [10, 12]],
                [, , "16[08]\\d{5}", , , , "16812345", , , [8]],
                [, , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", , , , "4001234567", , , [7, 8, 9, 10, 11],
                    [5, 6]
                ],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CN", 86, "(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))?00", "0", , , "(1(?:[12]\\d{3}|79\\d{2}|9[0-7]\\d{2}))|0", , "00", , [
                    [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                    [, "(\\d{5,6})", "$1", ["100|95"]],
                    [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                    [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1", "$CC $1"],
                    [, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"]],
                    [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                    [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                    [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"], , "$CC $1"],
                    [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                    [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                ],
                [
                    [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                    [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                    [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1", "$CC $1"],
                    [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                    [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                    [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"], , "$CC $1"],
                    [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                    [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                ],
                [, , , , , , , , , [-1]], , , [, , "(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}", , , , "4001234567", , , [10, 11, 12]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CO: [, [, , "(?:[13]\\d{0,3}|[24-8])\\d{7}", , , , , , , [8, 10, 11],
                    [7]
                ],
                [, , "[124-8][2-9]\\d{6}", , , , "12345678", , , [8],
                    [7]
                ],
                [, , "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", , , , "3211234567", , , [10]],
                [, , "1800\\d{7}", , , , "18001234567", , , [11]],
                [, , "19(?:0[01]|4[78])\\d{7}", , , , "19001234567", , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:44|56))?", , , , [
                    [, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)", "0$CC $1"],
                    [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                    [, "(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1"]
                ],
                [
                    [, "(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)", "0$CC $1"],
                    [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                    [, "(1)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"]]
                ],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CR: [, [, , "[24-9]\\d{7,9}", , , , , , , [8, 10]],
                [, , "2(?:[024-7]\\d{2}|1(?:0[7-9]|[1-9]\\d))\\d{4}", , , , "22123456", , , [8]],
                [, , "5(?:0[01]|7[0-3])\\d{5}|6(?:[0-4]\\d{3}|500[01])\\d{3}|(?:7[0-3]|8[3-9])\\d{6}", , , , "83123456", , , [8]],
                [, , "800\\d{7}", , , , "8001234567", , , [10]],
                [, , "90[059]\\d{7}", , , , "9001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "210[0-6]\\d{4}|4\\d{7}|5100\\d{4}", , , , "40001234", , , [8]], "CR", 506, "00", , , , "(19(?:0[012468]|1[09]|20|66|77|99))", , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], , "$CC $1"],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"], , "$CC $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CU: [, [, , "[2-57]\\d{5,7}", , , , , , , [6, 7, 8],
                    [4, 5]
                ],
                [, , "2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}", , , , "71234567", , , , [4, 5]],
                [, , "5\\d{7}", , , , "51234567", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [
                    [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                    [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"],
                    [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CV: [, [, , "[2-59]\\d{6}", , , , , , , [7]],
                [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", , , , "2211234"],
                [, , "(?:[34][36]|5[1-389]|9\\d)\\d{5}", , , , "9911234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CV", 238, "0", , , , , , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CW: [, [, , "[134679]\\d{6,7}", , , , , , , [7, 8]],
                [, , "9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", , , , "94151234", , , [8]],
                [, , "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", , , , "95181234", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "60[0-2]\\d{4}", , , , "6001234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "CW", 599, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]],
                    [, "(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                ], , [, , "955\\d{5}", , , , "95581234", , , [8]], 1, , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CX: [, [, , "[1458]\\d{5,9}", , , , , , , [6, 7, 8, 9, 10]],
                [, , "8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", , , , "891641234", , , [9],
                    [8]
                ],
                [, , "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", , , , "412345678", , , [9]],
                [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                [, , "19(?:0[0126]\\d|[679])\\d{5}", , , , "1900123456", , , [8, 10]],
                [, , "13(?:00\\d{2})?\\d{4}", , , , "1300123456", , , [6, 8, 10]],
                [, , "500\\d{6}", , , , "500123456", , , [9]],
                [, , "550\\d{6}", , , , "550123456", , , [9]], "CX", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            CY: [, [, , "[257-9]\\d{7}", , , , , , , [8]],
                [, , "2[2-6]\\d{6}", , , , "22345678"],
                [, , "9[4-79]\\d{6}", , , , "96123456"],
                [, , "800\\d{5}", , , , "80001234"],
                [, , "90[09]\\d{5}", , , , "90012345"],
                [, , "80[1-9]\\d{5}", , , , "80112345"],
                [, , "700\\d{5}", , , , "70012345"],
                [, , , , , , , , , [-1]], "CY", 357, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{6})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "(?:50|77)\\d{6}", , , , "77123456"], , , [, , , , , , , , , [-1]]
            ],
            CZ: [, [, , "[2-8]\\d{8}|9\\d{8,11}", , , , , , , [9, 10, 11, 12]],
                [, , "2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}", , , , "212345678", , , [9]],
                [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", , , , "601123456", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [9]],
                [, , "8[134]\\d{7}", , , , "811234567", , , [9]],
                [, , "70[01]\\d{6}", , , , "700123456", , , [9]],
                [, , "9[17]0\\d{6}", , , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [
                    [, "([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                    [, "(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]],
                    [, "(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "9(?:5\\d|7[234])\\d{6}", , , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789"]
            ],
            DE: [, [, , "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [3]
                ],
                [, , "2\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|4(?:0\\d{3,12}|[1-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|6(?:\\d{5,13}|9\\d{3,12})|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-8]\\d|9\\d?)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})", , , , "30123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    [3, 4]
                ],
                [, , "1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7\\d{8,9})", , , , "15123456789", , , [10, 11]],
                [, , "800\\d{7,12}", , , , "8001234567890", , , [10, 11, 12, 13, 14, 15]],
                [, , "137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})", , , , "9001234567", , , [10, 11]],
                [, , "1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})", , , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]],
                [, , "700\\d{8}", , , , "70012345678", , , [11]],
                [, , , , , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [
                    [, "(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                    [, "(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                    [, "(1\\d{3})(\\d{7})", "$1 $2", ["15"], "0$1"],
                    [, "(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                    [, "(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"], "0$1"],
                    [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"], "0$1"],
                    [, "(3\\d{4})(\\d{1,10})", "$1 $2", ["3"], "0$1"],
                    [, "(800)(\\d{7,12})", "$1 $2", ["800"], "0$1"],
                    [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:37|80)|900", "1(?:37|80)|900[1359]"], "0$1"],
                    [, "(1\\d{2})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                    [, "(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                    [, "(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                    [, "(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"], "0$1"],
                    [, "(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"], "0$1"],
                    [, "(138)(\\d{4})", "$1 $2", ["138"], "0$1"],
                    [, "(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"], "0$1"],
                    [, "(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                    [, "(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"]
                ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]],
                [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [, , "1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})", , , , "177991234567", , , [12, 13]]
            ],
            DJ: [, [, , "[27]\\d{7}", , , , , , , [8]],
                [, , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003"],
                [, , "77\\d{6}", , , , "77831001"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "DJ", 253, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            DK: [, [, , "[2-9]\\d{7}", , , , , , , [8]],
                [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "32123456"],
                [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", , , , "20123456"],
                [, , "80\\d{6}", , , , "80123456"],
                [, , "90\\d{6}", , , , "90123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "DK", 45, "00", , , , , , , 1, [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            DM: [, [, , "[57-9]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", , , , "7674201234", , , , [7]],
                [, , "767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}", , , , "7672251234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "DM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "767", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            DO: [, [, , "[589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})", , , , "8092345678", , , , [7]],
                [, , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "DO", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "8[024]9", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            DZ: [, [, , "(?:[1-4]|[5-9]\\d)\\d{7}", , , , , , , [8, 9]],
                [, , "(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}", , , , "12345678"],
                [, , "(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}", , , , "551234567", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "80[3-689]1\\d{5}", , , , "808123456", , , [9]],
                [, , "80[12]1\\d{5}", , , , "801123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "98[23]\\d{6}", , , , "983123456", , , [9]], "DZ", 213, "00", "0", , , "0", , , , [
                    [, "([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                    [, "([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"],
                    [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            EC: [, [, , "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", , , , , , , [8, 9, 10, 11],
                    [7]
                ],
                [, , "[2-7][2-7]\\d{6}", , , , "22123456", , , [8],
                    [7]
                ],
                [, , "9(?:(?:39|[45][89]|7[7-9]|[89]\\d)\\d{2}|6(?:[017-9]\\d{2}|2(?:[0-47-9]\\d|5[1-9]|60)|30\\d))\\d{4}", , , , "991234567", , , [9]],
                [, , "1800\\d{6,7}", , , , "18001234567", , , [10, 11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "[2-7]890\\d{4}", , , , "28901234", , , [8]], "EC", 593, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], "(0$1)"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]
                ],
                [
                    [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[247]|[356][2-8]"]],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                    [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]
                ],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            EE: [, [, , "[3-9]\\d{6,7}|800\\d{6,7}", , , , , , , [7, 8, 10]],
                [, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", , , , "3212345", , , [7]],
                [, , "(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}", , , , "51234567", , , [7, 8]],
                [, , "800(?:0\\d{3}|1\\d|[2-9])\\d{3}", , , , "80012345"],
                [, , "(?:40\\d{2}|900)\\d{4}", , , , "9001234", , , [7, 8]],
                [, , , , , , , , , [-1]],
                [, , "70[0-2]\\d{5}", , , , "70012345", , , [8]],
                [, , , , , , , , , [-1]], "EE", 372, "00", , , , , , , , [
                    [, "([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                    [, "(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]],
                    [, "(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]],
                    [, "([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]
                ], , [, , , , , , , , , [-1]], , , [, , "800[2-9]\\d{3}", , , , "8002123", , , [7]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            EG: [, [, , "1\\d{4,9}|[24-6]\\d{8}|3\\d{7}|[89]\\d{8,9}", , , , , , , [8, 9, 10],
                    [7]
                ],
                [, , "(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|5\\d|7[23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}", , , , "234567890", , , [8, 9],
                    [7]
                ],
                [, , "1[0125]\\d{8}", , , , "1001234567", , , [10]],
                [, , "800\\d{7}", , , , "8001234567", , , [10]],
                [, , "900\\d{7}", , , , "9001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "EG", 20, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                    [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[239])|[4-6]|[89][2-9]"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-25]|[89]00"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            EH: [, [, , "[5-9]\\d{8}", , , , , , , [9]],
                [, , "528[89]\\d{5}", , , , "528812345"],
                [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}", , , , "650123456"],
                [, , "80\\d{7}", , , , "801234567"],
                [, , "89\\d{7}", , , , "891234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "5924[01]\\d{4}", , , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "528[89]", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            ER: [, [, , "[178]\\d{6}", , , , , , , [7],
                    [6]
                ],
                [, , "1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}", , , , "8370362", , , , [6]],
                [, , "17[1-3]\\d{4}|7\\d{6}", , , , "7123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            ES: [, [, , "[5-9]\\d{8}", , , , , , , [9]],
                [, , "8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{6}|9(?:[135]\\d{7}|[28][0-8]\\d{6}|4[1-9]\\d{6}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})", , , , "810123456"],
                [, , "(?:6\\d{6}|7[1-48]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}", , , , "612345678"],
                [, , "[89]00\\d{6}", , , , "800123456"],
                [, , "80[367]\\d{6}", , , , "803123456"],
                [, , "90[12]\\d{6}", , , , "901123456"],
                [, , "70\\d{7}", , , , "701234567"],
                [, , , , , , , , , [-1]], "ES", 34, "00", , , , , , , , [
                    [, "([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                    [, "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "51\\d{7}", , , , "511234567"], , , [, , , , , , , , , [-1]]
            ],
            ET: [, [, , "[1-59]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", , , , "111112345", , , , [7]],
                [, , "9\\d{8}", , , , "911234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [
                    [, "([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            FI: [, [, , "1\\d{4,11}|[2-9]\\d{4,10}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                [, , "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", , , , "1312345678"],
                [, , "4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10, 11]],
                [, , "800\\d{4,7}", , , , "8001234567", , , [7, 8, 9, 10]],
                [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "FI", 358, "00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))", "0", , , "0", , "00", , [
                    [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"], "0$1"],
                    [, "(75\\d{3})", "$1", ["75[12]"], "0$1"],
                    [, "(116\\d{3})", "$1", ["116"], "$1"],
                    [, "(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
                    [, "(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"], "0$1"]
                ], , [, , , , , , , , , [-1]], 1, , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})", , , , "100123", , , [5, 6, 7, 8, 9, 10]],
                [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})", , , , "10112345", , , [5, 6, 7, 8, 9, 10]], , , [, , , , , , , , , [-1]]
            ],
            FJ: [, [, , "[2-9]\\d{6}|0\\d{10}", , , , , , , [7, 11]],
                [, , "(?:3[0-5]\\d|6(?:03|[25-7]\\d)|8[58]\\d)\\d{4}", , , , "3212345", , , [7]],
                [, , "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}", , , , "7012345", , , [7]],
                [, , "0800\\d{7}", , , , "08001234567", , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "FJ", 679, "0(?:0|52)", , , , , , "00", , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]],
                    [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            FK: [, [, , "[2-7]\\d{4}", , , , , , , [5]],
                [, , "[2-47]\\d{4}", , , , "31234"],
                [, , "[56]\\d{4}", , , , "51234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "FK", 500, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            FM: [, [, , "[39]\\d{6}", , , , , , , [7]],
                [, , "3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}", , , , "3201234"],
                [, , "3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}", , , , "3501234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "FM", 691, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            FO: [, [, , "[2-9]\\d{5}", , , , , , , [6]],
                [, , "(?:20|[3-4]\\d|8[19])\\d{4}", , , , "201234"],
                [, , "(?:[27][1-9]|5\\d)\\d{4}", , , , "211234"],
                [, , "80[257-9]\\d{3}", , , , "802123"],
                [, , "90(?:[1345][15-7]|2[125-7]|99)\\d{2}", , , , "901123"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:6[0-36]|88)\\d{4}", , , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [
                    [, "(\\d{6})", "$1", , , "$CC $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            FR: [, [, , "[1-9]\\d{8}", , , , , , , [9]],
                [, , "[1-5]\\d{8}", , , , "123456789"],
                [, , "(?:6\\d|7[3-9])\\d{7}", , , , "612345678"],
                [, , "80[0-5]\\d{6}", , , , "801234567"],
                [, , "89[1-37-9]\\d{6}", , , , "891123456"],
                [, , "8(?:1[0-29]|2[0156]|84|90)\\d{6}", , , , "810123456"],
                [, , , , , , , , , [-1]],
                [, , "9\\d{8}", , , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [
                    [, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                    [, "(1\\d{2})(\\d{3})", "$1 $2", ["11"], "$1"],
                    [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                ],
                [
                    [, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                    [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                ],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "80[6-9]\\d{6}", , , , "806123456"], , , [, , , , , , , , , [-1]]
            ],
            GA: [, [, , "0?\\d{7}", , , , , , , [7, 8]],
                [, , "01\\d{6}", , , , "01441234", , , [8]],
                [, , "0?[2-7]\\d{6}", , , , "06031234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GA", 241, "00", , , , , , , , [
                    [, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GB: [, [, , "\\d{7,10}", , , , , , , [7, 9, 10],
                    [4, 5, 6, 8]
                ],
                [, , "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}", , , , "1212345678", , , [9, 10],
                    [4, 5, 6, 7, 8]
                ],
                [, , "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}", , , , "7400123456", , , [10]],
                [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})", , , , "8001234567"],
                [, , "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", , , , "9012345678", , , [10]],
                [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", , , , "8431234567", , , [7, 10]],
                [, , "70\\d{8}", , , , "7012345678", , , [10]],
                [, , "56\\d{8}", , , , "5612345678", , , [10]], "GB", 44, "00", "0", " x", , "0", , , , [
                    [, "(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"], "0$1"],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"], "0$1"],
                    [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"],
                    [, "(1\\d{3})(\\d{5,6})", "$1 $2", ["1"], "0$1"],
                    [, "(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                    [, "(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                    [, "(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"], "0$1"],
                    [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1"],
                    [, "(800)(\\d{6})", "$1 $2", ["800"], "0$1"]
                ], , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], 1, , [, , , , , , , , , [-1]],
                [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
            ],
            GD: [, [, , "[4589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", , , , "4732691234", , , , [7]],
                [, , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "GD", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "473", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GE: [, [, , "[34578]\\d{8}", , , , , , , [9],
                    [6]
                ],
                [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [6]],
                [, , "5(?:[14]4|5[0157-9]|68|7[0147-9]|9[0-35-9])\\d{6}", , , , "555123456"],
                [, , "800\\d{6}", , , , "800123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "706\\d{6}", , , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"]]
                ], , [, , , , , , , , , [-1]], , , [, , "706\\d{6}", , , , "706123456"],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GF: [, [, , "[56]\\d{8}", , , , , , , [9]],
                [, , "594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}", , , , "594101234"],
                [, , "694(?:[0-249]\\d|3[0-48])\\d{4}", , , , "694201234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GF", 594, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GG: [, [, , "[135789]\\d{6,9}", , , , , , , [7, 9, 10],
                    [6]
                ],
                [, , "1481[25-9]\\d{5}", , , , "1481256789", , , [10],
                    [6]
                ],
                [, , "7(?:781\\d|839\\d|911[17])\\d{5}", , , , "7781123456", , , [10]],
                [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})", , , , "8001234567"],
                [, , "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", , , , "9012345678", , , [10]],
                [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", , , , "8431234567", , , [7, 10]],
                [, , "70\\d{8}", , , , "7012345678", , , [10]],
                [, , "56\\d{8}", , , , "5612345678", , , [10]], "GG", 44, "00", "0", , , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456", , , [10]], , , [, , , , , , , , , [-1]],
                [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]
            ],
            GH: [, [, , "[235]\\d{8}|8\\d{7}", , , , , , , [8, 9],
                    [7]
                ],
                [, , "3(?:0(?:[237]\\d|80)|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", , , , "302345678", , , [9],
                    [7]
                ],
                [, , "(?:2[034678]\\d|5(?:[0457]\\d|6[01]))\\d{6}", , , , "231234567", , , [9]],
                [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GI: [, [, , "[256]\\d{7}", , , , , , , [8]],
                [, , "2(?:00\\d{2}|1(?:6[24-7]\\d|90[0-2])|2(?:2[2457]\\d|50[0-2]))\\d{3}", , , , "20012345"],
                [, , "(?:5[46-8]|62)\\d{6}", , , , "57123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GI", 350, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GL: [, [, , "[1-689]\\d{5}", , , , , , , [6]],
                [, , "(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}", , , , "321000"],
                [, , "(?:[25][1-9]|4[2-9])\\d{4}", , , , "221234"],
                [, , "80\\d{4}", , , , "801234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "3[89]\\d{4}", , , , "381234"], "GL", 299, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GM: [, [, , "[2-9]\\d{6}", , , , , , , [7]],
                [, , "(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234"],
                [, , "[23679]\\d{6}", , , , "3012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GM", 220, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GN: [, [, , "[367]\\d{7,8}", , , , , , , [8, 9]],
                [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", , , , "30241234", , , [8]],
                [, , "6[02356]\\d{7}", , , , "601123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "722\\d{6}", , , , "722123456", , , [9]], "GN", 224, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GP: [, [, , "[56]\\d{8}", , , , , , , [9]],
                [, , "590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", , , , "590201234"],
                [, , "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GP", 590, "00", "0", , , "0", , , , [
                    [, "([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"], "0$1"]
                ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GQ: [, [, , "[23589]\\d{8}", , , , , , , [9]],
                [, , "3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}", , , , "333091234"],
                [, , "(?:222|55[15])\\d{6}", , , , "222123456"],
                [, , "80\\d[1-9]\\d{5}", , , , "800123456"],
                [, , "90\\d[1-9]\\d{5}", , , , "900123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GQ", 240, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                    [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GR: [, [, , "[26-9]\\d{9}", , , , , , , [10]],
                [, , "2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", , , , "2123456789"],
                [, , "6(?:8[57-9]|9\\d)\\d{7}", , , , "6912345678"],
                [, , "800\\d{7}", , , , "8001234567"],
                [, , "90[19]\\d{7}", , , , "9091234567"],
                [, , "8(?:0[16]|12|25)\\d{7}", , , , "8011234567"],
                [, , "70\\d{8}", , , , "7012345678"],
                [, , , , , , , , , [-1]], "GR", 30, "00", , , , , , , , [
                    [, "([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]],
                    [, "(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GT: [, [, , "[2-7]\\d{7}|1[89]\\d{9}", , , , , , , [8, 11]],
                [, , "[267][2-9]\\d{6}", , , , "22456789", , , [8]],
                [, , "[345]\\d{7}", , , , "51234567", , , [8]],
                [, , "18[01]\\d{8}", , , , "18001112222", , , [11]],
                [, , "19\\d{9}", , , , "19001112222", , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GT", 502, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                    [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GU: [, [, , "[5689]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[079]7|2[0167]|3[45]|47|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
                [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[079]7|2[0167]|3[45]|47|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "GU", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "671", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GW: [, [, , "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", , , , , , , [7, 9]],
                [, , "443\\d{6}", , , , "443201234", , , [9]],
                [, , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "40\\d{5}", , , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[5-7]"]],
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["40"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            GY: [, [, , "[2-46-9]\\d{6}", , , , , , , [7]],
                [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", , , , "2201234"],
                [, , "6\\d{6}", , , , "6091234"],
                [, , "(?:289|862)\\d{4}", , , , "2891234"],
                [, , "9008\\d{3}", , , , "9008123"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "GY", 592, "001", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            HK: [, [, , "[2-7]\\d{7}|8[0-3]\\d{6,7}|9\\d{4,10}", , , , , , , [5, 6, 7, 8, 9, 11]],
                [, , "(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])\\d|3(?:[1569][0-24-9]\\d|4[0-246-9]\\d|7[0-24-69]\\d|8(?:40|9\\d))|58(?:0[1-8]|1[2-9]))\\d{4}", , , , "21234567", , , [8]],
                [, , "(?:46(?:0[0-6]|4[07-9])|5(?:[1-59][0-46-9]\\d|6[0-4689]\\d|7(?:[0-2469]\\d|30))|6(?:0[1-9]\\d|[1459]\\d{2}|2(?:[0-57-9]\\d|6[01])|[368][0-57-9]\\d|7[0-79]\\d)|9(?:0[1-9]\\d|1[02-9]\\d|2(?:[0-8]\\d|9[03-9])|[358][0-8]\\d|[467]\\d{2}))\\d{4}", , , , "51234567", , , [8]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", , , , "90012345678", , , [5, 6, 7, 8, 11]],
                [, , , , , , , , , [-1]],
                [, , "8(?:1[0-4679]|2[0-367]|3[02-47])\\d{5}", , , , "81123456", , , [8]],
                [, , , , , , , , , [-1]], "HK", 852, "00(?:[126-9]|30|5[09])?", , , , , , "00", , [
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|[89](?:0[1-9]|[1-9])"]],
                    [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]],
                    [, "(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]],
                    [, "(900)(\\d{2,5})", "$1 $2", ["900"]]
                ], , [, , "7(?:1[0-369]|[23][0-37-9]|47|5[1578]|6[0235]|7[278]|8[236-9]|9[025-9])\\d{5}", , , , "71234567", , , [8]], , , [, , , , , , , , , [-1]],
                [, , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [8]], , , [, , , , , , , , , [-1]]
            ],
            HN: [, [, , "[237-9]\\d{7}", , , , , , , [8]],
                [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|7[013689]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[03-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}", , , , "22123456"],
                [, , "[37-9]\\d{7}", , , , "91234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "HN", 504, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1-$2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            HR: [, [, , "[1-7]\\d{5,8}|[89]\\d{6,8}", , , , , , , [6, 7, 8, 9]],
                [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", , , , "12345678", , , [8, 9],
                    [6, 7]
                ],
                [, , "9(?:01\\d|[1259]\\d{2}|7(?:[0679]\\d|51)|8\\d{1,2})\\d{5}", , , , "921234567", , , [8, 9]],
                [, , "80[01]\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                [, , "6(?:[01]\\d{0,2}|[459]\\d{2})\\d{4}", , , , "611234", , , [6, 7, 8]],
                [, , , , , , , , , [-1]],
                [, , "7[45]\\d{6}", , , , "74123456", , , [8]],
                [, , , , , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [
                    [, "(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                    [, "([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                    [, "(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                    [, "(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"],
                    [, "([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"],
                    [, "(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["80[01]"], "0$1"],
                    [, "(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["80[01]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "(?:62\\d?|72)\\d{6}", , , , "62123456", , , [8, 9]], , , [, , , , , , , , , [-1]]
            ],
            HT: [, [, , "[2-489]\\d{7}", , , , , , , [8]],
                [, , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300"],
                [, , "[34]\\d{7}", , , , "34101234"],
                [, , "8\\d{7}", , , , "80012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:9(?:[67][0-4]|8[0-3589]|9\\d))\\d{5}", , , , "98901234"], "HT", 509, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            HU: [, [, , "[1-9]\\d{7,8}", , , , , , , [8, 9],
                    [6]
                ],
                [, , "(?:1\\d|2[2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|7[2-9]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [8],
                    [6]
                ],
                [, , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [9]],
                [, , "[48]0\\d{6}", , , , "80123456", , , [8]],
                [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "21\\d{7}", , , , "211234567", , , [9]], "HU", 36, "00", "06", , , "06", , , , [
                    [, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"],
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]
                ], , [, , , , , , , , , [-1]], , , [, , "[48]0\\d{6}", , , , "80123456", , , [8]],
                [, , "38\\d{7}", , , , "381234567", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            ID: [, [, , "(?:[1-79]\\d{6,10}|8\\d{7,11})", , , , , , , [7, 8, 9, 10, 11, 12],
                    [5, 6]
                ],
                [, , "2(?:1(?:14\\d{3}|500\\d{3}|\\d{7,8})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", , , , "612345678", , , [7, 8, 9, 10, 11],
                    [5, 6]
                ],
                [, , "(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359])|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}", , , , "812345678", , , [9, 10, 11, 12]],
                [, , "177\\d{6,8}|800\\d{5,7}", , , , "8001234567", , , [8, 9, 10, 11]],
                [, , "809\\d{7}", , , , "8091234567", , , [10]],
                [, , "804\\d{7}", , , , "8041234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "ID", 62, "0(?:0[1789]|10(?:00|1[67]))", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                    [, "(\\d{3})(\\d{5,8})", "$1 $2", ["2[035-9]|[36][02-9]|[4579]"], "(0$1)"],
                    [, "(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                    [, "(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                    [, "(1)(500)(\\d{3})", "$1 $2 $3", ["150", "1500"], "$1"],
                    [, "(177)(\\d{6,8})", "$1 $2", ["177"], "0$1"],
                    [, "(800)(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                    [, "(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                    [, "(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "8071\\d{6}", , , , "8071123456", , , [10]],
                [, , "1500\\d{3}|8071\\d{6}", , , , "8071123456", , , [7, 10]], , , [, , , , , , , , , [-1]]
            ],
            IE: [, [, , "[124-9]\\d{6,9}", , , , , , , [7, 8, 9, 10],
                    [5, 6]
                ],
                [, , "1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})", , , , "2212345", , , , [5, 6]],
                [, , "8(?:22\\d{6}|[35-9]\\d{7})", , , , "850123456", , , [9]],
                [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", , , , "1520123456", , , [10]],
                [, , "18[59]0\\d{6}", , , , "1850123456", , , [10]],
                [, , "700\\d{6}", , , , "700123456", , , [9]],
                [, , "76\\d{7}", , , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [
                    [, "(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                    [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"], "(0$1)"],
                    [, "(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"], "(0$1)"],
                    [, "(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["818"], "(0$1)"],
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"], "(0$1)"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"],
                    [, "(8\\d)(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8[35-9]5"], "0$1"],
                    [, "(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["700"], "0$1"],
                    [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:5|8[059])", "1(?:5|8[059]0)"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "18[59]0\\d{6}", , , , "1850123456", , , [10]],
                [, , "818\\d{6}", , , , "818123456", , , [9]], , , [, , "8[35-9]5\\d{7}", , , , "8551234567", , , [10]]
            ],
            IL: [, [, , "1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}", , , , , , , [4, 7, 8, 9, 10, 11, 12]],
                [, , "(?:153\\d{1,2}|[2-489])\\d{7}", , , , "21234567", , , [8, 11, 12],
                    [7]
                ],
                [, , "5(?:[0-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[6-8]|7[0178]|8[6-9]|9[2-9])|6[2-9]\\d)\\d{5}", , , , "501234567", , , [9]],
                [, , "1(?:80[019]\\d{3}|255)\\d{3}", , , , "1800123456", , , [7, 10]],
                [, , "1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}", , , , "1919123456", , , [8, 9, 10]],
                [, , "1700\\d{6}", , , , "1700123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , "7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6[58]\\d|7\\d{2}|8(?:2\\d|33|55|77|81)|9[2579]\\d)\\d{5}", , , , "771234567", , , [9]], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [
                    [, "([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                    [, "([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                    [, "(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]],
                    [, "(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                    [, "(1255)(\\d{3})", "$1-$2", ["125", "1255"]],
                    [, "(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120", "1200"]],
                    [, "(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121", "1212"]],
                    [, "(1599)(\\d{6})", "$1-$2", ["159", "1599"]],
                    [, "(151)(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["151"]],
                    [, "(\\d{4})", "*$1", ["[2-689]"]]
                ], , [, , , , , , , , , [-1]], , , [, , "1700\\d{6}|[2-689]\\d{3}", , , , "1700123456", , , [4, 10]],
                [, , "[2-689]\\d{3}|1599\\d{6}", , , , "1599123456", , , [4, 10]], , , [, , "151\\d{8,9}", , , , "15112340000", , , [11, 12]]
            ],
            IM: [, [, , "[135789]\\d{6,9}", , , , , , , [10],
                    [6]
                ],
                [, , "1624[5-8]\\d{5}", , , , "1624756789", , , , [6]],
                [, , "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456"],
                [, , "808162\\d{4}", , , , "8081624567"],
                [, , "(?:872299|90[0167]624)\\d{4}", , , , "9016247890"],
                [, , "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}", , , , "8456247890"],
                [, , "70\\d{8}", , , , "7012345678"],
                [, , "56\\d{8}", , , , "5612345678"], "IM", 44, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
            ],
            IN: [, [, , "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", , , , , , , [8, 9, 10, 11, 12, 13],
                    [6, 7]
                ],
                [, , "(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}", , , , "1123456789", , , [10],
                    [6, 7, 8]
                ],
                [, , "(?:6(?:00[0-35]\\d|1279|2(?:0[0-3]|39|6[02]|8[0-2]|9[045])\\d|3(?:0[01]\\d|5(?:0[0-6]|[1-3]\\d)|60\\d|7[05]\\d|8[01]\\d|9[023-6]\\d)|900\\d)|7(?:0\\d{3}|19[0-5]\\d|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|[678][089]))|3(?:[05-8]\\d{2}|1(?:[089]\\d|11|7[5-8])|2(?:[0-49][089]|[5-8]\\d)|3[017-9]\\d|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d{2}|1(?:[015-9]\\d|[23][089]|4[089])|2(?:0[089]|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|[56]\\d[089]|7(?:[089]\\d|11|7[02-8])|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[089]|[89]\\d))|5(?:[0346-8]\\d{2}|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[123][089])|5[017-9]\\d|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-7][089]|[289]\\d)|[1-9]\\d{2})|8(?:[0-79]\\d{2}|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d{2}|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:[01589]\\d{2}|6[67]\\d|7(?:[02-8]\\d|9[04-9]))|1(?:[02-57-9]\\d{2}|1(?:[0-35-9]\\d|4[0-46-9])|6(?:[089]\\d|7[02-8]))|2(?:0(?:[089]\\d|7[02-8])|[14](?:[089]\\d|7[02-8])|[235-9]\\d{2})|3(?:[0357-9]\\d{2}|1(?:[089]\\d|7[02-7])|2(?:[09]\\d|7[02-8]|8[0-689])|4\\d{2}|6(?:[089]\\d|7[02-7]))|[45]\\d{3}|6(?:[02457-9]\\d{2}|1(?:[089]\\d|7[02-8])|3(?:[089]\\d|7[02-8])|6(?:[08]\\d|7[02-8]|9\\d))|7(?:0[07-9]\\d|[1-69]\\d{2}|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d{2}|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-8]))|9(?:[02-9]\\d{2}|1(?:[0289]\\d|7[02-8])))|9\\d{4})\\d{5}", , , , "8123456789", , , [10]],
                [, , "00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", , , , "1800123456"],
                [, , "186[12]\\d{9}", , , , "1861123456789", , , [13]],
                [, , "1860\\d{7}", , , , "18603451234", , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [
                    [, "(\\d{8})", "$1", ["561", "5616", "56161"], "$1", , 1],
                    [, "(\\d{5})(\\d{5})", "$1 $2", ["6(?:[09]0|12|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9", "6(?:[09]0|127|2(?:0[013]|39|6[02]|8[0-2]|9[04])|3(?:0[01]|5[0-3]|60|7[05]|81|9[02-6]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9", "6(?:[09]0|1279|2(?:0[013]|39|6[02]|8[0-2]|9[04])|3(?:0[01]|5[0-3]|60|7[05]|81|9[02-6]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[04-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:[014](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|[16](?:[089]|7[02-7])|2(?:[09]|7[02-8]|8[0-689]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-8]))|9(?:[02-9]|1(?:[0289]|7[02-8])))|9"], "0$1", , 1],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"], "0$1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"], "0$1", , 1],
                    [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"], "0$1", , 1],
                    [, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"], "0$1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1", , 1],
                    [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1", , 1],
                    [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1", , 1],
                    [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1", , 1],
                    [, "(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1", , 1],
                    [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]"], "$1", , 1]
                ], , [, , , , , , , , , [-1]], , , [, , "00800\\d{7}|1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))", , , , "1800123456"],
                [, , "140\\d{7}", , , , "1409305260", , , [10]], , , [, , , , , , , , , [-1]]
            ],
            IO: [, [, , "3\\d{6}", , , , , , , [7]],
                [, , "37\\d{5}", , , , "3709100"],
                [, , "38\\d{5}", , , , "3801234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "IO", 246, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            IQ: [, [, , "[1-7]\\d{7,9}", , , , , , , [8, 9, 10],
                    [6, 7]
                ],
                [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [8, 9],
                    [6, 7]
                ],
                [, , "7[3-9]\\d{8}", , , , "7912345678", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [
                    [, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    [, "([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                    [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            IR: [, [, , "[1-8]\\d{5,9}|9(?:[0-4]\\d{8}|9\\d{8})", , , , , , , [6, 7, 10],
                    [4, 5, 8]
                ],
                [, , "(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:\\d{8}|(?:[16]|[289]\\d?)\\d{3}))|94(?:000|11[0-7]|2\\d{2}|30[01]|440)\\d{5}", , , , "2123456789", , , , [4, 5, 8]],
                [, , "9(?:0(?:[1-35]\\d{2}|44\\d)|[13]\\d{3}|2[0-2]\\d{2}|9(?:[01]\\d{2}|44\\d|810|9(?:0[013]|1[134]|21|9[89])))\\d{5}", , , , "9123456789", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:[2-6]0\\d|993)\\d{7}", , , , "9932123456", , , [10]], "IR", 98, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
                    [, "(\\d{2})(\\d{4,5})", "$1 $2", ["[1-8]"], "0$1"],
                    [, "(\\d{4,5})", "$1", ["96"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "(?:9411[1-7]|94440)\\d{5}", , , , "9411110000", , , [10]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            IS: [, [, , "[4-9]\\d{6}|38\\d{7}", , , , , , , [7, 9]],
                [, , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-79]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", , , , "4101234", , , [7]],
                [, , "38[589]\\d{6}|(?:6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|[67][0-69]|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d)|8(?:2[0-59]|[3469]\\d|5[1-9]|88))\\d{4}", , , , "6111234"],
                [, , "800\\d{4}", , , , "8001234", , , [7]],
                [, , "90\\d{5}", , , , "9011234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "49\\d{5}", , , , "4921234", , , [7]], "IS", 354, "1(?:0(?:01|10|20)|100)|00", , , , , , "00", , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                    [, "(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "809\\d{4}", , , , "8091234", , , [7]], , , [, , "(?:6(?:2[78]|8[1-59])|8(?:7[0189]|80)|95[48])\\d{4}", , , , "6271234", , , [7]]
            ],
            IT: [, [, , "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", , , , , , , [6, 7, 8, 9, 10, 11]],
                [, , "0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", , , , "0212345678"],
                [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", , , , "3123456789", , , [9, 10, 11]],
                [, , "80(?:0\\d{6}|3\\d{3})", , , , "800123456", , , [6, 9]],
                [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", , , , "899123456", , , [6, 8, 9, 10]],
                [, , "84(?:[08]\\d{6}|[17]\\d{3})", , , , "848123456", , , [6, 9]],
                [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
                [, , "55\\d{8}", , , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]],
                    [, "(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                    [, "(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]],
                    [, "(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                    [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                    [, "(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]],
                    [, "(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]],
                    [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]
                ], , [, , , , , , , , , [-1]], 1, , [, , "848\\d{6}", , , , "848123456", , , [9]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            JE: [, [, , "[135789]\\d{6,9}", , , , , , , [10],
                    [6]
                ],
                [, , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [6]],
                [, , "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}", , , , "7797712345"],
                [, , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567"],
                [, , "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678"],
                [, , "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}", , , , "8447034567"],
                [, , "701511\\d{4}", , , , "7015115678"],
                [, , "56\\d{8}", , , , "5612345678"], "JE", 44, "00", "0", , , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", , , , "7640123456"], , , [, , , , , , , , , [-1]],
                [, , "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", , , , "5512345678"], , , [, , , , , , , , , [-1]]
            ],
            JM: [, [, , "[589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}", , , , "8765123456", , , , [7]],
                [, , "876(?:2[14-9]\\d|[348]\\d{2}|5(?:0[3-9]|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", , , , "8762101234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "876", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            JO: [, [, , "[235-9]\\d{7,8}", , , , , , , [8, 9]],
                [, , "(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}", , , , "62001234", , , [8]],
                [, , "7(?:55[0-49]|7[025-9]\\d|8[0-25-9]\\d|9[0-25-9]\\d)\\d{5}", , , , "790123456", , , [9]],
                [, , "80\\d{6}", , , , "80012345", , , [8]],
                [, , "900\\d{5}", , , , "90012345", , , [8]],
                [, , "85\\d{6}", , , , "85012345", , , [8]],
                [, , "70\\d{7}", , , , "700123456", , , [9]],
                [, , , , , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                    [, "(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1"],
                    [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
                    [, "(\\d{3})(\\d{5,6})", "$1 $2", ["8[0158]|9"], "0$1"]
                ], , [, , "74(?:66|77)\\d{5}", , , , "746612345", , , [9]], , , [, , , , , , , , , [-1]],
                [, , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [8]], , , [, , , , , , , , , [-1]]
            ],
            JP: [, [, , "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", , , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]],
                [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}", , , , "312345678", , , [9]],
                [, , "[7-9]0[1-9]\\d{7}", , , , "9012345678", , , [10]],
                [, , "120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", , , , "120123456"],
                [, , "990\\d{6}", , , , "990123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "60\\d{7}", , , , "601234567", , , [9]],
                [, , "50[1-9]\\d{7}", , , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077"], "$1"],
                    [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007", "0077"], "$1"],
                    [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008", "0088"], "$1"],
                    [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["00[36]", "00(?:37|66)"], "$1"],
                    [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["00[36]", "00(?:37|66)"], "$1"],
                    [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["00[36]", "00(?:37|66)"], "$1"],
                    [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["00[36]", "00(?:37|66)"], "$1"],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1"],
                    [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"], "0$1"],
                    [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1"]
                ],
                [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1"],
                    [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"], "0$1"],
                    [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1"]
                ],
                [, , "20\\d{8}", , , , "2012345678", , , [10]], , , [, , "00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", , , , "00777012"],
                [, , "570\\d{6}", , , , "570123456", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            KE: [, [, , "20\\d{6,7}|[4-9]\\d{6,9}", , , , , , , [7, 8, 9, 10]],
                [, , "20\\d{6,7}|4(?:0\\d{6,7}|[136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|2\\d{7}|6\\d{6,7})", , , , "202012345", , , [7, 8, 9]],
                [, , "7(?:[0-3679]\\d|4[0-46-9]|5[0-6]|8[0-25-9])\\d{6}", , , , "712123456", , , [9]],
                [, , "800[24-8]\\d{5,6}", , , , "800223456", , , [9, 10]],
                [, , "900[02-9]\\d{5}", , , , "900223456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "KE", 254, "000", "0", , , "005|0", , , , [
                    [, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                    [, "(\\d{3})(\\d{6})", "$1 $2", ["7"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KG: [, [, , "[235-8]\\d{8,9}", , , , , , , [9, 10],
                    [5, 6]
                ],
                [, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [9],
                    [5, 6]
                ],
                [, , "(?:20[0-35]|5[0-24-7]\\d|7[07]\\d)\\d{6}", , , , "700123456", , , [9]],
                [, , "800\\d{6,7}", , , , "800123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"], "0$1"],
                    [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KH: [, [, , "[1-9]\\d{7,9}", , , , , , , [8, 9, 10],
                    [6, 7]
                ],
                [, , "(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}", , , , "23756789", , , [8, 9],
                    [6, 7]
                ],
                [, , "(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}", , , , "91234567", , , [8, 9]],
                [, , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [10]],
                [, , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "KH", 855, "00[14-9]", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"],
                    [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KI: [, [, , "[2458]\\d{4}|3\\d{4,7}|[67]\\d{7}", , , , , , , [5, 8]],
                [, , "(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}|(?:65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d{2}|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500)))\\d{3}", , , , "31234"],
                [, , "(?:6(?:200[01]|30[01]\\d)|7(?:200[01]|3(?:0[0-5]\\d|140)))\\d{3}", , , , "72001234", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "30(?:0[01]\\d{2}|12(?:11|20))\\d{2}", , , , "30010000", , , [8]], "KI", 686, "00", , , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KM: [, [, , "[3478]\\d{6}", , , , , , , [7]],
                [, , "7[4-7]\\d{5}", , , , "7712345"],
                [, , "[34]\\d{6}", , , , "3212345"],
                [, , , , , , , , , [-1]],
                [, , "8\\d{6}", , , , "8001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "KM", 269, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KN: [, [, , "[589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", , , , "8692361234", , , , [7]],
                [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "KN", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "869", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KP: [, [, , "1\\d{9}|[28]\\d{7}", , , , , , , [8, 10],
                    [6, 7]
                ],
                [, , "2\\d{7}|85\\d{6}", , , , "21234567", , , [8],
                    [6, 7]
                ],
                [, , "19[123]\\d{7}", , , , "1921234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                    [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}", , , , "23821234", , , [8]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KR: [, [, , "00(?:3\\d{8,9}|7\\d{9,11})|[1-7]\\d{4,9}|8\\d{8}", , , , , , , [5, 6, 8, 9, 10, 11, 12, 13, 14],
                    [3, 7]
                ],
                [, , "2[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})", , , , "22123456", , , [5, 6, 8, 9, 10],
                    [3, 7]
                ],
                [, , "1[0-26-9]\\d{7,8}", , , , "1000000000", , , [9, 10]],
                [, , "(?:00(?:3(?:08|68\\d)|798\\d{1,3})|80\\d)\\d{6}", , , , "801234567", , , [9, 11, 12, 13, 14]],
                [, , "60[2-9]\\d{6}", , , , "602345678", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "50\\d{8}", , , , "5012345678", , , [10]],
                [, , "70\\d{8}", , , , "7012345678", , , [10]], "KR", 82, "00(?:[1259]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8[1-46-8]|85\\d{2})?", , , , [
                    [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"],
                    [, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1", "0$CC-$1"],
                    [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"], "0$1", "0$CC-$1"],
                    [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"], "0$1", "0$CC-$1"],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"], "0$1", "0$CC-$1"],
                    [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030", "00308"], "$1", "0$CC-$1"],
                    [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["00[37]", "00(?:36|79)", "00(?:36|79)8"], "$1", "0$CC-$1"],
                    [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["007", "0079", "00798"], "$1", "0$CC-$1"]
                ],
                [
                    [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"],
                    [, "(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"], "0$1", "0$CC-$1"],
                    [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"], "0$1", "0$CC-$1"],
                    [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"], "0$1", "0$CC-$1"],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"], "0$1", "0$CC-$1"]
                ],
                [, , "15\\d{7,8}", , , , "1523456789", , , [9, 10]], , , [, , "00(?:3(?:08|68\\d)|798\\d{1,3})\\d{6}", , , , "007981234567", , , [11, 12, 13, 14]],
                [, , "1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [8]], , , [, , , , , , , , , [-1]]
            ],
            KW: [, [, , "[12569]\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}", , , , "22345678"],
                [, , "(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|6[56]\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7(?:0[013-9]|[67]\\d)|9(?:[069]\\d|3[039]))|9(?:0[09]\\d|11[01]|22\\d|4[01479]\\d|55\\d|6[0679]\\d|7(?:02|[1-9]\\d)|8[057-9]\\d|9\\d{2}))\\d{4}", , , , "50012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "KW", 965, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[0-24-9]"]],
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|6[56])"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KY: [, [, , "[3589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", , , , "3452221234", , , , [7]],
                [, , "345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}", , , , "3453231234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}|345976\\d{4}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "KY", 1, "011", "1", , , "1", , , , , , [, , "345849\\d{4}", , , , "3458491234"], , "345", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            KZ: [, [, , "(?:33\\d|7\\d{2}|80[089])\\d{7}", , , , , , , [10]],
                [, , "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", , , , "7123456789"],
                [, , "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", , , , "7710009998"],
                [, , "800\\d{7}", , , , "8001234567"],
                [, , "809\\d{7}", , , , "8091234567"],
                [, , , , , , , , , [-1]],
                [, , "808\\d{7}", , , , "8081234567"],
                [, , "751\\d{7}", , , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , , , , , , , , [-1]], , , [, , "751\\d{7}", , , , "7511234567"],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LA: [, [, , "[2-8]\\d{7,9}", , , , , , , [8, 9, 10],
                    [6]
                ],
                [, , "(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}", , , , "21212862", , , [8, 9],
                    [6]
                ],
                [, , "20(?:2[2389]|5[24-689]|7[6-8]|9[125-9])\\d{6}", , , , "2023123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [
                    [, "(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"], "0$1"],
                    [, "([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                    [, "(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LB: [, [, , "[13-9]\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}", , , , "1123456", , , [7]],
                [, , "(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}", , , , "71123456"],
                [, , , , , , , , , [-1]],
                [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                [, , "80\\d{6}", , , , "80123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                    [, "([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LC: [, [, , "[5789]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", , , , "7584305678", , , , [7]],
                [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}", , , , "7582845678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "LC", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "758", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LI: [, [, , "6\\d{8}|[23789]\\d{6}", , , , , , , [7, 9]],
                [, , "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", , , , "2345678", , , [7]],
                [, , "6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}", , , , "660234567"],
                [, , "80(?:02[28]|9\\d{2})\\d{2}", , , , "8002222", , , [7]],
                [, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}", , , , "9002222", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LI", 423, "00", "0", , , "0|10(?:01|20|66)", , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]],
                    [, "(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "870(?:28|87)\\d{2}", , , , "8702812", , , [7]], , , [, , "697(?:42|56|[78]\\d)\\d{4}", , , , "697861234", , , [9]]
            ],
            LK: [, [, , "[1-9]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "1(?:1[2-57]\\d{6}|973\\d{5})|(?:2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7]|[89]1)[2-57]\\d{6}", , , , "112345678", , , , [7]],
                [, , "7[0125-8]\\d{7}", , , , "712345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LK", 94, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LR: [, [, , "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}", , , , , , , [7, 8, 9]],
                [, , "(?:2\\d{3}|33333)\\d{4}", , , , "21234567", , , [8, 9]],
                [, , "(?:20\\d{2}|330\\d|4[67]|5(?:55)?\\d|77\\d{2}|88\\d{2})\\d{5}", , , , "770123456", , , [7, 9]],
                [, , , , , , , , , [-1]],
                [, , "332(?:02|[2-5]\\d)\\d{4}", , , , "332021234", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LR", 231, "00", "0", , , "0", , , , [
                    [, "(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    [, "([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LS: [, [, , "[2568]\\d{7}", , , , , , , [8]],
                [, , "2\\d{7}", , , , "22123456"],
                [, , "[56]\\d{7}", , , , "50123456"],
                [, , "800[256]\\d{4}", , , , "80021234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LS", 266, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LT: [, [, , "[3-9]\\d{7}", , , , , , , [8]],
                [, , "(?:3[1478]|4[124-6]|52)\\d{6}", , , , "31234567"],
                [, , "6\\d{7}", , , , "61234567"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "9(?:0[0239]|10)\\d{5}", , , , "90012345"],
                [, , "808\\d{5}", , , , "80812345"],
                [, , "700\\d{5}", , , , "70012345"],
                [, , , , , , , , , [-1]], "LT", 370, "00", "8", , , "[08]", , , , [
                    [, "([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"], "(8-$1)", , 1],
                    [, "([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"], "(8-$1)", , 1],
                    [, "([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1],
                    [, "(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", , 1]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "70[67]\\d{5}", , , , "70712345"], , , [, , , , , , , , , [-1]]
            ],
            LU: [, [, , "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11]],
                [, , "(?:2[2-9]\\d{2,9}|(?:3(?:[0-46-9]\\d|5[013-9])|[457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8})", , , , "27123456"],
                [, , "6[25-79][18]\\d{6}", , , , "628123456", , , [9]],
                [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , "90[015]\\d{5}", , , , "90012345", , , [8]],
                [, , "801\\d{5}", , , , "80112345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", , , , "20201234", , , [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)", , , , [
                    [, "(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"], , "$CC $1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"], , "$CC $1"],
                    [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"], , "$CC $1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"], , "$CC $1"],
                    [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"], , "$CC $1"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LV: [, [, , "[2689]\\d{7}", , , , , , , [8]],
                [, , "6\\d{7}", , , , "63123456"],
                [, , "2\\d{7}", , , , "21234567"],
                [, , "80\\d{6}", , , , "80123456"],
                [, , "90\\d{6}", , , , "90123456"],
                [, , "81\\d{6}", , , , "81123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LV", 371, "00", , , , , , , , [
                    [, "([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2689]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            LY: [, [, , "[25679]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "(?:2[1345]|5[1347]|6[123479]|71)\\d{7}", , , , "212345678", , , , [7]],
                [, , "9[1-6]\\d{7}", , , , "912345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "LY", 218, "00", "0", , , "0", , , , [
                    [, "([25-79]\\d)(\\d{7})", "$1-$2", ["[25-79]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MA: [, [, , "[5-9]\\d{8}", , , , , , , [9]],
                [, , "5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}", , , , "520123456"],
                [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}", , , , "650123456"],
                [, , "80\\d{7}", , , , "801234567"],
                [, , "89\\d{7}", , , , "891234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "5924[01]\\d{4}", , , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [
                    [, "([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"],
                    [, "([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"], "0$1"],
                    [, "(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"],
                    [, "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"], "0$1"],
                    [, "(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"], "0$1"]
                ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MC: [, [, , "[34689]\\d{7,8}", , , , , , , [8, 9]],
                [, , "870\\d{5}|9[2-47-9]\\d{6}", , , , "99123456", , , [8]],
                [, , "3\\d{7}|4(?:4\\d|5[1-9])\\d{5}|6\\d{8}", , , , "612345678"],
                [, , "90\\d{6}", , , , "90123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"], "$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                    [, "(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "870\\d{5}", , , , "87012345", , , [8]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MD: [, [, , "[235-9]\\d{7}", , , , , , , [8]],
                [, , "(?:2[1-9]\\d|3[1-79]\\d|5(?:33|5[257]))\\d{5}", , , , "22212345"],
                [, , "(?:562|6\\d{2}|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}", , , , "62112345"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "90[056]\\d{5}", , , , "90012345"],
                [, , "808\\d{5}", , , , "80812345"],
                [, , , , , , , , , [-1]],
                [, , "3[08]\\d{6}", , , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                    [, "([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"], "0$1"],
                    [, "([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "803\\d{5}", , , , "80312345"], , , [, , , , , , , , , [-1]]
            ],
            ME: [, [, , "[2-9]\\d{7,8}", , , , , , , [8],
                    [6]
                ],
                [, , "(?:20[2-8]|3(?:0[2-7]|[12][235-7]|3[24-7])|4(?:0[2-467]|1[267])|5(?:0[2467]|1[267]|2[2367]))\\d{5}", , , , "30234567", , , , [6]],
                [, , "6(?:00\\d|3[024]\\d|6[0-25]\\d|[7-9]\\d{2})\\d{4}", , , , "67622901"],
                [, , "80[0-258]\\d{5}", , , , "80080002"],
                [, , "(?:9(?:4[1568]|5[178]))\\d{5}", , , , "94515151"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "78[1-49]\\d{5}", , , , "78108780"], "ME", 382, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "77[1-9]\\d{5}", , , , "77273012"], , , [, , , , , , , , , [-1]]
            ],
            MF: [, [, , "[56]\\d{8}", , , , , , , [9]],
                [, , "590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}", , , , "590271234"],
                [, , "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}", , , , "690001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MF", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MG: [, [, , "[23]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}", , , , "202123456", , , , [7]],
                [, , "3[2-49]\\d{7}", , , , "321234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "22\\d{7}", , , , "221234567"], "MG", 261, "00", "0", , , "0", , , , [
                    [, "([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MH: [, [, , "[2-6]\\d{6}", , , , , , , [7]],
                [, , "(?:247|528|625)\\d{4}", , , , "2471234"],
                [, , "(?:235|329|45[56]|545)\\d{4}", , , , "2351234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "635\\d{4}", , , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [
                    [, "(\\d{3})(\\d{4})", "$1-$2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MK: [, [, , "[2-578]\\d{7}", , , , , , , [8],
                    [6, 7]
                ],
                [, , "(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [6, 7]],
                [, , "7(?:[0-25-8]\\d{2}|3[2-4]\\d|421|9[23]\\d)\\d{4}", , , , "72345678"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "5[02-9]\\d{6}", , , , "50012345"],
                [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MK", 389, "00", "0", , , "0", , , , [
                    [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [, "([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                    [, "([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            ML: [, [, , "[246-9]\\d{7}", , , , , , , [8]],
                [, , "(?:2(?:0(?:2\\d|7[0-8])|1(?:2[5-7]|[3-689]\\d))|44[1239]\\d)\\d{4}", , , , "20212345"],
                [, , "(?:2(?:079|17\\d)|[679]\\d{3}|8[239]\\d{2})\\d{4}", , , , "65012345"],
                [, , "80\\d{6}", , , , "80012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "ML", 223, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]],
                    [, "(\\d{4})", "$1", ["67|74"]]
                ],
                [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]
                ],
                [, , , , , , , , , [-1]], , , [, , "80\\d{6}", , , , "80012345"],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MM: [, [, , "[178]\\d{5,7}|[24-6]\\d{5,8}|9(?:[279]\\d{0,2}|5|[34]\\d{1,2}|6(?:\\d{1,2})?|8(?:\\d{2})?)\\d{6}", , , , , , , [6, 7, 8, 9, 10],
                    [5]
                ],
                [, , "1(?:2\\d{1,2}|[35]\\d|4(?:\\d|2[236]|39)|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|26\\d{4}|39\\d{4}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2[245-8]|3(?:2(?:02)?|[346]|56?)|[46][2-6]|5[3-5])\\d{4}|5(?:2(?:2(?:\\d{1,2})?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1(?:2(?:0|4\\d)?|[356])|2[2-6]|3[24-6]|4(?:2(?:4\\d)?|[3-6])|5[2-4]|6[2-8]|7(?:[2367]|4(?:\\d|39)|5\\d?|8[145]\\d)|8[245]|9(?:20?|4))\\d{4}|7(?:[04][24-8]|1(?:20?|[3-7])|22|3[2-4]|5[2-7])\\d{4}|8(?:1(?:2\\d{1,2}|[3-689]\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3[24]\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}", , , , "1234567", , , [6, 7, 8, 9],
                    [5]
                ],
                [, , "17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3(?:[0-36]|4[069])\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|6(?:1\\d|9\\d{2}|\\d)|7(?:3|5[0-2]|[6-9]\\d)\\d|8(?:\\d|9\\d{2})|9(?:1\\d|[5-7]\\d{2}|[089]))\\d{5}", , , , "92123456", , , [7, 8, 9, 10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "1333\\d{4}", , , , "13331234", , , [8]], "MM", 95, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"], "0$1"],
                    [, "(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"], "0$1"],
                    [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["432|67|81"], "0$1"],
                    [, "(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"], "0$1"],
                    [, "(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                    [, "(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"], "0$1"],
                    [, "(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"], "0$1"],
                    [, "(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", , , , , , , [8, 9, 10],
                    [6, 7]
                ],
                [, , "[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}", , , , "50123456", , , , [6, 7]],
                [, , "(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}", , , , "88123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "7[05-8]\\d{6}", , , , "75123456", , , [8]], "MN", 976, "001", "0", , , "0", , , , [
                    [, "([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                    [, "([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                    [, "([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"], "0$1"],
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"],
                    [, "([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MO: [, [, , "[268]\\d{7}", , , , , , , [8]],
                [, , "(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}", , , , "28212345"],
                [, , "6(?:[2356]\\d|8[158])\\d{5}", , , , "66123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MO", 853, "00", , , , , , , , [
                    [, "([268]\\d{3})(\\d{4})", "$1 $2", ["[268]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MP: [, [, , "[5689]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
                [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "MP", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "670", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MQ: [, [, , "[56]\\d{8}", , , , , , , [9]],
                [, , "596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}", , , , "596301234"],
                [, , "69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}", , , , "696201234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MQ", 596, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MR: [, [, , "[2-48]\\d{7}", , , , , , , [8]],
                [, , "25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}", , , , "35123456"],
                [, , "[234][0-46-9]\\d{6}", , , , "22123456"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MR", 222, "00", , , , , , , , [
                    [, "([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MS: [, [, , "[5689]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "664491\\d{4}", , , , "6644912345", , , , [7]],
                [, , "66449[2-6]\\d{4}", , , , "6644923456", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "MS", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "664", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MT: [, [, , "[2357-9]\\d{7}", , , , , , , [8]],
                [, , "2(?:0(?:[169]\\d|3[1-4])|[1-357]\\d{2})\\d{4}", , , , "21001234"],
                [, , "(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}", , , , "96961234"],
                [, , "800[3467]\\d{4}", , , , "80071234"],
                [, , "5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}", , , , "50037123"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "3550\\d{4}", , , , "35501234"], "MT", 356, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2"]
                ], , [, , "7117\\d{4}", , , , "71171234"], , , [, , , , , , , , , [-1]],
                [, , "501\\d{5}", , , , "50112345"], , , [, , , , , , , , , [-1]]
            ],
            MU: [, [, , "[2-9]\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}", , , , "2012345"],
                [, , "5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-25689]\\d|4[3479]|7[15-8])|9[0-8]\\d)\\d{4}", , , , "52512345", , , [8]],
                [, , "80[012]\\d{4}", , , , "8001234", , , [7]],
                [, , "30\\d{5}", , , , "3012345", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [7]], "MU", 230, "0(?:0|[2-7]0|33)", , , , , , "020", , [
                    [, "([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]],
                    [, "(5\\d{3})(\\d{4})", "$1 $2", ["5"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MV: [, [, , "[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})", , , , , , , [7, 10]],
                [, , "(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024568]|8[024689]))\\d{4}", , , , "6701234", , , [7]],
                [, , "(?:46[46]|7[2-9]\\d|9[15-9]\\d)\\d{4}", , , , "7712345", , , [7]],
                [, , "800\\d{7}", , , , "8001234567", , , [10]],
                [, , "900\\d{7}", , , , "9001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [
                    [, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:0[1-9]|[1-9])"]],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]00"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "4[05]0\\d{4}", , , , "4001234", , , [7]], , , [, , , , , , , , , [-1]]
            ],
            MW: [, [, , "(?:1(?:\\d{2})?|[2789]\\d{2}|31\\d)\\d{6}", , , , , , , [7, 9]],
                [, , "(?:1[2-9]|21\\d{2})\\d{5}", , , , "1234567"],
                [, , "(?:111|77\\d|88\\d|99\\d)\\d{6}", , , , "991234567", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "31\\d{7}", , , , "310123456", , , [9]], "MW", 265, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                    [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["31"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MX: [, [, , "[1-9]\\d{9,10}", , , , , , , [10, 11],
                    [7, 8]
                ],
                [, , "(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", , , , "2221234567", , , [10],
                    [7, 8]
                ],
                [, , "1(?:(?:33|55|81)\\d{8}|(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})", , , , "12221234567", , , [11]],
                [, , "8(?:00|88)\\d{7}", , , , "8001234567", , , [10]],
                [, , "900\\d{7}", , , , "9001234567", , , [10]],
                [, , "300\\d{7}", , , , "3001234567", , , [10]],
                [, , "500\\d{7}", , , , "5001234567", , , [10]],
                [, , , , , , , , , [-1]], "MX", 52, "0[09]", "01", , , "0[12]|04[45](\\d{10})", "1$1", , , [
                    [, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"], "01 $1", , 1],
                    [, "(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", , 1],
                    [, "(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", , 1]
                ],
                [
                    [, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"], "01 $1", , 1],
                    [, "(1)([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|55|81)"]],
                    [, "(1)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"]]
                ],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MY: [, [, , "[13-9]\\d{7,9}", , , , , , , [8, 9, 10],
                    [6, 7]
                ],
                [, , "(?:3(?:2(?:0(?:11|2[0-8]|3[0-24-79]|[579]\\d|8[0-57-9])|1(?:0[6-9]|1[03-9]|[467]\\d|8[0-2]|9[13])|2(?:0[1-3]|2[2-4]|4[0-25-7]|6[0-8]|7[02-689]|8\\d|9[5-9])|3(?:0[0-3]|3[0-36]|8[0-35-9]|9[1-3])|6(?:0[0-5]|[139]\\d|8[15-8])|7(?:1\\d|2[0-7]|3[0-3]|42|7[0-356]|8[0-35-8])|8(?:00|4[78]|5[6-9])|93[58])|3(?:0(?:0[0-35-9]|10|5[01]|8[0-6]|9[39])|1(?:0[1-39]|10|2[02-469]|3[245]|4[0-3589]|6[0-35-9]|7[067]|8[0-57]|9[0-278])|2(?:1[3467]|2[45]|4[1-3]|5[0689]|6[04589]|7[0-3579]|8[0-489]|9[0-27])|3(?:1[7-9]|2[1-6]|4[1-689]|5[89]|6[1-3]|7\\d|8[125]|9[236])|6(?:[12]0|3[01]|5[0-256]|6[08]|8[45]))|4(?:0(?:09|[14]\\d|2[0-8]|3[12]|5[01]|65)|1(?:0[0-8]|31|4\\d|6[12])|2(?:17|5[0-35-9]|6[024-6]|7[0189]|8[057-9]|9\\d)|770|8(?:0[0-2]|1[0-3569]|2[01]))|5(?:0(?:2[0-2]|3[0-35-9])|1(?:0[1-3]|1[05]|2[0-6]|31|6[1-7]|9[1258])|270|48[0-5]|5(?:1\\d|2[0-6]|4[0-589]|6[125-9]|9[01])|6(?:1[1-4]|2[0-589]|3\\d|5[0-3])|7(?:21|40)|8(?:7[06-9]|8[025-9]|9[12]))|6(?:0(?:2[0-28]|3[24-9]|4[246-9]|5[57]|6[13-6]|7[358]|8[1247]|9[0-59])|1(?:[04][0-58]|15|2[02-8]|3[015-9]|5[016-8]|7[7-9]|8[14-9]|9[1-356])|2(?:[05]\\d|11|[46][1-3]|7[02-79]|8[015-7])|303|4(?:1[129]|2[01]|3[36]|6[0-2])|690|7(?:3\\d|89))|7(?:118|2(?:0[02]|6[01])|4(?:[59]\\d|8[01])|6(?:1[01]|2\\d|5[0-2]|6[0-69])|7(?:1[0-37-9]|[28]\\d|3[1-5]|7[0-3])|8(?:[04]\\d|3[129]|59|6[1-356]|7[02-79]|8[02-7]|90)|9(?:10|3[1-3]|4[016-9]|[56]\\d|7[12]|8\\d))|8(?:0(?:0[08]|11|2[0-7]|5[12]|6\\d|7[013-69]|8[0-24]|9[0-5])|100|21[0-36]|3(?:08|1\\d|2[0-589]|31)|408|5(?:2[0-35-79]|88)|6(?:0[0-259]|5[5-79]|6[01]|8[46-9]|9[019])|7(?:0[35-8]|2[3-7]|3\\d|4[0149]|5[0-2]|6[016-9]|7[5-9]|8[037]|90)|8(?:00|61|7[0-3]|8\\d|9[0-4])|9(?:1[1-3]|[2-5]\\d|6[1-4689]|8[89]|9[0-689]))|9(?:0(?:1[0-289]|2[15]|5[014-9]|7[04-68]|8[0-256])|1(?:0[0-356]|3[0-49]|4[015]|7[0-59]|9[15])|2(?:0[0-25-7]|12|2[1-6]|3[1256]|7[14]|8\\d)|3[68]8|41[01]|5(?:14|2[01]|4[03-9]|6[5-79]|7[0-2569])))\\d|4(?:2(?:0[01]|1[07-9]|2[02-46-9]|38|4[0-28]|5[0-589]|6[0-47-9]|8[0-389]|9[0-38])\\d|3(?:0[5-9]|[12][034]|3[0-37]|47|5[168]|6[7-9]|7[0135-8]|8\\d|9[0-27-9])\\d|4(?:[02-9]\\d{2}|1(?:[02-9]\\d|10))|5(?:[07]\\d{2}|1[0-358]\\d|2[1246]\\d|3[06-9]\\d|4[0589]\\d|5[12457-9]\\d|6[0-689]\\d|8(?:[0-57-9]\\d|60)|9(?:[2-57-9]\\d|60))|6(?:0[79]|1[0-689]|2[0135-9]|[3-5]\\d|6[07-9]|7[23]|8[03-9]|99)\\d|7(?:0[0-59]\\d|1[04679]\\d|2(?:[02-9]\\d|10)|[37]\\d{2}|4(?:[0178]\\d|5[0-6])|5(?:[0-57-9]\\d|60)|6[024-689]\\d|8[0-79]\\d|9(?:[0479]\\d|3[01]))|8(?:1[0189]\\d|2[046-9]\\d|3[058]\\d|5[029]\\d|6(?:[0689]\\d|40)|8[14568]\\d|9[0-389]\\d)|9(?:0[1368]\\d|1[13-9]\\d|[27]\\d{2}|3(?:[0-368]\\d|7[0-3])|4[013-79]\\d|5[0-35689]\\d|6[0-46-9]\\d|8[0-24-9]\\d|97\\d))|5(?:2(?:0[13589]\\d|1[0-2]\\d|2[056]\\d|3(?:[067]\\d|2[01])|4[0-69]\\d|5[3-6]\\d|8[0-25-9]\\d|9[0-469]\\d)|3(?:[12][0-38]|3[0-37]|4[89]|5[01346-9]|[67]\\d|8[01589]|95)\\d|4(?:0[1346]\\d|1[02-35-9]\\d|2[1379]\\d|3[0-46-9]\\d|4[013689]\\d|[59]\\d{2}|6(?:[15-9]\\d|20)|7[036-9]\\d|8[015-8]\\d)|5(?:0[167]\\d|17\\d|2[025-9]\\d|3[035-7]\\d|4[0-35-9]\\d|8[13]\\d|9(?:[124-9]\\d|31))|6(?:0[89]\\d|1[02-46-8]\\d|2[0-69]\\d|3(?:[1-367]\\d|40)|4[0-689]\\d|5(?:[0-24-9]\\d|30)|6[1457-9]\\d|7\\d{2}|8[0-57-9]\\d|9[0-389]\\d)|7(?:1(?:[024679]\\d|80)|2[0-35-8]\\d|3[23]\\d|4[34]\\d|5[0-36-9]\\d|6[356-9]\\d|7\\d{2}|8(?:[23]\\d|[01]1)|9(?:[1-689]\\d|70))|8(?:0[145-9]\\d|1[0-2]\\d|2[09]\\d|3(?:[058]\\d|0[017])|4[016-9]\\d|5[02-9]\\d|7(?:10|2\\d)|8[013589]\\d|9[0-57-9]\\d)|9[23]0\\d)|6(?:2(?:2[1246-9]\\d|3[0-5]\\d|4[02]\\d|5[1-3]\\d|[68]\\d{2}|7(?:[04-8]\\d|10)|9[2-5]\\d)|3(?:1(?:[125-9]\\d|3[01])|3[0-7]\\d|5[0-478]\\d|79\\d|8[3-578]\\d|9[018]\\d)|4(?:1[015]|[2-689]\\d|7[1-79])\\d|5(?:09\\d|1(?:10|[2479]\\d)|2[1-579]\\d|3(?:[0-467]\\d|50)|4[0-24-9]\\d|5\\d{2}|60\\d)|6(?:0[13]\\d|1[0-57]\\d|2[03]\\d|3[0-478]\\d|4[0-8]\\d|5[013-689]\\d|6[0-467]\\d|[78]\\d{2}|9(?:[13-9]\\d|20))|7(?:01|2[06-9]|3[367]|5[7-9]|6\\d|7[0156]|8[12]|9[0-47-9])\\d|85[0-26]\\d|9(?:0[167]|10|[57]\\d|6[02-9]|8[013-9])\\d)|7(?:2(?:0[7-9]|1[016-9]|2[0-8]|[39]\\d|4[014]|5[0-79]|6[125-8]|7[1246-9]|8[37-9])\\d|3(?:0[0-5]|[35]\\d|40|5[0-478]|6[0-5]|8[0-26-8])\\d|4(?:0[07-9]|[1-35]\\d|6[7-9]|7[57]|8[1-68])\\d|5(?:0[04-9]|1[0-68]|2[0-378]|3[0-3]|5\\d|6[0-2]|7[018]|8[5-7]|9[05-9])\\d|6(?:5[0-24-9]|6[0-3568]|7[0457-9]|8[02-9]|9\\d)\\d|7(?:0[25-8]\\d|1(?:[01]\\d|20)|2[0-2]\\d|3[489]\\d|[457-9]\\d{2}|6(?:[0-8]\\d|90))|8(?:01[01]|10\\d|[289]\\d{2}|3(?:[028]\\d|10)|50\\d|6[0-357-9]\\d|7(?:[0235-9]\\d|[14]0))|9(?:0(?:[0246-8]\\d|10)|[1-4]\\d{2}|50\\d|6[014589]\\d|[7-9]0\\d))|8(?:2(?:2(?:[013-5]\\d|[28][0-8]|6[01]|7[0-589]|9[0-49])|3(?:[02][0-689]|1[1-59]|[3-7]\\d|8[0-389]|9[13])|4(?:0[1-3]|[1-8]\\d|9[1-359])|5(?:0[1-7]|[17]\\d|20|3[0-26-9]|4[1-9]|5[0-35]|8[0-689]|9[02367])|6(?:[147]\\d|2[0-25-9]|39|5[014-9]|6[1-9]|8[1-8]|9[089])|7(?:0[017-9]|1[1-356]|20|3[01457-9]|4[15]|5[0-25]|6[0-6]|70|8[0-2]|9[01378])|8(?:0[3-57-9]|[15]0|2[124-9]|3[01]|4[02-6]|6[02-578]|7\\d|8[25-8]|9[04-689]))|3(?:220|3(?:0[089]|10|2[0-7]|3[7-9]|4[0-48])|4(?:0[68]|1[0-478]|2[5-79]|3[024-9]|50|6\\d|7[0-57]|8[05]|96)|5(?:4[4578]|55|6[2-9]|70|8[459]|92))|4(?:2(?:[15]\\d|2[0-489]|3[124-9])|3(?:0[1-8]|[1-4]\\d|5[0-3]|6[1-7]|7[56]|8[0-4]|9[1-578])|4(?:05|80)|555|6(?:1[0-3]|20|3[1-4]|4[0-24-7]|5\\d|6[0-2]|71|8[0-47-9]|9[0-689])|7(02|1[79]|21|3[0-2468]|5[0-5]|6[0256]|7[0-8]|8[01589]|9[026-9])|8(?:0[1-9]|1[0-3568]|2[0138]|3[0-4]|4[046-9]|5[06]|6\\d|7[0-579]|80|9[0-8]))|5(?:2(?:0[0-26]|1\\d|2[0-5]|3[18]|4[0-2]|6[3-68]|70|8[025-9]|9[05-9])|3(?:10|2\\d|31|95)|4(?:0[1-7]|[1-4]\\d|5[02-6]|6[0-3]|7[0-245]|8[125]|9[1-6])|5(?:40|55)|6(?:0[1459]|1[0-8]|2[0-36-8]|3[0-35-8]|[45]\\d|6[0-8]|80)|7(?:1[07-9]|20|3[3-9]|4[02-4]|5[05689]|6[015-9]|7\\d|8[045]|9[0-6]))|6(?:2(?:01|3[12]|5[1-7]|60|8[1-6]|9[0-8])|3(?:0[0137]|[134]\\d|2[0-8]|[59][01]|60|[78]1)|4(?:2[2-4]|49|5[17]|6\\d|7[0-46-9]|8[0-689])|5(?:0[6-8]|55|8[0149]|90)|8(?:5\\d|[68]0)|9(?:5[12]|81))|7(?:2(?:0[189]|[12][1-9]|3[0-47]|50)|3(?:[01][1-9]|3\\d|4[0-245]|6[4-9]|7[237-9]|9[12])|4(?:[0-2]\\d|3[167-9]|[45][0-3]|6[0-8]|7[25-9]|8[0-6]|90)|5(?:0[1-9]|[89]\\d)|7(?:1[89]|[27]\\d|3[013-9]|4[0-8]|50|6[01568]|82)|8(?:[03][1-3]|1[0-28]|2[0-38]|48|5[0-4]|6[1-3]|7[124]|8[013-57-9]|9[07]))|8(?:2(?:0[13-7]|[1-9]\\d)|3(?:0[1-47-9]|[128]\\d|3[0-4]|4[1-9]|5[0-35-7]|6[0-46-9]|9[3-7])|4(?:0[1-58]|1[1-5]|[2-57-9]\\d|69)|5(?:1[1-35-9]|2\\d|3[2-8]|52)|6(?:0[2-9]|1[1-8]|[23]\\d|41|5[12367]|6[1-9]|7[14-9]|8[02-8]|9[05])|7(?:0[1-589]|[1-35-8]\\d|4[0-7]|9[0-46-9])|8(?:01|30|5[0-48]|6[13]|7\\d|8[013-689]|9[24-9])|9(?:0[2-4689]|1\\d|2[08]|3[18]|4[03]|59|6[0-36-9]|7[0-35-79]|8[1235]))|9(?:2(?:[057][1-9]|[1-3]\\d|4[0-8]|6[1-5]|8[015-9]|9[04-6])|300|4(?:01|36|6[1-6]|[89][12])|5(?:0[25689]|1\\d|2[0134]|3[1-8]|5[17]|6[0-35-9]|7[0-7]|91)|6(?:1[1-9]|2[23]|3[0-4]|6[03-9]|7[0-7])|7(?:0[1-68]|1[1-8]|2[25-9]|3[056]|4[4-9]|[5-8]\\d|9[0-46-9])|8(?:0[1-7]|[189]\\d|2[1-46]|4[1-689]|5[0-79]|6[1-9]|71)|9(?:0[1-3]|1\\d|2[0-35-7]|3[67]|4[12]|5[0-249]|6[5-9]|75|8[1-6])))|9(?:2(?:0[458]\\d|1[2-57]\\d|2[0-589]\\d|[39]\\d{2}|4(?:[02-9]\\d|10)|5(?:[024-6]\\d|[7-9]0)|6(?:[03-9]\\d|20)|7[0-26-9]\\d|8(?:[0-24-68]\\d|7[01]))|3(?:0[0-2689]\\d|1(?:[0235]\\d|1[0-2]|4[01])|2(?:0[01]|[1-57-9]\\d|6[0-2])|3(?:00|1[0-4]|2\\d)|4[05]\\d|5[0-3568]\\d|6(?:[1-357-9]\\d|60)|[78]0\\d)|4(?:0[24578]\\d|1[02-57-9]\\d|2\\d{2}|3(?:[0278]\\d|1[01]|60)|4[013579]\\d|5[0-8]\\d|6[0678]\\d|7[013-9]\\d|8[01569]\\d)|5(0(?:[589]\\d|7[01])|1\\d{2}|2[0159]\\d|3[14689]\\d|4[0-46-9]\\d|5[0-35-9]\\d|6[0156-8]\\d|7[0-35]\\d|8[0-7]\\d|9[0-3589]\\d)|6(?:0[269]\\d|[12]\\d{2}|3[0-57-9]\\d|44[0-2]|5[01379]\\d|6[02-9]\\d|7[69]\\d|8(?:[0-24-8]\\d|30)|9(?:[0-24-9]\\d|3[01]))|7(?:0[0136-8]|1[02-4]|2[156]|3[258]|[489]\\d|5[0-589]|6[024-9]|7[0-689])\\d|8(?:0(?:0[01]|1\\d)|1[3-9]\\d|[23]\\d{2}|4[0-24-689]\\d|5[0-689]\\d|6[02-9]\\d|7(?:[01]0|[2-4]\\d)|888)|9(?:00\\d|1[2-57-9]\\d|2(?:00|1[01]|[238]\\d)|3(?:[2-467]\\d|50)|4[4-9]\\d|5(?:[0-2457-9]\\d|60)|6[0156]\\d|7[04-9]\\d|8[01]\\d)))\\d{3}", , , , "323856789", , , [8, 9],
                    [6, 7]
                ],
                [, , "1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])\\d|1(?:[1-5]\\d{2}|6(?:0[5-9]|[1-9]\\d))\\d|[23679][2-9]\\d{2}|4(?:[235-9]\\d{2}|400)|59\\d{3}|8(?:1[23]\\d|[236]\\d{2}|4(?:[06]\\d|7[0-4])|5[7-9]\\d|7[016-9]\\d|8(?:[01]\\d|[27][0-4])|9[0-8]\\d))\\d{4}", , , , "123456789", , , [9, 10]],
                [, , "1[378]00\\d{6}", , , , "1300123456", , , [10]],
                [, , "1600\\d{6}", , , , "1600123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}", , , , "1546012345", , , [10]], "MY", 60, "00", "0", , , "0", , , , [
                    [, "([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                    [, "(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                    [, "([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"],
                    [, "(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0", "1[36-8]00"]],
                    [, "(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"],
                    [, "(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15[49]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            MZ: [, [, , "[28]\\d{7,8}", , , , , , , [8, 9]],
                [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [8]],
                [, , "8[2-7]\\d{7}", , , , "821234567", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "MZ", 258, "00", , , , , , , , [
                    [, "([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                    [, "(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NA: [, [, , "[68]\\d{7,8}", , , , , , , [8, 9]],
                [, , "6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|6[89]|7[01]))\\d{4}", , , , "61221234"],
                [, , "(?:60|8[125])\\d{7}", , , , "811234567", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "8701\\d{5}", , , , "870123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "8(?:3\\d{2}|86)\\d{5}", , , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [
                    [, "(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1-35]"], "0$1"],
                    [, "(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                    [, "(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                    [, "(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NC: [, [, , "[2-57-9]\\d{5}", , , , , , , [6]],
                [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234"],
                [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", , , , "751234"],
                [, , , , , , , , , [-1]],
                [, , "36\\d{4}", , , , "366711"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NC", 687, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NE: [, [, , "[0289]\\d{7}", , , , , , , [8]],
                [, , "2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", , , , "20201234"],
                [, , "(?:8[089]|9\\d)\\d{6}", , , , "93123456"],
                [, , "08\\d{6}", , , , "08123456"],
                [, , "09\\d{6}", , , , "09123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NE", 227, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|[289]"]],
                    [, "(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NF: [, [, , "[13]\\d{5}", , , , , , , [6],
                    [5]
                ],
                [, , "(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}", , , , "106609", , , , [5]],
                [, , "3[58]\\d{4}", , , , "381234", , , , [5]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NF", 672, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                    [, "(\\d)(\\d{5})", "$1 $2", ["3"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NG: [, [, , "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", , , , , , , [7, 8, 10, 11, 12, 13, 14],
                    [5, 6]
                ],
                [, , "[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}", , , , "12345678", , , [7, 8],
                    [5, 6]
                ],
                [, , "(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}", , , , "8021234567", , , [8, 10]],
                [, , "800\\d{7,11}", , , , "80017591759", , , [10, 11, 12, 13, 14]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"], "0$1"],
                    [, "([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"], "0$1"],
                    [, "([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"], "0$1"],
                    [, "(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "700\\d{7,11}", , , , "7001234567", , , [10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]]
            ],
            NI: [, [, , "[125-8]\\d{7}", , , , , , , [8]],
                [, , "2\\d{7}", , , , "21234567"],
                [, , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|7[5-8]\\d|8\\d{2})\\d{5}", , , , "81234567"],
                [, , "1800\\d{4}", , , , "18001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NI", 505, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NL: [, [, , "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", , , , , , , [5, 6, 7, 8, 9, 10]],
                [, , "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d{2}|8[478]\\d)\\d{6}", , , , "101234567", , , [9]],
                [, , "6[1-58]\\d{7}", , , , "612345678", , , [9]],
                [, , "800\\d{4,7}", , , , "8001234", , , [7, 8, 9, 10]],
                [, , "90[069]\\d{4,7}", , , , "9061234", , , [7, 8, 9, 10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:6760|85\\d{2})\\d{5}", , , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [
                    [, "([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"], "0$1"],
                    [, "([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                    [, "(6)(\\d{8})", "$1 $2", ["6[0-57-9]"], "0$1"],
                    [, "(66)(\\d{7})", "$1 $2", ["66"], "0$1"],
                    [, "(14)(\\d{3,4})", "$1 $2", ["14"], "$1"],
                    [, "([89]0\\d)(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"]
                ], , [, , "66\\d{7}", , , , "662345678", , , [9]], , , [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", , , , "14023", , , [5, 6]],
                [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", , , , "14020", , , [5, 6]], , , [, , , , , , , , , [-1]]
            ],
            NO: [, [, , "0\\d{4}|[2-9]\\d{7}", , , , , , , [5, 8]],
                [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [8]],
                [, , "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", , , , "40612345", , , [8]],
                [, , "80[01]\\d{5}", , , , "80012345", , , [8]],
                [, , "82[09]\\d{5}", , , , "82012345", , , [8]],
                [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
                [, , "880\\d{5}", , , , "88012345", , , [8]],
                [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [
                    [, "([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                    [, "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                ], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", , , , "01234"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
            ],
            NP: [, [, , "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", , , , , , , [8, 10],
                    [6, 7]
                ],
                [, , "(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}", , , , "14567890", , , [8],
                    [6, 7]
                ],
                [, , "9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}", , , , "9841234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [
                    [, "(1)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                    [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"], "0$1"],
                    [, "(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NR: [, [, , "[458]\\d{6}", , , , , , , [7]],
                [, , "(?:444|888)\\d{4}", , , , "4441234"],
                [, , "55[4-9]\\d{4}", , , , "5551234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NR", 674, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NU: [, [, , "[1-5]\\d{3}", , , , , , , [4]],
                [, , "[34]\\d{3}", , , , "4002"],
                [, , "[125]\\d{3}", , , , "1234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "NU", 683, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            NZ: [, [, , "6[235-9]\\d{6}|[2-57-9]\\d{7,9}", , , , , , , [8, 9, 10],
                    [7]
                ],
                [, , "(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}", , , , "32345678", , , [8],
                    [7]
                ],
                [, , "2(?:[028]\\d{7,8}|1\\d{6,8}|[79]\\d{7})", , , , "211234567"],
                [, , "508\\d{6,7}|80\\d{6,8}", , , , "800123456"],
                [, , "90\\d{6,7}", , , , "900123456", , , [8, 9]],
                [, , , , , , , , , [-1]],
                [, , "70\\d{7}", , , , "701234567", , , [9]],
                [, , , , , , , , , [-1]], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [
                    [, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["240|[346]|7[2-57-9]|9[1-9]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"], "0$1"],
                    [, "(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["90"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"], "0$1"]
                ], , [, , "[28]6\\d{6,7}", , , , "26123456", , , [8, 9]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            OM: [, [, , "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", , , , , , , [7, 8, 9]],
                [, , "2[2-6]\\d{6}", , , , "23123456", , , [8]],
                [, , "7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "92123456", , , [8]],
                [, , "8007\\d{4,5}|500\\d{4}", , , , "80071234"],
                [, , "900\\d{5}", , , , "90012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "OM", 968, "00", , , , , , , , [
                    [, "(2\\d)(\\d{6})", "$1 $2", ["2"]],
                    [, "([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]],
                    [, "([58]00)(\\d{4,6})", "$1 $2", ["[58]00"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PA: [, [, , "[1-9]\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:1(?:0[0-8]|1[49]|2[37]|3[0137]|4[147]|5[05]|6[58]|7[0167]|8[58]|9[139])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[014-7]|2[0-3]|3[03]|4[03-57]|55|6[068]|7[06-8]|8[06-9])|4(?:3[013-69]|4\\d|7[0-589])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[469]0|5[06-9]|7[0-24-79]|8[7-9])|8(?:09|[34]\\d|5[0134]|8[02])|9(?:0[6-9]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}", , , , "2001234", , , [7]],
                [, , "(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}", , , , "61234567"],
                [, , "800\\d{4}", , , , "8001234", , , [7]],
                [, , "(?:8(?:55|60|7[78])|9(?:00|81))\\d{4}", , , , "8601234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "PA", 507, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                    [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PE: [, [, , "[14-9]\\d{7,8}", , , , , , , [8, 9],
                    [6, 7]
                ],
                [, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", , , , "11234567", , , [8],
                    [6, 7]
                ],
                [, , "9\\d{8}", , , , "912345678", , , [9]],
                [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , "805\\d{5}", , , , "80512345", , , [8]],
                [, , "801\\d{5}", , , , "80112345", , , [8]],
                [, , "80[24]\\d{5}", , , , "80212345", , , [8]],
                [, , , , , , , , , [-1]], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [
                    [, "(1)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                    [, "([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)"],
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                    [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PF: [, [, , "4\\d{5,7}|8\\d{7}", , , , , , , [6, 8]],
                [, , "4(?:[09][45689]\\d|4)\\d{4}", , , , "40412345"],
                [, , "8[79]\\d{6}", , , , "87123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "PF", 689, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]],
                    [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]
                ], , [, , , , , , , , , [-1]], , , [, , "44\\d{4}", , , , "441234", , , [6]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PG: [, [, , "[1-9]\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:3[0-2]\\d|4[257]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}", , , , "3123456", , , [7]],
                [, , "7(?:[0-689]\\d|75)\\d{5}", , , , "70123456", , , [8]],
                [, , "180\\d{4}", , , , "1801234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "2(?:0[0-47]|7[568])\\d{4}", , , , "2751234", , , [7]], "PG", 675, "140[1-3]|00", , , , , , "00", , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]],
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PH: [, [, , "1\\d{10,12}|2\\d{5,7}|[3-7]\\d{8}|8\\d{7,9}|9\\d{9}", , , , , , , [6, 8, 9, 10, 11, 12, 13],
                    [5, 7]
                ],
                [, , "2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})", , , , "21234567", , , [6, 8, 9, 10],
                    [5, 7]
                ],
                [, , "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[34-79]|89|9[4-9]))\\d{7}", , , , "9051234567", , , [10]],
                [, , "1800\\d{7,9}", , , , "180012345678", , , [11, 12, 13]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [
                    [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                    [, "(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                    [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                    [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                    [, "([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"],
                    [, "(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["180", "1800"]],
                    [, "(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["180", "1800"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PK: [, [, , "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,10}|2\\d(?:111\\d{6}|\\d{3,7}))", , , , , , , [8, 9, 10, 11, 12],
                    [6, 7]
                ],
                [, , "(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}", , , , "2123456789", , , [9, 10],
                    [6, 7, 8]
                ],
                [, , "3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}", , , , "3012345678", , , [10]],
                [, , "800\\d{5}", , , , "80012345", , , [8]],
                [, , "900\\d{5}", , , , "90012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , "122\\d{6}", , , , "122044444", , , [9]],
                [, , , , , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [
                    [, "([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"],
                    [, "(1\\d{3})(\\d{5})", "$1 $2", ["1"], "$1"],
                    [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                    [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-469]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"], "(0$1)"],
                    [, "(58\\d{3})(\\d{5})", "$1 $2", ["58[126]"], "(0$1)"],
                    [, "(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"],
                    [, "(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"], "(0$1)"],
                    [, "(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"], "(0$1)"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", , , , "21111825888", , , [11, 12]], , , [, , , , , , , , , [-1]]
            ],
            PL: [, [, , "[1-57-9]\\d{6,8}|6\\d{5,8}", , , , , , , [6, 7, 8, 9]],
                [, , "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:\\d{7}|19\\d{3})", , , , "123456789", , , [7, 9]],
                [, , "(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "70[01346-8]\\d{6}", , , , "701234567", , , [9]],
                [, , "801\\d{6}", , , , "801234567", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "39\\d{7}", , , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{3})", "$1 $2", ["11[68]|64"]],
                    [, "(\\d{5})", "$1", ["19"]],
                    [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],
                    [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
                    [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]
                ], , [, , "64\\d{4,7}", , , , "641234567"], , , [, , , , , , , , , [-1]],
                [, , "804\\d{6}", , , , "804123456", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            PM: [, [, , "[45]\\d{5}", , , , , , , [6]],
                [, , "(?:4[1-3]|50)\\d{4}", , , , "411234"],
                [, , "(?:4[02-4]|5[05])\\d{4}", , , , "551234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "PM", 508, "00", "0", , , "0", , , , [
                    [, "([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PR: [, [, , "[5789]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
                [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "787|939", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PS: [, [, , "1\\d{9}|[24589]\\d{7,8}", , , , , , , [8, 9, 10],
                    [7]
                ],
                [, , "(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}", , , , "22234567", , , [8],
                    [7]
                ],
                [, , "5[69]\\d{7}", , , , "599123456", , , [9]],
                [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , "1700\\d{6}", , , , "1700123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [
                    [, "([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]2"], "0$1"],
                    [, "(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5[69]"], "0$1"],
                    [, "(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]0", "1[78]00"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PT: [, [, , "[2-46-9]\\d{8}", , , , , , , [9]],
                [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", , , , "212345678"],
                [, , "9(?:[1236]\\d{2}|480)\\d{5}", , , , "912345678"],
                [, , "80[02]\\d{6}", , , , "800123456"],
                [, , "6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}", , , , "760123456"],
                [, , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456"],
                [, , "884[0-4689]\\d{5}", , , , "884123456"],
                [, , "30\\d{7}", , , , "301234567"], "PT", 351, "00", , , , , , , , [
                    [, "(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                    [, "([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "7(?:0(?:7\\d|8[17]))\\d{5}", , , , "707123456"], , , [, , "600\\d{6}", , , , "600110000"]
            ],
            PW: [, [, , "[2-9]\\d{6}", , , , , , , [7]],
                [, , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234"],
                [, , "(?:6[234689]0|77\\d|88[0-4])\\d{4}", , , , "6201234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            PY: [, [, , "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", , , , , , , [6, 7, 8, 9],
                    [5]
                ],
                [, , "(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", , , , "212345678", , , [7, 8, 9],
                    [5, 6]
                ],
                [, , "9(?:6[12]|[78][1-6]|9[1-5])\\d{6}", , , , "961456789", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "8700[0-4]\\d{4}", , , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                    [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                    [, "(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["870", "8700"]],
                    [, "(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "[2-9]0\\d{4,7}", , , , "201234567"], , , [, , , , , , , , , [-1]]
            ],
            QA: [, [, , "[2-8]\\d{6,7}", , , , , , , [7, 8]],
                [, , "4[04]\\d{6}", , , , "44123456", , , [8]],
                [, , "[3567]\\d{7}", , , , "33123456", , , [8]],
                [, , "800\\d{4}", , , , "8001234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "QA", 974, "00", , , , , , , , [
                    [, "([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]],
                    [, "([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]
                ], , [, , "2(?:[12]\\d|61)\\d{4}", , , , "2123456", , , [7]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            RE: [, [, , "[268]\\d{8}", , , , , , , [9]],
                [, , "262\\d{6}", , , , "262161234"],
                [, , "69(?:2\\d{2}|3(?:0[0-46]|1[013]|2[0-2]|3[0139]|4[0-7]|5[05]|6[0-26]|7[0-27]|8[0-38]|9[0-479]))\\d{4}", , , , "692123456"],
                [, , "80\\d{7}", , , , "801234567"],
                [, , "89[1-37-9]\\d{6}", , , , "891123456"],
                [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "RE", 262, "00", "0", , , "0", , , , [
                    [, "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"], "0$1"]
                ], , [, , , , , , , , , [-1]], 1, "262|69|8", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            RO: [, [, , "[23]\\d{5,8}|[7-9]\\d{8}", , , , , , , [6, 9]],
                [, , "2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3(?:1\\d{4}(?:\\d{3})?|[3-6]\\d{7})", , , , "211234567"],
                [, , "7(?:[02-7]\\d{2}|1(?:[01]\\d|20)|8[03-8]\\d|99\\d)\\d{5}", , , , "712034567", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "90[036]\\d{6}", , , , "900123456", , , [9]],
                [, , "801\\d{6}", , , , "801123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                    [, "(\\d{2})(\\d{4})", "$1 $2", ["[23]1"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"], "0$1"],
                    [, "(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "37\\d{7}", , , , "372123456", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            RS: [, [, , "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", , , , , , , [6, 7, 8, 9, 10, 11, 12],
                    [5]
                ],
                [, , "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}", , , , "10234567", , , [7, 8, 9, 10, 11, 12],
                    [5, 6]
                ],
                [, , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [8, 9, 10]],
                [, , "800\\d{3,9}", , , , "80012345"],
                [, , "(?:90[0169]|78\\d)\\d{3,7}", , , , "90012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "RS", 381, "00", "0", , , "0", , , , [
                    [, "([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"], "0$1"],
                    [, "([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"], "0$1"],
                    [, "(6\\d)(\\d{6,8})", "$1 $2", ["6"], "0$1"],
                    [, "([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"], "0$1"],
                    [, "(7[26])(\\d{4,9})", "$1 $2", ["7[26]"], "0$1"],
                    [, "(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "7[06]\\d{4,10}", , , , "700123456"], , , [, , , , , , , , , [-1]]
            ],
            RU: [, [, , "[347-9]\\d{9}", , , , , , , [10]],
                [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", , , , "3011234567"],
                [, , "9\\d{9}", , , , "9123456789"],
                [, , "80[04]\\d{7}", , , , "8001234567"],
                [, , "80[39]\\d{7}", , , , "8091234567"],
                [, , , , , , , , , [-1]],
                [, , "808\\d{7}", , , , "8081234567"],
                [, , , , , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [
                    [, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[1-79]"], "$1", , 1],
                    [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1],
                    [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1]
                ],
                [
                    [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"], "8 ($1)", , 1],
                    [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1]
                ],
                [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            RW: [, [, , "[027-9]\\d{7,8}", , , , , , , [8, 9]],
                [, , "2[258]\\d{7}|06\\d{6}", , , , "250123456"],
                [, , "7[238]\\d{7}", , , , "720123456", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "900\\d{6}", , , , "900123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [
                    [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                    [, "([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                    [, "(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SA: [, [, , "[15]\\d{8}|8\\d{9}|92\\d{7}", , , , , , , [9, 10],
                    [7]
                ],
                [, , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [9],
                    [7]
                ],
                [, , "(?:5(?:[013-689]\\d|7[0-36-8])|811\\d)\\d{6}", , , , "512345678"],
                [, , "800\\d{7}", , , , "8001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , "92[05]\\d{6}", , , , "920012345", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [
                    [, "(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"], "0$1"],
                    [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                    [, "(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"],
                    [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"], "$1"],
                    [, "(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["811"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SB: [, [, , "[1-9]\\d{4,6}", , , , , , , [5, 7]],
                [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [5]],
                [, , "48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}", , , , "7421234"],
                [, , "1[38]\\d{3}", , , , "18123", , , [5]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "5[12]\\d{3}", , , , "51123", , , [5]], "SB", 677, "0[01]", , , , , , , , [
                    [, "(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SC: [, [, , "[24689]\\d{5,6}", , , , , , , [7]],
                [, , "4[2-46]\\d{5}", , , , "4217123"],
                [, , "2[5-8]\\d{5}", , , , "2510123"],
                [, , "8000\\d{3}", , , , "8000000"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:64\\d|971)\\d{4}", , , , "6412345"], "SC", 248, "0(?:[02]|10?)", , , , , , "00", , [
                    [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SD: [, [, , "[19]\\d{8}", , , , , , , [9]],
                [, , "1(?:[0-25]\\d|8[3567])\\d{6}", , , , "121231234"],
                [, , "9[0-3569]\\d{7}", , , , "911231234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SE: [, [, , "[1-35-9]\\d{5,11}|4\\d{6,8}", , , , , , , [6, 7, 8, 9, 10, 12]],
                [, , "1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})", , , , "8123456", , , [7, 8, 9]],
                [, , "7[02369]\\d{7}", , , , "701234567", , , [9]],
                [, , "20\\d{4,7}", , , , "20123456", , , [6, 7, 8, 9]],
                [, , "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [7, 8, 9, 10]],
                [, , "77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})", , , , "771234567", , , [6, 9]],
                [, , "75[1-8]\\d{6}", , , , "751234567", , , [9]],
                [, , , , , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [
                    [, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                    [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], "0$1"],
                    [, "([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1"],
                    [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1"],
                    [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"],
                    [, "(77)(\\d{2})(\\d{2})", "$1-$2$3", ["77"], "0$1"],
                    [, "(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"],
                    [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], "0$1"],
                    [, "(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], "0$1"],
                    [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], "0$1"]
                ],
                [
                    [, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                    [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],
                    [, "([1-469]\\d)(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90"]],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],
                    [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],
                    [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]],
                    [, "(77)(\\d{2})(\\d{2})", "$1 $2 $3", ["77"]],
                    [, "(20)(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
                    [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9[034]"]],
                    [, "(9[034]\\d)(\\d{4})", "$1 $2", ["9[034]"]],
                    [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["25[245]|67[3-6]"]]
                ],
                [, , "74[02-9]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , "(?:25[245]|67[3-6])\\d{9}", , , , "254123456789", , , [12]]
            ],
            SG: [, [, , "[36]\\d{7}|[17-9]\\d{7,10}", , , , , , , [8, 10, 11]],
                [, , "6[1-9]\\d{6}", , , , "61234567", , , [8]],
                [, , "(?:8[1-8]|9[0-8])\\d{6}", , , , "81234567", , , [8]],
                [, , "1?800\\d{7}", , , , "18001234567", , , [10, 11]],
                [, , "1900\\d{7}", , , , "19001234567", , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "3[12]\\d{6}", , , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [
                    [, "([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
                    [, "(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]0", "1[89]00"]],
                    [, "(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["700", "7000"]],
                    [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "7000\\d{7}", , , , "70001234567", , , [11]], , , [, , , , , , , , , [-1]]
            ],
            SH: [, [, , "[256]\\d{4}|8\\d{3}", , , , , , , [4, 5]],
                [, , "2(?:[0-57-9]\\d|6[4-9])\\d{2}", , , , "22158"],
                [, , "[56]\\d{4}", , , , "51234", , , [5]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "262\\d{2}", , , , "26212", , , [5]], "SH", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SI: [, [, , "[1-7]\\d{6,7}|[89]\\d{4,7}", , , , , , , [5, 6, 7, 8]],
                [, , "(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}", , , , "11234567", , , [8],
                    [7]
                ],
                [, , "(?:[37][01]\\d|4[0139]\\d|51\\d|6(?:[48]\\d|5[15-7]|9[69]))\\d{5}", , , , "31234567", , , [8]],
                [, , "80\\d{4,6}", , , , "80123456", , , [6, 7, 8]],
                [, , "90\\d{4,6}|89[1-3]\\d{2,5}", , , , "90123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:59|8[1-3])\\d{6}", , , , "59012345", , , [8]], "SI", 386, "00", "0", , , "0", , , , [
                    [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[34][24-8]|5[2-8]|7[3-8]"], "(0$1)"],
                    [, "([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                    [, "([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"], "0$1"],
                    [, "([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SJ: [, [, , "0\\d{4}|[45789]\\d{7}", , , , , , , [5, 8]],
                [, , "79\\d{6}", , , , "79123456", , , [8]],
                [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", , , , "41234567", , , [8]],
                [, , "80[01]\\d{5}", , , , "80012345", , , [8]],
                [, , "82[09]\\d{5}", , , , "82012345", , , [8]],
                [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]],
                [, , "880\\d{5}", , , , "88012345", , , [8]],
                [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", , , , "01234"], , , [, , "81[23]\\d{5}", , , , "81212345", , , [8]]
            ],
            SK: [, [, , "(?:[2-68]\\d{5,8}|9\\d{6,8})", , , , , , , [6, 7, 9]],
                [, , "2(?:1(?:6\\d{3,4}|7\\d{3})|[2-9]\\d{7})|[3-5][1-8](?:1(?:6\\d{2,3}|7\\d{3})|\\d{7})", , , , "221234567"],
                [, , "9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}", , , , "912123456", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "9(?:[78]\\d{7}|00\\d{6})", , , , "900123456", , , [9]],
                [, , "8[5-9]\\d{7}", , , , "850123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [9]], "SK", 421, "00", "0", , , "0", , , , [
                    [, "(2)(1[67])(\\d{3,4})", "$1 $2 $3", ["21[67]"], "0$1"],
                    [, "([3-5]\\d)(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5]"], "0$1"],
                    [, "(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                    [, "([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
                    [, "([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                    [, "(9090)(\\d{3})", "$1 $2", ["909", "9090"], "0$1"]
                ], , [, , "9090\\d{3}", , , , "9090123", , , [7]], , , [, , "(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}", , , , "800123456", , , [7, 9]],
                [, , "96\\d{7}", , , , "961234567", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            SL: [, [, , "[2-9]\\d{7}", , , , , , , [8],
                    [6]
                ],
                [, , "[235]2[2-4][2-9]\\d{4}", , , , "22221234", , , , [6]],
                [, , "(?:2[15]|3[03-5]|4[04]|5[05]|66|7[6-9]|8[08]|99)\\d{6}", , , , "25123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{6})", "$1 $2", , "(0$1)"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SM: [, [, , "[05-7]\\d{7,9}", , , , , , , [8, 10],
                    [6]
                ],
                [, , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [10],
                    [6]
                ],
                [, , "6[16]\\d{6}", , , , "66661212", , , [8]],
                [, , , , , , , , , [-1]],
                [, , "7[178]\\d{6}", , , , "71123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "5[158]\\d{6}", , , , "58001110", , , [8]], "SM", 378, "00", , , , "([89]\\d{5})", "0549$1", , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                    [, "(0549)(\\d{6})", "$1 $2", ["054", "0549"]],
                    [, "(\\d{6})", "0549 $1", ["[89]"]]
                ],
                [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                    [, "(0549)(\\d{6})", "($1) $2", ["054", "0549"]],
                    [, "(\\d{6})", "(0549) $1", ["[89]"]]
                ],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SN: [, [, , "[3789]\\d{8}", , , , , , , [9]],
                [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345"],
                [, , "7(?:[06-8]\\d|21|90)\\d{6}", , , , "701234567"],
                [, , "800\\d{6}", , , , "800123456"],
                [, , "88[4689]\\d{6}", , , , "884123456"],
                [, , "81[02468]\\d{6}", , , , "810123456"],
                [, , , , , , , , , [-1]],
                [, , "39[01]\\d{6}|3392\\d{5}|93330\\d{4}", , , , "933301234"], "SN", 221, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
                    [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SO: [, [, , "[1-9]\\d{5,8}", , , , , , , [6, 7, 8, 9]],
                [, , "(?:1\\d{1,2}|2[0-79]\\d|3[0-46-8]?\\d|4[0-7]?\\d|59\\d|8[125])\\d{4}", , , , "4012345", , , [6, 7]],
                [, , "(?:15\\d|2(?:4\\d|8)|3[59]\\d{2}|4[89]\\d{2}|6[1-9]?\\d{2}|7(?:[1-8]\\d|9\\d{1,2})|8[08]\\d{2}|9(?:0[67]|[2-9])\\d)\\d{5}", , , , "71123456", , , [7, 8, 9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [
                    [, "(\\d{6})", "$1", ["[134]"]],
                    [, "(\\d)(\\d{6})", "$1 $2", ["[13-5]|2[0-79]"]],
                    [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                    [, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                    [, "(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[59]|4[89]|6[24-6]|79|8[08]|90"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SR: [, [, , "[2-8]\\d{5,6}", , , , , , , [6, 7]],
                [, , "(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}", , , , "211234"],
                [, , "(?:7[124-7]|8[125-9])\\d{5}", , , , "7412345", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "56\\d{4}", , , , "561234", , , [6]], "SR", 597, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]],
                    [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                    [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SS: [, [, , "[19]\\d{8}", , , , , , , [9]],
                [, , "18\\d{7}", , , , "181234567"],
                [, , "(?:12|9[1257])\\d{7}", , , , "977123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            ST: [, [, , "[29]\\d{6}", , , , , , , [7]],
                [, , "22\\d{5}", , , , "2221234"],
                [, , "9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}", , , , "9812345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "ST", 239, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SV: [, [, , "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", , , , , , , [7, 8, 11]],
                [, , "2[1-6]\\d{6}", , , , "21234567", , , [8]],
                [, , "[67]\\d{7}", , , , "70123456", , , [8]],
                [, , "800\\d{4}(?:\\d{4})?", , , , "8001234", , , [7, 11]],
                [, , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [7, 11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SV", 503, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SX: [, [, , "[5789]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", , , , "7215425678", , , , [7]],
                [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "SX", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "721", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SY: [, [, , "[1-59]\\d{7,8}", , , , , , , [8, 9],
                    [6, 7]
                ],
                [, , "(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}", , , , "112345678", , , , [6, 7]],
                [, , "9(?:22|[3-589]\\d|6[024-9])\\d{6}", , , , "944567890", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1],
                    [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", , 1]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            SZ: [, [, , "[027]\\d{7}", , , , , , , [8]],
                [, , "2[2-9]\\d{6}", , , , "22171234"],
                [, , "7[6-9]\\d{6}", , , , "76123456"],
                [, , "0800\\d{4}", , , , "08001234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "SZ", 268, "00", , , , , , , , [
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]
                ], , [, , , , , , , , , [-1]], , , [, , "0800\\d{4}", , , , "08001234"],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TA: [, [, , "8\\d{3}", , , , , , , [4]],
                [, , "8\\d{3}", , , , "8999"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TC: [, [, , "[5689]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "649(?:712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [7]],
                [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", , , , "6492311234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , "64971[01]\\d{4}", , , , "6497101234", , , , [7]], "TC", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "649", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TD: [, [, , "[2679]\\d{7}", , , , , , , [8]],
                [, , "22(?:[3789]0|5[0-5]|6[89])\\d{4}", , , , "22501234"],
                [, , "(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}", , , , "63012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TG: [, [, , "[279]\\d{7}", , , , , , , [8]],
                [, , "2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}", , , , "22212345"],
                [, , "(?:7[09]|9[0-36-9])\\d{6}", , , , "90112345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TG", 228, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TH: [, [, , "1\\d{8,9}|[2-9]\\d{7,8}", , , , , , , [8, 9, 10]],
                [, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [8]],
                [, , "(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [9]],
                [, , "1800\\d{6}", , , , "1800123456", , , [10]],
                [, , "1900\\d{6}", , , , "1900123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "6[08]\\d{7}", , , , "601234567", , , [9]], "TH", 66, "00", "0", , , "0", , , , [
                    [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                    [, "([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                    [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"], "$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TJ: [, [, , "[3-57-9]\\d{8}", , , , , , , [9],
                    [3, 5, 7]
                ],
                [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", , , , "372123456", , , , [3, 5, 7]],
                [, , "(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}", , , , "917123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TJ", 992, "810", "8", , , "8", , "8~10", , [
                    [, "([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], , , 1],
                    [, "([457-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[59])"], , , 1],
                    [, "(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"], , , 1],
                    [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"], , , 1]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TK: [, [, , "[2-47]\\d{3,6}", , , , , , , [4, 5, 6, 7]],
                [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101"],
                [, , "7[2-4]\\d{2,5}", , , , "7290"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TL: [, [, , "[2-489]\\d{6}|7\\d{6,7}", , , , , , , [7, 8]],
                [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [7]],
                [, , "7[3-8]\\d{6}", , , , "77212345", , , [8]],
                [, , "80\\d{5}", , , , "8012345", , , [7]],
                [, , "90\\d{5}", , , , "9012345", , , [7]],
                [, , , , , , , , , [-1]],
                [, , "70\\d{5}", , , , "7012345", , , [7]],
                [, , , , , , , , , [-1]], "TL", 670, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["7[3-8]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TM: [, [, , "[1-6]\\d{7}", , , , , , , [8]],
                [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678"],
                [, , "6[1-9]\\d{6}", , , , "66123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TM", 993, "810", "8", , , "8", , "8~10", , [
                    [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                    [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
                    [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"], "(8 $1)"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TN: [, [, , "[2-57-9]\\d{7}", , , , , , , [8]],
                [, , "3(?:[012]\\d|6[0-4]|91)\\d{5}|7\\d{7}|81200\\d{3}", , , , "71234567"],
                [, , "(?:[259]\\d|4[0-6])\\d{6}", , , , "20123456"],
                [, , "8010\\d{4}", , , , "80101234"],
                [, , "88\\d{6}", , , , "88123456"],
                [, , "8[12]10\\d{4}", , , , "81101234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TN", 216, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TO: [, [, , "[02-8]\\d{4,6}", , , , , , , [5, 7]],
                [, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", , , , "20123", , , [5]],
                [, , "(?:7[578]|8[47-9])\\d{5}", , , , "7715123", , , [7]],
                [, , "0800\\d{3}", , , , "0800222", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TO", 676, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]],
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]],
                    [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TR: [, [, , "[2-589]\\d{9}|444\\d{4}", , , , , , , [7, 10]],
                [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", , , , "2123456789", , , [10]],
                [, , "5(?:(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{2}|1616|6161)\\d{5}", , , , "5012345678", , , [10]],
                [, , "800\\d{7}", , , , "8001234567", , , [10]],
                [, , "900\\d{7}", , , , "9001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TR", 90, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[02-69]|16)"], "0$1", , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1", , 1],
                    [, "(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"], , , 1]
                ], , [, , "512\\d{7}", , , , "5123456789", , , [10]], , , [, , "444\\d{4}", , , , "4441444", , , [7]],
                [, , "444\\d{4}|850\\d{7}", , , , "4441444"], , , [, , , , , , , , , [-1]]
            ],
            TT: [, [, , "[589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "868(?:2(?:01|[23]\\d)|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [7]],
                [, , "868(?:2(?:6[6-9]|[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}", , , , "8682911234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "TT", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "868", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , "868619\\d{4}", , , , "8686191234", , , , [7]]
            ],
            TV: [, [, , "[279]\\d{4,6}", , , , , , , [5, 6, 7]],
                [, , "2[02-9]\\d{3}", , , , "20123", , , [5]],
                [, , "(?:70\\d|90)\\d{4}", , , , "901234", , , [6, 7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "TV", 688, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            TW: [, [, , "2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}", , , , , , , [7, 8, 9, 10]],
                [, , "(?:2(?:[235-8]\\d{3}|4\\d{2,3})|3[2-9]\\d{2}|4(?:[239]\\d|[78])\\d{2}|5[2-8]\\d{2}|6[235-79]\\d{2}|7[1-9]\\d{2}|8(?:2(?:3\\d|66)|[7-9]\\d{2}))\\d{4}", , , , "221234567", , , [8, 9]],
                [, , "9[0-8]\\d{7}", , , , "912345678", , , [9]],
                [, , "80[0-79]\\d{6}", , , , "800123456", , , [9]],
                [, , "20(?:2|[013-9]\\d{2})\\d{4}", , , , "203123456", , , [7, 9]],
                [, , , , , , , , , [-1]],
                [, , "99\\d{7}", , , , "990123456", , , [9]],
                [, , "70\\d{8}", , , , "7012345678", , , [10]], "TW", 886, "0(?:0[25679]|19)", "0", "#", , "0", , , , [
                    [, "(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
                    [, "([258]0)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]|50[0-46-9]|80[0-79]"], "0$1"],
                    [, "([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|[78][1-9]"], "0$1"],
                    [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
                    [, "(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "50[0-46-9]\\d{6}", , , , "500123456", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            TZ: [, [, , "\\d{9}", , , , , , , [7, 9]],
                [, , "2[2-8]\\d{7}", , , , "222345678"],
                [, , "(?:6[2-9]|7[13-9])\\d{7}", , , , "621234567", , , [9]],
                [, , "80[08]\\d{6}", , , , "800123456", , , [9]],
                [, , "90\\d{7}", , , , "900123456", , , [9]],
                [, , "8(?:40|6[01])\\d{6}", , , , "840123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "41\\d{7}", , , , "412345678", , , [9]], "TZ", 255, "00[056]", "0", , , "0", , , , [
                    [, "([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                    [, "([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
                    [, "([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}", , , , "800123456", , , [9]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            UA: [, [, , "[3-9]\\d{8}", , , , , , , [9],
                    [5, 6, 7]
                ],
                [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", , , , "311234567", , , , [5, 6, 7]],
                [, , "(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}", , , , "391234567"],
                [, , "800\\d{6}", , , , "800123456"],
                [, , "900[2-49]\\d{5}", , , , "900212345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "89[1-579]\\d{6}", , , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [
                    [, "([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"], "0$1"],
                    [, "([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"], "0$1"],
                    [, "([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])", "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            UG: [, [, , "\\d{9}", , , , , , , [9],
                    [5, 6, 7]
                ],
                [, , "20(?:[0147]\\d{3}|2(?:40|[5-9]\\d)\\d|3(?:0[0-4]|[2367]\\d)\\d|5[0-4]\\d{2}|6(?:00[0-2]|30[0-4]|[5-9]\\d{2})|8[0-2]\\d{2})\\d{3}|[34]\\d{8}", , , , "312345678", , , , [5, 6, 7]],
                [, , "7(?:0[0-7]\\d|[1578]\\d{2}|2(?:[03]\\d|60)|30\\d|4[0-4]\\d|9(?:[0-6]\\d|74))\\d{5}", , , , "712345678"],
                [, , "800[123]\\d{5}", , , , "800123456"],
                [, , "90[123]\\d{6}", , , , "901123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{6})", "$1 $2", ["20[0-8]|4(?:6[45]|[7-9])|[7-9]", "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"], "0$1"],
                    [, "(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"], "0$1"],
                    [, "(2024)(\\d{5})", "$1 $2", ["202", "2024"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            US: [, [, , "[2-9]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
                [, , "(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}", , , , "2015550123", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "US", 1, "011", "1", , , "1", , , 1, [
                    [, "(\\d{3})(\\d{4})", "$1-$2", , , , 1],
                    [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", , , , 1]
                ],
                [
                    [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3"]
                ],
                [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            UY: [, [, , "[2489]\\d{6,7}", , , , , , , [7, 8]],
                [, , "2\\d{7}|4[2-7]\\d{6}", , , , "21231234", , , [8],
                    [7]
                ],
                [, , "9[1-9]\\d{6}", , , , "94231234", , , [8]],
                [, , "80[05]\\d{4}", , , , "8001234", , , [7]],
                [, , "90[0-8]\\d{4}", , , , "9001234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "UY", 598, "0(?:1[3-9]\\d|0)", "0", " int. ", , "0", , "00", , [
                    [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]],
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"],
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            UZ: [, [, , "[679]\\d{8}", , , , , , , [9],
                    [7]
                ],
                [, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", , , , "662345678", , , , [7]],
                [, , "6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}", , , , "912345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "UZ", 998, "810", "8", , , "8", , "8~10", , [
                    [, "([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"], "8 $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            VA: [, [, , "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", , , , , , , [6, 8, 9, 10, 11]],
                [, , "06698\\d{5}", , , , "0669812345", , , [10]],
                [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", , , , "3123456789", , , [9, 10, 11]],
                [, , "80(?:0\\d{6}|3\\d{3})", , , , "800123456", , , [6, 9]],
                [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", , , , "899123456", , , [6, 8, 9, 10]],
                [, , "84(?:[08]\\d{6}|[17]\\d{3})", , , , "848123456", , , [6, 9]],
                [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]],
                [, , "55\\d{8}", , , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , "848\\d{6}", , , , "848123456", , , [9]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            VC: [, [, , "[5789]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [7]],
                [, , "784(?:4(?:3[0-5]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}", , , , "7844301234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "VC", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "784", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            VE: [, [, , "[24589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}", , , , "2121234567", , , , [7]],
                [, , "4(?:1[24-8]|2[46])\\d{7}", , , , "4121234567"],
                [, , "800\\d{7}", , , , "8001234567"],
                [, , "900\\d{7}", , , , "9001234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "VE", 58, "00", "0", , , "0", , , , [
                    [, "(\\d{3})(\\d{7})", "$1-$2", , "0$1", "$CC $1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            VG: [, [, , "[2589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})", , , , "2842291234", , , , [7]],
                [, , "284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})", , , , "2843001234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "VG", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "284", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            VI: [, [, , "[3589]\\d{9}", , , , , , , [10],
                    [7]
                ],
                [, , "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
                [, , "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [, , "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]], "VI", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "340", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            VN: [, [, , "1\\d{6,9}|2\\d{9}|6\\d{6,7}|7\\d{6}|8\\d{6,8}|9\\d{8}", , , , , , , [7, 8, 9, 10]],
                [, , "2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-7]|9[0-4679])\\d{7}", , , , "2101234567", , , [10]],
                [, , "(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8(?:6[89]|8\\d|9[89])\\d{6}", , , , "912345678", , , [9, 10]],
                [, , "1800\\d{4,6}", , , , "1800123456", , , [8, 9, 10]],
                [, , "1900\\d{4,6}", , , , "1900123456", , , [8, 9, 10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "VN", 84, "00", "0", , , "0", , , , [
                    [, "([17]99)(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1],
                    [, "(80)(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
                    [, "(69\\d)(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1],
                    [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[0-35-79]"], "0$1", , 1],
                    [, "([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8(?:8|9[89])|9"], "0$1", , 1],
                    [, "(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"], "0$1", , 1],
                    [, "(86[89])(\\d{3})(\\d{3})", "$1 $2 $3", ["86[89]"], "0$1", , 1],
                    [, "(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0", "1[89]00"], "$1", , 1]
                ], , [, , , , , , , , , [-1]], , , [, , "[17]99\\d{4}|69\\d{5,6}", , , , "1992000", , , [7, 8]],
                [, , "[17]99\\d{4}|69\\d{5,6}|80\\d{5}", , , , "1992000", , , [7, 8]], , , [, , , , , , , , , [-1]]
            ],
            VU: [, [, , "[2-57-9]\\d{4,6}", , , , , , , [5, 7]],
                [, , "(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}", , , , "22123", , , [5]],
                [, , "(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}", , , , "5912345", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "VU", 678, "00", , , , , , , , [
                    [, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "3[03]\\d{3}|900\\d{4}", , , , "30123"], , , [, , , , , , , , , [-1]]
            ],
            WF: [, [, , "[4-8]\\d{5}", , , , , , , [6]],
                [, , "(?:50|68|72)\\d{4}", , , , "501234"],
                [, , "(?:50|68|72|8[23])\\d{4}", , , , "501234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "WF", 681, "00", , , , , , , , [
                    [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , "[48]0\\d{4}", , , , "401234"]
            ],
            WS: [, [, , "[2-8]\\d{4,6}", , , , , , , [5, 6, 7]],
                [, , "(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}", , , , "22123", , , [5, 7]],
                [, , "(?:60|7[25-7]\\d)\\d{4}", , , , "601234", , , [6, 7]],
                [, , "800\\d{3}", , , , "800123", , , [6]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "WS", 685, "0", , , , , , , , [
                    [, "(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]],
                    [, "(7\\d)(\\d{5})", "$1 $2", ["7"]],
                    [, "(\\d{5})", "$1", ["[2-6]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            XK: [, [, , "[23][89]\\d{6,7}|4[3-79]\\d{6}|[89]00\\d{5}", , , , , , , [8, 9]],
                [, , "(?:2[89]0?|3(?:8|90?))\\d{6}", , , , "28012345"],
                [, , "4[3-79]\\d{6}", , , , "43201234", , , [8]],
                [, , "800\\d{5}", , , , "80001234", , , [8]],
                [, , "900\\d{5}", , , , "90001234", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "XK", 383, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][89]|4[3-79]"], "0$1"],
                    [, "(\\d{3})(\\d{5})", "$1 $2", ["[89]00"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            YE: [, [, , "[1-7]\\d{6,8}", , , , , , , [7, 8, 9],
                    [6]
                ],
                [, , "(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", , , , "1234567", , , [7, 8],
                    [6]
                ],
                [, , "7[0137]\\d{7}", , , , "712345678", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [
                    [, "([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                    [, "(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            YT: [, [, , "[268]\\d{8}", , , , , , , [9]],
                [, , "269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}", , , , "269601234"],
                [, , "639(?:0[0-79]|1[019]|[26]\\d|3[09]|[45]0|7[06-9]|9[04-79])\\d{4}", , , , "639012345"],
                [, , "80\\d{7}", , , , "801234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "YT", 262, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "269|63", [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            ZA: [, [, , "[1-79]\\d{8}|8\\d{4,8}", , , , , , , [5, 6, 7, 8, 9]],
                [, , "(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", , , , "101234567", , , [9]],
                [, , "(?:6\\d|7[0-46-9])\\d{7}|8(?:[1-4]\\d{1,5}|5\\d{5})\\d{2}", , , , "711234567"],
                [, , "80\\d{7}", , , , "801234567", , , [9]],
                [, , "86[2-9]\\d{6}|9[0-2]\\d{7}", , , , "862345678", , , [9]],
                [, , "860\\d{6}", , , , "860123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "87\\d{7}", , , , "871234567", , , [9]], "ZA", 27, "00", "0", , , "0", , , , [
                    [, "(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                    [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
                    [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-57]|6[1-9])"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "861\\d{6}", , , , "861123456", , , [9]], , , [, , , , , , , , , [-1]]
            ],
            ZM: [, [, , "[289]\\d{8}", , , , , , , [9],
                    [6, 7]
                ],
                [, , "21[1-8]\\d{6}", , , , "211234567", , , , [6, 7]],
                [, , "9[4-9]\\d{7}", , , , "955123456"],
                [, , "800\\d{6}", , , , "800123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "ZM", 260, "00", "0", , , "0", , , , [
                    [, "(\\d{2})(\\d{4})", "$1 $2", , "$1"],
                    [, "([1-8])(\\d{2})(\\d{4})", "$1 $2 $3", ["[1-8]"], "$1"],
                    [, "([29]\\d)(\\d{7})", "$1 $2", ["[29]"], "0$1"],
                    [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            ZW: [, [, , "2(?:[0-57-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-69]\\d{4,9}|7\\d{8}|8[06]\\d{5,8}", , , , , , , [5, 6, 7, 8, 9, 10],
                    [3, 4]
                ],
                [, , "(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|37|6[78]|75\\d|98|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|[4-8]|9\\d)|2(?:0\\d{2}|12|292|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|1[2-4]|26|[37]2|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83\\d|2582\\d{2}|65[2-8])\\d{2}|(?:4\\d{6,7}|9[2-9]\\d{4,5})", , , , "1312345", , , , [3, 4]],
                [, , "(?:7(?:1[2-8]|3[2-9]|7[1-9]|8[2-5])|8644)\\d{6}", , , , "712345678", , , [9, 10]],
                [, , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "86(?:1[12]|30|55|77|8[368])\\d{6}", , , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [
                    [, "([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"], "0$1"],
                    [, "(7\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                    [, "(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"], "0$1"],
                    [, "([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"], "0$1"],
                    [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"], "0$1"],
                    [, "([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[02569]|3[0-69]|5[05689]|6"], "0$1"],
                    [, "([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"], "0$1"],
                    [, "([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"], "0$1"],
                    [, "(8\\d{3})(\\d{6})", "$1 $2", ["86"], "0$1"],
                    [, "(80\\d)(\\d{4})", "$1 $2", ["80"], "0$1"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            800: [, [, , "\\d{8}", , , , , , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "\\d{8}", , , , "12345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "001", 800, , , , , , , , 1, [
                    [, "(\\d{4})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            808: [, [, , "\\d{8}", , , , , , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "\\d{8}", , , , "12345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "001", 808, , , , , , , , 1, [
                    [, "(\\d{4})(\\d{4})", "$1 $2"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            870: [, [, , "[35-7]\\d{8}", , , , , , , [9]],
                [, , , , , , , , , [-1]],
                [, , "(?:[356]\\d|7[6-8])\\d{7}", , , , "301234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "001", 870, , , , , , , , , [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            878: [, [, , "1\\d{11}", , , , , , , [12]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "10\\d{10}", , , , "101234567890"], "001", 878, , , , , , , , 1, [
                    [, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            881: [, [, , "[67]\\d{8}", , , , , , , [9]],
                [, , , , , , , , , [-1]],
                [, , "[67]\\d{8}", , , , "612345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "001", 881, , , , , , , , , [
                    [, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            882: [, [, , "[13]\\d{6,11}", , , , , , , [7, 8, 9, 10, 11, 12]],
                [, , , , , , , , , [-1]],
                [, , "3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}", , , , "3421234", , , [7, 9, 10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}", , , , "390123456789"], "001", 882, , , , , , , , , [
                    [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                    [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                    [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                    [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["348"]],
                    [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]],
                    [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                    [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["16|39"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , "348[57]\\d{7}", , , , "34851234567", , , [11]]
            ],
            883: [, [, , "51\\d{7}(?:\\d{3})?", , , , , , , [9, 12]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})", , , , "510012345"], "001", 883, , , , , , , , 1, [
                    [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                    [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
                    [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ],
            888: [, [, , "\\d{11}", , , , , , , [11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "001", 888, , , , , , , , 1, [
                    [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , "\\d{11}", , , , "12345678901"], , , [, , , , , , , , , [-1]]
            ],
            979: [, [, , "\\d{9}", , , , , , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "\\d{9}", , , , "123456789"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], "001", 979, , , , , , , , 1, [
                    [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]
            ]
        };
    Q.a = function() {
        return Q.c ? Q.c : Q.c = new Q
    };
    var ya = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "０": "0",
            "１": "1",
            "２": "2",
            "３": "3",
            "４": "4",
            "５": "5",
            "６": "6",
            "７": "7",
            "８": "8",
            "９": "9",
            "٠": "0",
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9"
        },
        Aa = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "０": "0",
            "１": "1",
            "２": "2",
            "３": "3",
            "４": "4",
            "５": "5",
            "６": "6",
            "７": "7",
            "８": "8",
            "９": "9",
            "٠": "0",
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            A: "2",
            B: "2",
            C: "2",
            D: "3",
            E: "3",
            F: "3",
            G: "4",
            H: "4",
            I: "4",
            J: "5",
            K: "5",
            L: "5",
            M: "6",
            N: "6",
            O: "6",
            P: "7",
            Q: "7",
            R: "7",
            S: "7",
            T: "8",
            U: "8",
            V: "8",
            W: "9",
            X: "9",
            Y: "9",
            Z: "9"
        },
        R = RegExp("^[+＋]+"),
        Ba = RegExp("([0-9０-９٠-٩۰-۹])"),
        Ca = RegExp("[+＋0-9０-９٠-٩۰-۹]"),
        Da = /[\\\/] *x/,
        Ea = RegExp("[^0-9０-９٠-٩۰-۹A-Za-z#]+$"),
        Fa = /(?:.*?[A-Za-z]){3}.*/,
        Ga = RegExp("(?:;ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[;,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#)$", "i"),
        Ha = RegExp("^[0-9０-９٠-٩۰-۹]{2}$|^[+＋]*(?:[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～*]*[0-9０-９٠-٩۰-۹]){3,}[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～*A-Za-z0-9０-９٠-٩۰-۹]*(?:;ext=([0-9０-９٠-٩۰-۹]{1,7})|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[;,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*([0-9０-９٠-٩۰-۹]{1,7})#?|[- ]+([0-9０-９٠-٩۰-۹]{1,5})#)?$", "i"),
        Ia = /(\$\d)/;
    v("intlTelInputUtils", {}), v("intlTelInputUtils.formatNumber", function(a, b, c) {
        try {
            var d = Q.a(),
                e = Z(d, a, b);
            return Qa(d, e, "undefined" == typeof c ? 0 : c)
        } catch (f) {
            return a
        }
    }), v("intlTelInputUtils.getExampleNumber", function(a, b, c) {
        try {
            var e, d = Q.a();
            a: {
                if (Pa(a)) {
                    var f = W(V(d, a), c);
                    try {
                        if (null != f.a[6]) {
                            var g = B(f, 6);
                            e = Xa(d, g, a, !1);
                            break a
                        }
                    } catch (h) {}
                }
                e = null
            }
            return Qa(d, e, b ? 2 : 1)
        } catch (h) {
            return ""
        }
    }), v("intlTelInputUtils.getExtension", function(a, b) {
        try {
            return B(Z(Q.a(), a, b), 3)
        } catch (c) {
            return ""
        }
    }), v("intlTelInputUtils.getNumberType", function(a, b) {
        try {
            var d, c = Q.a(),
                e = Z(c, a, b),
                f = Ua(c, e),
                g = U(c, F(e, 1), f);
            if (g) {
                var h = T(e);
                d = Ta(h, g)
            } else d = -1;
            return d
        } catch (k) {
            return -99
        }
    }), v("intlTelInputUtils.getValidationError", function(a, b) {
        try {
            var d, c = Q.a(),
                e = Z(c, a, b),
                f = T(e),
                g = F(e, 1);
            if (g in P) {
                var h = U(c, g, Sa(g));
                d = Y(c, f, h, -1)
            } else d = 1;
            return d
        } catch (k) {
            return "Invalid country calling code" == k.message ? 1 : "The string supplied did not seem to be a phone number" == k.message ? 4 : "Phone number too short after IDD" == k.message || "The string supplied is too short to be a phone number" == k ? 2 : "The string supplied is too long to be a phone number" == k.message ? 3 : -99
        }
    }), v("intlTelInputUtils.isValidNumber", function(a, b) {
        try {
            var e, k, c = Q.a(),
                d = Z(c, a, b),
                f = Ua(c, d),
                g = F(d, 1),
                h = U(c, g, f);
            if (!(k = !h)) {
                var q;
                if (q = "001" != f) {
                    var z, za = V(c, f);
                    if (!za) throw Error("Invalid region code: " + f);
                    z = F(za, 10), q = g != z
                }
                k = q
            }
            if (k) e = !1;
            else {
                var Ya = T(d);
                e = -1 != Ta(Ya, h)
            }
            return e
        } catch (Za) {
            return !1
        }
    }), v("intlTelInputUtils.numberFormat", {
        E164: 0,
        INTERNATIONAL: 1,
        NATIONAL: 2,
        RFC3966: 3
    }), v("intlTelInputUtils.numberType", {
        FIXED_LINE: 0,
        MOBILE: 1,
        FIXED_LINE_OR_MOBILE: 2,
        TOLL_FREE: 3,
        PREMIUM_RATE: 4,
        SHARED_COST: 5,
        VOIP: 6,
        PERSONAL_NUMBER: 7,
        PAGER: 8,
        UAN: 9,
        VOICEMAIL: 10,
        UNKNOWN: -1
    }), v("intlTelInputUtils.validationError", {
        IS_POSSIBLE: 0,
        INVALID_COUNTRY_CODE: 1,
        TOO_SHORT: 2,
        TOO_LONG: 3,
        NOT_A_NUMBER: 4
    })
}();
var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    };
! function($) {
    "use strict";

    function functionName(fn) {
        if (void 0 === Function.prototype.name) {
            var funcNameRegex = /function\s([^(]{1,})\(/,
                results = funcNameRegex.exec(fn.toString());
            return results && results.length > 1 ? results[1].trim() : ""
        }
        return void 0 === fn.prototype ? fn.constructor.name : fn.prototype.constructor.name
    }

    function parseValue(str) {
        return "true" === str ? !0 : "false" === str ? !1 : isNaN(1 * str) ? str : parseFloat(str)
    }

    function hyphenate(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    var FOUNDATION_VERSION = "6.3.0",
        Foundation = {
            version: FOUNDATION_VERSION,
            _plugins: {},
            _uuids: [],
            rtl: function() {
                return "rtl" === $("html").attr("dir")
            },
            plugin: function(_plugin, name) {
                var className = name || functionName(_plugin),
                    attrName = hyphenate(className);
                this._plugins[attrName] = this[className] = _plugin
            },
            registerPlugin: function(plugin, name) {
                var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
                plugin.uuid = this.GetYoDigits(6, pluginName), plugin.$element.attr("data-" + pluginName) || plugin.$element.attr("data-" + pluginName, plugin.uuid), plugin.$element.data("zfPlugin") || plugin.$element.data("zfPlugin", plugin), plugin.$element.trigger("init.zf." + pluginName), this._uuids.push(plugin.uuid)
            },
            unregisterPlugin: function(plugin) {
                var pluginName = hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1), plugin.$element.removeAttr("data-" + pluginName).removeData("zfPlugin").trigger("destroyed.zf." + pluginName);
                for (var prop in plugin) plugin[prop] = null
            },
            reInit: function(plugins) {
                var isJQ = plugins instanceof $;
                try {
                    if (isJQ) plugins.each(function() {
                        $(this).data("zfPlugin")._init()
                    });
                    else {
                        var type = "undefined" == typeof plugins ? "undefined" : _typeof(plugins),
                            _this = this,
                            fns = {
                                object: function(plgs) {
                                    plgs.forEach(function(p) {
                                        p = hyphenate(p), $("[data-" + p + "]").foundation("_init")
                                    })
                                },
                                string: function() {
                                    plugins = hyphenate(plugins), $("[data-" + plugins + "]").foundation("_init")
                                },
                                undefined: function() {
                                    this.object(Object.keys(_this._plugins))
                                }
                            };
                        fns[type](plugins)
                    }
                } catch (err) {
                    console.error(err)
                } finally {
                    return plugins
                }
            },
            GetYoDigits: function(length, namespace) {
                return length = length || 6, Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-" + namespace : "")
            },
            reflow: function(elem, plugins) {
                "undefined" == typeof plugins ? plugins = Object.keys(this._plugins) : "string" == typeof plugins && (plugins = [plugins]);
                var _this = this;
                $.each(plugins, function(i, name) {
                    var plugin = _this._plugins[name],
                        $elem = $(elem).find("[data-" + name + "]").addBack("[data-" + name + "]");
                    $elem.each(function() {
                        var $el = $(this),
                            opts = {};
                        if ($el.data("zfPlugin")) return void console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
                        if ($el.attr("data-options")) {
                            $el.attr("data-options").split(";").forEach(function(e) {
                                var opt = e.split(":").map(function(el) {
                                    return el.trim()
                                });
                                opt[0] && (opts[opt[0]] = parseValue(opt[1]))
                            })
                        }
                        try {
                            $el.data("zfPlugin", new plugin($(this), opts))
                        } catch (er) {
                            console.error(er)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: functionName,
            transitionend: function($elem) {
                var end, transitions = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    elem = document.createElement("div");
                for (var t in transitions) "undefined" != typeof elem.style[t] && (end = transitions[t]);
                return end ? end : (end = setTimeout(function() {
                    $elem.triggerHandler("transitionend", [$elem])
                }, 1), "transitionend")
            }
        };
    Foundation.util = {
        throttle: function(func, delay) {
            var timer = null;
            return function() {
                var context = this,
                    args = arguments;
                null === timer && (timer = setTimeout(function() {
                    func.apply(context, args), timer = null
                }, delay))
            }
        }
    };
    var foundation = function(method) {
        var type = "undefined" == typeof method ? "undefined" : _typeof(method),
            $meta = $("meta.foundation-mq"),
            $noJS = $(".no-js");
        if ($meta.length || $('<meta class="foundation-mq">').appendTo(document.head), $noJS.length && $noJS.removeClass("no-js"), "undefined" === type) Foundation.MediaQuery._init(), Foundation.reflow(this);
        else {
            if ("string" !== type) throw new TypeError("We're sorry, " + type + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
            var args = Array.prototype.slice.call(arguments, 1),
                plugClass = this.data("zfPlugin");
            if (void 0 === plugClass || void 0 === plugClass[method]) throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
            1 === this.length ? plugClass[method].apply(plugClass, args) : this.each(function(i, el) {
                plugClass[method].apply($(el).data("zfPlugin"), args)
            })
        }
        return this
    };
    window.Foundation = Foundation, $.fn.foundation = foundation,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var vendors = ["webkit", "moz"], i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
                var vp = vendors[i];
                window.requestAnimationFrame = window[vp + "RequestAnimationFrame"], window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var lastTime = 0;
                window.requestAnimationFrame = function(callback) {
                    var now = Date.now(),
                        nextTime = Math.max(lastTime + 16, now);
                    return setTimeout(function() {
                        callback(lastTime = nextTime)
                    }, nextTime - now)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(oThis) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function() {},
                fBound = function() {
                    return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (fNOP.prototype = this.prototype), fBound.prototype = new fNOP, fBound
        })
}(jQuery), ! function($) {
    function parseStyleToObject(str) {
        var styleObject = {};
        return "string" != typeof str ? styleObject : (str = str.trim().slice(1, -1)) ? styleObject = str.split("&").reduce(function(ret, param) {
            var parts = param.replace(/\+/g, " ").split("="),
                key = parts[0],
                val = parts[1];
            return key = decodeURIComponent(key), val = void 0 === val ? null : decodeURIComponent(val), ret.hasOwnProperty(key) ? Array.isArray(ret[key]) ? ret[key].push(val) : ret[key] = [ret[key], val] : ret[key] = val, ret
        }, {}) : styleObject
    }
    var MediaQuery = {
        queries: [],
        current: "",
        _init: function() {
            var namedQueries, self = this,
                extractedStyles = $(".foundation-mq").css("font-family");
            namedQueries = parseStyleToObject(extractedStyles);
            for (var key in namedQueries) namedQueries.hasOwnProperty(key) && self.queries.push({
                name: key,
                value: "only screen and (min-width: " + namedQueries[key] + ")"
            });
            this.current = this._getCurrentSize(), this._watcher()
        },
        atLeast: function(size) {
            var query = this.get(size);
            return query ? window.matchMedia(query).matches : !1
        },
        is: function(size) {
            return size = size.trim().split(" "), size.length > 1 && "only" === size[1] ? size[0] === this._getCurrentSize() ? !0 : !1 : this.atLeast(size[0])
        },
        get: function(size) {
            for (var i in this.queries)
                if (this.queries.hasOwnProperty(i)) {
                    var query = this.queries[i];
                    if (size === query.name) return query.value
                } return null
        },
        _getCurrentSize: function() {
            for (var matched, i = 0; i < this.queries.length; i++) {
                var query = this.queries[i];
                window.matchMedia(query.value).matches && (matched = query)
            }
            return "object" === ("undefined" == typeof matched ? "undefined" : _typeof(matched)) ? matched.name : matched
        },
        _watcher: function() {
            var _this2 = this;
            $(window).on("resize.zf.mediaquery", function() {
                var newSize = _this2._getCurrentSize(),
                    currentSize = _this2.current;
                newSize !== currentSize && (_this2.current = newSize, $(window).trigger("changed.zf.mediaquery", [newSize, currentSize]))
            })
        }
    };
    Foundation.MediaQuery = MediaQuery, window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var styleMedia = window.styleMedia || window.media;
        if (!styleMedia) {
            var style = document.createElement("style"),
                script = document.getElementsByTagName("script")[0],
                info = null;
            style.type = "text/css", style.id = "matchmediajs-test", script && script.parentNode && script.parentNode.insertBefore(style, script), info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle, styleMedia = {
                matchMedium: function(media) {
                    var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
                    return style.styleSheet ? style.styleSheet.cssText = text : style.textContent = text, "1px" === info.width
                }
            }
        }
        return function(media) {
            return {
                matches: styleMedia.matchMedium(media || "all"),
                media: media || "all"
            }
        }
    }()), Foundation.MediaQuery = MediaQuery
}(jQuery), ! function($) {
    function Timer(elem, options, cb) {
        var start, timer, _this = this,
            duration = options.duration,
            nameSpace = Object.keys(elem.data())[0] || "timer",
            remain = -1;
        this.isPaused = !1, this.restart = function() {
            remain = -1, clearTimeout(timer), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(timer), remain = 0 >= remain ? duration : remain, elem.data("paused", !1), start = Date.now(), timer = setTimeout(function() {
                options.infinite && _this.restart(), cb && "function" == typeof cb && cb()
            }, remain), elem.trigger("timerstart.zf." + nameSpace)
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(timer), elem.data("paused", !0);
            var end = Date.now();
            remain -= end - start, elem.trigger("timerpaused.zf." + nameSpace)
        }
    }

    function onImagesLoaded(images, callback) {
        function singleImageLoaded() {
            unloaded--, 0 === unloaded && callback()
        }
        var unloaded = images.length;
        0 === unloaded && callback(), images.each(function() {
            if (this.complete || 4 === this.readyState || "complete" === this.readyState) singleImageLoaded();
            else {
                var src = $(this).attr("src");
                $(this).attr("src", src + "?" + (new Date).getTime()), $(this).one("load", function() {
                    singleImageLoaded()
                })
            }
        })
    }
    Foundation.Timer = Timer, Foundation.onImagesLoaded = onImagesLoaded
}(jQuery), ! function($) {
    function getKeyCodes(kcs) {
        var k = {};
        for (var kc in kcs) k[kcs[kc]] = kcs[kc];
        return k
    }
    var keyCodes = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        commands = {},
        Keyboard = {
            keys: getKeyCodes(keyCodes),
            parseKey: function(event) {
                var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
                return key = key.replace(/\W+/, ""), event.shiftKey && (key = "SHIFT_" + key), event.ctrlKey && (key = "CTRL_" + key), event.altKey && (key = "ALT_" + key), key = key.replace(/_$/, "")
            },
            handleKey: function(event, component, functions) {
                var cmds, command, fn, commandList = commands[component],
                    keyCode = this.parseKey(event);
                if (!commandList) return console.warn("Component not defined!");
                if (cmds = "undefined" == typeof commandList.ltr ? commandList : Foundation.rtl() ? $.extend({}, commandList.ltr, commandList.rtl) : $.extend({}, commandList.rtl, commandList.ltr), command = cmds[keyCode], fn = functions[command], fn && "function" == typeof fn) {
                    var returnValue = fn.apply();
                    (functions.handled || "function" == typeof functions.handled) && functions.handled(returnValue)
                } else(functions.unhandled || "function" == typeof functions.unhandled) && functions.unhandled()
            },
            findFocusable: function($element) {
                return $element ? $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
                    return !$(this).is(":visible") || $(this).attr("tabindex") < 0 ? !1 : !0
                }) : !1
            },
            register: function(componentName, cmds) {
                commands[componentName] = cmds
            },
            trapFocus: function($element) {
                var $focusable = Foundation.Keyboard.findFocusable($element),
                    $firstFocusable = $focusable.eq(0),
                    $lastFocusable = $focusable.eq(-1);
                $element.on("keydown.zf.trapfocus", function(event) {
                    event.target === $lastFocusable[0] && "TAB" === Foundation.Keyboard.parseKey(event) ? (event.preventDefault(), $firstFocusable.focus()) : event.target === $firstFocusable[0] && "SHIFT_TAB" === Foundation.Keyboard.parseKey(event) && (event.preventDefault(), $lastFocusable.focus())
                })
            },
            releaseFocus: function($element) {
                $element.off("keydown.zf.trapfocus")
            }
        };
    Foundation.Keyboard = Keyboard
}(jQuery), ! function() {
    function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
        var top, bottom, left, right, eleDims = GetDimensions(element);
        if (parent) {
            var parDims = GetDimensions(parent);
            bottom = eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top, top = eleDims.offset.top >= parDims.offset.top, left = eleDims.offset.left >= parDims.offset.left, right = eleDims.offset.left + eleDims.width <= parDims.width + parDims.offset.left
        } else bottom = eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top, top = eleDims.offset.top >= eleDims.windowDims.offset.top, left = eleDims.offset.left >= eleDims.windowDims.offset.left, right = eleDims.offset.left + eleDims.width <= eleDims.windowDims.width;
        var allDirs = [bottom, top, left, right];
        return lrOnly ? left === right == !0 : tbOnly ? top === bottom == !0 : -1 === allDirs.indexOf(!1)
    }

    function GetDimensions(elem) {
        if (elem = elem.length ? elem[0] : elem, elem === window || elem === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var rect = elem.getBoundingClientRect(),
            parRect = elem.parentNode.getBoundingClientRect(),
            winRect = document.body.getBoundingClientRect(),
            winY = window.pageYOffset,
            winX = window.pageXOffset;
        return {
            width: rect.width,
            height: rect.height,
            offset: {
                top: rect.top + winY,
                left: rect.left + winX
            },
            parentDims: {
                width: parRect.width,
                height: parRect.height,
                offset: {
                    top: parRect.top + winY,
                    left: parRect.left + winX
                }
            },
            windowDims: {
                width: winRect.width,
                height: winRect.height,
                offset: {
                    top: winY,
                    left: winX
                }
            }
        }
    }

    function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
        var $eleDims = GetDimensions(element),
            $anchorDims = anchor ? GetDimensions(anchor) : null;
        switch (position) {
            case "top":
                return {
                    left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left, top: $anchorDims.offset.top - ($eleDims.height + vOffset)
                };
            case "left":
                return {
                    left: $anchorDims.offset.left - ($eleDims.width + hOffset), top: $anchorDims.offset.top
                };
            case "right":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset, top: $anchorDims.offset.top
                };
            case "center top":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2, top: $anchorDims.offset.top - ($eleDims.height + vOffset)
                };
            case "center bottom":
                return {
                    left: isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2, top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
            case "center left":
                return {
                    left: $anchorDims.offset.left - ($eleDims.width + hOffset), top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
                };
            case "center right":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1, top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
                };
            case "center":
                return {
                    left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2, top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - $eleDims.height / 2
                };
            case "reveal":
                return {
                    left: ($eleDims.windowDims.width - $eleDims.width) / 2, top: $eleDims.windowDims.offset.top + vOffset
                };
            case "reveal full":
                return {
                    left: $eleDims.windowDims.offset.left, top: $eleDims.windowDims.offset.top
                };
            case "left bottom":
                return {
                    left: $anchorDims.offset.left, top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
            case "right bottom":
                return {
                    left: $anchorDims.offset.left + $anchorDims.width + hOffset - $eleDims.width, top: $anchorDims.offset.top + $anchorDims.height + vOffset
                };
            default:
                return {
                    left: Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left + hOffset, top: $anchorDims.offset.top + $anchorDims.height + vOffset
                }
        }
    }
    Foundation.Box = {
        ImNotTouchingYou: ImNotTouchingYou,
        GetDimensions: GetDimensions,
        GetOffsets: GetOffsets
    }
}(jQuery), ! function($) {
    var Nest = {
        Feather: function(menu) {
            var type = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            menu.attr("role", "menubar");
            var items = menu.find("li").attr({
                    role: "menuitem"
                }),
                subMenuClass = "is-" + type + "-submenu",
                subItemClass = subMenuClass + "-item",
                hasSubClass = "is-" + type + "-submenu-parent";
            items.each(function() {
                var $item = $(this),
                    $sub = $item.children("ul");
                $sub.length && ($item.addClass(hasSubClass).attr({
                    "aria-haspopup": !0,
                    "aria-label": $item.children("a:first").text()
                }), "drilldown" === type && $item.attr({
                    "aria-expanded": !1
                }), $sub.addClass("submenu " + subMenuClass).attr({
                    "data-submenu": "",
                    role: "menu"
                }), "drilldown" === type && $sub.attr({
                    "aria-hidden": !0
                })), $item.parent("[data-submenu]").length && $item.addClass("is-submenu-item " + subItemClass)
            })
        },
        Burn: function(menu, type) {
            var subMenuClass = "is-" + type + "-submenu",
                subItemClass = subMenuClass + "-item",
                hasSubClass = "is-" + type + "-submenu-parent";
            menu.find(">li, .menu, .menu > li").removeClass(subMenuClass + " " + subItemClass + " " + hasSubClass + " is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "")
        }
    };
    Foundation.Nest = Nest
}(jQuery), ! function($) {
    function Move(duration, elem, fn) {
        function move(ts) {
            start || (start = ts), prog = ts - start, fn.apply(elem), duration > prog ? anim = window.requestAnimationFrame(move, elem) : (window.cancelAnimationFrame(anim), elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem]))
        }
        var anim, prog, start = null;
        return 0 === duration ? (fn.apply(elem), void elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem])) : void(anim = window.requestAnimationFrame(move))
    }

    function animate(isIn, element, animation, cb) {
        function finish() {
            isIn || element.hide(), reset(), cb && cb.apply(element)
        }

        function reset() {
            element[0].style.transitionDuration = 0, element.removeClass(initClass + " " + activeClass + " " + animation)
        }
        if (element = $(element).eq(0), element.length) {
            var initClass = isIn ? initClasses[0] : initClasses[1],
                activeClass = isIn ? activeClasses[0] : activeClasses[1];
            reset(), element.addClass(animation).css("transition", "none"), requestAnimationFrame(function() {
                element.addClass(initClass), isIn && element.show()
            }), requestAnimationFrame(function() {
                element[0].offsetWidth, element.css("transition", "").addClass(activeClass)
            }), element.one(Foundation.transitionend(element), finish)
        }
    }
    var initClasses = ["mui-enter", "mui-leave"],
        activeClasses = ["mui-enter-active", "mui-leave-active"],
        Motion = {
            animateIn: function(element, animation, cb) {
                animate(!0, element, animation, cb)
            },
            animateOut: function(element, animation, cb) {
                animate(!1, element, animation, cb)
            }
        };
    Foundation.Move = Move, Foundation.Motion = Motion
}(jQuery),
function($) {
    function onTouchEnd() {
        this.removeEventListener("touchmove", onTouchMove), this.removeEventListener("touchend", onTouchEnd), isMoving = !1
    }

    function onTouchMove(e) {
        if ($.spotSwipe.preventDefault && e.preventDefault(), isMoving) {
            var dir, x = e.touches[0].pageX,
                dx = (e.touches[0].pageY, startPosX - x);
            elapsedTime = (new Date).getTime() - startTime, Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold && (dir = dx > 0 ? "left" : "right"), dir && (e.preventDefault(), onTouchEnd.call(this), $(this).trigger("swipe", dir).trigger("swipe" + dir))
        }
    }

    function onTouchStart(e) {
        1 == e.touches.length && (startPosX = e.touches[0].pageX, startPosY = e.touches[0].pageY, isMoving = !0, startTime = (new Date).getTime(), this.addEventListener("touchmove", onTouchMove, !1), this.addEventListener("touchend", onTouchEnd, !1))
    }

    function init() {
        this.addEventListener && this.addEventListener("touchstart", onTouchStart, !1)
    }
    $.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: !1,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var startPosX, startPosY, startTime, elapsedTime, isMoving = !1;
    $.event.special.swipe = {
        setup: init
    }, $.each(["left", "up", "down", "right"], function() {
        $.event.special["swipe" + this] = {
            setup: function() {
                $(this).on("swipe", $.noop)
            }
        }
    })
}(jQuery), ! function($) {
    $.fn.addTouch = function() {
        this.each(function(i, el) {
            $(el).bind("touchstart touchmove touchend touchcancel", function() {
                handleTouch(event)
            })
        });
        var handleTouch = function(event) {
            var simulatedEvent, touches = event.changedTouches,
                first = touches[0],
                eventTypes = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup"
                },
                type = eventTypes[event.type];
            "MouseEvent" in window && "function" == typeof window.MouseEvent ? simulatedEvent = new window.MouseEvent(type, {
                bubbles: !0,
                cancelable: !0,
                screenX: first.screenX,
                screenY: first.screenY,
                clientX: first.clientX,
                clientY: first.clientY
            }) : (simulatedEvent = document.createEvent("MouseEvent"), simulatedEvent.initMouseEvent(type, !0, !0, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, !1, !1, !1, !1, 0, null)), first.target.dispatchEvent(simulatedEvent)
        }
    }
}(jQuery), ! function($) {
    function checkListeners() {
        eventsListener(), resizeListener(), scrollListener(), mutateListener(), closemeListener()
    }

    function closemeListener(pluginName) {
        var yetiBoxes = $("[data-yeti-box]"),
            plugNames = ["dropdown", "tooltip", "reveal"];
        if (pluginName && ("string" == typeof pluginName ? plugNames.push(pluginName) : "object" === ("undefined" == typeof pluginName ? "undefined" : _typeof(pluginName)) && "string" == typeof pluginName[0] ? plugNames.concat(pluginName) : console.error("Plugin names must be strings")), yetiBoxes.length) {
            var listeners = plugNames.map(function(name) {
                return "closeme.zf." + name
            }).join(" ");
            $(window).off(listeners).on(listeners, function(e, pluginId) {
                var plugin = e.namespace.split(".")[0],
                    plugins = $("[data-" + plugin + "]").not('[data-yeti-box="' + pluginId + '"]');
                plugins.each(function() {
                    var _this = $(this);
                    _this.triggerHandler("close.zf.trigger", [_this])
                })
            })
        }
    }

    function resizeListener(debounce) {
        var timer = void 0,
            $nodes = $("[data-resize]");
        $nodes.length && $(window).off("resize.zf.trigger").on("resize.zf.trigger", function() {
            timer && clearTimeout(timer), timer = setTimeout(function() {
                MutationObserver || $nodes.each(function() {
                    $(this).triggerHandler("resizeme.zf.trigger")
                }), $nodes.attr("data-events", "resize")
            }, debounce || 10)
        })
    }

    function scrollListener(debounce) {
        var timer = void 0,
            $nodes = $("[data-scroll]");
        $nodes.length && $(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function() {
            timer && clearTimeout(timer), timer = setTimeout(function() {
                MutationObserver || $nodes.each(function() {
                    $(this).triggerHandler("scrollme.zf.trigger")
                }), $nodes.attr("data-events", "scroll")
            }, debounce || 10)
        })
    }

    function mutateListener() {
        var $nodes = $("[data-mutate]");
        $nodes.length && MutationObserver && $nodes.each(function() {
            $(this).triggerHandler("mutateme.zf.trigger")
        })
    }

    function eventsListener() {
        if (!MutationObserver) return !1;
        var nodes = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),
            listeningElementsMutation = function(mutationRecordsList) {
                var $target = $(mutationRecordsList[0].target);
                switch (mutationRecordsList[0].type) {
                    case "attributes":
                        "scroll" === $target.attr("data-events") && "data-events" === mutationRecordsList[0].attributeName && $target.triggerHandler("scrollme.zf.trigger", [$target, window.pageYOffset]), "resize" === $target.attr("data-events") && "data-events" === mutationRecordsList[0].attributeName && $target.triggerHandler("resizeme.zf.trigger", [$target]), "style" === mutationRecordsList[0].attributeName && ($target.closest("[data-mutate]").attr("data-events", "mutate"), $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]));
                        break;
                    case "childList":
                        $target.closest("[data-mutate]").attr("data-events", "mutate"), $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
                        break;
                    default:
                        return !1
                }
            };
        if (nodes.length)
            for (var i = 0; i <= nodes.length - 1; i++) {
                var elementObserver = new MutationObserver(listeningElementsMutation);
                elementObserver.observe(nodes[i], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"]
                })
            }
    }
    var MutationObserver = function() {
            for (var prefixes = ["WebKit", "Moz", "O", "Ms", ""], i = 0; i < prefixes.length; i++)
                if (prefixes[i] + "MutationObserver" in window) return window[prefixes[i] + "MutationObserver"];
            return !1
        }(),
        triggers = function(el, type) {
            el.data(type).split(" ").forEach(function(id) {
                $("#" + id)["close" === type ? "trigger" : "triggerHandler"](type + ".zf.trigger", [el])
            })
        };
    $(document).on("click.zf.trigger", "[data-open]", function() {
        triggers($(this), "open")
    }), $(document).on("click.zf.trigger", "[data-close]", function() {
        var id = $(this).data("close");
        id ? triggers($(this), "close") : $(this).trigger("close.zf.trigger")
    }), $(document).on("click.zf.trigger", "[data-toggle]", function() {
        var id = $(this).data("toggle");
        id ? triggers($(this), "toggle") : $(this).trigger("toggle.zf.trigger")
    }), $(document).on("close.zf.trigger", "[data-closable]", function(e) {
        e.stopPropagation();
        var animation = $(this).data("closable");
        "" !== animation ? Foundation.Motion.animateOut($(this), animation, function() {
            $(this).trigger("closed.zf")
        }) : $(this).fadeOut().trigger("closed.zf")
    }), $(document).on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", function() {
        var id = $(this).data("toggle-focus");
        $("#" + id).triggerHandler("toggle.zf.trigger", [$(this)])
    }), $(window).on("load", function() {
        checkListeners()
    }), Foundation.IHearYou = checkListeners
}(jQuery), ! function($) {
    var Dropdown = function() {
        function Dropdown(element, options) {
            _classCallCheck(this, Dropdown), this.$element = element, this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Dropdown"), Foundation.Keyboard.register("Dropdown", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close"
            })
        }
        return _createClass(Dropdown, [{
            key: "_init",
            value: function() {
                var $id = this.$element.attr("id");
                this.$anchor = $($('[data-toggle="' + $id + '"]').length ? '[data-toggle="' + $id + '"]' : '[data-open="' + $id + '"]'), this.$anchor.attr({
                    "aria-controls": $id,
                    "data-is-focus": !1,
                    "data-yeti-box": $id,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this.$parent = this.options.parentClass ? this.$element.parents("." + this.options.parentClass) : null, this.options.positionClass = this.getPositionClass(), this.counter = 4, this.usedPositions = [], this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": $id,
                    "data-resize": $id,
                    "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
                }), this._events()
            }
        }, {
            key: "getPositionClass",
            value: function() {
                var verticalPosition = this.$element[0].className.match(/(top|left|right|bottom)/g);
                verticalPosition = verticalPosition ? verticalPosition[0] : "";
                var horizontalPosition = /float-(\S+)/.exec(this.$anchor[0].className);
                horizontalPosition = horizontalPosition ? horizontalPosition[1] : "";
                var position = horizontalPosition ? horizontalPosition + " " + verticalPosition : verticalPosition;
                return position
            }
        }, {
            key: "_reposition",
            value: function(position) {
                this.usedPositions.push(position ? position : "bottom"), !position && this.usedPositions.indexOf("top") < 0 ? this.$element.addClass("top") : "top" === position && this.usedPositions.indexOf("bottom") < 0 ? this.$element.removeClass(position) : "left" === position && this.usedPositions.indexOf("right") < 0 ? this.$element.removeClass(position).addClass("right") : "right" === position && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(position).addClass("left") : !position && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.addClass("left") : "top" === position && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0 ? this.$element.removeClass(position).addClass("left") : this.$element.removeClass("left" === position && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0 ? position : "right" === position && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0 ? position : position), this.classChanged = !0, this.counter--
            }
        }, {
            key: "_setPosition",
            value: function() {
                if ("false" === this.$anchor.attr("aria-expanded")) return !1; {
                    var position = this.getPositionClass(),
                        $eleDims = Foundation.Box.GetDimensions(this.$element),
                        direction = (Foundation.Box.GetDimensions(this.$anchor), "left" === position ? "left" : "right" === position ? "left" : "top"),
                        param = "top" === direction ? "height" : "width";
                    "height" === param ? this.options.vOffset : this.options.hOffset
                }
                if ($eleDims.width >= $eleDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element, this.$parent)) {
                    var newWidth = $eleDims.windowDims.width,
                        parentHOffset = 0;
                    if (this.$parent) {
                        var $parentDims = Foundation.Box.GetDimensions(this.$parent),
                            parentHOffset = $parentDims.offset.left;
                        $parentDims.width < newWidth && (newWidth = $parentDims.width)
                    }
                    return this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset + parentHOffset, !0)).css({
                        width: newWidth - 2 * this.options.hOffset,
                        height: "auto"
                    }), this.classChanged = !0, !1
                }
                for (this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset)); !Foundation.Box.ImNotTouchingYou(this.$element, this.$parent, !0) && this.counter;) this._reposition(position), this._setPosition()
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.options.hover && (this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    var bodyData = $("body").data();
                    ("undefined" == typeof bodyData.whatinput || "mouse" === bodyData.whatinput) && (clearTimeout(_this.timeout), _this.timeout = setTimeout(function() {
                        _this.open(), _this.$anchor.data("hover", !0)
                    }, _this.options.hoverDelay))
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(_this.timeout), _this.timeout = setTimeout(function() {
                        _this.close(), _this.$anchor.data("hover", !1)
                    }, _this.options.hoverDelay)
                }), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(_this.timeout)
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(_this.timeout), _this.timeout = setTimeout(function() {
                        _this.close(), _this.$anchor.data("hover", !1)
                    }, _this.options.hoverDelay)
                })), this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(e) {
                    {
                        var $target = $(this);
                        Foundation.Keyboard.findFocusable(_this.$element)
                    }
                    Foundation.Keyboard.handleKey(e, "Dropdown", {
                        open: function() {
                            $target.is(_this.$anchor) && (_this.open(), _this.$element.attr("tabindex", -1).focus(), e.preventDefault())
                        },
                        close: function() {
                            _this.close(), _this.$anchor.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var $body = $(document.body).not(this.$element),
                    _this = this;
                $body.off("click.zf.dropdown").on("click.zf.dropdown", function(e) {
                    _this.$anchor.is(e.target) || _this.$anchor.find(e.target).length || _this.$element.find(e.target).length || (_this.close(), $body.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchor.addClass("hover").attr({
                        "aria-expanded": !0
                    }), this._setPosition(), this.$element.addClass("is-open").attr({
                        "aria-hidden": !1
                    }), this.options.autoFocus) {
                    var $focusable = Foundation.Keyboard.findFocusable(this.$element);
                    $focusable.length && $focusable.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && Foundation.Keyboard.trapFocus(this.$element), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open")) return !1;
                if (this.$element.removeClass("is-open").attr({
                        "aria-hidden": !0
                    }), this.$anchor.removeClass("hover").attr("aria-expanded", !1), this.classChanged) {
                    var curPositionClass = this.getPositionClass();
                    curPositionClass && this.$element.removeClass(curPositionClass), this.$element.addClass(this.options.positionClass).css({
                        height: "",
                        width: ""
                    }), this.classChanged = !1, this.counter = 4, this.usedPositions.length = 0
                }
                this.$element.trigger("hide.zf.dropdown", [this.$element]), this.options.trapFocus && Foundation.Keyboard.releaseFocus(this.$element)
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchor.data("hover")) return;
                    this.close()
                } else this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(), this.$anchor.off(".zf.dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), Dropdown
    }();
    Dropdown.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    }, Foundation.plugin(Dropdown, "Dropdown")
}(jQuery), ! function($) {
    var DropdownMenu = function() {
        function DropdownMenu(element, options) {
            _classCallCheck(this, DropdownMenu), this.$element = element, this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options), Foundation.Nest.Feather(this.$element, "dropdown"), this._init(), Foundation.registerPlugin(this, "DropdownMenu"), Foundation.Keyboard.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }
        return _createClass(DropdownMenu, [{
            key: "_init",
            value: function() {
                var subs = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), this.$element.hasClass(this.options.rightClass) || "right" === this.options.alignment || Foundation.rtl() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", subs.addClass("opens-left")) : subs.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display")
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this,
                    hasTouch = "ontouchstart" in window || "undefined" != typeof window.ontouchstart,
                    parClass = "is-dropdown-submenu-parent",
                    handleClickFn = function(e) {
                        var $elem = $(e.target).parentsUntil("ul", "." + parClass),
                            hasSub = $elem.hasClass(parClass),
                            hasClicked = "true" === $elem.attr("data-is-click"),
                            $sub = $elem.children(".is-dropdown-submenu");
                        if (hasSub)
                            if (hasClicked) {
                                if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) return;
                                e.stopImmediatePropagation(), e.preventDefault(), _this._hide($elem)
                            } else e.preventDefault(), e.stopImmediatePropagation(), _this._show($sub), $elem.add($elem.parentsUntil(_this.$element, "." + parClass)).attr("data-is-click", !0)
                    };
                (this.options.clickOpen || hasTouch) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", handleClickFn), _this.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu touchend.zf.dropdownmenu", function() {
                    var $elem = $(this),
                        hasSub = $elem.hasClass(parClass);
                    hasSub || _this._hide()
                }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function() {
                    var $elem = $(this),
                        hasSub = $elem.hasClass(parClass);
                    hasSub && (clearTimeout($elem.data("_delay")), $elem.data("_delay", setTimeout(function() {
                        _this._show($elem.children(".is-dropdown-submenu"))
                    }, _this.options.hoverDelay)))
                }).on("mouseleave.zf.dropdownmenu", function() {
                    var $elem = $(this),
                        hasSub = $elem.hasClass(parClass);
                    if (hasSub && _this.options.autoclose) {
                        if ("true" === $elem.attr("data-is-click") && _this.options.clickOpen) return !1;
                        clearTimeout($elem.data("_delay")), $elem.data("_delay", setTimeout(function() {
                            _this._hide($elem)
                        }, _this.options.closingTime))
                    }
                }), this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
                    var $prevElement, $nextElement, $element = $(e.target).parentsUntil("ul", '[role="menuitem"]'),
                        isTab = _this.$tabs.index($element) > -1,
                        $elements = isTab ? _this.$tabs : $element.siblings("li").add($element);
                    $elements.each(function(i) {
                        return $(this).is($element) ? ($prevElement = $elements.eq(i - 1), void($nextElement = $elements.eq(i + 1))) : void 0
                    });
                    var nextSibling = function() {
                            $element.is(":last-child") || ($nextElement.children("a:first").focus(), e.preventDefault())
                        },
                        prevSibling = function() {
                            $prevElement.children("a:first").focus(), e.preventDefault()
                        },
                        openSub = function() {
                            var $sub = $element.children("ul.is-dropdown-submenu");
                            $sub.length && (_this._show($sub), $element.find("li > a:first").focus(), e.preventDefault())
                        },
                        closeSub = function() {
                            var close = $element.parent("ul").parent("li");
                            close.children("a:first").focus(), _this._hide(close), e.preventDefault()
                        },
                        functions = {
                            open: openSub,
                            close: function() {
                                _this._hide(_this.$element), _this.$menuItems.find("a:first").focus(), e.preventDefault()
                            },
                            handled: function() {
                                e.stopImmediatePropagation()
                            }
                        };
                    isTab ? _this._isVertical() ? Foundation.rtl() ? $.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: closeSub,
                        previous: openSub
                    }) : $.extend(functions, {
                        down: nextSibling,
                        up: prevSibling,
                        next: openSub,
                        previous: closeSub
                    }) : Foundation.rtl() ? $.extend(functions, {
                        next: prevSibling,
                        previous: nextSibling,
                        down: openSub,
                        up: closeSub
                    }) : $.extend(functions, {
                        next: nextSibling,
                        previous: prevSibling,
                        down: openSub,
                        up: closeSub
                    }) : Foundation.rtl() ? $.extend(functions, {
                        next: closeSub,
                        previous: openSub,
                        down: nextSibling,
                        up: prevSibling
                    }) : $.extend(functions, {
                        next: openSub,
                        previous: closeSub,
                        down: nextSibling,
                        up: prevSibling
                    }), Foundation.Keyboard.handleKey(e, "DropdownMenu", functions)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var $body = $(document.body),
                    _this = this;
                $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
                    var $link = _this.$element.find(e.target);
                    $link.length || (_this._hide(), $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function($sub) {
                var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
                        return $(el).find($sub).length > 0
                    })),
                    $sibs = $sub.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide($sibs, idx), $sub.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                var clear = Foundation.Box.ImNotTouchingYou($sub, null, !0);
                if (!clear) {
                    var oldClass = "left" === this.options.alignment ? "-right" : "-left",
                        $parentLi = $sub.parent(".is-dropdown-submenu-parent");
                    $parentLi.removeClass("opens" + oldClass).addClass("opens-" + this.options.alignment), clear = Foundation.Box.ImNotTouchingYou($sub, null, !0), clear || $parentLi.removeClass("opens-" + this.options.alignment).addClass("opens-inner"), this.changed = !0
                }
                $sub.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [$sub])
            }
        }, {
            key: "_hide",
            value: function($elem, idx) {
                var $toClose;
                $toClose = $elem && $elem.length ? $elem : void 0 !== idx ? this.$tabs.not(function(i) {
                    return i === idx
                }) : this.$element;
                var somethingToClose = $toClose.hasClass("is-active") || $toClose.find(".is-active").length > 0;
                if (somethingToClose) {
                    if ($toClose.find("li.is-active").add($toClose).attr({
                            "data-is-click": !1
                        }).removeClass("is-active"), $toClose.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), this.changed || $toClose.find("opens-inner").length) {
                        var oldClass = "left" === this.options.alignment ? "right" : "left";
                        $toClose.find("li.is-dropdown-submenu-parent").add($toClose).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + oldClass), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [$toClose])
                }
            }
        }, {
            key: "destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), $(document.body).off(".zf.dropdownmenu"), Foundation.Nest.Burn(this.$element, "dropdown"), Foundation.unregisterPlugin(this)
            }
        }]), DropdownMenu
    }();
    DropdownMenu.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "left",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    }, Foundation.plugin(DropdownMenu, "DropdownMenu")
}(jQuery), ! function($) {
    var Toggler = function() {
        function Toggler(element, options) {
            _classCallCheck(this, Toggler), this.$element = element, this.options = $.extend({}, Toggler.defaults, element.data(), options), this.className = "", this._init(), this._events(), Foundation.registerPlugin(this, "Toggler")
        }
        return _createClass(Toggler, [{
            key: "_init",
            value: function() {
                var input;
                this.options.animate ? (input = this.options.animate.split(" "), this.animationIn = input[0], this.animationOut = input[1] || null) : (input = this.$element.data("toggler"), this.className = "." === input[0] ? input.slice(1) : input);
                var id = this.$element[0].id;
                $('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-controls", id), this.$element.attr("aria-expanded", this.$element.is(":hidden") ? !1 : !0)
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var isOn = this.$element.hasClass(this.className);
                this.$element.trigger(isOn ? "on.zf.toggler" : "off.zf.toggler"), this._updateARIA(isOn), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var _this = this;
                this.$element.is(":hidden") ? Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                    _this._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }) : Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                    _this._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                })
            }
        }, {
            key: "_updateARIA",
            value: function(isOn) {
                this.$element.attr("aria-expanded", isOn ? !0 : !1)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.off(".zf.toggler"), Foundation.unregisterPlugin(this)
            }
        }]), Toggler
    }();
    Toggler.defaults = {
        animate: !1
    }, Foundation.plugin(Toggler, "Toggler")
}(jQuery), ! function($) {
    var Accordion = function() {
        function Accordion(element, options) {
            _classCallCheck(this, Accordion), this.$element = element, this.options = $.extend({}, Accordion.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Accordion"), Foundation.Keyboard.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
        return _createClass(Accordion, [{
            key: "_init",
            value: function() {
                this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(idx, el) {
                    var $el = $(el),
                        $content = $el.children("[data-tab-content]"),
                        id = $content[0].id || Foundation.GetYoDigits(6, "accordion"),
                        linkId = el.id || id + "-label";
                    $el.find("a:first").attr({
                        "aria-controls": id,
                        role: "tab",
                        id: linkId,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), $content.attr({
                        role: "tabpanel",
                        "aria-labelledby": linkId,
                        "aria-hidden": !0,
                        id: id
                    })
                });
                var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
                $initActive.length && this.down($initActive, !0), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$tabs.each(function() {
                    var $elem = $(this),
                        $tabContent = $elem.children("[data-tab-content]");
                    $tabContent.length && $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                        e.preventDefault(), _this.toggle($tabContent)
                    }).on("keydown.zf.accordion", function(e) {
                        Foundation.Keyboard.handleKey(e, "Accordion", {
                            toggle: function() {
                                _this.toggle($tabContent)
                            },
                            next: function() {
                                var $a = $elem.next().find("a").focus();
                                _this.options.multiExpand || $a.trigger("click.zf.accordion")
                            },
                            previous: function() {
                                var $a = $elem.prev().find("a").focus();
                                _this.options.multiExpand || $a.trigger("click.zf.accordion")
                            },
                            handled: function() {
                                e.preventDefault(), e.stopPropagation()
                            }
                        })
                    })
                })
            }
        }, {
            key: "toggle",
            value: function($target) {
                $target.parent().hasClass("is-active") ? this.up($target) : this.down($target)
            }
        }, {
            key: "down",
            value: function($target, firstTime) {
                var _this3 = this;
                if ($target.attr("aria-hidden", !1).parent("[data-tab-content]").addBack().parent().addClass("is-active"), !this.options.multiExpand && !firstTime) {
                    var $currentActive = this.$element.children(".is-active").children("[data-tab-content]");
                    $currentActive.length && this.up($currentActive.not($target))
                }
                $target.slideDown(this.options.slideSpeed, function() {
                    _this3.$element.trigger("down.zf.accordion", [$target])
                }), $("#" + $target.attr("aria-labelledby")).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                })
            }
        }, {
            key: "up",
            value: function($target) {
                var $aunts = $target.parent().siblings(),
                    _this = this;
                (this.options.allowAllClosed || $aunts.hasClass("is-active")) && $target.parent().hasClass("is-active") && ($target.slideUp(_this.options.slideSpeed, function() {
                    _this.$element.trigger("up.zf.accordion", [$target])
                }), $target.attr("aria-hidden", !0).parent().removeClass("is-active"), $("#" + $target.attr("aria-labelledby")).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }))
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), Foundation.unregisterPlugin(this)
            }
        }]), Accordion
    }();
    Accordion.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1
    }, Foundation.plugin(Accordion, "Accordion")
}(jQuery), ! function($) {
    var AccordionMenu = function() {
        function AccordionMenu(element, options) {
            _classCallCheck(this, AccordionMenu), this.$element = element, this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options), Foundation.Nest.Feather(this.$element, "accordion"), this._init(), Foundation.registerPlugin(this, "AccordionMenu"), Foundation.Keyboard.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
            })
        }
        return _createClass(AccordionMenu, [{
            key: "_init",
            value: function() {
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "menu",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                    var linkId = this.id || Foundation.GetYoDigits(6, "acc-menu-link"),
                        $elem = $(this),
                        $sub = $elem.children("[data-submenu]"),
                        subId = $sub[0].id || Foundation.GetYoDigits(6, "acc-menu"),
                        isActive = $sub.hasClass("is-active");
                    $elem.attr({
                        "aria-controls": subId,
                        "aria-expanded": isActive,
                        role: "menuitem",
                        id: linkId
                    }), $sub.attr({
                        "aria-labelledby": linkId,
                        "aria-hidden": !isActive,
                        role: "menu",
                        id: subId
                    })
                });
                var initPanes = this.$element.find(".is-active");
                if (initPanes.length) {
                    var _this = this;
                    initPanes.each(function() {
                        _this.down($(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var _this = this;
                this.$element.find("li").each(function() {
                    var $submenu = $(this).children("[data-submenu]");
                    $submenu.length && $(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(e) {
                        e.preventDefault(), _this.toggle($submenu)
                    })
                }).on("keydown.zf.accordionmenu", function(e) {
                    var $prevElement, $nextElement, $element = $(this),
                        $elements = $element.parent("ul").children("li"),
                        $target = $element.children("[data-submenu]");
                    $elements.each(function(i) {
                        return $(this).is($element) ? ($prevElement = $elements.eq(Math.max(0, i - 1)).find("a").first(), $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find("a").first(), $(this).children("[data-submenu]:visible").length && ($nextElement = $element.find("li:first-child").find("a").first()), $(this).is(":first-child") ? $prevElement = $element.parents("li").first().find("a").first() : $prevElement.parents("li").first().children("[data-submenu]:visible").length && ($prevElement = $prevElement.parents("li").find("li:last-child").find("a").first()), void($(this).is(":last-child") && ($nextElement = $element.parents("li").first().next("li").find("a").first()))) : void 0
                    }), Foundation.Keyboard.handleKey(e, "AccordionMenu", {
                        open: function() {
                            $target.is(":hidden") && (_this.down($target), $target.find("li").first().find("a").first().focus())
                        },
                        close: function() {
                            $target.length && !$target.is(":hidden") ? _this.up($target) : $element.parent("[data-submenu]").length && (_this.up($element.parent("[data-submenu]")), $element.parents("li").first().find("a").first().focus())
                        },
                        up: function() {
                            return $prevElement.focus(), !0
                        },
                        down: function() {
                            return $nextElement.focus(), !0
                        },
                        toggle: function() {
                            $element.children("[data-submenu]").length && _this.toggle($element.children("[data-submenu]"))
                        },
                        closeAll: function() {
                            _this.hideAll()
                        },
                        handled: function(preventDefault) {
                            preventDefault && e.preventDefault(), e.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll",
            value: function() {
                this.up(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "showAll",
            value: function() {
                this.down(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "toggle",
            value: function($target) {
                $target.is(":animated") || ($target.is(":hidden") ? this.down($target) : this.up($target))
            }
        }, {
            key: "down",
            value: function($target) {
                var _this = this;
                this.options.multiOpen || this.up(this.$element.find(".is-active").not($target.parentsUntil(this.$element).add($target))), $target.addClass("is-active").attr({
                    "aria-hidden": !1
                }).parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }), $target.slideDown(_this.options.slideSpeed, function() {
                    _this.$element.trigger("down.zf.accordionMenu", [$target])
                })
            }
        }, {
            key: "up",
            value: function($target) {
                var _this = this;
                $target.slideUp(_this.options.slideSpeed, function() {
                    _this.$element.trigger("up.zf.accordionMenu", [$target])
                });
                var $menus = $target.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden", !0);
                $menus.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1)
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), Foundation.Nest.Burn(this.$element, "accordion"), Foundation.unregisterPlugin(this)
            }
        }]), AccordionMenu
    }();
    AccordionMenu.defaults = {
        slideSpeed: 250,
        multiOpen: !0
    }, Foundation.plugin(AccordionMenu, "AccordionMenu")
}(jQuery), ! function($) {
    function emCalc(em) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em
    }
    var Sticky = function() {
        function Sticky(element, options) {
            _classCallCheck(this, Sticky), this.$element = element, this.options = $.extend({}, Sticky.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Sticky")
        }
        return _createClass(Sticky, [{
            key: "_init",
            value: function() {
                var $parent = this.$element.parent("[data-sticky-container]"),
                    id = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"),
                    _this = this;
                $parent.length || (this.wasWrapped = !0), this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": id
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, $(window).one("load.zf.sticky", function() {
                    _this.containerHeight = "none" == _this.$element.css("display") ? 0 : _this.$element[0].getBoundingClientRect().height, _this.$container.css("height", _this.containerHeight), _this.elemHeight = _this.containerHeight, "" !== _this.options.anchor ? _this.$anchor = $("#" + _this.options.anchor) : _this._parsePoints(), _this._setSizes(function() {
                        var scroll = window.pageYOffset;
                        _this._calc(!1, scroll), _this.isStuck || _this._removeSticky(scroll >= _this.topPoint ? !1 : !0)
                    }), _this._events(id.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints",
            value: function() {
                for (var top = "" == this.options.topAnchor ? 1 : this.options.topAnchor, btm = "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor, pts = [top, btm], breaks = {}, i = 0, len = pts.length; len > i && pts[i]; i++) {
                    var pt;
                    if ("number" == typeof pts[i]) pt = pts[i];
                    else {
                        var place = pts[i].split(":"),
                            anchor = $("#" + place[0]);
                        pt = anchor.offset().top, place[1] && "bottom" === place[1].toLowerCase() && (pt += anchor[0].getBoundingClientRect().height)
                    }
                    breaks[i] = pt
                }
                this.points = breaks
            }
        }, {
            key: "_events",
            value: function(id) {
                var _this = this,
                    scrollListener = this.scrollListener = "scroll.zf." + id;
                this.isOn || (this.canStick && (this.isOn = !0, $(window).off(scrollListener).on(scrollListener, function() {
                    0 === _this.scrollCount ? (_this.scrollCount = _this.options.checkEvery, _this._setSizes(function() {
                        _this._calc(!1, window.pageYOffset)
                    })) : (_this.scrollCount--, _this._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                    _this._setSizes(function() {
                        _this._calc(!1), _this.canStick ? _this.isOn || _this._events(id) : _this.isOn && _this._pauseListeners(scrollListener)
                    })
                }))
            }
        }, {
            key: "_pauseListeners",
            value: function(scrollListener) {
                this.isOn = !1, $(window).off(scrollListener), this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function(checkSizes, scroll) {
                return checkSizes && this._setSizes(), this.canStick ? (scroll || (scroll = window.pageYOffset), void(scroll >= this.topPoint ? scroll <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0))) : (this.isStuck && this._removeSticky(!0), !1)
            }
        }, {
            key: "_setSticky",
            value: function() {
                var _this = this,
                    stickTo = this.options.stickTo,
                    mrgn = "top" === stickTo ? "marginTop" : "marginBottom",
                    notStuckTo = "top" === stickTo ? "bottom" : "top",
                    css = {};
                css[mrgn] = this.options[mrgn] + "em", css[stickTo] = 0, css[notStuckTo] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-" + notStuckTo).addClass("is-stuck is-at-" + stickTo).css(css).trigger("sticky.zf.stuckto:" + stickTo), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    _this._setSizes()
                })
            }
        }, {
            key: "_removeSticky",
            value: function(isTop) {
                var stickTo = this.options.stickTo,
                    stickToTop = "top" === stickTo,
                    css = {},
                    anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    mrgn = stickToTop ? "marginTop" : "marginBottom",
                    topOrBottom = isTop ? "top" : "bottom";
                css[mrgn] = 0, css.bottom = "auto", css.top = isTop ? 0 : anchorPt, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-" + stickTo).addClass("is-anchored is-at-" + topOrBottom).css(css).trigger("sticky.zf.unstuckfrom:" + topOrBottom)
            }
        }, {
            key: "_setSizes",
            value: function(cb) {
                this.canStick = Foundation.MediaQuery.is(this.options.stickyOn), this.canStick || cb && "function" == typeof cb && cb();
                var newElemWidth = this.$container[0].getBoundingClientRect().width,
                    comp = window.getComputedStyle(this.$container[0]),
                    pdngl = parseInt(comp["padding-left"], 10),
                    pdngr = parseInt(comp["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                    "max-width": newElemWidth - pdngl - pdngr + "px"
                });
                var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (newContainerHeight = 0), this.containerHeight = newContainerHeight, this.$container.css({
                        height: newContainerHeight
                    }), this.elemHeight = newContainerHeight, !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                    var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", anchorPt)
                }
                this._setBreakPoints(newContainerHeight, function() {
                    cb && "function" == typeof cb && cb()
                })
            }
        }, {
            key: "_setBreakPoints",
            value: function(elemHeight, cb) {
                if (!this.canStick) {
                    if (!cb || "function" != typeof cb) return !1;
                    cb()
                }
                var mTop = emCalc(this.options.marginTop),
                    mBtm = emCalc(this.options.marginBottom),
                    topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
                    bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
                    winHeight = window.innerHeight;
                "top" === this.options.stickTo ? (topPoint -= mTop, bottomPoint -= elemHeight + mTop) : "bottom" === this.options.stickTo && (topPoint -= winHeight - (elemHeight + mBtm), bottomPoint -= winHeight - mBtm), this.topPoint = topPoint, this.bottomPoint = bottomPoint, cb && "function" == typeof cb && cb()
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeSticky(!0), this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), $(window).off(this.scrollListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                }), Foundation.unregisterPlugin(this)
            }
        }]), Sticky
    }();
    Sticky.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    }, Foundation.plugin(Sticky, "Sticky")
}(jQuery), ! function($) {
    var Tabs = function() {
        function Tabs(element, options) {
            _classCallCheck(this, Tabs), this.$element = element, this.options = $.extend({}, Tabs.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Tabs"), Foundation.Keyboard.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
        return _createClass(Tabs, [{
            key: "_init",
            value: function() {
                var _this = this;
                if (this.$element.attr({
                        role: "tablist"
                    }), this.$tabTitles = this.$element.find("." + this.options.linkClass), this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]'), this.$tabTitles.each(function() {
                        var $elem = $(this),
                            $link = $elem.find("a"),
                            isActive = $elem.hasClass("" + _this.options.linkActiveClass),
                            hash = $link[0].hash.slice(1),
                            linkId = $link[0].id ? $link[0].id : hash + "-label",
                            $tabContent = $("#" + hash);
                        if ($elem.attr({
                                role: "presentation"
                            }), $link.attr({
                                role: "tab",
                                "aria-controls": hash,
                                "aria-selected": isActive,
                                id: linkId
                            }), $tabContent.attr({
                                role: "tabpanel",
                                "aria-hidden": !isActive,
                                "aria-labelledby": linkId
                            }), isActive && _this.options.autoFocus && $(window).load(function() {
                                $("html, body").animate({
                                    scrollTop: $elem.offset().top
                                }, _this.options.deepLinkSmudgeDelay, function() {
                                    $link.focus()
                                })
                            }), _this.options.deepLink) {
                            var anchor = window.location.hash;
                            if (anchor.length) {
                                var $link = $elem.find('[href="' + anchor + '"]');
                                $link.length && (_this.selectTab($(anchor)), _this.options.deepLinkSmudge && $(window).load(function() {
                                    var offset = $elem.offset();
                                    $("html, body").animate({
                                        scrollTop: offset.top
                                    }, _this.options.deepLinkSmudgeDelay)
                                }), $elem.trigger("deeplink.zf.tabs", [$link, $(anchor)]))
                            }
                        }
                    }), this.options.matchHeight) {
                    var $images = this.$tabContent.find("img");
                    $images.length ? Foundation.onImagesLoaded($images, this._setHeight.bind(this)) : this._setHeight()
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), $(window).on("changed.zf.mediaquery", this._setHeightMqHandler))
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var _this = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e) {
                    e.preventDefault(), e.stopPropagation(), _this._handleTabChange($(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var _this = this;
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                    if (9 !== e.which) {
                        var $prevElement, $nextElement, $element = $(this),
                            $elements = $element.parent("ul").children("li");
                        $elements.each(function(i) {
                            return $(this).is($element) ? void(_this.options.wrapOnKeys ? ($prevElement = 0 === i ? $elements.last() : $elements.eq(i - 1), $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1)) : ($prevElement = $elements.eq(Math.max(0, i - 1)), $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)))) : void 0
                        }), Foundation.Keyboard.handleKey(e, "Tabs", {
                            open: function() {
                                $element.find('[role="tab"]').focus(), _this._handleTabChange($element)
                            },
                            previous: function() {
                                $prevElement.find('[role="tab"]').focus(), _this._handleTabChange($prevElement)
                            },
                            next: function() {
                                $nextElement.find('[role="tab"]').focus(), _this._handleTabChange($nextElement)
                            },
                            handled: function() {
                                e.stopPropagation(), e.preventDefault()
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function($target) {
                if ($target.hasClass("" + this.options.linkActiveClass)) return void(this.options.activeCollapse && (this._collapseTab($target), this.$element.trigger("collapse.zf.tabs", [$target])));
                var $oldTab = this.$element.find("." + this.options.linkClass + "." + this.options.linkActiveClass),
                    $tabLink = $target.find('[role="tab"]'),
                    hash = $tabLink[0].hash,
                    $targetContent = this.$tabContent.find(hash);
                if (this._collapseTab($oldTab), this._openTab($target), this.options.deepLink) {
                    var anchor = $target.find("a").attr("href");
                    this.options.updateHistory ? history.pushState({}, "", anchor) : history.replaceState({}, "", anchor)
                }
                this.$element.trigger("change.zf.tabs", [$target, $targetContent]), $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_openTab",
            value: function($target) {
                var $tabLink = $target.find('[role="tab"]'),
                    hash = $tabLink[0].hash,
                    $targetContent = this.$tabContent.find(hash);
                $target.addClass("" + this.options.linkActiveClass), $tabLink.attr({
                    "aria-selected": "true"
                }), $targetContent.addClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "false"
                })
            }
        }, {
            key: "_collapseTab",
            value: function($target) {
                var $target_anchor = $target.removeClass("" + this.options.linkActiveClass).find('[role="tab"]').attr({
                    "aria-selected": "false"
                });
                $("#" + $target_anchor.attr("aria-controls")).removeClass("" + this.options.panelActiveClass).attr({
                    "aria-hidden": "true"
                })
            }
        }, {
            key: "selectTab",
            value: function(elem) {
                var idStr;
                idStr = "object" === ("undefined" == typeof elem ? "undefined" : _typeof(elem)) ? elem[0].id : elem, idStr.indexOf("#") < 0 && (idStr = "#" + idStr);
                var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent("." + this.options.linkClass);
                this._handleTabChange($target)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var max = 0;
                this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
                    var panel = $(this),
                        isActive = panel.hasClass("" + this.options.panelActiveClass);
                    isActive || panel.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var temp = this.getBoundingClientRect().height;
                    isActive || panel.css({
                        visibility: "",
                        display: ""
                    }), max = temp > max ? temp : max
                }).css("height", max + "px")
            }
        }, {
            key: "destroy",
            value: function() {
                this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide(), this.options.matchHeight && null != this._setHeightMqHandler && $(window).off("changed.zf.mediaquery", this._setHeightMqHandler), Foundation.unregisterPlugin(this)
            }
        }]), Tabs
    }();
    Tabs.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    }, Foundation.plugin(Tabs, "Tabs")
}(jQuery), ! function($) {
    function iPhoneSniff() {
        return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent)
    }

    function androidSniff() {
        return /Android/.test(window.navigator.userAgent)
    }

    function mobileSniff() {
        return iPhoneSniff() || androidSniff()
    }
    var Reveal = function() {
        function Reveal(element, options) {
            _classCallCheck(this, Reveal), this.$element = element, this.options = $.extend({}, Reveal.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Reveal"), Foundation.Keyboard.register("Reveal", {
                ENTER: "open",
                SPACE: "open",
                ESCAPE: "close"
            })
        }
        return _createClass(Reveal, [{
            key: "_init",
            value: function() {
                this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                    mq: Foundation.MediaQuery.current
                }, this.isMobile = mobileSniff(), this.$anchor = $($('[data-open="' + this.id + '"]').length ? '[data-open="' + this.id + '"]' : '[data-toggle="' + this.id + '"]'), this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo($(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#" + this.id && $(window).one("load.zf.reveal", this.open.bind(this))
            }
        }, {
            key: "_makeOverlay",
            value: function() {
                return $("<div></div>").addClass("reveal-overlay").appendTo(this.options.appendTo)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var left, top, width = this.$element.outerWidth(),
                    outerWidth = $(window).width(),
                    height = this.$element.outerHeight(),
                    outerHeight = $(window).height();
                left = "auto" === this.options.hOffset ? parseInt((outerWidth - width) / 2, 10) : parseInt(this.options.hOffset, 10), top = "auto" === this.options.vOffset ? height > outerHeight ? parseInt(Math.min(100, outerHeight / 10), 10) : parseInt((outerHeight - height) / 4, 10) : parseInt(this.options.vOffset, 10), this.$element.css({
                    top: top + "px"
                }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: left + "px"
                }), this.$element.css({
                    margin: "0px"
                }))
            }
        }, {
            key: "_events",
            value: function() {
                var _this4 = this,
                    _this = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(event, $element) {
                        return event.target === _this.$element[0] || $(event.target).parents("[data-closable]")[0] === $element ? _this4.close.apply(_this4) : void 0
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        _this._updatePosition()
                    }
                }), this.$anchor.length && this.$anchor.on("keydown.zf.reveal", function(e) {
                    (13 === e.which || 32 === e.which) && (e.stopPropagation(), e.preventDefault(), _this.open())
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(e) {
                    e.target !== _this.$element[0] && !$.contains(_this.$element[0], e.target) && $.contains(document, e.target) && _this.close()
                }), this.options.deepLink && $(window).on("popstate.zf.reveal:" + this.id, this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function() {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "open",
            value: function() {
                function addRevealOpenClasses() {
                    _this.isMobile ? (_this.originalScrollPos || (_this.originalScrollPos = window.pageYOffset), $("html, body").addClass("is-reveal-open")) : $("body").addClass("is-reveal-open")
                }
                var _this5 = this;
                if (this.options.deepLink) {
                    var hash = "#" + this.id;
                    window.history.pushState ? window.history.pushState(null, null, hash) : window.location.hash = hash
                }
                this.isActive = !0, this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(), this._updatePosition(), this.$element.hide().css({
                    visibility: ""
                }), this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id);
                var _this = this;
                if (this.options.animationIn) {
                    var afterAnimation = function() {
                        _this.$element.attr({
                            "aria-hidden": !1,
                            tabindex: -1
                        }).focus(), addRevealOpenClasses(), Foundation.Keyboard.trapFocus(_this.$element)
                    };
                    this.options.overlay && Foundation.Motion.animateIn(this.$overlay, "fade-in"), Foundation.Motion.animateIn(this.$element, this.options.animationIn, function() {
                        _this5.$element && (_this5.focusableElements = Foundation.Keyboard.findFocusable(_this5.$element), afterAnimation())
                    })
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), Foundation.Keyboard.trapFocus(this.$element), this.$element.trigger("open.zf.reveal"), addRevealOpenClasses(), setTimeout(function() {
                    _this5._extraHandlers()
                }, 0)
            }
        }, {
            key: "_extraHandlers",
            value: function() {
                var _this = this;
                this.$element && (this.focusableElements = Foundation.Keyboard.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || $("body").on("click.zf.reveal", function(e) {
                    e.target !== _this.$element[0] && !$.contains(_this.$element[0], e.target) && $.contains(document, e.target) && _this.close()
                }), this.options.closeOnEsc && $(window).on("keydown.zf.reveal", function(e) {
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        close: function() {
                            _this.options.closeOnEsc && (_this.close(), _this.$anchor.focus())
                        }
                    })
                }), this.$element.on("keydown.zf.reveal", function(e) {
                    var $target = $(this);
                    Foundation.Keyboard.handleKey(e, "Reveal", {
                        open: function() {
                            _this.$element.find(":focus").is(_this.$element.find("[data-close]")) ? setTimeout(function() {
                                _this.$anchor.focus()
                            }, 1) : $target.is(_this.focusableElements) && _this.open()
                        },
                        close: function() {
                            _this.options.closeOnEsc && (_this.close(), _this.$anchor.focus())
                        },
                        handled: function(preventDefault) {
                            preventDefault && e.preventDefault()
                        }
                    })
                }))
            }
        }, {
            key: "close",
            value: function() {
                function finishUp() {
                    _this.isMobile ? ($("html, body").removeClass("is-reveal-open"), _this.originalScrollPos && ($("body").scrollTop(_this.originalScrollPos), _this.originalScrollPos = null)) : $("body").removeClass("is-reveal-open"), Foundation.Keyboard.releaseFocus(_this.$element), _this.$element.attr("aria-hidden", !0), _this.$element.trigger("closed.zf.reveal")
                }
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var _this = this;
                this.options.animationOut ? (this.options.overlay ? Foundation.Motion.animateOut(this.$overlay, "fade-out", finishUp) : finishUp(), Foundation.Motion.animateOut(this.$element, this.options.animationOut)) : (this.options.overlay ? this.$overlay.hide(0, finishUp) : finishUp(), this.$element.hide(this.options.hideDelay)), this.options.closeOnEsc && $(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && $("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, _this.options.deepLink && (window.history.replaceState ? window.history.replaceState("", document.title, window.location.href.replace("#" + this.id, "")) : window.location.hash = "")
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo($(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), $(window).off(".zf.reveal:" + this.id), Foundation.unregisterPlugin(this)
            }
        }]), Reveal
    }();
    Reveal.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        btmOffsetPct: 10,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        appendTo: "body"
    }, Foundation.plugin(Reveal, "Reveal")
}(jQuery), ! function($) {
    var Abide = function() {
        function Abide(element) {
            var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this, Abide), this.$element = element, this.options = $.extend({}, Abide.defaults, this.$element.data(), options), this._init(), Foundation.registerPlugin(this, "Abide")
        }
        return _createClass(Abide, [{
            key: "_init",
            value: function() {
                this.$inputs = this.$element.find("input, textarea, select"), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var _this6 = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    _this6.resetForm()
                }).on("submit.zf.abide", function() {
                    return _this6.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                    _this6.validateInput($(e.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                    _this6.validateInput($(e.target))
                }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
                    _this6.validateInput($(e.target))
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function($el) {
                if (!$el.attr("required")) return !0;
                var isGood = !0;
                switch ($el[0].type) {
                    case "checkbox":
                        isGood = $el[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        var opt = $el.find("option:selected");
                        opt.length && opt.val() || (isGood = !1);
                        break;
                    default:
                        $el.val() && $el.val().length || (isGood = !1)
                }
                return isGood
            }
        }, {
            key: "findFormError",
            value: function($el) {
                var $error = $el.siblings(this.options.formErrorSelector);
                return $error.length || ($error = $el.parent().find(this.options.formErrorSelector)), $error
            }
        }, {
            key: "findLabel",
            value: function($el) {
                var id = $el[0].id,
                    $label = this.$element.find('label[for="' + id + '"]');
                return $label.length ? $label : $el.closest("label")
            }
        }, {
            key: "findRadioLabels",
            value: function($els) {
                var _this7 = this,
                    labels = $els.map(function(i, el) {
                        var id = el.id,
                            $label = _this7.$element.find('label[for="' + id + '"]');
                        return $label.length || ($label = $(el).closest("label")), $label[0]
                    });
                return $(labels)
            }
        }, {
            key: "addErrorClasses",
            value: function($el) {
                var $label = this.findLabel($el),
                    $formError = this.findFormError($el);
                $label.length && $label.addClass(this.options.labelErrorClass), $formError.length && $formError.addClass(this.options.formErrorClass), $el.addClass(this.options.inputErrorClass).attr("data-invalid", "")
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(groupName) {
                var $els = this.$element.find(':radio[name="' + groupName + '"]'),
                    $labels = this.findRadioLabels($els),
                    $formErrors = this.findFormError($els);
                $labels.length && $labels.removeClass(this.options.labelErrorClass), $formErrors.length && $formErrors.removeClass(this.options.formErrorClass), $els.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "removeErrorClasses",
            value: function($el) {
                if ("radio" == $el[0].type) return this.removeRadioErrorClasses($el.attr("name"));
                var $label = this.findLabel($el),
                    $formError = this.findFormError($el);
                $label.length && $label.removeClass(this.options.labelErrorClass), $formError.length && $formError.removeClass(this.options.formErrorClass), $el.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")
            }
        }, {
            key: "validateInput",
            value: function($el) {
                var clearRequire = this.requiredCheck($el),
                    validated = !1,
                    customValidator = !0,
                    validator = $el.attr("data-validator"),
                    equalTo = !0;
                if ($el.is("[data-abide-ignore]") || $el.is('[type="hidden"]')) return !0;
                switch ($el[0].type) {
                    case "radio":
                        validated = this.validateRadio($el.attr("name"));
                        break;
                    case "checkbox":
                        validated = clearRequire;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        validated = clearRequire;
                        break;
                    default:
                        validated = this.validateText($el)
                }
                validator && (customValidator = this.matchValidation($el, validator, $el.attr("required"))), $el.attr("data-equalto") && (equalTo = this.options.validators.equalTo($el));
                var goodToGo = -1 === [clearRequire, validated, customValidator, equalTo].indexOf(!1),
                    message = (goodToGo ? "valid" : "invalid") + ".zf.abide";
                if (goodToGo) {
                    var dependentElements = this.$element.find('[data-equalto="' + $el.attr("id") + '"]');
                    if (dependentElements.length) {
                        var _this = this;
                        dependentElements.each(function() {
                            $(this).val() && _this.validateInput($(this))
                        })
                    }
                }
                return this[goodToGo ? "removeErrorClasses" : "addErrorClasses"]($el), $el.trigger(message, [$el]), goodToGo
            }
        }, {
            key: "validateForm",
            value: function() {
                var acc = [],
                    _this = this;
                this.$inputs.each(function() {
                    acc.push(_this.validateInput($(this)))
                });
                var noError = -1 === acc.indexOf(!1);
                return this.$element.find("[data-abide-error]").css("display", noError ? "none" : "block"), this.$element.trigger((noError ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), noError
            }
        }, {
            key: "validateText",
            value: function($el, pattern) {
                pattern = pattern || $el.attr("pattern") || $el.attr("type");
                var inputText = $el.val(),
                    valid = !1;
                return inputText.length ? valid = this.options.patterns.hasOwnProperty(pattern) ? this.options.patterns[pattern].test(inputText) : pattern !== $el.attr("type") ? new RegExp(pattern).test(inputText) : !0 : $el.prop("required") || (valid = !0), valid
            }
        }, {
            key: "validateRadio",
            value: function(groupName) {
                var $group = this.$element.find(':radio[name="' + groupName + '"]'),
                    valid = !1,
                    required = !1;
                return $group.each(function(i, e) {
                    $(e).attr("required") && (required = !0)
                }), required || (valid = !0), valid || $group.each(function(i, e) {
                    $(e).prop("checked") && (valid = !0)
                }), valid
            }
        }, {
            key: "matchValidation",
            value: function($el, validators, required) {
                var _this8 = this;
                required = required ? !0 : !1;
                var clear = validators.split(" ").map(function(v) {
                    return _this8.options.validators[v]($el, required, $el.parent())
                });
                return -1 === clear.indexOf(!1)
            }
        }, {
            key: "resetForm",
            value: function() {
                var $form = this.$element,
                    opts = this.options;
                $("." + opts.labelErrorClass, $form).not("small").removeClass(opts.labelErrorClass), $("." + opts.inputErrorClass, $form).not("small").removeClass(opts.inputErrorClass), $(opts.formErrorSelector + "." + opts.formErrorClass).removeClass(opts.formErrorClass), $form.find("[data-abide-error]").css("display", "none"), $(":input", $form).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").removeAttr("data-invalid"), $(":input:radio", $form).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), $(":input:checkbox", $form).not("[data-abide-ignore]").prop("checked", !1).removeAttr("data-invalid"), $form.trigger("formreset.zf.abide", [$form])
            }
        }, {
            key: "destroy",
            value: function() {
                var _this = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    _this.removeErrorClasses($(this))
                }), Foundation.unregisterPlugin(this)
            }
        }]), Abide
    }();
    Abide.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(el) {
                return $("#" + el.attr("data-equalto")).val() === el.val()
            }
        }
    }, Foundation.plugin(Abide, "Abide")
}(jQuery), $(document).foundation();
var Common = function() {
    var initScrollListener = function() {
            var $win = $(window);
            $win.scroll(function() {
                0 == $win.scrollTop() ? $(".top-bar.dynamic").addClass("transparent") : $(".top-bar.dynamic").removeClass("transparent")
            })
        },
        initMobileMenu = function() {
            var $body = $(document.body);
            $(document).on("on.zf.toggler", function() {
                $("html, body").css({
                    overflow: "hidden",
                    height: "100%"
                })
            }).on("off.zf.toggler", function() {
                $body.removeClass("open-panel"), $("html, body").css({
                    overflow: "auto",
                    height: "auto"
                })
            }), $("#sandwich").click(function() {
                $(this).toggleClass("open")
            })
        },
        initScreenWidthListener = function() {
            $(window).resize(function() {
                windowsize = $(window).width(), windowsize >= 1024 && $("#sandwich").hasClass("open") && $("#sandwich").click()
            }), window.addEventListener("orientationchange", function() {
                $(window).trigger("resize")
            }, !1)
        },
        initHeroArrowDown = function() {
            $("#slideDown").click(function() {
                $("html,body").animate({
                    scrollTop: $(".section-after-hero").offset().top - 96
                }, "slow")
            })
        };
    return $(".security-code-wrapper").click(function() {
        $(this).toggleClass("active")
    }), {
        init: function() {
            initScrollListener(), initMobileMenu(), initScreenWidthListener(), initHeroArrowDown()
        }
    }
}();
$(document).ready(function() {
    Common.init()
});