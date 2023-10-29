// функция, принимает в качестве аргумента объект
// выводит в консоль ключи и значения собственных свойств
// не должна возвращать значение

function printOwnProperties(obj) {
    console.group(`${obj} own properties`)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`)
        }
    }
    console.groupEnd()
}

printOwnProperties(2)

a = {
    a_prop: 1
}
printOwnProperties(a)

b = Object.create(a)
b.b_prop = 2
printOwnProperties(b)