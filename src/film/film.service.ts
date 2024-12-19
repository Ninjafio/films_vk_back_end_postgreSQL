import { Injectable } from '@nestjs/common';
import { Film, List, Prisma } from '@prisma/client';
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
        country: string;
    }): Promise<Film> {
        return this.prismaService.film.create({ data });
    }

    async updateFilm(params: {
        where: Prisma.FilmWhereUniqueInput;
        data: Prisma.FilmUpdateInput;
        title: string;
        descr: string;
        age: number;
        year: number;
        tags: string;
        img: string;
        genre: string;
        country: string;
    }): Promise<Film | null> {
        const { where, data, title, descr, age, year, tags, img, genre, country } = params;

        return this.prismaService.film.update({
            where,
            data: {
                ...data,
                title,
                descr,
                age,
                year,
                tags,
                img,
                genre,
                country,
            },
        });
    }

    async getFilms(): Promise<Film[]> {
        return this.prismaService.film.findMany();
    }

    async findOne(where: Prisma.FilmWhereUniqueInput): Promise<Film | null> {
        const id = Number(where.id);
        return this.prismaService.film.findFirst({ where: { id: id } });
    }
    async delete(where: Prisma.FilmWhereUniqueInput): Promise<Film> {
        const id = Number(where.id);
        const deletedResult = await this.prismaService.film
            .delete({
                where: {
                    id: id,
                },
            })
            .catch((error) => {
                if (error.code === 'P2025') {
                    // Код ошибки, если запись не найдена
                    throw new Error('Анлак');
                }
                throw error; // Перебрасываем остальные ошибки
            });

        return deletedResult;
    }
}
