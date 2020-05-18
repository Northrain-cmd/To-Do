!(function (e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var i in e)
          t.d(
            r,
            i,
            function (n) {
              return e[n];
            }.bind(null, i)
          );
      return r;
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 6));
})([
  function (e, n, t) {
    "use strict";
    e.exports = function (e) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var t = (function (e, n) {
              var t = e[1] || "",
                r = e[3];
              if (!r) return t;
              if (n && "function" == typeof btoa) {
                var i =
                    ((o = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(o))))),
                    (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(s, " */")),
                  a = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [t].concat(a).concat([i]).join("\n");
              }
              var o, c, s;
              return [t].join("\n");
            })(n, e);
            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
          }).join("");
        }),
        (n.i = function (e, t, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (r)
            for (var a = 0; a < this.length; a++) {
              var o = this[a][0];
              null != o && (i[o] = !0);
            }
          for (var c = 0; c < e.length; c++) {
            var s = [].concat(e[c]);
            (r && i[s[0]]) ||
              (t &&
                (s[2]
                  ? (s[2] = "".concat(t, " and ").concat(s[2]))
                  : (s[2] = t)),
              n.push(s));
          }
        }),
        n
      );
    };
  },
  function (e, n, t) {
    var r = t(2),
      i = t(3);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(i, a);
    e.exports = i.locals || {};
  },
  function (e, n, t) {
    "use strict";
    var r,
      i = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      a = (function () {
        var e = {};
        return function (n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              t instanceof window.HTMLIFrameElement
            )
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            e[n] = t;
          }
          return e[n];
        };
      })(),
      o = [];
    function c(e) {
      for (var n = -1, t = 0; t < o.length; t++)
        if (o[t].identifier === e) {
          n = t;
          break;
        }
      return n;
    }
    function s(e, n) {
      for (var t = {}, r = [], i = 0; i < e.length; i++) {
        var a = e[i],
          s = n.base ? a[0] + n.base : a[0],
          d = t[s] || 0,
          l = "".concat(s, " ").concat(d);
        t[s] = d + 1;
        var u = c(l),
          h = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== u
          ? (o[u].references++, o[u].updater(h))
          : o.push({ identifier: l, updater: p(h, n), references: 1 }),
          r.push(l);
      }
      return r;
    }
    function d(e) {
      var n = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var i = t.nc;
        i && (r.nonce = i);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          n.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(n);
      else {
        var o = a(e.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(n);
      }
      return n;
    }
    var l,
      u =
        ((l = []),
        function (e, n) {
          return (l[e] = n), l.filter(Boolean).join("\n");
        });
    function h(e, n, t, r) {
      var i = t
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = u(n, i);
      else {
        var a = document.createTextNode(i),
          o = e.childNodes;
        o[n] && e.removeChild(o[n]),
          o.length ? e.insertBefore(a, o[n]) : e.appendChild(a);
      }
    }
    function f(e, n, t) {
      var r = t.css,
        i = t.media,
        a = t.sourceMap;
      if (
        (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
        a &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var m = null,
      g = 0;
    function p(e, n) {
      var t, r, i;
      if (n.singleton) {
        var a = g++;
        (t = m || (m = d(n))),
          (r = h.bind(null, t, a, !1)),
          (i = h.bind(null, t, a, !0));
      } else
        (t = d(n)),
          (r = f.bind(null, t, n)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(t);
          });
      return (
        r(e),
        function (n) {
          if (n) {
            if (
              n.css === e.css &&
              n.media === e.media &&
              n.sourceMap === e.sourceMap
            )
              return;
            r((e = n));
          } else i();
        }
      );
    }
    e.exports = function (e, n) {
      (n = n || {}).singleton ||
        "boolean" == typeof n.singleton ||
        (n.singleton = i());
      var t = s((e = e || []), n);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < t.length; r++) {
            var i = c(t[r]);
            o[i].references--;
          }
          for (var a = s(e, n), d = 0; d < t.length; d++) {
            var l = c(t[d]);
            0 === o[l].references && (o[l].updater(), o.splice(l, 1));
          }
          t = a;
        }
      };
    };
  },
  function (e, n, t) {
    var r = t(0),
      i = t(4),
      a = t(5);
    (n = r(!1)).i(i),
      n.i(a),
      n.push([
        e.i,
        ':root{\n    --main-bg-color: #21D4FD;\n    --main-bg-image:linear-gradient(270deg, #21D4FD 0%, #B721FF 100%);\n    --items-bg-color:#DADADA;\n    --items-color:black;\n    --project-bg-color:lightcoral;\n    --sidebar-bg-color: #B721FF;\n}\nhtml{\n    min-height: 100vh;\n    font-family: \'Titillium Web\', sans-serif;\n    font-size: 24px;\n    background-color: var(--main-bg-color);\n    background-image: var(--main-bg-image);\n}\n\n.wrapper{\n    min-height: 100vh;\n}\n.firebaseui-form-actions{\n    display: flex !important;\n}\n#firebaseui-auth-container{\n    min-height: 90vh;\n    width: 80%;\n    left:10%;\n    position: absolute;\n    z-index: 999;\n    background-color: white;\n    margin: 0 auto;\n    text-align: center;\n}\n#firebaseui-auth-container h1{\n    font-size: 1em;\n}\n\n.content{\n    margin-left: initial;\n    position: relative;\n}\n.switch-toggle.switch-candy, .switch-light.switch-candy > span{\n    background-color: initial !important;\n}\n.project{\n    min-height:10vh;\n    background-color: var(--project-bg-color);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n    font-family: Arial;\n    \n}\n.taskCompleted{\n    opacity: .7;\n    background-color: #CCC !important;\n}\n.taskCompleted p{\n    text-decoration: line-through;\n}\n.pencil{\n    margin:0;\n    display:block;\n    transform: rotate(120deg);\n    font-size: .7em;\n    margin-bottom: 0.5%;\n    color: #80b8f0;\n}\n.Project-Title-text{\n    border: 1px solid white;\n    color:white;\n    background-color: #80b8f0;;\n    margin: 0;\n    font-size: 1em;\n}\n.toggle-sidebar{\n    margin: 0;\n    flex: 1;\n    margin-bottom: 2%;\n    font-size: 1.1em;\n    color: white;\n    border: none;\n    background-color: initial;\n    outline:currentColor  none medium;\n        \n   \n}\n.dark-mode{\n    display: flex;\n    flex-direction: row;\n    align-items:center;\n    justify-content: space-around;\n    margin-left: 7%;\n    font-size: 0.8em;\n    background-color: black;\n    color: white;\n    width:90%;\n    margin-bottom: 5%;\n}\n.completed{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 0.45em;\n    margin-right: 2%;\n    color: white;\n    margin-left: 1%;\n}\n.addNewItem{\n    -webkit-box-shadow: inset 10px 10px 58px -8px rgba(0,0,0,0.75);\n    -moz-box-shadow: inset 10px 10px 58px -8px rgba(0,0,0,0.75);\n    box-shadow: inset 10px 10px 58px -8px rgba(0,0,0,0.75);\n    display: flex;\n    flex-direction: column;\n    width:80%;\n    margin:0 auto;\n    padding: 5%;\n    margin-bottom: 5%;\n    display: none;\n    overflow: hidden;\n    background-color:#80b8f0 ;\n    z-index: 1;\n    position: fixed;\n    top: 10%;\n    left:5%;\n    \n}\n.taskAdded{\n    position: absolute;\n    right:5%;\n    top:1%;\n    background-color: green;\n    font-style: normal;\n    font-size: 0.7em;\n    opacity: 0;\n    display: inline-block;\n}\n@keyframes fadeIn{\n    0%{\n\n    }\n    50%{\n        opacity:1;\n        transform: scale(1.3);\n    }\n    100%{\n        opacity: 0;\n    }\n}\n@keyframes wrongShake{\n   \n    0%{\n        border: 2px solid red;\n        transform: translateX(0px);\n    }\n    10%{\n        transform:translateX(15px);\n    }\n    20%{\n        transform: translateX(0px);\n    }\n    30%{\n        transform:translateX(15px);\n    }\n    40%{\n        transform:translateX(0px);\n    }\n    50%{\n        transform:translateX(15px);\n    }\n    60%{\n        transform:translateX(0px);\n    }\n    70%{\n        transform:translateX(15px);\n    }\n    80%{\n        transform:translateX(0px);\n    }\n    90%{\n        transform:translateX(15px);\n    }\n    100%{\n        transform: translateX(0px);\n        border: 2px solid red;\n    }\n}\n#titleInput{\n    display: inline-block;\n}\n.addNewItem > *{\n    padding: 1% 0;\n    margin-left: 10%;\n    color:white;\n}\n.addNewItem label{\n    display: flex;\n    flex-direction: column;\n}\n.addNewItem input,button{\n    width:80%;\n}\n.addNewItem button{\n    margin-top: 2%;\n    background-color: green;\n    border: none;\n    color: white;\n}\n.editItem{\n    -webkit-box-shadow: inset 10px 10px 58px -8px rgba(0,0,0,0.75);\n    -moz-box-shadow: inset 10px 10px 58px -8px rgba(0,0,0,0.75);\n    box-shadow: inset 10px 10px 58px -8px rgba(0,0,0,0.75);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    width:90%;\n    margin:0 auto;\n    padding: 1%;\n    overflow: hidden;\n    background-color:#80b8f0 ;\n    z-index: 1;\n    position: fixed;\n    top:10%;\n    left:5%;\n    display: none;\n}\n.editItem >*{\n    color: white;\n}\n.editItem label{\n    display: flex;\n    flex-direction: column;\n}\n.editItem label{\n    width:80%;\n    overflow: hidden;\n}\n.editItem button{\n    margin-top: 2%;\n    background-color: green;\n    border: none;\n    color: white;\n}\n\n\n#fold-sidebar{\n    width: 15%;\n    font-size: 2em;\n    color:white;\n    border: none;\n    background-color: initial;\n    position: fixed;\n    top:50%;\n    padding-left: 8%;\n    right:50%;\n    z-index: 1000;\n    padding-right: 0;\n    align-self: flex-end;\n}\ninput[type="button"]{\n    outline:none;\n }\n input[type="button"]::-moz-focus-inner {\n    border: none;\n }\n  \n\n.Project-Title{\n    flex: 5;\n    overflow-wrap: break-word;\n    max-width: 90%;\n    margin:0;\n    margin-left: auto;\n    font-size: 1em;\n    color: white;\n    border: none;\n    appearance: none;\n    overflow: hidden;\n    word-break: normal;\n    -webkit-appearance: none;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n}\n.deleteProjectDiv{\n    display: flex;\n    flex-direction: row;\n}\n.deleteProjectDiv a{\n    flex:9;\n}\n.deleteProject{\n    flex: 1;\n    background-color: initial;\n    border-radius: 20%;\n    font-size: 0.9em;\n    border: none;\n    font-weight: 900;\n    color:black;\n}\n\n\n\n.to-do-list{\n    min-height:90%;\n    width:90%;\n    margin:0 auto;\n    display: flex;\n    flex-direction: column;\n    z-index: 1;\n    margin-bottom: 12vh;\n}\n.to-do-item{\n    width:100%;\n    background-color: var(--items-bg-color);\n    color: var(--items-color);\n    border: 1px solid white;\n    min-height: 12vh;\n    margin-top: 4%;\n    position: relative;\n    z-index: 1;\n}\n.wrap{\n    min-height: 12vh;\n    width:80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n.first-row{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 10vh;\n    margin-bottom: 2%;\n}\n.description{\n    display: none;\n    font-size: 0.7em;\n    word-wrap: break-word;\n    margin: 0;\n    justify-content: space-between;\n    align-items: center;\n}\n.description p{\n    margin:2% 0;\n    margin-left: 10%;\n    width: 90%;\n}\n.description span{\n    margin-bottom: 5%;\n    color:darkslategray;\n    margin-left: 5%;\n    font-size: 2em;\n}\n.fold-item{\n    margin-bottom: 5%;\n    display: none;\n    justify-content: center;\n    align-items: center;\n}\n.fold-item button{\n    background-color: initial;\n    border: none;\n    margin-left: 30%;\n    color: darkslategrey;\n    width: 80%;\n    height: 80%;\n}\n.second-row{\n    margin-top: auto;\n    margin-bottom: 1%;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.fa-clock{\n    margin-left: 6%;\n    margin-right: 5%;\n}\n.first{\n    margin-top: 2%;\n}\n.add{\n    min-height: 10vh;\n    z-index: 9;\n    width:10%;\n    position: fixed;\n    left:40%;\n    bottom: 0;\n    background-color: inherit;\n    text-align: center;\n    \n}\n.add i{\n    z-index: 9;\n    font-size: 3em;\n    margin: 0;\n    margin-right: 5%;\n    margin-bottom: 1%;\n    padding: 0;\n    color: green;\n}\n.delete-button{\n    color: red;\n    font-size: 1em;\n    margin-right: 1%;\n}\n.title{\n    font-size: 0.7em;\n    font-weight: 400;\n    line-height: 0.9;\n    margin: 0;\n    width: 65%;\n    word-wrap: break-word;\n    \n\n}\n.fa-clock{\n    font-size: 0.9em;\n    color:purple;\n}\n.due-date{\n    font-size: 0.7em;\n    font-weight: 400;\n    margin: 0;\n    margin-right: 3%;\n}\n.date{\n   display: flex;\n   flex-direction: row;\n   align-items: center;\n}\n.fa-exclamation-circle{\n    font-size: 0.8em;\n}\n.container{\n    position: absolute;\n    right: 5%;\n    top:20%;\n    \n}\n.new-project-form{\n    font-size: 0.8em;\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 5%;\n    min-height: 10vh;\n}\n.new-project{\n    width:60%;\n}\n.new-project-submit{\n    width: 40%;\n    background-color: #80b8f0;\n    border: initial;\n    color: white;\n}\n.user{\n    margin: 0;\n    margin-top: auto;\n    font-size: 0.7em;\n    text-align: center;\n    color:white;\n    visibility: hidden;\n}\n#username{\n    color:lightcoral;\n}\n.auth{\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    font-size: 0.7em;\n   \n}\n.auth > *{\n    flex: 1;\n    border: 0;\n    padding: 0.5em;\n    margin: 2px;\n    color: white;\n}\n#loginBtn{\n    background-color: #2196F3;\n    display:none;\n}\n#signupBtn{\n    background-color: green;\n}\n#logoutBtn{\n    background-color: darkslategray;\n    display: none;\n}\n/* Checbox Styling */\n.container {\n    display: block;\n    padding-left: 35px;\n    cursor: pointer;\n    font-size: 1em;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  /* Hide the browser\'s default checkbox */\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n  \n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    right: 5%;\n    top:20%;\n    height: 38px;\n    width: 38px;\n    background-color: #eee;\n    border-radius: 50%;\n  }\n  \n  /* On mouse-over, add a grey background color */\n  .container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n  /* When the checkbox is checked, add a blue background */\n  .container input:checked ~ .checkmark {\n    background-color: #2196F3;\n  }\n \n  \n  /* Create the checkmark/indicator (hidden when not checked) */\n  .checkmark:after {\n    content: "";\n    position: absolute;\n    display: none;\n  }\n  \n  /* Show the checkmark when checked */\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n  /* Style the checkmark/indicator */\n  .container .checkmark:after {\n    left: 15px;\n    top:5px;\n    width: 7px;\n    height: 20px;\n    border: solid white;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n  }\n  /* Checbox Styling Ended */\n\n  /* Sidebar */\n  .sidebar {\n    margin: 0;\n    padding: 0;\n    max-width: 70%;\n    z-index: 990;\n    flex-direction: column;\n    background-color: var(--sidebar-bg-color);/* #B721FF*/\n    position: fixed;\n    height: 100%;\n    overflow: auto ;\n    display: none;\n  }\n  \n  /* Sidebar links */\n  .sidebar a {\n    word-wrap: break-word;\n    display: block;\n    color: white;\n    min-height: 100%;\n    text-decoration: none;\n  }\n  .sidebar div{\n    padding:7px;\n  }\n  \n  /* Active/current link */\n  .sidebar a.active {\n    background-color: lightcoral;\n    color: white;\n  }\n  \n  /* Links on mouse-over */\n  .sidebar a:hover:not(.active) {\n    background-color:#80b8f0 ;\n    color: white;\n  }\n  @media only screen and (min-width:300px){\n    html{\n        font-size: 30px;\n    }\n  }\n  @media only screen and (min-width:768px){\n    html{\n        font-size: 40px;\n    }\n    .to-do-list{\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: flex-start;\n        flex-wrap: wrap;\n    }\n    .to-do-list:first-child{\n        margin:0;\n    }\n    .to-do-item{\n        margin-top: 2%;\n        width: 45%;\n        min-height: 15vh;\n    }\n    .addNewItem{\n        padding:1%;\n        margin-left: 4%;\n    }\n    .addNewItem > *{\n        padding:1%;\n    }\n    .addNewItem input{\n        width:86%;\n    }\n    .wrap{\n        min-height: 15vh;\n    }\n    .add{\n        left:45%;\n    }\n  }\n  @media only screen and (min-width:1000px){\n      html{\n          font-size: 32px;\n      }\n      .editItem{\n        width:30%;\n        left:41%;\n        top:12%;\n        padding: 1%;\n      }\n      .addNewItem{\n          width:30%;\n          left:41%;\n          top:12%;\n          padding: 1%;\n      }\n      .content{\n          margin-left: 25%;\n      }\n      #fold-sidebar{\n          display: none;\n      }\n      .sidebar{\n            margin: 0;\n            padding: 0;\n            width: 25%;\n            background-color: inherit;\n            position: fixed;\n            height: 100%;\n            overflow: auto;\n            display: none;\n          display: flex;\n          flex-direction: column;\n      }\n      .toggle-sidebar{\n          display: none;\n      }\n      .Project-Title{\n          margin: 0;\n      }\n  .add{\n     width: 80%;\n     z-index: 10;\n     left: initial;\n\n  }\n  .add i{\n      margin-right: 10%;\n      font-size: 2.5em;\n  } \n}\n@-moz-document url-prefix() {\n    .toggle-sidebar {\n      font-size: 1.7em;\n    }\n  }',
        "",
      ]),
      (e.exports = n);
  },
  function (e, n, t) {
    (n = t(0)(!1)).push([
      e.i,
      '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',
      "",
    ]),
      (e.exports = n);
  },
  function (e, n, t) {
    (n = t(0)(!1)).push([
      e.i,
      '.cl-switch input[type="checkbox"] {\n  display: none;\n  visibility: hidden;\n}\n\n.cl-switch .switcher {\n  display: inline-block;\n  border-radius: 100px;\n  width: 35px;\n  height: 15px;\n  background-color: #ccc;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.cl-switch .switcher:before {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  margin-top: -2.5px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-right: 0;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -ms-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.cl-switch .switcher:active:before {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 10px rgba(63, 81, 181, 0.3);\n  transition: all, 0.1s;\n}\n\n.cl-switch .label {\n  font-family: "Roboto", sans-serif;\n  cursor: pointer;\n  vertical-align: middle;\n  margin: 0 5px;\n}\n\n.cl-switch input[type="checkbox"]:checked + .switcher {\n  background-color: #8591d5;\n}\n\n.cl-switch input[type="checkbox"]:checked + .switcher:before {\n  right: 100%;\n  margin-right: -20px;\n  background-color: #3f51b5;\n}\n\n.cl-switch [disabled]:not([disabled="false"]) + .switcher {\n  background: #ccc !important;\n}\n\n.cl-switch [disabled]:not([disabled="false"]) + .switcher:active:before {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2) !important;\n}\n\n.cl-switch [disabled]:not([disabled="false"]) + .switcher:before {\n  background-color: #e2e2e2 !important;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2) !important;\n}\n\n.cl-switch.cl-switch-large .switcher {\n  width: 52px;\n  height: 22px;\n}\n\n.cl-switch.cl-switch-large .switcher:before {\n  width: 30px;\n  height: 30px;\n  margin-top: -4px;\n}\n\n.cl-switch.cl-switch-large .label {\n  font-size: 18px;\n}\n\n.cl-switch.cl-switch-large input[type="checkbox"]:checked + .switcher:before {\n  margin-right: -30px;\n}\n\n.cl-switch.cl-switch-xlarge .switcher {\n  width: 87px;\n  height: 37px;\n}\n\n.cl-switch.cl-switch-xlarge .switcher:before {\n  width: 50px;\n  height: 50px;\n  margin-top: -6px;\n}\n\n.cl-switch.cl-switch-xlarge .label {\n  font-size: 24px;\n}\n\n.cl-switch.cl-switch-xlarge input[type="checkbox"]:checked + .switcher:before {\n  margin-right: -50px;\n}\n\n.cl-switch.cl-switch-black input[type="checkbox"]:checked + .switcher {\n  background-color: #676767;\n}\n\n.cl-switch.cl-switch-black input[type="checkbox"]:checked + .switcher:before {\n  background-color: #343434;\n}\n\n.cl-switch.cl-switch-black .switcher:active:before {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 10px rgba(52, 52, 52, 0.3);\n}\n\n.cl-switch.cl-switch-red input[type="checkbox"]:checked + .switcher {\n  background-color: #ffcece;\n}\n\n.cl-switch.cl-switch-red input[type="checkbox"]:checked + .switcher:before {\n  background-color: #ff6868;\n}\n\n.cl-switch.cl-switch-red .switcher:active:before {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 10px rgba(255, 104, 104, 0.3);\n}\n\n.cl-switch.cl-switch-green input[type="checkbox"]:checked + .switcher {\n  background-color: #77e4c0;\n}\n\n.cl-switch.cl-switch-green input[type="checkbox"]:checked + .switcher:before {\n  background-color: #29cc97;\n}\n\n.cl-switch.cl-switch-green .switcher:active:before {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 10px rgba(41, 204, 151, 0.3);\n}\n\n.cl-switch.cl-switch-orange input[type="checkbox"]:checked + .switcher {\n  background-color: #ffc166;\n}\n\n.cl-switch.cl-switch-orange input[type="checkbox"]:checked + .switcher:before {\n  background-color: #ff9800;\n}\n\n.cl-switch.cl-switch-orange .switcher:active:before {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6), 0 0 0 10px rgba(255, 152, 0, 0.3);\n}\n\n/* ---------------------------------------------\n------------------[IOS style]----------------------------\n --------------------------------------------- */\n\n.cl-switch.ios .switcher {\n  width: 45px;\n  height: 24px;\n  background-color: #fff;\n  border: 1px solid #d3d3d5;\n  box-shadow: 0 0 0 0 #4bd964 inset;\n  -webkit-transition: all 0.4s ease;\n  -moz-transition: all 0.4s ease;\n  -ms-transition: all 0.4s ease;\n  -o-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.cl-switch.ios .switcher:before {\n  width: 24px;\n  height: 24px;\n  background-color: #fff;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  margin-top: 0;\n  top: -1px;\n  right: -1px;\n  margin-right: 0;\n  border: 1px solid #d3d3d5;\n  -webkit-transition: all 0.4s ease;\n  -moz-transition: all 0.4s ease;\n  -ms-transition: all 0.4s ease;\n  -o-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n}\n\n.cl-switch.ios input[type="checkbox"]:checked + .switcher {\n  background-color: #fff;\n  box-shadow: 0 0 0 20px #4bd964 inset;\n}\n\n.cl-switch.ios input[type="checkbox"]:checked + .switcher:before {\n  right: 100%;\n  margin-right: -22px;\n  background-color: #fff;\n}\n\n.cl-switch.ios [disabled]:not([disabled="false"]) + .switcher {\n  background: #ccc !important;\n}\n\n.cl-switch.ios [disabled]:not([disabled="false"]) + .switcher:active:before {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2) !important;\n}\n\n.cl-switch.ios [disabled]:not([disabled="false"]) + .switcher:before {\n  background-color: #e2e2e2 !important;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2) !important;\n}\n\n.cl-switch.ios.cl-switch-large .switcher {\n  width: 62px;\n  height: 34px;\n}\n\n.cl-switch.ios.cl-switch-large .switcher:before {\n  width: 34px;\n  height: 34px;\n}\n\n.cl-switch.ios.cl-switch-large .label {\n  font-size: 18px;\n}\n\n.cl-switch.ios.cl-switch-large input[type="checkbox"]:checked + .switcher:before {\n  margin-right: -30px;\n}\n\n.cl-switch.ios.cl-switch-xlarge .switcher {\n  width: 80px;\n  height: 40px;\n}\n\n.cl-switch.ios.cl-switch-xlarge .switcher:before {\n  width: 40px;\n  height: 40px;\n  margin-top: 0;\n}\n\n.cl-switch.ios.cl-switch-xlarge .label {\n  font-size: 24px;\n}\n\n.cl-switch.ios.cl-switch-xlarge input[type="checkbox"]:checked + .switcher:before {\n  margin-right: -39px;\n}\n\n.cl-switch.ios.cl-switch-black .switcher {\n  box-shadow: 0 0 0 0 #343434 inset;\n}\n\n.cl-switch.ios.cl-switch-black input[type="checkbox"]:checked + .switcher {\n  box-shadow: 0 0 0 20px #343434 inset;\n  background: #ffffff;\n}\n\n.cl-switch.ios.cl-switch-black input[type="checkbox"]:checked + .switcher:before {\n  background-color: #fff;\n}\n\n.cl-switch.ios.cl-switch-black .switcher:active:before {\n  box-shadow: none;\n}\n\n.cl-switch.ios.cl-switch-red .switcher {\n  box-shadow: 0 0 0 0 #ff6868 inset;\n}\n\n.cl-switch.ios.cl-switch-red input[type="checkbox"]:checked + .switcher {\n  box-shadow: 0 0 0 20px #ff6868 inset;\n  background: #ffffff;\n}\n\n.cl-switch.ios.cl-switch-red input[type="checkbox"]:checked + .switcher:before {\n  background-color: #fff;\n}\n\n.cl-switch.ios.cl-switch-red .switcher:active:before {\n  box-shadow: none;\n}\n\n.cl-switch.ios.cl-switch-green .switcher {\n  box-shadow: 0 0 0 0 #29cc97 inset;\n}\n\n.cl-switch.ios.cl-switch-green input[type="checkbox"]:checked + .switcher {\n  box-shadow: 0 0 0 20px #29cc97 inset;\n  background: #ffffff;\n}\n\n.cl-switch.ios.cl-switch-green input[type="checkbox"]:checked + .switcher:before {\n  background-color: #fff;\n}\n\n.cl-switch.ios.cl-switch-green .switcher:active:before {\n  box-shadow: none;\n}\n\n.cl-switch.ios.cl-switch-orange .switcher {\n  box-shadow: 0 0 0 0 #ff9800 inset;\n}\n\n.cl-switch.ios.cl-switch-orange input[type="checkbox"]:checked + .switcher {\n  box-shadow: 0 0 0 20px #ff9800 inset;\n  background: #ffffff;\n}\n\n.cl-switch.ios.cl-switch-orange input[type="checkbox"]:checked + .switcher:before {\n  background-color: #fff;\n}\n\n.cl-switch.ios.cl-switch-orange .switcher:active:before {\n  box-shadow: none;\n}\n',
      "",
    ]),
      (e.exports = n);
  },
  function (e, n, t) {
    "use strict";
    t.r(n);
    t(1),
      (function () {
        const e = document.querySelector(".sidebar"),
          n = document.querySelector(".toggle-sidebar"),
          t = document.getElementById("fold-sidebar");
        n.addEventListener("click", () => {
          (e.style.display = "flex"), e.classList.add("active");
        }),
          t.addEventListener("click", () => {
            (e.style.display = "none"), e.classList.remove("active");
          });
      })();
    function r(e, n) {
      if (n.length < e)
        throw new TypeError(
          e +
            " argument" +
            (e > 1 ? "s" : "") +
            " required, but only " +
            n.length +
            " present"
        );
    }
    function i(e) {
      r(1, arguments);
      var n = Object.prototype.toString.call(e);
      return e instanceof Date ||
        ("object" == typeof e && "[object Date]" === n)
        ? new Date(e.getTime())
        : "number" == typeof e || "[object Number]" === n
        ? new Date(e)
        : (("string" != typeof e && "[object String]" !== n) ||
            "undefined" == typeof console ||
            (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
            ),
            console.warn(new Error().stack)),
          new Date(NaN));
    }
    function a(e) {
      r(1, arguments);
      var n = i(e);
      return !isNaN(n);
    }
    var o = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    };
    function c(e) {
      return function (n) {
        var t = n || {},
          r = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[r] || e.formats[e.defaultWidth];
      };
    }
    var s = {
        date: c({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: c({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: c({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      },
      d = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
    function l(e) {
      return function (n, t) {
        var r,
          i = t || {};
        if (
          "formatting" === (i.context ? String(i.context) : "standalone") &&
          e.formattingValues
        ) {
          var a = e.defaultFormattingWidth || e.defaultWidth,
            o = i.width ? String(i.width) : a;
          r = e.formattingValues[o] || e.formattingValues[a];
        } else {
          var c = e.defaultWidth,
            s = i.width ? String(i.width) : e.defaultWidth;
          r = e.values[s] || e.values[c];
        }
        return r[e.argumentCallback ? e.argumentCallback(n) : n];
      };
    }
    function u(e) {
      return function (n, t) {
        var r = String(n),
          i = t || {},
          a = i.width,
          o = (a && e.matchPatterns[a]) || e.matchPatterns[e.defaultMatchWidth],
          c = r.match(o);
        if (!c) return null;
        var s,
          d = c[0],
          l = (a && e.parsePatterns[a]) || e.parsePatterns[e.defaultParseWidth];
        return (
          (s =
            "[object Array]" === Object.prototype.toString.call(l)
              ? (function (e, n) {
                  for (var t = 0; t < e.length; t++) if (n(e[t])) return t;
                })(l, function (e) {
                  return e.test(d);
                })
              : (function (e, n) {
                  for (var t in e) if (e.hasOwnProperty(t) && n(e[t])) return t;
                })(l, function (e) {
                  return e.test(d);
                })),
          (s = e.valueCallback ? e.valueCallback(s) : s),
          {
            value: (s = i.valueCallback ? i.valueCallback(s) : s),
            rest: r.slice(d.length),
          }
        );
      };
    }
    var h,
      f = {
        code: "en-US",
        formatDistance: function (e, n, t) {
          var r;
          return (
            (t = t || {}),
            (r =
              "string" == typeof o[e]
                ? o[e]
                : 1 === n
                ? o[e].one
                : o[e].other.replace("{{count}}", n)),
            t.addSuffix ? (t.comparison > 0 ? "in " + r : r + " ago") : r
          );
        },
        formatLong: s,
        formatRelative: function (e, n, t, r) {
          return d[e];
        },
        localize: {
          ordinalNumber: function (e, n) {
            var t = Number(e),
              r = t % 100;
            if (r > 20 || r < 10)
              switch (r % 10) {
                case 1:
                  return t + "st";
                case 2:
                  return t + "nd";
                case 3:
                  return t + "rd";
              }
            return t + "th";
          },
          era: l({
            values: {
              narrow: ["B", "A"],
              abbreviated: ["BC", "AD"],
              wide: ["Before Christ", "Anno Domini"],
            },
            defaultWidth: "wide",
          }),
          quarter: l({
            values: {
              narrow: ["1", "2", "3", "4"],
              abbreviated: ["Q1", "Q2", "Q3", "Q4"],
              wide: [
                "1st quarter",
                "2nd quarter",
                "3rd quarter",
                "4th quarter",
              ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
              return Number(e) - 1;
            },
          }),
          month: l({
            values: {
              narrow: [
                "J",
                "F",
                "M",
                "A",
                "M",
                "J",
                "J",
                "A",
                "S",
                "O",
                "N",
                "D",
              ],
              abbreviated: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              wide: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            defaultWidth: "wide",
          }),
          day: l({
            values: {
              narrow: ["S", "M", "T", "W", "T", "F", "S"],
              short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
              abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              wide: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
            },
            defaultWidth: "wide",
          }),
          dayPeriod: l({
            values: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "morning",
                afternoon: "afternoon",
                evening: "evening",
                night: "night",
              },
            },
            defaultWidth: "wide",
            formattingValues: {
              narrow: {
                am: "a",
                pm: "p",
                midnight: "mi",
                noon: "n",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              abbreviated: {
                am: "AM",
                pm: "PM",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
              wide: {
                am: "a.m.",
                pm: "p.m.",
                midnight: "midnight",
                noon: "noon",
                morning: "in the morning",
                afternoon: "in the afternoon",
                evening: "in the evening",
                night: "at night",
              },
            },
            defaultFormattingWidth: "wide",
          }),
        },
        match: {
          ordinalNumber:
            ((h = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e, n) {
              var t = String(e),
                r = n || {},
                i = t.match(h.matchPattern);
              if (!i) return null;
              var a = i[0],
                o = t.match(h.parsePattern);
              if (!o) return null;
              var c = h.valueCallback ? h.valueCallback(o[0]) : o[0];
              return {
                value: (c = r.valueCallback ? r.valueCallback(c) : c),
                rest: t.slice(a.length),
              };
            }),
          era: u({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: u({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: u({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: u({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: u({
            matchPatterns: {
              narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
    function m(e) {
      if (null === e || !0 === e || !1 === e) return NaN;
      var n = Number(e);
      return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
    }
    function g(e, n) {
      r(2, arguments);
      var t = i(e).getTime(),
        a = m(n);
      return new Date(t + a);
    }
    function p(e, n) {
      r(2, arguments);
      var t = m(n);
      return g(e, -t);
    }
    function w(e, n) {
      for (var t = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < n; )
        r = "0" + r;
      return t + r;
    }
    var b = {
      y: function (e, n) {
        var t = e.getUTCFullYear(),
          r = t > 0 ? t : 1 - t;
        return w("yy" === n ? r % 100 : r, n.length);
      },
      M: function (e, n) {
        var t = e.getUTCMonth();
        return "M" === n ? String(t + 1) : w(t + 1, 2);
      },
      d: function (e, n) {
        return w(e.getUTCDate(), n.length);
      },
      a: function (e, n) {
        var t = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (n) {
          case "a":
          case "aa":
          case "aaa":
            return t.toUpperCase();
          case "aaaaa":
            return t[0];
          case "aaaa":
          default:
            return "am" === t ? "a.m." : "p.m.";
        }
      },
      h: function (e, n) {
        return w(e.getUTCHours() % 12 || 12, n.length);
      },
      H: function (e, n) {
        return w(e.getUTCHours(), n.length);
      },
      m: function (e, n) {
        return w(e.getUTCMinutes(), n.length);
      },
      s: function (e, n) {
        return w(e.getUTCSeconds(), n.length);
      },
      S: function (e, n) {
        var t = n.length,
          r = e.getUTCMilliseconds();
        return w(Math.floor(r * Math.pow(10, t - 3)), n.length);
      },
    };
    function y(e) {
      r(1, arguments);
      var n = 1,
        t = i(e),
        a = t.getUTCDay(),
        o = (a < n ? 7 : 0) + a - n;
      return t.setUTCDate(t.getUTCDate() - o), t.setUTCHours(0, 0, 0, 0), t;
    }
    function x(e) {
      r(1, arguments);
      var n = i(e),
        t = n.getUTCFullYear(),
        a = new Date(0);
      a.setUTCFullYear(t + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
      var o = y(a),
        c = new Date(0);
      c.setUTCFullYear(t, 0, 4), c.setUTCHours(0, 0, 0, 0);
      var s = y(c);
      return n.getTime() >= o.getTime()
        ? t + 1
        : n.getTime() >= s.getTime()
        ? t
        : t - 1;
    }
    function v(e) {
      r(1, arguments);
      var n = x(e),
        t = new Date(0);
      t.setUTCFullYear(n, 0, 4), t.setUTCHours(0, 0, 0, 0);
      var i = y(t);
      return i;
    }
    function k(e) {
      r(1, arguments);
      var n = i(e),
        t = y(n).getTime() - v(n).getTime();
      return Math.round(t / 6048e5) + 1;
    }
    function T(e, n) {
      r(1, arguments);
      var t = n || {},
        a = t.locale,
        o = a && a.options && a.options.weekStartsOn,
        c = null == o ? 0 : m(o),
        s = null == t.weekStartsOn ? c : m(t.weekStartsOn);
      if (!(s >= 0 && s <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var d = i(e),
        l = d.getUTCDay(),
        u = (l < s ? 7 : 0) + l - s;
      return d.setUTCDate(d.getUTCDate() - u), d.setUTCHours(0, 0, 0, 0), d;
    }
    function C(e, n) {
      r(1, arguments);
      var t = i(e, n),
        a = t.getUTCFullYear(),
        o = n || {},
        c = o.locale,
        s = c && c.options && c.options.firstWeekContainsDate,
        d = null == s ? 1 : m(s),
        l = null == o.firstWeekContainsDate ? d : m(o.firstWeekContainsDate);
      if (!(l >= 1 && l <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var u = new Date(0);
      u.setUTCFullYear(a + 1, 0, l), u.setUTCHours(0, 0, 0, 0);
      var h = T(u, n),
        f = new Date(0);
      f.setUTCFullYear(a, 0, l), f.setUTCHours(0, 0, 0, 0);
      var g = T(f, n);
      return t.getTime() >= h.getTime()
        ? a + 1
        : t.getTime() >= g.getTime()
        ? a
        : a - 1;
    }
    function M(e, n) {
      r(1, arguments);
      var t = n || {},
        i = t.locale,
        a = i && i.options && i.options.firstWeekContainsDate,
        o = null == a ? 1 : m(a),
        c = null == t.firstWeekContainsDate ? o : m(t.firstWeekContainsDate),
        s = C(e, n),
        d = new Date(0);
      d.setUTCFullYear(s, 0, c), d.setUTCHours(0, 0, 0, 0);
      var l = T(d, n);
      return l;
    }
    function P(e, n) {
      r(1, arguments);
      var t = i(e),
        a = T(t, n).getTime() - M(t, n).getTime();
      return Math.round(a / 6048e5) + 1;
    }
    var S = "midnight",
      E = "noon",
      D = "morning",
      U = "afternoon",
      j = "evening",
      L = "night";
    function q(e, n) {
      var t = e > 0 ? "-" : "+",
        r = Math.abs(e),
        i = Math.floor(r / 60),
        a = r % 60;
      if (0 === a) return t + String(i);
      var o = n || "";
      return t + String(i) + o + w(a, 2);
    }
    function z(e, n) {
      return e % 60 == 0
        ? (e > 0 ? "-" : "+") + w(Math.abs(e) / 60, 2)
        : N(e, n);
    }
    function N(e, n) {
      var t = n || "",
        r = e > 0 ? "-" : "+",
        i = Math.abs(e);
      return r + w(Math.floor(i / 60), 2) + t + w(i % 60, 2);
    }
    var I = {
      G: function (e, n, t) {
        var r = e.getUTCFullYear() > 0 ? 1 : 0;
        switch (n) {
          case "G":
          case "GG":
          case "GGG":
            return t.era(r, { width: "abbreviated" });
          case "GGGGG":
            return t.era(r, { width: "narrow" });
          case "GGGG":
          default:
            return t.era(r, { width: "wide" });
        }
      },
      y: function (e, n, t) {
        if ("yo" === n) {
          var r = e.getUTCFullYear(),
            i = r > 0 ? r : 1 - r;
          return t.ordinalNumber(i, { unit: "year" });
        }
        return b.y(e, n);
      },
      Y: function (e, n, t, r) {
        var i = C(e, r),
          a = i > 0 ? i : 1 - i;
        return "YY" === n
          ? w(a % 100, 2)
          : "Yo" === n
          ? t.ordinalNumber(a, { unit: "year" })
          : w(a, n.length);
      },
      R: function (e, n) {
        return w(x(e), n.length);
      },
      u: function (e, n) {
        return w(e.getUTCFullYear(), n.length);
      },
      Q: function (e, n, t) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (n) {
          case "Q":
            return String(r);
          case "QQ":
            return w(r, 2);
          case "Qo":
            return t.ordinalNumber(r, { unit: "quarter" });
          case "QQQ":
            return t.quarter(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "QQQQQ":
            return t.quarter(r, { width: "narrow", context: "formatting" });
          case "QQQQ":
          default:
            return t.quarter(r, { width: "wide", context: "formatting" });
        }
      },
      q: function (e, n, t) {
        var r = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (n) {
          case "q":
            return String(r);
          case "qq":
            return w(r, 2);
          case "qo":
            return t.ordinalNumber(r, { unit: "quarter" });
          case "qqq":
            return t.quarter(r, {
              width: "abbreviated",
              context: "standalone",
            });
          case "qqqqq":
            return t.quarter(r, { width: "narrow", context: "standalone" });
          case "qqqq":
          default:
            return t.quarter(r, { width: "wide", context: "standalone" });
        }
      },
      M: function (e, n, t) {
        var r = e.getUTCMonth();
        switch (n) {
          case "M":
          case "MM":
            return b.M(e, n);
          case "Mo":
            return t.ordinalNumber(r + 1, { unit: "month" });
          case "MMM":
            return t.month(r, { width: "abbreviated", context: "formatting" });
          case "MMMMM":
            return t.month(r, { width: "narrow", context: "formatting" });
          case "MMMM":
          default:
            return t.month(r, { width: "wide", context: "formatting" });
        }
      },
      L: function (e, n, t) {
        var r = e.getUTCMonth();
        switch (n) {
          case "L":
            return String(r + 1);
          case "LL":
            return w(r + 1, 2);
          case "Lo":
            return t.ordinalNumber(r + 1, { unit: "month" });
          case "LLL":
            return t.month(r, { width: "abbreviated", context: "standalone" });
          case "LLLLL":
            return t.month(r, { width: "narrow", context: "standalone" });
          case "LLLL":
          default:
            return t.month(r, { width: "wide", context: "standalone" });
        }
      },
      w: function (e, n, t, r) {
        var i = P(e, r);
        return "wo" === n
          ? t.ordinalNumber(i, { unit: "week" })
          : w(i, n.length);
      },
      I: function (e, n, t) {
        var r = k(e);
        return "Io" === n
          ? t.ordinalNumber(r, { unit: "week" })
          : w(r, n.length);
      },
      d: function (e, n, t) {
        return "do" === n
          ? t.ordinalNumber(e.getUTCDate(), { unit: "date" })
          : b.d(e, n);
      },
      D: function (e, n, t) {
        var a = (function (e) {
          r(1, arguments);
          var n = i(e),
            t = n.getTime();
          n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
          var a = n.getTime(),
            o = t - a;
          return Math.floor(o / 864e5) + 1;
        })(e);
        return "Do" === n
          ? t.ordinalNumber(a, { unit: "dayOfYear" })
          : w(a, n.length);
      },
      E: function (e, n, t) {
        var r = e.getUTCDay();
        switch (n) {
          case "E":
          case "EE":
          case "EEE":
            return t.day(r, { width: "abbreviated", context: "formatting" });
          case "EEEEE":
            return t.day(r, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return t.day(r, { width: "short", context: "formatting" });
          case "EEEE":
          default:
            return t.day(r, { width: "wide", context: "formatting" });
        }
      },
      e: function (e, n, t, r) {
        var i = e.getUTCDay(),
          a = (i - r.weekStartsOn + 8) % 7 || 7;
        switch (n) {
          case "e":
            return String(a);
          case "ee":
            return w(a, 2);
          case "eo":
            return t.ordinalNumber(a, { unit: "day" });
          case "eee":
            return t.day(i, { width: "abbreviated", context: "formatting" });
          case "eeeee":
            return t.day(i, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return t.day(i, { width: "short", context: "formatting" });
          case "eeee":
          default:
            return t.day(i, { width: "wide", context: "formatting" });
        }
      },
      c: function (e, n, t, r) {
        var i = e.getUTCDay(),
          a = (i - r.weekStartsOn + 8) % 7 || 7;
        switch (n) {
          case "c":
            return String(a);
          case "cc":
            return w(a, n.length);
          case "co":
            return t.ordinalNumber(a, { unit: "day" });
          case "ccc":
            return t.day(i, { width: "abbreviated", context: "standalone" });
          case "ccccc":
            return t.day(i, { width: "narrow", context: "standalone" });
          case "cccccc":
            return t.day(i, { width: "short", context: "standalone" });
          case "cccc":
          default:
            return t.day(i, { width: "wide", context: "standalone" });
        }
      },
      i: function (e, n, t) {
        var r = e.getUTCDay(),
          i = 0 === r ? 7 : r;
        switch (n) {
          case "i":
            return String(i);
          case "ii":
            return w(i, n.length);
          case "io":
            return t.ordinalNumber(i, { unit: "day" });
          case "iii":
            return t.day(r, { width: "abbreviated", context: "formatting" });
          case "iiiii":
            return t.day(r, { width: "narrow", context: "formatting" });
          case "iiiiii":
            return t.day(r, { width: "short", context: "formatting" });
          case "iiii":
          default:
            return t.day(r, { width: "wide", context: "formatting" });
        }
      },
      a: function (e, n, t) {
        var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (n) {
          case "a":
          case "aa":
          case "aaa":
            return t.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "aaaaa":
            return t.dayPeriod(r, { width: "narrow", context: "formatting" });
          case "aaaa":
          default:
            return t.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      b: function (e, n, t) {
        var r,
          i = e.getUTCHours();
        switch (
          ((r = 12 === i ? E : 0 === i ? S : i / 12 >= 1 ? "pm" : "am"), n)
        ) {
          case "b":
          case "bb":
          case "bbb":
            return t.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "bbbbb":
            return t.dayPeriod(r, { width: "narrow", context: "formatting" });
          case "bbbb":
          default:
            return t.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      B: function (e, n, t) {
        var r,
          i = e.getUTCHours();
        switch (((r = i >= 17 ? j : i >= 12 ? U : i >= 4 ? D : L), n)) {
          case "B":
          case "BB":
          case "BBB":
            return t.dayPeriod(r, {
              width: "abbreviated",
              context: "formatting",
            });
          case "BBBBB":
            return t.dayPeriod(r, { width: "narrow", context: "formatting" });
          case "BBBB":
          default:
            return t.dayPeriod(r, { width: "wide", context: "formatting" });
        }
      },
      h: function (e, n, t) {
        if ("ho" === n) {
          var r = e.getUTCHours() % 12;
          return 0 === r && (r = 12), t.ordinalNumber(r, { unit: "hour" });
        }
        return b.h(e, n);
      },
      H: function (e, n, t) {
        return "Ho" === n
          ? t.ordinalNumber(e.getUTCHours(), { unit: "hour" })
          : b.H(e, n);
      },
      K: function (e, n, t) {
        var r = e.getUTCHours() % 12;
        return "Ko" === n
          ? t.ordinalNumber(r, { unit: "hour" })
          : w(r, n.length);
      },
      k: function (e, n, t) {
        var r = e.getUTCHours();
        return (
          0 === r && (r = 24),
          "ko" === n ? t.ordinalNumber(r, { unit: "hour" }) : w(r, n.length)
        );
      },
      m: function (e, n, t) {
        return "mo" === n
          ? t.ordinalNumber(e.getUTCMinutes(), { unit: "minute" })
          : b.m(e, n);
      },
      s: function (e, n, t) {
        return "so" === n
          ? t.ordinalNumber(e.getUTCSeconds(), { unit: "second" })
          : b.s(e, n);
      },
      S: function (e, n) {
        return b.S(e, n);
      },
      X: function (e, n, t, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        if (0 === i) return "Z";
        switch (n) {
          case "X":
            return z(i);
          case "XXXX":
          case "XX":
            return N(i);
          case "XXXXX":
          case "XXX":
          default:
            return N(i, ":");
        }
      },
      x: function (e, n, t, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        switch (n) {
          case "x":
            return z(i);
          case "xxxx":
          case "xx":
            return N(i);
          case "xxxxx":
          case "xxx":
          default:
            return N(i, ":");
        }
      },
      O: function (e, n, t, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        switch (n) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + q(i, ":");
          case "OOOO":
          default:
            return "GMT" + N(i, ":");
        }
      },
      z: function (e, n, t, r) {
        var i = (r._originalDate || e).getTimezoneOffset();
        switch (n) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + q(i, ":");
          case "zzzz":
          default:
            return "GMT" + N(i, ":");
        }
      },
      t: function (e, n, t, r) {
        var i = r._originalDate || e;
        return w(Math.floor(i.getTime() / 1e3), n.length);
      },
      T: function (e, n, t, r) {
        return w((r._originalDate || e).getTime(), n.length);
      },
    };
    function H(e, n) {
      switch (e) {
        case "P":
          return n.date({ width: "short" });
        case "PP":
          return n.date({ width: "medium" });
        case "PPP":
          return n.date({ width: "long" });
        case "PPPP":
        default:
          return n.date({ width: "full" });
      }
    }
    function O(e, n) {
      switch (e) {
        case "p":
          return n.time({ width: "short" });
        case "pp":
          return n.time({ width: "medium" });
        case "ppp":
          return n.time({ width: "long" });
        case "pppp":
        default:
          return n.time({ width: "full" });
      }
    }
    var A = {
      p: O,
      P: function (e, n) {
        var t,
          r = e.match(/(P+)(p+)?/),
          i = r[1],
          a = r[2];
        if (!a) return H(e, n);
        switch (i) {
          case "P":
            t = n.dateTime({ width: "short" });
            break;
          case "PP":
            t = n.dateTime({ width: "medium" });
            break;
          case "PPP":
            t = n.dateTime({ width: "long" });
            break;
          case "PPPP":
          default:
            t = n.dateTime({ width: "full" });
        }
        return t.replace("{{date}}", H(i, n)).replace("{{time}}", O(a, n));
      },
    };
    function Y(e) {
      return e.getTime() % 6e4;
    }
    function F(e) {
      var n = new Date(e.getTime()),
        t = Math.ceil(n.getTimezoneOffset());
      return n.setSeconds(0, 0), 6e4 * t + (t > 0 ? (6e4 + Y(n)) % 6e4 : Y(n));
    }
    var R = ["D", "DD"],
      W = ["YY", "YYYY"];
    function B(e) {
      return -1 !== R.indexOf(e);
    }
    function Q(e) {
      return -1 !== W.indexOf(e);
    }
    function X(e) {
      if ("YYYY" === e)
        throw new RangeError(
          "Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr"
        );
      if ("YY" === e)
        throw new RangeError(
          "Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr"
        );
      if ("D" === e)
        throw new RangeError(
          "Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr"
        );
      if ("DD" === e)
        throw new RangeError(
          "Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr"
        );
    }
    var G = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      _ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      K = /^'([^]*?)'?$/,
      J = /''/g,
      Z = /[a-zA-Z]/;
    function V(e, n, t) {
      r(2, arguments);
      var o = String(n),
        c = t || {},
        s = c.locale || f,
        d = s.options && s.options.firstWeekContainsDate,
        l = null == d ? 1 : m(d),
        u = null == c.firstWeekContainsDate ? l : m(c.firstWeekContainsDate);
      if (!(u >= 1 && u <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var h = s.options && s.options.weekStartsOn,
        g = null == h ? 0 : m(h),
        w = null == c.weekStartsOn ? g : m(c.weekStartsOn);
      if (!(w >= 0 && w <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      if (!s.localize)
        throw new RangeError("locale must contain localize property");
      if (!s.formatLong)
        throw new RangeError("locale must contain formatLong property");
      var b = i(e);
      if (!a(b)) throw new RangeError("Invalid time value");
      var y = F(b),
        x = p(b, y),
        v = {
          firstWeekContainsDate: u,
          weekStartsOn: w,
          locale: s,
          _originalDate: b,
        },
        k = o
          .match(_)
          .map(function (e) {
            var n = e[0];
            return "p" === n || "P" === n ? (0, A[n])(e, s.formatLong, v) : e;
          })
          .join("")
          .match(G)
          .map(function (e) {
            if ("''" === e) return "'";
            var n = e[0];
            if ("'" === n) return $(e);
            var t = I[n];
            if (t)
              return (
                !c.useAdditionalWeekYearTokens && Q(e) && X(e),
                !c.useAdditionalDayOfYearTokens && B(e) && X(e),
                t(x, e, s.localize, v)
              );
            if (n.match(Z))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  n +
                  "`"
              );
            return e;
          })
          .join("");
      return k;
    }
    function $(e) {
      return e.match(K)[1].replace(J, "'");
    }
    var ee = (function () {
        let e = !1;
        const n = document.querySelector(".darkModeSwitch");
        n.checked = !1;
        let t = document.documentElement;
        n.addEventListener("click", () => {
          !0 === n.checked
            ? (t.style.setProperty(
                "--main-bg-image",
                "linear-gradient(270deg, #040a39 0%, #090924 50%, #000000 100%)"
              ),
              t.style.setProperty("--items-bg-color", "initial"),
              t.style.setProperty("--items-color", "white"),
              t.style.setProperty("--project-bg-color", "initial"),
              t.style.setProperty("--sidebar-bg-color", "#060624"),
              (e = !0))
            : (t.style.setProperty(
                "--main-bg-image",
                "linear-gradient(270deg, #21D4FD 0%, #B721FF 100%)"
              ),
              t.style.setProperty("--items-bg-color", "#DADADA"),
              t.style.setProperty("--items-color", "black"),
              t.style.setProperty("--project-bg-color", "lightcoral"),
              t.style.setProperty("--sidebar-bg-color", "#B721FF"),
              (e = !1));
        });
        let r = !1;
        const i = document.querySelector(".showChecked"),
          a = function () {
            const e = document.querySelector(".showChecked");
            (e.checked = !1),
              e.addEventListener("click", (n) => {
                !0 === e.checked
                  ? ((r = !0),
                    ne.clearList(),
                    ne.renderChecked(te.getActiveProject()))
                  : ((r = !1),
                    ne.clearList(),
                    ne.renderUnchecked(te.getActiveProject()));
              });
          };
        a();
        return {
          getShowCheckedState: function () {
            return i.checked;
          },
          setShowCompleted: function (e) {
            i.checked = e;
          },
          getDarkModeState: function () {
            return n.checked;
          },
          setDarkMode: function (e) {
            n.checked = e;
          },
          controlFlow: function () {
            let e;
            const n = document.querySelector(".to-do-list"),
              t = document.querySelector(".editItem");
            n.addEventListener("click", (a) => {
              if (a.target.classList.contains("title"))
                (a.target.parentNode.nextElementSibling.style.display = "flex"),
                  (a.target.parentNode.nextElementSibling.nextElementSibling.style.display =
                    "flex");
              else if (a.target.classList.contains("editToDo")) {
                (t.style.display = "flex"),
                  (t.title.value =
                    a.target.parentNode.previousElementSibling.lastChild.textContent);
                let n = Ke.returnToDo(
                  t.title.value,
                  a.target.parentNode.nextElementSibling.nextElementSibling
                    .children[1].textContent
                );
                (e = n.importance),
                  (t.date.value = V(new Date(n.dueDate), "yyyy-MM-dd")),
                  (function (e, n) {
                    const t = e.querySelectorAll(".myToggle");
                    switch (n.importance) {
                      case "Regular":
                        (t[0].checked = !0),
                          (t[1].checked = !1),
                          (t[2].checked = !1);
                        break;
                      case "Moderate":
                        (t[1].checked = !0),
                          (t[0].checked = !1),
                          (t[2].checked = !1);
                        break;
                      case "High":
                        (t[2].checked = !0),
                          (t[1].checked = !1),
                          (t[0].checked = !1);
                    }
                  })(t, n),
                  (t.description.value = n.description),
                  t.querySelectorAll(".myToggle").forEach((n) => {
                    n.addEventListener("click", (n) => {
                      e = n.target.value;
                    });
                  }),
                  t.addEventListener("submit", function i(a) {
                    a.preventDefault(),
                      Ke.doesAlreadyExistForEdit(
                        n,
                        t.title.value,
                        t.date.value.replace(/-/g, "/")
                      )
                        ? ne.animateWrongName("titleInputEdit")
                        : (Ke.editTask(
                            n,
                            t.title.value,
                            t.date.value.replace(/-/g, "/"),
                            t.description.value,
                            e
                          ),
                          ne.clearList(),
                          !0 === r
                            ? ne.renderChecked(te.getActiveProject())
                            : ne.renderUnchecked(te.getActiveProject()),
                          t.removeEventListener("submit", i),
                          (t.style.display = "none"));
                  });
              } else if (a.target.classList.contains("delete-button"))
                Ke.deleteTask(
                  a.target.nextElementSibling.textContent,
                  a.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.querySelector(
                    ".due-date"
                  ).textContent
                ),
                  n.removeChild(a.target.parentNode.parentNode.parentNode);
              else if (a.target.classList.contains("checkmark")) {
                const e =
                    a.target.parentNode.previousElementSibling.firstChild
                      .children[1].textContent,
                  t =
                    a.target.parentNode.previousElementSibling.lastChild
                      .children[1].textContent;
                if ((Ke.checkBox(e, t), i.checked)) return;
                a.target.parentNode.parentNode.classList.toggle(
                  "taskCompleted"
                ),
                  setTimeout(() => {
                    n.removeChild(a.target.parentNode.parentNode);
                  }, 300);
              } else {
                if (!a.target.parentNode.classList.contains("fold-item"))
                  return;
                (a.target.parentNode.style.display = "none"),
                  (a.target.parentNode.previousElementSibling.style.display =
                    "none");
              }
            });
          },
          controlComplete: a,
        };
      })(),
      ne = (function () {
        const e = document.querySelector(".Project-Title-text");
        function n(e) {
          let n = document.querySelector(".to-do-list"),
            t = document.createElement("div");
          t.classList.add("to-do-item");
          let r = document.createElement("div");
          r.classList.add("wrap");
          let i = document.createElement("div");
          i.classList.add("first-row");
          let a = document.createElement("i");
          a.classList.add("fas", "fa-trash-alt", "delete-button"),
            i.appendChild(a);
          let o = document.createElement("p");
          o.classList.add("title"),
            (o.textContent = e.title),
            i.appendChild(o),
            r.appendChild(i);
          let c = document.createElement("div");
          c.classList.add("description");
          let s = document.createElement("span");
          (s.innerHTML = "&#9881;"),
            s.classList.add("editToDo"),
            c.appendChild(s);
          let d = document.createElement("p");
          (d.textContent = e.description), c.appendChild(d), r.appendChild(c);
          let l = document.createElement("div");
          l.classList.add("fold-item");
          let u = document.createElement("button");
          (u.innerHTML = "&#9650;"), l.appendChild(u), r.appendChild(l);
          let h = document.createElement("div");
          h.classList.add("second-row");
          let f = document.createElement("i");
          f.classList.add("far", "fa-clock"), h.appendChild(f);
          let m = document.createElement("p");
          m.classList.add("due-date"),
            (m.textContent = V(new Date(e.dueDate), "PPP")),
            h.appendChild(m);
          let g = document.createElement("i");
          g.classList.add("fas", "fa-exclamation-circle"),
            (function (e, n) {
              switch (e.importance) {
                case "Regular":
                  n.style.color = "green";
                  break;
                case "Moderate":
                  n.style.color = "orange";
                  break;
                case "High":
                  n.style.color = "red";
              }
            })(e, g),
            h.appendChild(g),
            r.appendChild(h),
            t.appendChild(r);
          let p = document.createElement("label");
          p.classList.add("container");
          let w = document.createElement("input");
          w.setAttribute("type", "checkbox"),
            (w.checked = e.checked),
            w.classList.add("checkbox"),
            p.appendChild(w);
          let b = document.createElement("span");
          b.classList.add("checkmark"),
            p.appendChild(b),
            t.appendChild(p),
            n.appendChild(t);
        }
        const t = function (t) {
            (e.innerHTML = t),
              (e.style.border = "1px solid white"),
              Projects[t].todoList
                .sort((e, n) => {
                  let t = { Regular: 1, Moderate: 2, High: 3 };
                  return t[n.importance] - t[e.importance];
                })
                .sort((e, n) => {
                  let t = { true: 1, false: 2 };
                  return t[n.checked] - t[e.checked];
                })
                .forEach((e) => {
                  n(e);
                });
          },
          r = function (t) {
            (e.innerHTML = t),
              (e.style.border = "1px solid white"),
              Projects[t].todoList
                .filter((e) => !1 === e.checked)
                .sort((e, n) => {
                  let t = { Regular: 1, Moderate: 2, High: 3 };
                  return t[n.importance] - t[e.importance];
                })
                .forEach((e) => {
                  n(e);
                });
          },
          i = function (e) {
            const n = document.getElementById(e);
            (n.style.animation = "wrongShake 1s"),
              n.addEventListener("animationend", () => {
                n.style.animation = "none";
              });
          },
          a = function () {
            const e = document.querySelector(".to-do-list"),
              n = document.querySelector(".Project-Title-text");
            (n.style.border = "none"), (n.innerHTML = ""), (e.innerHTML = "");
          };
        return {
          renderChecked: t,
          clearList: a,
          addNewItemHandler: function () {
            const e = document.querySelector(".addNewItem");
            document
              .querySelector(".addButton")
              .addEventListener("click", () => {
                "block" === e.style.display
                  ? (e.style.display = "none")
                  : (e.style.display = "block");
              });
            const n = document.querySelectorAll(".addInput");
            let o = "Regular";
            n.forEach((e) => {
              e.addEventListener("focus", (e) => {
                o = e.target.value;
              });
            }),
              e.addEventListener("submit", (n) => {
                n.preventDefault();
                const c = new Date(e.date.value.replace(/-/g, "/"));
                if (Ke.doesAlreadyExist(e.title.value.replace(/-/g, "/"), c))
                  i("titleInput");
                else {
                  const n = te.getActiveProject();
                  Ke.newTask(e.title.value, c, e.description.value, o, n, !1),
                    (function () {
                      const e = document.querySelector(".taskAdded");
                      (e.style.animation = "fadeIn .5s"),
                        e.addEventListener("animationend", () => {
                          e.style.animation = "none";
                        });
                    })(),
                    a(),
                    ee.getShowCheckedState() ? t(n) : r(n),
                    e.reset();
                }
              });
          },
          renderUnchecked: r,
          animateWrongName: i,
        };
      })(),
      te = (function () {
        let e,
          n = document.querySelectorAll(".sidebar a");
        const t = document.querySelector(".Project-Title-text"),
          r = function (n) {
            e = n;
          };
        return {
          switchTabs: function () {
            (n = document.querySelectorAll(".sidebar a")),
              n.forEach((i) => {
                i.addEventListener("click", () => {
                  i.classList.contains("active")
                    ? r(i.textContent)
                    : (n.forEach((e) => {
                        e.classList.remove("active");
                      }),
                      i.classList.add("active"),
                      r(i.textContent),
                      (t.textContent = i.textContent),
                      ne.clearList(),
                      ee.setShowCompleted(!1),
                      ee.controlComplete(),
                      ne.renderUnchecked(e));
                });
              });
          },
          getActiveProject: function () {
            return e || r(n[0].textContent), e;
          },
          setActiveProject: r,
        };
      })();
    function re(e, n) {
      if (null == e)
        throw new TypeError(
          "assign requires that input parameter not be null or undefined"
        );
      for (var t in (n = n || {})) n.hasOwnProperty(t) && (e[t] = n[t]);
      return e;
    }
    function ie(e, n, t) {
      r(2, arguments);
      var a = t || {},
        o = a.locale,
        c = o && o.options && o.options.weekStartsOn,
        s = null == c ? 0 : m(c),
        d = null == a.weekStartsOn ? s : m(a.weekStartsOn);
      if (!(d >= 0 && d <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      var l = i(e),
        u = m(n),
        h = l.getUTCDay(),
        f = u % 7,
        g = (f + 7) % 7,
        p = (g < d ? 7 : 0) + u - h;
      return l.setUTCDate(l.getUTCDate() + p), l;
    }
    var ae = /^(1[0-2]|0?\d)/,
      oe = /^(3[0-1]|[0-2]?\d)/,
      ce = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      se = /^(5[0-3]|[0-4]?\d)/,
      de = /^(2[0-3]|[0-1]?\d)/,
      le = /^(2[0-4]|[0-1]?\d)/,
      ue = /^(1[0-1]|0?\d)/,
      he = /^(1[0-2]|0?\d)/,
      fe = /^[0-5]?\d/,
      me = /^[0-5]?\d/,
      ge = /^\d/,
      pe = /^\d{1,2}/,
      we = /^\d{1,3}/,
      be = /^\d{1,4}/,
      ye = /^-?\d+/,
      xe = /^-?\d/,
      ve = /^-?\d{1,2}/,
      ke = /^-?\d{1,3}/,
      Te = /^-?\d{1,4}/,
      Ce = /^([+-])(\d{2})(\d{2})?|Z/,
      Me = /^([+-])(\d{2})(\d{2})|Z/,
      Pe = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      Se = /^([+-])(\d{2}):(\d{2})|Z/,
      Ee = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
    function De(e, n, t) {
      var r = n.match(e);
      if (!r) return null;
      var i = parseInt(r[0], 10);
      return { value: t ? t(i) : i, rest: n.slice(r[0].length) };
    }
    function Ue(e, n) {
      var t = n.match(e);
      return t
        ? "Z" === t[0]
          ? { value: 0, rest: n.slice(1) }
          : {
              value:
                ("+" === t[1] ? 1 : -1) *
                (36e5 * (t[2] ? parseInt(t[2], 10) : 0) +
                  6e4 * (t[3] ? parseInt(t[3], 10) : 0) +
                  1e3 * (t[5] ? parseInt(t[5], 10) : 0)),
              rest: n.slice(t[0].length),
            }
        : null;
    }
    function je(e, n) {
      return De(ye, e, n);
    }
    function Le(e, n, t) {
      switch (e) {
        case 1:
          return De(ge, n, t);
        case 2:
          return De(pe, n, t);
        case 3:
          return De(we, n, t);
        case 4:
          return De(be, n, t);
        default:
          return De(new RegExp("^\\d{1," + e + "}"), n, t);
      }
    }
    function qe(e, n, t) {
      switch (e) {
        case 1:
          return De(xe, n, t);
        case 2:
          return De(ve, n, t);
        case 3:
          return De(ke, n, t);
        case 4:
          return De(Te, n, t);
        default:
          return De(new RegExp("^-?\\d{1," + e + "}"), n, t);
      }
    }
    function ze(e) {
      switch (e) {
        case "morning":
          return 4;
        case "evening":
          return 17;
        case "pm":
        case "noon":
        case "afternoon":
          return 12;
        case "am":
        case "midnight":
        case "night":
        default:
          return 0;
      }
    }
    function Ne(e, n) {
      var t,
        r = n > 0,
        i = r ? n : 1 - n;
      if (i <= 50) t = e || 100;
      else {
        var a = i + 50;
        t = e + 100 * Math.floor(a / 100) - (e >= a % 100 ? 100 : 0);
      }
      return r ? t : 1 - t;
    }
    var Ie = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      He = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Oe(e) {
      return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
    }
    var Ae = {
        G: {
          priority: 140,
          parse: function (e, n, t, r) {
            switch (n) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  t.era(e, { width: "abbreviated" }) ||
                  t.era(e, { width: "narrow" })
                );
              case "GGGGG":
                return t.era(e, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  t.era(e, { width: "wide" }) ||
                  t.era(e, { width: "abbreviated" }) ||
                  t.era(e, { width: "narrow" })
                );
            }
          },
          set: function (e, n, t, r) {
            return (
              (n.era = t),
              e.setUTCFullYear(t, 0, 1),
              e.setUTCHours(0, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: ["R", "u", "t", "T"],
        },
        y: {
          priority: 130,
          parse: function (e, n, t, r) {
            var i = function (e) {
              return { year: e, isTwoDigitYear: "yy" === n };
            };
            switch (n) {
              case "y":
                return Le(4, e, i);
              case "yo":
                return t.ordinalNumber(e, { unit: "year", valueCallback: i });
              default:
                return Le(n.length, e, i);
            }
          },
          validate: function (e, n, t) {
            return n.isTwoDigitYear || n.year > 0;
          },
          set: function (e, n, t, r) {
            var i = e.getUTCFullYear();
            if (t.isTwoDigitYear) {
              var a = Ne(t.year, i);
              return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
            }
            var o = "era" in n && 1 !== n.era ? 1 - t.year : t.year;
            return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        Y: {
          priority: 130,
          parse: function (e, n, t, r) {
            var i = function (e) {
              return { year: e, isTwoDigitYear: "YY" === n };
            };
            switch (n) {
              case "Y":
                return Le(4, e, i);
              case "Yo":
                return t.ordinalNumber(e, { unit: "year", valueCallback: i });
              default:
                return Le(n.length, e, i);
            }
          },
          validate: function (e, n, t) {
            return n.isTwoDigitYear || n.year > 0;
          },
          set: function (e, n, t, r) {
            var i = C(e, r);
            if (t.isTwoDigitYear) {
              var a = Ne(t.year, i);
              return (
                e.setUTCFullYear(a, 0, r.firstWeekContainsDate),
                e.setUTCHours(0, 0, 0, 0),
                T(e, r)
              );
            }
            var o = "era" in n && 1 !== n.era ? 1 - t.year : t.year;
            return (
              e.setUTCFullYear(o, 0, r.firstWeekContainsDate),
              e.setUTCHours(0, 0, 0, 0),
              T(e, r)
            );
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
          ],
        },
        R: {
          priority: 130,
          parse: function (e, n, t, r) {
            return qe("R" === n ? 4 : n.length, e);
          },
          set: function (e, n, t, r) {
            var i = new Date(0);
            return i.setUTCFullYear(t, 0, 4), i.setUTCHours(0, 0, 0, 0), y(i);
          },
          incompatibleTokens: [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        u: {
          priority: 130,
          parse: function (e, n, t, r) {
            return qe("u" === n ? 4 : n.length, e);
          },
          set: function (e, n, t, r) {
            return e.setUTCFullYear(t, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        Q: {
          priority: 120,
          parse: function (e, n, t, r) {
            switch (n) {
              case "Q":
              case "QQ":
                return Le(n.length, e);
              case "Qo":
                return t.ordinalNumber(e, { unit: "quarter" });
              case "QQQ":
                return (
                  t.quarter(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) || t.quarter(e, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return t.quarter(e, { width: "narrow", context: "formatting" });
              case "QQQQ":
              default:
                return (
                  t.quarter(e, { width: "wide", context: "formatting" }) ||
                  t.quarter(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.quarter(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 4;
          },
          set: function (e, n, t, r) {
            return e.setUTCMonth(3 * (t - 1), 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        q: {
          priority: 120,
          parse: function (e, n, t, r) {
            switch (n) {
              case "q":
              case "qq":
                return Le(n.length, e);
              case "qo":
                return t.ordinalNumber(e, { unit: "quarter" });
              case "qqq":
                return (
                  t.quarter(e, {
                    width: "abbreviated",
                    context: "standalone",
                  }) || t.quarter(e, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return t.quarter(e, { width: "narrow", context: "standalone" });
              case "qqqq":
              default:
                return (
                  t.quarter(e, { width: "wide", context: "standalone" }) ||
                  t.quarter(e, {
                    width: "abbreviated",
                    context: "standalone",
                  }) ||
                  t.quarter(e, { width: "narrow", context: "standalone" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 4;
          },
          set: function (e, n, t, r) {
            return e.setUTCMonth(3 * (t - 1), 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        M: {
          priority: 110,
          parse: function (e, n, t, r) {
            var i = function (e) {
              return e - 1;
            };
            switch (n) {
              case "M":
                return De(ae, e, i);
              case "MM":
                return Le(2, e, i);
              case "Mo":
                return t.ordinalNumber(e, { unit: "month", valueCallback: i });
              case "MMM":
                return (
                  t.month(e, { width: "abbreviated", context: "formatting" }) ||
                  t.month(e, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return t.month(e, { width: "narrow", context: "formatting" });
              case "MMMM":
              default:
                return (
                  t.month(e, { width: "wide", context: "formatting" }) ||
                  t.month(e, { width: "abbreviated", context: "formatting" }) ||
                  t.month(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 11;
          },
          set: function (e, n, t, r) {
            return e.setUTCMonth(t, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        L: {
          priority: 110,
          parse: function (e, n, t, r) {
            var i = function (e) {
              return e - 1;
            };
            switch (n) {
              case "L":
                return De(ae, e, i);
              case "LL":
                return Le(2, e, i);
              case "Lo":
                return t.ordinalNumber(e, { unit: "month", valueCallback: i });
              case "LLL":
                return (
                  t.month(e, { width: "abbreviated", context: "standalone" }) ||
                  t.month(e, { width: "narrow", context: "standalone" })
                );
              case "LLLLL":
                return t.month(e, { width: "narrow", context: "standalone" });
              case "LLLL":
              default:
                return (
                  t.month(e, { width: "wide", context: "standalone" }) ||
                  t.month(e, { width: "abbreviated", context: "standalone" }) ||
                  t.month(e, { width: "narrow", context: "standalone" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 11;
          },
          set: function (e, n, t, r) {
            return e.setUTCMonth(t, 1), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        w: {
          priority: 100,
          parse: function (e, n, t, r) {
            switch (n) {
              case "w":
                return De(se, e);
              case "wo":
                return t.ordinalNumber(e, { unit: "week" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 53;
          },
          set: function (e, n, t, a) {
            return T(
              (function (e, n, t) {
                r(2, arguments);
                var a = i(e),
                  o = m(n),
                  c = P(a, t) - o;
                return a.setUTCDate(a.getUTCDate() - 7 * c), a;
              })(e, t, a),
              a
            );
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
          ],
        },
        I: {
          priority: 100,
          parse: function (e, n, t, r) {
            switch (n) {
              case "I":
                return De(se, e);
              case "Io":
                return t.ordinalNumber(e, { unit: "week" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 53;
          },
          set: function (e, n, t, a) {
            return y(
              (function (e, n) {
                r(2, arguments);
                var t = i(e),
                  a = m(n),
                  o = k(t) - a;
                return t.setUTCDate(t.getUTCDate() - 7 * o), t;
              })(e, t, a),
              a
            );
          },
          incompatibleTokens: [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        d: {
          priority: 90,
          parse: function (e, n, t, r) {
            switch (n) {
              case "d":
                return De(oe, e);
              case "do":
                return t.ordinalNumber(e, { unit: "date" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            var r = Oe(e.getUTCFullYear()),
              i = e.getUTCMonth();
            return r ? n >= 1 && n <= He[i] : n >= 1 && n <= Ie[i];
          },
          set: function (e, n, t, r) {
            return e.setUTCDate(t), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        D: {
          priority: 90,
          parse: function (e, n, t, r) {
            switch (n) {
              case "D":
              case "DD":
                return De(ce, e);
              case "Do":
                return t.ordinalNumber(e, { unit: "date" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return Oe(e.getUTCFullYear())
              ? n >= 1 && n <= 366
              : n >= 1 && n <= 365;
          },
          set: function (e, n, t, r) {
            return e.setUTCMonth(0, t), e.setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        E: {
          priority: 90,
          parse: function (e, n, t, r) {
            switch (n) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  t.day(e, { width: "abbreviated", context: "formatting" }) ||
                  t.day(e, { width: "short", context: "formatting" }) ||
                  t.day(e, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return t.day(e, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  t.day(e, { width: "short", context: "formatting" }) ||
                  t.day(e, { width: "narrow", context: "formatting" })
                );
              case "EEEE":
              default:
                return (
                  t.day(e, { width: "wide", context: "formatting" }) ||
                  t.day(e, { width: "abbreviated", context: "formatting" }) ||
                  t.day(e, { width: "short", context: "formatting" }) ||
                  t.day(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 6;
          },
          set: function (e, n, t, r) {
            return (e = ie(e, t, r)).setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: ["D", "i", "e", "c", "t", "T"],
        },
        e: {
          priority: 90,
          parse: function (e, n, t, r) {
            var i = function (e) {
              var n = 7 * Math.floor((e - 1) / 7);
              return ((e + r.weekStartsOn + 6) % 7) + n;
            };
            switch (n) {
              case "e":
              case "ee":
                return Le(n.length, e, i);
              case "eo":
                return t.ordinalNumber(e, { unit: "day", valueCallback: i });
              case "eee":
                return (
                  t.day(e, { width: "abbreviated", context: "formatting" }) ||
                  t.day(e, { width: "short", context: "formatting" }) ||
                  t.day(e, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return t.day(e, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  t.day(e, { width: "short", context: "formatting" }) ||
                  t.day(e, { width: "narrow", context: "formatting" })
                );
              case "eeee":
              default:
                return (
                  t.day(e, { width: "wide", context: "formatting" }) ||
                  t.day(e, { width: "abbreviated", context: "formatting" }) ||
                  t.day(e, { width: "short", context: "formatting" }) ||
                  t.day(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 6;
          },
          set: function (e, n, t, r) {
            return (e = ie(e, t, r)).setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T",
          ],
        },
        c: {
          priority: 90,
          parse: function (e, n, t, r) {
            var i = function (e) {
              var n = 7 * Math.floor((e - 1) / 7);
              return ((e + r.weekStartsOn + 6) % 7) + n;
            };
            switch (n) {
              case "c":
              case "cc":
                return Le(n.length, e, i);
              case "co":
                return t.ordinalNumber(e, { unit: "day", valueCallback: i });
              case "ccc":
                return (
                  t.day(e, { width: "abbreviated", context: "standalone" }) ||
                  t.day(e, { width: "short", context: "standalone" }) ||
                  t.day(e, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return t.day(e, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  t.day(e, { width: "short", context: "standalone" }) ||
                  t.day(e, { width: "narrow", context: "standalone" })
                );
              case "cccc":
              default:
                return (
                  t.day(e, { width: "wide", context: "standalone" }) ||
                  t.day(e, { width: "abbreviated", context: "standalone" }) ||
                  t.day(e, { width: "short", context: "standalone" }) ||
                  t.day(e, { width: "narrow", context: "standalone" })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 6;
          },
          set: function (e, n, t, r) {
            return (e = ie(e, t, r)).setUTCHours(0, 0, 0, 0), e;
          },
          incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T",
          ],
        },
        i: {
          priority: 90,
          parse: function (e, n, t, r) {
            var i = function (e) {
              return 0 === e ? 7 : e;
            };
            switch (n) {
              case "i":
              case "ii":
                return Le(n.length, e);
              case "io":
                return t.ordinalNumber(e, { unit: "day" });
              case "iii":
                return (
                  t.day(e, {
                    width: "abbreviated",
                    context: "formatting",
                    valueCallback: i,
                  }) ||
                  t.day(e, {
                    width: "short",
                    context: "formatting",
                    valueCallback: i,
                  }) ||
                  t.day(e, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: i,
                  })
                );
              case "iiiii":
                return t.day(e, {
                  width: "narrow",
                  context: "formatting",
                  valueCallback: i,
                });
              case "iiiiii":
                return (
                  t.day(e, {
                    width: "short",
                    context: "formatting",
                    valueCallback: i,
                  }) ||
                  t.day(e, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: i,
                  })
                );
              case "iiii":
              default:
                return (
                  t.day(e, {
                    width: "wide",
                    context: "formatting",
                    valueCallback: i,
                  }) ||
                  t.day(e, {
                    width: "abbreviated",
                    context: "formatting",
                    valueCallback: i,
                  }) ||
                  t.day(e, {
                    width: "short",
                    context: "formatting",
                    valueCallback: i,
                  }) ||
                  t.day(e, {
                    width: "narrow",
                    context: "formatting",
                    valueCallback: i,
                  })
                );
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 7;
          },
          set: function (e, n, t, a) {
            return (
              (e = (function (e, n) {
                r(2, arguments);
                var t = m(n);
                t % 7 == 0 && (t -= 7);
                var a = 1,
                  o = i(e),
                  c = o.getUTCDay(),
                  s = t % 7,
                  d = (s + 7) % 7,
                  l = (d < a ? 7 : 0) + t - c;
                return o.setUTCDate(o.getUTCDate() + l), o;
              })(e, t, a)).setUTCHours(0, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T",
          ],
        },
        a: {
          priority: 80,
          parse: function (e, n, t, r) {
            switch (n) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  t.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return t.dayPeriod(e, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return (
                  t.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  t.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          set: function (e, n, t, r) {
            return e.setUTCHours(ze(t), 0, 0, 0), e;
          },
          incompatibleTokens: ["b", "B", "H", "K", "k", "t", "T"],
        },
        b: {
          priority: 80,
          parse: function (e, n, t, r) {
            switch (n) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  t.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return t.dayPeriod(e, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return (
                  t.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  t.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          set: function (e, n, t, r) {
            return e.setUTCHours(ze(t), 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "B", "H", "K", "k", "t", "T"],
        },
        B: {
          priority: 80,
          parse: function (e, n, t, r) {
            switch (n) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  t.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return t.dayPeriod(e, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return (
                  t.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                  t.dayPeriod(e, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  t.dayPeriod(e, { width: "narrow", context: "formatting" })
                );
            }
          },
          set: function (e, n, t, r) {
            return e.setUTCHours(ze(t), 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "b", "t", "T"],
        },
        h: {
          priority: 70,
          parse: function (e, n, t, r) {
            switch (n) {
              case "h":
                return De(he, e);
              case "ho":
                return t.ordinalNumber(e, { unit: "hour" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 12;
          },
          set: function (e, n, t, r) {
            var i = e.getUTCHours() >= 12;
            return (
              i && t < 12
                ? e.setUTCHours(t + 12, 0, 0, 0)
                : i || 12 !== t
                ? e.setUTCHours(t, 0, 0, 0)
                : e.setUTCHours(0, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: ["H", "K", "k", "t", "T"],
        },
        H: {
          priority: 70,
          parse: function (e, n, t, r) {
            switch (n) {
              case "H":
                return De(de, e);
              case "Ho":
                return t.ordinalNumber(e, { unit: "hour" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 23;
          },
          set: function (e, n, t, r) {
            return e.setUTCHours(t, 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "b", "h", "K", "k", "t", "T"],
        },
        K: {
          priority: 70,
          parse: function (e, n, t, r) {
            switch (n) {
              case "K":
                return De(ue, e);
              case "Ko":
                return t.ordinalNumber(e, { unit: "hour" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 11;
          },
          set: function (e, n, t, r) {
            return (
              e.getUTCHours() >= 12 && t < 12
                ? e.setUTCHours(t + 12, 0, 0, 0)
                : e.setUTCHours(t, 0, 0, 0),
              e
            );
          },
          incompatibleTokens: ["a", "b", "h", "H", "k", "t", "T"],
        },
        k: {
          priority: 70,
          parse: function (e, n, t, r) {
            switch (n) {
              case "k":
                return De(le, e);
              case "ko":
                return t.ordinalNumber(e, { unit: "hour" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 1 && n <= 24;
          },
          set: function (e, n, t, r) {
            var i = t <= 24 ? t % 24 : t;
            return e.setUTCHours(i, 0, 0, 0), e;
          },
          incompatibleTokens: ["a", "b", "h", "H", "K", "t", "T"],
        },
        m: {
          priority: 60,
          parse: function (e, n, t, r) {
            switch (n) {
              case "m":
                return De(fe, e);
              case "mo":
                return t.ordinalNumber(e, { unit: "minute" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 59;
          },
          set: function (e, n, t, r) {
            return e.setUTCMinutes(t, 0, 0), e;
          },
          incompatibleTokens: ["t", "T"],
        },
        s: {
          priority: 50,
          parse: function (e, n, t, r) {
            switch (n) {
              case "s":
                return De(me, e);
              case "so":
                return t.ordinalNumber(e, { unit: "second" });
              default:
                return Le(n.length, e);
            }
          },
          validate: function (e, n, t) {
            return n >= 0 && n <= 59;
          },
          set: function (e, n, t, r) {
            return e.setUTCSeconds(t, 0), e;
          },
          incompatibleTokens: ["t", "T"],
        },
        S: {
          priority: 30,
          parse: function (e, n, t, r) {
            return Le(n.length, e, function (e) {
              return Math.floor(e * Math.pow(10, 3 - n.length));
            });
          },
          set: function (e, n, t, r) {
            return e.setUTCMilliseconds(t), e;
          },
          incompatibleTokens: ["t", "T"],
        },
        X: {
          priority: 10,
          parse: function (e, n, t, r) {
            switch (n) {
              case "X":
                return Ue(Ce, e);
              case "XX":
                return Ue(Me, e);
              case "XXXX":
                return Ue(Pe, e);
              case "XXXXX":
                return Ue(Ee, e);
              case "XXX":
              default:
                return Ue(Se, e);
            }
          },
          set: function (e, n, t, r) {
            return n.timestampIsSet ? e : new Date(e.getTime() - t);
          },
          incompatibleTokens: ["t", "T", "x"],
        },
        x: {
          priority: 10,
          parse: function (e, n, t, r) {
            switch (n) {
              case "x":
                return Ue(Ce, e);
              case "xx":
                return Ue(Me, e);
              case "xxxx":
                return Ue(Pe, e);
              case "xxxxx":
                return Ue(Ee, e);
              case "xxx":
              default:
                return Ue(Se, e);
            }
          },
          set: function (e, n, t, r) {
            return n.timestampIsSet ? e : new Date(e.getTime() - t);
          },
          incompatibleTokens: ["t", "T", "X"],
        },
        t: {
          priority: 40,
          parse: function (e, n, t, r) {
            return je(e);
          },
          set: function (e, n, t, r) {
            return [new Date(1e3 * t), { timestampIsSet: !0 }];
          },
          incompatibleTokens: "*",
        },
        T: {
          priority: 20,
          parse: function (e, n, t, r) {
            return je(e);
          },
          set: function (e, n, t, r) {
            return [new Date(t), { timestampIsSet: !0 }];
          },
          incompatibleTokens: "*",
        },
      },
      Ye = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
      Fe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
      Re = /^'([^]*?)'?$/,
      We = /''/g,
      Be = /\S/,
      Qe = /[a-zA-Z]/;
    function Xe(e, n, t, a) {
      r(3, arguments);
      var o = String(e),
        c = String(n),
        s = a || {},
        d = s.locale || f;
      if (!d.match) throw new RangeError("locale must contain match property");
      var l = d.options && d.options.firstWeekContainsDate,
        u = null == l ? 1 : m(l),
        h = null == s.firstWeekContainsDate ? u : m(s.firstWeekContainsDate);
      if (!(h >= 1 && h <= 7))
        throw new RangeError(
          "firstWeekContainsDate must be between 1 and 7 inclusively"
        );
      var g = d.options && d.options.weekStartsOn,
        w = null == g ? 0 : m(g),
        b = null == s.weekStartsOn ? w : m(s.weekStartsOn);
      if (!(b >= 0 && b <= 6))
        throw new RangeError(
          "weekStartsOn must be between 0 and 6 inclusively"
        );
      if ("" === c) return "" === o ? i(t) : new Date(NaN);
      var y,
        x = { firstWeekContainsDate: h, weekStartsOn: b, locale: d },
        v = [{ priority: 10, set: Ge, index: 0 }],
        k = c
          .match(Fe)
          .map(function (e) {
            var n = e[0];
            return "p" === n || "P" === n ? (0, A[n])(e, d.formatLong, x) : e;
          })
          .join("")
          .match(Ye),
        T = [];
      for (y = 0; y < k.length; y++) {
        var C = k[y];
        !s.useAdditionalWeekYearTokens && Q(C) && X(C),
          !s.useAdditionalDayOfYearTokens && B(C) && X(C);
        var M = C[0],
          P = Ae[M];
        if (P) {
          var S = P.incompatibleTokens;
          if (Array.isArray(S)) {
            for (var E = void 0, D = 0; D < T.length; D++) {
              var U = T[D].token;
              if (-1 !== S.indexOf(U) || U === M) {
                E = T[D];
                break;
              }
            }
            if (E)
              throw new RangeError(
                "The format string mustn't contain `"
                  .concat(E.fullToken, "` and `")
                  .concat(C, "` at the same time")
              );
          } else if ("*" === P.incompatibleTokens && T.length)
            throw new RangeError(
              "The format string mustn't contain `".concat(
                C,
                "` and any other token at the same time"
              )
            );
          T.push({ token: M, fullToken: C });
          var j = P.parse(o, C, d.match, x);
          if (!j) return new Date(NaN);
          v.push({
            priority: P.priority,
            set: P.set,
            validate: P.validate,
            value: j.value,
            index: v.length,
          }),
            (o = j.rest);
        } else {
          if (M.match(Qe))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" +
                M +
                "`"
            );
          if (
            ("''" === C ? (C = "'") : "'" === M && (C = _e(C)),
            0 !== o.indexOf(C))
          )
            return new Date(NaN);
          o = o.slice(C.length);
        }
      }
      if (o.length > 0 && Be.test(o)) return new Date(NaN);
      var L = v
          .map(function (e) {
            return e.priority;
          })
          .sort(function (e, n) {
            return n - e;
          })
          .filter(function (e, n, t) {
            return t.indexOf(e) === n;
          })
          .map(function (e) {
            return v
              .filter(function (n) {
                return n.priority === e;
              })
              .reverse();
          })
          .map(function (e) {
            return e[0];
          }),
        q = i(t);
      if (isNaN(q)) return new Date(NaN);
      var z = p(q, F(q)),
        N = {};
      for (y = 0; y < L.length; y++) {
        var I = L[y];
        if (I.validate && !I.validate(z, I.value, x)) return new Date(NaN);
        var H = I.set(z, N, I.value, x);
        H[0] ? ((z = H[0]), re(N, H[1])) : (z = H);
      }
      return z;
    }
    function Ge(e, n) {
      if (n.timestampIsSet) return e;
      var t = new Date(0);
      return (
        t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
        t.setHours(
          e.getUTCHours(),
          e.getUTCMinutes(),
          e.getUTCSeconds(),
          e.getUTCMilliseconds()
        ),
        t
      );
    }
    function _e(e) {
      return e.match(Re)[1].replace(We, "'");
    }
    var Ke = (function () {
        const e = function (e) {
          delete Projects[e],
            db
              .collection("users")
              .doc(userId)
              .set(Projects)
              .then(() => {
                console.log("Synchronized");
              })
              .catch((e) => console.log(e));
        };
        return {
          newProject: function (e) {
            (Projects[e] = { title: e, todoList: [] }),
              db
                .collection("users")
                .doc(userId)
                .set(Projects)
                .then(() => {
                  console.log("Synchronized");
                })
                .catch((e) => console.log(e));
          },
          newTask: function (e, n, t, r, i, a = !1) {
            Projects[i].todoList.push(
              (function (e, n, t, r, i) {
                return {
                  title: e,
                  dueDate: n,
                  description: t,
                  importance: r,
                  checked: i,
                };
              })(e, n.toString(), t, r, a)
            ),
              db
                .collection("users")
                .doc(userId)
                .set(Projects)
                .then(() => {
                  console.log("Synchronized");
                })
                .catch((e) => console.log(e));
          },
          deleteProject: e,
          renameObject: function (n, t) {
            (Projects[t] = Projects[n]),
              e(n),
              (Projects[t].title = t),
              db
                .collection("users")
                .doc(userId)
                .set(Projects)
                .then(() => {
                  console.log("Synchronized");
                })
                .catch((e) => console.log(e));
          },
          deleteTask: function (e, n) {
            let t = Projects[te.getActiveProject()].todoList.findIndex(
              (t) =>
                t.title === e &&
                V(new Date(t.dueDate), "MM/dd/yyyy") ===
                  V(Xe(n, "PPP", new Date()), "MM/dd/yyyy")
            );
            Projects[te.getActiveProject()].todoList.splice(t, 1),
              db
                .collection("users")
                .doc(userId)
                .set(Projects)
                .then(() => {
                  console.log("Synchronized");
                })
                .catch((e) => console.log(e));
          },
          editTask: function (e, n, t, r, i) {
            (e.title = n),
              (e.dueDate = new Date(t).toString()),
              (e.description = r),
              (e.importance = i),
              db
                .collection("users")
                .doc(userId)
                .set(Projects)
                .then(() => {
                  console.log("Synchronized");
                })
                .catch((e) => console.log(e));
          },
          doesAlreadyExist: function (e, n) {
            return !!Projects[te.getActiveProject()].todoList.some(
              (t) =>
                t.title === e &&
                V(new Date(t.dueDate), "MM/dd/yyyy") === V(n, "MM/dd/yyyy")
            );
          },
          doesAlreadyExistForEdit: function (e, n, t) {
            return (
              (e.title !== n ||
                V(new Date(e.dueDate), "MM/dd/yyyy") !==
                  V(Xe(t, "yyyy/MM/dd", new Date()), "MM/dd/yyyy")) &&
              !!Projects[te.getActiveProject()].todoList.some(
                (e) =>
                  e.title === n &&
                  V(new Date(e.dueDate), "MM/dd/yyyy") ===
                    V(Xe(t, "yyyy/MM/dd", new Date()), "MM/dd/yyyy")
              )
            );
          },
          projectAlreadyExists: function (e) {
            return !!Projects[e];
          },
          returnToDo: function (e, n) {
            return Projects[te.getActiveProject()].todoList.find(
              (t) =>
                t.title === e &&
                V(new Date(t.dueDate), "MM/dd/yyyy") ===
                  V(Xe(n, "PPP", new Date()), "MM/dd/yyyy")
            );
          },
          checkBox: function (e, n) {
            let t = Projects[te.getActiveProject()].todoList.find(
              (t) =>
                t.title === e &&
                V(new Date(t.dueDate), "MM/dd/yyyy") ===
                  V(Xe(n, "PPP", new Date()), "MM/dd/yyyy")
            );
            (t.checked = !t.checked),
              db
                .collection("users")
                .doc(userId)
                .set(Projects)
                .then(() => {
                  console.log("Synchronized");
                })
                .catch((e) => console.log(e));
          },
        };
      })(),
      Je = (function () {
        const e = document.querySelector(".new-project"),
          n = document.querySelector(".new-project-form"),
          t = document.querySelector(".sidebar"),
          r = document.querySelector("#fold-sidebar"),
          i = document.querySelector(".Project-Title-text");
        return {
          addProjectHandler: function () {
            n.addEventListener("submit", (a) => {
              a.preventDefault();
              const o = document.createElement("div");
              o.classList.add("deleteProjectDiv");
              const c = document.createElement("a"),
                s = document.createElement("button");
              s.classList.add("deleteProject"),
                (s.innerHTML = "&#10060;"),
                (c.href = "#"),
                o.append(s, c),
                e.value
                  ? e.value in Projects
                    ? alert("Project with this name already exists")
                    : ((c.textContent = e.value),
                      t.insertBefore(o, r),
                      Ke.newProject(e.value),
                      (i.style.border = "1px solid white"),
                      te.switchTabs(),
                      n.reset())
                  : alert("Please choose a name for this project");
            }),
              t.addEventListener("click", (e) => {
                if (e.target.classList.contains("deleteProject")) {
                  const n = t.querySelectorAll("a");
                  let r = e.target.nextElementSibling.textContent;
                  if (!(n.length > 1)) return;
                  if (
                    (t.removeChild(e.target.parentNode),
                    Ke.deleteProject(r),
                    te.getActiveProject() !== r)
                  )
                    return;
                  ne.clearList();
                }
              }),
              (function () {
                const e = document.querySelector(".Project-Title-text");
                e.addEventListener("focusout", () => {
                  let n = t.querySelector(".active");
                  if (
                    e.textContent === n.textContent ||
                    Ke.projectAlreadyExists(e.textContent)
                  ) {
                    if (e.textContent === n.textContent) return;
                    ne.animateWrongName("project-title");
                  } else
                    Ke.renameObject(n.textContent, e.textContent),
                      (n.textContent = e.textContent),
                      te.setActiveProject(n.textContent);
                });
              })();
          },
          renderProjects: function () {
            t.querySelectorAll(".deleteProjectDiv").length > 0 &&
              t.querySelectorAll(".deleteProjectDiv").forEach((e) => {
                t.removeChild(e);
              }),
              Object.keys(Projects).forEach((e) => {
                const n = document.createElement("div");
                n.classList.add("deleteProjectDiv");
                const a = document.createElement("a"),
                  o = document.createElement("button");
                o.classList.add("deleteProject"),
                  (o.innerHTML = "&#10060;"),
                  (a.href = "#"),
                  n.append(o, a),
                  (a.textContent = e),
                  t.insertBefore(n, r),
                  (i.style.border = "1px solid white");
              }),
              t.querySelector("a").classList.add("active");
          },
        };
      })();
    ({
      authenticate: function () {
        const e = document.querySelector("#logoutBtn"),
          n = document.querySelector("#firebaseui-auth-container"),
          t = document.querySelector(".user"),
          r = document.querySelector("#username");
        var i = {
            callbacks: {
              signInSuccessWithAuthResult: function (t, r) {
                (e.style.display = "block"), (n.style.display = "none");
                var i = t.user,
                  a = t.additionalUserInfo.isNewUser;
                if (((userId = i.uid), a))
                  return (
                    Ke.newProject("Important"),
                    Ke.newProject("Movies to watch"),
                    Ke.newTask(
                      "I am a sample task (click me to expand)",
                      new Date("2020/10/03"),
                      "You can click the project title to rename it",
                      "High",
                      "Important"
                    ),
                    Ke.newTask(
                      "Buy milk",
                      new Date("2020/05/30"),
                      "Four bottles",
                      "Moderate",
                      "Important"
                    ),
                    Ke.newTask(
                      "Star Wars IX",
                      new Date("2020/06/10"),
                      "Please don't",
                      "Moderate",
                      "Movies to watch",
                      !1
                    ),
                    db.collection("users").doc(i.uid).set(Projects),
                    !1
                  );
              },
              signInFailure: function (e) {
                return handleUIError(e);
              },
              uiShown: function () {},
            },
            credentialHelper:
              firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
            queryParameterForWidgetMode: "mode",
            queryParameterForSignInSuccessUrl: "signInSuccessUrl",
            signInFlow: "popup",
            signInSuccessUrl: "#",
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              {
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                requireDisplayName: !0,
              },
            ],
            tosUrl: "#",
            privacyPolicyUrl: function () {
              window.location.assign("#");
            },
          },
          a = new firebaseui.auth.AuthUI(firebase.auth());
        window.addEventListener("load", function () {
          firebase.auth().onAuthStateChanged(
            function (i) {
              if (i) {
                var a = i.displayName;
                (e.style.display = "block"),
                  (n.style.display = "none"),
                  (t.style.visibility = "visible"),
                  (r.textContent = a),
                  (userId = i.uid),
                  db
                    .collection("users")
                    .doc(i.uid)
                    .get()
                    .then((e) => {
                      (Projects = e.data()),
                        ne.clearList(),
                        Je.renderProjects(),
                        te.switchTabs(),
                        ne.renderUnchecked(Object.keys(Projects)[0]),
                        ee.controlFlow(),
                        Je.addProjectHandler(),
                        ne.addNewItemHandler();
                    })
                    .catch((e) => {
                      console.log(e);
                    });
              } else {
                ne.clearList();
                const r = document.querySelector(".sidebar");
                r.querySelectorAll(".deleteProjectDiv").forEach((e) => {
                  r.removeChild(e);
                }),
                  (t.style.visibility = "hidden"),
                  (userId = !1),
                  (e.style.display = "none"),
                  (n.style.display = "block");
              }
            },
            function (e) {
              console.log(e);
            }
          );
        }),
          a.start("#firebaseui-auth-container", i),
          a.isPendingRedirect() &&
            ((n.style.display = "block"),
            a.start("#firebaseui-auth-container", i)),
          e.addEventListener("click", () => {
            firebase
              .auth()
              .signOut()
              .then(
                () => {
                  a.start("#firebaseui-auth-container", i);
                },
                function (e) {}
              );
          });
      },
      getUserId: function () {
        return userId;
      },
    }.authenticate());
  },
]);
