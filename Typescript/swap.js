/**
 * Transforms all lowercase letters to uppercase and vice versa.
 * Non-letter characters remain unchanged.
 * No built-in case transformation methods are used.
 *
 * @param str - The input string to transform
 * @returns A new string with all letter cases swapped
 */
function swapCase(str: string): string {
  // Parallel lookup tables — index position maps lowercase to uppercase and vice versa
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";

  for (const char of str) {
    let swapped = false;

    // Check if char is lowercase — if so, replace with its uppercase equivalent
    for (let i = 0; i < 26; i++) {
      if (lower[i] === char) {
        result += upper[i]; // Same index in upper[] gives the uppercase twin
        swapped = true;
        break;
      }
    }

    if (swapped) continue;

    // Check if char is uppercase — if so, replace with its lowercase equivalent
    for (let i = 0; i < 26; i++) {
      if (upper[i] === char) {
        result += lower[i]; // Same index in lower[] gives the lowercase twin
        swapped = true;
        break;
      }
    }

    // Not a letter — keep character as-is
    if (!swapped) result += char;
  }

  return result;
}


// ─── Examples ─────────────────────────────────────────────────────────────────

console.log(swapCase("HelLo WoRld 123"));  // "hELlO wOrLD 123"
console.log(swapCase("abcXYZ"));           // "ABCxyz"
console.log(swapCase("Hello, World!"));    // "hELLO, wORLD!"
console.log(swapCase("123!@#"));           // "123!@#"
console.log(swapCase("aAbBcC"));           // "AaBbCc"