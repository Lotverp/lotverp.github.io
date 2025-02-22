/*!
 * ScrollTrigger 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return (
      we ||
      ("undefined" != typeof window &&
        (we = window.gsap) &&
        we.registerPlugin &&
        we)
    );
  }
  function z(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (Be && Be.isPressed) || ze.cache++;
  }
  function G(r, n) {
    function Tc(e) {
      if (e || 0 === e) {
        o && (Ce.history.scrollRestoration = "manual");
        var t = Be && Be.isPressed;
        (e = Tc.v = Math.round(e) || (Be && Be.iOS ? 1 : 0)),
          r(e),
          (Tc.cacheID = ze.cache),
          t && i("ss", e);
      } else (n || ze.cache !== Tc.cacheID || i("ref")) && ((Tc.cacheID = ze.cache), (Tc.v = r()));
      return Tc.v + Tc.offset;
    }
    return (Tc.offset = 0), r && Tc;
  }
  function J(e) {
    return (
      we.utils.toArray(e)[0] ||
      ("string" == typeof e && !1 !== we.config().nullTargetWarn
        ? console.warn("Element not found:", e)
        : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = Ee.scrollingElement || ke);
    var o = ze.indexOf(t),
      i = n === Ke.sc ? 1 : 2;
    ~o || (o = ze.push(t) - 1), ze[o + i] || t.addEventListener("scroll", F);
    var a = ze[o + i],
      s =
        a ||
        (ze[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (
      (s.target = t),
      a || (s.smooth = "smooth" === we.getProperty(t, "scrollBehavior")),
      s
    );
  }
  function L(e, t, o) {
    function pd(e, t) {
      var r = Ne();
      t || n < r - s
        ? ((a = i), (i = e), (l = s), (s = r))
        : o
        ? (i += e)
        : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = Ne(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: pd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = Ne();
        return (
          (!e && 0 !== e) || e === i || pd(e),
          s === l || c < n - l
            ? 0
            : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = we.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, ze),
          n.push.apply(n, Fe),
          (ze = t),
          (Fe = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (we = e || r()) &&
        "undefined" != typeof document &&
        document.body &&
        ((Ce = window),
        (ke = (Ee = document).documentElement),
        (Me = Ee.body),
        (t = [Ce, Ee, ke, Me]),
        we.utils.clamp,
        (Ie = we.core.context || function () {}),
        (Oe = "onpointerenter" in Me ? "pointer" : "mouse"),
        (Pe = E.isTouch =
          Ce.matchMedia &&
          Ce.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ce ||
              0 < navigator.maxTouchPoints ||
              0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (De = E.eventTypes =
          (
            "ontouchstart" in ke
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ke
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (Se = 1)),
      Se
    );
  }
  var we,
    Se,
    Ce,
    Ee,
    ke,
    Me,
    Pe,
    Oe,
    Ae,
    t,
    Be,
    De,
    Ie,
    o = 1,
    Le = [],
    ze = [],
    Fe = [],
    Ne = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    Xe = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length
          ? Ce.scrollTo(e, Ke.sc())
          : Ce.pageXOffset || Ee[n] || ke[n] || Me[n] || 0;
      }),
    },
    Ke = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Xe,
      sc: G(function (e) {
        return arguments.length
          ? Ce.scrollTo(Xe.sc(), e)
          : Ce.pageYOffset || Ee[a] || ke[a] || Me[a] || 0;
      }),
    };
  (Xe.op = Ke), (ze.cache = 0);
  var E =
    ((Observer.prototype.init = function init(e) {
      Se || P(we) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        p = e.event,
        d = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        S = e.onChange,
        E = e.onToggleX,
        k = e.onToggleY,
        D = e.onHover,
        I = e.onHoverEnd,
        R = e.onMove,
        Y = e.ignoreCheck,
        z = e.isNormalizer,
        X = e.onGestureStart,
        W = e.onGestureEnd,
        H = e.onWheel,
        U = e.onEnable,
        j = e.onDisable,
        q = e.onClick,
        V = e.scrollSpeed,
        G = e.capture,
        Z = e.allowClicks,
        $ = e.lockAxis,
        Q = e.onLockAxis;
      function Qe() {
        return (ye = Ne());
      }
      function Re(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) ||
          (t && ge && "touch" !== e.pointerType) ||
          (Y && Y(e, t))
        );
      }
      function Te() {
        var e = (se.deltaX = N(be)),
          t = (se.deltaY = N(me)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        S && (r || n) && S(se, e, t, be, me),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            E && se.deltaX < 0 != le < 0 && E(se),
            (le = se.deltaX),
            (be[0] = be[1] = be[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            T && T(se),
            k && se.deltaY < 0 != ce < 0 && k(se),
            (ce = se.deltaY),
            (me[0] = me[1] = me[2] = 0)),
          (ne || re) && (R && R(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && Q && Q(se),
          oe && (H(se), (oe = !1)),
          (ee = 0);
      }
      function Ue(e, t, r) {
        (be[r] += e),
          (me[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(Te)) : Te();
      }
      function Ve(e, t) {
        $ &&
          !ae &&
          ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((be[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((me[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(Te)) : Te();
      }
      function We(e) {
        if (!Re(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i ||
              Math.abs(se.startX - t) >= a ||
              Math.abs(se.startY - r) >= a) &&
              (h && (re = !0),
              i || (se.isDragging = !0),
              Ve(n, o),
              i || (d && d(se)));
        }
      }
      function Ye(t) {
        if (!Re(t, 1)) {
          C(z ? i : ve, De[1], We, !0);
          var e = !isNaN(se.y - se.startY),
            r =
              se.isDragging &&
              (3 < Math.abs(se.x - se.startX) ||
                3 < Math.abs(se.y - se.startY)),
            n = M(t);
          !r &&
            e &&
            (se._vx.reset(),
            se._vy.reset(),
            s &&
              Z &&
              we.delayedCall(0.08, function () {
                if (300 < Ne() - ye && !t.defaultPrevented)
                  if (t.target.click) t.target.click();
                  else if (ve.createEvent) {
                    var e = ve.createEvent("MouseEvents");
                    e.initMouseEvent(
                      "click",
                      !0,
                      !0,
                      Ce,
                      1,
                      n.screenX,
                      n.screenY,
                      n.clientX,
                      n.clientY,
                      !1,
                      !1,
                      !1,
                      !1,
                      0,
                      null
                    ),
                      t.target.dispatchEvent(e);
                  }
              })),
            (se.isDragging = se.isGesturing = se.isPressed = !1),
            l && !z && te.restart(!0),
            g && r && g(se),
            b && b(se, r);
        }
      }
      function Ze(e) {
        return (
          e.touches &&
          1 < e.touches.length &&
          (se.isGesturing = !0) &&
          X(e, se.isDragging)
        );
      }
      function $e() {
        return (se.isGesturing = !1) || W(se);
      }
      function _e(e) {
        if (!Re(e)) {
          var t = ue(),
            r = fe();
          Ue((t - pe) * V, (r - de) * V, 1),
            (pe = t),
            (de = r),
            l && te.restart(!0);
        }
      }
      function af(e) {
        if (!Re(e)) {
          (e = M(e, s)), H && (oe = !0);
          var t =
            (1 === e.deltaMode ? r : 2 === e.deltaMode ? Ce.innerHeight : 1) *
            f;
          Ue(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0);
        }
      }
      function bf(e) {
        if (!Re(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), (n || o) && Ve(n, o);
        }
      }
      function cf(e) {
        (se.event = e), D(se);
      }
      function df(e) {
        (se.event = e), I(se);
      }
      function ef(e) {
        return Re(e) || (M(e, s) && q(se));
      }
      (this.target = i = J(i) || ke),
        (this.vars = e),
        (u = u && we.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (V = V || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Ce.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = K(i, Xe),
        fe = K(i, Ke),
        pe = ue(),
        de = fe(),
        ge =
          ~t.indexOf("touch") &&
          !~t.indexOf("pointer") &&
          "pointerdown" === De[0],
        he = A(i),
        ve = i.ownerDocument || Ee,
        be = [0, 0, 0],
        me = [0, 0, 0],
        ye = 0,
        xe = (se.onPress = function (e) {
          Re(e, 1) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(z ? i : ve, De[1], We, s, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        });
      (te = se._dc =
        we
          .delayedCall(c || 0.25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
          })
          .pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = ue),
        (se.scrollY = fe),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Ie(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(he ? ve : i, "scroll", F),
              0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", _e, s, G),
              0 <= t.indexOf("wheel") && B(i, "wheel", af, s, G),
              ((0 <= t.indexOf("touch") && Pe) || 0 <= t.indexOf("pointer")) &&
                (B(i, De[0], xe, s, G),
                B(ve, De[2], Ye),
                B(ve, De[3], Ye),
                Z && B(i, "click", Qe, !1, !0),
                q && B(i, "click", ef),
                X && B(ve, "gesturestart", Ze),
                W && B(ve, "gestureend", $e),
                D && B(i, Oe + "enter", cf),
                I && B(i, Oe + "leave", df),
                R && B(i, Oe + "move", bf)),
              (se.isEnabled = !0),
              e && e.type && xe(e),
              U && U(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (Le.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(he ? ve : i, "scroll", F),
            se.isPressed &&
              (se._vx.reset(), se._vy.reset(), C(z ? i : ve, De[1], We, !0)),
            C(he ? ve : i, "scroll", _e, G),
            C(i, "wheel", af, G),
            C(i, De[0], xe, G),
            C(ve, De[2], Ye),
            C(ve, De[3], Ye),
            C(i, "click", Qe, !0),
            C(i, "click", ef),
            C(ve, "gesturestart", Ze),
            C(ve, "gestureend", $e),
            C(i, Oe + "enter", cf),
            C(i, Oe + "leave", df),
            C(i, Oe + "move", bf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            j && j(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = Le.indexOf(se);
            0 <= e && Le.splice(e, 1), Be === se && (Be = 0);
          }),
        Le.push(se),
        z && A(i) && (Be = se),
        se.enable(p);
    }),
    (function _createClass(e, t, r) {
      return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
      );
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (E.version = "3.11.4"),
    (E.create = function (e) {
      return new E(e);
    }),
    (E.register = P),
    (E.getAll = function () {
      return Le.slice();
    }),
    (E.getById = function (t) {
      return Le.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && we.registerPlugin(E);
  function ya() {
    return (ot = 1);
  }
  function za() {
    return (ot = 0);
  }
  function Aa(e) {
    return e;
  }
  function Ba(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ca() {
    return "undefined" != typeof window;
  }
  function Da() {
    return He || (Ca() && (He = window.gsap) && He.registerPlugin && He);
  }
  function Ea(e) {
    return !!~l.indexOf(e);
  }
  function Fa(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (Ea(e)
        ? function () {
            return (Yt.width = Je.innerWidth), (Yt.height = Je.innerHeight), Yt;
          }
        : function () {
            return Mt(e);
          })
    );
  }
  function Ia(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return (r = "scroll" + n) && (i = z(e, r))
      ? i() - Fa(e)()[o]
      : Ea(e)
      ? (qe[r] || Ge[r]) -
        (Je["inner" + n] || qe["client" + n] || Ge["client" + n])
      : e[r] - e["offset" + n];
  }
  function Ja(e, t) {
    for (var r = 0; r < g.length; r += 3)
      (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ka(e) {
    return "string" == typeof e;
  }
  function La(e) {
    return "function" == typeof e;
  }
  function Ma(e) {
    return "number" == typeof e;
  }
  function Na(e) {
    return "object" == typeof e;
  }
  function Oa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Pa(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function eb(e) {
    return Je.getComputedStyle(e);
  }
  function gb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function ib(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function jb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function lb(o) {
    var i = He.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0
            ? n
            : i(t < 0 ? e - o : e + o);
        };
  }
  function nb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function ob(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function pb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function qb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function ub(e, t) {
    if (Ka(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in I
            ? I[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function vb(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      p = o.fontWeight,
      d = je.createElement("div"),
      g = Ea(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? Ge : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        p +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) ||
        (y += (n === Ke ? T : S) + ":" + (i + parseFloat(f)) + "px;"),
      a &&
        (y +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (d._isStart = b),
      d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (d.style.cssText = y),
      (d.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
      (d._offset = d["offset" + n.op.d2]),
      R(d, 0, n, b),
      d
    );
  }
  function Ab() {
    return 34 < gt() - ht && (w = w || requestAnimationFrame(j));
  }
  function Bb() {
    (v && v.isPressed && !(v.startX > Ge.clientWidth)) ||
      (ze.cache++,
      v ? (w = w || requestAnimationFrame(j)) : j(),
      ht || W("scrollStart"),
      (ht = gt()));
  }
  function Cb() {
    (y = Je.innerWidth), (m = Je.innerHeight);
  }
  function Db() {
    ze.cache++,
      nt ||
        h ||
        je.fullscreenElement ||
        je.webkitFullscreenElement ||
        (b &&
          y === Je.innerWidth &&
          !(Math.abs(Je.innerHeight - m) > 0.25 * Je.innerHeight)) ||
        c.restart(!0);
  }
  function Gb() {
    return pb(Q, "scrollEnd", Gb) || It(!0);
  }
  function Jb(e) {
    for (var t = 0; t < H.length; t += 5)
      (!e || (H[t + 4] && H[t + 4].query === e)) &&
        ((H[t].style.cssText = H[t + 1]),
        H[t].getBBox && H[t].setAttribute("transform", H[t + 2] || ""),
        (H[t + 3].uncache = 1));
  }
  function Kb(e, t) {
    var r;
    for (it = 0; it < At.length; it++)
      !(r = At[it]) ||
        (t && r._ctx !== t) ||
        (e ? r.kill(1) : r.revert(!0, !0));
    t && Jb(t), t || W("revert");
  }
  function Lb(e, t) {
    ze.cache++,
      (!t && ut) ||
        ze.forEach(function (e) {
          return La(e) && e.cacheID++ && (e.rec = 0);
        }),
      Ka(e) && (Je.history.scrollRestoration = x = e);
  }
  function Yb(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = q.length, a = t.style, s = e.style; i--; )
        a[(o = q[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[S] = s[T] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[mt] = ib(e, Xe) + kt),
        (a[yt] = ib(e, Ke) + kt),
        (a[St] = s[Ct] = s.top = s.left = "0"),
        Rt(n),
        (s[mt] = s.maxWidth = r[mt]),
        (s[yt] = s.maxHeight = r[yt]),
        (s[St] = r[St]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function _b(e) {
    for (var t = V.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(V[o], r[V[o]]);
    return (n.t = e), n;
  }
  function cc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
    La(e) && (e = e(s)),
      Ka(e) &&
        "max" === e.substr(0, 3) &&
        (e = f + ("=" === e.charAt(4) ? ub("0" + e.substr(3), r) : 0));
    var d,
      g,
      h,
      v = p ? p.time() : 0;
    if ((p && p.seek(0), Ma(e))) a && R(a, r, n, !0);
    else {
      La(t) && (t = t(s));
      var b,
        m,
        y,
        x,
        w = (e || "0").split(" ");
      (h = J(t) || Ge),
        ((b = Mt(h) || {}) && (b.left || b.top)) ||
          "none" !== eb(h).display ||
          ((x = h.style.display),
          (h.style.display = "block"),
          (b = Mt(h)),
          x ? (h.style.display = x) : h.style.removeProperty("display")),
        (m = ub(w[0], b[n.d])),
        (y = ub(w[1] || "0", r)),
        (e = b[n.p] - l[n.p] - c + m + o - y),
        a && R(a, y, n, r - y < 20 || (a._isStart && 20 < y)),
        (r -= r - y);
    }
    if (i) {
      var _ = e + r,
        T = i._isStart;
      (d = "scroll" + n.d2),
        R(
          i,
          _,
          n,
          (T && 20 < _) ||
            (!T && (u ? Math.max(Ge[d], qe[d]) : i.parentNode[d]) <= _ + 1)
        ),
        u &&
          ((l = Mt(a)),
          u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + kt));
    }
    return (
      p &&
        h &&
        ((d = Mt(h)),
        p.seek(f),
        (g = Mt(h)),
        (p._caScrollDist = d[n.p] - g[n.p]),
        (e = (e / p._caScrollDist) * f)),
      p && p.seek(v),
      p ? e : Math.round(e)
    );
  }
  function ec(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === Ge) {
        for (o in ((e._stOrig = a.cssText), (i = eb(e))))
          +o ||
            $.test(o) ||
            !i[o] ||
            "string" != typeof a[o] ||
            "0" === o ||
            (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (He.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function fc(l, e) {
    function Uj(e, t, r, n, o) {
      var i = Uj.tween,
        a = t.onComplete,
        s = {};
      return (
        (r = r || f()),
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (c = Math.round(r)),
        (t[p] = e),
        ((t.modifiers = s)[p] = function (e) {
          return (
            (e = Math.round(f())) !== c &&
            e !== u &&
            3 < Math.abs(e - c) &&
            3 < Math.abs(e - u)
              ? (i.kill(), (Uj.tween = 0))
              : (e = r + n * i.ratio + o * i.ratio * i.ratio),
            (u = c),
            (c = Math.round(e))
          );
        }),
        (t.onUpdate = function () {
          ze.cache++, j();
        }),
        (t.onComplete = function () {
          (Uj.tween = 0), a && a.call(i);
        }),
        (i = Uj.tween = He.to(l, t))
      );
    }
    var c,
      u,
      f = K(l, e),
      p = "_scroll" + e.p2;
    return (
      ((l[p] = f).wheelHandler = function () {
        return Uj.tween && Uj.tween.kill() && (Uj.tween = 0);
      }),
      ob(l, "wheel", f.wheelHandler),
      Uj
    );
  }
  var He,
    s,
    Je,
    je,
    qe,
    Ge,
    l,
    c,
    et,
    tt,
    rt,
    u,
    nt,
    ot,
    f,
    it,
    p,
    d,
    g,
    at,
    st,
    h,
    v,
    b,
    m,
    y,
    k,
    lt,
    x,
    ct,
    w,
    ut,
    ft,
    pt,
    dt = 1,
    gt = Date.now,
    _ = gt(),
    ht = 0,
    vt = 0,
    bt = Math.abs,
    T = "right",
    S = "bottom",
    mt = "width",
    yt = "height",
    xt = "Right",
    wt = "Left",
    _t = "Top",
    Tt = "Bottom",
    St = "padding",
    Ct = "margin",
    Et = "Width",
    D = "Height",
    kt = "px",
    Mt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== eb(e)[f] &&
          He.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    Pt = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ot = { toggleActions: "play", anticipatePin: 0 },
    I = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    R = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + Et] = 1),
        (o["border" + a + Et] = 0),
        (o[r.p] = t + "px"),
        He.set(e, o);
    },
    At = [],
    Bt = {},
    Y = {},
    X = [],
    W = function _dispatch(e) {
      return (
        (Y[e] &&
          Y[e].map(function (e) {
            return e();
          })) ||
        X
      );
    },
    H = [],
    Dt = 0,
    It = function _refreshAll(e, t) {
      if (!ht || e) {
        (ut = Q.isRefreshing = !0),
          ze.forEach(function (e) {
            return La(e) && e.cacheID++ && (e.rec = e());
          });
        var r = W("refreshInit");
        at && Q.sort(),
          t || Kb(),
          ze.forEach(function (e) {
            La(e) &&
              (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          At.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          At.forEach(function (e, t) {
            if (e._subPinOffset && e.pin) {
              var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                n = e.pin[r];
              e.revert(!0, 1),
                e.adjustPinSpacing(e.pin[r] - n),
                e.revert(!1, 1);
            }
          }),
          At.forEach(function (e) {
            return (
              "max" === e.vars.end &&
              e.setPositions(
                e.start,
                Math.max(e.start + 1, Ia(e.scroller, e._dir))
              )
            );
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          ze.forEach(function (e) {
            La(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Lb(x, 1),
          c.pause(),
          Dt++,
          j(2),
          At.forEach(function (e) {
            return La(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (ut = Q.isRefreshing = !1),
          W("refresh");
      } else ob(Q, "scrollEnd", Gb);
    },
    U = 0,
    Lt = 1,
    j = function _updateAll(e) {
      if (!ut || 2 === e) {
        (Q.isUpdating = !0), pt && pt.update(0);
        var t = At.length,
          r = gt(),
          n = 50 <= r - _,
          o = t && At[0].scroll();
        if (
          ((Lt = o < U ? -1 : 1),
          (U = o),
          n &&
            (ht && !ot && 200 < r - ht && ((ht = 0), W("scrollEnd")),
            (rt = _),
            (_ = r)),
          Lt < 0)
        ) {
          for (it = t; 0 < it--; ) At[it] && At[it].update(0, n);
          Lt = 1;
        } else for (it = 0; it < t; it++) At[it] && At[it].update(0, n);
        Q.isUpdating = !1;
      }
      w = 0;
    },
    q = [
      "left",
      "top",
      S,
      T,
      Ct + Tt,
      Ct + xt,
      Ct + _t,
      Ct + wt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    V = q.concat([
      mt,
      yt,
      "boxSizing",
      "max" + Et,
      "max" + D,
      "position",
      Ct,
      St,
      St + _t,
      St + xt,
      St + Tt,
      St + wt,
    ]),
    Z = /([A-Z])/g,
    Rt = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(Z, "-$1").toLowerCase());
      }
    },
    Yt = { left: 0, top: 0 },
    $ = /(webkit|moz|length|cssText|inset)/i,
    Q =
      ((ScrollTrigger.prototype.init = function init(S, C) {
        if (
          ((this.progress = this.start = 0), this.vars && this.kill(!0, !0), vt)
        ) {
          var E,
            n,
            d,
            k,
            M,
            P,
            O,
            A,
            B,
            D,
            I,
            e,
            L,
            R,
            Y,
            F,
            N,
            t,
            X,
            b,
            W,
            H,
            m,
            U,
            y,
            j,
            x,
            r,
            w,
            _,
            q,
            o,
            g,
            V,
            G,
            Z,
            $,
            T,
            i,
            Q = (S = gb(Ka(S) || Ma(S) || S.nodeType ? { trigger: S } : S, Ot))
              .onUpdate,
            ee = S.toggleClass,
            a = S.id,
            te = S.onToggle,
            re = S.onRefresh,
            ne = S.scrub,
            oe = S.trigger,
            ie = S.pin,
            ae = S.pinSpacing,
            se = S.invalidateOnRefresh,
            le = S.anticipatePin,
            s = S.onScrubComplete,
            h = S.onSnapComplete,
            ce = S.once,
            ue = S.snap,
            fe = S.pinReparent,
            l = S.pinSpacer,
            pe = S.containerAnimation,
            de = S.fastScrollEnd,
            ge = S.preventOverlaps,
            he =
              S.horizontal || (S.containerAnimation && !1 !== S.horizontal)
                ? Xe
                : Ke,
            ve = !ne && 0 !== ne,
            be = J(S.scroller || Je),
            c = He.core.getCache(be),
            me = Ea(be),
            ye =
              "fixed" ===
              ("pinType" in S
                ? S.pinType
                : z(be, "pinType") || (me && "fixed")),
            xe = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack],
            we = ve && S.toggleActions.split(" "),
            u = "markers" in S ? S.markers : Ot.markers,
            _e = me ? 0 : parseFloat(eb(be)["border" + he.p2 + Et]) || 0,
            Te = this,
            Se =
              S.onRefreshInit &&
              function () {
                return S.onRefreshInit(Te);
              },
            Ce = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Je["inner" + o] : e["client" + o]) || 0;
                  };
            })(be, me, he),
            Ee = (function _getOffsetsFunc(e, t) {
              return !t || ~Fe.indexOf(e)
                ? Fa(e)
                : function () {
                    return Yt;
                  };
            })(be, me),
            ke = 0,
            Me = 0,
            Pe = K(be, he);
          if (
            (lt(Te),
            (Te._dir = he),
            (le *= 45),
            (Te.scroller = be),
            (Te.scroll = pe ? pe.time.bind(pe) : Pe),
            (k = Pe()),
            (Te.vars = S),
            (C = C || S.animation),
            "refreshPriority" in S &&
              ((at = 1), -9999 === S.refreshPriority && (pt = Te)),
            (c.tweenScroll = c.tweenScroll || {
              top: fc(be, Ke),
              left: fc(be, Xe),
            }),
            (Te.tweenTo = E = c.tweenScroll[he.p]),
            (Te.scrubDuration = function (e) {
              (o = Ma(e) && e)
                ? q
                  ? q.duration(e)
                  : (q = He.to(C, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Te);
                      },
                    }))
                : (q && q.progress(1).kill(), (q = 0));
            }),
            C &&
              ((C.vars.lazy = !1),
              C._initted ||
                (!1 !== C.vars.immediateRender &&
                  !1 !== S.immediateRender &&
                  C.duration() &&
                  C.render(0, !0, !0)),
              (Te.animation = C.pause()),
              (C.scrollTrigger = Te).scrubDuration(ne),
              (w = 0),
              (a = a || C.vars.id)),
            At.push(Te),
            ue &&
              ((Na(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in Ge.style &&
                He.set(me ? [Ge, qe] : be, { scrollBehavior: "auto" }),
              ze.forEach(function (e) {
                return (
                  La(e) &&
                  e.target === (me ? je.scrollingElement || qe : be) &&
                  (e.smooth = !1)
                );
              }),
              (d = La(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return He.utils.snap(jb(t), e);
                    };
                  })(C)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return lb(jb(r))(e, t.direction);
                    };
                  })(C)
                : !1 !== ue.directional
                ? function (e, t) {
                    return lb(ue.snapTo)(e, gt() - Me < 500 ? 0 : t.direction);
                  }
                : He.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Na(g) ? tt(g.min, g.max) : tt(g, g)),
              (V = He.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Pe(),
                  t = gt() - Me < 500,
                  r = E.tween;
                if (
                  !(t || Math.abs(Te.getVelocity()) < 10) ||
                  r ||
                  ot ||
                  ke === e
                )
                  Te.isActive && ke !== e && V.restart(!0);
                else {
                  var n = (e - P) / L,
                    o = C && !ve ? C.totalProgress() : n,
                    i = t ? 0 : ((o - _) / (gt() - rt)) * 1e3 || 0,
                    a = He.utils.clamp(-n, 1 - n, (bt(i / 2) * i) / 0.185),
                    s = n + (!1 === ue.inertia ? 0 : a),
                    l = tt(0, 1, d(s, Te)),
                    c = Math.round(P + l * L),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    p = ue.onComplete;
                  if (e <= O && P <= e && c !== e) {
                    if (r && !r._initted && r.data <= bt(c - e)) return;
                    !1 === ue.inertia && (a = l - n),
                      E(
                        c,
                        {
                          duration: g(
                            bt(
                              (0.185 * Math.max(bt(s - o), bt(l - o))) /
                                i /
                                0.05 || 0
                            )
                          ),
                          ease: ue.ease || "power3",
                          data: bt(c - e),
                          onInterrupt: function onInterrupt() {
                            return V.restart(!0) && f && f(Te);
                          },
                          onComplete: function onComplete() {
                            Te.update(),
                              (ke = Pe()),
                              (w = _ =
                                C && !ve ? C.totalProgress() : Te.progress),
                              h && h(Te),
                              p && p(Te);
                          },
                        },
                        e,
                        a * L,
                        c - e - a * L
                      ),
                      u && u(Te, E.tween);
                  }
                }
              }).pause())),
            a && (Bt[a] = Te),
            (i =
              (i =
                (oe = Te.trigger = J(oe || ie)) &&
                oe._gsap &&
                oe._gsap.stRevert) && i(Te)),
            (ie = !0 === ie ? oe : J(ie)),
            Ka(ee) && (ee = { targets: oe, className: ee }),
            ie &&
              (!1 === ae ||
                ae === Ct ||
                (ae =
                  !(
                    !ae &&
                    ie.parentNode &&
                    ie.parentNode.style &&
                    "flex" === eb(ie.parentNode).display
                  ) && St),
              (Te.pin = ie),
              (n = He.core.getCache(ie)).spacer
                ? (R = n.pinState)
                : (l &&
                    ((l = J(l)) &&
                      !l.nodeType &&
                      (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = _b(l))),
                  (n.spacer = N = l || je.createElement("div")),
                  N.classList.add("pin-spacer"),
                  a && N.classList.add("pin-spacer-" + a),
                  (n.pinState = R = _b(ie))),
              !1 !== S.force3D && He.set(ie, { force3D: !0 }),
              (Te.spacer = N = n.spacer),
              (r = eb(ie)),
              (m = r[ae + he.os2]),
              (X = He.getProperty(ie)),
              (b = He.quickSetter(ie, he.a, kt)),
              Yb(ie, N, r),
              (F = _b(ie))),
            u)
          ) {
            (e = Na(u) ? gb(u, Pt) : Pt),
              (D = vb("scroller-start", a, be, he, e, 0)),
              (I = vb("scroller-end", a, be, he, e, 0, D)),
              (t = D["offset" + he.op.d2]);
            var f = J(z(be, "content") || be);
            (A = this.markerStart = vb("start", a, f, he, e, t, 0, pe)),
              (B = this.markerEnd = vb("end", a, f, he, e, t, 0, pe)),
              pe && (T = He.quickSetter([A, B], he.a, kt)),
              ye ||
                (Fe.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = eb(e).position;
                  e.style.position =
                    "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? Ge : be),
                He.set([D, I], { force3D: !0 }),
                (y = He.quickSetter(D, he.a, kt)),
                (x = He.quickSetter(I, he.a, kt)));
          }
          if (pe) {
            var p = pe.vars.onUpdate,
              v = pe.vars.onUpdateParams;
            pe.eventCallback("onUpdate", function () {
              Te.update(0, 0, 1), p && p.apply(v || []);
            });
          }
          (Te.previous = function () {
            return At[At.indexOf(Te) - 1];
          }),
            (Te.next = function () {
              return At[At.indexOf(Te) + 1];
            }),
            (Te.revert = function (e, t) {
              if (!t) return Te.kill(!0);
              var r = !1 !== e || !Te.enabled,
                n = nt;
              r !== Te.isReverted &&
                (r &&
                  ((Z = Math.max(Pe(), Te.scroll.rec || 0)),
                  (G = Te.progress),
                  ($ = C && C.progress())),
                A &&
                  [A, B, D, I].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && ((nt = 1), Te.update(r)),
                !ie ||
                  (fe && Te.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Rt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Rt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ie, N, R)
                    : Yb(ie, N, eb(ie), U)),
                r || Te.update(r),
                (nt = n),
                (Te.isReverted = r));
            }),
            (Te.refresh = function (e, t) {
              if ((!nt && Te.enabled) || t)
                if (ie && e && ht) ob(ScrollTrigger, "scrollEnd", Gb);
                else {
                  !ut && Se && Se(Te),
                    (nt = 1),
                    (Me = gt()),
                    E.tween && (E.tween.kill(), (E.tween = 0)),
                    q && q.pause(),
                    se && C && C.revert({ kill: !1 }).invalidate(),
                    Te.isReverted || Te.revert(!0, !0),
                    (Te._subPinOffset = !1);
                  for (
                    var r,
                      n,
                      o,
                      i,
                      a,
                      s,
                      l,
                      c,
                      u,
                      f,
                      p,
                      d = Ce(),
                      g = Ee(),
                      h = pe ? pe.duration() : Ia(be, he),
                      v = 0,
                      b = 0,
                      m = S.end,
                      y = S.endTrigger || oe,
                      x =
                        S.start ||
                        (0 !== S.start && oe ? (ie ? "0 0" : "0 100%") : 0),
                      w = (Te.pinnedContainer =
                        S.pinnedContainer && J(S.pinnedContainer)),
                      _ = (oe && Math.max(0, At.indexOf(Te))) || 0,
                      T = _;
                    T--;

                  )
                    (s = At[T]).end || s.refresh(0, 1) || (nt = 1),
                      !(l = s.pin) ||
                        (l !== oe && l !== ie) ||
                        s.isReverted ||
                        ((f = f || []).unshift(s), s.revert(!0, !0)),
                      s !== At[T] && (_--, T--);
                  for (
                    La(x) && (x = x(Te)),
                      P =
                        cc(x, oe, d, he, Pe(), A, D, Te, g, _e, ye, h, pe) ||
                        (ie ? -0.001 : 0),
                      La(m) && (m = m(Te)),
                      Ka(m) &&
                        !m.indexOf("+=") &&
                        (~m.indexOf(" ")
                          ? (m = (Ka(x) ? x.split(" ")[0] : "") + m)
                          : ((v = ub(m.substr(2), d)),
                            (m = Ka(x) ? x : P + v),
                            (y = oe))),
                      O =
                        Math.max(
                          P,
                          cc(
                            m || (y ? "100% 0" : h),
                            y,
                            d,
                            he,
                            Pe() + v,
                            B,
                            I,
                            Te,
                            g,
                            _e,
                            ye,
                            h,
                            pe
                          )
                        ) || -0.001,
                      L = O - P || ((P -= 0.01) && 0.001),
                      v = 0,
                      T = _;
                    T--;

                  )
                    (l = (s = At[T]).pin) &&
                      s.start - s._pinPush <= P &&
                      !pe &&
                      0 < s.end &&
                      ((r = s.end - s.start),
                      ((l === oe && s.start - s._pinPush < P) || l === w) &&
                        !Ma(x) &&
                        (v += r * (1 - s.progress)),
                      l === ie && (b += r));
                  if (
                    ((P += v),
                    (O += v),
                    (Te._pinPush = b),
                    A &&
                      v &&
                      (((r = {})[he.a] = "+=" + v),
                      w && (r[he.p] = "-=" + Pe()),
                      He.set([A, B], r)),
                    ie)
                  )
                    (r = eb(ie)),
                      (i = he === Ke),
                      (o = Pe()),
                      (W = parseFloat(X(he.a)) + b),
                      !h &&
                        1 < O &&
                        ((p = {
                          style: (p = (me ? je.scrollingElement || qe : be)
                            .style),
                          value: p["overflow" + he.a.toUpperCase()],
                        })["overflow" + he.a.toUpperCase()] = "scroll"),
                      Yb(ie, N, r),
                      (F = _b(ie)),
                      (n = Mt(ie, !0)),
                      (c = ye && K(be, i ? Xe : Ke)()),
                      ae &&
                        (((U = [ae + he.os2, L + b + kt]).t = N),
                        (T = ae === St ? ib(ie, he) + L + b : 0) &&
                          U.push(he.d, T + kt),
                        Rt(U),
                        w &&
                          At.forEach(function (e) {
                            e.pin === w &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        ye && Pe(Z)),
                      ye &&
                        (((a = {
                          top: n.top + (i ? o - P : c) + kt,
                          left: n.left + (i ? c : o - P) + kt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[mt] = a.maxWidth =
                          Math.ceil(n.width) + kt),
                        (a[yt] = a.maxHeight = Math.ceil(n.height) + kt),
                        (a[Ct] =
                          a[Ct + _t] =
                          a[Ct + xt] =
                          a[Ct + Tt] =
                          a[Ct + wt] =
                            "0"),
                        (a[St] = r[St]),
                        (a[St + _t] = r[St + _t]),
                        (a[St + xt] = r[St + xt]),
                        (a[St + Tt] = r[St + Tt]),
                        (a[St + wt] = r[St + wt]),
                        (Y = (function _copyState(e, t, r) {
                          for (
                            var n, o = [], i = e.length, a = r ? 8 : 0;
                            a < i;
                            a += 2
                          )
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(R, a, fe)),
                        ut && Pe(0)),
                      C
                        ? ((u = C._initted),
                          st(1),
                          C.render(C.duration(), !0, !0),
                          (H = X(he.a) - W + L + b),
                          (j = 1 < Math.abs(L - H)),
                          ye && j && Y.splice(Y.length - 2, 2),
                          C.render(0, !0, !0),
                          u || C.invalidate(!0),
                          C.parent || C.totalTime(C.totalTime()),
                          st(0))
                        : (H = L),
                      p &&
                        (p.value
                          ? (p.style["overflow" + he.a.toUpperCase()] = p.value)
                          : p.style.removeProperty("overflow-" + he.a));
                  else if (oe && Pe() && !pe)
                    for (n = oe.parentNode; n && n !== Ge; )
                      n._pinOffset &&
                        ((P -= n._pinOffset), (O -= n._pinOffset)),
                        (n = n.parentNode);
                  f &&
                    f.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Te.start = P),
                    (Te.end = O),
                    (k = M = ut ? Z : Pe()),
                    pe || ut || (k < Z && Pe(Z), (Te.scroll.rec = 0)),
                    Te.revert(!1, !0),
                    V &&
                      ((ke = -1), Te.isActive && Pe(P + L * G), V.restart(!0)),
                    (nt = 0),
                    C &&
                      ve &&
                      (C._initted || $) &&
                      C.progress() !== $ &&
                      C.progress($, !0).render(C.time(), !0, !0),
                    (G === Te.progress && !pe) ||
                      (C && !ve && C.totalProgress(G, !0),
                      (Te.progress = (k - P) / L === G ? 0 : G)),
                    ie && ae && (N._pinOffset = Math.round(Te.progress * H)),
                    re && !ut && re(Te);
                }
            }),
            (Te.getVelocity = function () {
              return ((Pe() - M) / (gt() - rt)) * 1e3 || 0;
            }),
            (Te.endAnimation = function () {
              Oa(Te.callbackAnimation),
                C &&
                  (q
                    ? q.progress(1)
                    : C.paused()
                    ? ve || Oa(C, Te.direction < 0, 1)
                    : Oa(C, C.reversed()));
            }),
            (Te.labelToScroll = function (e) {
              return (
                (C &&
                  C.labels &&
                  (P || Te.refresh() || P) +
                    (C.labels[e] / C.duration()) * L) ||
                0
              );
            }),
            (Te.getTrailing = function (t) {
              var e = At.indexOf(Te),
                r =
                  0 < Te.direction ? At.slice(0, e).reverse() : At.slice(e + 1);
              return (
                Ka(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Te.direction ? e.end <= P : e.start >= O;
              });
            }),
            (Te.update = function (e, t, r) {
              if (!pe || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = ut ? Z : Te.scroll(),
                  f = e ? 0 : (u - P) / L,
                  p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  d = Te.progress;
                if (
                  (t &&
                    ((M = k),
                    (k = pe ? Pe() : u),
                    ue && ((_ = w), (w = C && !ve ? C.totalProgress() : p))),
                  le &&
                    !p &&
                    ie &&
                    !nt &&
                    !dt &&
                    ht &&
                    P < u + ((u - M) / (gt() - rt)) * le &&
                    (p = 1e-4),
                  p !== d && Te.enabled)
                ) {
                  if (
                    ((a =
                      (s =
                        (n = Te.isActive = !!p && p < 1) != (!!d && d < 1)) ||
                      !!p != !!d),
                    (Te.direction = d < p ? 1 : -1),
                    (Te.progress = p),
                    a &&
                      !nt &&
                      ((o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3),
                      ve &&
                        ((i =
                          (!s && "none" !== we[o + 1] && we[o + 1]) || we[o]),
                        (c =
                          C && ("complete" === i || "reset" === i || i in C)))),
                    ge &&
                      (s || c) &&
                      (c || ne || !C) &&
                      (La(ge)
                        ? ge(Te)
                        : Te.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!q || nt || dt
                        ? C && C.totalProgress(p, !!nt)
                        : (q._dp._time - q._start !== q._time &&
                            q.render(q._dp._time - q._start),
                          q.resetTo
                            ? q.resetTo("totalProgress", p, C._tTime / C._tDur)
                            : ((q.vars.totalProgress = p),
                              q.invalidate().restart()))),
                    ie)
                  )
                    if ((e && ae && (N.style[ae + he.os2] = m), ye)) {
                      if (a) {
                        if (
                          ((l =
                            !e && d < p && u < O + 1 && u + 1 >= Ia(be, he)),
                          fe)
                        )
                          if (e || (!n && !l)) ec(ie, N);
                          else {
                            var g = Mt(ie, !0),
                              h = u - P;
                            ec(
                              ie,
                              Ge,
                              g.top + (he === Ke ? h : 0) + kt,
                              g.left + (he === Ke ? 0 : h) + kt
                            );
                          }
                        Rt(n || l ? Y : F),
                          (j && p < 1 && n) || b(W + (1 !== p || l ? 0 : H));
                      }
                    } else b(Ba(W + H * p));
                  !ue || E.tween || nt || dt || V.restart(!0),
                    ee &&
                      (s || (ce && p && (p < 1 || !ct))) &&
                      et(ee.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](
                          ee.className
                        );
                      }),
                    !Q || ve || e || Q(Te),
                    a && !nt
                      ? (ve &&
                          (c &&
                            ("complete" === i
                              ? C.pause().totalProgress(1)
                              : "reset" === i
                              ? C.restart(!0).pause()
                              : "restart" === i
                              ? C.restart(!0)
                              : C[i]()),
                          Q && Q(Te)),
                        (!s && ct) ||
                          (te && s && Pa(Te, te),
                          xe[o] && Pa(Te, xe[o]),
                          ce && (1 === p ? Te.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === p ? 1 : 3)] && Pa(Te, xe[o]))),
                        de &&
                          !n &&
                          Math.abs(Te.getVelocity()) > (Ma(de) ? de : 2500) &&
                          (Oa(Te.callbackAnimation),
                          q
                            ? q.progress(1)
                            : Oa(C, "reverse" === i ? 1 : !p, 1)))
                      : ve && Q && !nt && Q(Te);
                }
                if (x) {
                  var v = pe
                    ? (u / pe.duration()) * (pe._caScrollDist || 0)
                    : u;
                  y(v + (D._isFlipped ? 1 : 0)), x(v);
                }
                T && T((-u / pe.duration()) * (pe._caScrollDist || 0));
              }
            }),
            (Te.enable = function (e, t) {
              Te.enabled ||
                ((Te.enabled = !0),
                ob(be, "resize", Db),
                ob(me ? je : be, "scroll", Bb),
                Se && ob(ScrollTrigger, "refreshInit", Se),
                !1 !== e && ((Te.progress = G = 0), (k = M = ke = Pe())),
                !1 !== t && Te.refresh());
            }),
            (Te.getTween = function (e) {
              return e && E ? E.tween : q;
            }),
            (Te.setPositions = function (e, t) {
              ie &&
                ((W += e - P),
                (H += t - e - L),
                ae === St && Te.adjustPinSpacing(t - e - L)),
                (Te.start = P = e),
                (Te.end = O = t),
                (L = t - e),
                Te.update();
            }),
            (Te.adjustPinSpacing = function (e) {
              if (U) {
                var t = U.indexOf(he.d) + 1;
                (U[t] = parseFloat(U[t]) + e + kt),
                  (U[1] = parseFloat(U[1]) + e + kt),
                  Rt(U);
              }
            }),
            (Te.disable = function (e, t) {
              if (
                Te.enabled &&
                (!1 !== e && Te.revert(!0, !0),
                (Te.enabled = Te.isActive = !1),
                t || (q && q.pause()),
                (Z = 0),
                n && (n.uncache = 1),
                Se && pb(ScrollTrigger, "refreshInit", Se),
                V && (V.pause(), E.tween && E.tween.kill() && (E.tween = 0)),
                !me)
              ) {
                for (var r = At.length; r--; )
                  if (At[r].scroller === be && At[r] !== Te) return;
                pb(be, "resize", Db), pb(be, "scroll", Bb);
              }
            }),
            (Te.kill = function (e, t) {
              Te.disable(e, t), q && !t && q.kill(), a && delete Bt[a];
              var r = At.indexOf(Te);
              0 <= r && At.splice(r, 1),
                r === it && 0 < Lt && it--,
                (r = 0),
                At.forEach(function (e) {
                  return e.scroller === Te.scroller && (r = 1);
                }),
                r || ut || (Te.scroll.rec = 0),
                C &&
                  ((C.scrollTrigger = null),
                  e && C.revert({ kill: !1 }),
                  t || C.kill()),
                A &&
                  [A, B, D, I].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                pt === Te && (pt = 0),
                ie &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  At.forEach(function (e) {
                    return e.pin === ie && r++;
                  }),
                  r || (n.spacer = 0)),
                S.onKill && S.onKill(Te);
            }),
            Te.enable(!1, !1),
            i && i(Te),
            C && C.add && !L
              ? He.delayedCall(0.01, function () {
                  return P || O || Te.refresh();
                }) &&
                (L = 0.01) &&
                (P = O = 0)
              : Te.refresh(),
            ie &&
              (function _queueRefreshAll() {
                if (ft !== Dt) {
                  var e = (ft = Dt);
                  requestAnimationFrame(function () {
                    return e === Dt && It(!0);
                  });
                }
              })();
        } else this.update = this.refresh = this.kill = Aa;
      }),
      (ScrollTrigger.register = function register(e) {
        return (
          s ||
            ((He = e || Da()),
            Ca() && window.document && ScrollTrigger.enable(),
            (s = vt)),
          s
        );
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ot[t] = e[t];
        return Ot;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (vt = 0),
          At.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          pb(Je, "wheel", Bb),
          pb(je, "scroll", Bb),
          clearInterval(u),
          pb(je, "touchcancel", Aa),
          pb(Ge, "touchstart", Aa),
          nb(pb, je, "pointerdown,touchstart,mousedown", ya),
          nb(pb, je, "pointerup,touchend,mouseup", za),
          c.kill(),
          Ja(pb);
        for (var e = 0; e < ze.length; e += 3)
          qb(pb, ze[e], ze[e + 1]), qb(pb, ze[e], ze[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Je = window),
          (je = document),
          (qe = je.documentElement),
          (Ge = je.body),
          He &&
            ((et = He.utils.toArray),
            (tt = He.utils.clamp),
            (lt = He.core.context || Aa),
            (st = He.core.suppressOverwrites || Aa),
            (x = Je.history.scrollRestoration || "auto"),
            He.core.globals("ScrollTrigger", ScrollTrigger),
            Ge))
        ) {
          (vt = 1),
            E.register(He),
            (ScrollTrigger.isTouch = E.isTouch),
            (k =
              E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            ob(Je, "wheel", Bb),
            (l = [Je, je, qe, Ge]),
            He.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = He.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                He.addEventListener("matchMediaInit", function () {
                  return Kb();
                }),
                He.addEventListener("matchMediaRevert", function () {
                  return Jb();
                }),
                He.addEventListener("matchMedia", function () {
                  It(0, 1), W("matchMedia");
                }),
                He.matchMedia("(orientation: portrait)", function () {
                  return Cb(), Cb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Cb(),
            ob(je, "scroll", Bb);
          var e,
            t,
            r = Ge.style,
            n = r.borderTopStyle,
            o = He.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = Mt(Ge),
              Ke.m = Math.round(e.top + Ke.sc()) || 0,
              Xe.m = Math.round(e.left + Xe.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(Ab, 250),
              He.delayedCall(0.5, function () {
                return (dt = 0);
              }),
              ob(je, "touchcancel", Aa),
              ob(Ge, "touchstart", Aa),
              nb(ob, je, "pointerdown,touchstart,mousedown", ya),
              nb(ob, je, "pointerup,touchend,mouseup", za),
              f = He.utils.checkPrefix("transform"),
              V.push(f),
              s = gt(),
              c = He.delayedCall(0.2, It).pause(),
              g = [
                je,
                "visibilitychange",
                function () {
                  var e = Je.innerWidth,
                    t = Je.innerHeight;
                  je.hidden ? ((p = e), (d = t)) : (p === e && d === t) || Db();
                },
                je,
                "DOMContentLoaded",
                It,
                Je,
                "load",
                It,
                Je,
                "resize",
                Db,
              ],
              Ja(ob),
              At.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < ze.length;
            t += 3
          )
            qb(pb, ze[t], ze[t + 1]), qb(pb, ze[t], ze[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (ct = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Ab, t)),
          "ignoreMobileResize" in e &&
            (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ja(pb) || Ja(ob, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = ze.indexOf(r),
          o = Ea(r);
        ~n && ze.splice(n, o ? 6 : 2),
          t && (o ? Fe.unshift(Je, t, Ge, t, qe, t) : Fe.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        At.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Ka(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? mt : yt] * t || 0;
        return r
          ? 0 < n.right - o && n.left + o < Je.innerWidth
          : 0 < n.bottom - o && n.top + o < Je.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Ka(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? mt : yt],
          i =
            null == t
              ? o / 2
              : t in I
              ? I[t] * o
              : ~t.indexOf("%")
              ? (parseFloat(t) * o) / 100
              : parseFloat(t) || 0;
        return r ? (n.left + i) / Je.innerWidth : (n.top + i) / Je.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (At.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = Y.killAll || [];
          (Y = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s ||
      ScrollTrigger.register(He) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (Q.version = "3.11.4"),
    (Q.saveStyles = function (e) {
      return e
        ? et(e).forEach(function (e) {
            if (e && e.style) {
              var t = H.indexOf(e);
              0 <= t && H.splice(t, 5),
                H.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  He.core.getCache(e),
                  lt()
                );
            }
          })
        : H;
    }),
    (Q.revert = function (e, t) {
      return Kb(!e, t);
    }),
    (Q.create = function (e, t) {
      return new Q(e, t);
    }),
    (Q.refresh = function (e) {
      return e ? Db() : (s || Q.register()) && It(!0);
    }),
    (Q.update = function (e) {
      return ++ze.cache && j(!0 === e ? 2 : 0);
    }),
    (Q.clearScrollMemory = Lb),
    (Q.maxScroll = function (e, t) {
      return Ia(e, t ? Xe : Ke);
    }),
    (Q.getScrollFunc = function (e, t) {
      return K(J(e), t ? Xe : Ke);
    }),
    (Q.getById = function (e) {
      return Bt[e];
    }),
    (Q.getAll = function () {
      return At.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (Q.isScrolling = function () {
      return !!ht;
    }),
    (Q.snapDirectional = lb),
    (Q.addEventListener = function (e, t) {
      var r = Y[e] || (Y[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (Q.removeEventListener = function (e, t) {
      var r = Y[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (Q.batch = function (e, t) {
      function Io(e, t) {
        var r = [],
          n = [],
          o = He.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && La(t[r]) && "onRefreshInit" !== r
            ? Io(0, t[r])
            : t[r];
      return (
        La(a) &&
          ((a = a()),
          ob(Q, "refresh", function () {
            return (a = t.batchMax());
          })),
        et(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(Q.create(t));
        }),
        n
      );
    });
  function hc(e, t, r, n) {
    return (
      n < t ? e(n) : t < 0 && e(0),
      n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    );
  }
  function ic(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          !0 === t
            ? "auto"
            : t
            ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === qe && ic(Ge, t);
  }
  function kc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || He.core.getCache(i),
      s = gt();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== Ge &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!te[(t = eb(i)).overflowY] && !te[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !Ea(i) &&
        (te[(t = eb(i)).overflowY] || te[t.overflowX])),
        (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function lc(e, t, r, n) {
    return E.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && kc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && ob(je, E.eventTypes[0], ne, !1, !0);
      },
      onDisable: function onDisable() {
        return pb(je, E.eventTypes[0], ne, !0);
      },
    });
  }
  function pc(e) {
    function Ep() {
      return (o = !1);
    }
    function Hp() {
      (i = Ia(p, Ke)),
        (S = tt(k ? 1 : 0, i)),
        f && (T = tt(0, Ia(p, Xe))),
        (l = Dt);
    }
    function Ip() {
      (h._gsap.y = Ba(parseFloat(h._gsap.y) + v.offset) + "px"),
        (h.style.transform =
          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
          parseFloat(h._gsap.y) +
          ", 0, 1)"),
        (v.offset = v.cacheID = 0);
    }
    function Op() {
      Hp(),
        a.isActive() &&
          a.vars.scrollY > i &&
          (v() > i ? a.progress(1) && v(i) : a.resetTo("scrollY", i));
    }
    Na(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      p = J(e.target) || qe,
      d = He.core.globals().ScrollSmoother,
      g = d && d.get(),
      h =
        k &&
        ((e.content && J(e.content)) ||
          (g && !1 !== e.content && !g.smooth() && g.content())),
      v = K(p, Ke),
      b = K(p, Xe),
      m = 1,
      y =
        (E.isTouch && Je.visualViewport
          ? Je.visualViewport.scale * Je.visualViewport.width
          : Je.outerWidth) / Je.innerWidth,
      x = 0,
      w = La(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      _ = lc(p, e.type, !0, r),
      T = Aa,
      S = Aa;
    return (
      h && He.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (k &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(Ep);
                var e = Ba(n.deltaY / 2),
                  t = S(v.v - e);
                if (h && t !== v.v + v.offset) {
                  v.offset = t - v.v;
                  var r = Ba((parseFloat(h && h._gsap.y) || 0) - v.offset);
                  (h.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    r +
                    ", 0, 1)"),
                    (h._gsap.y = r + "px"),
                    (v.cacheID = ze.cache),
                    j();
                }
                return !0;
              }
              v.offset && Ip(), (o = !0);
            })()) ||
          (1.05 < m && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        var e = m;
        (m = Ba(((Je.visualViewport && Je.visualViewport.scale) || 1) / y)),
          a.pause(),
          e !== m && ic(p, 1.01 < m || (!f && "x")),
          (c = b()),
          (u = v()),
          Hp(),
          (l = Dt);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((v.offset && Ip(), t)) {
            ze.cache++;
            var r,
              n,
              o = w();
            f &&
              ((n = (r = b()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= hc(b, r, n, Ia(p, Xe))),
              (a.vars.scrollX = T(n))),
              (n = (r = v()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= hc(v, r, n, Ia(p, Ke))),
              (a.vars.scrollY = S(n)),
              a.invalidate().duration(o).play(0.01),
              ((k && a.vars.scrollY >= i) || i - 1 <= r) &&
                He.to({}, { onUpdate: Op, duration: o });
          } else s.restart(!0);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < gt() - x && ((l = 0), (x = gt()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if (
          (Dt !== l && Hp(),
          t && f && b(T(n[2] === t ? c + (e.startX - e.x) : b() + t - n[1])),
          r)
        ) {
          v.offset && Ip();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : v() + r - o[1],
            s = S(a);
          i && a !== s && (u += s - a), v(s);
        }
        (r || t) && j();
      }),
      (e.onEnable = function () {
        ic(p, !f && "x"),
          Q.addEventListener("refresh", Op),
          ob(Je, "resize", Op),
          v.smooth &&
            ((v.target.style.scrollBehavior = "auto"),
            (v.smooth = b.smooth = !1)),
          _.enable();
      }),
      (e.onDisable = function () {
        ic(p, !0),
          pb(Je, "resize", Op),
          Q.removeEventListener("refresh", Op),
          _.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new E(e)).iOS = k) && !v() && v(1),
      k && He.ticker.add(Aa),
      (s = n._dc),
      (a = He.to(n, {
        ease: "power4",
        paused: !0,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var ee,
    te = { auto: 1, scroll: 1 },
    re = /(input|label|select|textarea)/i,
    ne = function _captureInputs(e) {
      var t = re.test(e.target.tagName);
      (t || ee) && ((e._gsapAllow = !0), (ee = t));
    };
  (Q.sort = function (e) {
    return At.sort(
      e ||
        function (e, t) {
          return (
            -1e6 * (e.vars.refreshPriority || 0) +
            e.start -
            (t.start + -1e6 * (t.vars.refreshPriority || 0))
          );
        }
    );
  }),
    (Q.observe = function (e) {
      return new E(e);
    }),
    (Q.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill();
      var t = e instanceof E ? e : pc(e);
      return v && v.target === t.target && v.kill(), Ea(t.target) && (v = t), t;
    }),
    (Q.core = {
      _getVelocityProp: L,
      _inputObserver: lc,
      _scrollers: ze,
      _proxies: Fe,
      bridge: {
        ss: function ss() {
          ht || W("scrollStart"), (ht = gt());
        },
        ref: function ref() {
          return nt;
        },
      },
    }),
    Da() && He.registerPlugin(Q),
    (e.ScrollTrigger = Q),
    (e.default = Q);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
