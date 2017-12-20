import { StudentappPage } from './app.po';

describe('studentapp App', function() {
  let page: StudentappPage;

  beforeEach(() => {
    page = new StudentappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
