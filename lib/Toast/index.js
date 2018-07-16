'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Mask = require('../Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var Toast = (function (_Component) {
  _inherits(Toast, _Component);

  function Toast(props) {
    _classCallCheck(this, Toast);

    _get(Object.getPrototypeOf(Toast.prototype), 'constructor', this).call(this, props);
    this.state = {
      isShow: false,
      timer: undefined
    };
  }

  _createClass(Toast, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.visible) {
        this.enter();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      clearTimeout(this.state.timer);

      if (!this.props.visible && nextProps.visible) {
        this.enter();
      } else if (this.props.visible && !nextProps.visible) {
        this.leave();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.state.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var visible = _props.visible;
      var children = _props.children;
      var onMaskClick = _props.onMaskClick;
      var className = _props.className;

      var others = _objectWithoutProperties(_props, ['visible', 'children', 'onMaskClick', 'className']);

      var cls = (0, _classnames3['default'])(_defineProperty({
        'ui-toast': true,
        'ui-toast-open': this.state.isShow
      }, className, !!className));

      return _react2['default'].createElement(
        'div',
        _extends({}, others, { className: cls }),
        _react2['default'].createElement(
          'div',
          { className: 'ui-toast-container' },
          children
        ),
        _react2['default'].createElement(_Mask2['default'], { visible: visible, type: 'transparent', onClose: onMaskClick })
      );
    }
  }, {
    key: 'enter',
    value: function enter() {
      var _this = this;

      var _props2 = this.props;
      var duration = _props2.duration;
      var onMaskClick = _props2.onMaskClick;

      this.setState({
        isShow: true
      });

      this.state.timer = setTimeout(function () {
        onMaskClick();
        clearTimeout(_this.state.timer);
      }, duration);
    }
  }, {
    key: 'leave',
    value: function leave() {
      this.setState({
        isShow: false
      });
    }
  }]);

  return Toast;
})(_react.Component);

Toast.propTypes = {
  visible: _react.PropTypes.bool,
  duration: _react.PropTypes.number,
  onMaskClick: _react.PropTypes.func
};

Toast.defaultProps = {
  visible: false,
  duration: 3000,
  onMaskClick: function onMaskClick() {}
};

exports['default'] = Toast;
module.exports = exports['default'];