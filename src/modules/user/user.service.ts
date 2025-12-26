import { userRepository } from "./user.repo";

export const userService = {
  async getAll() {
    return userRepository.findMany();
  },
  async deleteById(id: string) {
    return userRepository.delete(id);
  },
};
