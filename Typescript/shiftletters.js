/**
 * Shifts every letter in a string one place forward in the alphabet.
 * 'z' wraps to 'a' and 'Z' wraps to 'A'. Non-letter characters are unchanged.
 * No built-in string methods are used.
 *
 * @param str - The input string to shift
 * @returns A new string with every letter shifted by one
 */
function shiftLetters(str: string): string {
  // Manual character lookup tables — avoids charCodeAt() / fromCharCode()
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";

  for (const char of str) {
    // Check if char is a lowercase letter by finding its index in the lookup
    let index = -1;
    for (let i = 0; i < 26; i++) {
      if (lower[i] === char) { index = i; break; }
    }

    if (index !== -1) {
      // Wrap z (index 25) back to a (index 0) using modulo
      result += lower[(index + 1) % 26];
      continue;
    }

    // Check if char is an uppercase letter
    for (let i = 0; i < 26; i++) {
      if (upper[i] === char) { index = i; break; }
    }

    if (index !== -1) {
      // Wrap Z (index 25) back to A (index 0) using modulo
      result += upper[(index + 1) % 26];
      continue;
    }

    // Not a letter — keep character as-is
    result += char;
  }

  return result;
}


// ─── Examples ─────────────────────────────────────────────────────────────────

console.log(shiftLetters("abc123XYz!"));  // "bcd123YZa!"
console.log(shiftLetters("hello"));       // "ifmmp"
console.log(shiftLetters("xyz"));         // "yza"
console.log(shiftLetters("XYZ"));         // "YZA"
console.log(shiftLetters("Hello, World!")); // "Ifmmp, Xpsme!"
console.log(shiftLetters("123!@#"));      // "123!@#"