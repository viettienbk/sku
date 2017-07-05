import { BookManagermentPage } from './app.po';

describe('book-managerment App', () => {
  let page: BookManagermentPage;

  beforeEach(() => {
    page = new BookManagermentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
