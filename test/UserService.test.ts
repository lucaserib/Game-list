import { User } from "../src/models/User";
import { UserService } from "../src/services/UserService";

describe("UserService", () => {
  let userService: UserService;
  let user: User;

  beforeEach(() => {
    userService = new UserService();
    user = new User("Lucas");
  });

  test("Should be able to create a user", () => {
    //triple A - arrange/act/assert

    const createdUser = userService.create(user);

    expect(createdUser).toHaveProperty("id");
    expect(createdUser.name).toBe("Lucas");
  });
});
