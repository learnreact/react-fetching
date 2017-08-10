(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-json-fetch')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-json-fetch'], factory) :
	(global.ReactFetching = factory(global.React,global.ReactJSONFetch));
}(this, (function (React,ReactJSONFetch) { 'use strict';

React = React && 'default' in React ? React['default'] : React;
ReactJSONFetch = ReactJSONFetch && 'default' in ReactJSONFetch ? ReactJSONFetch['default'] : ReactJSONFetch;

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

var ReactFetching = function (_React$Component) {
  inherits(ReactFetching, _React$Component);

  function ReactFetching(props) {
    classCallCheck(this, ReactFetching);

    var _this = possibleConstructorReturn(this, (ReactFetching.__proto__ || Object.getPrototypeOf(ReactFetching)).call(this, props));

    _this.shouldComponentUpdate = props.shouldComponentUpdate;
    return _this;
  }

  createClass(ReactFetching, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          props = objectWithoutProperties(_props, ["url"]);


      return React.createElement(
        ReactJSONFetch,
        _extends({}, props, {
          url: Object.entries(props.query).length ? url + "?" + Object.entries(props.query).map(function (el) {
            return el.join("=");
          }).join("&") : url
        }),
        function (_ref) {
          var status = _ref.status,
              json = _ref.json;

          if (status && status.ok) {
            return typeof _this2.props.ok === "function" ? React.Children.only(_this2.props.ok(json)) : React.Children.only(_this2.props.ok);
          }

          if (status && !status.ok) {
            return typeof _this2.props.error === "function" ? React.Children.only(_this2.props.error(status)) : React.Children.only(_this2.props.error);
          }

          return React.Children.only(_this2.props.loading);
        }
      );
    }
  }]);
  return ReactFetching;
}(React.Component);

ReactFetching.defaultProps = {
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

return ReactFetching;

})));
