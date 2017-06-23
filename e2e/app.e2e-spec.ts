import { MatrixCatcherPage } from './app.po';

describe('matrix-catcher App', () => {
  let page: MatrixCatcherPage;

  beforeEach(() => {
    page = new MatrixCatcherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to matrix!!');
  });
});
