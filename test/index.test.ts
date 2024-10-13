import { hello } from '../src/index';

describe('hello', () => {
  it('should return "Hello, World!"', () => {
    expect(hello()).toBe('Hello, World!');
  });
});
