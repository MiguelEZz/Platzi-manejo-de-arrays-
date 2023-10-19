//MUTABLE OR INMUTABLE


//nos referimos a estos conceptos cuando estamos decidiendo el estado que un array 
//pueda tener.

//---------------------------------------

//MUTABLE. alguna mutacion que se le haga al array, va a hacerce en el array 
//original, por tanto esto puede crear algunos problemas a futuro, ya que se 
// trata del array original
    
        //platz
    // mutable es aquella acción que cambia el valor en la referencia en memoria del elemento 
    // del array original, provocando que cambien el original y la copia.

//---------------------------------------

//INMUTABLE. alguna mutacion que se le haga al array, va a hacerce en una copia
//del array original, por tanto no va a traer problemas a fururo, ya que
//el original va a tener su logica, y la copia otra distinta

        //platz
    // Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del
    // original, provocando que el original siga igual.



//---------------------------------------

//PERO TENGAMOS CUIDADO A LA HORA DE COPIAR

//LOS ARRAY SON OBJETOS, CUANDO HACEMOS UNA 
//SHALLOW COPY, SOLO ESTAREMOS COPIANDO LAS REFERENCIAS EN MEMORIA DEL ARRAY

//POR TANTO SI SE MODIFICA LA COPIA(se va a modificar la referencia)
//SE VA A MODIFICAR EL ORIGINAL TAMBIEN(ya que este apunta a la misma referencia que fue cambiada)




//LOS ARRAYS DE VAN A LA DEAP MEMORY, YA QUE SON ELEMENTOS MAS COMPLEJOS
//AQUIS SE LLEGA CON REFERENCIA EN MEMORIA