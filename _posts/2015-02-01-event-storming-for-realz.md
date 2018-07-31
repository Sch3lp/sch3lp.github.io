---
layout: post
title: Event Storming for realz
tags: [event-storming, experience-report]
published: true
---

After last times [Event Storming exercise](/2014/07/12/event-storming-exercise) I was anxious to do it again. 
And as luck would have it, an opportunity arose soon after.

Friend and colleague Tom Toutenel asked me if I could facilitate an event storming session for one of our newly won clients. I was of course, happy to oblige.

## Context

Tom explained that his team wanted to pick the brains of our client so they would get a shared understanding of what they need to build. Preferably in a "Storymap". And if possible, define a first "Story" to start their sprint in the week after the storming session.

Another noteworthy fact: a considerable amount of effort by the client had already been put into making a thorough analysis of what needed to be done. Eventhough this effort is worthwile, this prompted me to make sure that the group wouldn't limit themselves too much by the obtained knowledge.

## Preparation is half the battle

As you might imagine, I wanted to prepare properly since I'm dealing with an actual client. So I revisited my previous blog post, more specifically all Alberto's answers. And I checked the notes I had written down the first time I tried event storming again.

### Pointers I wrote down

I've been using a mini todo-board in my "journal" with mini post-its and the tasks I made for myself were the following:

* Have Stickies, Sheets and Sharpies for every participant
* Prepare room (I had no paper roll, so I put 15 sheets of flipchart paper in "landscape mode" up on the wall using painters tape)
* Introduce yourself
* Check the groups expectations
* Give context: EventStorming = What?, Tackle specific problem
* Put up Events; past tense, start in the middle, extend space if necessary
* Is Domain Expert interested in Event x? (To solve issues with granularity)
* Put up Commands + external systems (note to self: look for hotspots)
* Event to Event is ok: "Person had a birthday --> Person reached pensionable age"
* Take note of gestures ("moving", "pointing", "cutting")
* Make UI cards with screens if helpful
* Ubiquitous Language!

## Silence before the storm

As I was preparing the room with flipchart sheets and "superstickies" that would serve as the colorcoding legends, I got a little nervous. I managed to get a little mental checklist loop going to gain some confidence:

* Are they stuck in the same discussion?
* How are we doing on time?
* Is everyone still interested?

## Introducing: the participants

In the blue corner we present to you our client, a big contender in belgians electricity market, bringing in a total of 3 persons. 

*I picked different names, to preserve their anonymity.*

* Lommy, the functional analyst.
* Leonard, the architect.
* Lionel, the project lead, aka the product owner.


And in the red corner, hailing from camp Cegeka. 

*I did not make these up, these are their actual names. A trio of Toms. A TomTrio. A Tromio?*

* Tom T., the team lead.
* Tom C., the scrum master/customer proxy.
* Tom B., the developer.


All these people are going to work together in the hours ahead, to create a shared understanding of what problem they want to solve together.

## No hiccups

After explaining who I was, and what my role was going to be in the next hour(s), I explained Event/Model Storming in short and what the rules of the game were. Everyone then proceeded to post Events on the sheets of paper. No buts, no arguments, everyone was in the same boat and understood the value of having a shared understanding. Yay, open-minded humans!

There were only a few instances in which Events were not in past tense, and those were quickly fixed once I pointed it out.

Lommy, *the functional analyst*, went back-and-forth between stickies and his laptop. This told me that he was posting events that were a little bit biased. Most of the time though, other participants had already posted similar events. Which confirmed understanding of both participants and informed me that this bias was negligible. He IS the *Domain Expert* after all.

## Ubiquitous Language

Especially after they started posting External Systems it appeared that there were some issues in the word choice. It appeared that naming External Systems and their actors went particularly well and was clear to everybody. However, once events came in to the problem domain, wording started to get a little fuzzy. Lommy, Leonard and Lionel were all using different words to describe the same events. Which caused a lot of confusion for our Tom Trio.

This is where I noticed immediate benefit of Event Storming: stuff like this usually only appears when you get to that bit of the solution.

## Hotspots

As the story started to unfold before their eyes, there was some things that were still unclear and appeared literally outside (off of the paper). I added big exclamation marks on differently colored post-its to make it clear.
And every so often, we came back to these hotspots and discussed some more about them. Further more, Lommy knew about these problems, but the rest of the team did not. Excellent learning happened right there, and you could feel the group getting excited about that fact.

One hotspot was about an "edge-case" that appeared to be more important and really couldn't be considered an edge-case anymore. Marking it as a hotspot also made that more clear.

Talking about an external system also lead to some confusion in ubiquitous language, in that there were different terms being thrown around in relation to the external system (and external actors). They came back to these terms often enough that it warranted a hotspot. I like to think that doing this kept this issue in the back of the heads of the group.

## Facilitating "aha-moments"

Aside from the hotspots building confidence in the session we were doing, there were also some other moments that elevated the group to a higher level.

I noticed they were grouping together near one particular part of the line and mentioned that I noticed this while querying *"Is this the core of the problem domain?"*. I could see them reflect on that a little bit and then unanimously went *"Yes! Cool! :D"*. 

It really felt like the more positive experiences the group had, the better they got at talking to each other and working together at building their shared understanding. It was supercool as a facilitator to see them grow like this.

## Adding Contexts

So, I don't know if this is a good thing to do, but I thought it's worth mentioning at least.

At some point, someone started noticing that in the time-line that was drawn out, there were some natural groupings that were showing. We decided to name them contexts and hang them up above their location in the timeline. It made some ideas more logical to think about, and caused some events to be shifted into their context.
They then also tried to map the contexts to the analysis that Lommy had prepared. But for Tom C., it was getting too fine-grained.
Another thing that this facilitated was more discussion on Ubiquitous Language, leading them to declare "This will help us to make the story map more clear, later".

Lastly, delineating the contexts also gave a good impression of how big those contexts were. This showed something interesting in that there was one context that contrasted a lot in terms of sheer amount, to another context. Upon announcing that observation, they explained that eventhough that other context was much smaller, it was actually more complex. And the reason why they did not have a lot of cards there, was simply because the right people (that had the knowledge of that context) weren't there.

After we did that the road to storymapping was set and we added some "Shared Language" (the pink post-its in the photo below) and things that could be "Stories" (the purple post-its in the photo below). They didn't go very far into this because this could be done after, and they felt that they already gained all the extra insight they could get from doing this additional step.

## Conclusion

After about an hour I started asking if they wanted to continue the exercise every time the discussion seemed to die down or get stuck. They naturally went back into the discussion when it was interesting enough for them to continue, and other times they jumped to a different topic.

I consider this exercise to be a successful one, eventhough we didn't get an initial story out of it. In the end I got positive feedback that it was very useful for them. The three L's were glad they did this and confirmed that we were the better choice in partner to do this project with.

It's been a month since they successfully went in production and I'm proud to have contributed, albeit in a very small way, to this feat. Well done guys!

## Results

[![Clustering around hotspot]({{site.url}}/public/assets/2015-02-01-event-storming-for-realz/clustering.jpg)]({{site.url}}/public/assets/2015-02-01-event-storming-for-realz/clustering.jpg)
[![End result]({{site.url}}/public/assets/2015-02-01-event-storming-for-realz/endresult.jpg)]({{site.url}}/public/assets/2015-02-01-event-storming-for-realz/endresult.jpg)