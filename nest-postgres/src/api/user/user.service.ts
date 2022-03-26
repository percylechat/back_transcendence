import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './user.dto';
import { User_Profile } from './user.entity';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
// import {  } from "typeorm"



@Injectable()
export class UserService {
  @InjectRepository(User_Profile)
  private readonly repository: Repository<User_Profile>;

  public async createUser_Profile(body: CreateUserDto): Promise<boolean> {
    const user: User_Profile = new User_Profile();

    let ret: boolean = true;
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
    try{
      await this.repository.save(user);
    }
    catch{
      ret = false;
    }
    return ret;
  }

  public async loginUser(body: LoginUserDto): Promise<string> {
    let test: User_Profile [];
    test = await this.repository.find({
      where: {
        username: body.username,
      },
    });
    if (test[0] == undefined)
      return "username not found";
    console.log(test);
    // console.log(test[0].password);
    const isMatch = await bcrypt.compare(body.password, test[0].password);
    if (isMatch == true)
      return "ok";
    return "wrong password";
    // return isMatch;
  }
}