function openNav(id: string) {
  const element = document.getElementById(id);
  const blur = document.getElementById("blur");
  if (element) {
    element.style.width = "calc(100% - 100px)";
    if (blur) {
      blur.style.display = "block";
    }
  } else {
    console.log(`Element with id "${id}" not found.`);
  }
}

export { openNav };
