import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-student-tenth-mark',
  templateUrl: './student-tenth-mark.component.html',
  styleUrls: ['./student-tenth-mark.component.css']
})
export class StudentTenthMarkComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  student_10th_mark_data = {
    degree_code: 2,
    batch_no: null,
    dept_code: 16,
    education_type: '',
    year_of_passing: null,
    tamil: null,
    english: null,
    maths: null,
    science: null,
    social_science: null,
    total:null,
    percentage:null,
    additional_subject:null,
    additional_subject_mark:null,
  };




  To_DB(): void {
  console.log(this.student_10th_mark_data);

  this.http.post('http://172.16.71.81:9090/api/v1/JA/10th_mark', this.student_10th_mark_data)
    .subscribe(
      (response) => {

        alert('Data saved successfully...');
        // Handle success, show a success message, or perform any other action
      },
      (error) => {
        alert("This course is alrady exist");
        // Handle error, show an error message, or perform any other action
      }
    );
    this.student_10th_mark_data = {
      degree_code: 2,
      batch_no: null,
      dept_code: 16,
      education_type: '',
      year_of_passing: null,
      tamil: null,
      english: null,
      maths: null,
      science: null,
      social_science: null,
      total: null,
      percentage:null,
      additional_subject:null,
      additional_subject_mark:null
    };
}


}
