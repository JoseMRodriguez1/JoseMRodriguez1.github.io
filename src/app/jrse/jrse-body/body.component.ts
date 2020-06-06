import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jrse-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() companyName: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
