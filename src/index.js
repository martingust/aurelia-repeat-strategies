import {RepeatStrategyLocator} from 'aurelia-templating-resources/repeat-strategy-locator';
import {IteratorStrategy} from './iterable-repeat-strategy';

export function configure(config) {
  let repeatStrategyLocator = config.container.get(RepeatStrategyLocator);
  repeatStrategyLocator.addStrategy(items => typeof items[Symbol.iterator] === 'function', new IteratorStrategy());
  config.globalResources('./iterable-value-converter');
}
