import { Injectable } from '@angular/core';
import {Questionaire} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private questionaire: Questionaire;
  private result: any;
  constructor() { }

  public setData(result: any, questionare: Questionaire) {
    this.result = result;
    this.questionaire = questionare;
  }

  public getQuestionaire(): Questionaire {
    return this.questionaire;
  }

  public getResult(): any {
    return this.result;
  }
}
