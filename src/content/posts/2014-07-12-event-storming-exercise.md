---
layout: post
title: Event Storming Exercise
tags: [event-storming, experience-report]
published: true
---
As I'm currently in between projects at [Cegeka](http://www.cegeka.be) and just finished working on an RFP, I got to factor in a day of learning along with other developers last friday.
And boy oh boy was it worthwile.

TL;DR? Skip to the [Struggling](/2014/07/12/event-storming-exercise/#Struggling) part.

## Event Storming

Last year at Vaughn Vernon's ([@VaughnVernon](http://twitter.com/VaughnVernon)) 3-day Implementing DDD course, there was a part where Alberto Brandolini ([@ziobrando](http://twitter.com/ziobrando)) gave a workshop on what he called "Event Storming". Over the year the term has gotten some attention [here](http://ziobrando.blogspot.be/2013/11/introducing-event-storming.html#.U8GUcPmSzIU) and [there](http://verraes.net/2013/08/facilitating-event-storming/). There's even a twitter account made: [@EventStorming](https://twitter.com/eventstorming).

Most recently though, Alberto gave a [presentation](http://www.slideshare.net/ziobrando/event-storming-recipes) about it at the DDD Exchange conference in London.

Log in to [SkillsMatter](https://skillsmatter.com) to see the [presentation video](https://skillsmatter.com/skillscasts/5193-alberto-brandolini).

## Preface

The idea to get together and practice EventStorming ourselves came from [Jo Vanthournout](https://www.linkedin.com/in/jovanthournout), one of our more avid DDD practitioners. The project he's on at the moment had a mandatory holiday. And what better way to fill it up with learning than to organize an EventStorming practice session with colleagues.

The idea was to try and *storm* the tabletop game ["Friday"](http://boardgamegeek.com/boardgame/43570/friday).

In this blog post I'll list all of the stuff we noticed during our day of learning, so it might a be a bit TMI. :)

## Questions, so many of them!

We had some discussion when we got together in the morning that brought us to a couple of questions:

* Reactive Programming is not the same as an Event Driven Architecture, but they're alike. But what is the relation between these two?
* To start using Event Driven Architecture one would normally start with Domain Events, can Event Storming help facilitate with that?
* Is EventStorming used to *model* a problem? Or just to model a flow? Or is it maybe a way to *explore* a process or a problem space?
* When multiple events need to be gathered before something else can happen, what do you call that? Someone suggested a "coordinator", which seemed like a very specific name, where does that word come from? Enterprise Integration Patterns maybe? Does EIP also align with Reactive Programming?
* What should granularity of our events look like? Is it sufficient to write down "Car was started"? Or do we write "Engine started", "Fuel injected", "Spark fired", ... ?

## Alberto's Event Storming Recipes

Right after our back-and-forth, the first thing we did was watch [Alberto's presentation](https://skillsmatter.com/skillscasts/5193-alberto-brandolini) that he gave at the DDDX conference.

### Pausing and discussing is awesome!

We were lucky to be able to pause it a good couple of times. Whenever we didn't understand what he was trying to explain, or if we had some additional thoughts we paused and discussed.

I think this worked pretty great. You get the benefit of other views on Alberto's explanation and you get them instantly. Often this gave extra context to something he was talking about or just made something understandable. I can recommend this way of learning to everyone!

### Process Managers

A major point of discussion was the concept of *Process Managers*. In Alberto's words: during the session, you'll sometimes have one event transition straight into another one. In between he annotates *something magic happens here*. The magic that happens can be contained within a *Process Manager*, a *new* concept but a confusing one for sure. Does it wait until multiple events have entered before doing something, or is it simply something to contain some "magic" that leads to an event whenever another event enters it?

### Barriers

Another major pause was when he started talking about how *Barriers* can be detrimental to your domain. But it was really all right there in the slide.

*Strict validation might protect some portions of your process, but it might make a large portion "unobservable".*

What he means is that as a side-effect of your strict validation, some new processes might arise which you can't control, nor observe. The example he gave was about a very strict validation that caused a company to start an interdivisional excel sheet, that was used to maintain some data necessary for this strict validation... :o

## Our problem space: Friday

When Jo first initiated the call for Event Storming exercise on our corporate social tool, he suggested to try it out on ["Friday"](http://boardgamegeek.com/boardgame/43570/friday).
Real short, it's a "deck-building" game that consist of beating 3 progression levels and a boss-fight that you play by yourself.

We got supplies to start our event storming session: a fat stack of post-its, sharpies (at least one per person), and some scotch tape should the sticky notes not be sticky enough.

We agreed on starting our "model" from a state where the game has been set-up and is ready to be played. We then proceeded to have an explanation by Jo backed by the game rules we projected on the wall.
We then agreed on colorcoding of our post-its:

* orange = event
* blue = command
* yellow = aggregate
* green = actor/user
* pink = external system
* wide green = process manager

In the presentation we learned that we should start putting events as orange post-its on the wall. And so we did... Until someone asked "Ok, but how does that event occur? Let's add a command that initiates it.". And thus, command post-its found their way on our wall quite early on. We carried on anyway, trying our best to think about the next event that needed to happen and a command that would initiate it.

A question that arose after adding commands was of course "Who dishes out these commands? How does a conversation with the system work? Does every command need an actor or are commands by the system just implicit?".

## Back to just events

We already noted that we seemed to be biased by our daily jobs (coding). Somehow this brought to our attention that we should stick to the gameplan more strictly. So we got rid of all our commands we already put on the wall and started adding more events again and decided commands would come later, they're less important. And it's true, events sketch out the broader context that clarifies earlier events sometimes and you can more easily rearrange your timeline. Another benefit is that when you already have commands in place, you're less inclined to change up your wall because of the "work" you've already put into it and also because you're too lazy to rearrange double the amount of post-its. Kind of like [the fallacy of sunken cost](http://en.wikipedia.org/wiki/Sunk_costs).

We also noticed that our discussions were taking longer and longer. The action we took was to just keep multiple cards and replace them when we re-iterated over our process at a later stage. Some "double" notes we could take away or replace once we were a little further down the chain. So that verified our hunch.

## A little breaky break

![Breaky break](./2014-07-12-event-storming-exercise/wall-before-break.jpg)
We just finished putting up one "iteration" of the game. Our process on the wall at this stage ends with "Danger Level Raised". We took a coffee break - away from the wall - and talked about this and that.
However, when we got back in the room and tried to restart our think-engines and get back in the flow, we found it wasn't all that easy to get back into it. Did this have to do with having too specific events? Or maybe it didn't mean anything at all?

## Optional commands and gesturing

We were now at the stage where we were tackling the multiple stage concept of the game. The discussion we had was about what *parts* of our process were going to be iterated over. There was a clear need for splitting one straight timeline into two or more separate ones. I noticed we were *cutting* parts of the wall with our hand-gestures. Both round and straight. Alberto also talks about this as well in his talk. It just helps visualize what you want to do easily. It's clear enough for everyone in the room what parts you're separating.

## Using the "UI"

At some point we went back to the tabletop that had our complete game set-up to continue our thought about the process and to use proper names. 
![Annotated tabletop of Friday](./2014-07-12-event-storming-exercise/friday.jpg)
Because we did this we got some extra insight that helped us along. We compared this with how Alberto talks about making little "UI" cards that should explain what decisions a user can take based on what information he sees. This further clarifies some events and is obviously helpful in that way.
This did make us come back from our earlier strategy to only add events that were based on UI decisions, because you might miss some important ones actually.

## End times

When we had to stop for the day we think we managed to complete the short process of Friday in a visual chain of events on our wall. We all agreed that this was time well-spent, learning a lot. But nevertheless something we need to practice more if we want to do this exercise with one of our real customers at some point.

![The Result](./2014-07-12-event-storming-exercise/wall-end.jpg)

## Struggling<a name="Struggling">&nbsp;</a>

While trying to add more events, we noticed that we were struggling with the granularity of the events. Because we are all programmers, we sometimes had the impulse to add events that said something like "card turned", which might be too fine-grained to see our process clearly. When we did eventually notice those, we decided to tune it back a little and replaced some events that were already on the wall or simply got rid of them. Our general rule was "decisions that are taken based on the UI, we don't put up as events".

This struggle did lead us to a small discussion on language we used for some events. We knew we had to use verbs in the past tense, but there was one specific case that I thought was interesting. Interesting because we discovered it so early.
We had an event that read *1 hazard card to fight chosen* which got turned into *Challenge (with chosen card) started*. Can you see how different that sounds? It's basically the same step in the game, except the first notation seems too fine grained, whereas the second one seems to be more coarse-grained but also more clear and says more about the game or of a next phase in the game.
![Ubiquitous language](./2014-07-12-event-storming-exercise/ubiquitous-language.jpg)

Another thing we were struggling with was the concept of iterations of commands/events. For example, when you've gone through a deck of cards the next level starts (it becomes more difficult) and a big chain of events starts all over again. We didn't know how to make that visible on our wall, or even if we should make it visible at all.
After some discussion we decided to simply not model it, because the events should speak for themselves. You don't really need an arrow pointing from somewhere in the middle of your "timeline" back to the front to indicate starting over again.
Another indication that we're not exactly used to thinking in events or streams.

Yet another thing we found difficult to model was conditionals, which might again be an indication of our struggle with granularity and an event driven model. Should conditions also be represented as mere events maybe?

At this point we were all agreeing that we're missing someone that could provide us with some guidance with this event storming stuff.

## Take-aways

* When you recognize you've got *Event* leads to *Process manager* leads to *Command*, you basically got stuck into thinking imperatively again.
* Don't go too much into detail, try to stay high level as long as you can. Especially in the beginning of your session.
* It's ok when one event leads to another event. You'll run into this when you really want to translate one event from one bounded context into another event that makes more sense in another bounded context. A good example: "Person x has had a birthday", leads to "Person x has reached pensionable age". So really in cases where one event is *reinterpreted* and/or *filtered* it's ok to just generate a new event instead of going through a command.

## Questions unanswered

* How do you properly use the result of an Event Storming session to produce stories?
* Can you write your implementation completely based on the events you put up during the session?
* Can you write a "walking skeleton" from the global event flow and do you use this to hook your story implementations on? Or is that considered to be too much of an upfront design?
* We know of some projects that already used Domain Events and/or Event Sourcing. How did they end up with their events? Did they also model this first somehow?
* Did they ever model an event that ended up being 4 separate events? And how much of a problem was it to modify their code at that point? Or did they ever model events that ended up being irrelevant? Or vice versa, did they miss events that ended up being super important?
* For me personally there's still some unclarity on commands and how to properly position your events when your straight timeline splits up into multiple ones. Can you just put those separate flows anywhere, because the eventstorming session  only serves to make a mental picture?

## What's next?

The plan is to implement that game based on our event storming session outcome and see how far we can get. So I guess when that happens you guys will be able to read about it. :)