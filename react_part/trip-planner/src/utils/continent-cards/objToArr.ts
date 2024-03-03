function objToArr(obj: any) {
  if (obj && typeof obj === "object") {
    const arr = Object.values(obj);
    return arr;
  } else {
    console.error("Fetched data is not an object:", obj);
    return [];
  }
}

export { objToArr };
