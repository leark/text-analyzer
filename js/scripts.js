// Utility Logic

function noInputtedWord(word, text) {
  return text.trim().length === 0 || word.trim().length === 0;
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }

  let wordCount = 0;
  const wordArray = text.trim().split(' ');

  wordArray.forEach(function (word) {
    // our initial solution was to use isNaN(word)
    if (!Number(word)) {
      wordCount++;
    }
  });

  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }

  const wordArray = text.trim().split(' ');
  let wordCount = 0;

  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitBadWords(text) {
  const badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
  let safeWords = [];
  const wordArray = text.split(' ');

  // go through each word in wordArray
  wordArray.forEach(function (word) {
    // assume it's not a bad word
    let isBadWord = false;
    // let isSafeWord = true;

    // go through each badWord in badWords
    badWords.forEach(function (badWord) {
      // if word matches any of the badWord
      if (word.toLowerCase().includes(badWord.toLowerCase())) {
        // we know it's a bad word if we get here
        isBadWord = true;
        // isSafeWord = false;
      }
    });

    // if isBadWord is NOT true
    if (!isBadWord) {
      // if (isSafeWord) {
      safeWords.push(word);
    }
  });
  const result = safeWords.join(' ');
  return result;
}

function boldPassge(word, text) {
  let htmlString = '<p>';
  let textArray = text.split(' ');
  textArray.forEach(function (element, index) {
    // if word matches exactly with element
    if (word === element) {
      htmlString = htmlString.concat('<b>' + element + '</b>');
      // if word matches partly with element
      // NOTE: this only grabs the first instance of the word in the element
      // happenpenpen wil have only hap"pen"penpen bolded if looking for "pen"
    } else if (element.toLowerCase().includes(word.toLowerCase())) {
      let partBolded = '';
      let start = element.indexOf(word);
      let end = start + (word.length - 1);
      // split element into individual letters
      element.split('').forEach(function (letter, index) {
        // if we reach the start of the word
        if (index === start) {
          partBolded = partBolded.concat('<b>' + letter);
          // if we reach the end of the word
        } else if (index === end) {
          partBolded = partBolded.concat(letter + '</b>');
        } else {
          partBolded = partBolded.concat(letter);
        }
      });
      htmlString = htmlString.concat(partBolded);
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index != textArray.length - 1) {
      htmlString = htmlString.concat(' ');
    }
  });
  return htmlString + '</p>';
}

// UI Logic

$(document).ready(function () {
  $('form#word-counter').submit(function (event) {
    event.preventDefault();
    const passage = $('#text-passage').val();
    const word = $('#word').val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $('#total-count').html(wordCount);
    $('#selected-count').html(occurrencesOfWord);
    $('#bolded-passage').html(boldPassge(word, passage));
  });
});
