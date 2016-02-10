import {createFullOverrideContext} from 'aurelia-templating-resources/repeat-utilities';

export class IteratorStrategy {
  instanceChanged(repeat: Repeat, items: any): void {
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
