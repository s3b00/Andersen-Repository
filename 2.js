try {
    const a = parseInt(prompt("Число А:"))
    if (isNaN(a)) throw new Error()

    const b = parseInt(prompt("Число B:"))
    if (isNaN(b)) throw new Error()
    
    console.log(`Ответ: ${a+b}, ${a/b}`)
} catch {
    console.log("Некорректный ввод!")
}


