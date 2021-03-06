import { Module } from '@nestjs/common';
import { UserCreator_Controller, UserLogin_Controller} from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Profile } from './user.entity'


@Module({
  imports: [TypeOrmModule.forFeature([User_Profile])],
  controllers: [UserCreator_Controller, UserLogin_Controller],
  providers: [UserService]
})
export class UserModule {}
