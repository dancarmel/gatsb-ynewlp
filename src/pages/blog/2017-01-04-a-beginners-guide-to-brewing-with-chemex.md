---
templateKey: blog-post
title: Clean up your code by removing ‘if-else’ statements
date: 2020-01-25T15:04:10.000Z
description: >-
  When we write JS code, we often encounter the situation of complex logic
  judgment. Generally, you can use if/else or switch to implement multiple
  conditional judgment, but there will be a problem: With the increase of logic
  complexity, if/else and switch in the code will become more and more bloated.
  This article will take you to try to write more elegant judgment logic.
featuredpost: false
featuredimage: /img/jumbotron.jpg
tags:
  - Tech
  - Java
  - Html
---
## There are many advantages to using Map instead of Object, which we will talk about later.

* What’s the difference between a Map object and a normal object?
* An object usually has its own prototype, so an object always has a “prototype” key
* An object’s key can only be a string or Symbols, but a Map’s key can be any value
* You can easily get the number of key-value pairs in a Map by using the size attribute, whereas the number of key-value pairs in an object can only be confirmed manually

Now let’s upgrade the difficulty of the problem. When clicking the button, you need to judge not only the status but also the user’s identity:
