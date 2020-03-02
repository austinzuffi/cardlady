import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	year = '';
	month = '';
	day = '';

	constructor() { }

  ngOnInit(): void {
  }

	onBirthday(value: string) {
		//do the stuff 
		this.year = formatDate(value, "yyyy", "en-US");
		this.month = formatDate(value, "LL", "en-US");
		this.day = formatDate(value, "dd", "en-US");
	}

}
