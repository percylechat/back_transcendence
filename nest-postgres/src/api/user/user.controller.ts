import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User_Profile } from './user.entity';
import { UserService } from './user.service';

@Controller('join')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Post()
  public createUser(@Body() body): Promise<User_Profile> {
//   public createUser(@Body() body: CreateUserDto): Promise<User_Profile> {
    console.log("toto");
    console.log(body.username);
    //   console.log(toto);
    return this.service.createUser_Profile(body);
  }

//   @Get()
//   public sayHello(): string{
//       return this.service.sayHello();
//   }
}