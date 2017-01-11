import { Ng2OpdPopupSamplePage } from './app.po';

describe('ng2-opd-popup-sample App', function() {
  let page: Ng2OpdPopupSamplePage;

  beforeEach(() => {
    page = new Ng2OpdPopupSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
