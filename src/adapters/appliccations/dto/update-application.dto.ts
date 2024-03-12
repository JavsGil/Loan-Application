import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateApplicationDto {
  @ApiProperty({ description: 'ID of the application', type: 'number' })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'New name for the application' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'New amount for the application', type: 'number' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
