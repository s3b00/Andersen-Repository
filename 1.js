const number = prompt("Введите число для конвертации в другую систему счисления:")
const base = prompt("Система счисления:")

try {
    console.log(parseInt(number).toString(base))
} catch {   
    console.log("Некорректный ввод!")
}