import { IsEmail, IsNotEmpty, Length } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(8)
  password: string;
}
