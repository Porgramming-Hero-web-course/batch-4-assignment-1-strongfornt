{
  //function countWordOccurrences that takes a sentence (string) and a word (string). It will return the number of times the word appears in the sentence, case-insensitively.

  type countWordOccurrences = (sentence: string, word: string) => number;

  const countWordOccurrences: countWordOccurrences = (sentence, word) => {
    const lowerCaseSentence: string = sentence.toLowerCase();
    const lowerCaseWord: string = word.toLowerCase();

    const cleanedSentence:string = lowerCaseSentence.replace(/[^a-z\s]/g, "");

    const words: string[] = cleanedSentence.split(" ");

    let count: number = 0;
    for (const w of words) {
        // w === lowerCaseSentence  ----------   //if you want strict matching
      if (w.includes(lowerCaseWord)) {
        count++;
      }
    }

    return count;
  };

  const result = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );
  console.log(result);
  

  

}
