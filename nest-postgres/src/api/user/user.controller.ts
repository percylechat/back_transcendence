import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User_Profile } from './user.entity';
import { UserService } from './user.service';

@Controller('login')
export class UserLogin_Controller {
  @Inject(UserService)
  private readonly service: UserService;
  
  @Post()
  public loginUser(@Body() body): Promise<string> {
    console.log( "hello");
    return this.service.loginUser(body);
  }
}

@Controller('join')
export class UserCreator_Controller {
  @Inject(UserService)
  private readonly service: UserService;

  @Post()
  public createUser(@Body() body): Promise<boolean> {
    console.log("toto");
    console.log(body.username);
    return this.service.createUser_Profile(body);
  }

//   @Get()
//   public sayHello(): string{
//       return this.service.sayHello();
//   }
}