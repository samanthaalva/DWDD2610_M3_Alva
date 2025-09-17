//Inject current year into HTML footer.
const year = new Date();
console.log(year.getFullYear());
document.querySelector('#year').textContent = year.getFullYear();