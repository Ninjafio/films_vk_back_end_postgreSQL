import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FilmsService } from './film.service';
import { Film } from '@prisma/client';

@Controller('films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {}

    @Post()
    async createFilm(
        @Body() data: {
            title: string;
            descr: string;
            age: number;
            year: number;
            tags: string;
            img: string;
            genre: string;
        }
    ): Promise<Film> {
        return this.filmsService.createFilm(data);
    }

    @Get()
    async getFilms(): Promise<Film[]> {
        return this.filmsService.getFilms();
    }
}
