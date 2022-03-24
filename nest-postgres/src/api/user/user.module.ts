import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Profile } from './user.entity'


@Module({
  imports: [TypeOrmModule.forFeature([User_Profile])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
