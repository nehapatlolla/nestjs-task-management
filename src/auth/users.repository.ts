import { DataSource, Repository } from 'typeorm';
import { UsersEntity } from './user.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserRepository extends Repository<UsersEntity> {
  constructor(private dataSource: DataSource) {
    super(UsersEntity, dataSource.createEntityManager());
  }
  async createUser(
    AuthCredentialsDTO: AuthCredentialsDTO,
  ): Promise<UsersEntity> {
    const { username, password } = AuthCredentialsDTO;
    //hash
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('salt', salt);
    console.log('hashedPassword', hashedPassword);
    const newUser = this.create({ username, password: hashedPassword });

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
