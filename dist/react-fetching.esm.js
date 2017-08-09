import React from 'react';
import ReactJSONFetch from 'react-json-fetch';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Fetcher = function (_React$Component) {
  inherits(Fetcher, _React$Component);

  function Fetcher(props) {
    classCallCheck(this, Fetcher);

    var _this = possibleConstructorReturn(this, (Fetcher.__proto__ || Object.getPrototypeOf(Fetcher)).call(this, props));

    _this.shouldComponentUpdate = props.shouldComponentUpdate;
    return _this;
  }

  createClass(Fetcher, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _url = _props._url,
          props = objectWithoutProperties(_props, ["_url"]);


      var url = Object.entries(props.query).length ? _url + "?" + Object.entries(props.query).map(function (el) {
        return el.join("=");
      }).join("&") : _url;

      return React.createElement(
        ReactJSONFetch,
        _extends({}, props, { url: url }),
        function (_ref) {
          var status = _ref.status,
              json = _ref.json;

          if (status && status.ok) {
            return typeof _this2.props.ok === "function" ? React.Chidren.only(_this2.props.ok(json)) : React.Chidren.only(_this2.props.ok);
          }

          if (status && !status.ok) {
            return typeof _this2.props.error === "function" ? React.Chidren.only(_this2.props.error(status)) : React.Chidren.only(_this2.props.error);
          }

          return React.Chidren.only(_this2.props.loading);
        }
      );
    }
  }]);
  return Fetcher;
}(React.Component);

Fetcher.defaultProps = {
  error: React.createElement(
    "div",
    null,
    "error"
  ),
  loading: React.createElement(
    "div",
    null,
    "loading..."
  ),
  ok: React.createElement(
    "div",
    null,
    "ok"
  ),
  query: {}
};

export default Fetcher;
