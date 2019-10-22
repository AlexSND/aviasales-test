import formatFlightTime from './formatFlightTime';
import formatFlightPeriod from './formatFlightPeriod';

describe('utils tests', () => {
  it('format flight time', () => {
    expect(formatFlightTime(60)).toBe('01ч 00м');
    expect(formatFlightTime(125)).toBe('02ч 05м');
  });

  it('format flight period', () => {
    expect(formatFlightPeriod('2019-11-21T03:15:00.000Z', 1184)).toBe('11:15 - 06:59');
  });
});
