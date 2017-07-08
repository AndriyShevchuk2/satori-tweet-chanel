import { SatoriTweetChanelPage } from './app.po';

describe('satori-tweet-chanel App', function() {
  let page: SatoriTweetChanelPage;

  beforeEach(() => {
    page = new SatoriTweetChanelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
