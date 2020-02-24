import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
	aces = "Aces are the individuals; the beginning fire from which all else comes.";
	twos = "2 represents partnership; innate respect for others who can teach us.";
	threes = "3 represents creativity; expressive and expansive and uncontrollable.";
	fours = "4 represents foundation; the 4 strong pillars that hold up any structure.";
	fives = "5 represents adventure; pioneers who incite change and are adaptable.";
	sixs = "6 represents stability; promoters of balance, harmony and generosity.";
	sevens = "7 represents spirituality; combining all of the lessons above + lucky #7.";
	eights = "8 represents power; imaginative and demanding visionaries who lead.";
	nines = "9 represents revolution; the phoenixes of the deck who have to evolve.";
	tens = "10 represents completion; successful, having learned all of the lessons.";
	jacks = "Jacks represent playfulness; royalty of their realm minus responsibility.";
	queens = "Queens represent kindness; with intuition they rule their social sphere.";
	kings = "Kings represent mastery; wise, powerful leaders who promote wisdom.";

  constructor() { }

  ngOnInit(): void {
  }

}
