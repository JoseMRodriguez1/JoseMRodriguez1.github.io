import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'jrse-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: string;

  constructor(private datePipe: DatePipe) {
    this.currentYear = this.datePipe.transform(new Date(), 'yyyy');
  }

  ngOnInit() {
  }

}
