function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  
  let wordCount = 0;
  const wordArray = text.split(" ");

  wordArray.forEach(function(word) {
    // our initial solution was to use isNaN(word)
    if (!Number(word)) {
      wordCount++;
    }
  });

  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }

  const wordArray = text.split(" ");
  let wordCount = 0;

  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    } 
  });
  return wordCount;
}

function omitBadWords(text) {
  const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let safeWords = [];
  const wordArray = text.split(" ");

  // go through each word in wordArray
  wordArray.forEach(function(word) {
    // assume it's not a bad word
    let isBadWord = false;
    // let isSafeWord = true;
    
    // go through each badWord in badWords
    badWords.forEach(function(badWord) {
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
  })
  const result = safeWords.join(" ");
  return result;
}

