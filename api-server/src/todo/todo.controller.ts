import {
  Request,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtPayload } from '../lib/jwt/interfaces/jwt-payload.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body(ValidationPipe) createTodoDto: CreateTodoDto,
    @Request() req: { user: JwtPayload },
  ) {
    return this.todoService.create(createTodoDto, req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req: { user: JwtPayload }) {
    return this.todoService.findAll(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: { user: JwtPayload }) {
    return this.todoService.findOne(+id, req.user.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
