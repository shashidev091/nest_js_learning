import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
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
    @UsePipes(ValidationPipe)
    addUser(@Body() user: CreateUser) {
        return this.usersService.addUser(user)
    }

    @Delete('/:id')
    deleteUser(@Param("id") id: number) {
        return this.usersService.removeUser(id)
    }
}
