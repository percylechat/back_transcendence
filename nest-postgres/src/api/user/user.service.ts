import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User_Profile } from './user.entity';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  @InjectRepository(User_Profile)
  private readonly repository: Repository<User_Profile>;

//   public getUser_Profile(id: number): Promise<User_Profile> {
//     return this.repository.findOne(id);
//   }

  public async createUser_Profile(body: CreateUserDto): Promise<User_Profile> {
    const user: User_Profile = new User_Profile();

    user.username = body.username;
    user.is_online = true;
    user.is_in_game = false;
    if (body.avatar != "")
        user.avatar = body.avatar;
    user.uuid = uuidv4();
    const saltOrRounds = 20;
    console.log("hello", body.password);
    const hash = await bcrypt.hash(body.password, saltOrRounds);
    user.password = hash;
    return this.repository.save(user);
  }
  public sayHello(): string{
      return "hello";
  }
}