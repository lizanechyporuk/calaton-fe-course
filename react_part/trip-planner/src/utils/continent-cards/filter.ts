function filter(activeEl: string, data: any) {
  return activeEl === "All"
    ? data
    : data.filter((item: any) => Object.keys(item).includes(activeEl));
}

export { filter };
