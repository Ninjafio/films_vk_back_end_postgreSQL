import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FilmsService } from './film.service';
import { Film } from '@prisma/client';

@Controller('films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {}

    @Post()
    async createFilm(
        @Body()
        data: {
            title: string;
            descr: string;
            age: number;
            year: number;
            tags: string;
            img: string;
            genre: string;
            country: string;
        },
    ): Promise<Film> {
        return this.filmsService.createFilm(data);
    }

    @Get()
    async getFilms(): Promise<Film[]> {
        return this.filmsService.getFilms();
    }
    @Get(':id')
    findOneUser(@Param('id') id: number) {
        return this.filmsService.findOne({ id: Number(id) });
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.filmsService.delete({ id: Number(id) });
    }
    @Put('updatefilm/:id')
    async updateResult(
        @Param('id') id: number,
        @Body()
        updateData: {
            title: string;
            descr: string;
            age: number;
            year: number;
            tags: string;
            img: string;
            genre: string;
            country: string;
        }, // Обновлено: теперь summ тоже в теле запроса
    ): Promise<Film> {
        return this.filmsService.updateFilm({
            where: { id: Number(id) },
            data: {},
            title: updateData.title,
            descr: updateData.descr,
            age: updateData.age,
            year: updateData.year,
            tags: updateData.tags,
            img: updateData.img,
            genre: updateData.genre,
            country: updateData.country,
            // Используйте пустой объект, если у вас нет дополнительных данных для обновления
        });
    }
}
