import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeyTask } from './task/task.entity';
import { TasksRepository } from './task/task.repository';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.dev`],
      validationSchema: configValidationSchema,
    }),
    TaskModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        // console.log(configService.get('DB_HOST')); // Log the value
        // console.log('DB_PORT:', configService.get('DB_PORT'));
        // console.log('DB_USERNAME:', configService.get('DB_USERNAME'));
        // console.log('DB_PASSWORD:', configService.get('DB_PASSWORD')); // Sensitive: be cautious with this
        // console.log('DB_DATABASE:', configService.get('DB_DATABASE'));

        // const dbHost = configService.get<string>('DB_HOST');
        // console.log('Database Host:', dbHost); // Log the value of DB_HOST
        // const dbPassword = configService.get<string>('DB_PASSWORD');
        // if (!dbPassword) {
        //   throw new Error('Database password is missing or not defined.');
        // }
        return {
          // protocol: 'http:',
          type: 'postgres',
          synchronize: true,
          autoLoadEntities: true,
          entities: [HeyTask],
          host: configService.get('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),

    AuthModule,
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService, TasksRepository],
})
export class AppModule {}
