import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
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
