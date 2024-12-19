import { Injectable } from '@nestjs/common';
import { User, List, Prisma } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    save(user: Partial<User>) {
        return this.prismaService.user.create({
            data: {
                id: user.id,
            },
        });
    }
    async getListsID(userId: number): Promise<List[]> {
        const results = await this.prismaService.list.findMany({
            where: { authorId: String(userId) },
        }).catch((error) => {
            // Обработка ошибок, если необходимо
            throw error; // Перебрасываем остальные ошибки
        });
        return results;
    }

    async findOne(id: string) {
        let user = await this.prismaService.user.findFirst({
            where: { id: id },
        });
        if (!user) {
            user = await this.prismaService.user.create({
                data: {
                    id: id,
                },
            });
            return this.prismaService.user.findFirst({ where: { id: id } });
        } else {
            return this.prismaService.user.findFirst({ where: { id: id } });
        }
    }



    async createListAndAddToUser(params: {
        authorId: string;
        listData: { title: string; descr: string; content: string };
    }): Promise<List> {
        // Создание нового списка
        const newList = await this.prismaService.list.create({
            data: {
                ...params.listData,
                authorId: params.authorId, // Указываем ID пользователя
            },
        });

        // Возвращаем созданный список
        return newList;
    }
    async deleteList(where: Prisma.ListWhereUniqueInput): Promise<List> {
        const resultId = Number(where.id);
        const deletedResult = await this.prismaService.list.delete({
            where: {
                id: resultId,
            },
        }).catch((error) => {
            if (error.code === 'P2025') { // Код ошибки, если запись не найдена
                throw new Error('List not found');
            }
            throw error; // Перебрасываем остальные ошибки
        });
      
        return deletedResult;
      }
    delete(id: string) {
        return this.prismaService.user.delete({ where: { id: id } });
    }
}
