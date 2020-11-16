// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"fixedHeader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fixedHeader = function fixedHeader() {
  var header = document.querySelector('.header__main');
  var scrollLogo = document.querySelector('#east29-logo__fixed');

  function fixed() {
    if (window.scrollY >= 5) {
      document.body.classList.add('fixed-header');
    } else {
      document.body.classList.remove('fixed-header');
    }
  }

  window.addEventListener('scroll', fixed);
};

var _default = fixedHeader;
exports.default = _default;
},{}],"drawer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var drawer = function drawer() {
  var menuOpen = document.querySelector('.nav-toggle');
  var menuClose = document.querySelector('.close-nav');
  var cartOpen = document.querySelector('.cart-toggle');
  var cartClose = document.querySelector('.close-cart');

  function openMenu() {
    document.querySelector('.nav-drawer').classList.add('open');
  }

  function closeMenu() {
    document.querySelector('.nav-drawer').classList.remove('open');
  }

  function openCart() {
    document.querySelector('.cart-drawer').classList.add('open');
  }

  function closeCart() {
    document.querySelector('.cart-drawer').classList.remove('open');
  }

  menuOpen.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  cartOpen.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
};

var _default = drawer;
exports.default = _default;
},{}],"accordion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var accordion = function accordion() {
  var accordionButton = document.querySelectorAll('.accordion__button');
  accordionButton.forEach(function (button) {
    button.addEventListener('click', function () {
      var activeAccordionButton = document.querySelector('.accordion__button.active');

      if (activeAccordionButton && activeAccordionButton !== button) {
        activeAccordionButton.classList.toggle('active');
        activeAccordionButton.nextElementSibling.style.maxHeight = 0;
        activeAccordionButton.nextElementSibling.style.marginTop = 0;
      }

      button.classList.toggle('active');
      var accordionContent = button.nextElementSibling;

      if (button.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        accordionContent.style.marginTop = '3rem';
      } else {
        accordionContent.style.maxHeight = 0;
        accordionContent.style.marginTop = 0;
      }
    });
  });
};

var _default = accordion;
exports.default = _default;
},{}],"comments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var commentSwiper = function commentSwiper() {
  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 100,
    autoplay: true,
    speed: 1000,
    effect: 'slide',
    grabCursor: true,
    //Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "<div class=\"custom-bullet ".concat(className, "\"></div>");
      }
    },
    // breakpoints
    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });
};

var _default = commentSwiper;
exports.default = _default;
},{}],"ingredientDrawer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var ingredientDrawer = function ingredientDrawer() {
  var ingredientsDrawerOpen = document.querySelector('.ingredients-toggle');
  var ingredientsDrawerClose = document.querySelector('.close-ingredients-drawer');

  function openMenu() {
    document.querySelector('.ingredients-drawer').classList.add('open');
  }

  function closeMenu() {
    document.querySelector('.ingredients-drawer').classList.remove('open');
  }

  ingredientsDrawerOpen.addEventListener('click', openMenu);
  ingredientsDrawerClose.addEventListener('click', closeMenu);
};

var _default = ingredientDrawer;
exports.default = _default;
},{}],"fixedSubNav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fixedSubNav = function fixedSubNav() {
  var subNavBar = document.querySelector('.sub-nav-bar');
  var subNavBarHeight = subNavBar.clientHeight;
  var topSubNav = subNavBar.offsetTop;
  var bumpedSection = document.querySelector('.flow-adjuster');

  function fixed() {
    if (window.scrollY >= 200) {
      var headerBar = document.querySelector('.header__main');
      var headerHeight = headerBar.offsetHeight;

      if (window.scrollY >= topSubNav - headerHeight - 2) {
        // bumpedSection.style.paddingTop = `${subNavBarHeight}px`;
        bumpedSection.classList.add('bumped');
        document.body.classList.add('fixed-sub-nav');
        subNavBar.style.top = "".concat(headerHeight, "px");
      } else {
        document.body.classList.remove('fixed-sub-nav');
        subNavBar.style.top = 0; // bumpedSection.style.paddingTop = 0;

        bumpedSection.classList.remove('bumped');
      }
    }
  }

  window.addEventListener('scroll', fixed);
};

var _default = fixedSubNav;
exports.default = _default;
},{}],"anchorLinks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var anchorLinks = function anchorLinks() {
  function activeLink() {
    var whoSection = document.querySelector('.who-we-are--wrapper');
    var missionSection = document.querySelector('.mission--wrapper'); // const founderSection = document.querySelector('.founder--wrapper');

    var whoLink = document.getElementById('who-link');
    var missionLink = document.getElementById('mission-link'); // const founderLink = document.getElementById('founder-link');

    var windowBottom = window.scrollY + window.innerHeight;
    var whoSectionBottom = whoSection.offsetTop + whoSection.clientHeight;
    var missionSectionBottom = missionSection.offsetTop + missionSection.clientHeight; // const founderSectionBottom =
    //   founderSection.offsetTop + founderSection.clientHeight;
    // Who We Are

    if (windowBottom >= whoSection.offsetTop && windowBottom < whoSectionBottom) {
      whoLink.classList.add('active');
    } else {
      whoLink.classList.remove('active');
    } // Missions And Values


    if (windowBottom >= missionSection.offsetTop && windowBottom < missionSectionBottom) {
      missionLink.classList.add('active');
    } else {
      missionLink.classList.remove('active');
    } // if (
    //   windowBottom >= founderSection.offsetTop &&
    //   windowBottom < founderSectionBottom
    // ) {
    //   founderLink.classList.add('active');
    // } else {
    //   founderLink.classList.remove('active');
    // }

  }

  window.addEventListener('scroll', activeLink);
};

