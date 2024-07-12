import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { jwtAuthGuard } from 'src/auth/auth.guard';
import { UserEmail } from 'src/common/decorator/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiBearerAuth()
  @UseGuards(jwtAuthGuard)
  @ApiOperation({
    description: 'To Add a new task wrt to the user email.',
    summary: 'Add a new Task.',
  })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto, @UserEmail() userEmail: string) {
    return this.todoService.create(createTodoDto, userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(jwtAuthGuard)
  @ApiOperation({
    description: 'To get all the user tasks.',
    summary: 'To get all the user tasks.',
  })
  @Get()
  findAll(@UserEmail() userEmail: string) {
    return this.todoService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(jwtAuthGuard)
  @ApiOperation({
    description: 'To get a specific the user task.',
    summary: 'To get a specific the user task.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(jwtAuthGuard)
  @ApiOperation({
    description: 'To update a specific the user task.',
    summary: 'To update a specific the user task.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(jwtAuthGuard)
  @ApiOperation({
    description: 'To delete a specific the user task.',
    summary: 'To delete a specific the user task.',
  })
  @Delete(':id')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
