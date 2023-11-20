import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) {} 

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}` + 'getAllStudent');
  }

  addStudent(student: Student): Observable<any>{
    return this.httpClient.post(`${this.baseURL}` + 'addStudent', student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}` + 'getById/'+ `${id}`);
  }
}