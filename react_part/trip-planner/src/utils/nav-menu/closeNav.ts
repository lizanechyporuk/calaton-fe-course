function closeNav(id: string) {
  const element = document.getElementById(id);
  const blur = document.getElementById("blur");
  if (element) {
    element.style.width = "0";
    if (blur) {
      blur.style.display = "none";
    }
  } else {
    console.log(`Element with id "${id}" not found.`);
  }
}

export { closeNav };
