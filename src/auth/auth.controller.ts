import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth.credentials.dto';
import { UsersEntity } from './user.entity';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() AuthCredentialsDTO: AuthCredentialsDTO): Promise<UsersEntity> {
    return this.authService.signUp(AuthCredentialsDTO);
  }
  @Post('/signin')
  signIn(
    @Body() AuthCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(AuthCredentialsDTO);
  }
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }
  //   @Post('/test')
  //   @UseGuards(AuthGuard()) // This uses the JwtStrategy
  //   getProfile(@Req() req) {
  //     return req.user;
  //   }
}
