import { RestaurantFinderPage } from './app.po';

describe('restaurant-finder App', function() {
  let page: RestaurantFinderPage;

  beforeEach(() => {
    page = new RestaurantFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
