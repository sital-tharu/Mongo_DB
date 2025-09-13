import { Injectable } from '@nestjs/common';
import { Developer } from './schema/developers.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schema/project.schema';

@Injectable()
export class ProjectService {
    constructor (
        @InjectModel(Developer.name) private developerModel: Model<Developer>,
        @InjectModel(Project.name) private projectModel: Model<Project>,
    ) {}
}
