import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    save(user: Partial<User>) {
        return this.prismaService.user.create({ 
            data: {
                id: user.id
            },
         });
    }

    findOne(id: string) {
        return this.prismaService.user.findFirst({ where: { id:id } });
    }

    delete(id:string) {
        return this.prismaService.user.delete({ where: { id:id } });
    }
}
