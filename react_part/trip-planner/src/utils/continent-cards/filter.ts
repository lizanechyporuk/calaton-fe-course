function filter(activeEl: string, data: any) {
  return data.filter((item: object) =>
    Object.values(item)[0].toLowerCase().includes(activeEl)
  );
}

export { filter };
