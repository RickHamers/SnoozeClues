import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {Questionaire} from '../../models/question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  questionaire: Questionaire;
  result: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.questionaire = this.storageService.getQuestionaire();
    this.result = this.storageService.getResult();
  }

}
