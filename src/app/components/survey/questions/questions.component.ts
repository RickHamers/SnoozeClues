import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface HoursOfSleep {
  value: number;
  viewValue: string;
}

interface TiredLevel {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  HoursAsleep: HoursOfSleep[] = [
    {value: 1 , viewValue: '1'},
    {value: 2 , viewValue: '2'},
    {value: 3 , viewValue: '3'},
    {value: 4 , viewValue: '4'},
    {value: 5 , viewValue: '5'},
    {value: 6 , viewValue: '6'},
    {value: 7 , viewValue: '7'},
    {value: 8 , viewValue: '8'},
    {value: 9 , viewValue: '9'},
    {value: 10 , viewValue: '10'},
    {value: 11 , viewValue: '11'},
    {value: 12 , viewValue: '12'},
    {value: 13 , viewValue: '13'},
    {value: 14 , viewValue: '14'},
    {value: 15 , viewValue: '15'},
    {value: 16 , viewValue: '16'},
    {value: 17 , viewValue: '17'},
    {value: 18 , viewValue: '18'},
    {value: 19 , viewValue: '19'},
    {value: 20 , viewValue: '20'},
    {value: 21 , viewValue: '21'},
    {value: 22 , viewValue: '22'},
    {value: 23 , viewValue: '23'},
    {value: 24 , viewValue: '24'}
  ];

  Tired: TiredLevel[] = [
    {value: 1 , viewValue: 'Not tired'},
    {value: 2 , viewValue: 'A little bit tired'},
    {value: 3 , viewValue: 'Averagely tired'},
    {value: 4 , viewValue: 'Quite tired'},
    {value: 5 , viewValue: 'Very tired'}
  ];

  isLoading = false;
  questionForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.questionForm = new FormGroup({});
    this.questionForm.addControl('question1', new FormControl(null, [Validators.required]));
    this.questionForm.addControl('question2', new FormControl(null, [Validators.required]));
    this.questionForm.addControl('question3', new FormControl(null, [Validators.required]));
    this.questionForm.addControl('question4', new FormControl(null, [Validators.required]));
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.isLoading = true;
    const question1 = this.questionForm.value.question1;
    const question2 = this.questionForm.value.question2;
    const question3 = this.questionForm.value.question3;
    const question4 = this.questionForm.value.question4;
  }
}
