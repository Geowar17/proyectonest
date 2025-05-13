import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';


@Module({
  controllers: [TasksController],
  providers: [TasksService],

  exports: [TasksService],
  imports: [],
  // imports: [TypeOrmModule.forFeature([Task])],
  // controllers: [TasksController],
})
export class TasksModule {}
