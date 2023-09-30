
//* Кількість категорій в ul#categories
const items = document.querySelectorAll('.item');
console.log("Number of categories:" + items.length);

const newArray = [...items];

newArray.forEach(element => {
    console.log(element.firstElementChild);
    console.log("Elements:" + element.lastElementChild.children.length);
});

