function s(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}function e(s){return s&&s.__esModule?s.default:s}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequirea837;null==o&&((o=function(s){if(s in n)return n[s].exports;if(s in i){var e=i[s];delete i[s];var t={id:s,exports:{}};return n[s]=t,e.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(s,e){i[s]=e},t.parcelRequirea837=o),o.register("kyEFX",(function(e,t){var n,i;s(e.exports,"register",(function(){return n}),(function(s){return n=s})),s(e.exports,"resolve",(function(){return i}),(function(s){return i=s}));var o={};n=function(s){for(var e=Object.keys(s),t=0;t<e.length;t++)o[e[t]]=s[e[t]]},i=function(s){var e=o[s];if(null==e)throw new Error("Could not resolve bundle with id "+s);return e}})),o("kyEFX").register(JSON.parse('{"l057C":"shoppingList.960c660d.js","lp5u4":"sprite.ff7a874f.svg","3uQue":"empty-cont-img.fd3db3d5.png","5UbS1":"index.9cac39be.css","8DJw5":"shoppingList.8f997ecd.js"}')),o("ecGnp"),o("iiT47"),o("gQXit");var l;l=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var r;function a(s){const{_id:t,book_image:n,list_name:i,title:o,description:r,author:a,buy_links:[c,p,u,g,h,d]}=s;return` \n  <li data-id="${t}" class="li-item">\n    <div class="shopping-list-book-item">\n      <img\n        class="shopping-list-book-img"\n        src="${n}"\n        alt="Image of ${o}"\n      />\n      <div class="shopping-list-book-text">\n        <h2 class="shopping-list-book-title">${o}</h2>\n        <p class="shopping-list-book-category">${i}</p>\n        <p class="shopping-list-book-description">${r||"Description is empty"}</p>\n        <p class="shopping-list-book-author">${a}</p>\n        <div class="shopping-list-book-links">\n          <a class="test-link" href="${c.url}">\n            <svg width="32" height="11" class="shopping-list-amazon"><use href="${e(l)}#icon-amazon"></use></svg>\n          </a>\n          <a class="test-link" href="${p.url}">\n            <svg width="16" height="16" class="shopping-list-apple"><use href="${e(l)}#icon-apple-books-logo"></use></svg>\n          </a>\n          <a class="test-link" href="${h.url}">\n            <svg width="16" height="16" class="shopping-list-bookshop"><use href="${e(l)}#icon-book-shops-logo"></use></svg>\n          </a>\n        </div>\n        <button data-id="${t}" class="shopping-list-book-btn" >\n          <svg class="shopping-list-book-btn-icon" width="16" height="16"><use href="${e(l)}#icon-trash"></use></svg>\n        </button>\n      </div>\n    </div>\n  </li>`}function c(s){let e;if(0===s.length)e=p();else{e=`\n  <div class="container grid-wrapper shopping-list-container">\n    <h2 class="shop-list-title">Shopping <span class="shop-list-title-span">List</span></h2>\n    <ul class="shopping-list">${s.join("")}</ul>\n  </div>`}return e}function p(){return`\n    <div class="container grid-wrapper shopping-list-container">\n      <h2 class="shop-list-title">Shopping <span class="shop-list-title-span">List</span></h2>\n      <div class="shop-list-empty-container">\n        <p class="shop-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>\n        <img class="shop-list-empty-img" src="${e(r)}" alt="Books in empty section"/>\n      </div>\n    </div>`}r=new URL(o("kyEFX").resolve("3uQue"),import.meta.url).toString();var u=o("2sKPt");const g=document.querySelectorAll(".mob-menu-link");g.forEach((s=>s.classList.remove("activ-page"))),g[1].classList.add("activ-page");const h=document.querySelectorAll(".menu-link");h.forEach((s=>s.classList.remove("activ-page"))),h[1].classList.add("activ-page");const d=document.querySelector(".cont-section"),f=[];function v(s){const e=[...document.querySelectorAll(".li-item")],t=JSON.parse(localStorage.getItem("bookList"))||null,n=s.target.dataset.id,i=t.indexOf(n);console.log(i),-1!==i&&(t.splice(i,1),localStorage.setItem("bookList",JSON.stringify(t)),e.find((s=>s.dataset.id===n)).remove()),0===t.length&&(d.innerHTML=p())}(async s=>{const e=JSON.parse(localStorage.getItem("bookList"))||null;for(const s of e){const e=a(await(new(0,u.FetchBook)).fetchElement(s));f.push(e)}if(d.innerHTML=c(f),0!==e.length){document.querySelector(".shopping-list").addEventListener("click",v)}})();
//# sourceMappingURL=shoppingList.960c660d.js.map