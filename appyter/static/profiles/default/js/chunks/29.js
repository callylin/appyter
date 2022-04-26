(self.webpackChunkappyter_js=self.webpackChunkappyter_js||[]).push([[29],{9029:function(e,t){var a,n;void 0===(n="function"==typeof(a=function(){return function(e,t){"use strict";var a=this;if(!window.File||!window.FileReader)throw new Error("Socket.IO File Upload: Browser Not Supported");window.siofu_global||(window.siofu_global={instances:0,downloads:0});var n={},r={},i={},o={},s={},u=function(e,a){return t&&t[e]||a};a.fileInputElementId="siofu_input_"+window.siofu_global.instances++,a.resetFileInputs=!0,a.useText=u("useText",!1),a.serializedOctets=u("serializedOctets",!1),a.useBuffer=u("useBuffer",!0),a.chunkSize=u("chunkSize",102400),a.topicName=u("topicName","siofu"),a.wrapData=u("wrapData",!1);var l=function(){return"boolean"==typeof a.wrapData||"object"==typeof a.wrapData&&!Array.isArray(a.wrapData)&&!(!a.wrapData.wrapKey||"string"!=typeof a.wrapData.wrapKey.action||"string"!=typeof a.wrapData.wrapKey.message||!a.wrapData.unwrapKey||"string"!=typeof a.wrapData.unwrapKey.action||"string"!=typeof a.wrapData.unwrapKey.message)};a.exposePrivateFunction=u("exposePrivateFunction",!1);var c=function(e){return a.wrapData?a.topicName:a.topicName+e},p=function(e,t){if(!l()||!a.wrapData)return e;var n={};a.wrapData.additionalData&&Object.assign(n,a.wrapData.additionalData);var r=a.wrapData.wrapKey&&"string"==typeof a.wrapData.wrapKey.action?a.wrapData.wrapKey.action:"action",i=a.wrapData.wrapKey&&"string"==typeof a.wrapData.wrapKey.message?a.wrapData.wrapKey.message:"message";return n[r]=t,n[i]=e,n},f=function(e,t){var n=document.createEvent("Event");for(var r in n.initEvent(e,!1,!1),t)t.hasOwnProperty(r)&&(n[r]=t[r]);return a.dispatchEvent(n)},d=[],w=function(e,t,a,n){e.addEventListener(t,a,n),d.push(arguments)},m=function(e,t,a,n){e.removeEventListener&&e.removeEventListener(t,a,n)},v=function(t){if(null!==a.maxFileSize&&t.size>a.maxFileSize)f("error",{file:t,message:"Attempt by client to upload file exceeding the maximum file size",code:1});else if(f("start",{file:t})){var n,s=new FileReader,u=window.siofu_global.downloads++,l=!1,d=a.useText,v=0;s._realReader&&(s=s._realReader),r[u]=t;var h={id:u},g=a.chunkSize;(g>=t.size||g<=0)&&(g=t.size);var b=function(){if(!h.abort){var e=t.slice(v,Math.min(v+g,t.size));d?s.readAsText(e):s.readAsArrayBuffer(e)}},D=function(r){if(!h.abort){var i=Math.min(v+g,t.size);(function(n,r,i){var o=!1;if(!d)try{var s=new Uint8Array(i);a.serializedOctets?i=s:a.useBuffer?i=s.buffer:(o=!0,i=y(s))}catch(t){return void e.emit(c("_done"),p({id:u,interrupt:!0},"done"))}e.emit(c("_progress"),p({id:u,size:t.size,start:n,end:r,content:i,base64:o},"progress"))})(v,i,r.target.result),f("progress",{file:t,bytesLoaded:i,name:n}),(v+=g)>=t.size&&(e.emit(c("_done"),p({id:u},"done")),f("load",{file:t,reader:s,name:n}),l=!0)}};w(s,"load",D),w(s,"error",(function(){e.emit(c("_done"),p({id:u,interrupt:!0},"done")),m(s,"load",D)})),w(s,"abort",(function(){e.emit(c("_done"),p({id:u,interrupt:!0},"done")),m(s,"load",D)})),e.emit(c("_start"),p({name:t.name,mtime:t.lastModified,meta:t.meta,size:t.size,encoding:d?"text":"octet",id:u},"start"));return o[u]=function(e){n=e,b()},i[u]=function(){l||b()},h}},h=function(e){if(0!==e.length){for(var t=0;t<e.length;t++)e[t].meta||(e[t].meta={});f("choose",{files:e})&&function(e){for(var t=0;t<e.length;t++){var a=v(e[t]);s[a.id]=a}}(e)}},g=function(e){var t=e.target.files||e.dataTransfer.files;if(e.preventDefault(),h(t),a.resetFileInputs){try{e.target.value=""}catch(e){}if(e.target.value){var n=document.createElement("form"),r=e.target.parentNode,i=e.target.nextSibling;n.appendChild(e.target),n.reset(),r.insertBefore(e.target,i)}}};this.submitFiles=function(e){e&&h(e)},this.listenOnSubmit=function(e,t){t.files&&w(e,"click",(function(){h(t.files)}),!1)},this.listenOnArraySubmit=function(e,t){for(var a in t)this.listenOnSubmit(e,t[a])},this.listenOnInput=function(e){e.files&&w(e,"change",g,!1)},this.listenOnDrop=function(e){w(e,"dragover",(function(e){e.preventDefault()}),!1),w(e,"drop",g)},this.prompt=function(){var e=function(){var e=document.getElementById(a.fileInputElementId);return e||((e=document.createElement("input")).setAttribute("type","file"),e.setAttribute("id",a.fileInputElementId),e.style.display="none",document.body.appendChild(e)),e}();w(e,"change",g,!1);var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)},this.destroy=function(){for(var e in function(){for(var e=d.length-1;e>=0;e--)m.apply(this,d[e]);d=[]}(),t=void 0,(t=document.getElementById(a.fileInputElementId))&&t.parentNode.removeChild(t),s)s.hasOwnProperty(e)&&(s[e].abort=!0);var t;n=null,r=null,o=null,s=null},this.addEventListener=function(e,t){n[e]||(n[e]=[]),n[e].push(t)},this.removeEventListener=function(e,t){if(!n[e])return!1;for(var a=0;a<n[e].length;a++)if(n[e][a]===t)return n[e].splice(a,1),!0;return!1},this.dispatchEvent=function(e){var t=n[e.type];if(!t)return!0;for(var a=!0,r=0;r<t.length;r++)!1===t[r](e)&&(a=!1);return a};var y=function(e){var t,a=e.buffer.byteLength,n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(t=0;t<a;t+=3)n+=r[e[t]>>2],n+=r[(3&e[t])<<4|e[t+1]>>4],n+=r[(15&e[t+1])<<2|e[t+2]>>6],n+=r[63&e[t+2]];return a%3==2?n=n.substring(0,n.length-1)+"=":a%3==1&&(n=n.substring(0,n.length-2)+"=="),n},b=function(e){i[e.id]&&i[e.id]()},D=function(e){o[e.id]&&o[e.id](e.name)},E=function(e){r[e.id]&&f("complete",{file:r[e.id],detail:e.detail,success:e.success})},k=function(e){r[e.id]&&(f("error",{file:r[e.id],message:e.message,code:0}),s&&(s[e.id].abort=!0))};if(l()&&a.wrapData){var z={chunk:b,ready:D,complete:E,error:k};w(e,c(),(function(e){if("object"==typeof e){var t=a.wrapData.unwrapKey&&"string"==typeof a.wrapData.unwrapKey.action?a.wrapData.unwrapKey.action:"action",n=a.wrapData.unwrapKey&&"string"==typeof a.wrapData.unwrapKey.message?a.wrapData.unwrapKey.message:"message",r=e[t],i=e[n];r&&i&&z[r]?z[r](i):console.log("SocketIOFileUploadClient Error: You choose to wrap your data but the message from the server is wrong configured. Check the message and your wrapData option")}else console.log("SocketIOFileUploadClient Error: You choose to wrap your data so the message from the server need to be an object")}))}else w(e,c("_chunk"),b),w(e,c("_ready"),D),w(e,c("_complete"),E),w(e,c("_error"),k);this.exposePrivateFunction&&(this.chunckCallback=b,this.readyCallback=D,this.completCallback=E,this.errorCallback=k)}})?a.apply(t,[]):a)||(e.exports=n)}}]);