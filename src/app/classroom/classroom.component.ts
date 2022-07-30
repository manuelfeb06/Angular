import {Component,Input} from "@angular/core";
import {IStudent} from "../interfaces/student.interface";
import {IClassroom} from "../interfaces/classroom.interface";

@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent {
  @Input()
  data!: IClassroom;

  studentNames = [
    'Hoàng Văn Nam',
    'Vũ Trưởng Thành'
  ];
  studentAges = [18,19];

  // tao 1 danh sach sinh vien
  studentArray: IStudent[] = [
    {studentName:'Hoàng Văn Nam',studentAge:18, phoneNumber:'0987654321'},
    {studentName:'Vũ Trưởng Thành',studentAge:21, phoneNumber:'0123456789'}
  ];

  teacherNames = [
    'Trịnh Quang Hòa',
    'Nguyễn Tuân',
    'Đặng Kim Thi'
  ];
  subjectNames=[
    'LBEP',
    'HCJS',
    'AJS',
    'DMS'
  ];
  changeName(){
    this.data.className = 'T2203E';
  }
  changeStatus(){
    this.data.classStatus = !this.data.classStatus;
  }
}
