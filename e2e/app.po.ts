import { browser, by, element } from 'protractor';

export class MatrixCatcherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('matrix-root h1')).getText();
  }
}
