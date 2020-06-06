import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jrse-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() companyName: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
