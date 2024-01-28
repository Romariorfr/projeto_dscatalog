import { formatPrice } from 'util/formatters';

describe('formatPrice for positive numbers', () => {
  test('formatPrice should format number pt-BR when given a number', () => {
    const result = formatPrice(10.1);
    expect(result).toEqual('10,10');
  });

  describe('formatPrice for non-positive numbers', () => {
    test('formatPrice should format number pt-BR when given a number 0', () => {
      const result = formatPrice(0);
      expect(result).toEqual('0,00');
    });

    test('formatPrice should format number pt-BR when given a number -1', () => {
      const result = formatPrice(-1);
      expect(result).toEqual('-1,00');
    });
  });
});
