//------------------

const nombresPersonas = ['goku', 'vegeta', 'gohan', 'bulma']

const [, , , pbulma] = nombresPersonas

console.log({pbulma})

const returnArregloFn = () => {
    return ['ABC', 123] as const;
}

const [numbers, letters] = returnArregloFn();
console.log(numbers + 100)



//------------------
//Tarea 
//------------------

// const useState = () => {
//    return ['HOLA', () => console.log('ADIOS') ] as const,
// }
//
//console.log(useState)


const useState = (value: string) => {
    return [ 
        value,
         (newValue: string) => {
             console.log(newValue) 
            },
        ] as const ;
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"