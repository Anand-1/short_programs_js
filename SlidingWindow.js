class SlidingWindowRateLimiter {
  /**
   * @param {number} limit - Maximum allowed requests within the time window.
   * @param {number} windowMs - Time window size in milliseconds.
   */
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.clientTimestamps = new Map(); // Tracks client ID -> Array of request timestamps
  }

  /**
   * Evaluates if a request should be allowed or blocked.
   * @param {string} clientId - Unique identifier (e.g., IP address or User ID).
   * @returns {boolean} - true if allowed, false if rate-limited.
   */
  isAllowed(clientId) {
    const now = Date.now();
    console.log(now)
    const windowStart = now - this.windowMs;
    console.log(windowStart)
    // Initialize tracking array if it's a new client
    if (!this.clientTimestamps.has(clientId)) {
      this.clientTimestamps.set(clientId, []);
    }

    const timestamps = this.clientTimestamps.get(clientId);

    // 1. Filter out logs/timestamps older than the current window frame
    const validTimestamps = timestamps.filter(time => time > windowStart);

    // 2. Check if the user is still below the allowed maximum limit
    if (validTimestamps.length < this.limit) {
      validTimestamps.push(now); // Register the current request timestamp
      this.clientTimestamps.set(clientId, validTimestamps);
      return true; // Access granted
    }

    // Update with cleaned-up timestamps even if blocked to save memory
    this.clientTimestamps.set(clientId, validTimestamps);
    return false; // Access denied (Rate limit exceeded)
  }
}

// --- Example Usage ---
const limiter = new SlidingWindowRateLimiter(1, 3000); // 3 requests allowed every 2 seconds
const userId = "user_123";

console.log(limiter.isAllowed(userId)); // true (Req 1)
console.log(limiter.isAllowed(userId)); // true (Req 2)
console.log(limiter.isAllowed(userId)); // true (Req 3)
console.log(limiter.isAllowed(userId)); // false (Req 4 - Blocked!)

// Wait 2.1 seconds to let the window slide past old logs
setTimeout(() => {
  console.log(limiter.isAllowed(userId)); // true (Allowed again!)
}, 2100);
