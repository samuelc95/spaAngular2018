import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/produto');
  }

  getTitleText() {
    return element(by.class('title')).getText();
  }
}
