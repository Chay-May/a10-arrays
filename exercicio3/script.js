const array1 = [56,8,7,3,95]
console.log("Array números", array1)

const array2 = ["banana", "maçã", "limão"]
console.log("Array string", array2)

const array3 = ["Data de nascimento", 1989, true]
console.log("Array Mista", array3)


//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
//CÓPIA DO ARRAY 1 USANDO SLICE
const array1Copia = array1.slice()
array1Copia.push(3)
console.log(array1)
console.log("Cópia de array1 com SLICE, usando PUSH", array1Copia)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
const array2Copia = array2.slice()
array2Copia.pop()
console.log(array2)
console.log("Cópia de array2 com SLICE, usando POP", array2Copia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia
const array3Copia = array3.slice()
array3Copia.splice(1,1)
console.log(array3)
console.log("Cópia de array3 com SLICE, usando SPLICE", array3Copia)
