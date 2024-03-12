import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateApplicationDto {
  @ApiProperty({ description: 'Applicant name' })
  @IsString() 
  @IsNotEmpty() 
  applicantName: string;

  @ApiProperty({ description: 'Requested amount' })
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
