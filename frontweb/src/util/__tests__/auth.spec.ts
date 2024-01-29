import { hasAnyRoles } from '../auth';
import * as TokenModule from '../token';

describe('hasAnyRole', () => {
  test('should return true when empty list', () => {
    const result = hasAnyRoles([]);
    expect(result).toEqual(true);
  });

  test('should return true when user has given role', () => {
    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      user_name: 'bob',
      authorities: ['ROLE_OPERATOR', 'ROLE_ADMIN'],
    });
    const result = hasAnyRoles(['ROLE_ADMIN']);
    expect(result).toEqual(true);
  });
});
