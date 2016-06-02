export class IterableValueConverter {
  toView(value = {}) {
    let index = 0;
    let propKeys = Reflect.ownKeys(value);
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (index < propKeys.length) {
                let key = propKeys[index];
                index++;
                return { value: [key, value[key]] };
            } else {
                return { done: true };
            }
        }
    };
  }
}
