"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _BlockText = require("./BlockText");

var _BlockText2 = _interopRequireDefault(_BlockText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockInput = _megadraft.MegadraftPlugin.BlockInput;

var QA = function (_Component) {
  _inherits(QA, _Component);

  function QA(props) {
    _classCallCheck(this, QA);

    var _this = _possibleConstructorReturn(this, (QA.__proto__ || Object.getPrototypeOf(QA)).call(this, props));

    _this.handleTitleChange = _this.handleTitleChange.bind(_this);
    _this.handleLinkChange = _this.handleLinkChange.bind(_this);
    _this.handleDeleteClick = _this.handleDeleteClick.bind(_this);
    return _this;
  }

  _createClass(QA, [{
    key: "handleTitleChange",
    value: function handleTitleChange(event) {
      this.props.updateQuestion(this.props.item.key, "question", event.target.value);
    }
  }, {
    key: "handleLinkChange",
    value: function handleLinkChange(event) {
      this.props.updateQuestion(this.props.item.key, "answer", event.target.value);
    }
  }, {
    key: "handleDeleteClick",
    value: function handleDeleteClick(event) {
      this.props.removeQuestion(this.props.item.key);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "question-and-answer" },
        _react2.default.createElement(
          "div",
          { className: "question-and-answer__inputs" },
          _react2.default.createElement(BlockInput, {
            placeholder: __("Question"),
            styles: { padding: "small", text: "big" },
            value: this.props.item.question,
            onChange: this.handleTitleChange }),
          _react2.default.createElement(_BlockText2.default, {
            placeholder: __("Answer"),
            value: this.props.item.answer,
            styles: { padding: "small" },
            onChange: this.handleLinkChange })
        ),
        _react2.default.createElement(
          "div",
          { className: "question-and-answer__trash", onClick: this.handleDeleteClick },
          _react2.default.createElement(_megadraft.MegadraftIcons.DeleteIcon, null)
        )
      );
    }
  }]);

  return QA;
}(_react.Component);

exports.default = QA;