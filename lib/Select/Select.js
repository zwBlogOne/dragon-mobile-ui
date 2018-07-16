'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var Select = (function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: props.value || props.defaultValue || this.getCheckedValue(props.children)
    };
  }

  _createClass(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps || this.getCheckedValue(nextProps.children)) {
        this.setState({
          value: nextProps.value || this.getCheckedValue(nextProps.children)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var props = this.props;
      var placeholder = props.placeholder;
      var isDisabled = props.isDisabled;
      var onChange = props.onChange;
      var children = props.children;

      var others = _objectWithoutProperties(props, ['placeholder', 'isDisabled', 'onChange', 'children']);

      var disabled = 'disabled' in props || isDisabled;

      var valueText = _react2['default'].createElement(
        'div',
        { className: 'ui-select-placeholder' },
        placeholder
      );
      _react2['default'].Children.map(children, function (option, index) {
        if (_this.state.value == option.props.value) {
          valueText = option.props.children;
          return;
        }
      });

      var cls = (0, _classnames2['default'])({
        'ui-select': true,
        'disabled': disabled
      });

      return _react2['default'].createElement(
        'div',
        { className: cls },
        valueText,
        _react2['default'].createElement(
          'select',
          _extends({}, others, { defaultValue: this.state.value, value: this.state.value, onChange: function (e) {
              var value = e.target.value;
              _this.setState({ value: value });
              onChange(e);
            } }),
          children
        )
      );
    }
  }, {
    key: 'getCheckedValue',
    value: function getCheckedValue(children) {
      var checkedValue = null;
      _react2['default'].Children.forEach(children, function (option) {
        if (option.props && option.props.checked) {
          checkedValue = option.props.value;
        }
      });
      return checkedValue;
    }
  }]);

  return Select;
})(_react.Component);

Select.propTypes = {};

Select.defaultProps = {};

exports['default'] = Select;
module.exports = exports['default'];