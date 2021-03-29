import App from '../app';

describe('App', () => {
  it('# Say()', () => {
    expect(App.say()).toBe('Hello World!');
  });
});
