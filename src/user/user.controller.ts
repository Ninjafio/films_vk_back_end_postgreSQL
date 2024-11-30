import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() data: { id: string }) {
        return this.userService.save(data);
    }

    @Get(':id')
    findOneUser(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
