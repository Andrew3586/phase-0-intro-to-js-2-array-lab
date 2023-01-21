const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (charlie) {
  cats.push(charlie);
}



function  destructivelyRemoveLastCat (charlie) {

cats.pop(charlie)
}

function destructivelyPrependCat(charlie) {

cats.unshift(charlie)


}

function destructivelyRemoveFirstCat() {

  cats.shift()
}

function appendCat (name) {

  return [...cats, name];
}

function   prependCat(name) {

  return [name, ...cats];
}

function  removeLastCat(name) {


}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}

