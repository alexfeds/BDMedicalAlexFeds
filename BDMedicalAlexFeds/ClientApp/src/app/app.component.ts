import { Component, OnInit } from '@angular/core';

import { AppService } from './services/app.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  numBatchInput: number = 0;

  numMessagesInput: number = 0;

  constructor(private appService: AppService) { }

  numPerBatchInput: number = 0;

  constructor() { }


  ngOnInit() {



  }

  processNumbers() {
      console.log("numBatchInput", this.numBatchInput),

        console.log("numPerBatchInput", this.numMessagesInput)

    this.appService.getMessages(this.numBatchInput, this.numMessagesInput).subscribe(data => {
      console.log("data", data)
    })

      console.log("numPerBatchInput", this.numPerBatchInput)

  }
}
