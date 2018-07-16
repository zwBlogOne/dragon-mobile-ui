'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var RadioGroup = (function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    _get(Object.getPrototypeOf(RadioGroup.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: props.value || props.defaultValue || this.getCheckedValue(props.children)
    };
  }

  _createClass(RadioGroup, [{
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
      var _classnames,
          _this = this;

      var props = this.props;
      var type = props.type;
      var disabled = props.disabled;
      var isBlock = props.isBlock;
      var isRadius = props.isRadius;
      var isDisabled = props.isDisabled;
      var theme = props.theme;
      var size = props.size;
      var className = props.className;
      var children = props.children;

      var items = _react2['default'].Children.map(children, function (element, index) {
        return (0, _react.cloneElement)(element, {
          key: index,
          type: type,
          onChange: function onChange() {
            return _this.onRadioChange(element.props.value);
          },
          checked: _this.state.value === element.props.value
        });
      });

      var cls = (0, _classnames3['default'])((_classnames = {
        'ui-radio-group': true,
        'block': 'block' in props || isBlock,
        'radius': 'radius' in props || isRadius,
        'disabled': 'disabled' in props || isDisabled
      }, _defineProperty(_classnames, 'theme-' + theme, !!theme), _defineProperty(_classnames, 'size-' + size, !!size), _defineProperty(_classnames, className, !!className), _classnames));

      return _react2['default'].createElement(
        'div',
        { className: cls },
        items
      );
    }
  }, {
    key: 'getCheckedValue',
    value: function getCheckedValue(children) {
      var checkedValue = null;
      _react2['default'].Children.forEach(children, function (radio) {
        if (radio.props && radio.props.checked) {
          checkedValue = radio.props.value;
        }
      });
      return checkedValue;
    }
  }, {
    key: 'onRadioChange',
    value: function onRadioChange(value) {
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }]);

  return RadioGroup;
})(_react.Component);

RadioGroup.propTypes = {
  type: _react.PropTypes.oneOf(['default', 'button']),
  onChange: _react.PropTypes.func
};

RadioGroup.defaultProps = {
  type: 'default',
  onChange: function onChange() {}
};

exports['default'] = RadioGroup;
module.exports = exports['default'];