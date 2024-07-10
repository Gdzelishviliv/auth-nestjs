import { IsEmail, IsNotEmpty, Length } from '@nestjs/class-validator';
import { MinLength} from 'class-validator';

export class SignUpDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
