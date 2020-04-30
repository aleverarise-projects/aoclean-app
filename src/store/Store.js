import { decorate, observable } from 'mobx';

class Store {
  isLogin = false;

  setMethods(field, value) {
    this[field] = value;
  }
}

decorate(Store, {
  isLogin: observable,
});

export default new Store();
