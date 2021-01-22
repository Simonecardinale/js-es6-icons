const icons = [
{
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},
{
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},
{
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},
{
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
}
];

const color = ["blue", "orange", "purple"];


//divido l'array principale in 3 in base al type

const arrayAnimal = icons.filter((element) => element.type == "animal");
const arrayVegetable = icons.filter((element) => element.type == "vegetable");
const arrayUser = icons.filter((element) => element.type == "user");

// stampo le icone nei box

const container = $('#container');

icons.forEach((element) => {
    const {name, family, prefix} = element;
    container.append (`
    <div class="box">
        <i class = "${family} ${prefix}${name}"></i>
    </div>
    `)
});

