import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-student-twelveth-stateboard',
  templateUrl: './student-twelveth-stateboard.component.html',
  styleUrls: ['./student-twelveth-stateboard.component.css']
})
export class StudentTwelvethStateboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  student_12th_ISCE_mark_data = {
    degree_code: 2,
    batch_no: null,
    dept_code: 16,
    education_type: '',
    year_of_passing: null,
    language1: '',
    language1_mark: null,
    language2: '',
    language2_Mark: null,
    english: null,
    maths: null,
    physics: null,
    chemistry:null,
    biology:null,
    computer_science:null,
    total: null,
    percentage:null,
    cutoff:null

  };

  To_DB(): void {
    console.log(this.student_12th_ISCE_mark_data);
  
    this.http.post('http://172.16.71.81:9090/api/v1/JA/12th_icse_cbsc_mark', this.student_12th_ISCE_mark_data)
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
      this.student_12th_ISCE_mark_data = {
        degree_code: 2,
        batch_no: null,
        dept_code: 16,
        education_type: '',
        year_of_passing: null,
        language1: '',
        language1_mark: null,
        language2: '',
        language2_Mark: null,
        english: null,
        maths: null,
        physics: null,
        chemistry:null,
        biology:null,
        computer_science:null,
        total: null,
        percentage:null,
        cutoff:null
      };
  }
  }