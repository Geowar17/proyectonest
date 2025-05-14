import { Module } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projets.module';
import { UsersModule } from './users/users.module';
import { ProjectsController } from './projects/projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { HelloController } from './hello/hello.controller';


@Module({
  imports: [TasksModule, ProjectsModule, UsersModule],
  controllers: [TasksController, ProjectsController, HelloController],
  
})
export class AppModule {}
