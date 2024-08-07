import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { UsersEntity } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}
  async signUp(AuthCredentialsDTO: AuthCredentialsDTO): Promise<UsersEntity> {
    return this.userRepository.signUp(AuthCredentialsDTO);
  }
}
