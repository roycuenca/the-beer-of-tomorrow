import { transformText } from '../src/utils/helpers/Helpers';

describe('transformText', () => {
  it('transforms text with spaces to lowercase with underscores', () => {
    const input = 'Hello World';
    const output = transformText(input);
    expect(output).toBe('hello_world');
  });

  it('transforms text with mixed case to lowercase with underscores', () => {
    const input = 'Jest Testing Is Awesome';
    const output = transformText(input);
    expect(output).toBe('jest_testing_is_awesome');
  });

  it('transforms empty text to empty string', () => {
    const input = '';
    const output = transformText(input);
    expect(output).toBe('');
  });

  it('transforms text with special characters', () => {
    const input = 'Special Characters: !@#$%^&*()';
    const output = transformText(input);
    expect(output).toBe('special_characters:_!@#$%^&*()');
  });
});
