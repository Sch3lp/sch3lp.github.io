---
layout: post
title: The Lead Developer Conference 2017
tags: [experience-report]
published: true
---

Last year I blogged as well, and this year, I'm doing more of the same! Hooray!

## Thanks are in order
Thanks for the laughs and many inside jokes to my travel companions and colleagues [Frans Guelinckx](), [Steven Op de beeck](). [Imanuel Rennen](), [Tom Briers]() and [Nathan Vandecauter]().

Thanks also go out to our employer, [Cegeka](http://www.cegeka.com), who paid for travel, accomodation and the entrance fee for —let's be honest— a lot of people.

Thanks to the organizers, [White October Events](http://www.whiteoctoberevents.co.uk), who once again did an _amazing_ job at making everyone feel right at home and safe.

And thanks to [Meri Williams](https://twitter.com/@Geek_Manager), with her witty announcements, for being the perfect host and an inspiring example to us all.

## Scribblings of a madman
Once again I took some [notes](http://github.com/sch3lp/LeadDevNotes), where I based this blogpost on.

- Day 1
    - [Patrick Kua - The constant life of a tech lead](/2017/06/09/the-lead-developer-conference/#Patrick_Kua)
    - [Dominika Rogala - Things you wish you shared with your team before they agreed on that deadline](/2017/06/09/the-lead-developer-conference/#Dominika_Rogala)
    - [Adrian Howard - How to talk to earthlings](/2017/06/09/the-lead-developer-conference/#Adrian_Howard)
    - [Katherine Wu - Ask vs. Guess Cultures](/2017/06/09/the-lead-developer-conference/#Katherine_Wu)
    - [Maria Gutierrez - Time to focus on your goals](/2017/06/09/the-lead-developer-conference/#Maria_Gutierrez)
    - [Rob Allen - 5 Features of a good API](/2017/06/09/the-lead-developer-conference/#Rob_Allen)
    - [Anjuan Simmons - Leadership lessons from the agile manifesto](/2017/06/09/the-lead-developer-conference/#Anjuan_Simmons)
    - [Cate Huston - YOLO Releases considered harmful](/2017/06/09/the-lead-developer-conference/#Cate_Huston)
    - [Sander Hoogendoorn - Forty months of microservices. Stairway to heaven or highway to hell?](/2017/06/09/the-lead-developer-conference/#Sander_Hoogendoorn)
    - [Erika Carlson - Better Fearless Feedback for Software Teams](/2017/06/09/the-lead-developer-conference/#Erika_Carlson)
    - [Nickolas Means - The original Skunk Works](/2017/06/09/the-lead-developer-conference/#Nickolas_Means)
- Day 2
    - [Birgitta Böckeler - We're Agile, we don't do doumentation](/2017/06/09/the-lead-developer-conference/#Birgitta_Boeckeler)
    - [Carly Robinson - Mentoring Junior Engineers at Slack HQ](/2017/06/09/the-lead-developer-conference/#Carly_Robinson)

## Day 1 - Tech Leads, Feedback, and what not
### Patrick Kua - The constant life of a tech lead <a name="#Patrick_Kua">&nbsp;</a>
Last year I learned that [Patrick](https://twitter.com/patkua) is great at doing keynotes, so seeing him again as first speaker on day 1 was no surprise. Especially since it was on the schedule ;)

Pat focused his talk around three main parts of a Lead Developer: Tech, People and System.

#### Tech
He showed this nice graph of how multiple languages arose over time (starting with cobol, ending with Go). Restating that technology will always change and so, learning new technology (e.g. languages) is a certainty in our line of business.

However, when learning new technology, it should be ones focus to distill the principles that a new technology holds, not just the superficial parts like syntax.
Because it's the principles that are transferrable to another technology.

For example, even though pure functional languages are really different from Object Oriented ones, you can still benefit from proper modularization. Same goes for the principle of code smells.

As an even better example, he mentioned the relevance of this paper on _information hiding_:
[On the criteria to be used in decomposing systems into ~modules~ services](https://www.cs.umd.edu/class/spring2003/cmsc838p/Design/criteria.pdf)

In short (read: butchered), it's about how you slice a system, will dictate whether or not you get the benefits of the flexibility.

Even though it's been around for a really long time, it's still relevant today. Because it's supported by a principle.

So next time you're learning something new you should be asking yourself _What can I learn which I can use in a different context, in a different tool?_

This tooooootally hit home for me. As it did in some other talks as well. This is the idea of _Forwards and Backwards Reaching Transfer_. Something that I did a presentation on nearly 5 years ago. I think it's time I pick up this idea again and really do something with it.

#### People
_Don't be a maker, be a multiplier._

Accept your role as Lead Dev and don't just focus on making stuff anymore. Pay forward your knowledge and mentor people, in order to _multiply_ your ideas, etc.

Read about how people really differ: [Strengthsfinder (2.0)](https://www.amazon.com/StrengthsFinder-2-0-Tom-Rath/dp/159562015X).

[Hofstede's cultural dimensions.](https://en.wikipedia.org/wiki/Hofstede%27s_cultural_dimensions_theory)

Simon Wardly's maps. Pioneers, Settlers, Town Planners

He briefly touched on diversity as well. In that diversity in and of itself is not necessarily beneficial. It's strength only works when you allow it. 

I think what he meant by that is that creating a diverse team of itself isn't enough. Your job is to enable and maintain a safe environment for the diversity to foster. So that diverse ideas pop up automatically. This is no easy task, there is a danger of stereotypes popping up, instead of thinking of archetypes.

#### System
I was glad to hear this being said out loud: _There will never be enough time_ (to learn all the stuffs).

There is SO much information to consume, and knowing what's worth it, is going to be half the battle.

To help us in our fight he shared with us the _Eisenhower matrix_ for more efficient time management. And proposed setting a time-boxed and scheduled moment for consuming social media.

He then talked a bit about Double loop learning, but that didn't sink in as good as it should I don't think. It seems too simple.

Instead of some Action having a Result, where that Result feeds back into your next Action (Single loop), which is a very reactive way of learning about things. You should Act from a Mental Model, which Action causes a Result that then feeds back into your Mental Model again and your next Action.

It sounded like _Think before you Act_, and also his topic about reusing principles when you think about it. These principles **are** the Mental Model from which you try to Act.

Something important he added though, is that you can also improve Mental Models via coaching (being coached). It's paramount for Lead Devs to get your mentees to that _Aha_ moment, so they can improve their Mental Model.


### Dominika Rogala - Things you wish you shared with your team before they agreed on that deadline <a name="#Dominika_Rogala">&nbsp;</a>
Deadlines are known to get missed. But is there a way to prevent this from happening?

[Dominika](https://twitter.com/rogaladominika) asked us these questions, and I'd like for you to give answers to these as well.

How many days are there in a year? ... How many in a week?

If you answered 365 and 7, you'd be wrong. 

There's about 250 workdays in a year, and that's without counting holidays.

Same for days in a week, there are only 5. Now think about how much of one day you can actually get work done. That means focused, non-interrupted work. So absolutely no context-switches, no mails, meetings, ...

This was eye opening to me, especially because it seems so trivial. She also gave a very clear example of the _I'll do it in the meantime_ myth. Something I intend to pay attention to next time I find myself responding with that very sentence.

There was also this fine example of how assuming that ordering electronics parts in China during februari _is going to be fine_. When there's something like _Chinese New Year_ and all shops are closed for 2 weeks. Specifically she called this the unpredictability trap. I think in general you can classify it under assumption. It'll be easier to think about whether or not your assuming something.

Then she talked about this thing called _common priority_. For example, for Christmas dinner, everyone is always _on time_ because there's this common intent of being together. But when there is none defined, the _default priority_ kicks in. This is an individual one though, which leads to more assumption and miscommunications.

For example, if you don't communicate that you'd rather get the guaranteed delivery on a shipment, than the cheaper delivery, your team might think they're doing you a favor in cutting costs. Where you might miss a deadline because delivery got delayed.

So next time you need to estimate something, make sure that the ones estimating know:

* what time they have
* what traps they can fall into
* and what the common priorities are

Make sure **they** know, what **you** know.

### Adrian Howard - How to talk to earthlings <a name="#Adrian_Howard">&nbsp;</a>
[Adrian](https://twitter.com/adrianh)'s talk was really nicely structured, because I noted down SO much fairly easily.
He talked about having more effective conversations with your team(s), but I think in a very meta sort of way, it was also about having more effective conversations with your audience. :)

Adrian kicked things off with this quote by Mary Parker Follett - _Management is the art of getting things done through people_, as he added _The managers job is to build the organization, not the product_.

In order to do that, you'll need to understand your teams problems, understand their goals.

And here he was, using **[principles](/2017/06/09/the-lead-developer-conference/#Patrick_Kua)** he learned from UX research, and applied them to talking with people.

#### Biggest mistakes you can make to foul up effective conversations

##### 1. Not listening
Fix it by shutting up (stop talking), and staying quiet.

Gaps in a conversation seem longer than you think, and people will naturally fill these gaps.

When someone stops talking, just wait four or five seconds. You might be surprised how soon people talk again and what you can discover.

##### 2. Not hearing what was actually said
For example if someone mentioned that _We're having problems with QA and TDD_, you could ask: _Can you tell me more about the TDD problems with the QA group?_. Instead of either ignoring, or starting to talk about something else entirely.

This shows that you're actually listening and will allow you to dive deeper into the problem they described (using their words).

It also allows to redirect when veering off-topic.

_Every clarification breeds new questions_

##### 3. Asking about the future
Bad: _What would you do if this thing happened?_.

Because the answer you hear is likely to not be good, because people are generally bad at imagining.

Good: Ask for stories

_Can you tell me about a really bad day for you?_

_What happens on your worst day?_

_What was the best/worst day last week_

##### 4. Leading questions
Ask open questions instead.

Don't: _You think QA needs more training in TDD?_

Do: _Can you tell me more about the problems in QA?_

##### 5. Being disrespectful
Being disrespectful can mean a bunch of things, aside from stating the obvious, there's one that Adrian highlighted because it's not so obvious.

In _one on one_'s, people will know when you are **bored**. Bored of hearing the same problem 4 times in a row. This will show in your tone of voice, and your body language.

So don't be scary. _Don't be an arse_. Pay extra attention to good manners, e.g. in introducing yourself properly if it's the first time you see this person in a _one on one_.

Pay attention to your own body language. Or rather, _remember_ your body language. The nuance is that _remembering_ emphasizes recognizing the trigger, whereas _paying attention to_ implies _something you just need to do_.

##### 6. Trusting your memory
In that, trusting your memory is usually not ideal.

Write up your notes during the conversation/meeting.

Write down the things you want to bring up later. Use it as a driver.

Write it down in a way that you'll be able to understand at a later point in time. This is something I think I'm already doing. I write stuff as if someone else is going to have to make sense of it afterwards. And that might include the _daft me_ in the future. :)

Another great tip he gave was to try and separate insights and observations: Insights are conclusions you've drawn from what people have said, whereas Observations are merely things based on assumption. So really, assumptions you might want to validate in later conversations.

#### Summed up
**Stalk** before you **talk** before you **sell** before you **build**

Be _Alfred_, help your heroes be better.

![](alfred_helps_batman.jpg)

#### Books
[Practical Empathy - Indi Young](https://www.amazon.co.uk/Practical-Empathy-Collaboration-Creativity-Your/dp/1933820489/)([eBook](http://rosenfeldmedia.com/books/practical-empathy/))

[Interviewing Users - Steve Portigal](https://www.amazon.co.uk/Interviewing-Users-Uncover-Compelling-Insights-ebook/dp/B00CEKR872/)

### Katherine Wu - Ask vs. Guess Cultures <a name="#Katherine_Wu">&nbsp;</a>
[Katherine Wu](https://twitter.com/kwugirl) taught me something new. Another thing-a-ma-jig to put in my _Perceptions Toolbelt_.

#### Ask Culture
People that are more ask culture minded will generally ask you for the thing they want or expect.
They'll be _direct_.

    Will you come to my birthday party in two weeks?
    No, I can't. I already made plans to hang out with some other friends.

_Ask Culture_ can be good, because it prioritizes efficiency, there's no ambiguity and it'll get you what you want in the short term. 

However, it's more open to conflict and can make people feel uncomfortable.

#### Guess culture
Guess culture could also be described as _offer culture_, because you will feel it out, be vaguely suggestive about the thing you want, and then hope others will pick up on this and offer the thing you want.

    I haven't got many confirmed RSVP's yet to my birthday party that's coming up in two weeks. I could use some real friends there to help celebrate. :)

_Guess Culture_ prioritizes **not** hurting feelings, you'll come across as being more polite and it's style is generally more expressive.

However, it's highly dependent on a a tight net of shared expectations, can be hard if you're bad at reading social cues and it can make you feel like no one is listening to what you're saying.

Understanding the difference is useful to know how to get your message across to _someone from the other side_. Different styles can be more appropriate for different situations.

#### Strategies in dealing with opposite cultures
##### Ask culture person dealing with guess culture person
Make a close friend out of someone you know that is Guess Culture, it'll help you acquire a different perspective and become more empathetic when communicating with other Guess Culture people.

Listen more closely to what Guess Culture people are saying, and maybe more importantly, it's also about what people are **not** saying.

Just apologize when you realize you made an ambiguous interpretation.

Ask _What questions do you have for me?_ instead of _Do you have any questions?_ in an effort to be less aggressive.

##### Guess culture person dealing with ask culture person
Remember that people might be unaware of _the rules_ [of guess culture].

Resist the urge to _soften_ a _No_ in an effor to be more direct.

#### Takeaways
Katherine brought an interesting and new perspective of (mis)communication between people. And I was happy to learn that it's a spectrum rather than a polarity. Where do you find yourself? Me, I'm more of an _Ask Culture_ type of communicator.

### Maria Gutierrez - Time to focus on your goals <a name="#Maria_Gutierrez">&nbsp;</a>


### Rob Allen - 5 Features of a good API <a name="#Rob_Allen">&nbsp;</a>


### Anjuan Simmons - Leadership lessons from the agile manifesto <a name="#Anjuan_Simmons">&nbsp;</a>

[Anjuan](https://twitter.com/anjuan) starts with recounting the greatest influence on his way of being a leader: [The Hero with a Thousand Faces](https://en.wikipedia.org/wiki/The_Hero_with_a_Thousand_Faces), by Joseph Campbell. This book is about the path of the hero through life. Based on the book, Christopher Vogler defines a model for the hero's path. Anjuan summarizes it as follows:

1. The Call to Adventure
2. Extreme trials
3. Transformation
4. Road back

**The call to adventure** is often met with refusal because of fear or responsibility in the ordinary life. Eventually the adventurer meets a mentor. She gives the hero both wisdom and gifts to help the hero on her journey. The hero is emboldened to overcome **extreme trials** and level up to approach the final ordeal. Overcoming this ordeal **transforms** the hero. this is often portrayed by the hero receiving a reward. Next, **the hero returns home**, atoning for the conflicts that were left behind in the ordinary world. Finally she uses her experience and the reward to improve the ordinary world.

Anjuan compares this with his decision to become a software developer and the trials he had to face and the experience he had to gain. He received certain gifts like structured, logic thinking that he uses to be a better leader.

The part that drew him most to Campbell's model is the hero–mentor part. He realised the mentor has completed the hero's story and is now helping someone else do it. In a way, the mentor is passing the baton —her skill and experience— to the hero.

Anjuan has found that the thing that comes closest to a baton in his life is **influence**. If he can improve this skill, he feels he will become a better leader.

#### The law of influence

Anjuan refers to the book titled [The 21 irrefutable laws of leadership](https://en.wikipedia.org/wiki/The_21_Irrefutable_Laws_of_Leadership), by John C. Maxwell. The key point in this book is the law of influence:
    
> The true measure of leadership is influence. Nothing more. Nothing less.

You can be a leader that wields his title, or a leader that gets buy-in of the team by using influence.
    
James MacGregor Burns describes it in his book [Leadership](https://en.wikipedia.org/wiki/James_MacGregor_Burns#Theory_of_leadership) as _transactional_ (carrot and stick) vs. _transformational_ (charisma to influence) leadership.

How does one apply influence in his role as a leader? Anjuan takes inspiration in the values of the Agile manifesto:

- _Individuals and interactions over processes and tools._ People build software, processes and tools don't. How do you get and keep a team motivated? Anjuan has found that "Preserve dignity at all costs" builds team influence. You don't have to all agree, but you have to respect everyone in your team.

- _Working software over comprehensive documentation._ "Working always ships faster than perfect" means that you have to start with something, and improve it along the way. Focussing on getting things working, instead of on perfection, gains "build influence". People will start to see you as someone that gets things done. This applies to anything in your role as a leader.
    
- _Customer collaboration over contract negotiation._ Customers trust colleagues, not contracts, so treat your customers as colleagues. Nobody reads contracts, don't expect people to read them. Communicate with people directly. But not all your customers are your friends. Cut toxic customers.

- _Responding to change, instead of following a plan._ We can't predict the future, so don't make plans too far ahead. "Don't fear surprises, fear inflexibility." Iterate and improve. By doing this he improved his scheduling influence, because he started to be known as someone that delivers sooner rather than later.

#### Conclusion
By optimizing your influence with people, your build, schedule and customers, you will maximize your effectiveness. When in doubt, look to the agile manifesto for guidance.


### Cate Huston - YOLO Releases considered harmful <a name="#Cate_Huston">&nbsp;</a>


### Sander Hoogendoorn - Forty months of microservices. Stairway to heaven or highway to hell <a name="#Sander_Hoogendoorn">&nbsp;</a>


### Erika Carlson - Better Fearless Feedback for Software Teams <a name="#Erika_Carlson">&nbsp;</a>
[Erika Carlson](https://twitter.com/eacarlson) came on to talk about feedback, like Dan North did last year.

#### Types of feedback
First she talked about the different types of feedback: _affirmative_ and _constructive_ feedback, which is either saying positive things, or saying or showing things on how one can improve.

But then there's also _passive feedback_ where one devalues or condones behaviour through **inaction**. To me this is less explicit though, and might align more with Guess Culture people.

She took some time to tell us her opinion on the _Feedback Sandwich_, which took quite some courage after [Dan North's talk last year](/2016/06/29/the-lead-developer-conference-day-1/#Dan_North) on this exact topic. :) So, mad respect to her. 

She thinks the Feedback Sandwich takes away too much of the actual feedback you want to give the other person. And I can see that. Some people will just cling on to the positive parts of the feedback your giving them and thereby not actually hearing the constructive feedback you tried giving them. Maybe this is another Ask vs. Guess Culture thing.

I imagine the Feedback Sandwich working better for people that are more Guess Culture.

#### Getting over fear of feedback
Giving and receiving feedback requires openness, maturity, self-awareness, courage and vulnerability. Think about whether these requirements are there in your current team/company.

If these are there, and you're still experiencing fear when you're giving or receiving feedback, ask yourself the following questions.

* What am I afraid of?
* What's the underlying fear?
* What steps could I take to overcome this fear?
* What could I gain by moving beyond this fear?

With the other questions leading up to the last powerful question. What **can** you gain?

She also gave an excellent tip on receiving constructive feedback, where she told us to act as if the feedback is coming from someone you adore or idolize. We're generally easier on taking advice from someone we look up to. But why would feedback from someone else be less helpful?

### Nickolas Means - The original Skunk Works <a name="#Nickolas_Means">&nbsp;</a>

So, I started writing stuff down and then promptly stopped when it sank in I was watching [Nickolas Means](https://twitter.com/nmeans).

Just watch his presentation when it's online.

## Day 2 - Failing, Diversity, and what not
### Birgitta Böckeler - We're Agile, we don't do doumentation <a name="#Birgitta_Boeckeler">&nbsp;</a>
This was a damn good talk by [Birgitta](https://twitter.com/birgitta410), shining some light on the often misunderstood _documentation_.

Before enlightening us with reasons of why documentation is good, she also told us that documentation for the sake of process is just bad. This is also the stereotypical idea people have when they think about documentation.

So how can documentation be valuable though?

#### 1. Create common understanding
When you're working in a team, or really just collaborating with other people, put up each individuals' understandings on a whiteboard. You can do that however you like, for example all together, or kick-off in groups and diverge, then converge and redraw every groups findings in one place.

Make a _wall_ of common understanding.

At the Ventouris team where I work, we have this wall that we show whenever prospects are shown around the office. I've found that these visits are a means of keeping this common understanding wall up to date.

#### 2. Surface and understand complexity
Make _infographics_, which might have evolved from whiteboard sessions.

These should explain complex things that you don't touch frequently, but need to explain in detail every time you do touch it.

Creating these infographics helps you check if it's accidental complexity or actual.

Make _Widget Kits_. Kits that are helpful in rebuilding **tangible** diagrams. Picture an envelope with cue cards containing keywords, domain concepts, ... That you open up and re-order or remake the puzzle every time you need it explained. Excellent for kinesthetic learners.

#### 3. Create empathy
Empathy between technical decision makers and developers.

Developing software without documentation guidance can be anxiety inducing. Usually this translates to having to ask yourself the question _Why do I need to adhere to this framework in our code?_. Is it because of something that's _historically grown_ this way? What are some of the constraints that the developers or architects of 10 years ago were dealing with, when they were making decisions for the project you're working on right now?

There should also be empathy between product people and developers. And once again, documentation can help. This is why we share our C4 diagrams in our offers to RFP's.

#### 4. Documenting reasons why
Describe the problem, not just the solution. Add context, so people can understand better what you were dealing with at the time.

Read this 2011 article by [Michael Nygard on Documenting Architecture Decisions](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).

Nat Pryce created [tooling](https://github.com/npryce/adr-tools) for this concept as well, which is worth checking out.

To help incentivize my team to write adr-like documentation we introduced a _Captain's Log_ markdown file in the root of the project.

Think _Stardate ... - the Klingons are being angry again._ or _Yarrrr, today we looted rum..._.

I think it's because of this _fun factor_ that my team is more inclined to write down the decision they made.

#### 5. Creative problem solving
Documentation doesn't exist all of a sudden. It's iterative, brainstorming work. So temporary drawings are fine.

Do not worry about these staying up to date. Accept that they will become obsolete at some point. But try to make explicit that these are temporary. It's important to not mix these up with actual documentation.

Book recommendation: [The back of the napkin by Dan Roam](http://www.danroam.com/the-back-of-the-napkin/).

#### A note on Guidance
* Guide your team in writing documentation as little as possible. Don't take away their _voice_.
* Make it visible. You know, like the _Wall of Understanding_
* Include documentation in rituals. e.g. Grooming the diagrams in a codereview
* Create ownership through collaboration.

We try to do this last one by organizing _Architecture sessions_, where we review parts of our design, or higher level architecture by collaborating on diagrams in order to increase our shared understanding of the project we're working on.

### Carly Robinson - Mentoring Junior Engineers at Slack HQ <a name="#Carly_Robinson">&nbsp;</a>
Up until a year and a half ago, [Carly Robinson](https://twitter.com/carlyhasredhair) was a musical theatre actress, until she decided she wanted to make a huge career switch and become a software engineer. In this talk she tells her story of how and why she was able to achieve this goal at Slack HQ.

#### Impostor syndrome
Coming from a family of artists, she had no idea she would one day discover a love for software engineering and a drive to learn the craft. Starting off with with several coding boot camps like codecademy and hackbright (a women-only software engineering school in San Francisco), she felt the impostor syndrome creeping in before she even got started. We, as a tech industry, need a culture of empathy and inclusion in order to make sure no talent is wasted because of this.

#### What Slack does right
* Mentorship is a relationship. Make sure it is a good fit from the beginning.
* Ask questions and listen. Discuss communication style, set clear goals and expectations, be specific.
* Encourage self reflection. Define the mentee's strengths and weaknesses and come up with a plan to address these.
* Discuss communication style between mentor and mentee (e.g.: no sugarcoating)
* Talk about learning style and teaching style (e.g.: throw-into-the-fire or a more guided approach)
* Set clear expectations and accountability. What is success? What is the goal in 3/6/12 months? Be specific and give regular feedback. Track progress and celebrate success. Do this for the mentee and the mentor as well.
* Hold code reviews rooted in empathy and respect. Try to understand *why* someone has done something differently and explain how you would have approached the issue. Spark a conversation about the subject and listen.
* Foster intellectual humility. E.g.: as a mentor, refrain from your initial _idiot_-reaction..
* Show belief in the growth and potentional of junior engineers by assigning them _stretch_ projects after a month or six, or whenever they are ready. These are projects with high visibility and a fair chance of failure.
* Positive culture of learning.

