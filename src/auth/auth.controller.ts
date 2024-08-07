import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { UsersEntity } from './user.entity';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() AuthCredentialsDTO: AuthCredentialsDTO): Promise<UsersEntity> {
    return this.authService.signUp(AuthCredentialsDTO);
  }
}
