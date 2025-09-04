import { Body, Controller, Post,Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post()
    async addStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data);
    }
    
    
    @Get()
        async getStudents(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    async getStudent(@Param('id') id : string){
        return this.studentService.getStudentByID(id);
    }

}
