import { rebaseEm } from '..';

describe('rebaseEm()', () => {
  it('does nothing if "toBase" is "1em"', () => {
    // @ts-ignore
    expect(() => rebaseEm()).toThrow(`Cannot read property 'size' of undefined`);
    // @ts-ignore
    expect(() => rebaseEm({})).toThrow('Invalid unit');
  });

  it('does nothing if "toBase" is "1em"', () => {
    expect(rebaseEm({ size: '1em', toBase: '1em' })).toBe('1em');
    expect(rebaseEm({ size: '2em', toBase: '1em' })).toBe('2em');
    expect(rebaseEm({ size: '0.5em', toBase: '1em' })).toBe('0.5em');
  });

  it('recalculates according to "toBase"', () => {
    expect(rebaseEm({ size: '1em', toBase: '2em' })).toBe('0.5em');
    expect(rebaseEm({ size: '2em', toBase: '2em' })).toBe('1em');
    expect(rebaseEm({ size: '0.5em', toBase: '2em' })).toBe('0.25em');

    expect(rebaseEm({ size: '1em', toBase: '0.5em' })).toBe('2em');
    expect(rebaseEm({ size: '2em', toBase: '0.5em' })).toBe('4em');
    expect(rebaseEm({ size: '0.5em', toBase: '0.5em' })).toBe('1em');
  });

  it('works with "px" values assuming 1em=16px', () => {
    expect(rebaseEm({ size: '16px', toBase: '2em' })).toBe('0.5em');
    expect(rebaseEm({ size: '16px', toBase: '0.5em' })).toBe('2em');

    expect(rebaseEm({ size: '1em', toBase: '32px' })).toBe('0.5em');
    expect(rebaseEm({ size: '1em', toBase: '8px' })).toBe('2em');

    expect(rebaseEm({ size: '16px', toBase: '32px' })).toBe('0.5em');
    expect(rebaseEm({ size: '16px', toBase: '8px' })).toBe('2em');
  });
});
