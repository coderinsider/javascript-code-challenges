function vegetaianApp(menu) {
	const menuNode = document.querySelector("#menu");
	const vegetaianOptions = menu.filter(option => option.isVegetarian == true)
	vegetaianOptions.forEach(opt => {
		let dish = document.createElement('li');
		dish.textContent = opt.name;
		menuNode.appendChild(dish);
	});
}
const menu = [
	{
		name: "Chicken",
		isVegetarian: false
	},
	{
		name: 'Pig',
		isVegetarian: false
	},
	{
		name: "Fish",
		isVegetarian: true
	}
];

vegetaianApp(menu)