var evens = [0, 2, 4, 6, 8, 10]

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}


function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`
}

var animals = ["dog", "cat", "squirrel"]

changeCompletely(animals, changeCompletely)
console.log(animals)
