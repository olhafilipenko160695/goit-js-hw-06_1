const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');

for (var i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li'); // Створюємо  <li> 
  item.textContent = ingredients[i]; // Встановлюємо текст для <li> 
  item.classList.add('item');// Встановлюємо клас для <li>
  container.appendChild(item);
}