import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  @Length(3, 20)
  name: string;
  @ApiProperty()
  @IsString()
  @Length(3, 10)
  password: string;
  @ApiProperty()
  @IsEmail()
  email: string;
}
