import { hasAnyRoles } from '../auth';

describe('hasAnyRole', () => {
  test('should return true when empty list', () => {
    const result = hasAnyRoles([]);
    expect(result).toEqual(true);
  });
});
