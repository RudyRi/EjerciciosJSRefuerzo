const numerosPares = (event) => {
    const numeros = [10,5,8,7,3]
    const pares = []
    for(let i=0;i<numeros.length;i++){
        if(numeros[i]%2 == 0){
            pares.push(numeros[i])
        }
    }
    console.log(pares)
}

//escribe un codigo que detecte si un texto es un palindromo
const palindromo = (event) => {
    const texto = "anita lava la tina"
    let sinEspacios = []
    for(let i=0;i<texto.length;i++){
        if(texto[i] !== " " && texto[i] !== ""){
            sinEspacios[i] = texto[i]
        }
    }
    sinEspacios = sinEspacios.join('')
    sinEspacios = sinEspacios.split('')
    let suma= 1
    for(let i=0;i<sinEspacios.length-1;i++){
        largo = sinEspacios.length-1
        if(sinEspacios[i] == sinEspacios[largo-i]){
            largoConsola= largo-i
            suma++
        }
    }
    if(suma == sinEspacios.length){
        console.log("Este texto es un palindromo")
    }
    else{
        console.log("Este texto NO es un palindromo")
    }
}