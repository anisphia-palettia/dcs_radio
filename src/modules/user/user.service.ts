import { userRepository } from "./user.repository"

export const userService = {
    async getAll() {
        return userRepository.findMany()
    },
    async deleteById(id : string) {
        return userRepository.delete(id)
    }
}