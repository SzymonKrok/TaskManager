import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const { user_id, ...rest } = createTaskDto;



    // tutaj normalnie pobierasz usera
    let user = await this.usersRepository.findOne({
      where: { id: user_id },
    });

    if (!user_id) {
      user = null
    }

    // if (!user) {
    //   throw new NotFoundException(`User with id ${user_id} not found`);
    // }

    // tworzysz Taska
    const task = this.tasksRepository.create({
      ...rest,
      user,
    });

    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.tasksRepository.find({
      relations: ['user'],
    });

    // tasks.map()

    return tasks;

  }

  async findOne(id: number): Promise<Task | null> {
    const task = await this.tasksRepository.findOne({ where: { id } });

    return task;
  }

  async update(id: number, request: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id }});

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    await this.tasksRepository.update(id, request);
    return task;
  }

  async remove(id: number): Promise<Task> {
    const task = await this.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    await this.tasksRepository.remove(task);
    return task;
  }
}
