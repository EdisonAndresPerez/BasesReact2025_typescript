

                                //resolve    reject
const miPromesa = new Promise((correcta, rechazo) => {

    //tare asincrona
  setTimeout(() => {
    correcta("Quiero mi dinero!!!! -.-")
  }, 2000);



    rechazo(console.log("mi amigo se perdio con el dinero"))



});


miPromesa.then((miDinero) => {
    console.log(`tengo mi dinero ${miDinero} ` )
})
        //reason
.catch((razon) => {
    console.warn(razon)
})

.finally(() => {
    console.log("ni modo, a seguir con mi vida ")
})

///-------------------------



//http://?api_key=j4FicAKM7ELgQgAV0vSdubM48O9V3xVu