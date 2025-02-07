import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ description: 'Imię użytkownika', example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: 'Nazwisko użytkownika', example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: 'Email użytkownika', example: 'john@doe.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Hasło użytkownika', example: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: Role.ADMIN,
    enum: Role,
    description: 'Rola uzytkownika',
  })
  @IsEnum(Role)
  @IsOptional()
  role?: Role;
}
