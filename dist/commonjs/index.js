'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _aureliaTemplatingResourcesRepeatStrategyLocator = require('aurelia-templating-resources/repeat-strategy-locator');

var _iterableRepeatStrategy = require('./iterable-repeat-strategy');

function configure(config) {
  var repeatStrategyLocator = config.container.get(_aureliaTemplatingResourcesRepeatStrategyLocator.RepeatStrategyLocator);
  repeatStrategyLocator.addStrategy(function (items) {
    return typeof items[Symbol.iterator] === 'function';
  }, new _iterableRepeatStrategy.IteratorStrategy());
  config.globalResources('./iterable-value-converter');
}