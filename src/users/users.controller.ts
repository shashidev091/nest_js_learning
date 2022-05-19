import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/')
    getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Post('/')
    addUser(@Body() user: User) {
        return this.usersService.addUser(user)
    }
}
