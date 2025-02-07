import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, IsBoolean, IsNumber } from 'class-validator';
import { Status } from '../entities/task.entity';

export class UpdateTaskDto {
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
      @IsOptional()
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
      status: Status;

      @ApiProperty({ description: 'Czy wykonane', example: 'false' })
      @IsBoolean()
      completed: boolean;

      @ApiProperty({
        type: Number,
        // required: false,
        description: 'Id użytkownika przypisanego do zadania',
        example: 1,
      })
      @IsNumber()
      @IsOptional()
      user_id: number;
}
