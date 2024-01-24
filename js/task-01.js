const categoriesList = document.getElementById("categories");
const categories = categoriesList.querySelectorAll("li.item");

console.log("Number of categories:", categories.length);

categories.forEach(category => {

const categoryName = category.querySelector("h2").textContent;
const categoryElements = category.querySelectorAll("ul li");

console.log(`\nCategory: ${categoryName}`);
console.log(`Elements: ${categoryElements.length}`);
});