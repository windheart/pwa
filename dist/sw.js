if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-6d41fb21.js",revision:null},{url:"assets/index-d526a0c5.css",revision:null},{url:"index.html",revision:"757ffeb1d578c46126d1da7c20420ab0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android/android-launchericon-512-512.png",revision:"d39383b4a097243e4d07a51a02326d49"},{url:"android/android-launchericon-192-192.png",revision:"096c8d12d5b0b36d5c8420cd3ce2ae2a"},{url:"manifest.webmanifest",revision:"945e99b99c42feafa96b220cf850e43e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));