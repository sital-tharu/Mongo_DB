import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env/env.service';
import { EnvController } from './env/env.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONOGO_URI!),
    StudentModule,
    UserModule,
    EmployeeModule

],
  controllers: [AppController, EnvController],
  providers: [AppService, EnvService],
})
export class AppModule {}
