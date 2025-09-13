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

    async seed(): Promise<{ dev1: Developer; dev2: Developer }> {
        const [projectA, projectB] =await Promise.all([
            this.projectModel.create({title: 'Project A'}),
            this.projectModel.create({title: 'Project B'}),

        ]);
        const[dev1, dev2] = await Promise.all ([
            this.developerModel.create({
                name: 'sital',
                project: [projectA._id, projectB._id],
            }),

            this.developerModel.create({
                name: 'tharu',
                project: [projectA._id,],
            })
        ]);
        
        await Promise.all([
            this.projectModel.findByIdAndUpdate(projectA._id, {
                $set:{developers:[dev1._id, dev2._id]}
            }),
            this.projectModel.findByIdAndUpdate(projectB._id, {
                $set:{developers:[dev1._id]}
            })
        ])
        return {dev1 ,dev2};

    }
        async getDevelopers(): Promise<Developer[]> {
            return this.developerModel.find().populate('project').lean();
        }
        async getProjects(): Promise<Project[]> {
            return this.projectModel.find().populate('developers').lean();
        }
}
