"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const cleanedSentence = lowerCaseSentence.replace(/[^a-z\s]/g, "");
        const words = cleanedSentence.split(" ");
        let count = 0;
        for (const w of words) {
            // w === lowerCaseSentence  ----------   //if you want strict matching
            if (w.includes(lowerCaseWord)) {
                count++;
            }
        }
        return count;
    };
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(result);
}
