'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var finished = true,
    angle = 0,
    error = false,
    flag = true;

var Lottery = (function (_Component) {
  _inherits(Lottery, _Component);

  function Lottery(props) {
    _classCallCheck(this, Lottery);

    _get(Object.getPrototypeOf(Lottery.prototype), 'constructor', this).call(this, props);
    this.state = {
      gift: '',
      isStart: props.isStart || false
    };
  }

  _createClass(Lottery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      this._addListenerMulti(this.refs.rotateArea, 'webkitTransitionEnd transitionend', function () {
        _this._transitionend();
      });
    }
  }, {
    key: '_addListenerMulti',
    value: function _addListenerMulti(el, s, fn) {
      var evts = s.split(' ');
      for (var i = 0, iLen = evts.length; i < iLen; i++) {
        el.addEventListener(evts[i], fn, false);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.isStart) {
        flag = true;
        return;
      }

      this.onStart(nextProps.value);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      finished = true;
      flag = true;
    }
  }, {
    key: '_findIndexOfArr',
    value: function _findIndexOfArr(id) {
      return this.props.option.filter(function (obj) {
        return obj.id == id;
      });
    }
  }, {
    key: '_getRandom',
    value: function _getRandom(min, max) {
      //参数min为随机数最小值 max为随机数最大值 得到的随机数范围为[min,max]
      return Math.floor(Math.random() * (max + 1 - min) + min);
    }
  }, {
    key: '_runLottery',
    value: function _runLottery(index) {
      if (!finished) {
        return false;
      }
      finished = false;
      angle = this._getRandom(4, 6) * 360 - 360 / 8 * ('' + (index - 0.5));
      this.refs.rotateArea.style.webkitTransform = 'rotate(' + angle + 'deg)';
      this.refs.rotateArea.style.webkitTransition = this.props.duration + 's';
      this.refs.rotateArea.style.transform = 'rotate(' + angle + 'deg)';
      this.refs.rotateArea.style.transition = this.props.duration + 's';
    }

    // 监听动画执行完成
  }, {
    key: '_transitionend',
    value: function _transitionend() {
      this.refs.rotateArea.style.transform = 'rotate(' + angle % 360 + 'deg)';
      this.refs.rotateArea.style.transition = "0s";
      finished = true;
      flag = true;
      error ? this.onError() : this.onComplete(this.state.gift);
    }

    // 开始
  }, {
    key: 'onStart',
    value: function onStart(value) {
      var _this2 = this;

      this.setState({ isStart: true });

      var res = this._findIndexOfArr(value);
      if (res.length == 0) {
        error = true;
        this._runLottery(0.5);
        return;
      }

      this.props.option.forEach(function (item, index) {
        if (item.id == res[0].id) {
          error = false;
          _this2.setState({
            gift: res[0].name
          });
          _this2._runLottery(index + 1);
        }
      });
    }

    // 出错
  }, {
    key: 'onError',
    value: function onError() {
      this.setState({ isStart: false });
      this.props.onError();
    }

    // 完成
  }, {
    key: 'onComplete',
    value: function onComplete(name) {
      this.setState({ isStart: false });
      this.props.onComplete(name);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var cls = (0, _classnames2['default'])({
        "rotate-area": 'true'
      });

      var rotateItem = [];
      for (var i = 1; i <= 8; i++) {
        rotateItem.push(_react2['default'].createElement('div', { key: i, style: { backgroundImage: 'url(' + this.props.option[i - 1].image + ')' }, className: 'award-item award-item' + i }));
      }

      return _react2['default'].createElement(
        'div',
        { className: 'lottery-area' },
        _react2['default'].createElement(
          'div',
          { className: cls, ref: 'rotateArea', style: { backgroundImage: 'url(' + this.props.bgUrl + ')' } },
          rotateItem
        ),
        _react2['default'].createElement('div', {
          className: 'lottery-btn',
          style: { backgroundImage: 'url(' + this.props.btnUrl + ')' },
          onClick: function () {
            if (!flag) return;
            flag = false;

            _this3.props.onStart();
          }

        })
      );
    }
  }]);

  return Lottery;
})(_react.Component);

Lottery.propTypes = {
  option: _react.PropTypes.array,
  duration: _react.PropTypes.number,
  id: _react.PropTypes.number,
  onStart: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

Lottery.defaultProps = {
  duration: 2,
  onStart: function onStart() {},
  onComplete: function onComplete() {}
};

exports['default'] = Lottery;
module.exports = exports['default'];