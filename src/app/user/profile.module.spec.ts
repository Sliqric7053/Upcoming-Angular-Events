import { UserProfileModule } from './profile.module';

describe('UserProfileModule', () => {
  let profileModule: UserProfileModule;

  beforeEach(() => {
    profileModule = new UserProfileModule();
  });

  it('should create an instance', () => {
    expect(profileModule).toBeTruthy();
  });
});
