import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CatsService } from './cats/cats.service';
import { FilmModule } from './film/film.module';

@Module({
    imports: [UserModule, FilmModule],
    providers: [CatsService],
})
export class AppModule {}
