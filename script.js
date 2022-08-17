const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
  document.body.classList.toggle("light")
  localStorage.setItem('theme', document.body.className)
});


let activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
    document.body.classList.toggle('light')
} else {
    document.body.classList.toggle(activeTheme)
};


if (activeTheme === 'dark') {
    checkbox.checked = true;
};

