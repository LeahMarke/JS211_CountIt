# JS211_CountIt

Given a sentence, paragraph or novel, count the letters in the string. Ignore whitespace and anything not [a-z][a-z], i.e. punctuations and numbers.

Given: A string - like "Hello World"

Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

1. First build this project in the terminal
2. Then attach it to the DOM
3. As always whiteboard it and make a code plan
   > Hint: convert all to lowercase first
4. Translate from English to pseudo code then to JavaScript
5. Test

6. Turn in the URL to your repo, once for each person in your group

> Use this challenge input: "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

Push yourself further
Use RegEx 2. Make a word count 3. Count each word's appearance 4. [Calculate the grade level/proficiency of English](https://www.thoughtco.com/calculating-reading-level-1857103) for the sentence, paragraph or novel

English => pseudo code:
take in a sentence from user, 'sentence will be a string',

need to loop through array and perform function on each character
need to identify each character and store it in a variable of same characters ie "d"
count how many "d"s there are for each character
