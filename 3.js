// функция создает пустой объект без прототипа.

empty_with_prototype = {}
console.log(empty_with_prototype)
console.log(empty_with_prototype.constructor)

function createPrototypelessObject() {
    return Object.create(null)
}

empty_prototypeless = createPrototypelessObject()
console.log(empty_prototypeless)
console.log(empty_prototypeless.constructor)
