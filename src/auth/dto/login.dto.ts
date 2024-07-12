import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  password: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
