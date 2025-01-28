import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Status } from '../entities/task.entity';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @ApiProperty({ description: 'Tytuł zadania', example: 'Zadanie 1' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Opis zadania',
    example: 'To jest przykładowe zadanie',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Tag zadania', example: 'Frontend' })
  @IsString()
  @IsNotEmpty()
  tags: string;

  @ApiProperty({ description: 'Priorytet zadania', example: 'Wysoki' })
  @IsString()
  @IsNotEmpty()
  priority: string;

  @ApiProperty({
    example: Status.TO_DO,
    enum: Status,
    description: 'Status zadania',
  })
  @IsEnum(Status)
  @IsOptional()
  status?: Status;

  @ApiProperty({ description: 'Czy wykonane', example: 'false' })
  @IsBoolean()
  completed: boolean;

  @ApiProperty({
    type: () => Number,
    required: false,
    description: 'Opcjonalna lista postów tworzona wraz z użytkownikiem',
    example: 1,
  })
  @IsNumber()
  user_id: number;
}
