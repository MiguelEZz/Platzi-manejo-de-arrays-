//MAP ES UNA FUNCION  
//ITERA POR CADA ELEMENTO DE ALGUN ARRAY.

//MAP EJECUTA ALGUNA FUNCION POR CADA ELEMENTO DE UN ARRAY
//Y EL RETURN LO GUARDA DENTRO DE OTRO ARRAY NUEVO, (IMNUTABLE no comparte referencia en memoria con el original)
//Y DESPUES DE TERMINAR DE ITERAR TE DEVUELVE EL NUEVO ARRAY.

    //el nuevo array tendra exactamente la misma cantidad de elementos que
    //el original.

//EJEMPLO:
const letters = ["a", "b", "c"]

//CON FOR
const newArray = [];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + "eso tillin");
    //devolvemos un nuevo array inmutable, ya que no comparte referencia en memoria
    //con el original.
}

//CON MAP
const newArray2 = letters.map(i => i + "eso tilin")
    //es imnutable, no hace ninguna transformacion al array original
    //y no comparten referencias en memoria





console.log(letters, newArray2)  //pal MAP, nos ahora 4 lineas de codigo
console.log(letters, newArray) //pal for



///------------------------------------------


//el playground se trataba de usar el map para+
//devolver todos los elementos de un array multiplicados por 2.

export function multiplyElements(array) {
    const thiso = []
 
    array.map(i => thiso.push(i * 2))
    return thiso
 }


 

///------------------------------------------


//MAP RELOADED

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

// orders.map(i => )