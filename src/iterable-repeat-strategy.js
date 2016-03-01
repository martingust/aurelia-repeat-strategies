import {createFullOverrideContext} from 'aurelia-templating-resources/repeat-utilities';

export class IteratorStrategy {
  instanceChanged(repeat: Repeat, items: any): void {
    let removePromise = repeat.viewSlot.removeAll(true);
    if (removePromise instanceof Promise) {
      removePromise.then(() => this._standardProcessItems(repeat, items));
      return;
    }
    this._standardProcessItems(repeat, items);
  }

  _standardProcessItems(repeat, items) {
    let index = 0;
    for(let [key, value] of items) {
      let overrideContext = createFullOverrideContext(repeat, value, index, undefined, key);
      let view = repeat.viewFactory.create();
      view.bind(overrideContext.bindingContext, overrideContext);
      repeat.viewSlot.add(view);
      ++index;
    }
  }

  instanceMutated(repeat: Repeat, items: any, changes: any): void {
  }

  getCollectionObserver(observerLocator: any, items: any): any {
  }
}
