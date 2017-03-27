var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
var newName = prompt ('podaj nowe imię');

if (allNames.indexOf(newName) === -1) {
  var x = allNames.push(newName);
  alert (allNames);
  //console.log (allNames);
} else {
  alert ('Błąd - wartość się powtarza')
  //console.log ('Błąd - wartość się powtarza');
}


