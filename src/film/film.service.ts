import { Injectable } from '@nestjs/common';
import { Film } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmsService {
    constructor(private prisma: PrismaService) {}

        async createFilm(data: {
            title: string;
            descr: string;
            age: number;
            year: number;
            tags: string;
            img: string;
            genre: string;
        }): Promise<Film> {
            return this.prisma.film.create({ data });
        }

        async getFilms(): Promise<Film[]> {
            return this.prisma.film.findMany();
        }
}
