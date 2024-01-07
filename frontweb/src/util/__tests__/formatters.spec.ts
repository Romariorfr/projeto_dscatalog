import { formatPrice } from 'util/formatters';

test('formatPrice should format number pt-BR when given a number', () => {
  //act
  const result = formatPrice(10.1);

  //assert
  expect(result).toEqual('10,10');
});
