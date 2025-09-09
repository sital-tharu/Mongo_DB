import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schema/profile.schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel : Model<Employee>,
        @InjectModel(Profile.name) private profileModel : Model<Profile>
    ){}

    async createEmployee() : Promise<Employee> {
        const profile = await new this.profileModel({
            age : 20, 
            qualification : 'BCA'
        }).save();

        const employee = new this.employeeModel({
            name : 'anu',
            profile : profile._id
    });
    return employee.save();

}
}
