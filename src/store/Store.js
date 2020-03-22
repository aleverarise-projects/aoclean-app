import { decorate, observable } from 'mobx';

class Store {
  test = 111;
}

decorate(Store, {
  test: observable,
});

export default new Store();
