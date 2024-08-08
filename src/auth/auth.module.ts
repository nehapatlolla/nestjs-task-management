import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { HeyTask } from 'src/task/task.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topsecret18',
      signOptions: { expiresIn: 3600 },
    }),
    TypeOrmModule.forFeature([UsersEntity, HeyTask]),
  ],
  providers: [AuthService, JwtStrategy, UserRepository],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
