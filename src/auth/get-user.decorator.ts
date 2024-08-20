import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UsersEntity } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, context: ExecutionContext): UsersEntity => {
    //This part of the code extracts the underlying HTTP request object from the ExecutionContext.
    const req = context.switchToHttp().getRequest();
    // console.log('User from request:', req.user);
    return req.user;
  },
);
