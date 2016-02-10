System.register(['aurelia-templating-resources/repeat-utilities'], function (_export) {
  'use strict';

  var createFullOverrideContext, IteratorStrategy;

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplatingResourcesRepeatUtilities) {
      createFullOverrideContext = _aureliaTemplatingResourcesRepeatUtilities.createFullOverrideContext;
    }],
    execute: function () {
      IteratorStrategy = (function () {
        function IteratorStrategy() {
          _classCallCheck(this, IteratorStrategy);
        }

        _createClass(IteratorStrategy, [{
          key: 'instanceChanged',
          value: function instanceChanged(repeat, items) {
            var index = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2);

                var key = _step$value[0];
                var value = _step$value[1];

                var overrideContext = createFullOverrideContext(repeat, value, index, undefined, key);
                var view = repeat.viewFactory.create();
                view.bind(overrideContext.bindingContext, overrideContext);
                repeat.viewSlot.add(view);
                ++index;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'instanceMutated',
          value: function instanceMutated(repeat, items, changes) {}
        }, {
          key: 'getCollectionObserver',
          value: function getCollectionObserver(observerLocator, items) {}
        }]);

        return IteratorStrategy;
      })();

      _export('IteratorStrategy', IteratorStrategy);
    }
  };
});