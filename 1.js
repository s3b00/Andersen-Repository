try {
    const number = parseInt(prompt("Введите число для конвертации в другую систему счисления:"))
    const base =  parseInt(prompt("Система счисления:"))
    
    if (isNaN(number)) throw new Error()
    if (isNaN(base)) throw new Error()

    console.log((number).toString(base))
} catch (error) {   
    console.log("Некорректный ввод!")
}