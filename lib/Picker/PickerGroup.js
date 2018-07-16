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

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

var PickerGroup = (function (_Component) {
  _inherits(PickerGroup, _Component);

  function PickerGroup(props) {
    _classCallCheck(this, PickerGroup);

    _get(Object.getPrototypeOf(PickerGroup.prototype), 'constructor', this).call(this, props);
    this.state = {
      visible: props.visible || false,
      value: props.value || props.defaultValue || []
    };
  }

  _createClass(PickerGroup, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        visible: nextProps.visible,
        value: nextProps.value.concat()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var visible = _props.visible;
      var dataSource = _props.dataSource;
      var value = _props.value;
      var format = _props.format;
      var valueMember = _props.valueMember;
      var placeholder = _props.placeholder;
      var className = _props.className;
      var title = _props.title;
      var cancelText = _props.cancelText;
      var okText = _props.okText;
      var onMaskClick = _props.onMaskClick;
      var onCancel = _props.onCancel;
      var onOk = _props.onOk;
      var onClick = _props.onClick;
      var children = _props.children;

      var others = _objectWithoutProperties(_props, ['visible', 'dataSource', 'value', 'format', 'valueMember', 'placeholder', 'className', 'title', 'cancelText', 'okText', 'onMaskClick', 'onCancel', 'onOk', 'onClick', 'children']);

      var pickers = this.getOptions(dataSource, 0);
      var classes = (0, _classnames3['default'])(_defineProperty({
        'ui-picker-container': true,
        'ui-picker-hidden': !this.state.visible
      }, className, !!className));

      var inputCls = (0, _classnames3['default'])({
        'ui-picker-placeholder': !value.join(format)
      });

      return _react2['default'].createElement(
        'div',
        { className: 'ui-picker-group', onClick: function () {
            return _this.toggle();
          } },
        _react2['default'].createElement(
          'div',
          { className: inputCls },
          value.join(format) || placeholder
        ),
        _react2['default'].createElement(
          'div',
          _extends({}, others, { className: classes, onClick: function (e) {
              return _this.onContainerClick(e);
            } }),
          _react2['default'].createElement('div', { className: 'ui-picker-mask', onClick: onMaskClick }),
          _react2['default'].createElement(
            'div',
            { className: 'ui-picker-inner' },
            _react2['default'].createElement(
              'div',
              { className: 'ui-picker-header' },
              _react2['default'].createElement(
                'div',
                { className: 'ui-picker-cancel', onClick: function () {
                    return _this.onCancel();
                  } },
                cancelText
              ),
              _react2['default'].createElement(
                'div',
                { className: 'ui-picker-title' },
                title
              ),
              _react2['default'].createElement(
                'div',
                { className: 'ui-picker-submit', onClick: function () {
                    return _this.onOk();
                  } },
                okText
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'ui-picker-mask-top' },
              _react2['default'].createElement(
                'div',
                { className: 'ui-picker-mask-bottom' },
                _react2['default'].createElement(
                  'div',
                  { className: 'ui-picker-body' },
                  _react2['default'].createElement('div', { className: 'ui-picker-selected' }),
                  pickers
                )
              )
            )
          )
        )
      );
    }

    // 阻止选择器区域的默认事件
  }, {
    key: 'onContainerClick',
    value: function onContainerClick(e) {
      e.stopPropagation();
    }

    // 切换显示状态
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({
        visible: !this.state.visible
      });
    }

    // 获取选择器组
  }, {
    key: 'getOptions',
    value: function getOptions(dataSource, level) {
      var _this2 = this;

      var _props2 = this.props;
      var valueMember = _props2.valueMember;
      var displayMember = _props2.displayMember;

      var pickers = this.pickers || [],
          selected = dataSource.filter(function (item) {
        return item[valueMember] == _this2.state.value[level];
      })[0] || dataSource[0] || {};

      if (selected.children && selected.children.length > 0) {
        pickers = this.getOptions(selected.children, level + 1);
      }

      pickers.unshift(_react2['default'].createElement(_Picker2['default'], { key: level, valueMember: valueMember, displayMember: displayMember, dataSource: dataSource, value: selected[valueMember], onChange: function (value) {
          _this2.onpickerChange(dataSource, level, value);
        } }));

      return pickers;
    }

    // 选择器选值
  }, {
    key: 'onpickerChange',
    value: function onpickerChange(dataSource, level, value) {
      var valueMember = this.props.valueMember;

      var values = this.state.value.concat(),
          item = undefined;

      for (var i = level; i < values.length; i++) {
        item = dataSource.filter(function (item) {
          return item[valueMember] == value;
        })[0];
        values[i] = item && item[valueMember];
        dataSource = item ? item.children : [];
        value = dataSource[0] ? dataSource[0][valueMember] : undefined;
      }

      this.setState({
        value: values
      });
    }
  }, {
    key: 'getSelected',
    value: function getSelected(d, val) {
      var _this3 = this;

      var children = d.filter(function (item) {
        return item[_this3.props.valueMember] == val;
      })[0].children;
      return children && children[0];
    }

    // 取消
  }, {
    key: 'onCancel',
    value: function onCancel() {
      var onCancel = this.props.onCancel;

      onCancel && onCancel();
    }

    // 确定
  }, {
    key: 'onOk',
    value: function onOk() {
      var onOk = this.props.onOk;

      var value = this.state.value.concat();

      this.setState({
        value: value
      });
      onOk && onOk(value);
    }
  }]);

  return PickerGroup;
})(_react.Component);

PickerGroup.propTypes = {
  visible: _react.PropTypes.bool,
  title: _react.PropTypes.string,
  cancelText: _react.PropTypes.string,
  okText: _react.PropTypes.string,
  onMaskClick: _react.PropTypes.func,
  valueMember: _react.PropTypes.string,
  displayMember: _react.PropTypes.string
};

PickerGroup.defaultProps = {
  visible: false,
  cancelText: '取消',
  okText: '确定',
  onMaskClick: function onMaskClick() {},
  valueMember: 'value',
  displayMember: 'label'
};

exports['default'] = PickerGroup;
module.exports = exports['default'];