import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {delay} from 'rxjs/operators';
import {PredictionService} from '../../../services/prediction.service';
import {StorageService} from '../../../services/storage.service';

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

  HoursAsleep: HoursOfSleep[] = [];

  Tired: TiredLevel[] = [
    {value: 1 , viewValue: 'Not tired'},
    {value: 2 , viewValue: 'A little bit tired'},
    {value: 3 , viewValue: 'Averagely tired'},
    {value: 4 , viewValue: 'Quite tired'},
    {value: 5 , viewValue: 'Very tired'}
  ];

  isLoading = false;
  questionForm: FormGroup;

  constructor(private router: Router, private predictionService: PredictionService, private storageService: StorageService) {
    for (let i = 1; i <= 24; i++) {
      this.HoursAsleep.push({ value: i, viewValue: `${i}`});
    }
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
    // this.isLoading = true;
    // delay(2500);
    const question1 = this.questionForm.value.question1;
    const question2 = this.questionForm.value.question2;
    const question3 = this.questionForm.value.question3;
    const question4 = this.questionForm.value.question4;

    this.predictionService.getPrediction(question1, question2, question3, question4)
      .subscribe((data) => {
        console.log(data);
        this.storageService.setData(data, {
          hours: question1,
          tired: question2,
          phoneUsed: question3,
          phoneReach: question4
        });
        this.router.navigate(['/result']);
      });
  }
}
