"use strict";

var smoothLinks = document.querySelectorAll('a[href^="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var smoothLink = _step.value;
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      var id = smoothLink.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  for (var _iterator = smoothLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var checkbox = document.querySelector(".mobile-menu__checkbox");
var url = document.querySelectorAll(".mobile-menu__item");
url.forEach(function (e) {
  e.addEventListener("click", function () {
    checkbox.checked = false;
  });
});