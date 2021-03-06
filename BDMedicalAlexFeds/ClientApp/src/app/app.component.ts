import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  numBatchInput: number = 0;
  numPerBatchInput: number = 0;

  constructor() { }


  ngOnInit() {



  }

  processNumbers() {
      console.log("numBatchInput", this.numBatchInput),
      console.log("numPerBatchInput", this.numPerBatchInput)
  }
}
