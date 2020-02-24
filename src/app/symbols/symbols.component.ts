import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {
	title = "How the suits all work together";
	subtitle = "This is a symbology as much as it is a numerology. Hearts represent LOVE; just like everyone all over the world recognizes. Diamonds represent VALUE. Each number also represents understandable archetypes, as you will see below.";
	hearts = "Hearts are the realm of LOVE. They represent YOUTH and see the world through the eyes of EMOTION. Like children, they put their hands in many pots; they are insatiable. We learn from them through the way they love and express their passions exuberantly & vulnerably.";
	clubs = "Clubs represent the MENTAL realm. They represent the time of GROWING UP when we must use COMMUNICATION to express ourselves. They rule the world of teaching and learning, thought and intellect. We learn from them through the way they make us think.";
	diamonds = "Diamonds are the realm of ACTION. They represent ADULTHOOD - when we must fuse what we materially believe and spiritually believe into the way we live our lives. Thus we learn from them through seeing what they value & watching them do what they do, however they do it.";
	spades = "Spades are the realm of WISDOM. They represent the ELDERS who synthesize all of the preceding suits (the emotion of the hearts, the communication of the clubs, and the action of the diamonds) and teach us in all of these ways. They are the oldest souls, and are deeper and darker than everyone else. You know what they say, a spade is a spade.";

  constructor() { }

  ngOnInit(): void {
  }

}
