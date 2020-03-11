// Función realizada por Aleix Maqueda.

let myUsers = [
  { name: "James", surname: "Heatfield", age: 25, savings: 25000 },
  { name: "Luke", surname: "Brownie", age: 55, savings: 75000 },
  { name: "Arnold", surname: "Logan", age: 16, savings: 500 }
];

// Con esta función podemos aplicar a cualquier campo un orden ascendente solo variando el campo deseado.
// Este test ha sido probado en el sandbox gratuito "www.playcode.io", si se prueba en otro, hay posibilidad
// de que alguno no funcione debido a la colisión de funciones realizadas (es decir, si se deja todo sin comentar
// es posible que se ordene solo por uno de ellos, ya que estan todos en funcionamiento).

function sortAscendentiName(a,b) {
return ((a.name == b.name) ? 0 : ((a.name > b.name) ? 1 : -1));
}
console.log("Ordena ascendentemente por nombre");
console.log(myUsers.sort(sortAscendentiName));



function sortAscendentiSurname(a,b) {
return ((a.surname == b.surname) ? 0 : ((a.surname > b.surname) ? 1 : -1));
}
console.log("Ordena ascendentemente por apellido");
console.log(myUsers.sort(sortAscendentiSurname));



function sortAscendentiAge(a,b) {
return ((a.age == b.age) ? 0 : ((a.age > b.age) ? 1 : -1));
}
console.log("Ordena ascendentemente por edad");
console.log(myUsers.sort(sortAscendentiAge));



function sortAscendentiSavings(a,b) {
return ((a.savings == b.savings) ? 0 : ((a.savings > b.savings) ? 1 : -1));
}
console.log("Ordena ascendentemente por ahorros");
console.log(myUsers.sort(sortAscendentiSavings));
