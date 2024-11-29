import { Injectable } from '@nestjs/common';
import { Film } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmsService {
    constructor(private prismaService: PrismaService) {}

        async createFilm(data: {
            title: string;
            descr: string;
            age: number;
            year: number;
            tags: string;
            img: string;
            genre: string;
        }): Promise<Film> {
            return this.prismaService.film.create({ data });
        }

        async getFilms(): Promise<Film[]> {
            return this.prismaService.film.findMany();
        }

        
    delete(id:number) {
        return this.prismaService.film.delete({ where: { id:id } });
    }
}
