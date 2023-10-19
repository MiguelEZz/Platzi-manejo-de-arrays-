//FOR EACH
//ejecuta alguna funcion con cada elemento de un array como parametro


//esto mismo se puede lograr con un ciclo FOR
//pero FOREACH nos ofrece un codigo mucho mas reducido y legible
//que un FOR.


//EJM
const letters = ["a", "b", "c"]

    //CON FOR
for (let i = 0; i < letters.length; i++){
    const element = letters[i];
    console.log("for",element)
};

    //CON FOREACH
letters.forEach(item => console.log("forEach", item));
