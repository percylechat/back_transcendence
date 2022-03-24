import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

// TO DO improve andd check usefulness

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public username: string;
  @IsString()
  @IsNotEmpty()
  public password: string;
  @IsOptional()
  public avatar: string;
}