import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-university-marks',
  templateUrl: './university-marks.component.html',
  styleUrls: ['./university-marks.component.css']
})
export class UniversityMarksComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  University_Marks_data ={
    degree_code: 1,
    batch_no :null,
    dept_code :1,
    regulation_no :null,
    semester : null,
    course_code:'',
    reg_no:'',
    grade :'',
    section:''

  }


  To_DB(): void {
    console.log(this.University_Marks_data);
    this.http.post('http://172.16.71.2:9090/api/v1/JA//university_mark', this.University_Marks_data)
      .subscribe(
        (response) => {alert('Data saved successfully...');},
        (error) => {console.error('Error submitting form:', error);}
      );
      this.University_Marks_data ={
        degree_code: 1,
        batch_no :null,
        dept_code :1,
        regulation_no :null,
        semester : null,
        course_code:'',
        reg_no:'',
        grade :'',
        section:''
    
      };
  }

}
