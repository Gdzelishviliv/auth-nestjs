import { IsEmail, IsNotEmpty, IsString, isString } from "class-validator";

export class SignInDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
}