import formatFlightTime from './formatFlightTime';
import formatFlightPeriod from './formatFlightPeriod';
import wordEnding from './wordEnding';

describe('utils tests', () => {
  it('format flight time', () => {
    expect(formatFlightTime(60)).toBe('01ч 00м');
    expect(formatFlightTime(125)).toBe('02ч 05м');
  });

  it('format flight period', () => {
    expect(formatFlightPeriod('2019-11-21T03:15:00.000Z', 1184)).toBe('11:15 - 06:59');
  });

  it('right word ending', () => {
    expect(wordEnding(1, ['пересадка', 'пересадки', 'пересадок'])).toBe('1 пересадка');
    expect(wordEnding(0, ['пересадка', 'пересадки', 'пересадок'])).toBe('без пересадок');
    expect(wordEnding(20, ['пересадка', 'пересадки', 'пересадок'])).toBe('20 пересадок');
    expect(wordEnding(153, ['пересадка', 'пересадки', 'пересадок'])).toBe('153 пересадки');
  });
});
