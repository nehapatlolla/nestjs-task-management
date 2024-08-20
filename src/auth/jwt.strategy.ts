import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './users.repository';
import { JwtPayload } from './jwt-payload.interface';
import { UsersEntity } from './user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userRepository: UserRepository,
    private ConfigService: ConfigService,
  ) {
    super({
      secretOrKey: ConfigService.get('JWT_SECRET'),
      //   ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload): Promise<UsersEntity> {
    const { username } = payload;
    const user1 = await this.userRepository.findOne({ where: { username } });
    if (!user1) {
      throw new UnauthorizedException();
    }
    return user1;
  }
}
