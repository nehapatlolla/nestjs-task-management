import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { UsersEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(AuthCredentialsDTO: AuthCredentialsDTO): Promise<UsersEntity> {
    return this.userRepository.createUser(AuthCredentialsDTO);
  }
  async signIn(
    AuthCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    const { username, password } = AuthCredentialsDTO;
    const userExists = await this.userRepository.findOne({
      where: { username },
    });
    if (userExists && (await bcrypt.compare(password, userExists.password))) {
      const payload: JwtPayload = { username };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('please check your login credentials');
    }
  }
}
