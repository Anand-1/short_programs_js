/**
 * Finds all positions (0-indexed) of vowels in a string
 * without using any built-in string methods.
 *
 * @param str - The input string to search
 * @returns An array of indices where vowels are found
 */
function findVowelPositions(str: string): number[] {
  const positions: number[] = [];

  // Lookup table for O(1) vowel checking — avoids .includes()/.indexOf()
  const vowels: Record<string, boolean> = {
    a: true, e: true, i: true, o: true, u: true,
    A: true, E: true, I: true, O: true, U: true,
  };

  // Use a for..of loop with index via counter — avoids .split()/.forEach()
  let index = 0;
  for (const char of str) {
    if (vowels[char]) {
      positions.push(index);
    }
    index++;
  }

  return positions;
}


// ─── Examples ─────────────────────────────────────────────────────────────────

console.log(findVowelPositions("hello"));   // [1, 4]
console.log(findVowelPositions("AEIOU"));   // [0, 1, 2, 3, 4]
console.log(findVowelPositions("rhythm"));  // []
console.log(findVowelPositions("OpenAI"));  // [0, 2, 4]