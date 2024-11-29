import { Module } from '@nestjs/common';
import { FilmsService } from './film.service';
import { FilmsController } from './film.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FilmsService],
  controllers: [FilmsController]
})
export class FilmsModule {}
