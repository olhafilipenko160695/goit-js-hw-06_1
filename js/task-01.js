
//* Кількість категорій в ul#categories

const items = document.querySelectorAll('.item');
console.log("Number of categories:" + items.length);

//* текст заголовку елемента і кількість елементів в категорії

const newArray = [...items];
newArray.forEach(element => {
    console.log("Category:" + element.firstElementChild.textContent);
    console.log("Elements:" + element.lastElementChild.children.length);
});

