(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('rem-adapt', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.remAdapt = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (designWidth, rem2px) {
    var div = window.document.createElement('div');
    div.style.width = '1rem';
    div.style.display = "none";
    var head = window.document.getElementsByTagName('head')[0];
    head.appendChild(div);
    var defaultFontSize = parseFloat(window.getComputedStyle(div, null).getPropertyValue('width'));
    div.remove();
    var fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
    document.documentElement.style.fontSize = fontSize;
    var st = document.createElement('style');
    var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + fontSize + ";}}";
    var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + fontSize + ";}}";
    st.innerHTML = portrait + landscape;
    head.appendChild(st);
    return defaultFontSize;
  };

  module.exports = exports['default'];
});
