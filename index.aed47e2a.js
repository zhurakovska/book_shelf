!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequirea837;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequirea837=a),a("iE7OH").register(JSON.parse('{"9ndqt":"index.aed47e2a.js","ee16w":"sprite.ff7a874f.svg","5UbS1":"index.9cac39be.css","aWNzN":"shoppingList.47decc57.js"}'));var r=a("2pRc6");var i=a("bpxeT"),c=a("2TvXO");r=a("2pRc6");function s(e){var t=e.list_name,n=e.books.map((function(e){var t=e.title,n=e.author,o=e.book_image,a=e._id;return'\n        <li class="card-item">\n          <button type="button" data-id='.concat(a,' class="card-wrapper-btn">\n            <div loading="lazy" data-id=').concat(a,' class="book-image" style="background-image: url(').concat(o,')"></div>\n            <p class="hover-text">quick view</p>\n          </button>\n          <h4 class="book-subtitle" data-id=').concat(a,">").concat(t,'</h4>\n          <p class="book-autor">').concat(n,"</p>\n        </li>\n      ")})).join("");return'\n      <ul class="best-book-list">\n        <li class="book-item">\n          <h3 class="book-title">'.concat(t,'</h3> \n          <ul class="book-info">').concat(n,'</ul>\n          <button type="button" class="more-btn" data-listname="').concat(t,'">see more</button>\n        </li>\n      </ul>\n  ')}function l(e,t){var n=e.map((function(e){return{list_name:e.list_name,books:e.books.slice(0,t)}}));return"".concat('<div class="container grid-wrapper">\n      <h2 class="bestsellers-title dark-theme">\n        Best Sellers <span class="bestsellers-title-accent">Books</span>\n      </h2>').concat(n.map(s).join(""))}var d,u=document.querySelector(".cont-section"),f=document.querySelector(".loader-inner"),v=new(0,r.FetchBook);function m(){u.innerHTML=""}function p(e){return h.apply(this,arguments)}function h(){return(h=e(i)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.style.display="flex",m(),e.next=5,v.fetchElement("/top-books");case 5:b(e.sent,n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,f.style.display="none",e.finish(12);case 15:case"end":return e.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}function b(e,t){var n=l(e,t);u.insertAdjacentHTML("beforeend",n)}function g(){var e=window.innerWidth;u.addEventListener("click",(function(e){T(e.target.dataset.listname)})),d&&clearTimeout(d),d=setTimeout((function(){window.removeEventListener("resize",g),p(e>=1440?5:e>=768?3:1),window.addEventListener("resize",g)}),300)}g(),window.addEventListener("resize",g);var y=document.querySelector(".aside-list"),w=document.querySelector(".cont-section"),k=document.querySelector(".categories-list-name"),L=document.querySelector(".loader-inner"),E=new(0,r.FetchBook);function S(e){e.preventDefault();var t=e.target;t.classList.contains("aside-link")&&(x(e),k.classList.remove("activ-name"),document.querySelectorAll(".aside-link").forEach((function(e){e.classList.remove("activ-name")})),t.classList.add("activ-name"),T(t.textContent))}function T(e){var t,n;t=e,n=document.querySelectorAll(".aside-link"),k.classList.remove("activ-name"),n.forEach((function(e){e.classList.remove("activ-name"),e.textContent===t&&e.classList.add("activ-name")})),L.style.display="flex",E.fetchElement("/category?category=".concat(e)).then((function(t){!function(e,t){var n=t.split(" "),o=n[n.length-1],a=document.createElement("span");a.textContent=o,a.style.color="#4F2EE8";var r=t.replace(o,a.outerHTML);w.innerHTML='<div class="container grid-wrapper">\n  <h1 class="books-section-title" id="section-title"">'.concat(r,'</h1>\n  <ul class="card-list">').concat(e,"</ul>\n  </div>")}
//! --------------------
(t.map((function(e){return n=(t=e).book_image,o=t.title,a=t.author,r=t._id,'\n    <li class="cards-item">\n      <a class="cards-link" href="#" data-id="'.concat(r,'">\n        <div class="cards-header card-wrapper" data-id="').concat(r,'">\n          <img class="cards-img" src="').concat(n,'" alt="').concat(o,'" loading="lazy" data-id="').concat(r,'" />\n          <p class="hover-text-card">quick view</p>\n        </div>\n        <div class="cards-content">\n          <h2 class="cards-title" data-id="').concat(r,'">').concat(o,'</h2>\n          <p class="cards-author">').concat(a,"</p>    \n        </div>\n         \n      </a>\n    </li>");var t,n,o,a,r})).join(""),e)})).catch((function(e){console.warn(e)})).finally((function(){L.style.display="none"}))}function x(e){var t=document.querySelector("#"+e.target.dataset.scroll).offsetTop;window.scrollTo({top:t,behavior:"smooth"})}y.addEventListener("click",S),k.addEventListener("click",(function(e){document.querySelectorAll(".aside-link").forEach((function(e){e.classList.remove("activ-name")})),e.target.classList.add("activ-name"),g(),x(e)})),E.fetchElement("/category-list").then((function(e){var t,n=e.map((function(e){return t=e.list_name,'\n      <li class="aside-item">\n        <a class="aside-link" href="#" data-scroll="section-title">'.concat(t,"</a>\n      </li>");var t})).join("");t=n,y.insertAdjacentHTML("beforeend",t)})).catch((function(e){console.warn(e)})),a("e541Q"),a("kVJsI");var q=document.querySelector("[data-order-close]"),_=document.querySelector("[data-order-backdrop]"),j=document.querySelector(".modal-close-icon"),O=0;function H(){_.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",A),q.addEventListener("click",N),_.addEventListener("click",N),j.addEventListener("click",N),document.body.style.overflow="hidden",document.body.classList.contains("modal-open")||(O=window.pageYOffset)}function N(e){var t=e.target!==_,n=e.target!==q,o="Escape"!==e.code,a=e.target!==j,r=e.target.parentNode!==j;document.body.style.overflow="auto",t&&n&&o&&a&&r||(_.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",A),q.removeEventListener("click",N),_.removeEventListener("click",N),j.removeEventListener("click",N),document.body.classList.contains("modal-open")||window.scrollTo({top:O,behavior:"instant"}))}function A(e){"Escape"===e.code&&N(e)}window.addEventListener("scroll",(function(e){document.body.classList.contains("modal-open")||(O=window.pageYOffset)}));var M;i=a("bpxeT"),c=a("2TvXO"),r=a("2pRc6");M=a("aNJCr").getBundleURL("9ndqt")+a("iE7OH").resolve("ee16w");var R=new(0,r.FetchBook),B=document.querySelector(".modal-wrapper"),F=document.querySelector(".cont-section");document.querySelector(".backdrop");function z(){return(z=e(i)(e(c).mark((function t(n){var o,a,r,i,s,l,d,u,f,v,m,p;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),n.target.dataset.id){t.next=3;break}return t.abrupt("return");case 3:return H(),t.next=6,R.fetchElement("/".concat(n.target.dataset.id));case 6:o=t.sent,a=o.book_image,r=o.title,i=o.author,s=o.description,l=o.buy_links[0],d=l.url,u=o.buy_links[1],f=u.url,v=o.buy_links[4],m=v.url,p='<img\n          class="modal-image"\n          src="'.concat(a,'"\n          alt=""\n      />\n      <ul class="modal-list">\n        <li><h2 class="modal-list-title">').concat(r,'</h2></li>\n        <li><h3 class="modal-list-autor">').concat(i,'</h3></li>\n        <li>\n          <p class="modal-description">\n            ').concat(s,'\n          </p>\n        </li>\n        <div class="modal-shop-icons">\n          <li class="modal-center-icons">\n          <a href="').concat(d,'" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="62" height="19">\n              <use href="').concat(e(M),'#icon-amazon"  width="62" height="19"></use>\n            </svg></a>\n          </li>\n          <li class="modal-center-icons">\n             <a href="').concat(f,'" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="33" height="32">\n              <use href="').concat(e(M),'#icon-apple-books-logo" width="33" height="32"></use>\n            </svg></a>\n          </li>\n          <li class="modal-center-icons">\n             <a href="').concat(m,'" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="38" height="36">\n              <use href="').concat(e(M),'#icon-book-shops-logo" width="38" height="36"></use>\n            </svg></a>\n          </li>\n            </div>\n      </ul>'),B.innerHTML=p,J(n.target.dataset.id);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(e){var t=JSON.parse(localStorage.getItem("bookList")),n=document.querySelector(".btn-container");(Array.isArray(t)&&t||(t=[]),t.includes(e))?(n.innerHTML=function(e){return'<button class="modal-active-btn js-removeBtn" data-id="'.concat(e,'">\n      remove from the shopping list\n    </button>\n    <p class="modal-congratulations-text">\n      Сongratulations! You have added the book to the shopping list. To delete,\n      press the button “Remove from the shopping list”.\n    </p>')}(e),document.querySelector(".js-removeBtn").addEventListener("click",(function n(o){localStorage.setItem("bookList",JSON.stringify(t.filter((function(t){return t!==e})))),J(e),o.currentTarget.removeEventListener("click",n)}))):(n.innerHTML=function(e){return'<button class="modal-active-btn-add js-addBtn" data-id="'.concat(e,'">\n      add to shopping list\n    </button>')}(e),document.querySelector(".js-addBtn").addEventListener("click",(function n(o){t.push(e),localStorage.setItem("bookList",JSON.stringify(t)),J(e),o.currentTarget.removeEventListener("click",n)})))}F.addEventListener("click",(function(e){return z.apply(this,arguments)}));var C=document.querySelectorAll(".menu-link");C.forEach((function(e){return e.classList.remove("activ-page")})),C[0].classList.add("activ-page");var D=document.querySelectorAll(".mob-menu-link");D.forEach((function(e){return e.classList.remove("activ-page")})),D[0].classList.add("activ-page"),a("h6lxJ");var I,U={},W={},Y=a("l5bVx");W=function(t){var n=void 0===t?"undefined":e(Y)(t);return null!=t&&("object"==n||"function"==n)};var V,$={},X={};V="object"==typeof t&&t&&t.Object===Object&&t;var P="object"==typeof self&&self&&self.Object===Object&&self,Q=V||P||Function("return this")();X=Q;$=function(){return X.Date.now()};var G={},K={},Z={},ee=/\s/;Z=function(e){for(var t=e.length;t--&&ee.test(e.charAt(t)););return t};var te=/^\s+/;K=function(e){return e?e.slice(0,Z(e)+1).replace(te,""):e};var ne,oe={},ae=(Y=a("l5bVx"),{});ne=X.Symbol;var re={},ie=Object.prototype,ce=ie.hasOwnProperty,se=ie.toString,le=ne?ne.toStringTag:void 0;re=function(e){var t=ce.call(e,le),n=e[le];try{e[le]=void 0;var o=!0}catch(e){}var a=se.call(e);return o&&(t?e[le]=n:delete e[le]),a};var de={},ue=Object.prototype.toString;de=function(e){return ue.call(e)};var fe=ne?ne.toStringTag:void 0;ae=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":fe&&fe in Object(e)?re(e):de(e)};var ve={};ve=function(e){return null!=e&&"object"==typeof e};oe=function(t){return"symbol"==(void 0===t?"undefined":e(Y)(t))||ve(t)&&"[object Symbol]"==ae(t)};var me=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,he=/^0o[0-7]+$/i,be=parseInt;G=function(e){if("number"==typeof e)return e;if(oe(e))return NaN;if(W(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=W(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=K(e);var n=pe.test(e);return n||he.test(e)?be(e.slice(2),n?2:8):me.test(e)?NaN:+e};var ge=Math.max,ye=Math.min;U=function(e,t,n){var o,a,r,i,c,s,l=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,r=a;return o=a=void 0,l=t,i=e.apply(r,n)}function m(e){return l=e,c=setTimeout(h,t),d?v(e):i}function p(e){var n=e-s;return void 0===s||n>=t||n<0||u&&e-l>=r}function h(){var e=$();if(p(e))return b(e);c=setTimeout(h,function(e){var n=t-(e-s);return u?ye(n,r-(e-l)):n}(e))}function b(e){return c=void 0,f&&o?v(e):(o=a=void 0,i)}function g(){var e=$(),n=p(e);if(o=arguments,a=this,s=e,n){if(void 0===c)return m(s);if(u)return clearTimeout(c),c=setTimeout(h,t),v(s)}return void 0===c&&(c=setTimeout(h,t)),i}return t=G(t)||0,W(n)&&(d=!!n.leading,r=(u="maxWait"in n)?ge(G(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,o=s=a=c=void 0},g.flush=function(){return void 0===c?i:b($())},g};I=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return W(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),U(e,t,{leading:o,maxWait:t,trailing:a})};var we=document.querySelector(".scroll-to-top"),ke=e(I)((function(){var e=window.scrollY,t=document.documentElement.clientHeight;function n(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(we.addEventListener("click",n),we.classList.remove("unvisually")):(we.classList.add("unvisually"),we.addEventListener("click",n))}),500);window.addEventListener("scroll",ke)}();
//# sourceMappingURL=index.aed47e2a.js.map
