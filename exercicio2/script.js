//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const array1 = [56,8,7,3,95]
console.log("Array números", array1)

const array2 = ["banana", "maçã", "limão"]
console.log("Array string", array2)

const array3 = ["Data de nascimento", 1989, true]
console.log("Array Mista", array3)

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("Impressão array1",array1.length)
console.log("Impressão array2",array2.length)
console.log("Impressão array3",array1.length)


//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("Impressão 1º ítem do array1",array1 [0])

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log("Tem o número 8?", array1.includes(8))
console.log("Você nasceu em 1990?", array3.includes(1990))
