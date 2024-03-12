import { Controller, Get, Post, Put, Delete, Body, Query, Param, NotFoundException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/domain/auth/jwt/jwt-auth.guard'
import { ApplicationService } from '../../core/domain/application/application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationsService.create(createApplicationDto);
  }

  @Get('search')
  search(@Query('applicantName') applicantName: string) {
    return this.applicationsService.search(applicantName);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) 
  async update(@Param('id') id: number, @Body() updateApplicationDto: UpdateApplicationDto) {
    const updatedApplication = await this.applicationsService.update(id, updateApplicationDto);
    if (!updatedApplication) {
      throw new NotFoundException('Application not found');
    }
    return updatedApplication;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: number) {
    const deletedApplication = await this.applicationsService.delete(id);
    if (!deletedApplication) {
      throw new NotFoundException('Application not found');
    }
    return deletedApplication;
  }
}
