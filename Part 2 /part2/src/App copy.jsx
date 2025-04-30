/*var animals = [
  { name: 'kisu', species: 'cat' },
  { name: 'turre', species: 'dog' },
  { name: 'miukuli', species: 'cat' }
]

const nimet = animals.map((animal) => animal.name + ' is a ' + animal.species)
console.log(nimet)

const listaaNimet = nimet.map((name, i) => (
  <p key={i}>{name}</p>
));

var kissat = animals.filter((animal) => animal.species === 'cat')
console.log(kissat)



const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

{
  'mark johansson': [
    { name: 'waffle iron', price: '80', quantity: '2' },
    { name: 'blender', price: '200', quantity: '1' },
    { name: 'knife', price: '10', quantity: '4' },
  ],
    'Nikita Smith': [
      { name: 'waffle iron', price: '80', quantity: '1' },
      { name: 'knife', price: '10', quantity: '2' },
      { name: 'pot', price: '20', quantity: '3' },
    ],
}
/*
let summa = 0;
for (let i = 0; i < orders.length; i++) {
  summa += orders[i].amount;
}
*/
//console.log('hello ', sum, order)
const summa = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(summa)
/*{
  kissat.map((cat, i) => (
    <p key={i}>{cat.name}</p>
  ))
}
<p>{listaaNimet}</p>
*/
const AppCopy = () => (
  <div>

  </div>
)

export default AppCopy