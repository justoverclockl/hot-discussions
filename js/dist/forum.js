module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=7)}([function(t,o){t.exports=flarum.core.compat["forum/app"]},,function(t,o){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,o){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,o){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["common/components/Link"]},function(t,o,n){"use strict";var e=n(2),r=n.n(e);function i(t,o){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t})(t,o)}var c=n(3),s=n.n(c),u=n(0),a=n.n(u),f=n(4),l=n.n(f),d=n(5),p=n.n(d),h=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,i(o,n);var r=e.prototype;return r.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=!0},r.oncreate=function(t){var o=this,n=a.a.forum.attribute("justoverclock-hot-discussions.discLimit")||10,e="1"===a.a.forum.attribute("justoverclock-hot-discussions.hideClosed")?"-is:locked":"";a.a.store.find("discussions",{sort:"-commentCount",filter:{q:e},page:{limit:n}}).then((function(t){o.hotDisc=t,o.loading=!1,m.redraw()}))},r.className=function(){return"hotDiscussions-widget"},r.icon=function(){return"fab fa-hotjar hotwdg"},r.title=function(){return a.a.translator.trans("justoverclock-hot-discussions.forum.widget-title")},r.content=function(){return this.loading?m(l.a,null):m("div",{className:"hotDiscussion-content"},m("ul",{className:"hotDisc fa-ul"},this.hotDisc.map((function(t){return m("li",{class:"hotDiscWidget"},m("i",{class:"fas fa-caret-right hotdiscIcon"}),m(p.a,{href:a.a.route.discussion(t),alt:t.title(),className:"hotDiscLink"},t.title()))}))))},e}(s.a);o.a=function(t){(new r.a).add({key:"discHot",component:h,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-hot-discussions")}},function(t,o,n){"use strict";n.r(o);var e=n(0),r=n.n(e),i=n(6);r.a.initializers.add("justoverclock/hot-discussions",(function(){Object(i.a)(r.a)}))}]);
//# sourceMappingURL=forum.js.map