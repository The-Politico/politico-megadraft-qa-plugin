"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _QnA = require("./QnA");

var _QnA2 = _interopRequireDefault(_QnA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock,
    BlockInput = _megadraft.MegadraftPlugin.BlockInput;

var QnABlock = function (_Component) {
  _inherits(QnABlock, _Component);

  function QnABlock(props) {
    _classCallCheck(this, QnABlock);

    var _this = _possibleConstructorReturn(this, (QnABlock.__proto__ || Object.getPrototypeOf(QnABlock)).call(this, props));

    _this.handleAddAnotherClick = _this.handleAddAnotherClick.bind(_this);
    _this.updateQuestion = _this.updateQuestion.bind(_this);
    _this.removeQuestion = _this.removeQuestion.bind(_this);
    _this.handleChangetitle = _this.handleChangetitle.bind(_this);

    _this.actions = [{ "key": "delete", "icon": _megadraft.MegadraftIcons.DeleteIcon, "action": _this.props.container.remove }];
    return _this;
  }

  _createClass(QnABlock, [{
    key: "handleAddAnotherClick",
    value: function handleAddAnotherClick(event) {
      event.preventDefault();
      this.props.container.updateData({ questions: this.props.data.questions.concat({ key: _megadraft.DraftJS.genKey() }) });
    }
  }, {
    key: "handleChangetitle",
    value: function handleChangetitle(e) {
      this.props.container.updateData({
        title: e.target.value
      });
    }
  }, {
    key: "updateQuestion",
    value: function updateQuestion(key, field, value) {
      // Should we use immutable or helpers?
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.data.questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.key === key) {
            item[field] = value;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.props.container.updateData({ questions: this.props.data.questions });
    }
  }, {
    key: "removeQuestion",
    value: function removeQuestion(key) {
      // Should we use immutable or helpers?
      var questions = Array();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.props.data.questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (item.key !== key) {
            questions.push(item);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.props.container.updateData({ questions: questions });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "question-and-answer__figure" },
        _react2.default.createElement(
          CommonBlock,
          _extends({}, this.props, { actions: this.actions }),
          _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(BlockInput, {
              placeholder: "Title",
              value: this.props.data.title,
              styles: { padding: "small" },
              onChange: this.handleChangetitle })
          ),
          _react2.default.createElement(
            BlockContent,
            { className: "with-padding" },
            this.props.data.questions.map(function (item) {
              return _react2.default.createElement(_QnA2.default, _extends({
                key: item.key,
                item: item,
                updateQuestion: _this2.updateQuestion,
                removeQuestion: _this2.removeQuestion
              }, _this2.props));
            }),
            _react2.default.createElement(
              "div",
              { className: "markup-hints" },
              _react2.default.createElement(
                "span",
                { className: "italic" },
                "_italic_"
              ),
              _react2.default.createElement(
                "span",
                { className: "bold" },
                "**bold**"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "question-and-answer__add-new-wrapper" },
              _react2.default.createElement(
                "a",
                { href: "#",
                  onClick: this.handleAddAnotherClick,
                  className: "question-and-answer__add-new" },
                __("Add Q & A")
              )
            )
          )
        )
      );
    }
  }]);

  return QnABlock;
}(_react.Component);

exports.default = QnABlock;