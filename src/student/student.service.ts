import { Get, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    )
    {}

    async createStudent(data: Partial<Student>):
     Promise<Student> {
        const newStudent = new this.studentModel(data);
        return newStudent.save();
     }

     async getAllStudents(): Promise<Student[]>{
        return this.studentModel.find().exec();
     
     }

     async getStudentByID (id: string): Promise<Student | null> {
        return this.studentModel.findById(id).exec();
     }

     async updateStudent(id : string , data: Partial <Student>) : Promise <Student | null>{

        return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
     }

     async patchStudent(id: string, data: Partial<Student>): Promise<Student | null> {
      return this.studentModel.findByIdAndUpdate(id, data, {new: true} ).exec();
   }
}