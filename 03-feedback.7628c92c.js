var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o);var n=o("kEUo3");const a=document.querySelector(".feedback-form");a.addEventListener("input",(0,n.throttle)((function(e){l[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(l))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(l)}));const l={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state")),t=document.querySelector(".feedback-form input"),r=document.querySelector(".feedback-form textarea");e&&(t.value=e.email,r.value=e.message)}();
//# sourceMappingURL=03-feedback.7628c92c.js.map