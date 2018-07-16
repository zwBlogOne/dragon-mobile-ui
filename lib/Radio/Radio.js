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

var Radio = (function (_Component) {
  _inherits(Radio, _Component);

  function Radio(props) {
    _classCallCheck(this, Radio);

    _get(Object.getPrototypeOf(Radio.prototype), 'constructor', this).call(this, props);
    this.state = {
      checked: props.checked || props.defaultChecked
    };
  }

  _createClass(Radio, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: !!nextProps.checked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var props = this.props;
      var type = props.type;
      var value = props.value;
      var checked = props.checked;
      var isDisabled = props.isDisabled;
      var className = props.className;
      var children = props.children;
      var onChange = props.onChange;

      var others = _objectWithoutProperties(props, ['type', 'value', 'checked', 'isDisabled', 'className', 'children', 'onChange']);

      var disabled = 'disabled' in props || isDisabled;

      var cls = (0, _classnames3['default'])(_defineProperty({
        'ui-radio': type == 'default',
        'ui-radio-button': type == 'button',
        'checked': this.state.checked,
        'disabled': disabled
      }, className, !!className));

      return _react2['default'].createElement(
        'label',
        _extends({}, others, { className: cls, onClick: function () {
            return !disabled && _this._onClick();
          } }),
        _react2['default'].createElement(
          'span',
          { className: 'ui-radio-input' },
          _react2['default'].createElement('span', { className: 'ui-radio-inner' })
        ),
        children
      );
    }
  }, {
    key: '_onClick',
    value: function _onClick(e) {
      var checked = true;
      this.setState({ checked: checked });
      this.props.onChange(checked);
    }
  }]);

  return Radio;
})(_react.Component);

Radio.propTypes = {
  type: _react.PropTypes.oneOf(['default', 'button']),
  defaultChecked: _react.PropTypes.bool,
  isDisabled: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};

Radio.defaultProps = {
  type: 'default',
  defaultChecked: false,
  isDisabled: false,
  onChange: function onChange() {}
};

exports['default'] = Radio;
module.exports = exports['default'];