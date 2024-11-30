import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FilmsModule } from './film/film.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [UserModule, FilmsModule, AuthModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
