module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)n.d(e,i,function(o){return t[o]}.bind(null,i));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=8)}([function(t,o){t.exports=flarum.core.compat["forum/app"]},function(t,o){t.exports=flarum.core.compat["admin/app"]},function(t,o){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,o){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,o){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["common/components/Link"]},function(t,o,n){"use strict";var e=n(2),i=n.n(e);function r(t,o){return(r=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var s=n(3),c=n.n(s),u=n(0),a=n.n(u),l=n(4),f=n.n(l),d=n(5),p=n.n(d),h=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,r(o,n);var i=e.prototype;return i.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=!0},i.oncreate=function(t){var o=this,n=a.a.forum.attribute("justoverclock-hot-discussions.discLimit")||10;a.a.store.find("discussions",{sort:"-commentCount",page:{limit:n}}).then((function(t){o.hotDisc=t,o.loading=!1,m.redraw()}))},i.className=function(){return"hotDiscussions-widget"},i.icon=function(){return"fab fa-hotjar hotwdg"},i.title=function(){return a.a.translator.trans("justoverclock-hot-discussions.forum.widget-title")},i.content=function(){return this.loading?m(f.a,null):m("div",{className:"hotDiscussion-content"},m("ul",{className:"hotDisc fa-ul"},this.hotDisc.map((function(t){return m("li",{class:"hotDiscWidget"},m("i",{class:"fas fa-caret-right hotdiscIcon"}),m(p.a,{href:a.a.route.discussion(t),alt:t.title(),className:"hotDiscLink"},t.title()))}))))},e}(c.a);o.a=function(t){(new i.a).add({key:"discHot",component:h,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-hot-discussions")}},,function(t,o,n){"use strict";n.r(o);var e=n(1),i=n.n(e),r=n(6);i.a.initializers.add("justoverclock/hot-discussions",(function(){Object(r.a)(i.a),i.a.extensionData.for("justoverclock-hot-discussions").registerSetting({setting:"justoverclock-hot-discussions.discLimit",name:"justoverclock-hot-discussions.discLimit",type:"number",label:i.a.translator.trans("justoverclock-hot-discussions.admin.discLimit"),help:i.a.translator.trans("justoverclock-hot-discussions.admin.discLimit-help")})}))}]);
//# sourceMappingURL=admin.js.map