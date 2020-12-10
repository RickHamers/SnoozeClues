import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

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
