const blank = (value: unknown): value is undefined | null => {
  if(value === null || value === undefined) {
    return true;
  }
  if(typeof value === "string") {
    return value.trim().length === 0;
  }
  if(Array.isArray(value)) {
    return value.length === 0;
  }
  if(typeof value === "object") {
    if(Object.getPrototypeOf(value) !== Object.prototype) {
      return false
    }
    return Object.keys(value).length === 0;
  }

  return false;
}

export default blank;
