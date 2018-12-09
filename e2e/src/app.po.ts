import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToProduto() {
    return browser.get('/produto');
  }

  navigateToRestricao() {
    return browser.get('/restricao');
  }

  navigateToCategoria() {
    return browser.get('/categoria');
  }

  navigateToMaterial() {
    return browser.get('/material');
  }

  navigateToAcabamento() {
    return browser.get('/acabamento');
  }

  navigateToMatAcabamento() {
    return browser.get('/materialAcabamento');
  }

  navigateToAgregacao() {
    return browser.get('/agregacao');
  }

  navigateToDimensao() {
    return browser.get('/dimensao');
  }

  navigateToItemProduto() {
    return browser.get('/itemProduto');
  }

  navigateToEncomenda() {
    return browser.get('/encomenda');
  }

  getTitleText() {
    return element(by.className('title')).getText();
  }

}
