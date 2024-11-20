"use strict";
exports.htmlspecialchars = (s, ...e) =>
    Promise.all(e).then((e) =>
        ((s, e) =>
            s.reduce((s, r, t) => s + r + (null != e[t] ? e[t] : ""), ""))(s, e)
    );
