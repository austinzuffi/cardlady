import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

	personal = `
		<B>YOU ARE HERE FOR SO MANY REASONS.</B>
		<BR><BR>
		Each of us have myriad layers of vibration making up our aura. 
		The way we see ourselves, the way others see us, our missions on this Earth, etc. all govern our day to day reality. 
		Understanding these energies through learning our cards helps us to understand why we experience life the way we do, 
		to help us work more proactively on who we want to be.
		<BR><BR>
		Knowing the cards that you "hold" energetically is a fabulous key to help you unlock the door of your own soul... 
		They help us understand our various purposes and realign with our highest selves in times of self-doubt.
	`;
	relationship = `
		<B>YOUR SOULMATES ARE HERE TO TEACH YOU.</B>
		<BR><BR>
		The cards illuminate and clarify the multifaceted layers of familiarity that exist between us and others. 
		When we look at the people we choose to be in relationships with, 
		there are always enchanting connections between them and the people with whom we are closest... 
		Layers and layers overlap, because we constantly bring to ourselves the humans whose lessons we need to learn the very most.
		<BR><BR>
		When someone is our soulmate, their lessons / energies ripple through our lives. Let the cards give you insight into your relationship!
	`;
	family = `<B>YOUR FAMILY IS HERE TO GUIDE YOU.<BR>
		(in ways you never thought possible)</B>
		<BR><BR>Have you ever wondered why people are born around the date their parents were? Or why siblings are born so near each other? 
		Or how entire families are born within the same month/season? 
		The cards and the stars help us understand how and why these patterns are so common.
		<BR><BR>
		As humans, we evolve to be able to teach the world the lessons that our loved ones have taught us... 
		And the cards help us to see these more clearly, so that we can use them to the best of our ability.
	`;

  constructor() { }

  ngOnInit(): void {
  }

}
