---
title: Given When Then in Unit Tests
tags: [experience-report, TDD]
published: false
---

Or rather, why I dislike the use of GivenWhenThen notation in Unit Test method names.

## Example

```java

```
// TODO: include gist instead?

* GWT does not always improve readability for Unit Tests because it can get lengthy. "thaMethod_GivenANullParam_WhenThaMethodGetsExecuted_ThenThrowsAnException"
* The fact that you're executing the method is a recurring action you don't want in your testMethod name, it makes it awkward to read.
* You'll usually have a harder time figuring out how to rewrite your test methods into GWT format, then it is to write "thaMethod_paramIsNull_ThrowsException"
* Do use it in scenario tests "givenAnEmployeeWithAHighSalary_WhenHandingOutBonuses_ThenHeShouldNotGetOne", because actual set-up might be really big, yet the intent remains clear.
* In UnitTests, intent and set-up are usually one and the same.
* UnitTesting services might be edge-cases (because services usually describe higher level functionality, where GWT style makes more sense).

## Conclusion

I think *Given When Then* is excellent when you want to describe scenario's, and I'd most certainly recommend this for *scenario tests*, or like other people call them, *integration tests*.

But for the sake of simplicity and readability, I'm not going to use *Given When Then* in my day to day Unit Tests. Because I want them to be more concise, and to follow a shorter pattern.

[This is a link](/2014-07-12-event-storming-exercise)
![An alt for an image](./2015-02-01-event-storming-for-realz/clustering.jpg)
