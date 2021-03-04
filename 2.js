try {
    const a = +prompt("Число А:")
    const b = +prompt("Число B:")
    
    console.log(`Ответ: ${a+b},${a/b}`)
} catch {
    console.log("Некорректный ввод!")
}