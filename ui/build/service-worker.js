!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const i=["client/4f1eb9c0b174fa5f3800/about.0.js","client/4f1eb9c0b174fa5f3800/blog.1.js","client/4f1eb9c0b174fa5f3800/blog_$slug.2.js","client/4f1eb9c0b174fa5f3800/index.3.js","client/4f1eb9c0b174fa5f3800/main.js"].concat(["service-worker-index.html","global.css","img/blackboat/31.jpg","img/blackboat/32.jpg","img/blackboat/33.jpg","img/blackboat/34.jpg","img/blackboat/36.jpg","img/blackboat/37.jpg","img/blackboat/8.jpg","img/blackboat/b30.jpg","img/colage/2dx.jpg","img/colage/3dx.jpg","img/colage/4dx.jpg","img/colage/5dx.jpg","img/colage/6dx.jpg","img/goods/boat1.jpg","img/goods/boat_14sm.jpg","img/goods/boat_16sm.jpg","img/goods/boat_17sm.jpg","img/goods/boat_18sm.jpg","img/goods/boat_19sm.jpg","img/goods/boat_20sm.jpg","img/goods/boat_21sm.jpg","img/goods/boat_22sm.jpg","img/goods/canoe_10sm.jpg","img/goods/canoe_12sm.jpg","img/goods/canoe_13sm.jpg","img/icon.png","img/icons/call-white.svg","img/icons/call.svg","img/icons/mail-white.svg","img/icons/mail.svg","img/logo.png","img/tech/01.jpg","img/tech/02.jpg","img/tech/03.jpg","img/tech/04.jpg","img/tech/05.jpg","img/tech/06.jpg","img/tech/08.jpg","img/top.png","manifest.json"]),n=new Set(i);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1561647875361").then(e=>e.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1561647875361"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&n.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1561647875361").then(async t=>{try{const o=await fetch(e.request);return t.put(e.request,o.clone()),o}catch(o){const i=await t.match(e.request);if(i)return i;throw o}}))))})}]);