import { IsMongoId, IsNotEmpty, IsString } from '@nestjs/class-validator';
import mongoose from 'mongoose';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsMongoId()
  user: mongoose.Schema.Types.ObjectId;
}
