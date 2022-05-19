import { Injectable } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
    private users: User[] = [];

    getAllUsers(): Array<User> {
        return this.users
    }

    addUser(user: User): User | object {
        if (user) {
            this.users.push(user)
            return user;
        } else return {
            status: "failed",
            message: "User cannot be empty"
        }
    }

    removeUser(id: number): User {
        let user = this.users.splice(id, 1)
        return user[0]
    }
}
