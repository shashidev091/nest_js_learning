import { Injectable } from '@nestjs/common';
import { User } from './dto/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = []; 

    getAllUsers(): Array<User> {
        return this.users
    }

    addUser(user: User):  | object {
        if (user.id) {
            this.users.push(user)
            return user;
        } else return {
            status: "failed",
            message: "User cannot be empty"
        }
    }

    removeUser(id: number): User {
        const idx = this.users.findIndex((item) => item.id === id)
        console.log(idx, id)
        let user = this.users.splice(id, 1)
        return user[0]
    }
}
