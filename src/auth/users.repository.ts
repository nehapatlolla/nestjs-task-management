import { DataSource, Repository } from 'typeorm';
import { UsersEntity } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
@Injectable()
export class UserRepository extends Repository<UsersEntity> {
  constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }
  async signUp(AuthCredentialsDTO: AuthCredentialsDTO): Promise<UsersEntity> {
    const { username, password } = AuthCredentialsDTO;
    const newUser = this.create({ username, password });

    try {
      await this.save(newUser);
    } catch (error) {
      if (error.code == '23505') {
        throw new ConflictException('username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return newUser;
  }
}
