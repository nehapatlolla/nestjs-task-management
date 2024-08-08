import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeyTask } from './task.entity';
import { TasksRepository } from './task.repository';
import { AuthModule } from 'src/auth/auth.module';
import { UsersEntity } from 'src/auth/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HeyTask, UsersEntity]), AuthModule],
  controllers: [TaskController],
  providers: [TaskService, TasksRepository],
  exports: [TypeOrmModule],
})
export class TaskModule {}
