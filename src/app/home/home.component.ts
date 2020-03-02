import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ NgbAlertConfig ]
})
export class HomeComponent implements OnInit {

	year: number;
	month: number;
	day: number;
	yourValue: number;
	yourSolarValue: string;
	solarValue = [
		"Joker",
		"Ace of Hearts", "Two of Hearts", "Three of Hearts", "Four of Hearts",
		"Five of Hearts", "Six of Hearts", "Seven of Hearts", "Eight of Hearts",
		"Nine of Hearts", "Ten of Hearts", "Jack of Hearts", "Queen of Hearts",
		"King of Hearts",
		"Ace of Clubs", "Two of Clubs", "Three of Clubs", "Four of Clubs",
		"Five of Clubs", "Six of Clubs", "Seven of Clubs", "Eight of Clubs",
		"Nine of Clubs", "Ten of Clubs", "Jack of Clubs", "Queen of Clubs",
		"King of Clubs",
		"Ace of Diamonds", "Two of Diamonds", "Three of Diamonds", "Four of Diamonds",
		"Five of Diamonds", "Six of Diamonds", "Seven of Diamonds", "Eight of Diamonds",
		"Nine of Diamonds", "Ten of Diamonds", "Jack of Diamonds", "Queen of Diamonds",
		"King of Diamonds",
		"Ace of Spades", "Two of Spades", "Three of Spades", "Four of Spades",
		"Five of Spades", "Six of Spades", "Seven of Spades", "Eight of Spades",
		"Nine of Spades", "Ten of Spades", "Jack of Spades", "Queen of Spades",
		"King of Spades"
	];
	isCollapsed = true;

	constructor(alertConfig: NgbAlertConfig) {
		alertConfig.type = 'danger';
		alertConfig.dismissible = false;
	}

  ngOnInit(): void {
  }

	onBirthday(value: string) {
		//do the stuff 
		this.year = Number(formatDate(value, "yyyy", "en-US"));
		this.month = Number(formatDate(value, "LL", "en-US"));
		this.day = Number(formatDate(value, "dd", "en-US"));
		this.getBirthday();
		this.isCollapsed = false;
	}

	getBirthday() {
		this.yourValue = 55-((2*this.month) + this.day);
		this.yourSolarValue = this.solarValue[this.yourValue];
	}

}
