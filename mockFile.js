export class UserRepo {
  findById() {
    return {
      id: "1",
      name: "dilshad",
    };
  }
}
export class UserService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }
  async getUser() {
    return this.userRepo.findById();
  }
}

const userRepoInstance = new UserRepo();
const userServiceInstance = new UserService(userRepoInstance);

console.log(userServiceInstance.getUser());
