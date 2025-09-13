import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schema/developers.schema';
import { Project, ProjectSchema } from './schema/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Developer.name ,
        schema : DeveloperSchema, 
      },
      { name: Project.name ,
        schema : ProjectSchema, 
      },
    ])
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
