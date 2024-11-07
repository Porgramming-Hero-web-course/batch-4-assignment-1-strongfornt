"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const cleanedSentence = lowerCaseSentence.replace(/[^a-z\s]/g, "");
        const words = cleanedSentence.split(" ");
        let count = 0;
        for (const w of words) {
            // w === lowerCaseWord ---
            // Instructor specified to use partial matching, so changed from strict equality (===) to .includes().
            // This allows words like "Successfully" to match "success."
            if (w.includes(lowerCaseWord)) {
                count++;
            }
        }
        return count;
    };
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
}
