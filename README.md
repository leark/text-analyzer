# Text Analyzer

#### By Jared Casper, Seung Lee

#### Simple webapge that analyzes text input from a user

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## [GitHub Pages Link](link here)

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## Known Bugs

* No known bugs

## License

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee

## TDD

Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

Describe: omitBadWords()

Test: "It should return an empty string when single word is passed in."
Code:
const text = "";
omitBadWords(text);
Expected Output: "";

Test: "It should return a string without a zoinks when single word is passed in."
Code:
const text = "zoinks";
omitBadWords(text);
Expected Output: "";

Test: "It should return a string without a zoinks, muppeteer, biffaroni, and loopdaloop when single word is passed in."
Code:
const text = "zoinks" (or any of the other bad word);
omitBadWords(text);
Expected Output: "";

Test: "It should return a string without a zoinks, muppeteer, biffaroni, and loopdaloop when a sentence is passed in."
Code:
const text = "zoinks got your nose biffaroni";
omitBadWords(text);
Expected Output: "got your nose";

Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"

Test: "It should bold part of the word that matches"
Code:
const word = "pen";
const text = "happen";
boldPassage(word, text);
Expected Output: "<p>hap<b>pen</b></p>"
