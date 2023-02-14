function foo() {
  let key = document.querySelector(".list");

  if (key.classList.contains("mystyle")) {
    key.classList.remove("mystyle");
  } else {
    key.classList.add("mystyle");
  }

  console.log(key.classList);
}
