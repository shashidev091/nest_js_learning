import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Gender } from './dto/create-user.dto';
import { User } from './dto/user.entity';
// import { User } from './users.model';
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

    @Delete('/:id')
    deleteUser(@Param("id") id: number) {
        return this.usersService.removeUser(id)
    }
}
