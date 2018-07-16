'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

var Picker = (function (_Component) {
  _inherits(Picker, _Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    _get(Object.getPrototypeOf(Picker.prototype), 'constructor', this).call(this, props);
    this.state = {
      translateY: 0,
      pointStart: 0,
      pointEnd: 0,
      value: props.value || props.defaultValue
    };
  }

  _createClass(Picker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onValueChange(this.state.value, 0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
        this.onValueChange(nextProps.value, 300);
      }
    }

    // 选中指定值
  }, {
    key: 'onValueChange',
    value: function onValueChange(value, speed) {
      var _props = this.props;
      var dataSource = _props.dataSource;
      var valueMember = _props.valueMember;

      var index = 0;
      for (var i = 0; i < dataSource.length; i++) {
        if (dataSource[i][valueMember] == value) {
          index = i;
          break;
        }
      }
      this.onMoveTo(index, speed);
    }

    // 移动到指定编号
  }, {
    key: 'onMoveTo',
    value: function onMoveTo(index, speed) {
      var itemHeight = this.getItemHeight();
      if (itemHeight == 0) {
        return;
      }

      var offset = -index * itemHeight;

      this.doTransition(offset, speed);
      this.setState({
        translateY: offset
      });
    }

    // 执行过渡动画
  }, {
    key: 'doTransition',
    value: function doTransition(offset, duration) {
      var style = this.refs.picker.style;
      style.webkitTransitionDuration = duration + "ms";
      style.mozTransitionDuration = duration + "ms";
      style.oTransitionDuration = duration + "ms";
      style.transitionDuration = duration + "ms";
      style.webkitTransform = "translate3d(0, " + offset + "px, 0)";
      style.mozTransform = "translate3d(0, " + offset + "px, 0)";
      style.oTransform = "translate3d(0, " + offset + "px, 0)";
      style.transform = "translate3d(0, " + offset + "px, 0)";
    }
  }, {
    key: 'onTouchStart',
    value: function onTouchStart(event) {
      var pointY = this.getPoint(event).y;
      this.setState({
        pointStart: pointY
      });
    }
  }, {
    key: 'onTouchMove',
    value: function onTouchMove(event) {
      event.preventDefault();

      var pointY = this.getPoint(event).y,
          offset = this.state.translateY + (pointY - this.state.pointStart);

      this.doTransition(offset, 0);
      this.setState({
        pointEnd: pointY
      });
    }
  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(event) {
      var offset = this.state.pointEnd !== 0 ? this.state.translateY + (this.state.pointEnd - this.state.pointStart) : 0,
          items = this.refs.picker.children,
          itemHeight = items[0] && items[0].offsetHeight,
          maxIndex = Math.abs(items.length - 1);

      var index = Math.round(offset / itemHeight);

      if (index > 0) {
        index = 0;
      } else {
        index = Math.abs(offset) >= maxIndex * itemHeight ? maxIndex : Math.abs(index);
      }

      this.onMoveTo(index, 300);

      var _props2 = this.props;
      var dataSource = _props2.dataSource;
      var valueMember = _props2.valueMember;
      var onChange = _props2.onChange;
      var value = dataSource[index][valueMember];

      this.setState({
        value: value
      });
      onChange && onChange(value);
    }
  }, {
    key: 'getItemHeight',
    value: function getItemHeight() {
      var items = this.refs.picker.children,
          itemHeight = 0;

      if (!items || items.length == 0) {
        return 0;
      }
      return items[0].offsetHeight;
    }

    // 获取触摸点的当前坐标
  }, {
    key: 'getPoint',
    value: function getPoint(event) {
      var touch = event.touches[0];
      return {
        x: touch.pageX,
        y: touch.pageY
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var props = this.props;
      var _props3 = this.props;
      var height = _props3.height;
      var isDisabled = _props3.isDisabled;
      var isRadius = _props3.isRadius;
      var valueMember = _props3.valueMember;
      var displayMember = _props3.displayMember;
      var dataSource = _props3.dataSource;

      var others = _objectWithoutProperties(_props3, ['height', 'isDisabled', 'isRadius', 'valueMember', 'displayMember', 'dataSource']);

      var options = dataSource.map(function (item, index) {
        return _react2['default'].createElement(
          _Option2['default'],
          { key: index, value: item[valueMember] },
          item[displayMember]
        );
      });

      var cls = (0, _classnames2['default'])({
        'ui-picker': true,
        'disabled': 'disabled' in props || isDisabled
      });

      return _react2['default'].createElement(
        'div',
        { className: cls,
          style: { height: height },
          onTouchStart: function (event) {
            return _this.onTouchStart(event);
          },
          onTouchMove: function (event) {
            return _this.onTouchMove(event);
          },
          onTouchEnd: function (event) {
            return _this.onTouchEnd(event);
          }
        },
        _react2['default'].createElement(
          'ul',
          { ref: 'picker' },
          options
        )
      );
    }
  }]);

  return Picker;
})(_react.Component);

Picker.propTypes = {
  onChange: _react.PropTypes.func,
  dataSource: _react.PropTypes.array,
  valueMember: _react.PropTypes.string,
  displayMember: _react.PropTypes.string
};

Picker.defaultProps = {
  onChange: function onChange() {},
  dataSource: [],
  valueMember: 'value',
  displayMember: 'label'
};

exports['default'] = Picker;
module.exports = exports['default'];