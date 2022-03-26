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

//   public getUser_Profile(id: number): Promise<User_Profile> {
//     return this.repository.findOne(id);
//   }

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
      // console.log("see false");
      ret = false;
    }
    // console.log("wat");
    return ret;
  }

  // public async loginUser(body: LoginUserDto): Promise<boolean> {
  //   // let test: string = this.searchPW(body.username);
  //   // const test = await User_Profile.findoneby({
  //   //   username: body.username,
  //   // })
  //   // let test: User_Profile =  new User_Profile();
    
  //   // SELECT "password" FROM "User_Profile"
  //   // WHERE "username" = body.username;
  //   // const mdp = await dataSource
  //   // .getRepository(User_Profile)
  //   // .createQueryBuilder("User_Profile")
  //   // // const user = await dataSource
  //   // // .createQueryBuilder()
  //   // .select("password")
  //   // .from(User_Profile, "User_Profile")
  //   // .where("User_Profile.username = :username", { username: body.username })
  //   // // .getOne()
  //   // .getRawOne()
  //   let test: User_Profile = new User_Profile();
  //   test.id = 0;
  //   test.is_in_game = false;
  //   test.is_online = false;
  //   test.uuid = "";
  //   test.username = "";
  //   test.password = "";
  //   test = await this.repository.find({
  //     // select: {
  //     //     id: true,
  //     //     password: true,
  //     // },
  //     where: {
  //       username: body.username,
  //     },
  //   });
  //   const isMatch = await bcrypt.compare(body.password, test.password);

  //   // user.username = body.username;
  //   // user.is_online = true;
  //   // user.is_in_game = false;
  //   // if (body.avatar != "")
  //   //     user.avatar = body.avatar;
  //   // user.uuid = uuidv4();
  //   // const saltOrRounds = 20;
  //   // console.log("hello", body.password);
  //   // const hash = await bcrypt.hash(body.password, saltOrRounds);
  //   // user.password = hash;
  //   // try{
  //   //   await this.repository.save(user);
  //   // }
  //   // catch{
  //   //   // console.log("see false");
  //   //   ret = false;
  //   // }
  //   // // console.log("wat");
  //   return isMatch;
  // }
}