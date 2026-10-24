class LRUCache {
  #capacity;
  #cache = new Map(); // insertion order = recency (oldest first)

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new RangeError("capacity must be a positive integer");
    }
    this.#capacity = capacity;
  }

  get(key) {
    if (!this.#cache.has(key)) return -1;
    const value = this.#cache.get(key);
    this.#touch(key, value);
    return value;
  }

  put(key, value) {
    if (!this.#cache.has(key) && this.#cache.size === this.#capacity) {
      this.#evictOldest();
    }
    this.#touch(key, value);
  }

  #touch(key, value) {   // mark as most recently used
    this.#cache.delete(key);
    this.#cache.set(key, value);
  }

  #evictOldest() {
    const oldest = this.#cache.keys().next().value;
    this.#cache.delete(oldest);
  }
}