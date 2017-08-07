"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({}, this.props, { width: "24", height: "24", viewBox: "0 0 24 24" }),
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("path", { d: "M0 0h24v24H0z" }),
          _react2.default.createElement("path", { fill: "currentColor", d: "m9.788448,21.239669q0,-0.795496 0.565445,-1.349495q0.580324,-0.554007 1.428492,-0.554007q0.818407,0 1.398732,0.554007q0.580325,0.554 0.580325,1.349495q0,0.781291 -0.580325,1.335298q-0.580325,0.554007 -1.398732,0.554007q-0.848168,0 -1.428492,-0.539803q-0.565445,-0.554007 -0.565445,-1.349503zm-3.288509,-18.793586q1.577293,-0.667649 2.990906,-0.994372q1.428492,-0.326722 2.678423,-0.326722q3.303389,0 5.208046,1.51997q1.919537,1.519962 1.919537,4.105326q0,2.642181 -1.651695,4.318406q-1.636814,1.676225 -4.955083,2.400692l0,3.608144l-1.830256,0l0,-4.659333q2.633783,-0.610832 3.958115,-2.045561q1.339211,-1.434736 1.339211,-3.650757q0,-1.946123 -1.086249,-3.068341q-1.086249,-1.122218 -2.961146,-1.122218q-1.696334,0 -2.782584,0.937547q-1.071369,0.923342 -1.383852,2.670597l-1.443372,0l0,-3.693377z" })
        )
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;