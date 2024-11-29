import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FilmsModule } from './film/film.module';

@Module({
    imports: [UserModule, FilmsModule],
})
export class AppModule {}
