"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* global __ */

var BlockInput = _megadraft.MegadraftPlugin.BlockInput;

var RelatedArticle = function (_Component) {
  _inherits(RelatedArticle, _Component);

  function RelatedArticle(props) {
    _classCallCheck(this, RelatedArticle);

    var _this = _possibleConstructorReturn(this, (RelatedArticle.__proto__ || Object.getPrototypeOf(RelatedArticle)).call(this, props));

    _this._handleTitleChange = _this._handleTitleChange.bind(_this);
    _this._handleLinkChange = _this._handleLinkChange.bind(_this);
    _this._handleDeleteClick = _this._handleDeleteClick.bind(_this);
    return _this;
  }

  _createClass(RelatedArticle, [{
    key: "_handleTitleChange",
    value: function _handleTitleChange(event) {
      this.props.updateArticle(this.props.item.key, "title", event.target.value);
    }
  }, {
    key: "_handleLinkChange",
    value: function _handleLinkChange(event) {
      this.props.updateArticle(this.props.item.key, "link", event.target.value);
    }
  }, {
    key: "_handleDeleteClick",
    value: function _handleDeleteClick(event) {
      this.props.removeArticle(this.props.item.key);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "related-articles" },
        _react2.default.createElement(
          "div",
          { className: "related-articles__inputs" },
          _react2.default.createElement(BlockInput, {
            placeholder: __("Title"),
            styles: { padding: "small", text: "big" },
            value: this.props.item.title,
            onChange: this._handleTitleChange }),
          _react2.default.createElement(BlockInput, {
            placeholder: __("Link"),
            value: this.props.item.link,
            styles: { padding: "small" },
            onChange: this._handleLinkChange })
        ),
        _react2.default.createElement(
          "div",
          { className: "related-articles__trash", onClick: this._handleDeleteClick },
          _react2.default.createElement(_megadraft.MegadraftIcons.DeleteIcon, null)
        )
      );
    }
  }]);

  return RelatedArticle;
}(_react.Component);

exports.default = RelatedArticle;