var _default = anchorLinks;
exports.default = _default;
},{}],"anchorLinksBeautyPage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var anchorLinksBeautyPage = function anchorLinksBeautyPage() {
  function activeLink() {
    var movementSection = document.querySelector('.clean-movement');
    var greenSection = document.querySelector('.clean-green-beauty');
    var veganSection = document.querySelector('.clean-vegan--wrapper');
    var serumsSection = document.querySelector('.clean-serums');
    var movementLink = document.getElementById('clean-beauty-link');
    var greenLink = document.getElementById('green-beauty-link');
    var veganLink = document.getElementById('vegan-link');
    var serumsLink = document.getElementById('serums-link');
    var windowBottom = window.scrollY + window.innerHeight;
    var movementSectionBottom = movementSection.offsetTop + movementSection.clientHeight;
    var greenSectionBottom = greenSection.offsetTop + greenSection.clientHeight;
    var veganSectionBottom = veganSection.offsetTop + veganSection.clientHeight;
    var serumsSectionBottom = serumsSection.offsetTop + serumsSection.clientHeight; // Clean Movement

    if (windowBottom >= movementSection.offsetTop && windowBottom < movementSectionBottom) {
      movementLink.classList.add('active');
    } else {
      movementLink.classList.remove('active');
    } // Green Beauty


    if (windowBottom >= greenSection.offsetTop && windowBottom < greenSectionBottom) {
      greenLink.classList.add('active');
    } else {
      greenLink.classList.remove('active');
    } // Vegan


    if (windowBottom >= veganSection.offsetTop && windowBottom < veganSectionBottom) {
      veganLink.classList.add('active');
    } else {
      veganLink.classList.remove('active');
    } // Serums


    if (windowBottom >= serumsSection.offsetTop && windowBottom < serumsSectionBottom) {
      serumsLink.classList.add('active');
    } else {
      serumsLink.classList.remove('active');
    }
  }

  window.addEventListener('scroll', activeLink);
};

var _default = anchorLinksBeautyPage;
exports.default = _default;
},{}],"productSlider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var productSwiper = function productSwiper() {
  new Swiper('.product-swiper-container', {
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    speed: 950,
    autoplay: {
      delay: 3500
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
};

var _default = productSwiper;
exports.default = _default;
},{}],"scripts.js":[function(require,module,exports) {
"use strict";

var _fixedHeader = _interopRequireDefault(require("./fixedHeader"));

var _drawer = _interopRequireDefault(require("./drawer"));

var _accordion = _interopRequireDefault(require("./accordion"));

var _comments = _interopRequireDefault(require("./comments"));

var _ingredientDrawer = _interopRequireDefault(require("./ingredientDrawer"));

var _fixedSubNav = _interopRequireDefault(require("./fixedSubNav"));

var _anchorLinks = _interopRequireDefault(require("./anchorLinks"));

var _anchorLinksBeautyPage = _interopRequireDefault(require("./anchorLinksBeautyPage"));

var _productSlider = _interopRequireDefault(require("./productSlider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('East 29th Store - Developed by Michael Irvine - https://michaelirvinedesign.ca | Designed by ZAK - https://wearezak.com/'); // Header Fixed Nav

if (window.location.pathname === '/products/vital-serum') {
  (0, _accordion.default)();
  (0, _comments.default)();
  (0, _ingredientDrawer.default)();
  (0, _productSlider.default)();
}

if (window.location.pathname === '/pages/about') {
  (0, _fixedSubNav.default)();
  (0, _anchorLinks.default)();
}

if (window.location.pathname === '/pages/our-founder') {
  (0, _accordion.default)();
}

if (window.location.pathname === '/pages/clean-beauty') {
  (0, _accordion.default)();
  (0, _fixedSubNav.default)();
  (0, _anchorLinksBeautyPage.default)();
}

(0, _fixedHeader.default)();
(0, _drawer.default)();
},{"./fixedHeader":"fixedHeader.js","./drawer":"drawer.js","./accordion":"accordion.js","./comments":"comments.js","./ingredientDrawer":"ingredientDrawer.js","./fixedSubNav":"fixedSubNav.js","./anchorLinks":"anchorLinks.js","./anchorLinksBeautyPage":"anchorLinksBeautyPage.js","./productSlider":"productSlider.js"}],"../../../../../../../../../.nvm/versions/node/v12.16.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63260" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../../.nvm/versions/node/v12.16.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts.js"], null)
//# sourceMappingURL=/scripts.js.map