// En esta práctica debéis crear una clase "User" con tres propiedades. Estas propiedades son "name", "money" y "showMeTheMoney".
// En la clase debe haber un constructor para establecer el valor de cada una de estas propiedades en el orden en el que se han mencionado.
// Una vez esté lista la clase tenéis que crear una instancia de dicha clase para cada uno de los usuarios que obtengáis del documento "users.json" usando el método fetch (al igual que hicistéis en el ejercicio 3).
// Al recorrer el array de usuarios, en cada iteración, debéis usar las propiedades "name" y "money" del usuario del json para añadirle sus valores al constructor en el parámetro que establezca el valor de la propiedad del objeto con el mismo nombre.
// Por ejemplo: Para instanciar el primer usuario de la lista haremos "new User(usuarioDelJson.name, usuarioDelJson.money, metodoDelusuario)".
// El tercer parámetro de cada objeto recibirá una función que sacará con un alert la frase "dinero del usuario" (opcionalmente podéis sustituir esta frase por el dinero que tiene el usuario de esa instancia). Esta función la declararéis fuera de la clase con el nombre "showMeTheMoneyFunc".
// Cada instancia de "User" se irá añadiendo en el array "users" con el método "push".
// Una vez hayáis añadido todas las instancias al array de usuarios, ejecutad el método "showMeTheMoney" del tercer usuario "Roberto".

const users = [];


class User{
  name;
  money;
  showMeTheMoney;

  constructor(name, money, showMeTheMoney){
    this.name = name;
    this.money = money;
    this.showMeTheMoney = showMeTheMoney
  }
}

data3 = (d) => {
  usuarios = [];
  console.log(d);
  for (let i=0; i<d.length; i++){
    usuarios[i] = new User(d[i].name, d[i].money, showMeTheMoney)
  }
  let usuarioR  = usuarios[2];
  console.log(usuarioR.showMeTheMoney(usuarioR));
}
showMeTheMoney = (s) => {
    alert(`${s.name} ${s.money}`);
}
data2 = () => {
  fetch('./users.json')
    .then(response => response.json())
    .then(data => data3(data));   
}

datosObtenidos = data2();

console.log(datosObtenidos);