!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    var r,
      i,
      o = (n = n || be).createElement("script");
    if (((o.text = e), t))
      for (r in we)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function r(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? pe[de.call(e)] || "object"
      : typeof e;
  }
  function i(e) {
    var t = !!e && "length" in e && e.length,
      n = r(e);
    return (
      !ye(e) &&
      !xe(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function a(e, t) {
    return t
      ? "\0" === e
        ? "\ufffd"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  function s(e, t, n) {
    return ye(t)
      ? ke.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? ke.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? ke.grep(e, function (e) {
          return fe.call(t, e) > -1 !== n;
        })
      : ke.filter(t, e, n);
  }
  function u(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function c(e) {
    var t = {};
    return (
      ke.each(e.match(We) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function l(e) {
    return e;
  }
  function f(e) {
    throw e;
  }
  function p(e, t, n, r) {
    var i;
    try {
      e && ye((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && ye((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function d() {
    be.removeEventListener("DOMContentLoaded", d),
      e.removeEventListener("load", d),
      ke.ready();
  }
  function h(e, t) {
    return t.toUpperCase();
  }
  function g(e) {
    return e.replace(ze, "ms-").replace(Xe, h);
  }
  function v() {
    this.expando = ke.expando + v.uid++;
  }
  function m(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Qe.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function y(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Ye, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = m(n);
        } catch (e) {}
        Je.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function x(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return ke.css(e, t, "");
          },
      u = s(),
      c = (n && n[3]) || (ke.cssNumber[t] ? "" : "px"),
      l =
        e.nodeType &&
        (ke.cssNumber[t] || ("px" !== c && +u)) &&
        Ze.exec(ke.css(e, t));
    if (l && l[3] !== c) {
      for (u /= 2, c = c || l[3], l = +u || 1; a--; )
        ke.style(e, t, l + c),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (l /= o);
      (l *= 2), ke.style(e, t, l + c), (n = n || []);
    }
    return (
      n &&
        ((l = +l || +u || 0),
        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = c), (r.start = l), (r.end = i))),
      i
    );
  }
  function b(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = ot[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = ke.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (ot[r] = i),
      i)
    );
  }
  function w(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = Ge.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && it(r) && (i[o] = b(r)))
          : "none" !== n && ((i[o] = "none"), Ge.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function T(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && o(e, t)) ? ke.merge([e], n) : n
    );
  }
  function C(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Ge.set(e[n], "globalEval", !t || Ge.get(t[n], "globalEval"));
  }
  function k(e, t, n, i, o) {
    for (
      var a,
        s,
        u,
        c,
        l,
        f,
        p = t.createDocumentFragment(),
        d = [],
        h = 0,
        g = e.length;
      h < g;
      h++
    )
      if ((a = e[h]) || 0 === a)
        if ("object" === r(a)) ke.merge(d, a.nodeType ? [a] : a);
        else if (pt.test(a)) {
          for (
            s = s || p.appendChild(t.createElement("div")),
              u = (ct.exec(a) || ["", ""])[1].toLowerCase(),
              c = ft[u] || ft._default,
              s.innerHTML = c[1] + ke.htmlPrefilter(a) + c[2],
              f = c[0];
            f--;

          )
            s = s.lastChild;
          ke.merge(d, s.childNodes), ((s = p.firstChild).textContent = "");
        } else d.push(t.createTextNode(a));
    for (p.textContent = "", h = 0; (a = d[h++]); )
      if (i && ke.inArray(a, i) > -1) o && o.push(a);
      else if (((l = nt(a)), (s = T(p.appendChild(a), "script")), l && C(s), n))
        for (f = 0; (a = s[f++]); ) lt.test(a.type || "") && n.push(a);
    return p;
  }
  function S() {
    return !0;
  }
  function E() {
    return !1;
  }
  function j(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        j(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = E;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        (i = function (e) {
          return ke().off(e), a.apply(this, arguments);
        }),
        (i.guid = a.guid || (a.guid = ke.guid++))),
      e.each(function () {
        ke.event.add(this, t, i, r, n);
      })
    );
  }
  function A(e, t, n) {
    n
      ? (Ge.set(e, t, !1),
        ke.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var n,
              r = Ge.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (r)
                (ke.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = ue.call(arguments)),
                Ge.set(this, t, r),
                this[t](),
                (n = Ge.get(this, t)),
                Ge.set(this, t, !1),
                r !== n)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), n;
            } else
              r &&
                (Ge.set(this, t, ke.event.trigger(r[0], r.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = S));
          },
        }))
      : void 0 === Ge.get(e, t) && ke.event.add(e, t, S);
  }
  function D(e, t) {
    return (
      (o(e, "table") &&
        o(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        ke(e).children("tbody")[0]) ||
      e
    );
  }
  function N(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function L(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function q(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Ge.hasData(e) && (s = Ge.get(e).events))
        for (i in (Ge.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) ke.event.add(t, i, s[i][n]);
      Je.hasData(e) &&
        ((o = Je.access(e)), (a = ke.extend({}, o)), Je.set(t, a));
    }
  }
  function H(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && ut.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function O(e, t, r, i) {
    t = ce(t);
    var o,
      a,
      s,
      u,
      c,
      l,
      f = 0,
      p = e.length,
      d = p - 1,
      h = t[0],
      g = ye(h);
    if (g || (p > 1 && "string" == typeof h && !me.checkClone && gt.test(h)))
      return e.each(function (n) {
        var o = e.eq(n);
        g && (t[0] = h.call(this, n, o.html())), O(o, t, r, i);
      });
    if (
      p &&
      ((a = (o = k(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === o.childNodes.length && (o = a),
      a || i)
    ) {
      for (u = (s = ke.map(T(o, "script"), N)).length; f < p; f++)
        (c = o),
          f !== d &&
            ((c = ke.clone(c, !0, !0)), u && ke.merge(s, T(c, "script"))),
          r.call(e[f], c, f);
      if (u)
        for (l = s[s.length - 1].ownerDocument, ke.map(s, L), f = 0; f < u; f++)
          (c = s[f]),
            lt.test(c.type || "") &&
              !Ge.access(c, "globalEval") &&
              ke.contains(l, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? ke._evalUrl &&
                  !c.noModule &&
                  ke._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    l
                  )
                : n(c.textContent.replace(vt, ""), c, l));
    }
    return e;
  }
  function P(e, t, n) {
    for (var r, i = t ? ke.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ke.cleanData(T(r)),
        r.parentNode &&
          (n && nt(r) && C(T(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  function M(e, t, n) {
    var r,
      i,
      o,
      a,
      s = yt.test(t),
      u = e.style;
    return (
      (n = n || xt(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(De, "$1") || void 0),
        "" !== a || nt(e) || (a = ke.style(e, t)),
        !me.pixelBoxStyles() &&
          mt.test(a) &&
          wt.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function R(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function I(e) {
    for (var t = e[0].toUpperCase() + e.slice(1), n = Tt.length; n--; )
      if ((e = Tt[n] + t) in Ct) return e;
  }
  function F(e) {
    var t = ke.cssProps[e] || kt[e];
    return t || (e in Ct ? e : (kt[e] = I(e) || e));
  }
  function $(e, t, n) {
    var r = Ze.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function W(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      c = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (c += ke.css(e, n + et[a], !0, i)),
        r
          ? ("content" === n && (u -= ke.css(e, "padding" + et[a], !0, i)),
            "margin" !== n &&
              (u -= ke.css(e, "border" + et[a] + "Width", !0, i)))
          : ((u += ke.css(e, "padding" + et[a], !0, i)),
            "padding" !== n
              ? (u += ke.css(e, "border" + et[a] + "Width", !0, i))
              : (s += ke.css(e, "border" + et[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u + c
    );
  }
  function _(e, t, n) {
    var r = xt(e),
      i =
        (!me.boxSizingReliable() || n) &&
        "border-box" === ke.css(e, "boxSizing", !1, r),
      a = i,
      s = M(e, t, r),
      u = "offset" + t[0].toUpperCase() + t.slice(1);
    if (mt.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!me.boxSizingReliable() && i) ||
        (!me.reliableTrDimensions() && o(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === ke.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === ke.css(e, "boxSizing", !1, r)),
        (a = u in e) && (s = e[u])),
      (s = parseFloat(s) || 0) +
        W(e, t, n || (i ? "border" : "content"), a, r, s) +
        "px"
    );
  }
  function B(e, t, n, r, i) {
    return new B.prototype.init(e, t, n, r, i);
  }
  function U() {
    Dt &&
      (!1 === be.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(U)
        : e.setTimeout(U, ke.fx.interval),
      ke.fx.tick());
  }
  function z() {
    return (
      e.setTimeout(function () {
        At = void 0;
      }),
      (At = Date.now())
    );
  }
  function X(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = et[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function V(e, t, n) {
    for (
      var r,
        i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function G(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      c,
      l,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && it(e),
      v = Ge.get(e, "fxshow");
    for (r in (n.queue ||
      (null == (a = ke._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, ke.queue(e, "fx").length || a.empty.fire();
        });
      })),
    t))
      if (((i = t[r]), Nt.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = (v && v[r]) || ke.style(e, r);
      }
    if ((u = !ke.isEmptyObject(t)) || !ke.isEmptyObject(d))
      for (r in (f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (c = v && v.display) && (c = Ge.get(e, "display")),
        "none" === (l = ke.css(e, "display")) &&
          (c
            ? (l = c)
            : (w([e], !0),
              (c = e.style.display || c),
              (l = ke.css(e, "display")),
              w([e]))),
        ("inline" === l || ("inline-block" === l && null != c)) &&
          "none" === ke.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = c;
            }),
            null == c && ((l = h.display), (c = "none" === l ? "" : l))),
          (h.display = "inline-block"))),
      n.overflow &&
        ((h.overflow = "hidden"),
        p.always(function () {
          (h.overflow = n.overflow[0]),
            (h.overflowX = n.overflow[1]),
            (h.overflowY = n.overflow[2]);
        })),
      (u = !1),
      d))
        u ||
          (v
            ? "hidden" in v && (g = v.hidden)
            : (v = Ge.access(e, "fxshow", { display: c })),
          o && (v.hidden = !g),
          g && w([e], !0),
          p.done(function () {
            for (r in (g || w([e]), Ge.remove(e, "fxshow"), d))
              ke.style(e, r, d[r]);
          })),
          (u = V(g ? v[r] : 0, r, p)),
          r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
  }
  function J(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((i = t[(r = g(n))]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = ke.cssHooks[r]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete e[r], o))
          n in e || ((e[n] = o[n]), (t[n] = i));
      else t[r] = i;
  }
  function Q(e, t, n) {
    var r,
      i,
      o = 0,
      a = Q.prefilters.length,
      s = ke.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = At || z(),
            n = Math.max(0, c.startTime + c.duration - t),
            r = 1 - (n / c.duration || 0),
            o = 0,
            a = c.tweens.length;
          o < a;
          o++
        )
          c.tweens[o].run(r);
        return (
          s.notifyWith(e, [c, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: ke.extend({}, t),
        opts: ke.extend(
          !0,
          { specialEasing: {}, easing: ke.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: At || z(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ke.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) c.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      l = c.props;
    for (J(l, c.opts.specialEasing); o < a; o++)
      if ((r = Q.prefilters[o].call(c, e, l, c.opts)))
        return (
          ye(r.stop) &&
            (ke._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      ke.map(l, V, c),
      ye(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      ke.fx.timer(ke.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function Y(e) {
    return (e.match(We) || []).join(" ");
  }
  function K(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Z(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(We)) || [];
  }
  function ee(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      ke.each(t, function (t, r) {
        n || _t.test(e)
          ? i(e, r)
          : ee(
              e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== r(t)) i(e, t);
    else for (o in t) ee(e + "[" + o + "]", t[o], n, i);
  }
  function te(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(We) || [];
      if (ye(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function ne(e, t, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        ke.each(e[s] || [], function (e, s) {
          var c = s(t, n, r);
          return "string" != typeof c || a || o[c]
            ? a
              ? !(u = c)
              : void 0
            : (t.dataTypes.unshift(c), i(c), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === en;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function re(e, t) {
    var n,
      r,
      i = ke.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ke.extend(!0, e, r), e;
  }
  function ie(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function oe(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      c = {},
      l = e.dataTypes.slice();
    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = l.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = c[u + " " + o] || c["* " + o]))
            for (i in c)
              if (
                (s = i.split(" "))[1] === o &&
                (a = c[u + " " + s[0]] || c["* " + s[0]])
              ) {
                !0 === a
                  ? (a = c[i])
                  : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  var ae = [],
    se = Object.getPrototypeOf,
    ue = ae.slice,
    ce = ae.flat
      ? function (e) {
          return ae.flat.call(e);
        }
      : function (e) {
          return ae.concat.apply([], e);
        },
    le = ae.push,
    fe = ae.indexOf,
    pe = {},
    de = pe.toString,
    he = pe.hasOwnProperty,
    ge = he.toString,
    ve = ge.call(Object),
    me = {},
    ye = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    xe = function (e) {
      return null != e && e === e.window;
    },
    be = e.document,
    we = { type: !0, src: !0, nonce: !0, noModule: !0 },
    Te = "3.7.1",
    Ce = /HTML$/i,
    ke = function (e, t) {
      return new ke.fn.init(e, t);
    };
  (ke.fn = ke.prototype =
    {
      jquery: Te,
      constructor: ke,
      length: 0,
      toArray: function () {
        return ue.call(this);
      },
      get: function (e) {
        return null == e
          ? ue.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = ke.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return ke.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          ke.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(ue.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          ke.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          ke.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: le,
      sort: ae.sort,
      splice: ae.splice,
    }),
    (ke.extend = ke.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || ye(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (c && r && (ke.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || ke.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = ke.extend(c, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    ke.extend({
      expando: "jQuery" + (Te + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== de.call(e)) &&
          (!(t = se(e)) ||
            ("function" ==
              typeof (n = he.call(t, "constructor") && t.constructor) &&
              ge.call(n) === ve))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, r) {
        n(e, { nonce: t && t.nonce }, r);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (i(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      text: function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (!i) for (; (t = e[r++]); ) n += ke.text(t);
        return 1 === i || 11 === i
          ? e.textContent
          : 9 === i
          ? e.documentElement.textContent
          : 3 === i || 4 === i
          ? e.nodeValue
          : n;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (i(Object(e))
              ? ke.merge(n, "string" == typeof e ? [e] : e)
              : le.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : fe.call(t, e, n);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Ce.test(t || (n && n.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          o,
          a = 0,
          s = [];
        if (i(e))
          for (r = e.length; a < r; a++)
            null != (o = t(e[a], a, n)) && s.push(o);
        else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
        return ce(s);
      },
      guid: 1,
      support: me,
    }),
    "function" == typeof Symbol &&
      (ke.fn[Symbol.iterator] = ae[Symbol.iterator]),
    ke.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Se = ae.pop,
    Ee = ae.sort,
    je = ae.splice,
    Ae = "[\\x20\\t\\r\\n\\f]",
    De = new RegExp("^" + Ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ae + "+$", "g");
  ke.contains = function (e, t) {
    var n = t && t.parentNode;
    return (
      e === n ||
      !(
        !n ||
        1 !== n.nodeType ||
        !(e.contains
          ? e.contains(n)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
      )
    );
  };
  var Ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  ke.escapeSelector = function (e) {
    return (e + "").replace(Ne, a);
  };
  var Le = be,
    qe = le;
  !(function () {
    function t() {
      try {
        return N.activeElement;
      } catch (e) {}
    }
    function n(e, t, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        d,
        v = t && t.ownerDocument,
        m = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
      )
        return r;
      if (!i && (p(t), (t = t || N), q)) {
        if (11 !== m && (c = re.exec(e)))
          if ((o = c[1])) {
            if (9 === m) {
              if (!(s = t.getElementById(o))) return r;
              if (s.id === o) return P.call(r, s), r;
            } else if (
              v &&
              (s = v.getElementById(o)) &&
              n.contains(t, s) &&
              s.id === o
            )
              return P.call(r, s), r;
          } else {
            if (c[2]) return P.apply(r, t.getElementsByTagName(e)), r;
            if ((o = c[3]) && t.getElementsByClassName)
              return P.apply(r, t.getElementsByClassName(o)), r;
          }
        if (!(_[e + " "] || (H && H.test(e)))) {
          if (((d = e), (v = t), 1 === m && (Y.test(e) || Q.test(e)))) {
            for (
              ((v = (ie.test(e) && f(t.parentNode)) || t) == t && me.scope) ||
                ((u = t.getAttribute("id"))
                  ? (u = ke.escapeSelector(u))
                  : t.setAttribute("id", (u = M))),
                a = (l = h(e)).length;
              a--;

            )
              l[a] = (u ? "#" + u : ":scope") + " " + g(l[a]);
            d = l.join(",");
          }
          try {
            return P.apply(r, v.querySelectorAll(d)), r;
          } catch (t) {
            _(e, !0);
          } finally {
            u === M && t.removeAttribute("id");
          }
        }
      }
      return k(e.replace(De, "$1"), t, r, i);
    }
    function r() {
      function e(n, r) {
        return (
          t.push(n + " ") > E.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[M] = !0), e;
    }
    function a(e) {
      var t = N.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function s(e) {
      return function (t) {
        return o(t, "input") && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        return (o(t, "input") || o(t, "button")) && t.type === e;
      };
    }
    function c(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && le(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function l(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function f(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function p(e) {
      var t,
        r = e ? e.ownerDocument || e : Le;
      return r != N && 9 === r.nodeType && r.documentElement
        ? ((L = (N = r).documentElement),
          (q = !ke.isXMLDoc(N)),
          (O = L.matches || L.webkitMatchesSelector || L.msMatchesSelector),
          L.msMatchesSelector &&
            Le != N &&
            (t = N.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", ce),
          (me.getById = a(function (e) {
            return (
              (L.appendChild(e).id = ke.expando),
              !N.getElementsByName || !N.getElementsByName(ke.expando).length
            );
          })),
          (me.disconnectedMatch = a(function (e) {
            return O.call(e, "*");
          })),
          (me.scope = a(function () {
            return N.querySelectorAll(":scope");
          })),
          (me.cssHas = a(function () {
            try {
              return N.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          me.getById
            ? ((E.filter.ID = function (e) {
                var t = e.replace(oe, se);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (E.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && q) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((E.filter.ID = function (e) {
                var t = e.replace(oe, se);
                return function (e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }),
              (E.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && q) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (E.find.TAG = function (e, t) {
            return void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (E.find.CLASS = function (e, t) {
            if (void 0 !== t.getElementsByClassName && q)
              return t.getElementsByClassName(e);
          }),
          (H = []),
          a(function (e) {
            var t;
            (L.appendChild(e).innerHTML =
              "<a id='" +
              M +
              "' href='' disabled='disabled'></a><select id='" +
              M +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                H.push("\\[" + Ae + "*(?:value|" + U + ")"),
              e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="),
              e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || H.push(":checked"),
              (t = N.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (L.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                H.push(":enabled", ":disabled"),
              (t = N.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                H.push("\\[" + Ae + "*name" + Ae + "*=" + Ae + "*(?:''|\"\")");
          }),
          me.cssHas || H.push(":has"),
          (H = H.length && new RegExp(H.join("|"))),
          (B = function (e, t) {
            if (e === t) return (D = !0), 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              r ||
              (1 &
                (r =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!me.sortDetached && t.compareDocumentPosition(e) === r)
                ? e === N || (e.ownerDocument == Le && n.contains(Le, e))
                  ? -1
                  : t === N || (t.ownerDocument == Le && n.contains(Le, t))
                  ? 1
                  : A
                  ? fe.call(A, e) - fe.call(A, t)
                  : 0
                : 4 & r
                ? -1
                : 1)
            );
          }),
          N)
        : N;
    }
    function d() {}
    function h(e, t) {
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        l = $[e + " "];
      if (l) return t ? 0 : l.slice(0);
      for (s = e, u = [], c = E.preFilter; s; ) {
        for (a in ((r && !(i = J.exec(s))) ||
          (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
        (r = !1),
        (i = Q.exec(s)) &&
          ((r = i.shift()),
          o.push({ value: r, type: i[0].replace(De, " ") }),
          (s = s.slice(r.length))),
        E.filter))
          !(i = ee[a].exec(s)) ||
            (c[a] && !(i = c[a](i))) ||
            ((r = i.shift()),
            o.push({ value: r, type: a, matches: i }),
            (s = s.slice(r.length)));
        if (!r) break;
      }
      return t ? s.length : s ? n.error(e) : $(e, u).slice(0);
    }
    function g(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function v(e, t, n) {
      var r = t.dir,
        i = t.next,
        a = i || r,
        s = n && "parentNode" === a,
        u = I++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
            return !1;
          }
        : function (t, n, c) {
            var l,
              f,
              p = [R, u];
            if (c) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || s) && e(t, n, c)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || s)
                  if (((f = t[M] || (t[M] = {})), i && o(t, i))) t = t[r] || t;
                  else {
                    if ((l = f[a]) && l[0] === R && l[1] === u)
                      return (p[2] = l[2]);
                    if (((f[a] = p), (p[2] = e(t, n, c)))) return !0;
                  }
            return !1;
          };
    }
    function m(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function y(e, t, r) {
      for (var i = 0, o = t.length; i < o; i++) n(e, t[i], r);
      return r;
    }
    function x(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
      return a;
    }
    function b(e, t, n, r, o, a) {
      return (
        r && !r[M] && (r = b(r)),
        o && !o[M] && (o = b(o, a)),
        i(function (i, a, s, u) {
          var c,
            l,
            f,
            p,
            d = [],
            h = [],
            g = a.length,
            v = i || y(t || "*", s.nodeType ? [s] : s, []),
            m = !e || (!i && t) ? v : x(v, d, e, s, u);
          if (
            (n ? n(m, (p = o || (i ? e : g || r) ? [] : a), s, u) : (p = m), r)
          )
            for (c = x(p, h), r(c, [], s, u), l = c.length; l--; )
              (f = c[l]) && (p[h[l]] = !(m[h[l]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (c = [], l = p.length; l--; )
                  (f = p[l]) && c.push((m[l] = f));
                o(null, (p = []), c, u);
              }
              for (l = p.length; l--; )
                (f = p[l]) &&
                  (c = o ? fe.call(i, f) : d[l]) > -1 &&
                  (i[c] = !(a[c] = f));
            }
          } else (p = x(p === a ? p.splice(g, p.length) : p)), o ? o(null, a, p, u) : P.apply(a, p);
        })
      );
    }
    function w(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = E.relative[e[0].type],
          a = o || E.relative[" "],
          s = o ? 1 : 0,
          u = v(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          c = v(
            function (e) {
              return fe.call(t, e) > -1;
            },
            a,
            !0
          ),
          l = [
            function (e, n, r) {
              var i =
                (!o && (r || n != j)) ||
                ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
              return (t = null), i;
            },
          ];
        s < i;
        s++
      )
        if ((n = E.relative[e[s].type])) l = [v(m(l), n)];
        else {
          if ((n = E.filter[e[s].type].apply(null, e[s].matches))[M]) {
            for (r = ++s; r < i && !E.relative[e[r].type]; r++);
            return b(
              s > 1 && m(l),
              s > 1 &&
                g(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(De, "$1"),
              n,
              s < r && w(e.slice(s, r)),
              r < i && w((e = e.slice(r))),
              r < i && g(e)
            );
          }
          l.push(n);
        }
      return m(l);
    }
    function T(e, t) {
      var n = t.length > 0,
        r = e.length > 0,
        o = function (i, o, a, s, u) {
          var c,
            l,
            f,
            d = 0,
            h = "0",
            g = i && [],
            v = [],
            m = j,
            y = i || (r && E.find.TAG("*", u)),
            b = (R += null == m ? 1 : Math.random() || 0.1),
            w = y.length;
          for (
            u && (j = o == N || o || u);
            h !== w && null != (c = y[h]);
            h++
          ) {
            if (r && c) {
              for (
                l = 0, o || c.ownerDocument == N || (p(c), (a = !q));
                (f = e[l++]);

              )
                if (f(c, o || N, a)) {
                  P.call(s, c);
                  break;
                }
              u && (R = b);
            }
            n && ((c = !f && c) && d--, i && g.push(c));
          }
          if (((d += h), n && h !== d)) {
            for (l = 0; (f = t[l++]); ) f(g, v, o, a);
            if (i) {
              if (d > 0) for (; h--; ) g[h] || v[h] || (v[h] = Se.call(s));
              v = x(v);
            }
            P.apply(s, v),
              u && !i && v.length > 0 && d + t.length > 1 && ke.uniqueSort(s);
          }
          return u && ((R = b), (j = m)), g;
        };
      return n ? i(o) : o;
    }
    function C(e, t) {
      var n,
        r = [],
        i = [],
        o = W[e + " "];
      if (!o) {
        for (t || (t = h(e)), n = t.length; n--; )
          (o = w(t[n]))[M] ? r.push(o) : i.push(o);
        (o = W(e, T(i, r))).selector = e;
      }
      return o;
    }
    function k(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        c = "function" == typeof e && e,
        l = !r && h((e = c.selector || e));
      if (((n = n || []), 1 === l.length)) {
        if (
          (o = l[0] = l[0].slice(0)).length > 2 &&
          "ID" === (a = o[0]).type &&
          9 === t.nodeType &&
          q &&
          E.relative[o[1].type]
        ) {
          if (!(t = (E.find.ID(a.matches[0].replace(oe, se), t) || [])[0]))
            return n;
          c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
        }
        for (
          i = ee.needsContext.test(e) ? 0 : o.length;
          i-- && ((a = o[i]), !E.relative[(s = a.type)]);

        )
          if (
            (u = E.find[s]) &&
            (r = u(
              a.matches[0].replace(oe, se),
              (ie.test(o[0].type) && f(t.parentNode)) || t
            ))
          ) {
            if ((o.splice(i, 1), !(e = r.length && g(o))))
              return P.apply(n, r), n;
            break;
          }
      }
      return (
        (c || C(e, l))(r, t, !q, n, !t || (ie.test(e) && f(t.parentNode)) || t),
        n
      );
    }
    var S,
      E,
      j,
      A,
      D,
      N,
      L,
      q,
      H,
      O,
      P = qe,
      M = ke.expando,
      R = 0,
      I = 0,
      F = r(),
      $ = r(),
      W = r(),
      _ = r(),
      B = function (e, t) {
        return e === t && (D = !0), 0;
      },
      U =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      z =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        Ae +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      X =
        "\\[" +
        Ae +
        "*(" +
        z +
        ")(?:" +
        Ae +
        "*([*^$|!~]?=)" +
        Ae +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        z +
        "))|)" +
        Ae +
        "*\\]",
      V =
        ":(" +
        z +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        X +
        ")*)|.*)\\)|)",
      G = new RegExp(Ae + "+", "g"),
      J = new RegExp("^" + Ae + "*," + Ae + "*"),
      Q = new RegExp("^" + Ae + "*([>+~]|" + Ae + ")" + Ae + "*"),
      Y = new RegExp(Ae + "|>"),
      K = new RegExp(V),
      Z = new RegExp("^" + z + "$"),
      ee = {
        ID: new RegExp("^#(" + z + ")"),
        CLASS: new RegExp("^\\.(" + z + ")"),
        TAG: new RegExp("^(" + z + "|[*])"),
        ATTR: new RegExp("^" + X),
        PSEUDO: new RegExp("^" + V),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            Ae +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            Ae +
            "*(?:([+-]|)" +
            Ae +
            "*(\\d+)|))" +
            Ae +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + U + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            Ae +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            Ae +
            "*((?:-\\d)?\\d*)" +
            Ae +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      te = /^(?:input|select|textarea|button)$/i,
      ne = /^h\d$/i,
      re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ie = /[+~]/,
      oe = new RegExp(
        "\\\\[\\da-fA-F]{1,6}" + Ae + "?|\\\\([^\\r\\n\\f])",
        "g"
      ),
      se = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      ce = function () {
        p();
      },
      le = v(
        function (e) {
          return !0 === e.disabled && o(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      P.apply((ae = ue.call(Le.childNodes)), Le.childNodes),
        ae[Le.childNodes.length].nodeType;
    } catch (e) {
      P = {
        apply: function (e, t) {
          qe.apply(e, ue.call(t));
        },
        call: function (e) {
          qe.apply(e, ue.call(arguments, 1));
        },
      };
    }
    for (S in ((n.matches = function (e, t) {
      return n(e, null, null, t);
    }),
    (n.matchesSelector = function (e, t) {
      if ((p(e), q && !_[t + " "] && (!H || !H.test(t))))
        try {
          var r = O.call(e, t);
          if (
            r ||
            me.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (e) {
          _(t, !0);
        }
      return n(t, N, null, [e]).length > 0;
    }),
    (n.contains = function (e, t) {
      return (e.ownerDocument || e) != N && p(e), ke.contains(e, t);
    }),
    (n.attr = function (e, t) {
      (e.ownerDocument || e) != N && p(e);
      var n = E.attrHandle[t.toLowerCase()],
        r = n && he.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }),
    (n.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (ke.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((D = !me.sortStable),
        (A = !me.sortStable && ue.call(e, 0)),
        Ee.call(e, B),
        D)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) je.call(e, n[r], 1);
      }
      return (A = null), e;
    }),
    (ke.fn.uniqueSort = function () {
      return this.pushStack(ke.uniqueSort(ue.apply(this)));
    }),
    (E = ke.expr =
      {
        cacheLength: 50,
        createPseudo: i,
        match: ee,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(oe, se)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(oe, se)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || n.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && n.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return ee.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    K.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(oe, se).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return o(e, t);
                };
          },
          CLASS: function (e) {
            var t = F[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + Ae + ")" + e + "(" + Ae + "|$)")) &&
                F(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, r) {
            return function (i) {
              var o = n.attr(i, e);
              return null == o
                ? "!=" === t
                : !t ||
                    ((o += ""),
                    "=" === t
                      ? o === r
                      : "!=" === t
                      ? o !== r
                      : "^=" === t
                      ? r && 0 === o.indexOf(r)
                      : "*=" === t
                      ? r && o.indexOf(r) > -1
                      : "$=" === t
                      ? r && o.slice(-r.length) === r
                      : "~=" === t
                      ? (" " + o.replace(G, " ") + " ").indexOf(r) > -1
                      : "|=" === t &&
                        (o === r || o.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var a = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              u = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, c) {
                  var l,
                    f,
                    p,
                    d,
                    h,
                    g = a !== s ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = u && t.nodeName.toLowerCase(),
                    y = !c && !u,
                    x = !1;
                  if (v) {
                    if (a) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); )
                          if (u ? o(p, m) : 1 === p.nodeType) return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                      for (
                        x =
                          (d =
                            (l = (f = v[M] || (v[M] = {}))[e] || [])[0] === R &&
                            l[1]) && l[2],
                          p = d && v.childNodes[d];
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          f[e] = [R, d, x];
                          break;
                        }
                    } else if (
                      (y &&
                        (x = d =
                          (l = (f = t[M] || (t[M] = {}))[e] || [])[0] === R &&
                          l[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                        (!(u ? o(p, m) : 1 === p.nodeType) ||
                          !++x ||
                          (y && ((f = p[M] || (p[M] = {}))[e] = [R, x]),
                          p !== t));

                      );
                    return (x -= i) === r || (x % r == 0 && x / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var r,
              o =
                E.pseudos[e] ||
                E.setFilters[e.toLowerCase()] ||
                n.error("unsupported pseudo: " + e);
            return o[M]
              ? o(t)
              : o.length > 1
              ? ((r = [e, e, "", t]),
                E.setFilters.hasOwnProperty(e.toLowerCase())
                  ? i(function (e, n) {
                      for (var r, i = o(e, t), a = i.length; a--; )
                        e[(r = fe.call(e, i[a]))] = !(n[r] = i[a]);
                    })
                  : function (e) {
                      return o(e, 0, r);
                    })
              : o;
          },
        },
        pseudos: {
          not: i(function (e) {
            var t = [],
              n = [],
              r = C(e.replace(De, "$1"));
            return r[M]
              ? i(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: i(function (e) {
            return function (t) {
              return n(e, t).length > 0;
            };
          }),
          contains: i(function (e) {
            return (
              (e = e.replace(oe, se)),
              function (t) {
                return (t.textContent || ke.text(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: i(function (e) {
            return (
              Z.test(e || "") || n.error("unsupported lang: " + e),
              (e = e.replace(oe, se).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = q
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === L;
          },
          focus: function (e) {
            return (
              e === t() && N.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: c(!1),
          disabled: c(!0),
          checked: function (e) {
            return (
              (o(e, "input") && !!e.checked) || (o(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !E.pseudos.empty(e);
          },
          header: function (e) {
            return ne.test(e.nodeName);
          },
          input: function (e) {
            return te.test(e.nodeName);
          },
          button: function (e) {
            return (o(e, "input") && "button" === e.type) || o(e, "button");
          },
          text: function (e) {
            var t;
            return (
              o(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: l(function () {
            return [0];
          }),
          last: l(function (e, t) {
            return [t - 1];
          }),
          eq: l(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: l(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: l(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: l(function (e, t, n) {
            var r;
            for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: l(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }),
    (E.pseudos.nth = E.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      E.pseudos[S] = s(S);
    for (S in { submit: !0, reset: !0 }) E.pseudos[S] = u(S);
    (d.prototype = E.filters = E.pseudos),
      (E.setFilters = new d()),
      (me.sortStable = M.split("").sort(B).join("") === M),
      p(),
      (me.sortDetached = a(function (e) {
        return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
      })),
      (ke.find = n),
      (ke.expr[":"] = ke.expr.pseudos),
      (ke.unique = ke.uniqueSort),
      (n.compile = C),
      (n.select = k),
      (n.setDocument = p),
      (n.tokenize = h),
      (n.escape = ke.escapeSelector),
      (n.getText = ke.text),
      (n.isXML = ke.isXMLDoc),
      (n.selectors = ke.expr),
      (n.support = ke.support),
      (n.uniqueSort = ke.uniqueSort);
  })();
  var He = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && ke(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    Oe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Pe = ke.expr.match.needsContext,
    Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (ke.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? ke.find.matchesSelector(r, e)
          ? [r]
          : []
        : ke.find.matches(
            e,
            ke.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    ke.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            ke(e).filter(function () {
              for (t = 0; t < r; t++) if (ke.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) ke.find(e, i[t], n);
        return r > 1 ? ke.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(
          this,
          "string" == typeof e && Pe.test(e) ? ke(e) : e || [],
          !1
        ).length;
      },
    });
  var Re,
    Ie = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((ke.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || Re), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : Ie.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof ke ? t[0] : t),
          ke.merge(
            this,
            ke.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : be, !0)
          ),
          Me.test(r[1]) && ke.isPlainObject(t))
        )
          for (r in t) ye(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = be.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : ye(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(ke)
      : ke.makeArray(e, this);
  }).prototype = ke.fn),
    (Re = ke(be));
  var Fe = /^(?:parents|prev(?:Until|All))/,
    $e = { children: !0, contents: !0, next: !0, prev: !0 };
  ke.fn.extend({
    has: function (e) {
      var t = ke(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ke.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ke(e);
      if (!Pe.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && ke.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? ke.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? fe.call(ke(e), this[0])
          : fe.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(ke.uniqueSort(ke.merge(this.get(), ke(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ke.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return He(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return He(e, "parentNode", n);
        },
        next: function (e) {
          return u(e, "nextSibling");
        },
        prev: function (e) {
          return u(e, "previousSibling");
        },
        nextAll: function (e) {
          return He(e, "nextSibling");
        },
        prevAll: function (e) {
          return He(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return He(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return He(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Oe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Oe(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && se(e.contentDocument)
            ? e.contentDocument
            : (o(e, "template") && (e = e.content || e),
              ke.merge([], e.childNodes));
        },
      },
      function (e, t) {
        ke.fn[e] = function (n, r) {
          var i = ke.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = ke.filter(r, i)),
            this.length > 1 &&
              ($e[e] || ke.uniqueSort(i), Fe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var We = /[^\x20\t\r\n\f]+/g;
  (ke.Callbacks = function (e) {
    e = "string" == typeof e ? c(e) : ke.extend({}, e);
    var t,
      n,
      i,
      o,
      a = [],
      s = [],
      u = -1,
      l = function () {
        for (o = o || e.once, i = t = !0; s.length; u = -1)
          for (n = s.shift(); ++u < a.length; )
            !1 === a[u].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((u = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (a = n ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (n && !t && ((u = a.length - 1), s.push(n)),
              (function t(n) {
                ke.each(n, function (n, i) {
                  ye(i)
                    ? (e.unique && f.has(i)) || a.push(i)
                    : i && i.length && "string" !== r(i) && t(i);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            ke.each(arguments, function (e, t) {
              for (var n; (n = ke.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? ke.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (o = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), n || t || (a = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return f;
  }),
    ke.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              ke.Callbacks("memory"),
              ke.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              ke.Callbacks("once memory"),
              ke.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              ke.Callbacks("once memory"),
              ke.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return ke
                .Deferred(function (t) {
                  ke.each(n, function (n, r) {
                    var i = ye(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && ye(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              function o(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < a)) {
                        if ((e = r.apply(s, u)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          ye(c)
                            ? i
                              ? c.call(e, o(a, n, l, i), o(a, n, f, i))
                              : (a++,
                                c.call(
                                  e,
                                  o(a, n, l, i),
                                  o(a, n, f, i),
                                  o(a, n, l, n.notifyWith)
                                ))
                            : (r !== l && ((s = void 0), (u = [e])),
                              (i || n.resolveWith)(s, u));
                      }
                    },
                    p = i
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            ke.Deferred.exceptionHook &&
                              ke.Deferred.exceptionHook(e, p.error),
                              t + 1 >= a &&
                                (r !== f && ((s = void 0), (u = [e])),
                                n.rejectWith(s, u));
                          }
                        };
                  t
                    ? p()
                    : (ke.Deferred.getErrorHook
                        ? (p.error = ke.Deferred.getErrorHook())
                        : ke.Deferred.getStackHook &&
                          (p.error = ke.Deferred.getStackHook()),
                      e.setTimeout(p));
                };
              }
              var a = 0;
              return ke
                .Deferred(function (e) {
                  n[0][3].add(o(0, e, ye(i) ? i : l, e.notifyWith)),
                    n[1][3].add(o(0, e, ye(t) ? t : l)),
                    n[2][3].add(o(0, e, ye(r) ? r : f));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ke.extend(e, i) : i;
            },
          },
          o = {};
        return (
          ke.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = ue.call(arguments),
          o = ke.Deferred(),
          a = function (e) {
            return function (n) {
              (r[e] = this),
                (i[e] = arguments.length > 1 ? ue.call(arguments) : n),
                --t || o.resolveWith(r, i);
            };
          };
        if (
          t <= 1 &&
          (p(e, o.done(a(n)).resolve, o.reject, !t),
          "pending" === o.state() || ye(i[n] && i[n].then))
        )
          return o.then();
        for (; n--; ) p(i[n], a(n), o.reject);
        return o.promise();
      },
    });
  var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (ke.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      _e.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (ke.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Be = ke.Deferred();
  (ke.fn.ready = function (e) {
    return (
      Be.then(e).catch(function (e) {
        ke.readyException(e);
      }),
      this
    );
  }),
    ke.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --ke.readyWait : ke.isReady) ||
          ((ke.isReady = !0),
          (!0 !== e && --ke.readyWait > 0) || Be.resolveWith(be, [ke]));
      },
    }),
    (ke.ready.then = Be.then),
    "complete" === be.readyState ||
    ("loading" !== be.readyState && !be.documentElement.doScroll)
      ? e.setTimeout(ke.ready)
      : (be.addEventListener("DOMContentLoaded", d),
        e.addEventListener("load", d));
  var Ue = function (e, t, n, i, o, a, s) {
      var u = 0,
        c = e.length,
        l = null == n;
      if ("object" === r(n))
        for (u in ((o = !0), n)) Ue(e, t, u, n[u], !0, a, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        ye(i) || (s = !0),
        l &&
          (s
            ? (t.call(e, i), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(ke(e), n);
              }))),
        t)
      )
        for (; u < c; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
      return o ? e : l ? t.call(e) : c ? t(e[0], n) : a;
    },
    ze = /^-ms-/,
    Xe = /-([a-z])/g,
    Ve = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (v.uid = 1),
    (v.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Ve(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[g(t)] = n;
        else for (r in t) i[g(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][g(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(g)
              : (t = g(t)) in r
              ? [t]
              : t.match(We) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || ke.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ke.isEmptyObject(t);
      },
    });
  var Ge = new v(),
    Je = new v(),
    Qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ye = /[A-Z]/g;
  ke.extend({
    hasData: function (e) {
      return Je.hasData(e) || Ge.hasData(e);
    },
    data: function (e, t, n) {
      return Je.access(e, t, n);
    },
    removeData: function (e, t) {
      Je.remove(e, t);
    },
    _data: function (e, t, n) {
      return Ge.access(e, t, n);
    },
    _removeData: function (e, t) {
      Ge.remove(e, t);
    },
  }),
    ke.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Je.get(o)), 1 === o.nodeType && !Ge.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = g(r.slice(5))), y(o, r, i[r]));
            Ge.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Je.set(this, e);
            })
          : Ue(
              this,
              function (t) {
                var n;
                if (o && void 0 === t)
                  return void 0 !== (n = Je.get(o, e)) ||
                    void 0 !== (n = y(o, e))
                    ? n
                    : void 0;
                this.each(function () {
                  Je.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Je.remove(this, e);
        });
      },
    }),
    ke.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Ge.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Ge.access(e, t, ke.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ke.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ke._queueHooks(e, t),
          a = function () {
            ke.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Ge.get(e, n) ||
          Ge.access(e, n, {
            empty: ke.Callbacks("once memory").add(function () {
              Ge.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    ke.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? ke.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = ke.queue(this, e, t);
                ke._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && ke.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ke.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = ke.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = Ge.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var Ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ze = new RegExp("^(?:([+-])=|)(" + Ke + ")([a-z%]*)$", "i"),
    et = ["Top", "Right", "Bottom", "Left"],
    tt = be.documentElement,
    nt = function (e) {
      return ke.contains(e.ownerDocument, e);
    },
    rt = { composed: !0 };
  tt.getRootNode &&
    (nt = function (e) {
      return (
        ke.contains(e.ownerDocument, e) || e.getRootNode(rt) === e.ownerDocument
      );
    });
  var it = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && nt(e) && "none" === ke.css(e, "display"))
      );
    },
    ot = {};
  ke.fn.extend({
    show: function () {
      return w(this, !0);
    },
    hide: function () {
      return w(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            it(this) ? ke(this).show() : ke(this).hide();
          });
    },
  });
  var at,
    st,
    ut = /^(?:checkbox|radio)$/i,
    ct = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    lt = /^$|^module$|\/(?:java|ecma)script/i;
  (at = be.createDocumentFragment().appendChild(be.createElement("div"))),
    (st = be.createElement("input")).setAttribute("type", "radio"),
    st.setAttribute("checked", "checked"),
    st.setAttribute("name", "t"),
    at.appendChild(st),
    (me.checkClone = at.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (at.innerHTML = "<textarea>x</textarea>"),
    (me.noCloneChecked = !!at.cloneNode(!0).lastChild.defaultValue),
    (at.innerHTML = "<option></option>"),
    (me.option = !!at.lastChild);
  var ft = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  (ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead),
    (ft.th = ft.td),
    me.option ||
      (ft.optgroup = ft.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var pt = /<|&#?\w+;/,
    dt = /^([^.]*)(?:\.(.+)|)/;
  (ke.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        p,
        d,
        h,
        g,
        v = Ge.get(e);
      if (Ve(e))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && ke.find.matchesSelector(tt, i),
            n.guid || (n.guid = ke.guid++),
            (u = v.events) || (u = v.events = Object.create(null)),
            (a = v.handle) ||
              (a = v.handle =
                function (t) {
                  return void 0 !== ke && ke.event.triggered !== t.type
                    ? ke.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(We) || [""]).length;
          c--;

        )
          (d = g = (s = dt.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = ke.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = ke.event.special[d] || {}),
              (l = ke.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && ke.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
              (ke.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        p,
        d,
        h,
        g,
        v = Ge.hasData(e) && Ge.get(e);
      if (v && (u = v.events)) {
        for (c = (t = (t || "").match(We) || [""]).length; c--; )
          if (
            ((d = g = (s = dt.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = ke.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (l = p[o]),
                (!i && g !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (s && !s.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (p.splice(o, 1),
                  l.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, l));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                ke.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) ke.event.remove(e, d + t[c], n, r, !0);
        ke.isEmptyObject(u) && Ge.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ke.event.fix(e),
        c = (Ge.get(this, "events") || Object.create(null))[u.type] || [],
        l = ke.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, u))
      ) {
        for (
          a = ke.event.handlers.call(this, u, c), t = 0;
          (i = a[t++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (ke.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        c = e.target;
      if (u && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? ke(i, this).index(c) > -1
                  : ke.find(i, this, null, [c]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: c, handlers: o });
          }
      return (
        (c = this), u < t.length && s.push({ elem: c, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(ke.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ye(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[ke.expando] ? e : new ke.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            ut.test(t.type) && t.click && o(t, "input") && A(t, "click", !0), !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            ut.test(t.type) && t.click && o(t, "input") && A(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (ut.test(t.type) &&
              t.click &&
              o(t, "input") &&
              Ge.get(t, "click")) ||
            o(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (ke.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (ke.Event = function (e, t) {
      if (!(this instanceof ke.Event)) return new ke.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? S
              : E),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && ke.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[ke.expando] = !0);
    }),
    (ke.Event.prototype = {
      constructor: ke.Event,
      isDefaultPrevented: E,
      isPropagationStopped: E,
      isImmediatePropagationStopped: E,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = S),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = S),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = S),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ke.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      ke.event.addProp
    ),
    ke.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      function n(e) {
        if (be.documentMode) {
          var n = Ge.get(this, "handle"),
            r = ke.event.fix(e);
          (r.type = "focusin" === e.type ? "focus" : "blur"),
            (r.isSimulated = !0),
            n(e),
            r.target === r.currentTarget && n(r);
        } else ke.event.simulate(t, e.target, ke.event.fix(e));
      }
      (ke.event.special[e] = {
        setup: function () {
          var r;
          if ((A(this, e, !0), !be.documentMode)) return !1;
          (r = Ge.get(this, t)) || this.addEventListener(t, n),
            Ge.set(this, t, (r || 0) + 1);
        },
        trigger: function () {
          return A(this, e), !0;
        },
        teardown: function () {
          var e;
          if (!be.documentMode) return !1;
          (e = Ge.get(this, t) - 1)
            ? Ge.set(this, t, e)
            : (this.removeEventListener(t, n), Ge.remove(this, t));
        },
        _default: function (t) {
          return Ge.get(t.target, e);
        },
        delegateType: t,
      }),
        (ke.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              i = be.documentMode ? this : r,
              o = Ge.get(i, t);
            o ||
              (be.documentMode
                ? this.addEventListener(t, n)
                : r.addEventListener(e, n, !0)),
              Ge.set(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              i = be.documentMode ? this : r,
              o = Ge.get(i, t) - 1;
            o
              ? Ge.set(i, t, o)
              : (be.documentMode
                  ? this.removeEventListener(t, n)
                  : r.removeEventListener(e, n, !0),
                Ge.remove(i, t));
          },
        });
    }),
    ke.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        ke.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || ke.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    ke.fn.extend({
      on: function (e, t, n, r) {
        return j(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return j(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            ke(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = E),
          this.each(function () {
            ke.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ht = /<script|<style|<link/i,
    gt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    vt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  ke.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = nt(e);
      if (
        !(
          me.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          ke.isXMLDoc(e)
        )
      )
        for (a = T(s), r = 0, i = (o = T(e)).length; r < i; r++) H(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || T(e), a = a || T(s), r = 0, i = o.length; r < i; r++)
            q(o[r], a[r]);
        else q(e, s);
      return (a = T(s, "script")).length > 0 && C(a, !u && T(e, "script")), s;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ke.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Ve(n)) {
          if ((t = n[Ge.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? ke.event.remove(n, r) : ke.removeEvent(n, r, t.handle);
            n[Ge.expando] = void 0;
          }
          n[Je.expando] && (n[Je.expando] = void 0);
        }
    },
  }),
    ke.fn.extend({
      detach: function (e) {
        return P(this, e, !0);
      },
      remove: function (e) {
        return P(this, e);
      },
      text: function (e) {
        return Ue(
          this,
          function (e) {
            return void 0 === e
              ? ke.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return O(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            D(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return O(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = D(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (ke.cleanData(T(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ke.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Ue(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ht.test(e) &&
              !ft[(ct.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = ke.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ke.cleanData(T(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return O(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            ke.inArray(this, e) < 0 &&
              (ke.cleanData(T(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    ke.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        ke.fn[e] = function (e) {
          for (var n, r = [], i = ke(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              ke(i[a])[t](n),
              le.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var mt = new RegExp("^(" + Ke + ")(?!px)[a-z%]+$", "i"),
    yt = /^--/,
    xt = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    bt = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    wt = new RegExp(et.join("|"), "i");
  !(function () {
    function t() {
      if (l) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          tt.appendChild(c).appendChild(l);
        var t = e.getComputedStyle(l);
        (r = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (l.style.right = "60%"),
          (a = 36 === n(t.right)),
          (i = 36 === n(t.width)),
          (l.style.position = "absolute"),
          (o = 12 === n(l.offsetWidth / 3)),
          tt.removeChild(c),
          (l = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      i,
      o,
      a,
      s,
      u,
      c = be.createElement("div"),
      l = be.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (me.clearCloneStyle = "content-box" === l.style.backgroundClip),
      ke.extend(me, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, r, i;
          return (
            null == s &&
              ((t = be.createElement("table")),
              (n = be.createElement("tr")),
              (r = be.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "box-sizing:content-box;border:1px solid"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              tt.appendChild(t).appendChild(n).appendChild(r),
              (i = e.getComputedStyle(n)),
              (s =
                parseInt(i.height, 10) +
                  parseInt(i.borderTopWidth, 10) +
                  parseInt(i.borderBottomWidth, 10) ===
                n.offsetHeight),
              tt.removeChild(t)),
            s
          );
        },
      }));
  })();
  var Tt = ["Webkit", "Moz", "ms"],
    Ct = be.createElement("div").style,
    kt = {},
    St = /^(none|table(?!-c[ea]).+)/,
    Et = { position: "absolute", visibility: "hidden", display: "block" },
    jt = { letterSpacing: "0", fontWeight: "400" };
  ke.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = M(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = g(t),
          u = yt.test(t),
          c = e.style;
        if (
          (u || (t = F(s)),
          (a = ke.cssHooks[t] || ke.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
        "string" === (o = typeof n) &&
          (i = Ze.exec(n)) &&
          i[1] &&
          ((n = x(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (ke.cssNumber[s] ? "" : "px")),
            me.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = g(t);
      return (
        yt.test(t) || (t = F(s)),
        (a = ke.cssHooks[t] || ke.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = M(e, t, r)),
        "normal" === i && t in jt && (i = jt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    ke.each(["height", "width"], function (e, t) {
      ke.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !St.test(ke.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? _(e, t, r)
              : bt(e, Et, function () {
                  return _(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = xt(e),
            a = !me.scrollboxSize() && "absolute" === o.position,
            s = (a || r) && "border-box" === ke.css(e, "boxSizing", !1, o),
            u = r ? W(e, t, r, s, o) : 0;
          return (
            s &&
              a &&
              (u -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  W(e, t, "border", !1, o) -
                  0.5
              )),
            u &&
              (i = Ze.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = ke.css(e, t))),
            $(e, n, u)
          );
        },
      };
    }),
    (ke.cssHooks.marginLeft = R(me.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(M(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              bt(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    ke.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (ke.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + et[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (ke.cssHooks[e + t].set = $);
    }),
    ke.fn.extend({
      css: function (e, t) {
        return Ue(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = xt(e), i = t.length; a < i; a++)
                o[t[a]] = ke.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? ke.style(e, t, n) : ke.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (ke.Tween = B),
    (B.prototype = {
      constructor: B,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || ke.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (ke.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = B.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                ke.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : B.propHooks._default.set(this),
          this
        );
      },
    }),
    (B.prototype.init.prototype = B.prototype),
    (B.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = ke.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          ke.fx.step[e.prop]
            ? ke.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!ke.cssHooks[e.prop] && null == e.elem.style[F(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : ke.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (B.propHooks.scrollTop = B.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (ke.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ke.fx = B.prototype.init),
    (ke.fx.step = {});
  var At,
    Dt,
    Nt = /^(?:toggle|show|hide)$/,
    Lt = /queueHooks$/;
  (ke.Animation = ke.extend(Q, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return x(n.elem, e, Ze.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      ye(e) ? ((t = e), (e = ["*"])) : (e = e.match(We));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (Q.tweeners[n] = Q.tweeners[n] || []),
          Q.tweeners[n].unshift(t);
    },
    prefilters: [G],
    prefilter: function (e, t) {
      t ? Q.prefilters.unshift(e) : Q.prefilters.push(e);
    },
  })),
    (ke.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ke.extend({}, e)
          : {
              complete: n || (!n && t) || (ye(e) && e),
              duration: e,
              easing: (n && t) || (t && !ye(t) && t),
            };
      return (
        ke.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in ke.fx.speeds
              ? (r.duration = ke.fx.speeds[r.duration])
              : (r.duration = ke.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          ye(r.old) && r.old.call(this), r.queue && ke.dequeue(this, r.queue);
        }),
        r
      );
    }),
    ke.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(it)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = ke.isEmptyObject(e),
          o = ke.speed(t, n, r),
          a = function () {
            var t = Q(this, ke.extend({}, e), o);
            (i || Ge.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = ke.timers,
              a = Ge.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && Lt.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || ke.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Ge.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = ke.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                ke.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    ke.each(["toggle", "show", "hide"], function (e, t) {
      var n = ke.fn[t];
      ke.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(X(t, !0), e, r, i);
      };
    }),
    ke.each(
      {
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        ke.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (ke.timers = []),
    (ke.fx.tick = function () {
      var e,
        t = 0,
        n = ke.timers;
      for (At = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || ke.fx.stop(), (At = void 0);
    }),
    (ke.fx.timer = function (e) {
      ke.timers.push(e), ke.fx.start();
    }),
    (ke.fx.interval = 13),
    (ke.fx.start = function () {
      Dt || ((Dt = !0), U());
    }),
    (ke.fx.stop = function () {
      Dt = null;
    }),
    (ke.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ke.fn.delay = function (t, n) {
      return (
        (t = (ke.fx && ke.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = be.createElement("input"),
        t = be.createElement("select").appendChild(be.createElement("option"));
      (e.type = "checkbox"),
        (me.checkOn = "" !== e.value),
        (me.optSelected = t.selected),
        ((e = be.createElement("input")).value = "t"),
        (e.type = "radio"),
        (me.radioValue = "t" === e.value);
    })();
  var qt,
    Ht = ke.expr.attrHandle;
  ke.fn.extend({
    attr: function (e, t) {
      return Ue(this, ke.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ke.removeAttr(this, e);
      });
    },
  }),
    ke.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? ke.prop(e, t, n)
            : ((1 === o && ke.isXMLDoc(e)) ||
                (i =
                  ke.attrHooks[t.toLowerCase()] ||
                  (ke.expr.match.bool.test(t) ? qt : void 0)),
              void 0 !== n
                ? null === n
                  ? void ke.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = ke.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!me.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(We);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (qt = {
      set: function (e, t, n) {
        return !1 === t ? ke.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    ke.each(ke.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Ht[t] || ke.find.attr;
      Ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = Ht[a]),
            (Ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (Ht[a] = o)),
          i
        );
      };
    });
  var Ot = /^(?:input|select|textarea|button)$/i,
    Pt = /^(?:a|area)$/i;
  ke.fn.extend({
    prop: function (e, t) {
      return Ue(this, ke.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ke.propFix[e] || e];
      });
    },
  }),
    ke.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ke.isXMLDoc(e)) ||
              ((t = ke.propFix[t] || t), (i = ke.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ke.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Ot.test(e.nodeName) || (Pt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    me.optSelected ||
      (ke.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    ke.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ke.propFix[this.toLowerCase()] = this;
      }
    ),
    ke.fn.extend({
      addClass: function (e) {
        var t, n, r, i, o, a;
        return ye(e)
          ? this.each(function (t) {
              ke(this).addClass(e.call(this, t, K(this)));
            })
          : (t = Z(e)).length
          ? this.each(function () {
              if (
                ((r = K(this)), (n = 1 === this.nodeType && " " + Y(r) + " "))
              ) {
                for (o = 0; o < t.length; o++)
                  (i = t[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = Y(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (e) {
        var t, n, r, i, o, a;
        return ye(e)
          ? this.each(function (t) {
              ke(this).removeClass(e.call(this, t, K(this)));
            })
          : arguments.length
          ? (t = Z(e)).length
            ? this.each(function () {
                if (
                  ((r = K(this)), (n = 1 === this.nodeType && " " + Y(r) + " "))
                ) {
                  for (o = 0; o < t.length; o++)
                    for (i = t[o]; n.indexOf(" " + i + " ") > -1; )
                      n = n.replace(" " + i + " ", " ");
                  (a = Y(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          r,
          i,
          o,
          a = typeof e,
          s = "string" === a || Array.isArray(e);
        return ye(e)
          ? this.each(function (n) {
              ke(this).toggleClass(e.call(this, n, K(this), t), t);
            })
          : "boolean" == typeof t && s
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = Z(e)),
            this.each(function () {
              if (s)
                for (o = ke(this), i = 0; i < n.length; i++)
                  (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== e && "boolean" !== a) ||
                  ((r = K(this)) && Ge.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === e ? "" : Ge.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && (" " + Y(K(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var Mt = /\r/g;
  ke.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = ye(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, ke(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = ke.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                ke.valHooks[this.type] ||
                ke.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = ke.valHooks[i.type] || ke.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(Mt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    ke.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ke.find.attr(e, "value");
            return null != t ? t : Y(ke.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              u = s ? null : [],
              c = s ? a + 1 : i.length;
            for (r = a < 0 ? c : s ? a : 0; r < c; r++)
              if (
                ((n = i[r]).selected || r === a) &&
                !n.disabled &&
                (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
              ) {
                if (((t = ke(n).val()), s)) return t;
                u.push(t);
              }
            return u;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = ke.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                ke.inArray(ke.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    ke.each(["radio", "checkbox"], function () {
      (ke.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = ke.inArray(ke(e).val(), t) > -1);
        },
      }),
        me.checkOn ||
          (ke.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Rt = e.location,
    It = { guid: Date.now() },
    Ft = /\?/;
  ke.parseXML = function (t) {
    var n, r;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {}
    return (
      (r = n && n.getElementsByTagName("parsererror")[0]),
      (n && !r) ||
        ke.error(
          "Invalid XML: " +
            (r
              ? ke
                  .map(r.childNodes, function (e) {
                    return e.textContent;
                  })
                  .join("\n")
              : t)
        ),
      n
    );
  };
  var $t = /^(?:focusinfocus|focusoutblur)$/,
    Wt = function (e) {
      e.stopPropagation();
    };
  ke.extend(ke.event, {
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        p,
        d = [r || be],
        h = he.call(t, "type") ? t.type : t,
        g = he.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = p = s = r = r || be),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !$t.test(h + ke.event.triggered) &&
          (h.indexOf(".") > -1 &&
            ((g = h.split(".")), (h = g.shift()), g.sort()),
          (c = h.indexOf(":") < 0 && "on" + h),
          ((t = t[ke.expando]
            ? t
            : new ke.Event(h, "object" == typeof t && t)).isTrigger = i
            ? 2
            : 3),
          (t.namespace = g.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : ke.makeArray(n, [t])),
          (f = ke.event.special[h] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !xe(r)) {
          for (
            u = f.delegateType || h, $t.test(u + h) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (s = a);
          s === (r.ownerDocument || be) &&
            d.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
          (p = a),
            (t.type = o > 1 ? u : f.bindType || h),
            (l =
              (Ge.get(a, "events") || Object.create(null))[t.type] &&
              Ge.get(a, "handle")) && l.apply(a, n),
            (l = c && a[c]) &&
              l.apply &&
              Ve(a) &&
              ((t.result = l.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          i ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(d.pop(), n)) ||
            !Ve(r) ||
            (c &&
              ye(r[h]) &&
              !xe(r) &&
              ((s = r[c]) && (r[c] = null),
              (ke.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, Wt),
              r[h](),
              t.isPropagationStopped() && p.removeEventListener(h, Wt),
              (ke.event.triggered = void 0),
              s && (r[c] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = ke.extend(new ke.Event(), n, { type: e, isSimulated: !0 });
      ke.event.trigger(r, null, t);
    },
  }),
    ke.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ke.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ke.event.trigger(e, t, n, !0);
      },
    });
  var _t = /\[\]$/,
    Bt = /\r?\n/g,
    Ut = /^(?:submit|button|image|reset|file)$/i,
    zt = /^(?:input|select|textarea|keygen)/i;
  (ke.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = ye(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !ke.isPlainObject(e)))
      ke.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) ee(n, e[n], t, i);
    return r.join("&");
  }),
    ke.fn.extend({
      serialize: function () {
        return ke.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ke.prop(this, "elements");
          return e ? ke.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !ke(this).is(":disabled") &&
              zt.test(this.nodeName) &&
              !Ut.test(e) &&
              (this.checked || !ut.test(e))
            );
          })
          .map(function (e, t) {
            var n = ke(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? ke.map(n, function (e) {
                  return { name: t.name, value: e.replace(Bt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Bt, "\r\n") };
          })
          .get();
      },
    });
  var Xt = /%20/g,
    Vt = /#.*$/,
    Gt = /([?&])_=[^&]*/,
    Jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Yt = /^(?:GET|HEAD)$/,
    Kt = /^\/\//,
    Zt = {},
    en = {},
    tn = "*/".concat("*"),
    nn = be.createElement("a");
  (nn.href = Rt.href),
    ke.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Rt.href,
        type: "GET",
        isLocal: Qt.test(Rt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": tn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": ke.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? re(re(e, ke.ajaxSettings), t) : re(ke.ajaxSettings, e);
      },
      ajaxPrefilter: te(Zt),
      ajaxTransport: te(en),
      ajax: function (t, n) {
        function r(t, n, r, s) {
          var c,
            p,
            d,
            b,
            w,
            T = n;
          l ||
            ((l = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (C.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            r && (b = ie(h, C, r)),
            !c &&
              ke.inArray("script", h.dataTypes) > -1 &&
              ke.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (b = oe(h, b, C, c)),
            c
              ? (h.ifModified &&
                  ((w = C.getResponseHeader("Last-Modified")) &&
                    (ke.lastModified[o] = w),
                  (w = C.getResponseHeader("etag")) && (ke.etag[o] = w)),
                204 === t || "HEAD" === h.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = b.state), (p = b.data), (c = !(d = b.error))))
              : ((d = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || T) + ""),
            c ? m.resolveWith(g, [p, T, C]) : m.rejectWith(g, [C, T, d]),
            C.statusCode(x),
            (x = void 0),
            f && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : d]),
            y.fireWith(g, [C, T]),
            f &&
              (v.trigger("ajaxComplete", [C, h]),
              --ke.active || ke.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          p,
          d,
          h = ke.ajaxSetup({}, n),
          g = h.context || h,
          v = h.context && (g.nodeType || g.jquery) ? ke(g) : ke.event,
          m = ke.Deferred(),
          y = ke.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          w = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (l) {
                if (!s)
                  for (s = {}; (t = Jt.exec(a)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return l ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == l &&
                  ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == l && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (l) C.always(e[C.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          (m.promise(C),
          (h.url = ((t || h.url || Rt.href) + "").replace(
            Kt,
            Rt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(We) || [""]),
          null == h.crossDomain)
        ) {
          c = be.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                nn.protocol + "//" + nn.host != c.protocol + "//" + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = ke.param(h.data, h.traditional)),
          ne(Zt, h, n, C),
          l)
        )
          return C;
        for (p in ((f = ke.event && h.global) &&
          0 == ke.active++ &&
          ke.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Yt.test(h.type)),
        (o = h.url.replace(Vt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Xt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (Ft.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Gt, "$1")),
              (d = (Ft.test(o) ? "&" : "?") + "_=" + It.guid++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (ke.lastModified[o] &&
            C.setRequestHeader("If-Modified-Since", ke.lastModified[o]),
          ke.etag[o] && C.setRequestHeader("If-None-Match", ke.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", h.contentType),
        C.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + tn + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          C.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || l))
          return C.abort();
        if (
          ((T = "abort"),
          y.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (i = ne(en, h, n, C)))
        ) {
          if (((C.readyState = 1), f && v.trigger("ajaxSend", [C, h]), l))
            return C;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (l = !1), i.send(b, r);
          } catch (e) {
            if (l) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return C;
      },
      getJSON: function (e, t, n) {
        return ke.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ke.get(e, void 0, t, "script");
      },
    }),
    ke.each(["get", "post"], function (e, t) {
      ke[t] = function (e, n, r, i) {
        return (
          ye(n) && ((i = i || r), (r = n), (n = void 0)),
          ke.ajax(
            ke.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              ke.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    ke.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (ke._evalUrl = function (e, t, n) {
      return ke.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          ke.globalEval(e, t, n);
        },
      });
    }),
    ke.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (ye(e) && (e = e.call(this[0])),
            (t = ke(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return ye(e)
          ? this.each(function (t) {
              ke(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = ke(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ye(e);
        return this.each(function (n) {
          ke(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              ke(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (ke.expr.pseudos.hidden = function (e) {
      return !ke.expr.pseudos.visible(e);
    }),
    (ke.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (ke.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var rn = { 0: 200, 1223: 204 },
    on = ke.ajaxSettings.xhr();
  (me.cors = !!on && "withCredentials" in on),
    (me.ajax = on = !!on),
    ke.ajaxTransport(function (t) {
      var n, r;
      if (me.cors || (on && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        rn[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    ke.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    ke.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return ke.globalEval(e), e;
        },
      },
    }),
    ke.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    ke.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (r, i) {
            (t = ke("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              be.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var an,
    sn = [],
    un = /(=)\?(?=&|$)|\?\?/;
  ke.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = sn.pop() || ke.expando + "_" + It.guid++;
      return (this[e] = !0), e;
    },
  }),
    ke.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (un.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              un.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(un, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || ke.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? ke(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), sn.push(i)),
              a && ye(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (me.createHTMLDocument =
      (((an = be.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === an.childNodes.length)),
    (ke.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (me.createHTMLDocument
              ? (((r = (t =
                  be.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = be.location.href),
                t.head.appendChild(r))
              : (t = be)),
          (o = !n && []),
          (i = Me.exec(e))
            ? [t.createElement(i[1])]
            : ((i = k([e], t, o)),
              o && o.length && ke(o).remove(),
              ke.merge([], i.childNodes)));
      var r, i, o;
    }),
    (ke.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = Y(e.slice(s))), (e = e.slice(0, s))),
        ye(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          ke
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? ke("<div>").append(ke.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (ke.expr.pseudos.animated = function (e) {
      return ke.grep(ke.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (ke.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c = ke.css(e, "position"),
          l = ke(e),
          f = {};
        "static" === c && (e.style.position = "relative"),
          (s = l.offset()),
          (o = ke.css(e, "top")),
          (u = ke.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1
            ? ((a = (r = l.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          ye(t) && (t = t.call(e, n, ke.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : l.css(f);
      },
    }),
    ke.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                ke.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === ke.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === ke.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = ke(e).offset()).top += ke.css(e, "borderTopWidth", !0)),
              (i.left += ke.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - ke.css(r, "marginTop", !0),
            left: t.left - i.left - ke.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === ke.css(e, "position");

          )
            e = e.offsetParent;
          return e || tt;
        });
      },
    }),
    ke.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        ke.fn[e] = function (r) {
          return Ue(
            this,
            function (e, r, i) {
              var o;
              if (
                (xe(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    ke.each(["top", "left"], function (e, t) {
      ke.cssHooks[t] = R(me.pixelPosition, function (e, n) {
        if (n)
          return (n = M(e, t)), mt.test(n) ? ke(e).position()[t] + "px" : n;
      });
    }),
    ke.each({ Height: "height", Width: "width" }, function (e, t) {
      ke.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          ke.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return Ue(
              this,
              function (t, n, i) {
                var o;
                return xe(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? ke.css(t, n, s)
                  : ke.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    ke.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ke.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ke.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    ke.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        ke.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var cn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (ke.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), ye(e)))
      return (
        (r = ue.call(arguments, 2)),
        (i = function () {
          return e.apply(t || this, r.concat(ue.call(arguments)));
        }),
        (i.guid = e.guid = e.guid || ke.guid++),
        i
      );
  }),
    (ke.holdReady = function (e) {
      e ? ke.readyWait++ : ke.ready(!0);
    }),
    (ke.isArray = Array.isArray),
    (ke.parseJSON = JSON.parse),
    (ke.nodeName = o),
    (ke.isFunction = ye),
    (ke.isWindow = xe),
    (ke.camelCase = g),
    (ke.type = r),
    (ke.now = Date.now),
    (ke.isNumeric = function (e) {
      var t = ke.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (ke.trim = function (e) {
      return null == e ? "" : (e + "").replace(cn, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ke;
      });
  var ln = e.jQuery,
    fn = e.$;
  return (
    (ke.noConflict = function (t) {
      return (
        e.$ === ke && (e.$ = fn), t && e.jQuery === ke && (e.jQuery = ln), ke
      );
    }),
    void 0 === t && (e.jQuery = e.$ = ke),
    ke
  );
}),
  (function (e, t) {
    e.viewloader = t({}, e.jQuery || e.Zepto || e.$);
  })(this, function (e, t) {
    "use strict";
    const n = function (e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    };
    return (
      (e.execute = function (e, r) {
        (r ? r.find("[data-view]") : t("[data-view]")).each(function (r, i) {
          const o = t(i);
          o.data("view")
            .split(" ")
            .forEach((t) => {
              (t = n(t)) && e[t] && new e[t](o, i);
            });
        });
      }),
      e
    );
  }),
  (window.Market = {
    DOMUtils: {},
    Helpers: {},
    SpecialEvents: {},
    State: {},
    Validations: {},
  }),
  (window.Views = {}),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(jQuery);
  })(function (e) {
    function t(e) {
      return s.raw ? e : encodeURIComponent(e);
    }
    function n(e) {
      return s.raw ? e : decodeURIComponent(e);
    }
    function r(e) {
      return t(s.json ? JSON.stringify(e) : String(e));
    }
    function i(e) {
      0 === e.indexOf('"') &&
        (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        return (
          (e = decodeURIComponent(e.replace(a, " "))),
          s.json ? JSON.parse(e) : e
        );
      } catch (e) {}
    }
    function o(t, n) {
      var r = s.raw ? t : i(t);
      return e.isFunction(n) ? n(r) : r;
    }
    var a = /\+/g,
      s = (e.cookie = function (i, a, u) {
        if (void 0 !== a && !e.isFunction(a)) {
          if ("number" == typeof (u = e.extend({}, s.defaults, u)).expires) {
            var c = u.expires,
              l = (u.expires = new Date());
            l.setTime(+l + 864e5 * c);
          }
          return (document.cookie = [
            t(i),
            "=",
            r(a),
            u.expires ? "; expires=" + u.expires.toUTCString() : "",
            u.path ? "; path=" + u.path : "",
            u.domain ? "; domain=" + u.domain : "",
            u.secure ? "; secure" : "",
          ].join(""));
        }
        for (
          var f = i ? void 0 : {},
            p = document.cookie ? document.cookie.split("; ") : [],
            d = 0,
            h = p.length;
          d < h;
          d++
        ) {
          var g = p[d].split("="),
            v = n(g.shift()),
            m = g.join("=");
          if (i && i === v) {
            f = o(m, a);
            break;
          }
          i || void 0 === (m = o(m)) || (f[v] = m);
        }
        return f;
      });
    (s.defaults = {}),
      (e.removeCookie = function (t, n) {
        return (
          void 0 !== e.cookie(t) &&
          (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t))
        );
      });
  }),
  (Market.Helpers.CookieConsent = {
    given: function (e) {
      if ("undefined" != typeof Cookiebot && Cookiebot.consent)
        return Cookiebot.consent[e];
      const t = $.cookie("CookieConsent");
      if (!t) return console.log("could not read CCC"), !1;
      if ("-1" === t) return console.log("CC outside of targeted area"), !0;
      try {
        const n = JSON.parse(
          t
            .replace(/%2c/g, ",")
            .replace(/'/g, '"')
            .replace(/([{[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":')
        );
        return n && !!n[e];
      } catch (e) {
        return console.log("could not parse CCC"), !1;
      }
    },
    cookieAvailable: function () {
      return !!$.cookie("CookieConsent");
    },
    addListener: function (e, t) {
      window.addEventListener(
        "CookiebotOnAccept",
        function () {
          Market.Helpers.CookieConsent.given(e) && t();
        },
        !1
      );
    },
  }),
  (Views.AffiliatesTracker = class {
    constructor(e) {
      const t = e.data("cookiebotEnabled"),
        n = Market.Helpers.CookieConsent.cookieAvailable(),
        r = this.removeAffiliateCookies,
        i = this.registerReferral.bind(this);
      this.setupReferralListener(t, i, r), (n && t) || i();
    }
    setupReferralListener(e, t, n) {
      const r = Market.Helpers.CookieConsent.given;
      e &&
        window.addEventListener(
          "CookiebotOnAccept",
          function () {
            if (r("marketing")) {
              $.cookie("click_id") || t();
            } else n();
          },
          !1
        );
    }
    removeAffiliateCookies() {
      const e = "/consociate/recant";
      $.ajax({
        method: "GET",
        url: e,
        dataType: "JSON",
        timeout: 5e3,
        xhrFields: { withCredentials: !0 },
      });
    }
    registerReferral() {
      const e = this._currentLocation(),
        t = new URL(e);
      (t.pathname = "/consociate/indite"),
        t.search &&
          !t.search.includes("redirect_back") &&
          (t.searchParams.append("url", e),
          t.searchParams.append("referrer", document.referrer)),
        $.ajax({
          method: "GET",
          url: t.href,
          dataType: "JSON",
          timeout: 5e3,
          xhrFields: { withCredentials: !0 },
        })
          .then((e) => {
            e && e.redirect && (window.location.href = e.redirect_url);
          })
          .catch(() => {});
    }
    _currentLocation() {
      return window.location.href;
    }
  }),
  (Market.Helpers.GaLsUtils = {
    getClientId: function () {
      const e = new URL(document.location.href).searchParams.get("_ga");
      return e ? e.match(/\d*\.\d*$/)[0] : this.retrieveClientId();
    },
    retrieveClientId: function () {
      return localStorage.getItem(this.clientIdLocalStorageKey());
    },
    storeClientId: function (e) {
      if (e) return localStorage.setItem(this.clientIdLocalStorageKey(), e);
    },
    removeClientId: function () {
      if (this.clientIdLocalStorageKey())
        return localStorage.removeItem(this.clientIdLocalStorageKey());
    },
    clientIdLocalStorageKey: function () {
      return "ga:clientId";
    },
    clientIdValid: function (e) {
      if (null === e) return !0;
      const t = 10,
        n = /^[0-9]+\.[0-9]+$/g;
      return e.split("").length > t && n.test(e);
    },
    localStorageAvailable: function () {
      const e = "t";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (e) {
        return !1;
      }
    },
    trackingCookieSet: function () {
      return !!document.cookie.match(/_ga=/);
    },
    linkerParamPresent: function () {
      return !!window.location.search.match(/_ga=/);
    },
    clientIdNotPresent: function () {
      return !(this.trackingCookieSet() || this.linkerParamPresent());
    },
  }),
  (Views.FullScreenPreview = class {
    constructor(e) {
      (this.$el = e),
        e.on("load", this.fixResponsivenessForMobileSafari.bind(this));
    }
    fixResponsivenessForMobileSafari() {
      this.hasMobileSafariIFrameBug() && this.addHackyFix();
    }
    hasMobileSafariIFrameBug() {
      return this.$el.width() !== $("body").width();
    }
    addHackyFix() {
      this.$el.attr("scrolling", "no").addClass("-ios-fix");
    }
  });
