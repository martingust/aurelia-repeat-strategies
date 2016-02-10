System.register(['aurelia-templating-resources/repeat-strategy-locator', './iterable-repeat-strategy'], function (_export) {
  'use strict';

  var RepeatStrategyLocator, IteratorStrategy;

  _export('configure', configure);

  function configure(config) {
    var repeatStrategyLocator = config.container.get(RepeatStrategyLocator);
    repeatStrategyLocator.addStrategy(function (items) {
      return typeof items[Symbol.iterator] === 'function';
    }, new IteratorStrategy());
    config.globalResources('./iterable-value-converter');
  }

  return {
    setters: [function (_aureliaTemplatingResourcesRepeatStrategyLocator) {
      RepeatStrategyLocator = _aureliaTemplatingResourcesRepeatStrategyLocator.RepeatStrategyLocator;
    }, function (_iterableRepeatStrategy) {
      IteratorStrategy = _iterableRepeatStrategy.IteratorStrategy;
    }],
    execute: function () {}
  };
});