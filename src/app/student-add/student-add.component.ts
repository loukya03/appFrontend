import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {

  }

  createStudent() {
    console.log(this.student);
    this.studentService.addStudent(this.student).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.goToStudentList();
        },
        error: (error) => console.log(error)
      }
    )
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmit() {
    console.log(this.student);
    this.createStudent();
  }

  list = [
    {
      id: 1,
      department: 'Computer Science'
    },
    {
      id: 2,
      department: 'Electirical Engineering'
    },
    {
      id: 3,
      department: 'Mechanical Engineering'
    },
    {
      id: 4,
      department: 'Chemical Engineering'
    },
    {
      id: 5,
      department: 'Biological Engineering'
    }
  ]
}
