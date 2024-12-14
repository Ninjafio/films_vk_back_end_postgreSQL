import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { List } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() data: { id: string }) {
        return this.userService.save(data);
    }
    @Post(":createList")
    createListAndAddToUser(@Body() data: { id: string }) {
        return this.userService.save(data);
    }

    @Get(':id')
    async findOneUser(@Param('id') id: string) {
            return this.userService.findOne(id);
    }

    @Get('list/:authorId')
    async getListsID(@Param('authorId') userId: number): Promise<List[]> {
        return this.userService.getListsID(userId);
    }

    @Delete('list/:id')
    async deleteList(@Param('id') id: number): Promise<List> {
        return this.userService.deleteList({ id: Number(id) });
    }

    @Delete('user/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
