import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersEntity } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, context: ExecutionContext): UsersEntity => {
    const req = context.switchToHttp().getRequest();
    console.log('User from request:', req.user);
    return req.user;
  },
);
