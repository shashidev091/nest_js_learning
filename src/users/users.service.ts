import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: CreateUser[] = []; 

    getAllUsers(): Array<CreateUser> {
        return this.users
    }

    addUser(user: CreateUser): CreateUser | object {
        if (user.id) {
            this.users.push(user)
            return user;
        } else return {
            status: "failed",
            message: "User cannot be empty"
        }
    }

    removeUser(id: number): CreateUser {
        const idx = this.users.findIndex((item) => item.id === id)
        console.log(idx, id)
        let user = this.users.splice(id, 1)
        return user[0]
    }
}
