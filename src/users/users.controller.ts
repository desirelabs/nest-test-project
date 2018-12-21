import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  @Get()
  findAll(@Query() query) {
    return `This action returns all users (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id, @Body() createUserDto: CreateUserDto) {
    return `This action updates a #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} user`;
  }
}
