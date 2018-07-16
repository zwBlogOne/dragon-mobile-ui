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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var InputNumber = (function (_Component) {
  _inherits(InputNumber, _Component);

  function InputNumber(props) {
    _classCallCheck(this, InputNumber);

    _get(Object.getPrototypeOf(InputNumber.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: props.value || props.defaultValue
    };
  }

  _createClass(InputNumber, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: Number(nextProps.value)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this = this;

      var props = this.props;
      var theme = props.theme;
      var isRadius = props.isRadius;
      var isDisabled = props.isDisabled;
      var size = props.size;
      var min = props.min;
      var max = props.max;
      var className = props.className;
      var onChange = props.onChange;

      var others = _objectWithoutProperties(props, ['theme', 'isRadius', 'isDisabled', 'size', 'min', 'max', 'className', 'onChange']);

      var value = this.state.value;

      var disabled = 'disabled' in props || isDisabled;
      var radius = 'radius' in props || isRadius;

      var cls = (0, _classnames3['default'])((_classnames = {
        'ui-input-number': true,
        'disabled': disabled,
        'radius': radius
      }, _defineProperty(_classnames, 'theme-' + theme, !!theme), _defineProperty(_classnames, 'size-' + size, size), _defineProperty(_classnames, className, !!className), _classnames));

      var subDisabled = !!(min && value <= min),
          plusDisabled = !!(max && value >= max);

      var subCls = (0, _classnames3['default'])({
        'ui-input-number-sub': true,
        'disabled': subDisabled
      });

      var plusCls = (0, _classnames3['default'])({
        'ui-input-number-plus': true,
        'disabled': plusDisabled
      });

      return _react2['default'].createElement(
        'span',
        { className: cls },
        _react2['default'].createElement(
          'span',
          { className: subCls, onClick: function () {
              return !subDisabled && _this.onSubClick();
            } },
          _react2['default'].createElement(_Icon2['default'], { type: 'minus' })
        ),
        _react2['default'].createElement('input', _extends({}, others, { className: 'ui-input-number-body', value: this.state.value, onChange: function (e) {
            return onChange(e.target.value);
          } })),
        _react2['default'].createElement(
          'span',
          { className: plusCls, onClick: function () {
              return !plusDisabled && _this.onPlusClick();
            } },
          _react2['default'].createElement(_Icon2['default'], { type: 'add' })
        )
      );
    }
  }, {
    key: 'onSubClick',
    value: function onSubClick() {
      var _props = this.props;
      var step = _props.step;
      var onChange = _props.onChange;
      var value = this.state.value - step;

      // this.setState({ value });
      !!onChange && onChange(value);
    }
  }, {
    key: 'onPlusClick',
    value: function onPlusClick() {
      var _props2 = this.props;
      var step = _props2.step;
      var onChange = _props2.onChange;
      var value = this.state.value + step;

      // this.setState({ value });
      !!onChange && onChange(value);
    }
  }]);

  return InputNumber;
})(_react.Component);

InputNumber.propTypes = {
  size: _react.PropTypes.oneOf(['xl', 'lg', 'sm', 'xs']),
  isRadius: _react.PropTypes.bool,
  isDisabled: _react.PropTypes.bool,
  defaultValue: _react.PropTypes.number,
  step: _react.PropTypes.number,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  className: _react.PropTypes.string
};

InputNumber.defaultProps = {
  size: null,
  isRadius: false,
  isDisabled: false,
  defaultValue: 0,
  step: 1,
  min: null,
  max: null,
  className: null
};

exports['default'] = InputNumber;
module.exports = exports['default'];