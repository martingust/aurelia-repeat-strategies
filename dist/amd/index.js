define(['exports', 'aurelia-templating-resources/repeat-strategy-locator', './iterable-repeat-strategy'], function (exports, _aureliaTemplatingResourcesRepeatStrategyLocator, _iterableRepeatStrategy) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(config) {
    var repeatStrategyLocator = config.container.get(_aureliaTemplatingResourcesRepeatStrategyLocator.RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(function (items) {
      return typeof items[Symbol.iterator] === 'function';
    }, new _iterableRepeatStrategy.IteratorStrategy());
    config.globalResources('./iterable-value-converter');
  }
});